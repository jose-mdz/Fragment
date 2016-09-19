/**
 * Created by josemanuel on 9/14/16.
 */
module latte {

    /**
     *
     */
    export class GlobalSettingsExplorer extends ExplorerItem {

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
        }

        //region Private Methods
        //endregion

        //region Methods
        /**
         * Gets the loader of children items
         *
         * @Override
         */
        getChildrenLoader(): RemoteCall<any>{
            return Setting.getGlobalConfigurableSettings().withHandlers((sets: IGlobalConfigSettings) => {
                for(let i in sets){
                    this.children.add(new GlobalSettingExplorer(i, LinearIcon[sets[i]['icon']] || LinearIcon.cog))
                }
            });
        }

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