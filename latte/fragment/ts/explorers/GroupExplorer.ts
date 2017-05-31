/**
 * Created by josemanuel on 8/5/16.
 */
module latte {

    /**
     *
     */
    export class GroupExplorer extends ExplorerItemDataRecord<Group> {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         *
         */
        constructor(r: Group = null) {
            super();

            this.loadsChildrenFolders = false;
            this.loadsChildren = false;

            if(r) {
                this.record = r;
            }
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
            return GroupUser.byGroup(this.record.idgroup).withHandlers((records: GroupUser[]) => {
                for(let i in records){
                    this.children.add(new GroupUserExplorer(records[i]));
                }
            });
        }

        /**
         * Gets the name of the item
         * @Override
         */
        getName(): string{
            return this.record.name;
        }

        /**
         * Gets the icon of the item
         * @Override
         */
        getIcon(): IconItem{
            return LinearIcon.bookmark;
        }

        /**
         * Gets the items (actions) of the item
         * @Override
         */
        getItems(): Item[]{
            return [
                new ButtonItem(strings.addUserToGroup, LinearIcon.book, () => {
                    var r = new GroupUser();
                    r.idgroup = this.record.idgroup;
                    DataRecordDialogView.editRecord(r, () => this.onChildrenChanged(), strings.addUserToGroup);
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