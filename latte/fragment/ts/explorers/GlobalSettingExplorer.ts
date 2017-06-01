/**
 * Created by josemanuel on 9/16/16.
 */
module latte {

    /**
     *
     */
    export class GlobalSettingExplorer extends ExplorerItem {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         * Creates the setting
         */
        constructor(globalSetting: IGlobalConfigSetting, icon: IconItem = null) {
            super();

            this.globalSetting = globalSetting;
            this.settingName = globalSetting.name;

            if(icon) {
                this.settingIcon = icon;
            }

        }

        //region Private Methods
        //endregion

        //region Methods
        /**
         * Gets the name of the item
         * @Override
         */
        getName(): string{
            return this.settingName;
        }

        /**
         * Gets the icon of the item
         * @Override
         */
        getIcon(): IconItem{
            return this.settingIcon || LinearIcon.cog;
        }

        /**
         * Gets the detail view of the item
         * @Override
         */
        getDetailView(): View{
            return new GlobalSettingView(this.globalSetting);
        }

        /**
         * Raises the <c>globalSetting</c> event
         */
        onGlobalSettingChanged(){
            if(this._globalSettingChanged){
                this._globalSettingChanged.raise();
            }
        }
        //endregion

        //region Events
        /**
         * Back field for event
         */
        private _globalSettingChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the globalSetting property changes
         *
         * @returns {LatteEvent}
         */
        get globalSettingChanged(): LatteEvent{
            if(!this._globalSettingChanged){
                this._globalSettingChanged = new LatteEvent(this);
            }
            return this._globalSettingChanged;
        }


        //endregion

        //region Properties

        /**
         * Property field
         */
        private _globalSetting: IGlobalConfigSetting = null;

        /**
         * Gets or sets the global setting item
         *
         * @returns {IGlobalConfigSetting}
         */
        get globalSetting(): IGlobalConfigSetting{
            return this._globalSetting;
        }

        /**
         * Gets or sets the global setting item
         *
         * @param {IGlobalConfigSetting} value
         */
        set globalSetting(value: IGlobalConfigSetting){

            // Check if value changed
            let changed: boolean = value !== this._globalSetting;

            // Set value
            this._globalSetting = value;

            // Trigger changed event
            if(changed){
                this.onGlobalSettingChanged();
            }
        }

        /**
         * Property field
         */
        private _settingName: string = null;

        /**
         * Gets or sets the name of the setting
         *
         * @returns {string}
         */
        get settingName(): string {
            return this._settingName;
        }

        /**
         * Gets or sets the name of the setting
         *
         * @param {string} value
         */
        set settingName(value: string) {
            this._settingName = value;
        }

        /**
         * Property field
         */
        private _settingIcon: IconItem = null;

        /**
         * Gets or sets the settings icon
         *
         * @returns {IconItem}
         */
        get settingIcon(): IconItem {
            return this._settingIcon;
        }

        /**
         * Gets or sets the settings icon
         *
         * @param {IconItem} value
         */
        set settingIcon(value: IconItem) {
            this._settingIcon = value;
        }
        //endregion

    }

}