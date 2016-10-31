/**
 * Created by josemanuel on 10/25/16.
 */
module latte {

    /**
     *
     */
    export class AddressView extends AddressViewBase {

        //region Static
        /**
         * Prompts for a customer and returns it
         * @param callback
         */
        static prompt(customer: Customer, callback: (c: Address) => any = null){

            // Create view
            let cv = new AddressView();

            // Show dialog
            let d = ElementDialog.showElement(cv);

            // Handle callback
            cv.addressSaved.add(() => {

                d.close();

                if(callback) callback(cv.address);
            });

            cv.address = new Address();
            cv.address.idcustomer = customer.idcustomer;



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
         * Handles click on continue
         */
        continue_Click(){

            let c = this.address || new Address();

            this.address.city    = this.txtCity.text    ;
            this.address.country = this.txtCountry.text ;
            this.address.line1   = this.txtLine1.text   ;
            this.address.line2   = this.txtLine2.text   ;
            this.address.line3   = this.txtLine3.text   ;
            this.address.name    = this.txtName.text    ;
            this.address.phone   = this.txtPhone.text   ;
            this.address.zip     = this.txtZip.text     ;

            c.save(() => {
                this.address = c;
                this.onAddressChanged();
                this.onAddressSaved();
            });

        }

        /**
         * Raises the <c>address</c> event
         */
        onAddressChanged(){
            if(this._addressChanged){
                this._addressChanged.raise();
            }

            if(this.address) {
                this.txtCity.text    = this.address.city;
                this.txtCountry.text = this.address.country;
                this.txtLine1.text   = this.address.line1;
                this.txtLine2.text   = this.address.line2;
                this.txtLine3.text   = this.address.line3;
                this.txtName.text    = this.address.name;
                this.txtPhone.text   = this.address.phone;
                this.txtZip.text     = this.address.zip;
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
        private _addressSaved: LatteEvent;

        /**
         * Gets an event raised when the address is saved
         *
         * @returns {LatteEvent}
         */
        get addressSaved(): LatteEvent{
            if(!this._addressSaved){
                this._addressSaved = new LatteEvent(this);
            }
            return this._addressSaved;
        }

        /**
         * Raises the <c>addressSaved</c> event
         */
        onAddressSaved(){
            if(this._addressSaved){
                this._addressSaved.raise();
            }
        }
        //endregion

        //region Properties
        /**
         * Property field
         */
        private _address: Address = null;

        /**
         * Gets or sets the address of the view
         *
         * @returns {Address}
         */
        get address(): Address{
            return this._address;
        }

        /**
         * Gets or sets the address of the view
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
        //endregion

    }

}