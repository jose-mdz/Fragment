/**
 * Created by josemanuel on 9/14/16.
 */
module latte {

    /**
     * Folder of global settings
     */
    export class GlobalSettingsExplorer extends ExplorerItem {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         * Creates the item
         */
        constructor() {
            super();
            this.loadsChildrenFolders = false;
        }

        //region Private Methods
        //endregion

        //region Methods

        /**
         * Override.
         * @returns {latte.ColumnHeader[]}
         */
        getColumnHeaders(): ColumnHeader[]{
            return [new ColumnHeader(strings.name)];
        }

        /**
         * Gets the loader of children items
         *
         * @Override
         */
        getChildrenLoader(): RemoteCall<any>{
            return Setting.getGlobalConfigurableSettings().withHandlers((sets: IGlobalConfigSettings) => {
                for(let i in sets){
                    sets[i].name = i;
                    this.children.add(new GlobalSettingExplorer(sets[i], LinearIcon[sets[i]['icon']] || LinearIcon.cog))
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