/**
 * Created by josemanuel on 7/23/16.
 */
module latte {

    /**
     *
     */
    export class PageEditorView extends View {

        //region Static
        //endregion

        //region Fields
        private timerId: number;
        private fragmentAdapters: FragmentAdapter<IFragment>[];
        private titleChanged: boolean;
        private cancelTitle: string;
        private onlineChanged: boolean;
        //endregion

        /**
         *
         */
        constructor(r: Page, pack: IPageSettingsPack = null) {
            super();

            this.addClass('page-editor-main-view');

            if(pack){
                this.pack = pack;
            }

            this.page = r;
        }

        //region Private Methods
        /**
         * Clears the ribbon of non-standard items and tabs
         */
        private clearRibbon(selectFirstTab: boolean = true){
            let goners = [];

            this.ribbon.items.each((item: Item) => {
                if(item.tab != this.tabPage) {
                    goners.push(item)
                }
            });

            for(let i in goners){
                this.ribbon.items.remove(goners[i]);
            }

            while(this.ribbon.tabs.length > 1){
                this.ribbon.tabs.remove(this.ribbon.tabs[1]);
            }

            if(selectFirstTab !== false) {
                this.ribbon.selectedTab = this.ribbon.tabs.first;
            }

        }

        /**
         * Handles focus on the fragment
         *
         * @param adapter
         */
        private fragmentFocus(adapter: FragmentAdapter<IFragment>){

            this.fragmentTabsUpdate(adapter);

        }

        /**
         * Updates the tabs of the specified fragment adapter
         * @param adapter
         */
        private fragmentTabsUpdate(adapter: FragmentAdapter<IFragment>){
            this.clearRibbon(false);

            this.ribbon.tabs.addArray(adapter.getEditorTabs());
            this.ribbon.items.addArray(adapter.getEditorTabItems());

            if(this.ribbon.tabs.length > 0) {
                this.ribbon.selectedTab = this.ribbon.tabs.last
            }
        }

        //endregion

        //region Methods

        /**
         * Adds a fragment to the ui
         * @param key
         * @param fragment
         */
        addFragment(key: string, fragmentData: IFragment, fragment: Fragment){

            let type = fragmentData.type || 'html';
            let adapter: FragmentAdapter<IFragment> = null;

            // Get the adapter
            if(FragmentAdapterManager.isSupported(type)) {
                adapter = FragmentAdapterManager.byType(type);

            }else {
                adapter = new PlainTextFragmentAdapter();
            }

            // Initialize adapter
            adapter.fragmentConfiguration = fragmentData;
            adapter.fragment = fragment;
            adapter.onCreateEditorItem();
            adapter.editorFocus.add(() => this.fragmentFocus(adapter));
            adapter.tabsChanged.add(() => this.fragmentTabsUpdate(adapter));
            //adapter.editorBlur.add(() => this.clearRibbon());

            // Create expando
            let expando = new FragmentExpandoItem();
            adapter.expando = expando;
            expando.title = PageConfiguration.resolveString(fragmentData.name) || strings.missingName;
            expando.fragmentItem = adapter.editorItem;

            this.columnView.items.add(expando);
            this.fragmentAdapters.push(adapter);

        }

        /**
         * Loads the page
         */
        loadPage(){
            if(!this.page.configuration.pack) {
                this.page.configuration.reloadPack(() => this.loadPage());
                return;
            }

            this.fragmentAdapters = [];

            // Title
            this.titleElement.text = this.page.title;

            // Load Fragments
            this.page.getFragments().send((arr: Fragment[]) => {

                let fragments: {[index: string]: Fragment} = {};
                arr.forEach((f) => fragments[f.name] = f);


                // Add each fragment
                for(let i in this.page.configuration.fragments){

                    let spec = this.page.configuration.fragments[i];
                    let f = fragments[spec.key || i] ? fragments[spec.key || i] : new Fragment();

                    if(!(f.idfragment > 0)) {
                        f.idpage = this.page.idpage;
                        f.name = spec.key || i;
                    }

                    this.addFragment(i, spec, f);
                }
            });
        }

        /**
         * Override.
         */
        onLoad(){
            super.onLoad();

            this.element.append(this.titleElement.element);
            //this.element.append(this.btnClose.element);

            this.ribbon.startButton.visible = false;

            this.ribbon.items.addArray([
                this.btnPreview,
                SeparatorItem.withTab(this.tabPage),
                this.onlineInput,
            ]);

            this.ribbon.tabs.addArray([
                this.tabPage
            ]);

            this.ribbon.selectedTab = this.ribbon.tabs.first;

            this.ribbonView.view = this.columnView;
            this.view = this.ribbonView;

            this.timerId = setInterval(() => this.saveTick(), 1000);

        }

        /**
         * Override.
         */
        onUnload(){
            super.onUnload();

            clearInterval(this.timerId);
        }

        /**
         * Raises the <c>page</c> event
         */
        onPageChanged(){
            if(this._pageChanged){
                this._pageChanged.raise();
            }

            this.loadPage();

        }

        /**
         * Previews the page
         */
        preview(){
            let loc = document.location;
            window.open(sprintf("%s//%s/%s", loc.protocol, loc.host, this.page.guid));
        }


        /**
         *
         */
        saveTick(){
            let calls = [];
            let pageChanged = false;

            for(let i in this.fragmentAdapters){
                let a = this.fragmentAdapters[i];
                calls = calls.concat(a.getSaveCalls());
            }

            if(this.titleChanged) {
                this.page.title = this.titleElement.text;
                pageChanged = true;
            }

            if(this.onlineChanged) {
                pageChanged = true;
            }

            if(pageChanged) {
                calls.push(this.page.saveCall());
            }

            if(calls.length) {
                Message.sendCalls(calls);
            }
        }
        //endregion

        //region Events


        /**
         * Back field for event
         */
        private _closeRequested: LatteEvent;

        /**
         * Gets an event raised when close was requested
         *
         * @returns {LatteEvent}
         */
        get closeRequested(): LatteEvent{
            if(!this._closeRequested){
                this._closeRequested = new LatteEvent(this);
            }
            return this._closeRequested;
        }

        /**
         * Raises the <c>closeRequested</c> event
         */
        onCloseRequested(){
            if(this._closeRequested){
                this._closeRequested.raise();
            }
        }

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
        private _pack: IPageSettingsPack = null;

        /**
         * Gets or sets the settings pack of the page
         *
         * @returns {IPageSettingsPack}
         */
        get pack(): IPageSettingsPack {
            return this._pack;
        }

        /**
         * Gets or sets
         *
         * @param {IPageSettingsPack} value
         */
        set pack(value: IPageSettingsPack) {
            this._pack = value;
        }

        /**
         * Property field
         */
        private _page: Page = null;

        /**
         * Gets or sets the record of the view
         *
         * @returns {Page}
         */
        get page(): Page{
            return this._page;
        }

        /**
         * Gets or sets the record of the view
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

        /**
         * Gets the ribbon of the view
         *
         * @returns {Ribbon}
         */
        get ribbon(): Ribbon {
            return this.ribbonView.ribbon;
        }

        //endregion

        //region Components

        /**
         * Field for btnClose property
         */
        private _btnClose: ButtonItem;

        /**
         * Gets the close button
         *
         * @returns {ButtonItem}
         */
        get btnClose(): ButtonItem {
            if (!this._btnClose) {
                this._btnClose = new ButtonItem(null, LinearIcon.cross, () => this.onCloseRequested());
                this._btnClose.addClass('page-close');
                this._btnClose.faceVisible = false;
            }
            return this._btnClose;
        }

        /**
         * Field for btnPreview property
         */
        private _btnPreview: ButtonItem;

        /**
         * Gets the preview button
         *
         * @returns {ButtonItem}
         */
        get btnPreview(): ButtonItem {
            if (!this._btnPreview) {
                this._btnPreview = new ButtonItem(strings.previewPage, LinearIcon.screen.go32(), () => this.preview());
                this._btnPreview.tab = this.tabPage;
            }
            return this._btnPreview;
        }

        /**
         * Field for columnView property
         */
        private _columnView: ColumnView;

        /**
         * Gets the column view
         *
         * @returns {ColumnView}
         */
        get columnView(): ColumnView {
            if (!this._columnView) {
                this._columnView = new ColumnView();
                this._columnView.columnPadding = 0;
            }
            return this._columnView;
        }

        /**
         * Field for ribbonView property
         */
        private _ribbonView: RibbonView;

        /**
         * Gets the ribbon in the view
         *
         * @returns {RibbonView}
         */
        get ribbonView(): RibbonView {
            if (!this._ribbonView) {
                this._ribbonView = new RibbonView();
                this._ribbonView.ribbon.collapseButton.visible = false;
            }
            return this._ribbonView;
        }

        /**
         * Field for onlineInput property
         */
        private _onlineInput: InputItem;

        /**
         * Gets the online input
         *
         * @returns {InputItem}
         */
        get onlineInput(): InputItem {
            if (!this._onlineInput) {
                this._onlineInput = InputItem.fromIInput({
                    text: strings.online,
                    type: 'switch'
                }, 'online', this.page.online);
                this._onlineInput.valueChanged.add(() => {
                    this.page.online = this.onlineInput.value
                    this.onlineChanged = true;
                });
                this._onlineInput.tab = this.tabPage;
            }
            return this._onlineInput;
        }

        /**
         * Field for tabPage property
         */
        private _tabPage: TabItem;

        /**
         * Gets the page tab
         *
         * @returns {TabItem}
         */
        get tabPage(): TabItem {
            if (!this._tabPage) {
                this._tabPage = new TabItem(strings.page);
            }
            return this._tabPage;
        }

        /**
         * Field for titleElement property
         */
        private _titleElement: Element<HTMLDivElement>;

        /**
         * Gets the title element
         *
         * @returns {Element<HTMLDivElement>}
         */
        get titleElement(): Element<HTMLDivElement> {
            if (!this._titleElement) {
                this._titleElement = new Element<HTMLDivElement>(document.createElement('div'));
                this._titleElement.addClass('page-title-gizmo');
                this._titleElement.contentEditable = true;
                this._titleElement.addEventListener('focus', () => {
                    this.clearRibbon();
                    this.cancelTitle = this.titleElement.text;
                });
                this._titleElement.addEventListener('input', () => this.titleChanged = true);

                this._titleElement.addEventListener('keydown', (e) => {
                    if(e.keyCode == Key.ENTER) {
                        this.titleElement.element.blur();
                        e.preventDefault();

                    }else if(e.keyCode == Key.ESCAPE) {
                        this.titleElement.text = this.cancelTitle;
                        this.titleChanged = true;
                        this.titleElement.element.blur();
                        e.preventDefault();
                    }
                });

            }
            return this._titleElement;
        }

        //endregion

    }

}