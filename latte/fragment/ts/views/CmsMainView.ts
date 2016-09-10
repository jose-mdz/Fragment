/**
 * Created by josemanuel on 8/11/16.
 */
module latte {

    /**
     *
     */
    export class CmsMainView extends View {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         *
         */
        constructor() {
            super();

            this.addClass('cms-main-view');
        }

        //region Private Methods
        //endregion

        //region Methods
        /**
         * Override.
         */
        onLoad(){
            super.onLoad();

            this.element.append(this.topBar.element);
            this.topBar.add(this.logo);
            this.topBar.add(this.logout);
            this.view = this.explorer;
        }
        //endregion

        //region Events
        //endregion

        //region Properties
        //endregion

        //region Components
        /**
         * Field for explorer property
         */
        private _explorer: CmsExplorer;

        /**
         * Gets the explorer
         *
         * @returns {CmsExplorer}
         */
        get explorer(): CmsExplorer {
            if (!this._explorer) {
                this._explorer = new CmsExplorer();
                this._explorer.btnRefresh.icon = LinearIcon.sync;
                this._explorer.btnSaveDetail.icon = LinearIcon.enter_down;
                TreeItem.globalCollapseGlyph = (item) => { return IconItem.empty(16) };
                TreeItem.globalExpandGlyph= (item) => { return IconItem.empty(16) };
            }
            return this._explorer;
        }

        /**
         * Field for topBar property
         */
        private _topBar: Element<HTMLDivElement>;

        /**
         * Gets the top bar
         *
         * @returns {Element<HTMLDivElement>}
         */
        get topBar(): Element<HTMLDivElement> {
            if (!this._topBar) {
                this._topBar = new Element<HTMLDivElement>(document.createElement('div'));
                this._topBar.addClass('top-bar');
            }
            return this._topBar;
        }

        /**
         * Field for logo property
         */
        private _logo: Element<HTMLDivElement>;

        /**
         * Gets the logo element
         *
         * @returns {Element<HTMLDivElement>}
         */
        get logo(): Element<HTMLDivElement> {
            if (!this._logo) {
                this._logo = new Element<HTMLDivElement>(document.createElement('div'));
                this._logo.addClass('logo');
            }
            return this._logo;
        }

        /**
         * Field for logout property
         */
        private _logout: Element<HTMLDivElement>;

        /**
         * Gets the logout element
         *
         * @returns {Element<HTMLDivElement>}
         */
        get logout(): Element<HTMLDivElement> {
            if (!this._logout) {
                this._logout = new Element<HTMLDivElement>(document.createElement('div'));
                this._logout.text = User.me.uname; //sprintf('(%s) %s', User.me.uname, strings.signOut);
                this._logout.element.appendChild(LinearIcon.power_switch.element.get(0));
                this._logout.addClass('logout');
                this._logout.addEventListener('click', () => Main.logOut());
            }
            return this._logout;
        }


        //endregion

    }

}