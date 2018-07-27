module latte {

    /**
     * PageTagsForm
     */
    export class PageTagsForm extends FormItem {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         * PageTagsForm
         */
        constructor() {
            super();
            this.addClass('page-form-tags');

            this.inputs.addArray([this.inputItem]);
        }

        //region Private Methods
        //endregion

        //region Methods
        /**
         * Raises the <c>record</c> event
         */
        onRecordChanged(){
            if(this._recordChanged){
                this._recordChanged.raise();
            }

            if (this.record) {
                this.pageTagItem.record = this.record;
            }
        }
        //endregion

        //region Events
        /**
         * Back field for event
         */
        private _recordChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the record property changes
         *
         * @returns {LatteEvent}
         */
        get recordChanged(): LatteEvent{
            if(!this._recordChanged){
                this._recordChanged = new LatteEvent(this);
            }
            return this._recordChanged;
        }
        //endregion


        //region Components
        /**
         * Field for inputItem property
         */
        private _inputItem: InputItem;

        /**
         * Gets the input for control tags
         *
         * @returns {InputItem}
         */
        get inputItem(): InputItem {
            if (!this._inputItem) {
                this._inputItem = new InputItem(strings.tag, 'string');
                this._inputItem.valueItem = this.pageTagItem;
            }
            return this._inputItem;
        }

        /**
         * Field for pageTagItem property
         */
        private _pageTagItem: SettingValueItem;

        /**
         * Gets the tag system property
         *
         * @returns {SettingValueItem}
         */
        get pageTagItem(): SettingValueItem {
            if (!this._pageTagItem) {
                const lazy: SettingValueItem = this._pageTagItem = new SettingValueItem();

            }
            return this._pageTagItem;
        }
        //endregion


        //region Properties
        /**
         * Property field
         */
        private _record: Page = null;

        /**
         * Gets or sets when the record property changes
         *
         * @returns {Page}
         */
        get record(): Page{
            return this._record;
        }

        /**
         * Gets or sets when the record property changes
         *
         * @param {Page} value
         */
        set record(value: Page){

            // Check if value changed
            let changed: boolean = value !== this._record;

            // Set value
            this._record = value;

            // Trigger changed event
            if(changed){
                this.onRecordChanged();
            }
        }
        //endregion

    }

}