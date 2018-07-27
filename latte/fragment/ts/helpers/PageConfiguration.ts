/**
 * Created by josemanuel on 7/26/16.
 */
module latte {

    export var defaultPageConfigurationFragment: IFragments = {
        body: {
            name: 'strings.body'
        }
    };

    /**
     * Helps manage the configuration of a page.
     */
    export class PageConfiguration {

        //region Static
        /**
         * Creates an input for the setting
         * @param setting
         */
        static inputFromSetting(setting: IPageConfigurationSetting): InputItem{
            let input = new InputItem(setting.name, setting.type || 'string', setting.defaultValue)
            if (setting.options) {
                input.options = setting.options;
            }
            return input;
        }

        /**
         * Parses configuration
         * @param configuration
         */
        static parseConfiguration(configuration: string): IPageConfiguration{
            let r = {};
            if(configuration) {
                try{
                    r = JSON.parse(configuration);
                }catch(e){
                    r = {}
                }
            }
            return r;
        }

        /**
         * Resolves a string in configuration
         * @param s
         * @returns {any}
         */
        static resolveString(s: string): string{
            if(s.indexOf('strings.') === 0) {
                return strings[s.substr(8)]
            }
            return s;
        }
        //endregion

        //region Fields
        //endregion

        /**
         * Creates the configuration helper
         */
        constructor(r: Page, pack: IPageSettingsPack = null) {

            if (pack) {
                this.pack = pack;
            }

            this.page = r;
        }

        //region Private Methods
        //endregion


        //region Methods

        /**
         * Raises the <c>pack</c> event
         */
        onPackChanged(){
            if(this._packChanged){
                this._packChanged.raise();
            }

            this._parentConfig = {};
            this._pageConfig = {};
            this._hasParentConfiguration = false;

            if (this.pack) {
                this._hasParentConfiguration = true;
                this._parentConfig = PageConfiguration.parseConfiguration(this.pack.parentConfig);
                this._pageConfig = PageConfiguration.parseConfiguration(this.pack.config);

                this._settingsValues = {};

                for(let i in this.pack.settings){
                    let s = this.pack.settings[i];
                    this.settingsValues[s.name] = s;
                }
            }
        }

        /**
         * Raises the <c>page</c> event
         */
        onPageChanged(){
            if(this._pageChanged){
                this._pageChanged.raise();
            }

            this._pageConfig = {};

            if (this.page.configurationSetting) {
                this._pageConfig = PageConfiguration.parseConfiguration(this.page.configurationSetting.value);

            }
        }

        /**
         * Reloads the pack.
         * Use this only when you know for sure that the settings of the parent
         * or the page have changed.
         *
         * @param call
         */
        reloadPack(call: () => any = null){

            this.page.getSettingsPack().send((p) => {
                this.pack = p;

                if (call) {
                    call()
                }
            });

        }
        //endregion


        //region Events
        /**
         * Back field for event
         */
        private _packChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the pack property changes
         *
         * @returns {LatteEvent}
         */
        get packChanged(): LatteEvent{
            if(!this._packChanged){
                this._packChanged = new LatteEvent(this);
            }
            return this._packChanged;
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
         * Gets a value indicating if children of page may have children
         *
         * @returns {boolean}
         */
        get childrenMayHaveChildren():boolean {
            return !(this.pageConfig.children && this.pageConfig.children.mayHaveChildren === false);
        }

        /**
         * Gets the fragments for the page, including parent page criteria
         *
         * @returns {IFragments}
         */
        get fragments(): IFragments {
            let parents = this.parentConfig.children && this.parentConfig.children.fragments ? this.parentConfig.children.fragments: {};
            let locals = this.pageConfig.fragments ? this.pageConfig.fragments: {};
            let all = _merge(parents, locals);
            return _empty(all) ? defaultPageConfigurationFragment : all;
        }

        /**
         * Property field
         */
        private _hasParentConfiguration: boolean;

        /**
         * Gets a value indicating if the helper has parent configuration.
         * You should call reloadPack in order to load it.
         *
         * @returns {boolean}
         */
        get hasParentConfiguration(): boolean {
            return !!this._hasParentConfiguration;
        }

        /**
         * Gets a value indicating if the configuration indicates settings
         *
         * @returns {boolean}
         */
        get hasSettings():boolean {
            return !_empty(this.settings);
        }

        /**
         * Property field
         */
        private _pack: IPageSettingsPack = null;

        /**
         * Gets or sets the settings pack
         *
         * @returns {IPageSettingsPack}
         */
        get pack(): IPageSettingsPack{
            return this._pack;
        }

        /**
         * Gets or sets the settings pack
         *
         * @param {IPageSettingsPack} value
         */
        set pack(value: IPageSettingsPack){

            // Check if value changed
            let changed: boolean = value !== this._pack;

            // Set value
            this._pack = value;

            // Trigger changed event
            if(changed){
                this.onPackChanged();
            }
        }

        /**
         * Property field
         */
        private _page: Page = null;

        /**
         * Gets or sets the page of the object
         *
         * @returns {Page}
         */
        get page(): Page{
            return this._page;
        }

        /**
         * Gets or sets the page of the object
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
         * Property field
         */
        private _pageConfig: IPageConfiguration;

        /**
         * Gets the page configuration
         *
         * @returns {IPageConfiguration}
         */
        get pageConfig(): IPageConfiguration {
            return this._pageConfig;
        }

        /**
         * Property field
         */
        private _parentConfig: IPageConfiguration;

        /**
         * Gets the parent configuration settings
         *
         * @returns {IPageConfigurationSettings}
         */
        get parentConfig(): IPageConfiguration {
            return this._parentConfig;
        }

        /**
         * Gets the settings for the page, including parent page criteria
         *
         * @returns {IPageConfigurationSettings}
         */
        get settings(): IPageConfigurationSettings {
            return _merge(
                this.parentConfig.children && this.parentConfig.children.settings ? this.parentConfig.children.settings: {},
                this.pageConfig.settings ? this.pageConfig.settings: {}
            );
        }


        /**
         * Property field
         */
        private _settingsValues: {[index: string]: Setting};

        /**
         * Gets the settings
         *
         * @returns {{[index: string]: Setting}}
         */
        get settingsValues(): {[index: string]: Setting} {
            return this._settingsValues;
        }

        //endregion

    }

}