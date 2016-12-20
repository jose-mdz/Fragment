/**
 * Created by josemanuel on 12/19/16.
 */
module latte {

    /**
     *
     */
    export class ChargeSidebar extends TabView {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         *
         */
        constructor(r: Charge = null) {
            super();

            if(r) {
                this.charge = r;
            }

        }

        //region Private Methods
        //endregion

        //region Methods

        /**
         * Override
         */
        onLoad(){
            super.onLoad();

            this.tabsSide = Side.BOTTOM;

            this.tabs.addArray([this.tabDetail, this.tabAddresses]);

            this.selectedTab = this.tabDetail;
        }
        /**
         * Raises the <c>charge</c> event
         */
        onChargeChanged(){
            if(this._chargeChanged){
                this._chargeChanged.raise();
            }

            if(this._chargeView) {
                this.chargeView.charge = this.charge;
            }
            // this.chargeView.charge = this.charge;

            if(this._addressesView) {
                this.addressesView.charge = this.charge;
            }
        }

        /**
         * Override.
         */
        onSelectedTabChanged(){
            super.onSelectedTabChanged();

            if(this.selectedTab == this.tabDetail) {
                this.view = this.chargeView;

            }else if(this.selectedTab == this.tabAddresses) {
                this.view = this.addressesView;

            }

            this.onChargeChanged();

            // else if(this.selectedTab == this.tabConfiguration) {
            //     this.view = this.configurationView;
            //
            // }else if(this.selectedTab == this.tabAdvanced) {
            //     this.view = this.advancedView;
            // }
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
         * Field for addressesView property
         */
        private _addressesView: AddressesView;

        /**
         * Gets the addrses view
         *
         * @returns {AddressesView}
         */
        get addressesView(): AddressesView {
            if (!this._addressesView) {
                this._addressesView = new AddressesView();
            }
            return this._addressesView;
        }

        /**
         * Field for chargeView property
         */
        private _chargeView: ChargeView;

        /**
         * Gets the charge view
         *
         * @returns {ChargeView}
         */
        get chargeView(): ChargeView {
            if (!this._chargeView) {
                this._chargeView = new ChargeView();
            }
            return this._chargeView;
        }

        /**
         * Field for tabAddresses property
         */
        private _tabAddresses: TabItem;

        /**
         * Gets the addresses tab
         *
         * @returns {TabItem}
         */
        get tabAddresses(): TabItem {
            if (!this._tabAddresses) {
                this._tabAddresses = new TabItem(strings.addresses);
            }
            return this._tabAddresses;
        }


        /**
         * Field for tabDetail property
         */
        private _tabDetail: TabItem;

        /**
         * Gets the detail tab
         *
         * @returns {TabItem}
         */
        get tabDetail(): TabItem {
            if (!this._tabDetail) {
                this._tabDetail = new TabItem(strings.detail);
            }
            return this._tabDetail;
        }


        //endregion

    }

}