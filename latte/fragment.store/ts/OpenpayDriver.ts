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
                    this.creditCardView.tokenId.element.value = response.data.id;
                    log("Token!: " + this.creditCardView.tokenId.element.value);
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
        charge(amount: number){

            // Load scripts
            _include([
                "https://openpay.s3.amazonaws.com/openpay.v1.min.js",
                "https://openpay.s3.amazonaws.com/openpay-data.v1.min.js"
            ], () => {

                // Go for the wallet
                Wallet.byDriver('fragment.openpay').send((w: Wallet) => {

                    this.wallet = w;

                    ElementDialog.showForElement(this.creditCardView);

                });
            });


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
                var deviceSessionId = OpenPay.deviceData.setup("payment-form", "deviceIdHiddenFieldName");
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