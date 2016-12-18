/**
 * Created by josemanuel on 12/17/16.
 */
module latte {

    /**
     *
     */
    export class ChargesExplorerItem extends ExplorerItem {

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
         * @Override
         */
        getChildrenLoader(): RemoteCall<any>{
            return Charge.catalog(this.childrenPage).withHandlers((result: PageResult<Charge>) => {
                for(let i in result.records){
                    this.children.add(new ChargeExplorer(result.records[i]));
                    this.childrenPage = result.page;
                    this.childrenPages = result.pages;
                }
            });
        }

        /**
         * Gets the name of the item
         * @Override
         */
        getName(): string{
            return strings.charges;
        }

        /**
         * Gets the icon of the item
         * @Override
         */
        getIcon(): IconItem{
            return LinearIcon.briefcase;
        }
        //endregion

        //region Events
        //endregion

        //region Properties
        //endregion

    }

}