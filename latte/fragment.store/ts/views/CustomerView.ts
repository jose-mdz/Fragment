/**
 * Created by josemanuel on 10/25/16.
 */
module latte {

    /**
     *
     */
    export class CustomerView extends CustomerViewBase {

        //region Static

        static prompt(charge: Charge, callback: (c: Customer, a: Address) => any){
            // Create view
            let cv = new CustomerView();

            cv.charge = charge;

            // Show dialog
            let d = ElementDialog.showElement(cv);

            // Handle callback
            cv.dataSaved.add(() => {

                d.close();

                if(callback) callback(cv.customer, cv.address);
            });
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

            let c = this.customer || new Customer();

            c.firstname = this.addressView.txtFirstName.text;
            c.lastname = this.addressView.txtLastName.text;
            c.email = this.txtEmail.text;

            c.save(() => {
                this.customer = c;
                this.onCustomerChanged();

                if(!this.charge.isNoShipping){
                    this.addressView.saveAddress(() => {

                        this.address = this.addressView.address;
                        this.onDataSaved();

                    });
                }else{
                    this.onDataSaved();
                }


            });

        }

        /**
         * Raises the <c>address</c> event
         */
        onAddressChanged(){
            if(this._addressChanged){
                this._addressChanged.raise();
            }
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
                this.txtEmail.text = this.customer.email;
            }

        }
        //endregion

        //region Events

        /**
         * Back field for event
         */
        private _addressChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the address property changes
         *
         * @returns {LatteEvent}
         */
        get addressChanged(): LatteEvent{
            if(!this._addressChanged){
                this._addressChanged = new LatteEvent(this);
            }
            return this._addressChanged;
        }

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
        private _dataSaved: LatteEvent;

        /**
         * Gets an event raised when data is saved
         *
         * @returns {LatteEvent}
         */
        get dataSaved(): LatteEvent{
            if(!this._dataSaved){
                this._dataSaved = new LatteEvent(this);
            }
            return this._dataSaved;
        }

        /**
         * Raises the <c>dataSaved</c> event
         */
        onDataSaved(){
            if(this._dataSaved){
                this._dataSaved.raise();
            }
        }

        //endregion

        //region Properties

        /**
         * Property field
         */
        private _address: Address = null;

        /**
         * Gets or sets the address
         *
         * @returns {Address}
         */
        get address(): Address{
            return this._address;
        }

        /**
         * Gets or sets the address
         *
         * @param {Address} value
         */
        set address(value: Address){

            // Check if value changed
            let changed: boolean = value !== this._address;

            // Set value
            this._address = value;

            // Trigger changed event
            if(changed){
                this.onAddressChanged();
            }
        }

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