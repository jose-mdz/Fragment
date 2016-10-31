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
         * Prompts for a customer and returns it
         * @param callback
         */
        static prompt(callback: (c: Customer) => any = null){

            // Create view
            let cv = new CustomerView();

            // Show dialog
            let d = ElementDialog.showElement(cv);

            // Handle callback
            cv.customerSaved.add(() => {

                d.close();

                if(callback) callback(cv.customer);
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
        }

        //region Private Methods
        //endregion

        //region Methods

        /**
         * Handles click on continue button
         */
        continue_Click(){

            let c = this.customer || new Customer();

            c.firstname = this.txtFirstName.text;
            c.lastname = this.txtLastName.text;
            c.email = this.txtEmail.text;
            c.save(() => {
                this.customer = c;
                this.onCustomerChanged();
                this.onCustomerSaved();
            });

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
                this.txtLastName.text = this.customer.lastname;
                this.txtFirstName.text = this.customer.firstname;
            }

        }
        //endregion

        //region Events

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
        private _customerSaved: LatteEvent;

        /**
         * Gets an event raised when the customer is saved
         *
         * @returns {LatteEvent}
         */
        get customerSaved(): LatteEvent{
            if(!this._customerSaved){
                this._customerSaved = new LatteEvent(this);
            }
            return this._customerSaved;
        }

        /**
         * Raises the <c>customerSaved</c> event
         */
        onCustomerSaved(){
            if(this._customerSaved){
                this._customerSaved.raise();
            }
        }
        //endregion

        //region Properties
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

    }

}