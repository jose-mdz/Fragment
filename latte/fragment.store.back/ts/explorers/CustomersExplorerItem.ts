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
        }

        //region Private Methods
        //endregion

        //region Methods
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