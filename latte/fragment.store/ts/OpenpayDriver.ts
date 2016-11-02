/**
 * Created by josemanuel on 10/14/16.
 */
module latte {

    declare var OpenPay: any;

    /**
     *
     */
    export class OpenpayDriver extends WalletDriver {

        //region Static

        //endregion

        //region Fields
        //endregion

        /**
         *
         */
        constructor() {
            super();
        }

        //region Private Methods
        //endregion

        //region Methods

        /**
         * Get UI for payment method
         */
        getPayMethodUI(m: PayMethod): HTMLElement{
            return (new CreditCardView()).element;
        }

        /**
         * Executes the charge of the wallet
         * @param charge
         */
        executeCharge(charge: Charge){

            // Load scripts
            _include("https://openpay.s3.amazonaws.com/openpay.v1.min.js", () => {

                _include("https://openpay.s3.amazonaws.com/openpay-data.v1.min.js", () => {
                    // Set charge data after scripts are loaded
                    this.charge = charge;

                    if(!this.charge.isCustomerSet) {

                        // // Ask for customer
                        // CustomerView.prompt((customer: Customer) => {
                        //
                        //     // Got customer
                        //     log("Customer:");
                        //     log(customer);
                        //
                        //     this.charge.idcustomer = customer.idcustomer;
                        //
                        //     this.charge.save(() => {
                        //
                        //         if(this.charge.isAddressNecessary) {
                        //
                        //             // Ask for address
                        //             AddressView.prompt(customer, (a: Address) => {
                        //
                        //                 log("Address:");
                        //                 log(a);
                        //
                        //                 // Set as delivery address
                        //                 this.charge.idaddressdelivery = a.idaddress;
                        //                 this.charge.save(() => {
                        //
                        //                     // Ask for credit card
                        //                     OpenPayCCView.prompt(customer, (card: Card, token: string) => {
                        //
                        //                         //TODO: AQUI ME QUEDE
                        //                         // send card to make transaction
                        //                         log("Card:");
                        //                         log(card);
                        //
                        //                         OpenpayServer.makeTransaction('card', charge.idcharge,
                        //                             token, this.deviceSessionId).send((t: Transaction) => {
                        //                             log(t);
                        //                         });
                        //
                        //                     });
                        //
                        //                 });
                        //             });
                        //         }
                        //
                        //     });
                        //
                        //
                        // });
                    }else {
                        //TODO: not implemented
                        throw "Not implemented: When user is already set";
                        //ElementDialog.showElement(this.creditCardView);
                    }
                });


            });
        }

        /**
         * Raises the <c>charge</c> event
         */
        onChargeChanged(){
            if(this._chargeChanged){
                this._chargeChanged.raise();
            }

            if(this.charge) {
                if(this.charge.isWalletSet) {
                    this.wallet = this.charge.wallet;
                }
            }
        }

        /**
         * Raises the <c>wallet</c> event
         */
        onWalletChanged(){
            if(this._walletChanged){
                this._walletChanged.raise();
            }

            if(this.wallet) {
                OpenPay.setId(this.wallet.accountid);
                OpenPay.setApiKey(this.wallet.accountpublic);
                OpenPay.setSandboxMode(Payment.sandbox);

                // Aparently, this id is automatical inserted in the form
                this.deviceSessionId = OpenPay.deviceData.setup("payment-form", "deviceIdHiddenFieldName");
            }
        }
        //endregion

        //region Events

        /**
         * Back field for event
         */
        private _chargeChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the charge property changes
         *
         * @returns {LatteEvent}
         */
        get chargeChanged(): LatteEvent{
            if(!this._chargeChanged){
                this._chargeChanged = new LatteEvent(this);
            }
            return this._chargeChanged;
        }

        /**
         * Back field for event
         */
        private _walletChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the wallet property changes
         *
         * @returns {LatteEvent}
         */
        get walletChanged(): LatteEvent{
            if(!this._walletChanged){
                this._walletChanged = new LatteEvent(this);
            }
            return this._walletChanged;
        }
        //endregion

        //region Properties

        /**
         * Property field
         */
        private _charge: Charge = null;

        /**
         * Gets or sets the charge to execute
         *
         * @returns {Charge}
         */
        get charge(): Charge{
            return this._charge;
        }

        /**
         * Gets or sets the charge to execute
         *
         * @param {Charge} value
         */
        set charge(value: Charge){

            // Check if value changed
            let changed: boolean = value !== this._charge;

            // Set value
            this._charge = value;

            // Trigger changed event
            if(changed){
                this.onChargeChanged();
            }
        }

        /**
         * Property field
         */
        private _deviceSessionId: string = null;

        /**
         * Gets or sets the device session id
         *
         * @returns {string}
         */
        get deviceSessionId(): string {
            return this._deviceSessionId;
        }

        /**
         * Gets or sets the device session id
         *
         * @param {string} value
         */
        set deviceSessionId(value: string) {
            this._deviceSessionId = value;
        }

        /**
         * Property field
         */
        private _token: string = null;

        /**
         * Gets or sets the token of the transaction
         *
         * @returns {string}
         */
        get token(): string {
            return this._token;
        }

        /**
         * Gets or sets the token of the transaction
         *
         * @param {string} value
         */
        set token(value: string) {
            this._token = value;
        }

        /**
         * Property field
         */
        private _wallet: Wallet = null;

        /**
         * Gets or sets the wallet of the driver
         *
         * @returns {Wallet}
         */
        get wallet(): Wallet{
            return this._wallet;
        }

        /**
         * Gets or sets the wallet of the driver
         *
         * @param {Wallet} value
         */
        set wallet(value: Wallet){

            // Check if value changed
            let changed: boolean = value !== this._wallet;

            // Set value
            this._wallet = value;

            // Trigger changed event
            if(changed){
                this.onWalletChanged();
            }
        }
        //endregion

        //region Components

        //endregion

    }

}