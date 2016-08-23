/**
 * Created by josemanuel on 8/5/16.
 */
module latte {

    /**
     *
     */
    export class GroupsExplorer extends ExplorerItem {

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
         * Gets the loader of children items
         *
         * @Override
         */
        getChildrenLoader(): RemoteCall<any>{
            return Group.catalog().withHandlers((records: Group[]) => {
                for(let i in records){
                    this.children.add(new GroupExplorer(records[i]));
                }
            });
        }

        /**
         * Gets the name of the item
         * @Override
         */
        getName(): string{
            return strings.groups;
        }

        /**
         * Gets the icon of the item
         * @Override
         */
        getIcon(): IconItem{
            return LinearIcon.book;
        }

        /**
         * Gets the items (actions) of the item
         * @Override
         */
        getItems(): Item[]{
            return [
                new ButtonItem(strings.newGroup, LinearIcon.bookmark, () => {
                    var r = new Group();
                    DataRecordDialogView.editRecord(r, () => this.onChildrenChanged(), strings.newGroup);
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