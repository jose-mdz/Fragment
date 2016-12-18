/**
 * Created by josemanuel on 12/16/16.
 */
module latte {

    /**
     *
     */
    export class StoreExplorerItem extends ExplorerItem {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         *
         */
        constructor() {
            super();

            this.children.add(new ChargesExplorerItem());
            this.children.add(new CustomersExplorerItem());
        }

        //region Private Methods
        //endregion

        //region Methods
        /**
         * Gets the name of the item
         * @Override
         */
        getName(): string{
            return strings.store;
        }

        /**
         * Gets the icon of the item
         * @Override
         */
        getIcon(): IconItem{
            return LinearIcon.store;
        }
        //endregion

        //region Events
        //endregion

        //region Properties
        //endregion

    }

}