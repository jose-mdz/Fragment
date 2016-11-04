/**
 * Created by josemanuel on 11/1/16.
 */
module latte {

    /**
     *
     */
    export class PaymentMethodView extends PaymentMethodViewBase {

        //region Static
        static prompt(charge: Charge, callback: (t: Transaction) => any){

            let v = new PaymentMethodView(charge);

            let d = ElementDialog.showElement(v);

            v.transactionChanged.add(() => {
                if(v.transaction) {
                    callback(v.transaction);
                }
            })

        }
        //endregion

        //region Fields
        //endregion

        /**
         *
         */
        constructor(charge: Charge) {
            super();

            this.charge = charge;

            this.addressOptions.clear();
            this.addressOptions.add(this.addressContainer);

            this.loadMethods();
            this.loadAddresses();
        }

        //region Private Methods

        /**
         * Handles click on "pay now"
         */
        payNow_Click(){

            // Save method on charge
            this.charge.idpaymethod = this.selectedMethod.idpaymethod;

            // TODO: Check if custom address needs to be saved/validated

            this.charge.save(() => {
                this.selectedMethod.wallet.driver.executeTransaction(this.selectedMethod, this.charge, (t: Transaction) => {
                    this.transaction = t;
                });
            });

        }

        /**
         * Handles click on clickable method
         * @param clickable
         * @param content
         * @param m
         */
        methodClickable_Click(clickable: PaymentClickable, m: PayMethod){

            // Uncheck clickables
            this.payMethodOptions.findAll('.clickable-option').removeClass('checked');

            //region Remove Current Content
            let currentContent = this.payMethodOptions.querySelector('.content');

            if(currentContent) {
                currentContent.remove();
            }
            //endregion

            // Check clickable
            clickable.addClass('checked');

            // Create content
            let content = new PaymentClickableContent();

            // Insert after clickable
            clickable.element.insertAdjacentElement('afterend', content.element);

            // UI for pay method
            let ui = m.wallet.driver.getPayMethodUI(m);

            if(ui) {
                content.element.appendChild(ui);
            }else{
                content.text = sprintf("<div style='padding: 30px'>%s</div>", strings.youWillBeRedirected);
            }

            this.selectedMethod = m;

        }
        //endregion

        //region Methods

        /**
         * Handles change of address option
         */
        addressOptionChanged(){
            if(this.addressContainer.checkedClickable == this.btnNoAddress) {
                this.charge.idbillingaddress = -1;

            }else if(this.addressContainer.checkedClickable == this.btnSameAsShipping){
                this.charge.idbillingaddress = this.charge.idshippingaddress;

            }else {
                this.addressContainer.currentContent = this.customAddressView;
            }
        }

        /**
         * Load address related data
         */
        loadAddresses(){

            // No billing address
            this.addressContainer.clickables.add(this.btnNoAddress);

            if(this.charge.shippingAddress) {
                this.addressContainer.clickables.add(this.btnSameAsShipping);
            }

            this.addressContainer.clickables.add(this.btnSpecifyAddress);

        }

        /**
         * Loads the pay methods
         */
        loadMethods(){

            PayMethod.getPublicAvailable().send((methods: PayMethod[]) => {
                this.payMethodOptions.clear();

                let count = 0;

                methods.forEach((m: PayMethod) => {

                    let clickable = new PaymentClickable(m.name);
                    clickable.tag = m;
                    clickable.addEventListener('click', () => this.methodClickable_Click(clickable, m));

                    this.payMethodOptions.add(clickable);

                    // Select if first
                    if(count++ == 0) {
                        this.methodClickable_Click(clickable, m);
                    }

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
        }

        /**
         * Raises the <c>selectedMethod</c> event
         */
        onSelectedMethodChanged(){
            if(this._selectedMethodChanged){
                this._selectedMethodChanged.raise();
            }
        }

        /**
         * Raises the <c>transaction</c> event
         */
        onTransactionChanged(){
            if(this._transactionChanged){
                this._transactionChanged.raise();
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
        private _selectedMethodChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the selectedMethod property changes
         *
         * @returns {LatteEvent}
         */
        get selectedMethodChanged(): LatteEvent{
            if(!this._selectedMethodChanged){
                this._selectedMethodChanged = new LatteEvent(this);
            }
            return this._selectedMethodChanged;
        }

        /**
         * Back field for event
         */
        private _transactionChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the transaction property changes
         *
         * @returns {LatteEvent}
         */
        get transactionChanged(): LatteEvent{
            if(!this._transactionChanged){
                this._transactionChanged = new LatteEvent(this);
            }
            return this._transactionChanged;
        }
        //endregion

        //region Properties

        /**
         * Property field
         */
        private _charge: Charge = null;

        /**
         * Gets or sets the related charge
         *
         * @returns {Charge}
         */
        get charge(): Charge{
            return this._charge;
        }

        /**
         * Gets or sets the related charge
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
        private _selectedMethod: PayMethod = null;

        /**
         * Gets or sets the selected pay method
         *
         * @returns {PayMethod}
         */
        get selectedMethod(): PayMethod{
            return this._selectedMethod;
        }

        /**
         * Gets or sets the selected pay method
         *
         * @param {PayMethod} value
         */
        set selectedMethod(value: PayMethod){

            // Check if value changed
            let changed: boolean = value !== this._selectedMethod;

            // Set value
            this._selectedMethod = value;

            // Trigger changed event
            if(changed){
                this.onSelectedMethodChanged();
            }
        }

        /**
         * Property field
         */
        private _transaction: Transaction = null;

        /**
         * Gets or sets the transaction when succeeded
         *
         * @returns {Transaction}
         */
        get transaction(): Transaction{
            return this._transaction;
        }

        /**
         * Gets or sets the transaction when succeeded
         *
         * @param {Transaction} value
         */
        set transaction(value: Transaction){

            // Check if value changed
            let changed: boolean = value !== this._transaction;

            // Set value
            this._transaction = value;

            // Trigger changed event
            if(changed){
                this.onTransactionChanged();
            }
        }
        //endregion

        //region Components

        /**
         * Field for addressContainer property
         */
        private _addressContainer: PaymentClickableContainer;

        /**
         * Gets the address container
         *
         * @returns {PaymentClickableContainer}
         */
        get addressContainer(): PaymentClickableContainer {
            if (!this._addressContainer) {
                this._addressContainer = new PaymentClickableContainer();
                this._addressContainer.checkedClickableChanged.add(() => this.addressOptionChanged());
            }
            return this._addressContainer;
        }

        /**
         * Field for btnNoAddress property
         */
        private _btnNoAddress: PaymentClickable;

        /**
         * Gets the no address clickable
         *
         * @returns {PaymentClickable}
         */
        get btnNoAddress(): PaymentClickable {
            if (!this._btnNoAddress) {
                this._btnNoAddress = new PaymentClickable(strings.noBillingAddress);
            }
            return this._btnNoAddress;
        }

        /**
         * Field for btnSameAsShipping property
         */
        private _btnSameAsShipping: PaymentClickable;

        /**
         * Gets the "same as shipping address" button
         *
         * @returns {PaymentClickable}
         */
        get btnSameAsShipping(): PaymentClickable {
            if (!this._btnSameAsShipping) {
                this._btnSameAsShipping = new PaymentClickable(strings.sameAsShippingAddress);
            }
            return this._btnSameAsShipping;
        }

        /**
         * Field for btnSpecifyAddress property
         */
        private _btnSpecifyAddress: PaymentClickable;

        /**
         * Gets the "specify address" clickable
         *
         * @returns {PaymentClickable}
         */
        get btnSpecifyAddress(): PaymentClickable {
            if (!this._btnSpecifyAddress) {
                this._btnSpecifyAddress = new PaymentClickable(strings.specifyBillingAddress);
            }
            return this._btnSpecifyAddress;
        }

        /**
         * Field for customAddressView property
         */
        private _customAddressView: AddressView;

        /**
         * Gets the custom address view
         *
         * @returns {AddressView}
         */
        get customAddressView(): AddressView {
            if (!this._customAddressView) {
                this._customAddressView = new AddressView();
            }
            return this._customAddressView;
        }


        //endregion

    }

}