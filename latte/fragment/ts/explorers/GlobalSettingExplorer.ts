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
        constructor(settingName: string, icon: IconItem = null) {
            super();

            this.settingName = settingName;

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
            return new GlobalSettingView(this.settingName);
        }
        //endregion

        //region Events
        //endregion

        //region Properties
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