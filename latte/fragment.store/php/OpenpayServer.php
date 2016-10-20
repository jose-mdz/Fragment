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
     * @return any
     */
    public static function chargeNow($payment_guid, $token, $device_session_id){

        // Get payment
        $p = Payment::byGuid($payment_guid);

        // Wallet
        $w = Wallet::byDriver('fragment.openpay');

        // Create openpay object
        $openpay = Openpay::getInstance($w->accountid, $w->accountsecret);

        $customer = array(
            'name' => 'Juan',
            'last_name' => 'Vazquez Juarez',
            'phone_number' => '4423456723',
            'email' => 'juan.vazquez@empresa.com.mx');

        $chargeRequest = array(
            'method' => 'card',
            'source_id' => $token,
            'amount' => 100,
            'currency' => 'MXN',
            'description' => 'Cargo inicial a mi merchant',
            'order_id' => 'oid-00051',
            'device_session_id' => $device_session_id,
            'customer' => $customer);

        $charge = $openpay->charges->create($chargeRequest);

        return $charge;
    }
}