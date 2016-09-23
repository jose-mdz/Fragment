/**
 * Created by josemanuel on 8/5/16.
 */
module latte {

    /**
     *
     */
    export class GroupUserExplorer extends ExplorerItemDataRecord<GroupUser> {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         *
         */
        constructor(r: GroupUser = null) {
            super();

            if(r) {
                this.record = r;
            }
        }

        //region Private Methods
        //endregion

        //region Methods
        /**
         * Gets the columns of the item
         * @Override
         */
        getColumns(): string[]{
            return ['userName', 'userAttributes']
        }

        /**
         * Gets the name of the item
         * @Override
         */
        getName(): string{
            return (this.record.user || new User()).toString()
        }

        /**
         * Gets the icon of the item
         * @Override
         */
        getIcon(): IconItem{
            return LinearIcon.user;
        }
        //endregion

        //region Events
        //endregion

        //region Properties
        //endregion

    }

}