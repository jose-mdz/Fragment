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
         * Handles click on pay
         * @param e
         */
        btnPayCC_Click(e: MouseEvent){
            e.preventDefault();
            this.creditCardView.btnPay.visible = false;

            OpenPay.token.extractFormAndCreate('payment-form',
                // Success
                (response: any) => {


                    let token = this.token = response.data.id;

                    this.creditCardView.tokenId.element.value = token;
                    log("Token!: " + token);


                    OpenpayServer.chargeNow(this.payment.guid, this.token, this.deviceSessionId).send((r) => {
                        log(r)
                    });

                    //TODO: AQUI ME QUEDE, crear Payment, luego hacer cargo
                    // OpenpayServer.chargeNow()
                    //this.creditCardView.form.element.submit();
                },
                // Failure
                (response: any) => {
                    var desc = response.data.description != undefined ? response.data.description : response.message;
                    alert("ERROR [" + response.status + "] " + desc);
                    this.creditCardView.btnPay.visible = true;
                });
        }

        /**
         * Override. More like implement.
         * @param amount
         */
        charge(payment: Payment){

            this.payment = payment;

            // Load scripts
            _include([
                "https://openpay.s3.amazonaws.com/openpay.v1.min.js",
            ], () => {

                _include("https://openpay.s3.amazonaws.com/openpay-data.v1.min.js", () => {
                    // Go for the wallet
                    Wallet.byDriver(this.getDriverName()).send((w: Wallet) => {

                        this.wallet = w;

                        ElementDialog.showForElement(this.creditCardView);

                    });
                });


            });
        }

        /**
         * Should return the name of the driver
         */
        getDriverName(): string{
            return "fragment.openpay";
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
        private _payment: Payment = null;

        /**
         * Gets or sets the payment
         *
         * @returns {Payment}
         */
        get payment(): Payment {
            return this._payment;
        }

        /**
         * Gets or sets the payment
         *
         * @param {Payment} value
         */
        set payment(value: Payment) {
            this._payment = value;
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
         * Field for creditCardView property
         */
        private _creditCardView: OpenPayCCView;

        /**
         * Gets the credit card view
         *
         * @returns {OpenPayCCView}
         */
        get creditCardView(): OpenPayCCView {
            if (!this._creditCardView) {
                this._creditCardView = new OpenPayCCView();
                this._creditCardView.btnPay.addEventListener('click', (e) => this.btnPayCC_Click(e));
            }
            return this._creditCardView;
        }

        //endregion

    }

}