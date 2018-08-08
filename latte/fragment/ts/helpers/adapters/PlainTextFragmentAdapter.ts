/**
 * Created by josemanuel on 7/26/16.
 */
module latte {

    /**
     *
     */
    export class PlainTextFragmentAdapter extends FragmentAdapter<IFragment> {

        //region Static
        //endregion

        //region Fields
        //endregion

        //region Private Methods
        //endregion

        //region Methods

        /**
         * Override. Raises the <c>createEditorItem</c> event
         */
        onCreateEditorItem(){
            super.onCreateEditorItem();

            this.editorItem = new Item();
            this.editorItem.element.get(0).appendChild(this.textbox.element);
            this.textbox.text = this.fragment.value;
        }

        //endregion


        //region Events
        //endregion

        //region Properties
        /**
         * Field for textbox property
         */
        private _textbox: Element<HTMLTextAreaElement>;
        private baseScrollHeight;
        private heightCheck = false;
        /**
         * Gets the textbox element
         *
         * @returns {Element<HTMLTextAreaElement>}
         */
        get textbox(): Element<HTMLTextAreaElement> {
            if (!this._textbox) {
                this._textbox = new Element<HTMLTextAreaElement>(document.createElement('textarea'));
                this._textbox.addClass('plain-text-fragment');
                this._textbox.element.rows = 10;
                this._textbox.addEventListener('input', () => {
                    this.unsavedChanges = true;
                    this.fragment.value = this.textbox.text;

                    if(!this.heightCheck){
                        let minRows = 10;
                        let rows;
                        this._textbox.element.rows = minRows;

                        rows = Math.ceil((this._textbox.element.scrollHeight - this.baseScrollHeight) / 17);
                        this._textbox.element.rows = minRows + rows;
                        this.heightCheck = true;
                    }
                });
                this._textbox.addEventListener('focus', () => {
                    let savedValue = this._textbox.text;
                    this._textbox.text = '';
                    this.baseScrollHeight = this._textbox.element.scrollHeight;
                    this._textbox.text = savedValue;
                    this.onEditorFocus();
                });

                this._textbox.addEventListener('blur', () => {
                    this.onEditorBlur();
                })
            }
            return this._textbox;
        }

        //endregion

    }

}