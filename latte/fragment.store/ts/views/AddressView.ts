/**
 * Created by josemanuel on 10/25/16.
 */
module latte {

    /**
     *
     */
    export class AddressView extends AddressViewBase {

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
         * Handles click on continue
         */
        saveAddress(callback: () => any = null){

            let c = this.address || new Address();

            c.city      = this.txtCity.text      ;
            c.country   = this.txtCountry.text   ;
            c.state     = this.txtState.text     ;
            c.line1     = this.txtLine1.text     ;
            c.line2     = this.txtLine2.text     ;
            c.line3     = this.txtLine3.text     ;
            c.name      = this.txtName.text      ;
            c.phone     = this.txtPhone.text     ;
            c.zip       = this.txtZip.text       ;
            c.firstname = this.txtFirstName.text ;
            c.lastname  = this.txtLastName.text  ;

            c.save(() => {
                this.address = c;
                this.onAddressChanged();
                this.onAddressSaved();

                if(_isFunction(callback)) {
                    callback();
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

            if(this.address) {
                this.txtCity.text      = this.address.city         ;
                this.txtCountry.text   = this.address.country      ;
                this.txtLine1.text     = this.address.line1        ;
                this.txtLine2.text     = this.address.line2        ;
                this.txtLine3.text     = this.address.line3        ;
                this.txtName.text      = this.address.name         ;
                this.txtPhone.text     = this.address.phone        ;
                this.txtZip.text       = this.address.zip          ;
                this.txtFirstName.text = this.address.firstname    ;
                this.txtLastName.text  = this.address.lastname     ;
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