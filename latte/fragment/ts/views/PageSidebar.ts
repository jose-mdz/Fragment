/**
 * Created by josemanuel on 7/14/16.
 */
module latte {

    /**
     *
     */
    export class PageSidebar extends TabView {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         *
         */
        constructor(r: Page) {
            super();

            this.page = r;

        }

        //region Private Methods
        //endregion

        //region Methods

        /**
         * Override.
         */
        onLoad(){
            this.tabs.addArray([
                this.tabDetail,
                this.tabConfiguration,
                this.tabAdvanced
            ]);

            this.selectedTab = this.tabDetail;

            this.tabsSide = Side.BOTTOM;
        }

        /**
         * Override.
         */
        onSelectedTabChanged(){
            super.onSelectedTabChanged();

            if(this.selectedTab == this.tabDetail) {
                this.view = this.detailView;

            }else if(this.selectedTab == this.tabConfiguration) {
                this.view = this.configurationView;

            }else if(this.selectedTab == this.tabAdvanced) {
                this.view = this.advancedView;
            }
        }

        /**
         * Raises the <c>page</c> event
         */
        onPageChanged(){
            if(this._pageChanged){
                this._pageChanged.raise();
            }

            if(this._configurationView) {
                this.configurationView.page = this.page;
            }

            if(this._advancedView) {
                this.advancedView.page = this.page;
            }

            this.detailView.page = this.page;

            this.tabConfiguration.visible = User.me.isSysAdmin;
        }
        //endregion

        //region Events

        /**
         * Back field for event
         */
        private _pageChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the page property changes
         *
         * @returns {LatteEvent}
         */
        get pageChanged(): LatteEvent{
            if(!this._pageChanged){
                this._pageChanged = new LatteEvent(this);
            }
            return this._pageChanged;
        }
        //endregion

        //region Properties

        /**
         * Property field
         */
        private _page: Page = null;

        /**
         * Gets or sets the page of the sidebar
         *
         * @returns {Page}
         */
        get page(): Page{
            return this._page;
        }

        /**
         * Gets or sets the page of the sidebar
         *
         * @param {Page} value
         */
        set page(value: Page){

            // Check if value changed
            let changed: boolean = value !== this._page;

            // Set value
            this._page = value;

            // Trigger changed event
            if(changed){
                this.onPageChanged();
            }
        }

        //endregion

        //region Components

        /**
         * Field for advancedView property
         */
        private _advancedView: PageAdvancedView;

        /**
         * Gets the advanced view
         *
         * @returns {PageAdvancedView}
         */
        get advancedView(): PageAdvancedView {
            if (!this._advancedView) {
                this._advancedView = new PageAdvancedView(this.page);
            }
            return this._advancedView;
        }

        /**
         * Field for configurationView property
         */
        private _configurationView:PageConfigurationView;

        /**
         * Gets the configuration view
         *
         * @returns {PageConfigurationView}
         */
        get configurationView():PageConfigurationView {
            if (!this._configurationView) {
                this._configurationView = new PageConfigurationView(this.page);
            }
            return this._configurationView;
        }


        /**
         * Field for detailView property
         */
        private _detailView:PageDetailView;

        /**
         * Gets the detail view
         *
         * @returns {PageDetailView}
         */
        get detailView():PageDetailView {
            if (!this._detailView) {
                this._detailView = new PageDetailView();
            }
            return this._detailView;
        }

        /**
         * Field for tabAdvanced property
         */
        private _tabAdvanced: TabItem;

        /**
         * Gets the advanced tab
         *
         * @returns {TabItem}
         */
        get tabAdvanced(): TabItem {
            if (!this._tabAdvanced) {
                this._tabAdvanced = new TabItem(strings.advanced);
            }
            return this._tabAdvanced;
        }

        /**
         * Field for tabDetail property
         */
        private _tabDetail:TabItem;

        /**
         * Gets the detail tab
         *
         * @returns {TabItem}
         */
        get tabDetail():TabItem {
            if (!this._tabDetail) {
                this._tabDetail = new TabItem(strings.detail);
            }
            return this._tabDetail;
        }

        /**
         * Field for tabConfiguration property
         */
        private _tabConfiguration:TabItem;

        /**
         * Gets the configuration tab
         *
         * @returns {TabItem}
         */
        get tabConfiguration():TabItem {
            if (!this._tabConfiguration) {
                this._tabConfiguration = new TabItem(strings.configuration);
            }
            return this._tabConfiguration;
        }

        //endregion

    }

}