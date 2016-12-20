/**
 * Created by josemanuel on 12/17/16.
 */
module latte {

    /**
     *
     */
    export class CustomersExplorerItem extends ExplorerItem {

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
            return Customer.catalog(this.childrenPage).withHandlers((result: PageResult<Customer>) => {
                for(let i in result.records){
                    this.children.add(new CustomerExplorer(result.records[i]));
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
            return strings.customers;
        }

        /**
         * Gets the icon of the item
         * @Override
         */
        getIcon(): IconItem{
            return LinearIcon.mustache;
        }
        //endregion

        //region Events
        //endregion

        //region Properties
        //endregion

    }

}