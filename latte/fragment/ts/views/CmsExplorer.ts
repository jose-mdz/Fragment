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

            this.addRootItem(new PagesExplorer());

            if(User.me.isRoot) {
                this.addRootItem(new UsersExplorer());
                this.addRootItem(new GroupsExplorer());
                this.addRootItem(new SettingsExplorer());
            }
        }

        //region Private Methods
        //endregion

        //region Methods
        //endregion

        //region Events
        //endregion

        //region Properties
        //endregion

    }

}