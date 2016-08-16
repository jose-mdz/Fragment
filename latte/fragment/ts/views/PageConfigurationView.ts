/**
 * Created by josemanuel on 7/16/16.
 */
module latte {

    /**
     *
     */
    export class PageConfigurationView extends View {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         * Creates the view
         */
        constructor(r: Page) {
            super();

            this.container.get(0).appendChild(this.textbox.element)

            this.page = r;
        }

        //region Private Methods
        //endregion

        //region Methods

        /**
         * Loads data
         */
        onLoad(){
            this.page.getConfiguration().send((config: string) => {
                this.textbox.text = config;
            })

        }

        getSaveCalls(): ICall[]{
            return [
                this.page.setConfiguration(this.textbox.text).withHandlers((s: Setting) => {
                    this.page.configurationSetting = s;
                    this.unsavedChanges = false;
                }
            )]
        }

        //endregion

        //region Events
        //endregion

        //region Components
        /**
         * Field for textbox property
         */
        private _textbox: Element<HTMLTextAreaElement>;

        /**
         * Gets the textbox
         *
         * @returns {Textbox}
         */
        get textbox():Element<HTMLTextAreaElement> {
            if (!this._textbox) {
                this._textbox = new Element<HTMLTextAreaElement>(document.createElement('textarea'));
                this._textbox.addClass('page-configuration');
                this._textbox.addEventListener('input', () => this.unsavedChanges = true);
            }
            return this._textbox;
        }
        //endregion

        //region Properties
        /**
         * Property field
         */
        private _page:Page = null;

        /**
         * Gets or sets the page of theview
         *
         * @returns {Page}
         */
        get page():Page {
            return this._page;
        }

        /**
         * Gets or sets the page of theview
         *
         * @param {Page} value
         */
        set page(value:Page) {
            this._page = value;
        }
        //endregion

    }

}