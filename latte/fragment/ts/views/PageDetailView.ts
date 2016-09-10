/**
 * Created by josemanuel on 7/18/16.
 */
module latte {

    /**
     *
     */
    export class PageDetailView extends ColumnView {

        //region Static
        //endregion

        //region Fields
        private validated: boolean = true;
        //endregion

        /**
         * Creates the view
         */
        constructor() {
            super();

            this.addClass('page-detail-view')
        }

        //region Private Methods
        //endregion

        //region Methods

        /**
         * Adds settings to the view
         * @param settings
         * @param values
         */
        addSettings(settings: IPageConfigurationSettings, values:{[index: string]:Setting}){

            for(let key in settings){
                let setting = values[key];

                if(!setting){
                    setting = new Setting();
                    setting.owner = 'Page';
                    setting.idowner = this.page.idpage;
                    setting.name = key;
                }

                let input = PageConfiguration.inputFromSetting(settings[key]);

                input.tag = {
                    data: settings[key],
                    record: setting,
                    changes: false
                };

                //TODO: CHECK HERE TO VALIDATE REQUIRED ATTRIBUTE
                if(setting.idsetting > 0){
                    input.value = setting.value;
                }

                // When changes value, activate changes flag
                ((input) => {
                    input.valueChanged.add(() => {
                        input.tag.changes = true
                    });
                })(input);

                this.settingsForm.inputs.add(input);
            }
        }

        /**
         * Loads the settings of the page
         */
        loadSettings(){

            if(!this.page.configuration.pack){
                this.page.configuration.reloadPack(() => this.loadSettings());
                return;
            }

            // Clear settings
            this.settingsForm.inputs.clear();

            // Add settings inputs
            this.addSettings(this.page.configuration.settings, this.page.configuration.settingsValues);

            // Set settings form visibility
            this.settingsForm.visible = this.settingsForm.inputs.count > 0;

        }

        /**
         * Override
         */
        onLoad(){
            super.onLoad();

            if(this.page.canIWrite) {
                this.items.add(this.btnOpen);
            }

            this.items.addArray([
                this.dataForm,
                this.settingsForm
            ]);

        }

        /**
         * Raises the <c>page</c> event
         */
        onPageChanged(){
            if(this._pageChanged){
                this._pageChanged.raise();
            }

            this.page.onlineChanged.add(() => {
                if(!this.page.canIWrite){
                    for (let i = 0; i < this.dataForm.inputs.length; i++) {
                        this.dataForm.inputs[i].readOnly = true;
                    }
                    for (let i = 0; i < this.settingsForm.inputs.length; i++) {
                        this.settingsForm.inputs[i].readOnly = true;
                    }
                    this.unsavedChanges = false;
                }
            });

            // Set record on form
            this.dataForm.record = this.page;

            // Check write permission
            this.dataForm.readOnly = this.settingsForm.readOnly = !this.page.canIWrite;

            // Load settings
            this.loadSettings();

            let pageKey = this._dataForm.byName('key');

            if(pageKey){
                // Invalidate if user changes the URL key
                pageKey.valueChanged.add(() => {
                    this.validated = false
                });
            }


        }

        /**
         * Override.
         */
        onSavingChanges(){
            if(!this.validated) {

                let k: InputItem = this.dataForm.byName('key');

                Page.isValidURLKey(this.page.idpage, k.value).send((isValid: boolean) => {
                    this.validated = k.valid = isValid;
                    k.setHint(isValid ? null : strings.urlKeyInUse);

                    if(isValid) {
                        // Call saveChanges again to continue save procedure
                        this.saveChanges();
                    }
                });

                return false;
            }else{
                return super.onSavingChanges();
            }
        }

        /**
         * Opens the editor
         */
        openEditor(){

            let url = sprintf("%s/%s#/Editor/%s", window.location.origin, window.location.pathname, this.page.guid);

            window.open(url);

            // var mainView = View.mainView;
            // let editor = new PageEditorView(this.page);
            //
            // View.mainView = editor;
            //
            // editor.closeRequested.add(() => {
            //     this.dataForm.onRecordChanged();
            //     View.mainView = mainView
            // });
        }

        /**
         * Override.
         * @returns {any[]}
         */
        getSaveCalls(): ICall[]{
            let all =[]
                .concat(this.dataForm.getSaveCalls())
                .concat(this.saveSettingsCalls());

            return all;
        }

        /**
         * @returns {Array}
         */
        saveSettingsCalls(): ICall[]{
            let r = [];
            let checker = 0;

            for (let i = 0; i < this.settingsForm.inputs.length; i++) {
                let input: InputItem = this.settingsForm.inputs[i];
                let tag: any = <Setting>input.tag;
                let setting: Setting = tag.record;

                if(!input.tag.changes) {
                    continue;
                }

                setting.value = input.value;

                let call = setting.saveCall();

                if(++checker == 1){
                    call.withHandlers(() => {
                        this.unsavedChanges = false;
                        this.settingsForm.unsavedChanges = false;
                        this.onPageChanged();
                    });
                }

                r.push(call);
            }

            return r;
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
         * Gets or sets the page of the view
         *
         * @returns {Page}
         */
        get page(): Page{
            return this._page;
        }

        /**
         * Gets or sets the page of the view
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
         * Field for btnOpen property
         */
        private _btnOpen: ButtonItem;

        /**
         * Gets the open button
         *
         * @returns {ButtonItem}
         */
        get btnOpen(): ButtonItem {
            if (!this._btnOpen) {
                this._btnOpen = new ButtonItem(strings.openPageEditor, null, () => this.openEditor());
                this._btnOpen.addClass('open-editor-button')
            }
            return this._btnOpen;
        }

        /**
         * Field for dataForm property
         */
        private _dataForm:DataRecordFormItem;

        /**
         * Gets the data record for item of the page
         *
         * @returns {DataRecordFormItem}
         */
        get dataForm():DataRecordFormItem {
            if (!this._dataForm) {
                this._dataForm = new DataRecordFormItem();
                this._dataForm.category = '';
                this.saveItems.add(this._dataForm);
            }
            return this._dataForm;
        }

        /**
         * Field for settingsForm property
         */
        private _settingsForm:FormItem;

        /**
         * Gets the settings form item
         *
         * @returns {FormItem}
         */
        get settingsForm():FormItem {
            if (!this._settingsForm) {
                this._settingsForm = new FormItem();
                this._settingsForm.direction = Direction.VERTICAL;
                this.saveItems.add(this._settingsForm);
            }
            return this._settingsForm;
        }


        //endregion

    }

}