<?php
/**
 * Created by PhpStorm.
 * User: josemanuel
 * Date: 10/14/16
 * Time: 20:50
 */
class OpenpayServer{



    /**
     * Makes the charge of he specified payment
     * http://www.openpay.mx/docs/api/?php#con-id-de-tarjeta-o-token
     *
     * @remote
     * @param string $payment_guid
     * @param string $token
     * @param string $device_session_id
     * @return string
     */
    public static function chargeNow($payment_guid, $token, $device_session_id){

        // Get payment
        $p = Payment::byGuid($payment_guid);


        // Wallet
        $w = Wallet::byDriver('fragment.openpay');

        // Create OpenPay object
        $openpay = Openpay::getInstance($w->accountid, $w->accountsecret);

        $customer = array(
            'name' => 'Juan',
            'last_name' => 'Vazquez Juarez',
            'phone_number' => '4423456723',
            'email' => 'juan.vazquez@empresa.com.mx');

        $chargeRequest = array(
            'method' => 'card',
            'source_id' => $token,
            'amount' => $p->amount,
            'currency' => 'MXN',
            'description' => 'Cargo inicial a mi merchant',
            'order_id' => $p->guid,
            'device_session_id' => $device_session_id,
            'customer' => $customer);

        $charge = $openpay->charges->create($chargeRequest);

        $params = explode(',', "id,amount,authorization,method,operation_type," .
            "transaction_type,card,status,currency,exchange_rate,creation_date," .
            "operation_date,description,error_message,order_id");

        $result = array();

        foreach($params as $p){
            $result[$p] = $charge->{$p};
        }

        return ($result);
    }
}