<?php
/**
 * Created by PhpStorm.
 * User: josemanuel
 * Date: 10/14/16
 * Time: 20:50
 */
class OpenpayServer{

    /**
     * Makes the credit card transaction for the specified
     * http://www.openpay.mx/docs/api/?php#con-id-de-tarjeta-o-token
     *
     * @remote
     * @param number $idcharge Id of charge with information
     * @param string $token Token with pre-preprocessed data of the credit card
     * @param string $device_session_id
     * @return Transaction
     */
    public static function makeCCTransaction($idcharge, $token, $device_session_id){

        // Get payment
        $charge = Charge::byAuto($idcharge);

        // Wallet
        $w = Wallet::byAuto($charge->idwallet);

        // Customer
        $customer = Customer::byAuto($charge->idcustomer);

        // Create Transaction
        $transaction = new Transaction();
        $transaction->mode = Transaction::MODE_CHARGED_ON_DEMAND;
        $transaction->idcharge = $idcharge;


        // Create openpay object
        $openpay = Openpay::getInstance($w->accountid, $w->accountsecret);

        // Customer Record (OpenPay)
        $customer_opay = array(
            'name' => $customer->firstname,
            'last_name' => $customer->lastname,
            'email' => $customer->email);

        $chargeRequest = array(
            'method' => 'card',
            'source_id' => $token,
            'amount' => $charge->amount,
            'currency' => $w->currency,
            'description' => $charge->description ? $charge->description : "Charge #$charge->idcharge",
            'order_id' => $charge->idcharge,
            'device_session_id' => $device_session_id,
            'customer' => $customer_opay);

        try{
            // Make charge
            $charge_opay = $openpay->charges->create($chargeRequest);

            // Result
            $result = array();
            $result['card'] = array();

            // Fields to retrieve
            $result_fields = explode(",",'id,amount,authorization,method,operation_type,transaction_type,status,currency,exchange_rate,creation_data,operation,date,description,error_message,order_id');
            $card_fields = explode(",", 'type,brand,allows_charges,allows_payouts,creation_date,bank_name,bank_code,customer_id');

            // Copy result files
            foreach($result_fields as $f){ $result[$f] = $charge_opay->{$f}; }
            foreach($card_fields as $f){ $result['card'][$f] = $charge_opay->{'card'}->{$f}; }

            // Mark Success
            $transaction->success = 1;

            // Serialize charge
            $transaction->data = json_encode($result);

        }catch(OpenpayApiTransactionError $e){

            // Mark Failure
            $transaction->success = 0;

            // Serialize error
            $transaction->data = json_encode(array(
                'category' => $e->getCategory(),
                'description' => $e->getDescription(),
                'http_code' => $e->getHttpCode(),
                'error_code' => $e->getErrorCode(),
                'request_id' => $e->getRequestId(),
                'fraud_rules' => $e->{'fraud_rules'}
            ));
        }

        $transaction->insert();


        return $transaction;
    }
}