/**
 * Created by josemanuel on 12/19/16.
 */
module latte {

    /**
     *
     */
    export class AddressesView extends ColumnView {

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
         * Loads the addresses
         */
        loadAddresses(){
            Message.sendCalls([
                Address.byId(this.charge.idbillingaddress).withHandlers((a: Address) => {
                    let f = new DataRecordFormItem(a);
                    f.readOnly = true;
                    f.faceVisible = false;
                    this.wBillingAddress.items.clear();
                    this.wBillingAddress.items.add(f);
                }),
                Address.byId(this.charge.idshippingaddress).withHandlers((a: Address) => {
                    let f = new DataRecordFormItem(a);
                    f.readOnly = true;
                    f.faceVisible = false;
                    this.wShippingAddress.items.clear();
                    this.wShippingAddress.items.add(f);
                })
            ])
        }

        /**
         * Raises the <c>charge</c> event
         */
        onChargeChanged(){
            if(this._chargeChanged){
                this._chargeChanged.raise();
            }

            this.loadAddresses();
        }

        /**
         * Override
         */
        onLoad(){
            super.onLoad();

            this.items.addArray([
                this.wShippingAddress,
                this.wBillingAddress
            ]);

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
         * Gets or sets the charge
         *
         * @returns {Charge}
         */
        get charge(): Charge{
            return this._charge;
        }

        /**
         * Gets or sets the charge
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

        //region Components
        /**
         * Field for wBillingAddress property
         */
        private _wBillingAddress: WidgetItem;

        /**
         * Gets the billing addr widget
         *
         * @returns {WidgetItem}
         */
        get wBillingAddress(): WidgetItem {
            if (!this._wBillingAddress) {
                this._wBillingAddress = new WidgetItem();
                this._wBillingAddress.title = strings.billingAddress;
                this._wBillingAddress.closeButton.visible = false;
                this._wBillingAddress.minimizeButton.visible = false;
                this._wBillingAddress.maximizeButton.visible = false;
                this._wBillingAddress.optionsButton.visible = false;
            }
            return this._wBillingAddress;
        }

        /**
         * Field for wShippingAddress property
         */
        private _wShippingAddress: WidgetItem;

        /**
         * Gets the shipping addr widget
         *
         * @returns {WidgetItem}
         */
        get wShippingAddress(): WidgetItem {
            if (!this._wShippingAddress) {
                this._wShippingAddress = new WidgetItem();
                this._wShippingAddress.title = strings.shippingAddress;
                this._wShippingAddress.closeButton.visible = false;
                this._wShippingAddress.minimizeButton.visible = false;
                this._wShippingAddress.maximizeButton.visible = false;
                this._wShippingAddress.optionsButton.visible = false;
            }
            return this._wShippingAddress;
        }

        //endregion

    }

}