/**
 * Created by josemanuel on 12/17/16.
 */
module latte {

    /**
     *
     */
    export class ChargeExplorer extends ExplorerItemDataRecord<Charge> {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         *
         */
        constructor(r: Charge) {
            super();
            this.loadsChildren = false;
            this.record = r;
        }

        //region Private Methods
        //endregion

        //region Methods
        /**
         * Gets the name of the item
         * @Override
         */
        getName(): string{
            return this.record.description
        }

        /**
         * Gets the icon of the item
         * @Override
         */
        getIcon(): IconItem{
            return LinearIcon.file_empty;
        }

        //endregion

        //region Events
        //endregion

        //region Properties
        //endregion

    }

}