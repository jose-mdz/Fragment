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
            return this.cardView.element;
        }

        /**
         * Executes the charge of the wallet
         * @param charge
         */
        executeTransaction(method: PayMethod, charge: Charge, callback: (t: Transaction) => any){

            // Load Open Pay
            _include("https://openpay.s3.amazonaws.com/openpay.v1.min.js", () => {

                // Load Open Pay Extra Library (for some reason >:/)
                _include("https://openpay.s3.amazonaws.com/openpay-data.v1.min.js", () => {

                    // Set wallet and initialize library
                    this.wallet = method.wallet;

                    log("Extracting " + this.cardView.form.element.id);

                    // Generate token for card
                    OpenPay.token.extractFormAndCreate(this.cardView.form.element.id,

                        // Success
                        (response: any) => {

                            this.token = response.data.id;

                            // Got Token
                            log("Token!: " + this.token);

                            // Proceed to transaction
                            OpenpayServer.makeTransaction(method.option, charge.idcharge, this.token, this.deviceSessionId).send((t: Transaction) => {

                                // Calls back with transaction result
                                callback(t);
                            });

                        },

                        // Failure
                        (response: any) => {
                            // TODO: highlight fields in red or something
                            var desc = response.data.description != undefined ? response.data.description : response.message;
                            alert("ERROR [" + response.status + "] " + desc);
                        });
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
                this.deviceSessionId = OpenPay.deviceData.setup(this.cardView.form.element.getAttribute('id'), "deviceIdHiddenFieldName");
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
        /**
         * Field for cardView property
         */
        private _cardView: OpenPayCCView;

        /**
         * Gets the Credit Card View
         *
         * @returns {OpenPayCCView}
         */
        get cardView(): OpenPayCCView {
            if (!this._cardView) {
                this._cardView = new OpenPayCCView();
            }
            return this._cardView;
        }

        //endregion

    }

}