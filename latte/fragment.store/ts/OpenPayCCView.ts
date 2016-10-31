/**
 * Created by josemanuel on 10/12/16.
 */
module latte {

    declare var OpenPay: any;

    /**
     *
     */
    export class OpenPayCCView extends OpenPayCCViewBase {

        //region Static
        /**
         * Prompts for a credit card
         * @param callback
         */
        static prompt(customer: Customer, callback: (c: Card, token: string) => any = null){
            let v = new OpenPayCCView();
            let d = ElementDialog.showElement(v);

            v.cardSaved.add(() => {

                d.close();

                if(callback) callback(v.card, v.token);

            });

            v.card = new Card();
            v.card.idcustomer = customer.idcustomer;

        }
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
         * Handler
         */
        btnPay_Click(e){

            OpenPay.token.extractFormAndCreate('payment-form',

                // Success
                (response: any) => {

                    this.token = response.data.id;

                    // this.tokenId.element.value = token;
                    log("Token!: " + this.token);

                    let card = this.card || new Card();

                    card.number  = this.txtCardNumber.text                      ;
                    card.holder  = this.txtHolderName.text                      ;
                    card.cvv2    = this.txtCvv2.text                            ;
                    card.month   = parseInt(this.txtExpirationMonth.text, 10)   ;
                    card.year    = parseInt(this.txtExpirationYear.text, 10)    ;

                    card.save(() => {
                        this.card = card;
                        this.onCardSaved();
                        this.onCardChanged();
                    });
                },

                // Failure
                (response: any) => {
                    var desc = response.data.description != undefined ? response.data.description : response.message;
                    alert("ERROR [" + response.status + "] " + desc);
                    this.btnPay.visible = true;
                });

        }

        /**
         * Raises the <c>card</c> event
         */
        onCardChanged(){
            if(this._cardChanged){
                this._cardChanged.raise();
            }

            if(this.card) {
                this.txtCardNumber.text = this.card.number;
                this.txtHolderName.text = this.card.holder;
                this.txtCvv2.text = this.card.cvv2;
                this.txtExpirationMonth.text = String(this.card.month || '');
                this.txtExpirationYear.text = String(this.card.year || '');
            }

        }
        //endregion

        //region Events

        /**
         * Back field for event
         */
        private _cardChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the card property changes
         *
         * @returns {LatteEvent}
         */
        get cardChanged(): LatteEvent{
            if(!this._cardChanged){
                this._cardChanged = new LatteEvent(this);
            }
            return this._cardChanged;
        }
        
        
        /**
         * Back field for event
         */
        private _cardSaved: LatteEvent;
        
        /**
         * Gets an event raised when the card is saved
         *
         * @returns {LatteEvent}
         */
        get cardSaved(): LatteEvent{
            if(!this._cardSaved){
                this._cardSaved = new LatteEvent(this);
            }
            return this._cardSaved;
        }
        
        /**
         * Raises the <c>cardSaved</c> event
         */
        onCardSaved(){
            if(this._cardSaved){
                this._cardSaved.raise();
            }
        }
        //endregion

        //region Properties

        /**
         * Property field
         */
        private _card: Card = null;

        /**
         * Gets or sets the card of the view
         *
         * @returns {Card}
         */
        get card(): Card{
            return this._card;
        }

        /**
         * Gets or sets the card of the view
         *
         * @param {Card} value
         */
        set card(value: Card){

            // Check if value changed
            let changed: boolean = value !== this._card;

            // Set value
            this._card = value;

            // Trigger changed event
            if(changed){
                this.onCardChanged();
            }
        }

        /**
         * Property field
         */
        private _token: string = null;

        /**
         * Gets or sets the token generated for the card
         *
         * @returns {string}
         */
        get token(): string {
            return this._token;
        }

        /**
         * Gets or sets the token generated for the card
         *
         * @param {string} value
         */
        set token(value: string) {
            this._token = value;
        }

        //endregion

    }

}