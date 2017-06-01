/**
 * Created by josemanuel on 9/18/16.
 */
module latte {

    /**
     *
     */
    export class GlobalSettingView extends ColumnView {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         * Creates the view
         */
        constructor(globalSetting: IGlobalConfigSetting) {
            super();

            this.globalSetting = globalSetting;
        }

        //region Private Methods
        //endregion

        //region Methods
        /**
         * Override.
         */
        onLoad(){
            super.onLoad();

            this.items.add(this.settingForm);

            Setting.getGlobalByName(this.globalSetting.name).send((s: Setting) => this.setting = s );
        }
        /**
         * Raises the <c>setting</c> event
         */
        onSettingChanged(){
            if(this._settingChanged){
                return this._settingChanged.raise();
            }

            this.setting.settingType = this.globalSetting.type;

            if(this.setting) {
                this.settingForm.record = this.setting;
            }
        }
        //endregion

        //region Events
        /**
         * Back field for event
         */
        private _settingChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the setting property changes
         *
         * @returns {LatteEvent}
         */
        get settingChanged(): LatteEvent{
            if(!this._settingChanged){
                this._settingChanged = new LatteEvent(this);
            }
            return this._settingChanged;
        }


        //endregion

        //region Properties
        /**
         * Property field
         */
        private _setting: Setting = null;

        /**
         * Gets or sets the setting of the view
         *
         * @returns {Setting}
         */
        get setting(): Setting{
            return this._setting;
        }

        /**
         * Gets or sets the setting of the view
         *
         * @param {Setting} value
         */
        set setting(value: Setting){

            // Check if value changed
            let changed: boolean = value !== this._setting;

            // Set value
            this._setting = value;

            // Trigger changed event
            if(changed){
                this.onSettingChanged();
            }
        }

        /**
         * Property field
         */
        private _globalSetting: IGlobalConfigSetting = null;

        /**
         * Gets or sets the setting item
         *
         * @returns {IGlobalConfigSetting}
         */
        get globalSetting(): IGlobalConfigSetting {
            return this._globalSetting;
        }

        /**
         * Gets or sets the setting item
         *
         * @param {IGlobalConfigSetting} value
         */
        set globalSetting(value: IGlobalConfigSetting) {
            this._globalSetting = value;
        }
        //endregion

        //region Components
        /**
         * Field for settingForm property
         */
        private _settingForm: DataRecordFormItem;

        /**
         * Gets the form of the setting
         *
         * @returns {DataRecordFormItem}
         */
        get settingForm(): DataRecordFormItem {
            if (!this._settingForm) {
                this._settingForm = new DataRecordFormItem();
                this.saveItems.add(this._settingForm);
            }
            return this._settingForm;
        }

        //endregion

    }

}