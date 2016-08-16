/**
 * Created by josemanuel on 7/27/16.
 */
module latte {

    /**
     *
     */
    export class HtmlFragmentAdapter extends FragmentAdapter<IFragment> {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         *
         */
        constructor() {
            super();

        }

        //region Private Methods
        //endregion

        //region Methods

        /**
         * Override
         */
        getEditorTabs(): TabItem[]{
            return [
                this.tabFormat
            ];
        }

        /**
         * Returns the items for the ribbon of the view
         * @returns {Array}
         */
        getEditorTabItems(): Item[]{
            return this.formatItems;
        }

        /**
         * Override. Raises the <c>createEditorItem</c> event
         */
        onCreateEditorItem(){
            super.onCreateEditorItem();

            this.editorItem = this.htmlEditor;

            this.htmlEditor.value = this.fragment.value || '';

        }



        //endregion

        //region Events
        //endregion

        //region Properties
        /**
         * Field for htmlEditor property
         */
        private _htmlEditor: HtmlEditorItem;

        /**
         * Gets the html editor
         *
         * @returns {HtmlEditorItem}
         */
        get htmlEditor(): HtmlEditorItem {
            if (!this._htmlEditor) {
                this._htmlEditor = new HtmlEditorItem();
                this._htmlEditor.toolbar.visible = false;
                this._htmlEditor.focus.add(() => this.onEditorFocus());
                this._htmlEditor.blur.add(() => this.onEditorBlur());
                this._htmlEditor.addClass('html-fragment-adapter');
                this._htmlEditor.valueChanged.add(() => {
                    this.fragment.value = this.htmlEditor.value;
                    this.unsavedChanges = true;
                });

            }
            return this._htmlEditor;
        }

        //endregion

        //region Components
        /**
         * Field for tabFormat property
         */
        private _tabFormat: TabItem;

        /**
         * Gets the format tab
         *
         * @returns {TabItem}
         */
        get tabFormat(): TabItem {
            if (!this._tabFormat) {
                this._tabFormat = new TabItem(strings.format);
            }
            return this._tabFormat;
        }

        /**
         * Field for formatItems property
         */
        private _formatItems: Item[];

        /**
         * Gets the format items
         *
         * @returns {Item[]}
         */
        get formatItems(): Item[] {
            if (!this._formatItems) {

                let btn = (u, v, tooltip, cmd): Item =>{
                    let b = new ButtonItem();
                    b.icon = IconItem.standard(u, v);
                    b.tooltip = tooltip;
                    b.click.add(() => this.htmlEditor.execCommand(cmd));
                    b.tab = this.tabFormat;
                    return b;
                };

                let sep = (): Item =>{
                    let s = new SeparatorItem();
                    s.tab = this.tabFormat;
                    return s;
                };

                this._formatItems = [
                    btn(5, 2, strings.bold, HtmlEditorCommands.BOLD),
                    btn(6, 2, strings.italics, HtmlEditorCommands.ITALIC),
                    sep(),
                    btn(8, 2, strings.alignLeft, HtmlEditorCommands.JUSTIFY_LEFT),
                    btn(10, 2, strings.alignCenter, HtmlEditorCommands.JUSTIFY_CENTER),
                    btn(9, 2, strings.alignRight, HtmlEditorCommands.JUSTIFY_RIGHT),
                    btn(11, 2, strings.alignJustify, HtmlEditorCommands.JUSTIFY_FULL),
                    sep(),
                    btn(15, 2, strings.indent, HtmlEditorCommands.INDENT),
                    btn(14, 2, strings.outdent, HtmlEditorCommands.OUTDENT),
                    sep(),
                    btn(18, 1, strings.numberedList, HtmlEditorCommands.INSERT_ORDERED_LIST),
                    btn(19, 1, strings.bulletList, HtmlEditorCommands.INSERT_UNORDERED_LIST),
                    sep(),
                    btn(16, 2, strings.eraseFormat, HtmlEditorCommands.CLEAR_FORMAT),
                    sep(),
                    btn(12, 3, strings.insertLink, HtmlEditorCommands.INSERT_LINK),
                    btn(9, 3, strings.insertImage, HtmlEditorCommands.INSERT_IMAGE)
                ];

            }
            return this._formatItems;
        }


        //endregion

    }

}