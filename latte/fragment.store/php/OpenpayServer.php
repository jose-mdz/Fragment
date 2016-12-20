<?php
/**
 * Created by PhpStorm.
 * User: josemanuel
 * Date: 10/14/16
 * Time: 20:50
 */
class OpenpayServer{

    /**
     * Makes an OpenPay transaction of the specified method.
     * If method is card, $token and $device_session_id are required.
     *
     * @remote
     * @param string $method card, bank_account or store
     * @param int $idcharge
     * @param string $token
     * @param string $device_session_id
     * @return Transaction
     * @throws Exception
     */
    public static function makeTransaction($method, $idcharge, $token = '', $device_session_id = ''){

        // Validate method
        if(array_search($method, array('card', 'bank_account', 'store')) === false){
            throw new Exception("Method is not valid: $method");
        }

        // Get payment
        $charge = Charge::byAuto($idcharge);

        // Wallet
        $w = Wallet::byPayMethod($charge->idpaymethod);

        // Customer
        $customer = Customer::byAuto($charge->idcustomer);

        // Create Transaction
        $transaction = new Transaction();
        $transaction->mode = Transaction::MODE_CHARGED_ON_DEMAND;
        $transaction->idcharge = $idcharge;

        // Create OpenPay object
        $openpay = Openpay::getInstance($w->accountid, $w->accountsecret);

        $chargeRequest = array(
            'method' => $method,
            'amount' => $charge->amount,
            'currency' => $w->currency,
            'description' => $charge->description ? $charge->description : "Charge #$charge->idcharge",
            'order_id' => $charge->idcharge);

        // Card specific fields
        if($method == 'card'){
            $chargeRequest['device_session_id'] = $device_session_id;
            $chargeRequest['source_id'] = $token;
            $chargeRequest['customer'] = array(
                'name' => $customer->firstname,
                'last_name' => $customer->lastname,
                'email' => $customer->email);
        }

        try{
            // Make charge
            $charge_opay = $openpay->charges->create($chargeRequest);

            $extra_field_name = $method == 'card' ? 'card' : 'payment_method';

            // Result
            $result = array();
            $result[$extra_field_name] = array();

            // Fields to retrieve
            $result_fields = explode(",",'id,amount,authorization,method,operation_type,transaction_type,status,currency,exchange_rate,creation_data,operation,date,description,error_message,order_id');

            if($method == 'card'){
                $extra_fields = explode(",", 'type,brand,allows_charges,allows_payouts,creation_date,bank_name,bank_code,customer_id');

            }else if ($method == 'bank_account'){
                $extra_fields = explode(',', 'type,bank,clabe,name');

            }else{
                $extra_fields = explode(',', 'type,reference,paybin_reference,barcode_url,barcode_paybin_url');
            }

            // Copy result files
            foreach($result_fields as $f){ $result[$f] = $charge_opay->{$f}; }
            foreach($extra_fields as $f){ $result[$extra_field_name][$f] = $charge_opay->{$extra_field_name}->{$f}; }

            // Mark Success
            $transaction->success = 1;

            // Serialize charge
            $transaction->data = json_encode($result);

            $charge->setStatus(Charge::$STATUS_PAID);

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

            $charge->setStatus(Charge::$STATUS_PAYMENT_FAILED);
        }

        $transaction->insert();


        return $transaction;
    }

}