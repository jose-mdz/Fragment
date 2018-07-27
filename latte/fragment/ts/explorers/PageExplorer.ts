/**
 * Created by josemanuel on 7/14/16.
 */
module latte {

    /**
     *
     */
    export class PageExplorer extends ExplorerItemDataRecord<Page> {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         * Creates the Item
         */
        constructor(r: Page) {
            super();

            this.record = r;
            this.loadsChildrenFolders = r.configuration.childrenMayHaveChildren;
        }

        //region Private Methods
        //endregion

        //region Methods
        /**
         * Gets the loader of children items
         * @Override
         */
        getChildrenLoader(): RemoteCall<any>{
            return this.record.getPages(this.childrenPage).withHandlers((result: PageResult<Page>) => {
                for(let i in result.records){
                    this.children.add(new PageExplorer(result.records[i]));
                    this.childrenPage = result.page;
                    this.childrenPages = result.pages;
                }
            });
        }

        /**
         * Override
         */
        getColumnHeaders(): ColumnHeader[]{
            return [
                new ColumnHeader(strings.title, 250),
                new ColumnHeader(strings.pageKey),
                new ColumnHeader(strings.guid, 90)
            ];
        }

        /**
         * Gets the columns of the item
         * @Override
         */
        getColumns(): string[]{
            return ['title', 'key', 'guid'];
        }

        /**
         * Gets the width of columns
         * @Override
         */
        getColumnWithFor(name: string): number{
            if(name == "title"){
                return 250
            }
            return super.getColumnWithFor(name)
        }

        /**
         * Gets the detail view of the item
         * @Override
         */
        getDetailView(): View{
            return new PageSidebar(this);
        }

        /**
         * Gets the name of the item
         * @Override
         */
        getName(): string{
            return this.record.title;
        }

        /**
         * Gets the icon of the item
         * @Override
         */
        getIcon(): IconItem{
            let icon = LinearIcon.file_empty;

            if(!this.record.isOnline) {
                icon.css('opacity', 0.2);
            }
            return icon;
        }

        /**
         * Gets the items (actions) of the item
         * @Override
         */
        getItems(): Item[]{
            let items: Item[] = [];

            if (this.record.canIInsertChild) {
                items.push(new ButtonItem(strings.newPage, LinearIcon.file_add, () => {
                    let p = new Page();
                    p.idparent = this.record.idpage;
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