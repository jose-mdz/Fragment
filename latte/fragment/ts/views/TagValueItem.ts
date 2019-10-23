module latte {

    /**
     * Create new DataRecordValueItem
     */
    export class TagValueItem<T extends DataRecord> extends ValueItem<DataRecord> {

        /**
         * Create DataRecordValueItem
         */
        constructor() {
            super();
            this.addClass('tags');

            this.textbox.value = '';

            // Assemble
            this.label.element.appendTo(this.element);
            this.textbox.appendTo(this.label.textElement);
            this.toolbar.appendTo(this.label.contentElement);
        }


        //region Private Methods
        /**
         *  Handles auto complete
         */
        private textbox_filterSuggestions() {
            this.onFilterSuggestions();
        }

        /**
         * Handler for textbox enter
         */
        private textbox_EnterPressed() {
            if (!this.record) {
                return false;
            }

            if (!this.textbox.suggestionsVisible) {
                this.onCreateItem();
            }
        }
        //endregion


        //region Methods
        /**
         * has Input text
         * @param value
         */
        hasInputText(value) {
            if (value == false) {
                this.textbox.element.css('display', 'block');
                this.label.textElement.css('display', 'block');
            } else {
                this.textbox.element.css('display', 'none');
                this.label.textElement.css('display', 'none');
            }
        }

        /**
         * Load DataRecords
         */
        updateList() {
            this.toolbar.items.clear();

            this.onLoadItems((items: DataRecord[]) => {

                if (_isArray(items) && items.length > 0) {
                    items.forEach((item: DataRecord) => {
                        this.onAddItem(item);
                    });
                } else {
                    let label = new LabelItem(strings.nothingToShow);
                    this.toolbar.items.add(label);
                }
            });
        }

        /**
         * Overriden
         */
        onLayout() {
            super.onLayout();
        }

        /**
         * @override
         * @param record
         */
        onCreateItem(record: DataRecord = null) {
            throw new Ex("Not implemented");
        }

        /**
         * Filter Suggestions
         */
        onFilterSuggestions() {
            throw new Ex("Not implemented");
        }

        /**
         * Called when fill to list
         * @param callback
         */
        onLoadItems(callback: GenericCallback) {
            throw new Ex("Not implemented");
        }

        /**
         * @param record
         */
        onAddItem(record: DataRecord) {
            throw new Ex("Not implemented");
        }

        /**
         * Raises the <c>trashed</c> event
         *
         * @param record
         */
        onItemTrashed(record: DataRecord) {
            if (this._itemTrashed) {
                this._itemTrashed.raise(record);
            }

            this.updateList();
        }

        /**
         * Raises the <c>record</c> event
         */
        onRecordChanged() {
            if (this._recordChanged) {
                this._recordChanged.raise();
            }

            if (this.record) {
                this.textbox.input.focus();

                this.updateList();
            }
        }

        /**
         * Raises the <c>selectedItem</c> event
         */
        onItemCreated() {
            if (this._itemCreated) {
                this._itemCreated.raise();
            }

            if (this.record) {
                this.updateList();
                this.textbox.input.val('');
                this.textbox.input.focus();
            }
        }

        /**
         * Raises the <c>selectedItem</c> event
         */
        onSelectedItemChanged() {
            if (this._selectedItemChanged) {
                this._selectedItemChanged.raise();
            }
        }
        //endregion


        //region Components
        /**
         * Field for _label property
         */
        private _label: LabelItem;

        /**
         * Gets the "description" LabelItem
         *
         * @returns {LabelItem}
         */
        public get label(): LabelItem {
            if (!this._label) {
                this._label = new LabelItem();
                this._label.textElement.css('height', '31px');
            }
            return this._label
        }

        /**
         * Field for _textbox property
         */
        private _textbox: TextboxItem;

        /**
         * Gets the "description" TextboxItem
         *
         * @returns {TextboxItem}
         */
        get textbox(): TextboxItem {
            if (!this._textbox) {
                this._textbox = new TextboxItem();
                this._textbox.placeholder = strings.add;
                this._textbox.enterPressed.add(this.textbox_EnterPressed, this);
                this._textbox.filterSuggestions.add(this.textbox_filterSuggestions, this);
                this._textbox.visible = true;
            }

            return this._textbox
        }

        /**
         * Field for toolbar property
         */
        private _toolbar: Toolbar;

        /**
         * Gets the "description" Toolbar
         *
         * @returns {Toolbar}
         */
        get toolbar(): Toolbar {
            if (!this._toolbar) {
                this._toolbar = new Toolbar();
                this._toolbar.faceVisible = false;
                this._toolbar.addClass('tags');
            }

            return this._toolbar
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
        get recordChanged(): LatteEvent {
            if (!this._recordChanged) {
                this._recordChanged = new LatteEvent(this);
            }
            return this._recordChanged;
        }

        /**
         * Field for _itemCreated property
         */
        private _itemCreated: LatteEvent;

        /**
         * Gets the "description" LatteEvent
         *
         * @returns {LatteEvent}
         */
        get itemCreated(): LatteEvent {
            if (!this._itemCreated) {
                this._itemCreated = new LatteEvent(this);
            }

            return this._itemCreated
        }

        /**
         * Field for _DataRecordTrashed property
         */
        private _itemTrashed: LatteEvent;

        /**
         * Gets the "description" LatteEvent
         *
         * @returns {LatteEvent}
         */
        public get itemTrashed(): LatteEvent {
            if (!this._itemTrashed) {
                this._itemTrashed = new LatteEvent(this);
            }

            return this._itemTrashed;
        }

        /**
         * Back field for event
         */
        private _selectedItemChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the selectedItem property changes
         *
         * @returns {LatteEvent}
         */
        get selectedItemChanged(): LatteEvent {
            if (!this._selectedItemChanged) {
                this._selectedItemChanged = new LatteEvent(this);
            }
            return this._selectedItemChanged;
        }
        //endregion


        //region Properties
        /**
         * Field for readOnly property
         */
        _readOnly: boolean;

        /**
         * Gets or sets the readOnly property
         *
         * @returns {boolean}
         */
        get readOnly(): boolean {
            return this._readOnly;
        }

        /**
         * Gets or sets the readOnly property
         *
         * @params value {boolean}
         */
        set readOnly(value: boolean) {
            this._readOnly = value;
            this.hasInputText(value);
        }

        /**
         * Gets the text of the textbox (if any)
         *
         * @returns {string}
         */
        get text(): string {
            if (this._textbox.value.length > 0) {
                return this._textbox.value;
            }

            return '';
        }

        /**
         * Property field
         */
        private _selectedItem: DataRecord = null;

        /**
         * Gets or sets when the DataRecord property changes
         *
         * @returns {DataRecord}
         */
        get selectedItem(): DataRecord {
            return this._selectedItem;
        }

        /**
         * Gets or sets when the DataRecord property changes
         *
         * @param {DataRecord} value
         */
        set selectedItem(value: DataRecord) {
            // Check if value changed
            let changed: boolean = value !== this._selectedItem;

            // Set value
            this._selectedItem = value;

            // Trigger changed event
            if (changed) {
                this.onSelectedItemChanged();
            }
        }

        /**
         * Property field for owner
         */
        private _record: T = null;

        /**
         * Gets or sets when the value of record property changes
         *
         * @returns {T}
         */
        get record(): T {
            return this._record;
        }

        /**
         * Gets or sets when the value of record property changes
         *
         * @param {T} value
         */
        set record(value: T) {

            // Check if value changed
            let changed: boolean = value !== this._record;

            // Set value
            this._record = value;

            // Trigger changed event
            if (changed) {
                this.onRecordChanged();
            }
        }

        //endregion

    }
}
