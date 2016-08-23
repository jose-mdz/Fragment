/**
 * Created by josemanuel on 7/14/16.
 */
module latte {

    /**
     *
     */
    export class PagesExplorer extends ExplorerItem {

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
         * @Override
         */
        getChildrenLoader(): RemoteCall<any>{
            return Page.rootPages().withHandlers((records: Page[]) => {
                for(let i in records){
                    this.children.add(new PageExplorer(records[i]));
                }
            });
        }

        /**
         * Gets the name of the item
         * @Override
         */
        getName(): string{
            return strings.pages;
        }

        /**
         * Gets the icon of the item
         * @Override
         */
        getIcon(): IconItem{
            return LinearIcon.home;
            // return IconItem.folderIcon()
        }

        /**
         * Gets the items (actions) of the item
         * @Override
         */
        getItems(): Item[]{
            let items: Item[] = [];

            if(User.me.isRoot) {
                items.push(new ButtonItem(strings.newRootPage, LinearIcon.file_add, () => {
                    var p = new Page();
                    DataRecordDialogView.editRecord(p, () => this.onChildrenChanged(), strings.newPage);
                }));
            }

            return items;
        }
        //endregion

        //region Events
        //endregion

        //region Properties
        //endregion

    }

}