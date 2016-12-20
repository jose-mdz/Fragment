/**
 * Created by josemanuel on 12/19/16.
 */
module latte {

    /**
     *
     */
    export class ChargeView extends ColumnView {

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
         * Loads the tickets
         */
        loadTickets(){

            this.wdgTickets.items.clear();

            Transaction.byCharge(this.charge.idcharge).send((ts: Transaction[]) => {

                this.wdgTickets.items.clear();

                ts.forEach((t: Transaction) => {
                    let f = new DataRecordFormItem(t);
                    f.readOnly = true;
                    f.faceVisible = false;
                    this.wdgTickets.items.add(f);
                })
            });
        }

        /**
         * Override
         */
        onLoad(){
            super.onLoad();

            this.items.addArray([
                this.frmCharge,
                this.wdgTickets
            ]);
        }

        /**
         * Raises the <c>charge</c> event
         */
        onChargeChanged(){
            if(this._chargeChanged){
                this._chargeChanged.raise();
            }

            this.frmCharge.record = this.charge;
            this.loadTickets();
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
         * Gets or sets the Charge
         *
         * @returns {Charge}
         */
        get charge(): Charge{
            return this._charge;
        }

        /**
         * Gets or sets the Charge
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
         * Field for frmCharge property
         */
        private _frmCharge: DataRecordFormItem;

        /**
         * Gets the charge form
         *
         * @returns {DataRecordFormItem}
         */
        get frmCharge(): DataRecordFormItem {
            if (!this._frmCharge) {
                this._frmCharge = new DataRecordFormItem();
            }
            return this._frmCharge;
        }

        /**
         * Field for wdgTickets property
         */
        private _wdgTickets: WidgetItem;

        /**
         * Gets the widget item
         *
         * @returns {WidgetItem}
         */
        get wdgTickets(): WidgetItem {
            if (!this._wdgTickets) {
                this._wdgTickets = new WidgetItem();
                this._wdgTickets.title = strings.transactions;
                this._wdgTickets.closeButton.visible = false;
                this._wdgTickets.minimizeButton.visible = false;
                this._wdgTickets.maximizeButton.visible = false;
                this._wdgTickets.optionsButton.visible = false;
            }
            return this._wdgTickets;
        }


        //endregion

    }

}