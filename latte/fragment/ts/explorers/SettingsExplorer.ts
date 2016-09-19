/**
 * Created by josemanuel on 9/14/16.
 */
module latte {

    /**
     *
     */
    export class SettingsExplorer extends ExplorerItem {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         *
         */
        constructor() {
            super();
            this.loadsChildrenFolders = false;
            this.loadsChildren = false;
            this.children.addArray([
                new SettingExplorer('analytics-account', LinearIcon.chart_bars),
                new SettingExplorer('home', LinearIcon.home),
                new SettingExplorer('theme', LinearIcon.layers),
                new SettingExplorer('title', LinearIcon.graduation_hat),
            ]);
        }

        //region Private Methods
        //endregion

        //region Methods
        /**
         * Gets the name of the item
         * @Override
         */
        getName(): string{
            return strings.settings;
        }

        /**
         * Gets the icon of the item
         * @Override
         */
        getIcon(): IconItem{
            return LinearIcon.cog;
        }
        //endregion

        //region Events
        //endregion

        //region Properties
        //endregion

    }

}