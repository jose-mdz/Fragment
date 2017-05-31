/**
 * Created by josemanuel on 8/5/16.
 */
module latte {

    /**
     *
     */
    export class UsersExplorer extends ExplorerItem {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         *
         */
        constructor() {
            super();

            // this.loadsChildrenFolders = false;
        }

        //region Private Methods
        //endregion

        //region Methods
        /**
         * Override.
         * @returns {latte.ColumnHeader[]}
         */
        getColumnHeaders(): ColumnHeader[]{
            return [
                new ColumnHeader(strings.name),
                new ColumnHeader(strings.detail)
            ];
        }

        /**
         * Gets the loader of children items
         *
         * @Override
         */
        getChildrenLoader(): RemoteCall<any>{
            return User.catalog().withHandlers((records: User[]) => {

                // Add Groups Explorer
                this.children.add(new GroupsExplorer());

                // Add Users
                this.children.addArray(records.map( r => new UserExplorer(r)));
            });
        }

        /**
         * Gets the name of the item
         * @Override
         */
        getName(): string{
            return strings.users;
        }

        /**
         * Gets the icon of the item
         * @Override
         */
        getIcon(): IconItem{
            return LinearIcon.users
        }

        /**
         * Gets the items (actions) of the item
         * @Override
         */
        getItems(): Item[]{
            return [
                new ButtonItem(strings.newUser, LinearIcon.user, () => {
                    var r = new User();
                    DataRecordDialogView.editRecord(r, () => this.onChildrenChanged(), strings.newUser);
                })
            ]
        }
        //endregion

        //region Events
        //endregion

        //region Properties
        //endregion

    }

}