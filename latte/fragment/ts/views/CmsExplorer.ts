/**
 * Created by josemanuel on 7/14/16.
 */
module latte {

    /**
     *
     */
    export class CmsExplorer extends ExplorerView {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         *
         */
        constructor() {
            super();

            this.addClass('cms-explorer');

            // Allow to insert nodes
            this.rootItemsEvent('backend-explorer-roots-before');

            // Allow to insert nodes before pages
            this.rootItemsEvent('backend-explorer-roots-pages-before');

            // Add pages item
            this.addRootItem(new PagesExplorer());

            // Allow to insert nodes after pages
            this.rootItemsEvent('backend-explorer-roots-pages-after');

            // Allow to insert nodes before management nodes
            this.rootItemsEvent('backend-explorer-roots-mgmt-before');

            if(User.me.isRoot) {
                this.addRootItem(new UsersExplorer());
                this.addRootItem(new GroupsExplorer());
                this.addRootItem(new GlobalSettingsExplorer());
            }

            // Allow to insert nodes before management nodes
            this.rootItemsEvent('backend-explorer-roots-mgmt-after');

            // Allow to insert nodes
            this.rootItemsEvent('backend-explorer-roots-after');
        }

        //region Private Methods
        /**
         * Raises an event for populating root items
         * @param name
         */
        private rootItemsEvent(name: string){
            let eventObject = {items: []};

            fragent_event_raise(name, [eventObject]);

            eventObject.items.forEach((item) => {
                this.addRootItem(<ExplorerItem>item);
            });
        }
        //endregion

        //region Methods
        //endregion

        //region Events
        //endregion

        //region Properties
        //endregion

    }

}