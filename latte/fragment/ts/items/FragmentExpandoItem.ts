/**
 * Created by josemanuel on 7/26/16.
 */
module latte {

    /**
     *
     */
    export class FragmentExpandoItem extends ItemStack {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         *
         */
        constructor() {
            super();

            this.addClass('cms-fragment-expando');

            this.padding = 0;

            this.items.add(this.toolbar);

            this.toolbar.items.addArray([
                this.lblTitle
            ]);

            this.toolbar.sideItems.addArray([
                this.btnFold
            ]);
        }

        //region Private Methods
        //endregion

        //region Methods

        /**
         * Raises the <c>fragmentItem</c> event
         */
        onFragmentItemChanged(){
            if(this._fragmentItemChanged){
                this._fragmentItemChanged.raise();
            }

            // Remove items
            while(this.items.length > 1){
                this.items.remove(this.items[1])
            }

            // Add current item
            this.items.add(this.fragmentItem);
        }

        /**
         * Raises the <c>expanded</c> event
         */
        onExpandedChanged(){
            if(this._expandedChanged){
                this._expandedChanged.raise();
            }


            if (this.items.length > 1) {
                this.items[1].visible = this.expanded;
            }

            if(this.expanded) {
                this.btnFold.icon = LinearIcon.chevron_up;
            }else {
                this.btnFold.icon = LinearIcon.chevron_down;
            }
        }

        //endregion

        //region Events
        /**
         * Back field for event
         */
        private _expandedChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the expanded property changes
         *
         * @returns {LatteEvent}
         */
        get expandedChanged(): LatteEvent{
            if(!this._expandedChanged){
                this._expandedChanged = new LatteEvent(this);
            }
            return this._expandedChanged;
        }

        /**
         * Back field for event
         */
        private _fragmentItemChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the fragmentItem property changes
         *
         * @returns {LatteEvent}
         */
        get fragmentItemChanged(): LatteEvent{
            if(!this._fragmentItemChanged){
                this._fragmentItemChanged = new LatteEvent(this);
            }
            return this._fragmentItemChanged;
        }

        //endregion

        //region Properties
        /**
         * Property field
         */
        private _expanded: boolean = true;

        /**
         * Gets or sets a value indicating if the expando is expanded
         *
         * @returns {boolean}
         */
        get expanded(): boolean{
            return this._expanded;
        }

        /**
         * Gets or sets a value indicating if the expando is expanded
         *
         * @param {boolean} value
         */
        set expanded(value: boolean){

            // Check if value changed
            let changed: boolean = value !== this._expanded;

            // Set value
            this._expanded = value;

            // Trigger changed event
            if(changed){
                this.onExpandedChanged();
            }
        }

        /**
         * Property field
         */
        private _fragmentItem: Item = null;

        /**
         * Gets or sets the fragment item of the expando
         *
         * @returns {Item}
         */
        get fragmentItem(): Item{
            return this._fragmentItem;
        }

        /**
         * Gets or sets the fragment item of the expando
         *
         * @param {Item} value
         */
        set fragmentItem(value: Item){

            // Check if value changed
            let changed: boolean = value !== this._fragmentItem;

            // Set value
            this._fragmentItem = value;

            // Trigger changed event
            if(changed){
                this.onFragmentItemChanged();
            }
        }

        /**
         * Gets or sets the title of the expando
         *
         * @returns {string}
         */
        get title(): string {
            return this.lblTitle.text;
        }

        /**
         * Gets or sets the title of the expando
         *
         * @param {string} value
         */
        set title(value: string) {
            this.lblTitle.text = value;
        }

        //endregion

        //region Components
        /**
         * Field for btnFold property
         */
        private _btnFold: ButtonItem;

        /**
         * Gets the fold button
         *
         * @returns {ButtonItem}
         */
        get btnFold(): ButtonItem {
            if (!this._btnFold) {
                this._btnFold = new ButtonItem(null, LinearIcon.chevron_up, () => this.expanded = !this.expanded);
            }
            return this._btnFold;
        }

        /**
         * Field for lblTitle property
         */
        private _lblTitle: LabelItem;

        /**
         * Gets the title label
         *
         * @returns {LabelItem}
         */
        get lblTitle(): LabelItem {
            if (!this._lblTitle) {
                this._lblTitle = new LabelItem();
                this._lblTitle.addClass('expando-title');
            }
            return this._lblTitle;
        }


        /**
         * Field for toolbar property
         */
        private _toolbar: Toolbar;

        /**
         * Gets the toolbar of the expando
         *
         * @returns {Toolbar}
         */
        get toolbar(): Toolbar {
            if (!this._toolbar) {
                this._toolbar = new Toolbar();
                // this._toolbar.faceVisible = false;
            }
            return this._toolbar;
        }

        //endregion
    }

}