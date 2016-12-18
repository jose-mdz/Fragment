/**
 * Created by josemanuel on 10/25/16.
 */
module latte {

    /**
     *
     */
    export class CustomerView extends CustomerViewBase {

        //region Static

        /**
         * Prompts for a user and an address
         * @param charge
         * @param callback
         * @returns {latte.CustomerView}
         */
        static prompt(charge: Charge, callback: () => any): CustomerView{
            // Create view
            let cv = new CustomerView();

            cv.charge = charge;

            // Show dialog
            let d = ElementDialog.showElement(cv);

            // Handle callback
            cv.submitted.add(() => {

                d.close();

                if(callback) callback();
            });

            return cv;
        }

        //endregion

        //region Fields
        //endregion

        /**
         *
         */
        constructor() {
            super();

            this.addressElement.add(this.addressView);
        }

        //region Private Methods
        //endregion

        //region Methods

        /**
         * Handles click on continue button
         */
        continue_Click(){

            // let c = this.customer || new Customer();
            //
            // c.firstname = this.addressView.txtFirstName.text;
            // c.lastname = this.addressView.txtLastName.text;
            // c.email = this.txtEmail.text;
            //
            // this.customer = c;


            this.onSubmitted();

        }

        /**
         * Raises the <c>charge</c> event
         */
        onChargeChanged(){
            if(this._chargeChanged){
                this._chargeChanged.raise();
            }

            if(this.charge) {
                let ship = !this.charge.isNoShipping;
                this.shippingTitle.visible         = ship;
                this.addressView.inCity.visible    = ship;
                this.addressView.inCountry.visible = ship;
                this.addressView.inLine1.visible   = ship;
                this.addressView.inLine2.visible   = ship;
                this.addressView.inLine3.visible   = ship;
                this.addressView.inState.visible   = ship;
                this.addressView.inZip.visible     = ship;
            }
        }

        /**
         * Raises the <c>customer</c> event
         */
        onCustomerChanged(){
            if(this._customerChanged){
                this._customerChanged.raise();
            }

            if(this.customer) {

                this.bind(this.customer);
            }

        }

        /**
         * Raises the <c>submitted</c> event
         */
        onSubmitted(){
            if(this._submitted){
                this._submitted.raise();
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
        private _customerChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the customer property changes
         *
         * @returns {LatteEvent}
         */
        get customerChanged(): LatteEvent{
            if(!this._customerChanged){
                this._customerChanged = new LatteEvent(this);
            }
            return this._customerChanged;
        }


        /**
         * Back field for event
         */
        private _submitted: LatteEvent;

        /**
         * Gets an event raised when the form is submitted
         *
         * @returns {LatteEvent}
         */
        get submitted(): LatteEvent{
            if(!this._submitted){
                this._submitted = new LatteEvent(this);
            }
            return this._submitted;
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

        /**
         * Property field
         */
        private _customer: Customer = null;

        /**
         * Gets or sets the customer of the view
         *
         * @returns {Customer}
         */
        get customer(): Customer{
            return this._customer;
        }

        /**
         * Gets or sets the customer of the view
         *
         * @param {Customer} value
         */
        set customer(value: Customer){

            // Check if value changed
            let changed: boolean = value !== this._customer;

            // Set value
            this._customer = value;

            // Trigger changed event
            if(changed){
                this.onCustomerChanged();
            }
        }

        //endregion

        //region Components
        /**
         * Field for addressView property
         */
        private _addressView: AddressView;

        /**
         * Gets the address view
         *
         * @returns {AddressView}
         */
        get addressView(): AddressView {
            if (!this._addressView) {
                this._addressView = new AddressView();
            }
            return this._addressView;
        }

        //endregion

    }

}