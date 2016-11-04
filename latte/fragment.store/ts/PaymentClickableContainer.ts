/**
 * Created by josemanuel on 11/3/16.
 */
module latte {

    /**
     * Used to display buttons, with one being able to be checked.
     *
     * - Use the `clickables` collection to add buttons
     * - React to user seletion with `checkedClickableChanged`
     * - Set content (like a expando) using the `currentContent` property
     */
    export class PaymentClickableContainer extends PaymentClickableContainerBase {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         *
         */
        constructor() {
            super();
            this.clear();
        }

        //region Private Methods
        //endregion

        //region Methods

        private handle_click(c: PaymentClickable){
            this.removeContainer();

            // Set current clickable
            this.checkedClickable = c;
        }

        private removeContainer(){
            // Remove current container
            if(this._contentContainer) {
                this._contentContainer.removeFromParent();
                this._contentContainer = null;
            }
        }

        /**
         * Raises the <c>checkedClickable</c> event
         */
        onCheckedClickableChanged(){
            if(this._checkedClickableChanged){
                this._checkedClickableChanged.raise();
            }

            // Clear checks & Check selected
            this.clickables.each((s: PaymentClickable) => s.ensureClass('checked', s == this.checkedClickable) );
        }

        /**
         * Raises the <c>currentContent</c> event
         */
        onCurrentContentChanged(){
            if(this._currentContentChanged){
                this._currentContentChanged.raise();
            }

            this.removeContainer();

            if(this.currentContent) {
                // Insert after clickable
                if(this.checkedClickable) {
                    this.checkedClickable.element.insertAdjacentElement('afterend', this.contentContainer.element);
                }

                this.contentContainer.add(this.currentContent);
            }
        }
        //endregion

        //region Events

        /**
         * Back field for event
         */
        private _checkedClickableChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the checkedClickable property changes
         *
         * @returns {LatteEvent}
         */
        get checkedClickableChanged(): LatteEvent{
            if(!this._checkedClickableChanged){
                this._checkedClickableChanged = new LatteEvent(this);
            }
            return this._checkedClickableChanged;
        }

        /**
         * Back field for event
         */
        private _currentContentChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the currentContent property changes
         *
         * @returns {LatteEvent}
         */
        get currentContentChanged(): LatteEvent{
            if(!this._currentContentChanged){
                this._currentContentChanged = new LatteEvent(this);
            }
            return this._currentContentChanged;
        }
        //endregion

        //region Properties
        /**
         * Property field
         */
        private _checkedClickable: PaymentClickable = null;

        /**
         * Gets or sets the currently checked clickable
         *
         * @returns {PaymentClickable}
         */
        get checkedClickable(): PaymentClickable{
            return this._checkedClickable;
        }

        /**
         * Gets or sets the currently checked clickable
         *
         * @param {PaymentClickable} value
         */
        set checkedClickable(value: PaymentClickable){

            // Check if value changed
            let changed: boolean = value !== this._checkedClickable;

            // Set value
            this._checkedClickable = value;

            // Trigger changed event
            if(changed){
                this.onCheckedClickableChanged();
            }
        }

        /**
         * Field for contentContainer property
         */
        private _contentContainer: PaymentClickableContent;

        /**
         * Gets the current content container
         *
         * @returns {PaymentClickableContainer}
         */
        get contentContainer(): PaymentClickableContent {
            if (!this._contentContainer) {
                this._contentContainer = new PaymentClickableContent();
            }
            return this._contentContainer;
        }


        /**
         * Property field
         */
        private _currentContent: Element<HTMLElement> = null;

        /**
         * Gets or sets the current content to display on checked clickable
         *
         * @returns {Element<HTMLElement>}
         */
        get currentContent(): Element<HTMLElement>{
            return this._currentContent;
        }

        /**
         * Gets or sets the current content to display on checked clickable
         *
         * @param {Element<HTMLElement>} value
         */
        set currentContent(value: Element<HTMLElement>){

            // Check if value changed
            let changed: boolean = value !== this._currentContent;

            // Set value
            this._currentContent = value;

            // Trigger changed event
            if(changed){
                this.onCurrentContentChanged();
            }
        }

        /**
         * Field for clickables property
         */
        private _clickables: Collection<PaymentClickable>;

        /**
         * Gets the clickables
         *
         * @returns {Collection<PaymentClickable>}
         */
        get clickables(): Collection<PaymentClickable> {
            if (!this._clickables) {
                this._clickables = new Collection<PaymentClickable>(

                    // Item added
                    (c: PaymentClickable) => {

                        // Handle click
                        c.addEventListener('click', () => this.handle_click(c));

                        // Add to container
                        this.add(c);
                    },

                    // Item removed
                    (c: PaymentClickable)=> {
                        // Remove from container
                        c.removeFromParent();
                    });
            }
            return this._clickables;
        }
        //endregion

    }

}