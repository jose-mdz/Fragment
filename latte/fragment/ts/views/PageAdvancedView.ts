/**
 * Created by josemanuel on 8/7/16.
 */
module latte {

    /**
     *
     */
    export class PageAdvancedView extends ColumnView {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         *
         */
        constructor(r: Page = null) {
            super();

            if(r) {
                this.page = r;
            }
        }

        //region Private Methods
        //endregion

        //region Methods

        /**
         * Override
         */
        onLoad(){
            this.items.add(this.form);
            if(this.page.canIWrite) {
                this.items.add(this.btnDelete);
            }
        }

        /**
         * Raises the <c>page</c> event
         */
        onPageChanged(){
            if(this._pageChanged){
                this._pageChanged.raise();
            }

            this.form.record = this.page;
            this.form.readOnly = !this.page.canI(Page.PERMISSION_WRITE);
        }

        /**
         * Raises the <c>sentToTrash</c> event
         */
        onSentToTrash(){
            if(this._sentToTrash){
                this._sentToTrash.raise();
            }
        }
        /**
         * Sends the page to trash
         */
        sendToTrash(){
            DialogView.confirmDelete(this.page.title, () => {
                this.page.sendToTrash().send(() => {
                    this.onSentToTrash();
                });
            });
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


        /**
         * Back field for event
         */
        private _sentToTrash: LatteEvent;

        /**
         * Gets an event raised when the page is sent to trash
         *
         * @returns {LatteEvent}
         */
        get sentToTrash(): LatteEvent{
            if(!this._sentToTrash){
                this._sentToTrash = new LatteEvent(this);
            }
            return this._sentToTrash;
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
         * Field for btnDelete property
         */
        private _btnDelete: ButtonItem;

        /**
         * Gets the delete button
         *
         * @returns {ButtonItem}
         */
        get btnDelete(): ButtonItem {
            if (!this._btnDelete) {
                this._btnDelete = new ButtonItem(strings.sendToTrash, null, () => this.sendToTrash());
                this._btnDelete.addClass('danger');
            }
            return this._btnDelete;
        }


        /**
         * Field for form property
         */
        private _form: DataRecordFormItem;

        /**
         * Gets the form item
         *
         * @returns {DataRecordFormItem}
         */
        get form(): DataRecordFormItem {
            if (!this._form) {
                this._form = new DataRecordFormItem();
                this._form.category = 'advanced';
                this.saveItems.add(this._form);
            }
            return this._form;
        }

        //endregion

    }

}