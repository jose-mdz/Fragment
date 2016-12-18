/**
 * Created by josemanuel on 11/1/16.
 */
module latte {

    /**
     *
     */
    export class ShippingView extends ShippingViewBase {

        //region Static
        static prompt(charge: Charge, callback: () => any){
            let v = new ShippingView();

            let d = ElementDialog.showElement(v);


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
         * Raises the <c>charge</c> event
         */
        onChargeChanged(){
            if(this._chargeChanged){
                this._chargeChanged.raise();
            }

            if(this.charge) {
                let charge = this.charge;
                let customer = this.charge.customer;
                let address = this.charge.shippingAddress;

                this.lblCustomer.text = sprintf("%s %s", this.charge.customer.firstname, this.charge.customer.lastname);
                this.lblLocation.text = [address.zip, address.city, address.state].join(' ');
                this.lblStreet.text = [address.line1, address.line2, address.line3].join(' ');
                this.lblCountry.text = address.country;
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
        //endregion

        //region Properties
        /**
         * Property field
         */
        private _charge: Charge = null;

        /**
         * Gets or sets the charge of the view
         *
         * @returns {Charge}
         */
        get charge(): Charge{
            return this._charge;
        }

        /**
         * Gets or sets the charge of the view
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
        //endregion

    }

}