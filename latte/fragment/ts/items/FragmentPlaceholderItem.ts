/**
 * Created by josemanuel on 10/9/16.
 */
module latte {

    /**
     *
     */
    export class FragmentPlaceholderItem extends Item {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         *
         */
        constructor() {
            super();

            this.addClass('fragment-placeholder');
            this.focusable = true;
            this.allowDrop = true;
            this.addEventListener('dragover', (e: DragEvent) => this.onDragStart(e));
            this.addEventListener('dragleave', (e: DragEvent) => this.onDragEnd(e));
            this.addEventListener('drop', (e: DragEvent) => this.onDrop(e));
        }

        //region Private Methods
        //endregion

        //region Methods

        /**
         * Raises the <c>click</c> event
         */
        onClick(){
            if(this._click){
                this._click.raise();
            }
        }

        /**
         * Raises the <c>dragEnd</c> event
         */
        onDragEnd(e: DragEvent){
            if(this._dragEnd){
                this._dragEnd.raise(e);
            }

            if(this.allowDrop) {
                e.preventDefault();
            }

            this.dragging = false;
        }

        /**
         * Raises the <c>dragging</c> event
         */
        onDraggingChanged(){
            if(this._draggingChanged){
                this._draggingChanged.raise();
            }
            this.ensureClass('dragging', this.dragging);
        }

        /**
         * Raises the <c>dragStart</c> event
         */
        onDragStart(e: DragEvent){
            if(this._dragStart){
                this._dragStart.raise(e);
            }

            if(this.allowDrop) {
                e.preventDefault();
                this.dragging = true;
            }
        }

        /**
         * Raises the <c>drop</c> event
         */
        onDrop(e: DragEvent){
            if(this._drop){
                this._drop.raise(e);
            }

            if(this.allowDrop) {
                e.preventDefault();
            }
            this.dragging = false;
        }

        /**
         * Raises the <c>emptyIcon</c> event
         */
        onEmptyIconChanged(){
            if(this._emptyIconChanged){
                this._emptyIconChanged.raise();
            }

            if(this.emptyIcon) {
                this.emptyIcon.addClass('empty-icon');
                this.node.appendChild(this.emptyIcon.node);
            }

        }

        //endregion

        //region Events

        /**
         * Back field for event
         */
        private _click: LatteEvent;

        /**
         * Gets an event raised when user clicks the control
         *
         * @returns {LatteEvent}
         */
        get click(): LatteEvent{
            if(!this._click){
                this._click = new LatteEvent(this);
            }
            return this._click;
        }

        /**
         * Back field for event
         */
        private _dragEnd: LatteEvent;

        /**
         * Gets an event raised when the drag operation ends
         *
         * @returns {LatteEvent}
         */
        get dragEnd(): LatteEvent{
            if(!this._dragEnd){
                this._dragEnd = new LatteEvent(this);
            }
            return this._dragEnd;
        }

        /**
         * Back field for event
         */
        private _draggingChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the dragging property changes
         *
         * @returns {LatteEvent}
         */
        get draggingChanged(): LatteEvent{
            if(!this._draggingChanged){
                this._draggingChanged = new LatteEvent(this);
            }
            return this._draggingChanged;
        }

        /**
         * Back field for event
         */
        private _dragStart: LatteEvent;

        /**
         * Gets an event raised when a drag operation starts
         *
         * @returns {LatteEvent}
         */
        get dragStart(): LatteEvent{
            if(!this._dragStart){
                this._dragStart = new LatteEvent(this);
            }
            return this._dragStart;
        }

        /**
         * Back field for event
         */
        private _drop: LatteEvent;

        /**
         * Gets an event raised when the user drops data
         *
         * @returns {LatteEvent}
         */
        get drop(): LatteEvent{
            if(!this._drop){
                this._drop = new LatteEvent(this);
            }
            return this._drop;
        }

        /**
         * Back field for event
         */
        private _emptyIconChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the emptyIcon property changes
         *
         * @returns {LatteEvent}
         */
        get emptyIconChanged(): LatteEvent{
            if(!this._emptyIconChanged){
                this._emptyIconChanged = new LatteEvent(this);
            }
            return this._emptyIconChanged;
        }

        //endregion

        //region Properties

        /**
         * Property field
         */
        private _allowDrop: boolean = false;

        /**
         * Gets or sets a value indicating if the placeholder allows drop
         *
         * @returns {boolean}
         */
        get allowDrop(): boolean {
            return this._allowDrop;
        }

        /**
         * Gets or sets a value indicating if the placeholder allows drop
         *
         * @param {boolean} value
         */
        set allowDrop(value: boolean) {
            this._allowDrop = value;
        }

        /**
         * Property field
         */
        private _dragging: boolean = false;

        /**
         * Gets or sets a value indicating if the user is dragging something over the item
         *
         * @returns {boolean}
         */
        get dragging(): boolean{
            return this._dragging;
        }

        /**
         * Gets or sets a value indicating if the user is dragging something over the item
         *
         * @param {boolean} value
         */
        set dragging(value: boolean){

            // Check if value changed
            let changed: boolean = value !== this._dragging;

            // Set value
            this._dragging = value;

            // Trigger changed event
            if(changed){
                this.onDraggingChanged();
            }
        }

        //endregion

        //region Components
        /**
         * Property field
         */
        private _emptyIcon: IconItem = null;

        /**
         * Gets or sets the icon item
         *
         * @returns {IconItem}
         */
        get emptyIcon(): IconItem{
            return this._emptyIcon;
        }

        /**
         * Gets or sets the icon item
         *
         * @param {IconItem} value
         */
        set emptyIcon(value: IconItem){

            if(this._emptyIcon) {
                this._emptyIcon.element.remove();
            }

            // Check if value changed
            let changed: boolean = value !== this._emptyIcon;

            // Set value
            this._emptyIcon = value;

            // Trigger changed event
            if(changed){
                this.onEmptyIconChanged();
            }
        }
        //endregion
    }

}