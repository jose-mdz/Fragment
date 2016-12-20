/**
 * Created by josemanuel on 12/19/16.
 */
module latte {

    /**
     *
     */
    export class CustomerExplorer extends ExplorerItemDataRecord<Customer> {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         *
         */
        constructor(r: Customer) {
            super(r);

            this.loadsChildren = false;
        }

        //region Private Methods
        //endregion

        //region Methods
        /**
         * Gets the name of the item
         * @Override
         */
        getName(): string{
            return this.record.fullName;
        }

        /**
         * Gets the icon of the item
         * @Override
         */
        getIcon(): IconItem{
            return LinearIcon.user;
        }

        /**
         * Gets the detail view of the item
         * @Override
         */
        getDetailView(): View{
            let f = new DataRecordFormView(this.record);
            f.readOnly = true;
            return f;
        }
        //endregion

        //region Events
        //endregion

        //region Properties
        //endregion

    }

}