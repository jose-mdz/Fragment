/// <reference path="datalatte.d.ts" />
/// <reference path="jquery.d.ts" />
/// <reference path="latte.d.ts" />
/// <reference path="latte.strings.d.ts" />
/// <reference path="latte.ui.strings.d.ts" />
declare module latte {
    /**
     * Represents selection modes for DateItem
     **/
    enum DateSelectionMode {
        /**
         * Single day
         **/
        DAY = 0,
        /**
         * No side specified so let to user selection
         **/
        MANUAL = 1,
        /**
         * Month
         **/
        MONTH = 2,
        /**
         * Week
         **/
        WEEK = 3,
        /**
         * Work week
         **/
        WORKWEEK = 4
    }
}
declare module latte {
    /**
     * Possible Directions
     **/
    enum Direction {
        /**
         * Horizontal direction
         **/
        HORIZONTAL = 0,
        /**
         * Vertical direction
         **/
        VERTICAL = 1,
        /**
         * Non established direction
         */
        NONE = 2
    }
}
declare module latte {
    /**
     * Enumerates sides of objects
     **/
    enum Side {
        /**
         * No side specified so automatic side is chosen.
         **/
        AUTO = 1,
        /**
         * Bottom side of something
         **/
        BOTTOM = 4,
        /**
         * Left side of something
         **/
        LEFT = 8,
        /**
         * Right side of something
         **/
        RIGHT = 16,
        /**
         * Top side of something
         **/
        TOP = 32
    }
}
declare module latte {
    /**
     * Defines possible transition modes for views
     **/
    enum Transition {
        /**
         * Fades out the current view and fades in the new one.
         **/
        FADE = 0,
        /**
         * Gives the impression of advancing forward.
         **/
        SWIPE_FORWARD = 1
    }
}
declare module latte {
    /**
     * Represents a basic element of the DOM, on which latte UI objects are constructed.
     **/
    class UiElement implements ISaveContainer, ISave {
        private static reminderId;
        /**
         * Collection of context items
         **/
        private static _contextItemsCollect;
        /**
         * Saves the coordinates where the drag operation started
         */
        private static _dragStart;
        /**
         * Flag to know if static constructor has been called
         */
        private static _staticInited;
        /**
         * Disables the text selection feature of User Agent on the specified element.
         **/
        static disableTextSelection(element: JQuery): JQuery;
        /**
         * Enables the text selection feature of User Agent on the specified element.
         **/
        static enableTextSelection(element: JQuery): JQuery;
        /**
         * Gets the opposite side of passed side
         * @param side
         * @returns {*}
         */
        static oppositeSide(side: Side): Side;
        /**
         * Static initializator
         */
        static staticInit(): void;
        /**
         *
         */
        private static _dragElement;
        /**
         * Gets the element dragged around to show user something is dragging.
         * @returns {JQuery}
         */
        static readonly dragElement: JQuery;
        /**
         *
         */
        private static _dragging;
        /**
         * Gets a value indicating if the element is being dragged
         * @returns {boolean}
         */
        static readonly dragging: boolean;
        /**
         *
         */
        private static _draggingElement;
        /**
         * Gets the UiElement currently being dragged (if any)
         * @returns {boolean}
         */
        static readonly draggingElement: UiElement;
        /**
         * Property field
         */
        private static _dropTarget;
        /**
         * Gets or sets the element where dragging element will be dropped
         *
         * @returns {UiElement}
         */
        /**
        * Gets or sets the element where dragging element will be dropped
        *
        * @param {UiElement} value
        */
        static dropTarget: UiElement;
        protected localId: number;
        /**
         *
         **/
        private _enabled;
        /**
         *
         */
        private _dragSource;
        /**
         *
         */
        private _dropped;
        /**
         *
         **/
        private _focusable;
        /**
         *
         */
        private _hideWhileDragging;
        /**
         *
         **/
        private _tag;
        /**
         *
         **/
        private _tooltip;
        /**
         *
         */
        private _visible;
        /**
         * Queue of changes saving
         */
        private saveChangesQueue;
        /**
         * Collection of items in contextual menu.
         **/
        contextItems: Collection<Item>;
        /**
         * Holds a pointer of the element on the DOM.
         **/
        element: JQuery;
        /**
         * Raised when the enabled state of item is changed.
         **/
        enabledChanged: LatteEvent;
        /**
         * Raised when the element updates its layout.
         **/
        layout: LatteEvent;
        /**
         * Raised when the menu with <c>contextItems</c> is about to be dislplayed.
         **/
        contextItemsShow: LatteEvent;
        /**
         * Raised when the <c>visible</c> property value changes
         **/
        visibleChanged: LatteEvent;
        /**
         * Creates the UiElement.
         **/
        constructor();
        /**
         *
         **/
        private _contextMenu;
        /**
         * Shorthand for the addEventListener of the element
         * @param event
         * @param f
         * @param useCapture
         */
        addEventListener(event: string, f: (...any: any[]) => any, useCapture?: boolean): void;
        /**
         * Adds classes to the element
         **/
        addClass(classString: string): this;
        /**
         * Appends the view to the specified element.
         **/
        appendTo(element: any): UiElement;
        /**
         * Passes css method to <c>element</c>
         **/
        css(css: any, value?: any): UiElement;
        /**
         * Ensures the class is present on the element, depending on the specified condition.
         * @param className
         * @param condition
         */
        ensureClass(className: string, condition: boolean): void;
        /**
         * Finalizes the element
         */
        finalize(): void;
        /**
         * Implementation. Gets the save calls of all its descendants.
         */
        getSaveCalls(): ICall[];
        /**
         * SPECIAL GETTER
         Gets or sets a value indicating if the view contains elments with unsaved changes
         **/
        getUnsavedChanges(): boolean;
        /**
         * Raises the <c>beingDragged</c> event
         */
        onBeingDraggedChanged(): void;
        /**
         * Raises the <c>blur</c> event
         */
        onBlur(): void;
        /**
         * Raises the <c>changesWhileSaving</c> event
         */
        onChangesWhileSavingChanged(): void;
        /**
         * Raises the <c>contextItemsShow</c> event.
         **/
        onContextItemsShow(): void;
        /**
         * Called when the element who shows dragging is created, from this UiElement.
         */
        onCreateDragElement(): JQuery;
        /**
         * Raises the <c>dragOver</c> event
         */
        onDragOver(e: MouseEvent): boolean;
        /**
         * Raises the <c>dropped</c> event
         */
        onDropped(): void;
        /**
         * Raises the <c>dropElement</c> event.
         */
        onDropElement(): void;
        /**
         * Raises the <c>enabledChanged</c> event.
         **/
        onEnabledChanged(): void;
        /**
         * Raises the <c>focusable</c> event
         */
        onFocusableChanged(): void;
        /**
         * Raises the <c>finalizing</c> event
         */
        onFinalizing(): any;
        /**
         * Raises the <c>focused</c> event
         */
        onFocused(): void;
        /**
         * Raises the <c>hidden</c> event
         */
        onHiddenChanged(): void;
        /**
         * Raises the <c>isSavingChanges</c> event
         */
        onIsSavingChangesChanged(): void;
        /**
         * Raises the <c>layout</c> event.
         **/
        onLayout(): void;
        /**
         * Raises the <c>visibleChanged</c> event.
         **/
        onVisibleChanged(): void;
        /**
         * Raises the <c>savedChanges</c> event
         */
        onSavedChanges(): void;
        /**
         * Raises the <c>savingChanges</c> event
         */
        onSavingChanges(): boolean;
        /**
         * Raises the <c>unsavedChangesChanged</c> event
         */
        onUnsavedChangesChanged(): void;
        /**
         * Removes classes to the element
         **/
        removeClass(classString: string): this;
        /**
         * Saves changes on view.
         Override <c>onSavingChanges</c> to custom save your data.
         **/
        saveChanges(callback?: () => any): IMessage;
        /**
         * SPECIAL SETTER
         Gets or sets a value indicating if the view contains elments with unsaved changes
         **/
        setUnsavedChanges(value?: boolean, silent?: boolean): void;
        /**
         * Shows a menu with the <c>contextItems</c> at the specified position.
         **/
        showContextMenu(pageX: number, pageY: number): MenuOverlay;
        /**
         * Updates the changes based on saveItems
         */
        updateSavedChanges(): void;
        /**
         * Back field for event
         */
        private _beingDraggedChanged;
        /**
         * Gets an event raised when the value of the beingDragged property changes
         *
         * @returns {LatteEvent}
         */
        readonly beingDraggedChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _blur;
        /**
         * Gets an event raised when the element loses focus (if focusable)
         *
         * @returns {LatteEvent}
         */
        readonly blur: LatteEvent;
        /**
         * Back field for event
         */
        private _dragOver;
        /**
         * Back field for event
         */
        private _changesWhileSavingChanged;
        /**
         * Gets an event raised when the value of the changesWhileSaving property changes
         *
         * @returns {LatteEvent}
         */
        readonly changesWhileSavingChanged: LatteEvent;
        /**
         * Gets an event raised when an element is dragged over this element.
         * The handler must return <c>true</c> to confirm drop is allowed
         *
         * @returns {LatteEvent}
         */
        readonly dragOver: LatteEvent;
        /**
         * Back field for event
         */
        private _dropElement;
        /**
         * Gets an event raised when an element is dropped over this element.
         * For an element to be allowed to be dropped over,
         *  the <c>dragOver</c> event handler must return true before the drop operation.
         *
         * @returns {LatteEvent}
         */
        readonly dropElement: LatteEvent;
        /**
         * Back field for event
         */
        private _finalizing;
        /**
         * Gets an event raised when the element is being finalized
         *
         * @returns {LatteEvent}
         */
        readonly finalizing: LatteEvent;
        /**
         * Back field for event
         */
        private _focused;
        /**
         * Gets an event raised when the element recieves focus (if focusasble)
         *
         * @returns {LatteEvent}
         */
        readonly focused: LatteEvent;
        /**
         * Back field for event
         */
        private _hiddenChanged;
        /**
         * Gets an event raised when the value of the hidden property changes
         *
         * @returns {LatteEvent}
         */
        readonly hiddenChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _isSavingChangesChanged;
        /**
         * Gets an event raised when the value of the isSavingChanges property changes
         *
         * @returns {LatteEvent}
         */
        readonly isSavingChangesChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _savedChanges;
        /**
         * Gets an event raised when the changes have finalized saving
         *
         * @returns {LatteEvent}
         */
        readonly savedChanges: LatteEvent;
        /**
         * Back field for event
         */
        private _savingChanges;
        /**
         * Gets an event raised when the <c>saveChanges</c> method is called.
         *
         * @returns {LatteEvent}
         */
        readonly savingChanges: LatteEvent;
        /**
         * Back field for event
         */
        private _unsavedChangesChanged;
        /**
         * Gets an event raised when the unsavedChanges variable value changes
         *
         * @returns {LatteEvent}
         */
        readonly unsavedChangesChanged: LatteEvent;
        /**
         * Property field
         */
        private _beingDragged;
        /**
         * Gets or sets a value indicating if the element is being dragged
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets a value indicating if the element is being dragged
        *
        * @param {boolean} value
        */
        beingDragged: boolean;
        /**
         * Property field
         */
        private _changesWhileSaving;
        /**
         * Gets or sets a value indicating if changes were made while saving
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets a value indicating if changes were made while saving
        *
        * @param {boolean} value
        */
        changesWhileSaving: boolean;
        /**
         * Gets or sets the element who will act as source for dragging.
         * @returns {JQuery}
         */
        /**
        *
        * @param value
        */
        dragSource: JQuery;
        /**
         * Gets an event raised when the element is dropped after a dragging operation
         */
        readonly dropped: LatteEvent;
        /**
         * Gets or sets a value indicating if the item is enabled.
         **/
        /**
        * Gets or sets a value indicating if the item is enabled.
        **/
        enabled: boolean;
        /**
         * Property field
         */
        private _finalized;
        /**
         * Gets a value indicating if the element has been finalized
         *
         * @returns {boolean}
         */
        readonly finalized: boolean;
        /**
         * Gets or sets a value
         **/
        /**
        * Gets or sets a value indicating if the element should be focusable
        **/
        focusable: boolean;
        /**
         * Back field for event
         */
        private _focusableChanged;
        /**
         * Gets an event raised when the value of the focusable property changes
         *
         * @returns {LatteEvent}
         */
        readonly focusableChanged: LatteEvent;
        /**
         * Gets or sets the height of the element.
         **/
        /**
        * Gets or sets the height of the element.
        **/
        height: number;
        /**
         * Property field
         */
        private _hidden;
        /**
         * Gets or sets a value indicating if the element is hidde
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets a value indicating if the element is hidde
        *
        * @param {boolean} value
        */
        hidden: boolean;
        /**
         * Gets or sets a value indicating if the element should be hidden while its being dragged.
         * @returns {boolean}
         */
        /**
        * Gets or sets a value indicating if the element should be hidden while its being dragged.
        * @param value
        */
        hideWhileDragging: boolean;
        /**
         * Property field
         */
        private _isSavingChanges;
        /**
         * Gets or sets a value indicating if the element is saving its changes
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets a value indicating if the element is saving its changes
        *
        * @param {boolean} value
        */
        isSavingChanges: boolean;
        /**
         * Gets the raw HTML element
         *
         * @returns {HTMLDivElement}
         */
        readonly node: HTMLDivElement;
        /**
         * Gets the HTML element of this element
         * @returns {HTMLElement}
         */
        readonly raw: HTMLElement;
        /**
         * Field for saveItems property
         */
        private _saveItems;
        /**
         * Gets the ISave items
         *
         * @returns {Collection<ISave>}
         */
        readonly saveItems: Collection<ISave>;
        /**
         * Gets or sets a generic object to add extra information to the element.
         **/
        /**
        * Gets or sets a generic object to add extra information to the element.
        **/
        tag: any;
        /**
         * Gets or sets the tooltip of the element
         **/
        /**
        * Gets or sets the tooltip of the element
        **/
        tooltip: string;
        /**
         *
         **/
        private _unsavedChanges;
        /**
         * Gets or sets a value indicating if the view contains elments with unsaved changes
         **/
        /**
        * Gets or sets a value indicating if the view contains elments with unsaved changes
        **/
        unsavedChanges: boolean;
        /**
         * Gets or sets a value indicating if the element should be visible.
         **/
        /**
        * Gets or sets a value indicating if the element should be visible.
        **/
        visible: boolean;
        /**
         * Gets or sets the width of the element.
         **/
        /**
        * Gets or sets the width of the element.
        **/
        width: number;
    }
}
declare module latte {
    /**
     * Base class for UI items.

     The <c>element</c> property points to the DOM element who contains the item.
     **/
    class Item extends UiElement {
        /**
         * Creates a Clickable element. This element will react to clicks and mouse movement.
         **/
        static clickable(): JQuery;
        /**
         * Creates a Selectable element. This element will react to clicks and mouse movement.
         **/
        static selectable(): JQuery;
        /**
         *
         */
        private _tab;
        /**
         * Creates a new <c>Item</c>
         **/
        constructor();
        /**
         * Brings the item to the front
         **/
        bringToFront(): void;
        /**
         * Gets the <c>MenuOverlay</c> who contains this <c>Item</c>
         **/
        readonly parentMenu: MenuOverlay;
        /**
         * Gets a value indicating if the parent of this <c>Item</c> is a <c>MenuOverlay</c>
         **/
        readonly parentIsMenu: boolean;
        /**
         * Gets or sets the tab or tab index of item when inside a <c>Ribbon</c>
         **/
        /**
        * Gets or sets the tab or tab index of item when inside a <c>Ribbon</c>
        **/
        tab: any;
    }
}
declare module latte {
    /**
     * Renders an element that fills the space where its added. This is the base class for Views in DataLatte.

     The main feature of View is the fact that it can contains another View or Views.
     **/
    class View extends UiElement {
        private static _smallScreen;
        /**
         *
         **/
        private static _defaultButton;
        /**
         * Flag to recognize if statically initialized
         **/
        private static _initialized;
        /**
         *
         **/
        private static _layer;
        /**
         *
         **/
        private static _mainView;
        /**
         *
         **/
        private static _mainViewHolder;
        /**
         *
         **/
        private static _modalView;
        /**
         *
         */
        private static smallScreenChanged;
        /**
         *
         **/
        static getMainView(): View;
        /**
         *
         **/
        static initStatic(): void;
        /**
         * SPECIAL GETTER
         Gets or sets the modalView of the User Agent Viewport
         **/
        static getModalView(): DialogView;
        /**
         * Raises the <c>smallScreenChanged</c> event
         */
        static onSmallScreenChanged(): void;
        /**
         * SPECIAL SETTER
         Gets or sets the modalView of the User Agent Viewport
         **/
        static setModalView(view?: DialogView, itemsArray?: Array<Item>): void;
        /**
         * Sets the mainView of the User Agent Viewport
         **/
        static setMainView(view: View, transition?: Transition, milliseconds?: number): void;
        /**
         * Gets or sets the current default button of the User Agent.
         Any press to the ENTER key will be redirected as click for that button.
         **/
        /**
        * Gets or sets the current default button of the User Agent.
        Any press to the ENTER key will be redirected as click for that button.
        **/
        static defaultButton: ButtonItem;
        /**
         * Gets or sets the mainView of the User Agent Viewport
         **/
        /**
        * Gets or sets the mainView of the User Agent Viewport
        **/
        static mainView: View;
        /**
         * Gets or sets the modalView of the User Agent Viewport
         **/
        /**
        * Gets or sets the modalView of the User Agent Viewport
        **/
        static modalView: DialogView;
        /**
         * Gets or sets a value indicating if the view is in a small screen (aka iPhone Screen)
         * @returns {boolean}
         */
        /**
        * Gets or sets a value indicating if the view is in a small screen (aka iPhone Screen)
        * @param value
        */
        static smallScreen: boolean;
        /**
         *
         **/
        private _infoItem;
        /**
         *
         **/
        private _padding;
        /**
         *
         **/
        private _parentIsModal;
        /**
         *
         **/
        private _parentView;
        /**
         *
         **/
        private _view;
        /**
         * Holds the DOM element in which the View content is contained
         **/
        container: JQuery;
        /**
         * Creates the <c>View</c>
         **/
        constructor();
        /**
         * Focuses the first input if any
         **/
        focusInput(): void;
        /**
         * Returns the current view of the view
         **/
        getView(): View;
        /**
         * Raises the <c>hidden</c> event
         **/
        /**
         * Raises the <c>layout</c> event
         **/
        onLayout(): void;
        /**
         * Raises the <c>load</c> event
         */
        onLoad(): void;
        /**
         * Raises the <c>shown</c> event
         */
        onShown(): void;
        /**
         * Raises the <c>unload</c> event
         **/
        onUnload(): any;
        /**
         * Sets the <c>View</c> inside this view.
         If view swap fails, it will return <c>false</c>
         **/
        setView(view?: View, transition?: Transition, milliseconds?: number): boolean;
        /**
         * Back field for event
         */
        private _load;
        /**
         * Gets an event raised when the view is loaded
         *
         * @returns {LatteEvent}
         */
        readonly load: LatteEvent;
        /**
         * Back field for event
         */
        private _shown;
        /**
         * Gets an event raised when the view is already visible
         *
         * @returns {LatteEvent}
         */
        readonly shown: LatteEvent;
        /**
         * Back field for event
         */
        private _unload;
        /**
         * Gets an event raised when the view is unloaded. If result of event is false, unload will be aborted
         *
         * @returns {LatteEvent}
         */
        readonly unload: LatteEvent;
        /**
         * Gets or sets the info item of the view. Its shown in the back of the container
         and centered into the view.
         **/
        /**
        * Gets or sets the info item of the view. Its shown in the back of the container
        and centered into the view.
        **/
        infoItem: Item;
        /**
         * Gets or sets the padding of the container
         **/
        /**
        * Gets or sets the padding of the container
        **/
        padding: number;
        /**
         * Gets or sets a value indicating if the parent of the view is modal
         **/
        /**
        * Gets or sets a value indicating if the parent of the view is modal
        **/
        parentIsModal: boolean;
        /**
         * Gets the parent view of this view.
         **/
        readonly parentView: View;
        /**
         * Gets or sets the view of the view
         **/
        /**
        * Gets or sets the view of the view
        **/
        view: View;
    }
}
declare module latte {
    /**
     * Base class for items who capture values from user.

     Classes who inherits from ValueItem must implement <c>value</c> method
     and initialize the <c>input</c> property to the focusable.
     **/
    class ValueItem<T> extends Item {
        /**
         * Every ValueItem must create its own <c>input</c> element
         **/
        constructor();
        /**
         * Override
         * @returns {String}
         */
        onGetValueString(): string;
        /**
         * Raises the <c>value</c> event
         */
        onValueChanged(): void;
        /**
         * Sets the value of the item, optionally silently.
         * @param {T} value
         * @param {boolean} silently
         */
        setValue(value: T, silently?: boolean): void;
        /**
         * Back field for event
         */
        private _valueChanged;
        /**
         * Gets an event raised when the value of the value property changes
         *
         * @returns {LatteEvent}
         */
        readonly valueChanged: LatteEvent;
        /**
         * Property field
         */
        private _value;
        /**
         * Gets or sets the value this item represents
         *
         * @returns {T}
         */
        /**
        * Gets or sets the value this item represents
        *
        * @param {T} value
        */
        value: T;
        /**
         * Gets the value as a string
         *
         * @returns {string}
         */
        readonly valueString: string;
    }
}
declare module latte {
    class Overlay extends UiElement {
        /**
         *
         */
        private _top;
        /**
         *
         */
        private _left;
        /**
         *
         */
        private _parent;
        /**
         * Creates the overlay
         */
        constructor();
        private ensureOnTree;
        /**
         * Handles dimisser add
         * @param {latte.OverlayDismisser} d
         */
        private onDismisserAdded;
        /**
         * Handles dismisser remove
         * @param {latte.OverlayDismisser} d
         */
        private onDismisserRemoved;
        /**
         * Sets the value of isClosed
         * @param {boolean} value
         */
        protected setIsClosed(value: boolean): void;
        /**
         * Sets value of is showm
         * @param {boolean} value
         */
        protected setIsShown(value: boolean): void;
        /**
         * Closes the overlay
         */
        close(): void;
        /**
         * Sets the parent of the overlay, and the overlay is inserted as first node of the parent
         * @param parent
         */
        setFirstInParent(parent: UiElement): void;
        /**
         * Raises the <c>result</c> event
         */
        onResultChanged(): void;
        /**
         * Raises the <c>shown</c> event
         */
        onShown(): void;
        /**
         * Shows the overlay
         */
        show(): void;
        /**
         * Shows the overlay at a specified position
         * @param {number} left
         * @param {number} top
         */
        showAt(left: number, top: number): void;
        /**
         * Shows at the specified position of the specified element
         *
         * @param side
         * @param element
         */
        showAtSide(side: Side, uielement: UiElement): void;
        /**
         * Shows the Overlay at the viewport center
         */
        showAtVieportCenter(): void;
        /**
         * Back field for event
         */
        private _shown;
        /**
         * Gets an event raised when the overlay is shown
         *
         * @returns {LatteEvent}
         */
        readonly shown: LatteEvent;
        /**
         * Field for dismissers property
         */
        private _dismissers;
        /**
         * Gets the dismissers of the overlay
         *
         * @returns {Collection<OverlayDismisser>}
         */
        readonly dismissers: Collection<OverlayDismisser>;
        /**
         * Property field
         */
        private _isClosed;
        /**
         * Gets a value indicating if the overlay is closed
         *
         * @returns {boolean}
         */
        readonly isClosed: boolean;
        /**
         * Property field
         */
        private _isShown;
        /**
         * Gets a value indicating if the overlay is already shown
         *
         * @returns {boolean}
         */
        readonly isShown: boolean;
        /**
         * Gets the left coordinate of the overlay
         * @returns {number}
         */
        /**
        * Sets the top coordinate of the overlay
        *
        * @param value
        */
        left: number;
        /**
         * Gets or sets the parent element of the overlay (To inherit style and such)
         * @returns {UiElement}
         */
        /**
        * Gets or sets the parent element of the overlay (To inherit style and such)
        * @param value
        */
        parent: UiElement;
        /**
         * Back field for event
         */
        private _resultChanged;
        /**
         * Gets an event raised when the value of the result property changes
         *
         * @returns {LatteEvent}
         */
        readonly resultChanged: LatteEvent;
        /**
         * Property field
         */
        private _result;
        /**
         * Gets or sets the result of the overlay
         *
         * @returns {any}
         */
        /**
        * Gets or sets the result of the overlay
        *
        * @param {any} value
        */
        result: any;
        /**
         * Gets the top coordinate of the overlay
         *
         * @returns {number}
         */
        /**
        * Sets the top coordinate of the overlay
        *
        * @param value
        */
        top: number;
    }
}
declare module latte {
    /**
     * Shows items in a stack
     **/
    class ItemStack extends Item {
        /**
         *
         **/
        private _padding;
        /**
         * Pointer to the DOM element where items are placed
         **/
        container: JQuery;
        /**
         * Collection of items in the stack
         **/
        items: Collection<Item>;
        /**
         * Raised when the items are changed
         **/
        itemsChanged: LatteEvent;
        /**
         * Creates the stack of items
         **/
        constructor(items?: Array<Item>);
        /**
         * Corrects the item collection by checking the DOM items
         */
        correctCollection(): void;
        /**
         *
         **/
        onAddItem(item: Item): void;
        /**
         *
         **/
        onRemoveItem(item: Item): void;
        /**
         * Adds an item to the <c>items</c> collection
         **/
        add(item: Item): void;
        /**
         * Clears all elements of collection
         **/
        clear(): void;
        /**
         * Raises the <c>itemsChanged</c> event
         **/
        onItemsChanged(): void;
        /**
         * Overriden
         **/
        onLayout(): void;
        /**
         * Removes an item from the <c>items</c> collection
         **/
        remove(item: Item): void;
        /**
         * Gets the count of <c>items</c> collection
         **/
        readonly count: number;
        /**
         * Gets or sets the padding between items and edges of stack.
         If set to null, paddings and margins will be removed.
         Default is null.
         **/
        /**
        * Gets or sets the padding between items and edges of stack.
        If set to null, paddings and margins will be removed.
        Default is null.
        **/
        padding: number;
    }
}
declare module latte {
    /**
     * Represents a square Icon.

     Icons may be come from a single image, or from a sprite image with several icons.
     <c>IconItem</c> comes with a default sprite built in with a wide variety of icons.
     **/
    class IconItem extends Item {
        static sidebar_left_getter: () => IconItem;
        static sidebar_right_getter: () => IconItem;
        /**
         * Default URL of sprite used if coordinates are specified, and no <c>url</c> is provided.
         **/
        static readonly defaultUrl: string;
        /**
         * Creates an empty icon of the specified size
         **/
        static empty(size?: number): IconItem;
        /**
         * Gets a standard icon of the specified u and v coordinates. Size 16.
         **/
        static standard(u: number, v: number, size?: number): IconItem;
        /**
         *
         * @returns {IconItem}
         */
        static fileIcon(): IconItem;
        /**
         *
         * @returns {IconItem}
         */
        static folderIcon(): IconItem;
        /**
         *
         * @returns {IconItem}
         */
        static homeIcon(): IconItem;
        /**
         *
         * @returns {IconItem}
         */
        static newIcon(): IconItem;
        /**
         *
         * @returns {IconItem}
         */
        static saveIcon(): IconItem;
        /**
         *
         * @returns {IconItem}
         */
        static refreshIcon(): IconItem;
        /**
         *
         * @returns {IconItem}
         */
        static sidebarLeft(): IconItem;
        /**
         *
         * @returns {IconItem}
         */
        static sidebarRight(): IconItem;
        /**
         *
         * @returns {IconItem}
         */
        static editIcon(): IconItem;
        /**
         *
         * @returns {IconItem}
         */
        static deleteIcon(): IconItem;
        /**
         * Creates the icon
         **/
        constructor();
        /**
         * Returns a clone of the icon
         **/
        clone(): IconItem;
        /**
         *
         **/
        private _name;
        /**
         * Gets or sets the name of the icon
         **/
        /**
        * Gets or sets the name of the icon
        **/
        name: string;
        /**
         *
         **/
        private _size;
        /**
         * Gets or sets the size of the icon
         The only possible values are: <c>16</c> | <c>32</c> | <c>48</c>
         **/
        /**
        * Gets or sets the size of the icon
        The only possible values are: <c>16</c> | <c>32</c> | <c>48</c>
        **/
        size: number;
        /**
         * Gets or sets the U coordiante of the icon inside image
         **/
        /**
        * Gets or sets the U coordiante of the icon inside image
        **/
        u: number;
        /**
         *
         **/
        private _u;
        /**
         *
         **/
        private _url;
        /**
         * Gets or sets the URL of the icon's image URL
         **/
        /**
        * Gets or sets the URL of the icon's image URL
        **/
        url: string;
        /**
         *
         **/
        private _v;
        /**
         * Gets or sets the U coordiante of the icon inside image
         **/
        /**
        * Gets or sets the U coordiante of the icon inside image
        **/
        v: number;
        /**
         *
         **/
        private _x;
        /**
         * Gets or sets the X coordinate of icon inside image (As a sprite)
         **/
        /**
        * Gets or sets the X coordinate of icon inside image (As a sprite)
        **/
        x: number;
        /**
         *
         **/
        private _y;
        /**
         * Gets or sets the Y coordinate of icon inside image (As a sprite)
         **/
        /**
        * Gets or sets the Y coordinate of icon inside image (As a sprite)
        **/
        y: number;
    }
}
declare module latte {
    /**
     * Represents an item that is selectable
     **/
    class SelectableItem extends Item {
        /**
         * Creates a SelectableItem with an inner item
         * @param {latte.Item} item
         */
        static fromInnerItem(innerItem: Item, tag?: any): SelectableItem;
        private lastItem;
        /**
         * Creates the selectable
         **/
        constructor();
        /**
         *
         **/
        private _thisClick;
        /**
         *
         **/
        private _thisMouseDown;
        /**
         *
         **/
        private _thisMouseOut;
        /**
         *
         **/
        private _thisMouseOver;
        /**
         * Raises the <c>innerItem</c> event
         */
        onInnerItemChanged(): void;
        /**
         * Raises the <c>selected</c> event
         */
        onSelectedChanged(): void;
        /**
         * Sets a value indicating if the item is currently selected.
         * Optionally specifies if <c>selectedChanged</c> event should be raised, if not specified, event will be raised.
         */
        setSelected(value?: boolean, raiseEvent?: boolean): void;
        /**
         * Back field for event
         */
        private _innerItemChanged;
        /**
         * Gets an event raised when the value of the innerItem property changes
         *
         * @returns {LatteEvent}
         */
        readonly innerItemChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _selectedChanged;
        /**
         * Gets an event raised when the value of the selected property changes
         *
         * @returns {LatteEvent}
         */
        readonly selectedChanged: LatteEvent;
        /**
         * Property field
         */
        private _innerItem;
        /**
         * Gets or sets the hosted inner item of this item
         *
         * @returns {Item}
         */
        /**
        * Gets or sets the hosted inner item of this item
        *
        * @param {Item} value
        */
        innerItem: Item;
        /**
         * Property field
         */
        private _selected;
        /**
         * Gets or sets a value indicating if the item is currently selected
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets a value indicating if the item is currently selected
        *
        * @param {boolean} value
        */
        selected: boolean;
    }
}
declare module latte {
    /**
     * Represents a single label
     **/
    class LabelItem extends Item {
        /**
         *
         */
        private _iconAndTextPadding;
        /**
         *
         **/
        private _direction;
        /**
         *
         **/
        private _icon;
        /**
         *
         **/
        private _linkStyle;
        /**
         *
         **/
        private _preformatted;
        /**
         *
         **/
        private _textWrap;
        /**
         *
         **/
        private _title;
        /**
         * Points to the element where the text and description elements are stored
         **/
        contentElement: JQuery;
        /**
         * Points to the element where the description is stored
         **/
        descriptionElement: JQuery;
        /**
         * Points to the element where the icon is stored
         **/
        iconElement: JQuery;
        /**
         * Points to the element where the text is stored
         **/
        textElement: JQuery;
        /**
         * Raised when user clicks the label and its a link label
         **/
        navigate: LatteEvent;
        /**
         * Raised when description() value changes
         **/
        descriptionChanged: LatteEvent;
        /**
         * Raised when icon() value changes
         **/
        iconChanged: LatteEvent;
        /**
         *
         **/
        constructor(text?: string, description?: string, icon?: IconItem, title?: number);
        /**
         * Updates the <c>white-space</c> CSS property
         **/
        private _updateWhitespace;
        /**
         * Updates the <c>.icon-and-text</c> flag.
         Also updates margin of label-cotent
         **/
        updateIconAndTextFlag(): void;
        /**
         * Raises the <c>descriptionChanged</c> event
         **/
        onDescriptionChanged(): void;
        /**
         * Raises the <c>iconChanged</c> event
         **/
        onIconChanged(): void;
        /**
         * Raises the <c>navigate</c> event
         **/
        onNavigate(): void;
        /**
         * Raises the <c>text</c> event
         */
        onTextChanged(): void;
        /**
         * Back field for event
         */
        private _textChanged;
        /**
         * Gets an event raised when the value of the text property changes
         *
         * @returns {LatteEvent}
         */
        readonly textChanged: LatteEvent;
        /**
         * Gets or sets the description of label, shown below the text.
         **/
        /**
        * Gets or sets the description of label, shown below the text.
        **/
        description: string;
        /**
         * Gets or sets the direction of the label
         **/
        /**
        * Gets or sets the direction of the label
        **/
        direction: Direction;
        /**
         * Gets or sets the icon of the label
         **/
        /**
        * Gets or sets the icon of the label
        **/
        icon: IconItem;
        iconAndTextPadding: number;
        /**
         * Gets or sets a value indicating if the label has a link style
         **/
        /**
        * Gets or sets a value indicating if the label has a link style
        **/
        linkStyle: boolean;
        /**
         * Gets or sets if label uses preformatted text. Or PRE whitespace
         **/
        /**
        * Gets or sets if label uses preformatted text. Or PRE whitespace
        **/
        preformatted: boolean;
        /**
         * Property field
         */
        private _text;
        /**
         * Gets or sets the text of the label
         *
         * @returns {string}
         */
        /**
        * Gets or sets the text of the label
        *
        * @param {string} value
        */
        text: string;
        /**
         * Gets or sets a value indicating if the text is wrapped in lines
         **/
        /**
        * Gets or sets a value indicating if the text is wrapped in lines
        **/
        textWrap: boolean;
        /**
         * Gets or sets the title level of this label.
         Possible values are in the range from 0 to 5.
         **/
        /**
        * Gets or sets the title level of this label.
        Possible values are in the range from 0 to 5.
        **/
        title: number;
    }
}
declare module latte {
    class AnchorView extends View {
        /**
         * Initializes view, optionally with an anchor item.
         */
        constructor(anchorTop?: Item);
        /**
         * Raises the <c>layout</c> event.
         **/
        onLayout(): void;
        /**
         * Back field for event
         */
        private _anchorTopChanged;
        /**
         * Gets an event raised when the value of anchorTop changes
         *
         * @returns {LatteEvent}
         */
        readonly anchorTopChanged: LatteEvent;
        /**
         * Raises the <c>anchorTopChanged</c> event
         */
        onAnchorTopChanged(): void;
        /**
         * Back field for event
         */
        private _anchorRightChanged;
        /**
         * Gets an event raised when the value of anchorRight changes
         *
         * @returns {LatteEvent}
         */
        readonly anchorRightChanged: LatteEvent;
        /**
         * Raises the <c>anchorRightChanged</c> event
         */
        onAnchorRightChanged(): void;
        /**
         * Back field for event
         */
        private _anchorBottomChanged;
        /**
         * Gets an event raised when the value of anchorBottom changes
         *
         * @returns {LatteEvent}
         */
        readonly anchorBottomChanged: LatteEvent;
        /**
         * Raises the <c>anchorBottomChanged</c> event
         */
        onAnchorBottomChanged(): void;
        /**
         * Back field for event
         */
        private _anchorLeftChanged;
        /**
         * Gets an event raised when when what?
         *
         * @returns {LatteEvent}
         */
        readonly anchorLeftChanged: LatteEvent;
        /**
         * Raises the <c>anchorLeftChanged</c> event
         */
        onAnchorLeftChanged(): void;
        /**
         * Back field for event
         */
        private _anchorTopVisibleChanged;
        /**
         * Gets an event raised when the value of anchorTopVisible changes
         *
         * @returns {LatteEvent}
         */
        readonly anchorTopVisibleChanged: LatteEvent;
        /**
         * Raises the <c>anchorTopVisibleChanged</c> event
         */
        onAnchorTopVisibleChanged(): void;
        /**
         * Back field for event
         */
        private _anchorRightVisibleChanged;
        /**
         * Gets an event raised when the value of anchorRightVisible changes
         *
         * @returns {LatteEvent}
         */
        readonly anchorRightVisibleChanged: LatteEvent;
        /**
         * Raises the <c>anchorRightVisibleChanged</c> event
         */
        onAnchorRightVisibleChanged(): void;
        /**
         * Back field for event
         */
        private _anchorBottomVisibleChanged;
        /**
         * Gets an event raised when the value of anchorBottomVisible changed
         *
         * @returns {LatteEvent}
         */
        readonly anchorBottomVisibleChanged: LatteEvent;
        /**
         * Raises the <c>anchorBottomVisibleChanged</c> event
         */
        onAnchorBottomVisibleChanged(): void;
        /**
         * Back field for event
         */
        private _anchorLeftVisibleChanged;
        /**
         * Gets an event raised when the value of anchorLeftVisible changed
         *
         * @returns {LatteEvent}
         */
        readonly anchorLeftVisibleChanged: LatteEvent;
        /**
         * Raises the <c>anchorLeftVisibleChanged</c> event
         */
        onAnchorLeftVisibleChanged(): void;
        /**
         * Property field
         */
        private _anchorTop;
        /**
         * Gets or sets the top anchor item
         *
         * @returns {Item}
         */
        /**
        * Gets or sets the top anchor item
        *
        * @param {Item} value
        */
        anchorTop: Item;
        /**
         * Property field
         */
        private _anchorTopVisible;
        /**
         * Gets or sets the visibility of the top anchor item
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets the visibility of the top anchor item
        *
        * @param {boolean} value
        */
        anchorTopVisible: boolean;
        /**
         * Property field
         */
        private _anchorRight;
        /**
         * Gets or sets the right anchor item
         *
         * @returns {Item}
         */
        /**
        * Gets or sets the right anchor item
        *
        * @param {Item} value
        */
        anchorRight: Item;
        /**
         * Property field
         */
        private _anchorRightVisible;
        /**
         * Gets or sets the visibility of the right anchor item
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets the visibility of the right anchor item
        *
        * @param {boolean} value
        */
        anchorRightVisible: boolean;
        /**
         * Property field
         */
        private _anchorBottom;
        /**
         * Gets or sets the bottom anchor item
         *
         * @returns {Item}
         */
        /**
        * Gets or sets the bottom anchor item
        *
        * @param {Item} value
        */
        anchorBottom: Item;
        /**
         * Property field
         */
        private _anchorBottomVisible;
        /**
         * Gets or sets the visibility of bottom top anchor item
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets the visibility of the bottom anchor item
        *
        * @param {boolean} value
        */
        anchorBottomVisible: boolean;
        /**
         * Property field
         */
        private _anchorLeft;
        /**
         * Gets or sets the left item anchor
         *
         * @returns {Item}
         */
        /**
        * Gets or sets the left item anchor
        *
        * @param {Item} value
        */
        anchorLeft: Item;
        /**
         * Property field
         */
        private _anchorLeftVisible;
        /**
         * Gets or sets the visibility of the left anchor item
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets the visibility of the left anchor item
        *
        * @param {boolean} value
        */
        anchorLeftVisible: boolean;
    }
}
declare module latte {
    /**
     * Renders a view splitted in two. A <c>side</c> and the main <c>view</c>
     **/
    class SplitView extends View {
        /**
         *
         **/
        private _draggingSplit;
        /**
         * View where side view is contained
         **/
        sideWrap: View;
        /**
         * Splitter between <c>side</c> and <c>view</c>
         **/
        splitterElement: JQuery;
        /**
         * Creates the View
         **/
        constructor();
        /**
         *
         **/
        private _onMouseDown;
        /**
         *
         **/
        private _onMouseMove;
        /**
         *
         **/
        private _onMouseUp;
        /**
         * Updates the layout of View
         **/
        onLayout(): void;
        /**
         * Raises the <c>sideVisible</c> event
         */
        onSideVisibleChanged(): void;
        /**
         * Back field for event
         */
        private _sideVisibleChanged;
        /**
         * Gets an event raised when the value of the sideVisible property changes
         *
         * @returns {LatteEvent}
         */
        readonly sideVisibleChanged: LatteEvent;
        /**
         *
         **/
        private _sensitivity;
        /**
         * Gets or sets the sensitivity radius for dragging the splitter
         **/
        /**
        * Gets or sets the sensitivity radius for dragging the splitter
        **/
        sensitivity: number;
        /**
         *
         **/
        private _side;
        /**
         * Gets or sets the side of the side view
         **/
        /**
        * Gets or sets the side of the side view
        **/
        side: Side;
        /**
         *
         **/
        private _sideSize;
        /**
         * Gets or sets the wide of the side view.
         If value is lower than 1, then it will be taken as the percent to occupy, i.e. 0.5 = 50% of space.
         **/
        /**
        * Gets or sets the wide of the side view.
        If value is lower than 1, then it will be taken as the percent to occupy, i.e. 0.5 = 50% of space.
        **/
        sideSize: number;
        /**
         * Gets or sets the side <c>View</c>
         **/
        /**
        * Gets or sets the side <c>View</c>
        **/
        sideView: View;
        /**
         * Property field
         */
        private _sideVisible;
        /**
         * Gets or sets a value indicating if the side view is visible
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets a value indicating if the side view is visible
        *
        * @param {boolean} value
        */
        sideVisible: boolean;
        /**
         *
         **/
        private _splitterSize;
        /**
         * Gets or sets the wide of the splitterElement
         **/
        /**
        * Gets or sets the wide of the splitterElement
        **/
        splitterSize: number;
    }
}
declare module latte {
    /**
     *
     */
    class OverlayDismisser {
        private lastOverlay;
        /**
         *
         */
        constructor();
        /**
         * Executes the dismisser
         */
        execute(): void;
        /**
         * Installs the dismisser
         */
        install(): void;
        /**
         * Raises the <c>overlay</c> event
         */
        onOverlayChanged(): void;
        /**
         * Uninstalls the dismisser
         */
        uninstall(): void;
        /**
         * Back field for event
         */
        private _overlayChanged;
        /**
         * Gets an event raised when the value of the overlay property changes
         *
         * @returns {LatteEvent}
         */
        readonly overlayChanged: LatteEvent;
        /**
         * Property field
         */
        private _overlay;
        /**
         * Gets or sets the overlay of the dismisser
         *
         * @returns {Overlay}
         */
        /**
        * Gets or sets the overlay of the dismisser
        *
        * @param {Overlay} value
        */
        overlay: Overlay;
    }
}
declare module latte {
    /**
     * Represents an item which can be apparently clicked.

     - Item may be checked, event automatically if <c>checked()</c> value is <c>true</c>
     - Item may be selected, when user hovers over it, if <c>selectable()</c> value is <c>true</c>
     - Item may be pressed, when user holds the mouse button down.
     - Item may be withContext, when its showing contextual data, like a menu or a tab's content
     **/
    class ClickableItem extends Item {
        /**
         *
         **/
        private _checkable;
        /**
         *
         **/
        private _checked;
        /**
         *
         **/
        private _clickPropagation;
        /**
         *
         **/
        private _contextAt;
        /**
         *
         **/
        private _faceVisible;
        /**
         *
         **/
        private _flatSide;
        /**
         *
         **/
        private _openSide;
        /**
         *
         **/
        private _pressed;
        /**
         *
         **/
        private _selectable;
        /**
         *
         **/
        private _selected;
        /**
         *
         **/
        private _withContext;
        /**
         * Raised when user clicks the item. Passes the item when clicked.
         **/
        click: LatteEvent;
        /**
         * Raised when <c>checked()</c> value changes
         **/
        checkedChanged: LatteEvent;
        /**
         * Raised when <c>faceVisible()</c> value changes
         **/
        faceVisibleChanged: LatteEvent;
        /**
         * Raised when <c>pressed()</c> value changes
         **/
        pressedChanged: LatteEvent;
        /**
         * Raised when <c>selected()</c> value changes
         **/
        selectedChanged: LatteEvent;
        /**
         * Raised when <c>withContext()</c> value changes
         **/
        withContextChanged: LatteEvent;
        /**
         *
         **/
        constructor();
        /**
         * Returns the value of the checked property
         **/
        getChecked(): boolean;
        /**
         *
         **/
        getContextAt(): Side;
        /**
         *
         **/
        getSelected(): boolean;
        /**
         * Override
         */
        onBlur(): void;
        /**
         * Raises the <c>checkedChanged</c> event
         **/
        onCheckedChanged(): void;
        /**
         * Raises the <c>click</c> event
         **/
        onClick(e?: MouseEvent): void;
        /**
         * Raises the <c>defaulted</c> event
         */
        onDefaultedChanged(): void;
        /**
         * Overriden. Raises the <c>enabledChanged</c> event
         **/
        onEnabledChanged(): void;
        /**
         * Raises the <c>faceVisibleChanged</c> event
         **/
        onFaceVisibleChanged(): void;
        /**
         * Override
         */
        onFocused(): void;
        /**
         * Raises the <c>pressedChanged</c> event
         **/
        onPressedChanged(): void;
        /**
         * Raises the <c>selectedChanged</c> event
         **/
        onSelectedChanged(): void;
        /**
         * Raises the <c>withContextChanged</c> event
         **/
        onWithContextChanged(): void;
        /**
         * Sets a value indicating if the item is currently checked.
         Optionally omits the <c>checkedChanged</c> event trigger.
         **/
        setChecked(value: boolean, silent?: boolean): void;
        /**
         *
         **/
        setContextAt(value: Side): void;
        /**
         *
         **/
        setSelected(value: boolean, silent?: boolean): void;
        /**
         * Back field for event
         */
        private _defaultedChanged;
        /**
         * Gets an event raised when the value of the defaulted property changes
         *
         * @returns {LatteEvent}
         */
        readonly defaultedChanged: LatteEvent;
        /**
         * Property field
         */
        private _defaulted;
        /**
         * Gets or sets a value indicating if the item is defaulted (Will recieve enter when pressed)
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets a value indicating if the item is defaulted (Will recieve enter when pressed)
        *
        * @param {boolean} value
        */
        defaulted: boolean;
        /**
         * Gets or sets a value indicating if the item is checkable.
         When checkable, the item will be turned to checked when clicked.
         **/
        /**
        * Gets or sets a value indicating if the item is checkable.
        When checkable, the item will be turned to checked when clicked.
        **/
        checkable: boolean;
        /**
         * Gets or sets the checked state of the clickable
         **/
        /**
        * Gets or sets the checked state of the clickable
        **/
        checked: boolean;
        /**
         * Gets or sets a value indicating if click event will propagate as usual.
         If set to false, event propagation will be suspended on click.
         **/
        /**
        * Gets or sets a value indicating if click event will propagate as usual.
        If set to false, event propagation will be suspended on click.
        **/
        clickPropagation: boolean;
        /**
         * Gets or sets a value indicating if the item is visually indicating that it
         has context at some side.
         It will automatically affect the values of <c>openSide()</c>, <c>withContext</c>
         and <c>flatSide()</c>.
         It may be removed by passing <c>null</c> as value.
         **/
        /**
        * Gets or sets a value indicating if the item is visually indicating that it
        has context at some side.
        It will automatically affect the values of <c>openSide()</c>, <c>withContext</c>
        and <c>flatSide()</c>.
        It may be removed by passing <c>null</c> as value.
        **/
        contextAt: Side;
        /**
         * Gets or sets the visibility of the button face
         **/
        /**
        * Gets or sets the visibility of the button face
        **/
        faceVisible: boolean;
        /**
         *
         **/
        getFaceVisible(): boolean;
        /**
         * Sets a value indicating if the item's face is currently visible.
         **/
        setFaceVisible(value?: boolean, silent?: boolean): void;
        /**
         * Gets or sets the flat side of the button.
         The flat side will remove corner roundness on the specified side.
         It can be removed by passing null as value.
         **/
        /**
        * Gets or sets the flat side of the button.
        The flat side will remove corner roundness on the specified side.
        It can be removed by passing null as value.
        **/
        flatSide: Side;
        /**
         * Gets or sets the open side of the button.
         The open side will not show edge at the specified side.
         It can be removed by passing null as value.
         **/
        /**
        * Gets or sets the open side of the button.
        The open side will not show edge at the specified side.
        It can be removed by passing null as value.
        **/
        openSide: Side;
        /**
         * Gets or sets a value indicating if the item is currently pressed
         **/
        /**
        * Gets or sets a value indicating if the item is currently pressed
        **/
        pressed: boolean;
        /**
         * Gets or sets a value indicating if the item is selectable.
         If <c>selectable()</c>, Item will be selected when mouse hovers over it.
         **/
        /**
        * Gets or sets a value indicating if the item is selectable.
        If <c>selectable()</c>, Item will be selected when mouse hovers over it.
        **/
        selectable: boolean;
        /**
         * Gets or sets a value indicating if the item is currently selected.
         **/
        /**
        * Gets or sets a value indicating if the item is currently selected.
        **/
        selected: boolean;
        /**
         * Gets or sets a value indicating if the item has currently context
         **/
        /**
        * Gets or sets a value indicating if the item has currently context
        **/
        withContext: boolean;
    }
}
declare module latte {
    /**
     * Group of buttons.

     By default ButtonGroupItem doesn't allow to have multiple buttons checked at
     once, this can be altered by using the <c>multiCheck</c> method
     **/
    class ButtonGroupItem extends Item {
        /**
         *
         **/
        private _checkedButton;
        /**
         *
         **/
        private _direction;
        /**
         *
         **/
        private _faceVisible;
        /**
         *
         **/
        private _multiCheck;
        /**
         * Collection of buttons of button group
         **/
        buttons: Collection<ButtonItem>;
        /**
         * Raised when some button is checked
         **/
        checkedChanged: LatteEvent;
        /**
         * Creates the Button Group. Optionally adds the buttons to the group
         **/
        constructor(buttons?: Array<ButtonItem>);
        /**
         *
         **/
        private _checkCheck;
        /**
         *
         **/
        private _onAddButton;
        /**
         *
         **/
        private _onRemoveButton;
        /**
         *
         **/
        private _update;
        /**
         * Raises the <c>checkedChanged</c>
         **/
        onCheckedChanged(): void;
        /**
         * Overriden.
         **/
        onEnabledChanged(): void;
        /**
         * Overriden.
         **/
        onLayout(): void;
        /**
         * Gets the checked button of the group
         **/
        /**
        * Gets the checked button of the group
        **/
        checkedButton: ButtonItem;
        /**
         * Gets or sets the direction of the groups
         **/
        /**
        * Gets or sets the direction of the groups
        **/
        direction: Direction;
        /**
         * Gets ors sets a value indicating if the face of the button group should
         be visible.
         **/
        /**
        * Gets ors sets a value indicating if the face of the button group should
        be visible.
        **/
        faceVisible: boolean;
        /**
         * Gets or sets a value indicating if the group allows multiple buttons to
         be checked at the same time
         **/
        /**
        * Gets or sets a value indicating if the group allows multiple buttons to
        be checked at the same time
        **/
        multiCheck: boolean;
    }
}
declare module latte {
    /**
     * Shows items in a strip
     **/
    class Toolbar extends Item {
        /**
         *
         **/
        private _direction;
        /**
         *
         **/
        private _faceVisible;
        /**
         *
         **/
        private _holderWide;
        /**
         *
         **/
        private _padding;
        /**
         * Face of toolbar
         **/
        faceElement: JQuery;
        /**
         * Holds the items to a certain width
         **/
        holderElement: JQuery;
        /**
         * Collection of items in the toolbar
         **/
        items: Collection<Item>;
        /**
         * Element where the items are placed
         **/
        itemsElement: JQuery;
        /**
         * Collection of items shown in the opposite side of toolbar
         **/
        sideItems: Collection<Item>;
        /**
         * Element where the side items are placed
         **/
        sideItemsElement: JQuery;
        /**
         * Raised when items are addded or removed
         **/
        itemsChanged: LatteEvent;
        /**
         * Raised when side items are addded or removed
         **/
        sideItemsChanged: LatteEvent;
        /**
         * Creates the Toolbar
         **/
        constructor();
        /**
         *
         **/
        private _onAddItem;
        /**
         *
         **/
        private _onAddSideItem;
        /**
         *
         **/
        private _onRemoveItem;
        /**
         *
         **/
        private _onRemoveSideItem;
        /**
         * Raises the <c>itemsChanged</c> event
         **/
        onItemsChanged(): void;
        /**
         * Raises the <c>itemsChanged</c> event
         **/
        onSideItemsChanged(): void;
        /**
         * Gets or sets the direction of the toolbar
         **/
        /**
        * Gets or sets the direction of the toolbar
        **/
        direction: Direction;
        /**
         * Gets or sets a value indicating if the face of toolbar should be visible.
         **/
        /**
        * Gets or sets a value indicating if the face of toolbar should be visible.
        **/
        faceVisible: boolean;
        /**
         * Gets or sets the wide of the items holder to limit the area where items are placed.
         A value of zero or lower will set the holder to the wide of toolbar
         **/
        /**
        * Gets or sets the wide of the items holder to limit the area where items are placed.
        A value of zero or lower will set the holder to the wide of toolbar
        **/
        holderWide: number;
        /**
         * Gets or sets the padding of the toolbar.
         Can be set to <c>null</c> to reset padding to original.
         **/
        /**
        * Gets or sets the padding of the toolbar.
        Can be set to <c>null</c> to reset padding to original.
        **/
        padding: number;
    }
}
declare module latte {
    /**
     *
     **/
    class SelectableLabel extends SelectableItem {
        /**
         * Label of item
         **/
        label: LabelItem;
        /**
         * Creates the selectable label
         **/
        constructor(text?: string, description?: string, icon?: IconItem, title?: number);
        /**
         * Returns a string representation of the object
         */
        toString(): string;
        /**
         * Gets or sets the description of the item's label
         **/
        /**
        * Gets or sets the description of the item's label
        **/
        description: string;
        /**
         * Gets or sets the icon of the item's label
         **/
        /**
        * Gets or sets the icon of the item's label
        **/
        icon: IconItem;
        /**
         * Gets or sets the text of the item's label
         **/
        /**
        * Gets or sets the text of the item's label
        **/
        text: string;
    }
}
declare module latte {
    class StackOverlay extends Overlay {
        stack: ItemStack;
        constructor();
        /**
         * Gets the collection of items of stack
         *
         * @returns {latte.Collection<latte.Item>}
         */
        readonly items: Collection<Item>;
    }
}
declare module latte {
    /**
     * Represents a view who presents items in columns
     **/
    class ColumnView extends View {
        /**
         *
         **/
        private _columnWeights;
        /**
         *
         **/
        private _columns;
        /**
         *
         */
        private _paddingColumns;
        /**
         * Collection of items inside the view's columns
         **/
        items: Collection<Item>;
        /**
         * Creates the View with the specified amount of columns.
         **/
        constructor(columns?: number);
        /**
         * Called when an item is added to the items collection
         **/
        onAddItem(item: Item): void;
        /**
         * Called when an item is removed to the items collection
         **/
        onRemoveItem(item: Item): void;
        /**
         * Returns the column at the specified index. First column is zero
         **/
        getColumnAt(index: number): JQuery;
        /**
         * Raises the <c>layout</c> event
         **/
        onLayout(): void;
        /**
         * Gets or sets the weights of columns for computing their width.
         Weights must be numbers between 0 and 100.
         **/
        /**
        * Gets or sets the weights of columns for computing their width.
        Weights must be numbers between 0 and 100.
        **/
        columnWeights: Array<number>;
        /**
         * Gets or sets the number of columns in the view.
         **/
        /**
        * Gets or sets the number of columns in the view.
        **/
        columns: number;
        /**
         * Gets or sets the column padding inside of columns
         **/
        /**
        * Gets or sets the column  padding inside of columns
        **/
        columnPadding: number;
    }
}
declare module latte {
    /**
     *
     **/
    class NavigationView extends SplitView {
        /**
         *
         **/
        tree: TreeView;
        /**
         *
         **/
        treeToolbar: Toolbar;
        /**
         *
         **/
        constructor();
    }
}
declare module latte {
    /**
     * Renders a clickable button.

     Button may obtain different render modes, sub items who are shown in a
     contextual menu and react to its icon size.
     **/
    class ButtonItem extends ClickableItem {
        /**
         * Name of default glyph of buttons. This name must match a method name
         in the <c>Glyph</c> class.
         **/
        static defaultGlyph: string;
        /**
         *
         **/
        private _dropdownVisible;
        /**
         *
         **/
        private _glyph;
        /**
         *
         **/
        private _itemsEdge;
        /**
         *
         **/
        private _itemsMenu;
        /**
         *
         **/
        private _itemsSide;
        /**
         *
         **/
        private _split;
        /**
         *
         **/
        private _willLoadItems;
        /**
         * Clickable element where dropdown is shown
         **/
        private _dropdown;
        /**
         * Sub-Items of this item. These items are shown in a <c>MenuOverlay</c> element.
         **/
        items: Collection<Item>;
        /**
         * Label inside button. It supports the <c>icon</c>, <c>text()</c> and <c>description</c>
         properties, among other features.
         **/
        label: LabelItem;
        /**
         * Raised when items are about to be shown
         **/
        loadItems: LatteEvent;
        /**
         * Raised when the items are shown
         **/
        itemsShown: LatteEvent;
        /**
         * Creates the button
         **/
        constructor(text?: string, icon?: IconItem, click?: Function, tab?: any);
        /**
         * Handles drop down click
         **/
        private _dropdownClick;
        /**
         * Handles dropdown pressedChanged
         **/
        private _dropdownPressedChanged;
        /**
         * Handles dropdown selectedChanged
         **/
        private _dropdownSelectedChanged;
        /**
         * Handles item add
         **/
        private _onAddItem;
        /**
         * Handles item remove
         **/
        private _onRemoveItem;
        /**
         * Alternates between items visibility
         **/
        private _showOrHideItems;
        /**
         * Updates edges of dropdown clickable
         **/
        private _updateDropdownProperties;
        /**
         * Checks for the formatting CSS flags
         **/
        private _updateLabelFlag;
        private createDropdownButton;
        /**
         *
         **/
        getContextAt(): Side;
        /**
         * Returns a value indicating if the button contains items or will load them eventually
         **/
        readonly hasItems: boolean;
        /**
         * Hides the MenuOverlay showing this button's items
         **/
        hideItems(): void;
        /**
         * Overriden.
         **/
        onClick(e?: MouseEvent): void;
        /**
         * Override.
         */
        onEnabledChanged(): void;
        /**
         * Overriden.
         **/
        onFaceVisibleChanged(): void;
        /**
         * Raises the <c>itemsShown</c> event
         **/
        onItemsShown(menuItem: MenuOverlay): void;
        /**
         * Overriden.
         **/
        onPressedChanged(): void;
        /**
         * Overriden.
         **/
        onSelectedChanged(): void;
        /**
         * Overriden.
         **/
        onWithContextChanged(): void;
        /**
         *
         **/
        setContextAt(value: Side): void;
        /**
         * Shows the items of the button. Optionally specifies the side and edge on which items are shown.
         **/
        showItems(side?: Side, edge?: Side): void;
        /**
         * Gets or sets the description of the button
         **/
        /**
        * Gets or sets the description of the button
        **/
        description: string;
        /**
         * Gets or sets the direction of the button.
         **/
        /**
        * Gets or sets the direction of the button.
        **/
        direction: Direction;
        readonly dropdown: ClickableItem;
        /**
         * Gets or sets the visibility of the dropdown.
         When <c>null</c> dropdown will be shown automatically when items are added.
         **/
        /**
        * Gets or sets the visibility of the dropdown.
        When <c>null</c> dropdown will be shown automatically when items are added.
        **/
        dropdownVisible: boolean;
        /**
         * Gets or sets the Glyph of the button. The glyph is displayed to indicate the direction on which items will be shown.
         **/
        /**
        * Gets or sets the Glyph of the button. The glyph is displayed to indicate the direction on which items will be shown.
        **/
        glyph: IconItem;
        /**
         * Gets or sets the icon of the button
         **/
        /**
        * Gets or sets the icon of the button
        **/
        icon: IconItem;
        /**
         * Gets or sets the edge on wich items menu is shown.
         **/
        /**
        * Gets or sets the edge on wich items menu is shown.
        **/
        itemsEdge: Side;
        /**
         * Gets the MenuOverlay containing items, If currently being shown
         **/
        /**
        * Sets the menu containing the items.
        * SET BY CODE, you should not use this method.
        *
        * @param value
        */
        itemsMenu: MenuOverlay;
        /**
         * Gets or sets the side of button where items menu is shown.
         **/
        /**
        * Gets or sets the side of button where items menu is shown.
        **/
        itemsSide: Side;
        /**
         * Gets a boolean indicating if the items menu is currently showing
         **/
        readonly showingItems: any;
        /**
         * Gets or sets a value indicating if the button is splitted.
         **/
        /**
        * Gets or sets a value indicating if the button is splitted.
        **/
        split: boolean;
        /**
         * Gets or sets the text of the button
         **/
        /**
        * Gets or sets the text of the button
        **/
        text: string;
        /**
         * Gets a flag indicating if the button will load items before showing them
         **/
        readonly willLoadItems: boolean;
    }
}
declare module latte {
    /**
     * Shows a resizable dialog
     **/
    class DialogView extends View {
        private static initialized;
        /**
         * Initialize handlers at global level
         **/
        private static _initialize;
        /**
         * Shows an alert <c>MessageView</c> on a <c>DialogView</c> with the specified <c>message</c> and <c>description</c>
         **/
        static alert(message: string, description?: string, items?: Array<Item>): DialogView;
        /**
         * Shows a question <c>MessageView</c> on a <c>DialogView</c> with the specified <c>message</c> and <c>description</c>
         **/
        static ask(message: string, description?: string, items?: Array<Item>): DialogView;
        /**
         * Shows a question MessageView asking form deletion confirmation of the specified object
         * @param objectName
         * @param callback
         */
        static confirmDelete(objectName: string, callback: () => any): void;
        /**
         * Shows an error <c>MessageView</c> on a <c>DialogView</c> with the specified <c>message</c> and <c>description</c>
         **/
        static error(message: string, description?: string, items?: Array<Item>): DialogView;
        /**
         * Shows an information <c>MessageView</c> on a <c>DialogView</c> with the specified <c>message</c> and <c>description</c>
         **/
        static inform(message: string, description?: string, items?: Array<Item>): DialogView;
        /**
         * Presents the specified inputs and presents them
         * @param title
         * @param inputs
         * @param save
         * @param validate Return false in case validation is incorrect
         */
        static input(title: string, inputs: IInputList, validate?: (values: {
            [index: string]: any;
        }, items: {
            [index: string]: InputItem;
        }) => any, save?: (values: {
            [index: string]: any;
        }) => any, cancel?: () => any): DialogView;
        /**
         * Presents the specified inputs and presents them
         * @param title
         * @param inputs
         * @param save
         * @param validate Return false in case validation is incorrect
         */
        static metaInput(title: string, inputs: IInputList, validate?: (values: {
            [index: string]: any;
        }, items: {
            [index: string]: InputItem;
        }) => any, save?: (values: {
            [index: string]: any;
        }) => any, cancel?: () => any): DialogView;
        /**
         * Shows the specified <c>message</c> within a DialogView. Optionally specifies <c>items</c> for the dialog.
         **/
        static showMessage(message: MessageView, items?: Array<Item>): DialogView;
        /**
         * Points to the layer that obscures contextual elements
         */
        subLayer: HTMLElement;
        /**
         * Points to the layer where the dialog view lives.
         */
        containmentLayer: HTMLElement;
        /**
         *
         **/
        private _cancelButton;
        /**
         *
         **/
        private _closeable;
        /**
         *
         **/
        private _defaultButton;
        private defaultButtonHandled;
        /**
         * Pointer to the DOM element where the title bar lives
         **/
        barElement: JQuery;
        /**
         * Pointer to the <c>close</c> button
         **/
        closeButton: ButtonItem;
        /**
         * Collection of items to show as commands
         **/
        items: Collection<Item>;
        /**
         * Pointer to the DOM element where <c>items</c> are placed
         **/
        itemsElement: JQuery;
        /**
         * Pointer to the DOM element where title text is placed
         **/
        titleElement: JQuery;
        /**
         * Raised when the user is soliciting to close the dialog. If the event returns false, the close is cancelled.
         **/
        closing: LatteEvent;
        /**
         * Raised when the dialog has been closed.
         **/
        closed: LatteEvent;
        /**
         * Creates the Dialog
         **/
        constructor(view?: View, items?: Array<Item>);
        private clickableItemsCount;
        /**
         *
         **/
        private _onAddItem;
        /**
         *
         **/
        private _onRemoveItem;
        /**
         * Adds a button with the specified text and handler to the dialog items
         **/
        addButton(text: string, handler?: GenericCallback): DialogView;
        /**
         * Adds an 'Cancel' button to the dialog items
         **/
        addCancelButton(handler?: GenericCallback): DialogView;
        /**
         * Adds an 'No' button to the dialog items
         **/
        addNoButton(handler?: GenericCallback): DialogView;
        /**
         * Adds an 'Ok' button to the dialog items
         **/
        addOkButton(handler?: GenericCallback): DialogView;
        /**
         * Adds an 'Save' button to the dialog items
         **/
        addSaveButton(handler?: GenericCallback): DialogView;
        /**
         * Adds a 'Yes' button to the dialog items
         **/
        addYesButton(handler?: GenericCallback): DialogView;
        /**
         * Closes the dialog
         **/
        close(): boolean;
        /**
         *
         **/
        handler(): void;
        /**
         * Raises the <c>closed</c> event
         **/
        onClosed(): void;
        /**
         * Raises the <c>closing</c> event
         **/
        onClosing(): boolean;
        onEnabledChanged(): void;
        /**
         * Raises the <c>layout</c> event
         **/
        onLayout(): void;
        /**
         * Shows the dialog as modal
         **/
        show(items?: Item[]): DialogView;
        /**
         * Gets or sets the button which is to be pressed by default when cancelling the dialog.
         If no button is set as default, this function will return the last button of <c>items</c> collection.
         **/
        /**
        * Gets or sets the button which is to be pressed by default when cancelling the dialog.
        If no button is set as default, this function will return the last button of <c>items</c> collection.
        **/
        cancelButton: ButtonItem;
        /**
         * Gets or sets a value indicating if the dialog is closable by default
         **/
        /**
        * Gets or sets a value indicating if the dialog is closable by default
        **/
        closeable: boolean;
        /**
         * Gets or sets the button which is to be pressed by default when pressing enter.
         If no button is set as default, this function will return the first button of <c>items</c> collection.
         **/
        /**
        * Gets or sets the button which is to be pressed by default when pressing enter.
        If no button is set as default, this function will return the first button of <c>items</c> collection.
        **/
        defaultButton: ButtonItem;
        /**
         * Property field
         */
        private _isClosed;
        /**
         * Gets a value indicating if the dialog is already closed
         *
         * @returns {boolean}
         */
        readonly isClosed: boolean;
        /**
         * Gets or sets the title of the dialog
         **/
        /**
        * Gets or sets the title of the dialog
        **/
        title: string;
    }
}
declare module latte {
    /**
     * Handles hash navigation. This is designed to manage navigation of apps.

     Catch a handler to <c>hashChanged</c> event, and to alter the current hash path
     use the <c>Navigation.hash</c> property.
     **/
    class Navigation {
        /**
         *
         **/
        private static _hash;
        /**
         *
         **/
        private static _lock;
        /**
         * Hash represented as a path. It is updated every time the value of <c>hash</c> changes.
         **/
        static path: Array<string>;
        /**
         * Raised when the navigation hash changed
         **/
        static hashChanged: LatteEvent;
        /**
         * Initializes the static class
         **/
        static staticConstructor(): void;
        /**
         * Gets or sets the current hash of the navigation.
         Optionally <c>silent</c> makes it without raising the <c>hashChanged<c> event.
         **/
        /**
        * Gets or sets the current hash of the navigation.
        Optionally <c>silent</c> makes it without raising the <c>hashChanged<c> event.
        **/
        static hash: string;
        /**
         * Gets or sets the current hash of the navigation.
         Optionally <c>silent</c> makes it without raising the <c>hashChanged<c> event.
         **/
        static setHash(value: string, silent?: boolean): typeof Navigation;
        /**
         * Raises the <c>hashChanged</c> event
         **/
        static onHashChanged(hash: string): void;
    }
}
declare module latte {
    /**
     * represents an action
     **/
    class Action {
        /**
         *
         **/
        private _buttons;
        /**
         *
         **/
        private _checked;
        /**
         *
         **/
        private _description;
        /**
         *
         **/
        private _enabled;
        /**
         *
         **/
        private _icon;
        /**
         *
         **/
        private _text;
        /**
         * Contains sub-actions of the icon
         **/
        actions: Collection<Action>;
        /**
         * Raised when the action is clicked or invoked.
         **/
        execute: LatteEvent;
        /**
         * Creates the action
         **/
        constructor(text?: string, icon?: IconItem, execute?: () => any, description?: string);
        /**
         * Gets or sets a value indicating if the action is currently checked
         **/
        /**
        * Gets or sets a value indicating if the action is currently checked
        **/
        checked: boolean;
        /**
         * Gets or sets the description of the action
         **/
        /**
        * Gets or sets the description of the action
        **/
        description: string;
        /**
         * Gets or sets a value indicating if the action is currently enabled
         **/
        /**
        * Gets or sets a value indicating if the action is currently enabled
        **/
        enabled: boolean;
        /**
         * Gets a <c>ButtonItem</c> representation of the action
         **/
        getButton(): ButtonItem;
        /**
         * Gets or sets the 16 x 16 icon of the action
         **/
        /**
        * Gets or sets the 16 x 16 icon of the action
        **/
        icon: IconItem;
        /**
         * Gets or sets the text of the action
         **/
        /**
        * Gets or sets the text of the action
        **/
        text: string;
    }
}
declare module latte {
    /**
     * Allows drag & drop reordering on a specific container
     */
    class DragDropReorder {
        /**
         * Initializes the helper
         */
        constructor(container: HTMLElement, items: Collection<Item>, sorted?: () => any);
        /**
         * Handles an item being dragged
         * @param item
         */
        private handleBeingDragged;
        /**
         * Handles drop of item
         * @param {latte.Item} item
         */
        private handleDrop;
        /**
         * Searches for the item at the specified coordinate
         * @param {number} x
         * @param {number} y
         * @returns {latte.Item}
         */
        private itemAt;
        /**
         * Corrects the item collection by checking the DOM items
         */
        correctCollection(): void;
        /**
         *
         * @param {MouseEvent} e
         */
        mouseMove(e: MouseEvent): void;
        /**
         * Handle Item Adding.
         **/
        onAddItem(item: Item): void;
        /**
         * Raises the <c>sorted</c> event
         */
        onSorted(): void;
        /**
         * Raises the <c>spacerCreated</c> event
         */
        onSpacerCreated(): void;
        /**
         * Back field for event
         */
        private _sorted;
        /**
         * Gets an event raised when the items have been sorted
         *
         * @returns {LatteEvent}
         */
        readonly sorted: LatteEvent;
        /**
         * Back field for event
         */
        private _spacerCreated;
        /**
         * Gets an event raised when the Spacer element has been created
         *
         * @returns {LatteEvent}
         */
        readonly spacerCreated: LatteEvent;
        /**
         * Property field
         */
        private _container;
        /**
         * Gets or sets the container where drag & drop happens
         *
         * @returns {HTMLElement}
         */
        readonly container: HTMLElement;
        /**
         * Property field
         */
        private _flowDirection;
        /**
         * Gets or sets the flow Direction
         *
         * @returns {Direction}
         */
        /**
        * Gets or sets the flow Direction
        *
        * @param {Direction} value
        */
        flowDirection: Direction;
        /**
         * Property field
         */
        private _items;
        /**
         * Gets the items collection
         *
         * @returns {Collection<Item>}
         */
        readonly items: Collection<Item>;
        /**
         * Spacer marks the place where item would end up
         */
        private _spacer;
        /**
         * Gets the spacer element
         *
         * @returns {HTMLElement}
         */
        readonly spacer: HTMLElement;
    }
}
declare module latte {
    /**
     * Manages z-index related positions
     <b style="color:darkred">This class should not be used directly because it is likely to disappear in future version</b>
     **/
    class ZIndex {
        /**
         * Array of elements that are being handled by class
         **/
        static elements: Array<JQuery>;
        /**
         * Brings the specified element to the top
         **/
        static bringToFront(element: JQuery): void;
        /**
         * Remove elemet from elements, and erase z-index
         **/
        static removeElement(element: JQuery): void;
        /**
         * Updates the z-indexes of elements
         **/
        static updateZIndexes(): void;
    }
}
/**
 * Created by josemanuel on 7/1/14.
 */
declare module latte {
    /**
     *
     */
    class ColorIconItem extends IconItem {
        /**
         *
         */
        constructor(color: Color, size?: number);
        /**
         * Property field
         */
        private _color;
        /**
         * Gets or sets the color of the icon
         *
         * @returns {Color}
         */
        /**
        * Gets or sets the color of the icon
        *
        * @param {Color} value
        */
        color: Color;
    }
}
declare module latte {
    /**
     * Provides an icon from provided built-in glyphs to indicate graphical actions.
     **/
    class Glyph extends IconItem {
        /**
         * URL used for glyphs sprite
         **/
        static readonly defaultUrl: string;
        /**
         * Returns the glyph specified by its location
         **/
        private static _byLocation;
        /**
         * Gets an empty glyph
         **/
        static readonly add: Glyph;
        /**
         * Gets an empty glyph
         **/
        static readonly check: Glyph;
        /**
         * Gets a checked glyph
         **/
        static readonly checked: Glyph;
        /**
         * Gets a checked glyph
         **/
        static readonly checkedRadio: Glyph;
        /**
         * Gets a chevron glyph
         **/
        static readonly chevron: Glyph;
        /**
         * Gets a collapse glyph
         **/
        static readonly collapse: Glyph;
        /**
         * Gets collapse icon for ribbon glyph
         **/
        static readonly collapseRibbon: Glyph;
        /**
         *
         * @returns {Glyph}
         */
        static readonly collapseWidget: Glyph;
        /**
         *
         * @returns {Glyph}
         */
        static readonly expandWidget: Glyph;
        /**
         * Gets a dismiss glyph
         **/
        static readonly dismiss: Glyph;
        /**
         * Gets a down arrow glyph
         **/
        static readonly down: Glyph;
        /**
         * Gets an expand glyph
         **/
        static readonly expand: Glyph;
        /**
         * Gets a grip glyph
         **/
        static readonly grip: Glyph;
        /**
         * Gets a left arrow glyph
         **/
        static readonly left: Glyph;
        /**
         * Gets a maximize glyph
         **/
        static readonly maximize: Glyph;
        /**
         * Gets a minimize glyph
         **/
        static readonly minimize: Glyph;
        /**
         * Gets note glyph
         **/
        static readonly note: Glyph;
        /**
         * Gets a right arrow glyph
         **/
        static readonly right: Glyph;
        /**
         * Gets a checked glyph
         **/
        static readonly unchecked: Glyph;
        /**
         * Gets a checked glyph
         **/
        static readonly uncheckedRadio: Glyph;
        /**
         * Gets an up arrow glyph
         **/
        static readonly up: Glyph;
        /**
         * Creates the glyph
         **/
        constructor();
    }
}
declare module latte {
    class ImageItem extends Item {
        /**
         *
         */
        private _autoSize;
        /**
         *
         */
        imageElement: JQuery;
        /**
         *
         */
        constructor();
        /**
         *
         * @returns {boolean}
         */
        /**
        *
        * @param value
        */
        autoSize: boolean;
        /**
         *
         * @returns {string|JQuery}
         */
        /**
        *
        * @param value
        */
        src: string;
    }
}
declare module latte {
    /**
     * Renders a separator for various purposes.
     **/
    class SeparatorItem extends Item {
        /**
         * Returns the separator with the specified tab pointer
         * @param tab
         * @returns {latte.SeparatorItem}
         */
        static withTab(tab: TabItem): SeparatorItem;
        /**
         *
         **/
        private _text;
        /**
         * Creates the separator
         **/
        constructor();
        /**
         * Gets or sets the text of the separator
         **/
        /**
        * Gets or sets the text of the separator
        **/
        text: string;
    }
}
declare module latte {
    /**
     * Represents a selectable tab
     **/
    class TabItem extends ButtonItem {
        private _active;
        private _contentSide;
        /**
         * Raised when the value of the <c>active</c> property changes
         */
        activeChanged: LatteEvent;
        /**
         * Raised when the value of the <c>
         */
        contentSideChanged: LatteEvent;
        /**
         * Creates the tab
         **/
        constructor(text?: string, icon?: IconItem, click?: Function, tab?: any);
        private _applyActiveProperties;
        /**
         * Raises the activeChanged event.
         */
        onActiveChanged(): void;
        /**
         * Gets a value indicating if the tab is currently active.
         * @returns {boolean}
         */
        /**
        * Sets a value indicating if the tab is currently active.
        * @param value
        */
        active: boolean;
        /**
         * Gets the side where content is shown. So tab is drawn accordingly.
         *
         * @returns {Side}
         */
        /**
        * Sets the side where content is shown. So tab is drawn accordingly.
        * @param value
        */
        contentSide: Side;
    }
}
declare module latte {
    /**
     * Renders a conversation made of <c>CommentItem</c>s, allowing the user to add comments.
     **/
    class ConversationItem extends Item {
        /**
         *
         **/
        private _allowNewComments;
        /**
         *
         **/
        private _invisible;
        /**
         *
         **/
        private _pendentPages;
        /**
         * Collection of comments in conversation
         **/
        comments: Collection<CommentItem>;
        /**
         * Points to the DOM element where comments are stored.
         **/
        commentsElement: JQuery;
        /**
         * Points to the DOM element where the new comment textarea is placed.
         **/
        newCommentElement: JQuery;
        /**
         * Points to the DOM element where hidden comments text is placed.
         **/
        pendentPagesElement: JQuery;
        /**
         * Textbox for new comments
         **/
        textbox: TextboxItem;
        /**
         * Raised when a new comment is added. The text of the comment is passed as an argument.
         **/
        commentAdded: LatteEvent;
        /**
         * Raised when comments are added or removed from collection
         **/
        commentsChanged: LatteEvent;
        /**
         * Raised when the user asks for the hidden comments of conversation
         **/
        pendentPagesSolicited: LatteEvent;
        /**
         * Creates the conversation
         **/
        constructor();
        /**
         * Sets the textbox of the comment editor.
         * This method is useful for replacing the default textbox for a custom one.
         *
         * @param t
         */
        setTextbox(t: TextboxItem): void;
        /**
         *
         **/
        _onAddComment(comment: CommentItem): void;
        /**
         *
         **/
        private _onRemoveComment;
        /**
         * Raises the <c>commentAdded</c> event
         **/
        onCommentAdded(text: string): boolean;
        /**
         *
         **/
        onCommentsChanged(): void;
        /**
         * Raises the <c>pendentPagesRequested</c> event
         **/
        onHiddenCommentsRequested(): void;
        /**
         * Raises the <c>layout</c> event
         **/
        onLayout(): void;
        /**
         * Raises the <c>pendentPagesSolicited</c> event
         **/
        onPendentPagesSolicited(): void;
        /**
         * Prepends the specified comment
         **/
        prependComment(comment: CommentItem): void;
        /**
         * Gets or sets a value indicating if the user may add new comments
         **/
        /**
        * Gets or sets a value indicating if the user may add new comments
        **/
        allowNewComments: boolean;
        /**
         * Property field
         */
        private _ignoreEnter;
        /**
         * Gets or sets a value indicating if the enter key should be ignored.
         * Used for allowing user to hit enter on selecting users from auto-complete
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets a value indicating if the enter key should be ignored.
        * Used for allowing user to hit enter on selecting users from auto-complete
        *
        * @param {boolean} value
        */
        ignoreEnter: boolean;
        /**
         * Gets or sets the number of hidden comments in conversation
         **/
        /**
        * Gets or sets the number of hidden comments in conversation
        **/
        pendentPages: number;
    }
}
declare module latte {
    /**
     * ButtonGroup with pagination information
     **/
    class PaginationItem extends ButtonGroupItem {
        /**
         *
         **/
        private _page;
        /**
         *
         **/
        private _pages;
        /**
         *
         **/
        btnCurrent: ButtonItem;
        /**
         *
         **/
        btnNext: ButtonItem;
        /**
         *
         **/
        btnPrevious: ButtonItem;
        /**
         * Raised when page changes
         **/
        pageChanged: LatteEvent;
        /**
         *
         **/
        constructor();
        /**
         * Navigates to next page, if possible.
         **/
        nextPage(): void;
        /**
         * Raises the <c>pageChanged</c> event
         **/
        onPageChanged(): void;
        /**
         * Navigates to the previous page, if possible.
         **/
        previousPage(): void;
        txtPage_enterPressed(): void;
        /**
         * Gets or sets the current page
         **/
        /**
        * Gets or sets the current page
        **/
        page: number;
        /**
         * Gets the current page.
         * @returns {number}
         */
        getPage(): number;
        /**
         * Sets the current page.
         * Optionally omits the <c>pageChanged</c> event trigger.
         * @param value
         * @param silent
         */
        setPage(value: number, silent?: boolean): void;
        /**
         * Gets or sets the amount of pages for navigation
         **/
        /**
        * Gets or sets the amount of pages for navigation
        **/
        pages: number;
        private _txtPage;
        readonly txtPage: TextboxItem;
        /**
         * Fields for lblPages property.
         */
        private _lblPages;
        /**
         * Gets a value indicating
         */
        readonly lblPages: LabelItem;
        /**
         * Fields for btnGo property.
         */
        private _btnGo;
        /**
         * Gets a value indicating
         */
        readonly btnGo: ButtonItem;
        /**
         * Fields for btnOverlay property.
         */
        private _btnOverlay;
        /**
         * Gets a value indicating
         */
        readonly btnOverlay: ButtonItem;
    }
}
declare module latte {
    /**
     * Stack of items. It unselects siblings when a selectable within is selected
     */
    class SelectableStack extends ItemStack {
        /**
         * Creates the item
         */
        constructor();
        /**
         * Clears the current selection
         */
        clearSelection(): void;
        /**
         * Adds selection handlers
         * @param item
         */
        onAddItem(item: Item): void;
        /**
         * Raises the <c>selectedItem</c> event
         */
        onSelectedItemChanged(): void;
        /**
         * Selects next item
         */
        selectNextItem(): void;
        /**
         * Selects previous item
         */
        selectPreviousItem(): void;
        /**
         * Back field for event
         */
        private _selectedItemChanged;
        /**
         * Gets an event raised when the value of the selectedItem property changes
         *
         * @returns {LatteEvent}
         */
        readonly selectedItemChanged: LatteEvent;
        /**
         * Property field
         */
        private _selectedItem;
        /**
         * Gets or sets the selected item
         *
         * @returns {SelectableItem}
         */
        /**
        * Gets or sets the selected item
        *
        * @param {SelectableItem} value
        */
        selectedItem: SelectableItem;
        /**
         * Gets the index of the selected item
         *
         * @returns {number}
         */
        readonly selectedItemIndex: number;
    }
}
declare module latte {
    /**
     * Toolbar specialized on showing tabs.
     *
     * This toolbar is necessary because of the rendering styles applied to tabs to make the
     * graphical "tab" effect.
     */
    class TabToolbar extends Toolbar {
        private _selectedTab;
        private _contentSide;
        /**
         * Collection of tabs
         */
        tabs: Collection<TabItem>;
        /**
         * Raised when a tab is selected
         **/
        selectedTabChanged: LatteEvent;
        /**
         * Creates the toolbar
         */
        constructor();
        /**
         * Raises the <c>selectedTabChanged</c> event
         **/
        onSelectedTabChanged(): void;
        /**
         * Handles tab adding
         * @param tab
         */
        onTabAdded(tab: TabItem): void;
        /**
         * Handles tab removing
         * @param tab
         */
        onTabRemoved(tab: TabItem): void;
        /**
         * Gets the current content side
         * @returns {Side}
         */
        /**
        * Sets the content side of tabs
        * @param value
        */
        contentSide: Side;
        /**
         * Gets the selected tab of the toolbar
         * @returns {TabItem}
         */
        /**
        * Sets the selected tab of the toolbar
        * @param value
        */
        selectedTab: TabItem;
    }
}
declare module latte {
    class TabContainer extends ItemStack {
        tabToolbar: TabToolbar;
        tabs: Collection<TabItem>;
        content: Collection<Item>;
        selectedTabChanged: LatteEvent;
        constructor();
        private updateVisibility;
        /**
         *
         **/
        onTabAdded(tab: TabItem): void;
        /**
         *
         **/
        onTabRemoved(tab: TabItem): void;
        /**
         *
         * @param item
         */
        onContentAdded(item: Item): void;
        /**
         *
         * @param item
         */
        onContentRemoved(item: Item): void;
        /**
         * Raises the <c>selectedTabChanged</c> event
         **/
        onSelectedTabChanged(): void;
        /**
         * Gets or sets the selected tab of the view
         **/
        /**
        * Gets or sets the selected tab of the view
        **/
        selectedTab: TabItem;
        /**
         * Gets the side where content should be relative to the tabs
         * @returns {Side}
         */
        /**
        * Sets the side where content should be relative to the tabs
        * @param value
        */
        contentSide: Side;
    }
}
declare module latte {
    /**
     * Represents a widget.

     Widgets are like small windows who can be maximized, minimized and dragged around.
     **/
    class WidgetItem extends Item {
        /**
         * Collection of items in widget
         **/
        items: Collection<Item>;
        /**
         * Stack of items in the widget
         **/
        stack: ItemStack;
        /**
         * Label where title is placed
         **/
        titleLabel: LabelItem;
        /**
         * Bottom toolbar
         **/
        toolbar: Toolbar;
        /**
         * Top toolbar
         **/
        topToolbar: Toolbar;
        /**
         * Creates the widget
         **/
        constructor();
        /**
         *
         **/
        private _onAddItem;
        /**
         *
         **/
        private _onRemoveItem;
        /**
         * Raises the <c>allowMinimize</c> event
         */
        onAllowMinimizeChanged(): void;
        /**
         * Raises the <c>layout</c> event
         **/
        onLayout(): void;
        /**
         * Raises the <c>minimized</c> event
         */
        onMinimizedChanged(): void;
        /**
         * Back field for event
         */
        private _allowMinimizeChanged;
        /**
         * Gets an event raised when the value of the allowMinimize property changes
         *
         * @returns {LatteEvent}
         */
        readonly allowMinimizeChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _minimizedChanged;
        /**
         * Gets an event raised when the value of the minimized property changes
         *
         * @returns {LatteEvent}
         */
        readonly minimizedChanged: LatteEvent;
        /**
         * Property field
         */
        private _allowMinimize;
        /**
         * Gets or sets a value indicating if minimization is allowed
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets a value indicating if minimization is allowed
        *
        * @param {boolean} value
        */
        allowMinimize: boolean;
        /**
         * Property field
         */
        private _minimized;
        /**
         * Gets or sets a value indicating if the widget is currently minimized
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets a value indicating if the widget is currently minimized
        *
        * @param {boolean} value
        */
        minimized: boolean;
        /**
         * Gets or sets the title of the widget
         **/
        /**
        * Gets or sets the title of the widget
        **/
        title: string;
        /**
         * Field for minimizeButton property
         */
        private _minimizeButton;
        /**
         * Gets the minimize button
         *
         * @returns {ButtonItem}
         */
        readonly minimizeButton: ButtonItem;
    }
}
declare module latte {
    /**
     * Label with date time as value. When clicked swaps between relative date
     and exact date displaying.
     **/
    class DateTimeLabel extends LabelItem {
        /**
         *
         **/
        private _relative;
        /**
         *
         **/
        private _value;
        /**
         * Creates the label. Optionally it may be initialized with a date, passed
         as a <c>string</c> or a <c>latte.DateTime</c> object.
         **/
        constructor(value?: any);
        /**
         * Updates the text of the label
         **/
        private _updateText;
        /**
         * Gets or sets a value indicating if the date is shown as a relative string
         **/
        /**
        * Gets or sets a value indicating if the date is shown as a relative string
        **/
        relative: boolean;
        /**
         * Gets or sets the value of the label
         **/
        /**
        * Gets or sets the value of the label
        **/
        value: any;
    }
}
declare module latte {
    /**
     * Represents a column header
     **/
    class ColumnHeader extends LabelItem {
        mouseDownRect: ClientRect;
        mouseDownPoint: Point;
        bodyMouseMoveHandler: (e: MouseEvent) => any;
        bodyMouseUpHandler: (e: MouseEvent) => any;
        /**
         * Creates the Column Header
         **/
        constructor(text?: string, width?: number);
        /**
         * Handles mouse down of resizer
         * @param e
         */
        private resizer_MouseDown;
        /**
         * Handles temporary body mouse up
         * @param e
         */
        private body_MouseUp;
        /**
         * Handles temporary body mouse move
         * @param e
         */
        private body_MouseMove;
        /**
         * Raises the <c>autoResize</c> event
         */
        onAutoResize(): any;
        /**
         * Raises the <c>autoResizeAll</c> event
         */
        onAutoResizeAll(): void;
        /**
         * Raises the <c>sortable</c> event
         */
        onSortableChanged(): any;
        /**
         * Raises the <c>width</c> event
         */
        onWidthChanged(): void;
        /**
         * Back field for event
         */
        private _autoResize;
        /**
         * Gets an event raised when user requests auto resize
         *
         * @returns {LatteEvent}
         */
        readonly autoResize: LatteEvent;
        /**
         * Back field for event
         */
        private _autoResizeAll;
        /**
         * Gets an event raised when the user requests to autoresize all columns
         *
         * @returns {LatteEvent}
         */
        readonly autoResizeAll: LatteEvent;
        /**
         * Back field for event
         */
        private _sortableChanged;
        /**
         * Gets an event raised when the value of the sortable property changes
         *
         * @returns {LatteEvent}
         */
        readonly sortableChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _sortRequested;
        /**
         * Gets an event raised when sort is requested
         *
         * @returns {LatteEvent}
         */
        readonly sortRequested: LatteEvent;
        /**
         * Raises the <c>sortRequested</c> event
         */
        onSortRequested(): any;
        /**
         * Back field for event
         */
        private _widthChanged;
        /**
         * Gets an event raised when the value of the width property changes
         *
         * @returns {LatteEvent}
         */
        readonly widthChanged: LatteEvent;
        /**
         * Property field
         */
        private _sortable;
        /**
         * Gets or sets a boolean indicating if the header is sortable
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets a boolean indicating if the header is sortable
        *
        * @param {boolean} value
        */
        sortable: boolean;
        /**
         * Property field
         */
        private _width;
        /**
         * Gets or sets the width of the header
         *
         * @returns {number}
         */
        /**
        * Gets or sets the width of the header
        *
        * @param {number} value
        */
        width: number;
        /**
         * Field for resizer property
         */
        private _resizer;
        /**
         * Gets the resizer of the column
         *
         * @returns {HTMLDivElement}
         */
        readonly resizer: HTMLDivElement;
    }
}
declare module latte {
    /**
     * Represents a Comment
     **/
    class CommentItem extends Item {
        /**
         *
         **/
        private blinkerElement;
        /**
         *
         **/
        private container;
        /**
         *
         **/
        private _date;
        /**
         *
         **/
        private _icon;
        /**
         *
         **/
        private _relativeDate;
        /**
         *
         **/
        private _text;
        /**
         *
         **/
        private _user;
        /**
         * Points to the DOM element where text is stored
         **/
        commentSideElement: JQuery;
        /**
         * Points to the DOM element where user date is stored
         **/
        dateElement: JQuery;
        /**
         * Points to the DOM element where icon is stored
         **/
        iconSideElement: JQuery;
        /**
         * Points to the DOM element where text is stored
         **/
        textElement: JQuery;
        /**
         * Points to the DOM element where user is stored
         **/
        userElement: JQuery;
        /**
         * Raised when User name or icon is clicked
         **/
        userDetail: LatteEvent;
        /**
         * Creates the item
         **/
        constructor();
        /**
         * Blinks to call for attention. Optionally specifies the milliseconds to blink.
         **/
        blink(milliseconds?: number): void;
        /**
         * Raises the <c>userDetail</c> event
         **/
        onUserDetail(): void;
        /**
         * Gets or sets the date of the comment
         **/
        /**
        * Gets or sets the date of the comment
        **/
        date: DateTime;
        /**
         * Gets or sets the icon of the comment.
         **/
        /**
        * Gets or sets the icon of the comment.
        **/
        icon: IconItem;
        /**
         * Gets or sets a value indicating if the date of message should be displayed as a relative date.
         **/
        /**
        * Gets or sets a value indicating if the date of message should be displayed as a relative date.
        **/
        relativeDate: boolean;
        /**
         * Gets or sets the date of the comment
         **/
        /**
        * Gets or sets the date of the comment
        **/
        text: string;
        /**
         * Gets or sets the date of the comment
         **/
        /**
        * Gets or sets the date of the comment
        **/
        user: string;
    }
}
declare module latte {
    /**
     * Single element containing text
     */
    class UiText extends UiElement {
        /**
         * Trims the text and adds ellipsis if it overpasses the limit.
         *
         * @param text
         * @param length
         * @returns {string}
         */
        static ellipsis(text: string, length?: number): string;
        /**
         * Creates the text
         */
        constructor(text?: string);
        /**
         * Gets the text/html of the box
         * @returns {string}
         */
        /**
        * Sets the text/html of the box
        * @param value
        */
        text: string;
    }
}
declare module latte {
    /**
     * An Item for containing a View
     **/
    class ViewItem extends Item {
        /**
         *
         **/
        private _autoHeight;
        /**
         *
         **/
        private _view;
        /**
         * Creates the Item, optionally specifies the view to contain.
         **/
        constructor(view?: View);
        /**
         * Gets or sets a value indicating if the item's height will be adjusted
         to the contents of the view.

         This is achieved by setting the bottom CSS property of the View and its container to 'inherit'
         **/
        /**
        * Gets or sets a value indicating if the item's height will be adjusted
        to the contents of the view.
        
        This is achieved by setting the bottom CSS property of the View and its container to 'inherit'
        **/
        autoHeight: boolean;
        /**
         * Gets or sets the height of the item, and so the view
         **/
        /**
        * Gets or sets the height of the item, and so the view
        **/
        height: number;
        /**
         * Gets or sets the View inside this item
         **/
        /**
        * Gets or sets the View inside this item
        **/
        view: View;
    }
}
declare module latte {
    /**
     * Represents an item for calendar views
     **/
    class CalendarItem extends SelectableLabel {
        /**
         *
         **/
        private _dateEnd;
        /**
         *
         **/
        private _dateStart;
        /**
         *
         **/
        _matrixDepth: number;
        /**
         *
         **/
        matrixAttributes: any;
        /**
         * Gets a collection of rectangles that exist extra to the element of this item
         **/
        rectangles: Collection<Rectangle>;
        /**
         * Creates the item
         **/
        constructor();
        /**
         *
         **/
        private _onAddRectangle;
        /**
         *
         **/
        private _onRemoveRectangle;
        /**
         * Clones the item
         **/
        clone(): CalendarItem;
        /**
         *
         **/
        onSelectedChanged(): void;
        /**
         * Gets a value indicating if the item is an <c>all-day</c> item.
         All-day items are those who its time of day both start and end dates are zero minutes
         **/
        readonly allDay: boolean;
        /**
         * Gets or sets the end date of the item
         **/
        /**
        * Gets or sets the end date of the item
        **/
        dateEnd: DateTime;
        /**
         * Gets or sets the start date of the item
         **/
        /**
        * Gets or sets the start date of the item
        **/
        dateStart: DateTime;
        /**
         * Gets or sets the text of the item
         **/
        /**
        * Gets or sets the text of the item
        **/
        text: string;
    }
}
declare module latte {
    /**
     * This label shows a message indicating that there is nothing to show in some container
     */
    class NothingToShowLabelItem extends LabelItem {
        /**
         * Creates the label
         */
        constructor(message?: string);
    }
}
declare module latte {
    /**
     * Presents a method for choosing options from a combobox.
     Combo options are presented as the button's items.
     The button's items tag value is assumed to be the value of the combobox.
     **/
    class ComboItem extends ValueItem<any> {
        /**
         *
         **/
        private _options;
        /**
         * Button who hosts the combo
         **/
        button: ButtonItem;
        /**
         *
         **/
        constructor();
        /**
         * Override
         * @returns {any}
         */
        onGetValueString(): string;
        /**
         * Override.
         */
        onValueChanged(): void;
        /**
         * Gets or sets the options of the combo
         **/
        /**
        * Gets or sets the options of the combo
        **/
        options: any;
    }
}
declare module latte {
    /**
     *
     **/
    class CheckboxItem extends ValueItem<boolean> {
        /**
         * Global checked icon getter
         */
        static globalCheckedIconGetter: () => IconItem;
        /**
         * Global unchecked icon getter
         */
        static globalUncheckedIconGetter: () => IconItem;
        checkedIconGetter: () => IconItem;
        uncheckedIconGetter: () => IconItem;
        /**
         * Creates the item
         **/
        constructor();
        /**
         * Gets the icon for the specified value
         * @returns {latte.IconItem}
         */
        getIconForValue(value: boolean): IconItem;
        /**
         * Override.
         */
        onValueChanged(): void;
        /**
         * Override
         */
        serialize(): string;
        /**
         * Override
         */
        unserialize(value: string): void;
        /**
         * Gets or sets the text of the checkbox
         **/
        /**
        * Gets or sets the text of the checkbox
        **/
        text: string;
        /**
         * Field for label property
         */
        private _label;
        /**
         * Gets the label of the checkbox
         *
         * @returns {LabelItem}
         */
        readonly label: LabelItem;
    }
}
/**
 * Created by josemanuel on 8/6/16.
 */
declare module latte {
    interface IFlags {
        [index: number]: string;
    }
    /**
     *
     */
    class FlagsValueItem extends ValueItem<number> {
        private ignoreUpdateChecks;
        private ignoreUpdateValue;
        /**
         *
         */
        constructor();
        private updateChecks;
        private updateValue;
        /**
         * Override.
         */
        onGetValueString(): string;
        /**
         * Raises the <c>options</c> event
         */
        onOptionsChanged(): void;
        /**
         * Raises the <c>value</c> event
         */
        onValueChanged(): void;
        /**
         * Back field for event
         */
        private _optionsChanged;
        /**
         * Gets an event raised when the value of the options property changes
         *
         * @returns {LatteEvent}
         */
        readonly optionsChanged: LatteEvent;
        /**
         * Field for checks property
         */
        private _checks;
        /**
         * Gets the checkboxes
         *
         * @returns {Collection<CheckboxItem>}
         */
        readonly checks: Collection<CheckboxItem>;
        /**
         * Property field
         */
        private _options;
        /**
         * Gets or sets the options of the flags
         *
         * @returns {IFlags}
         */
        /**
        * Gets or sets the options of the flags
        *
        * @param {IFlags} value
        */
        options: IFlags;
        /**
         * Field for stack property
         */
        private _stack;
        /**
         * Gets the stack of the item
         *
         * @returns {ItemStack}
         */
        readonly stack: ItemStack;
    }
}
declare module latte {
    /**
     * Value item for files. Value of item is an array of system File objects.
     */
    class FileValueItem extends ValueItem<string> {
        fileInput: JQuery;
        constructor();
        /**
         * Gets an array of selected files
         *
         * @returns {Array<File>}
         */
        getValue(): Array<File>;
        /**
         * Resets the input field
         */
        resetInput(): void;
        /**
         * Sets the value. This is ignored since UA won't allow it.
         *
         * @param value
         */
        setValue(value: string, silently?: boolean): void;
    }
}
declare module latte {
    /**
     * Label with value property
     **/
    class LabelValueItem extends ValueItem<string> {
        /**
         * Label for text displaying
         **/
        label: LabelItem;
        /**
         * Creates the item
         **/
        constructor();
        /**
         * Override.
         */
        onValueChanged(): void;
    }
}
/**
 * Created by josemanuel on 7/1/14.
 */
declare module latte {
    /**
     *
     */
    class ColorValueItem extends ValueItem<string> {
        /**
         *
         */
        constructor(color?: Color);
        setValue(value: string): void;
        readonly value: string;
        onLayout(): void;
        /**
         * Field for colorPicker property
         */
        private _colorPicker;
        /**
         * Gets the color picker
         *
         * @returns {ColorPicker}
         */
        readonly colorPicker: ColorPicker;
        /**
         * Field for button property
         */
        private _button;
        /**
         * Gets the button for selection
         *
         * @returns {ButtonItem}
         */
        readonly button: ButtonItem;
        /**
         * Property field
         */
        private _color;
        /**
         * Gets or sets the color of the item
         *
         * @returns {Color}
         */
        /**
        * Gets or sets the color of the item
        *
        * @param {Color} value
        */
        color: Color;
        /**
         * Field for icon property
         */
        private _icon;
        /**
         * Gets the color icon
         *
         * @returns {ColorIconItem}
         */
        readonly icon: ColorIconItem;
    }
}
declare module latte {
    class HtmlEditorCommands {
        /**
         * Swaps selection boldness
         */
        static BOLD: string;
        /**
         * Wraps seletion into CODE tag
         */
        static CODE: string;
        /**
         * Clears all formatting on fonts and colors
         */
        static CLEAR_FORMAT: string;
        /**
         * Formats the block as something
         */
        static FORMAT_BLOCK: string;
        /**
         * Swaps selection italics
         */
        static ITALIC: string;
        /**
         * Makes selectikon super-script
         */
        static SUPER_SCRIPT: string;
        /**
         * Makes selection sub-script
         */
        static SUB_SCRIPT: string;
        /**
         * Aligns text to left
         */
        static JUSTIFY_LEFT: string;
        /**
         * Centers text
         */
        static JUSTIFY_CENTER: string;
        /**
         * Aligns text to right
         */
        static JUSTIFY_RIGHT: string;
        /**
         * Justifies text
         */
        static JUSTIFY_FULL: string;
        /**
         * Decreases indent
         */
        static OUTDENT: string;
        /**
         * Increases indent
         */
        static INDENT: string;
        /**
         * Shows a dialog to insert HTML
         */
        static INSERT_HTML: string;
        /**
         * Inserts an image
         */
        static INSERT_IMAGE: string;
        /**
         * Inserts a link
         */
        static INSERT_LINK: string;
        /**
         * Inserts an ordered list
         */
        static INSERT_ORDERED_LIST: string;
        /**
         * Inserts an unordered list
         */
        static INSERT_UNORDERED_LIST: string;
        /**
         * Shows a dialog to insert a YouTube video
         */
        static INSERT_YOUTUBE: string;
        /**
         * Unerlines selection
         */
        static UNDERLINE: string;
    }
}
/**
 * Created by josemanuel on 8/4/16.
 */
declare module latte {
    /**
     *
     */
    class SwitchItem extends ValueItem<boolean> {
        /**
         *
         */
        constructor();
        /**
         * Override.
         */
        onGetValueString(): string;
        /**
         * Override.
         */
        onValueChanged(): void;
        /**
         * Override
         */
        serialize(): string;
        /**
         * Override
         */
        unserialize(value: string): void;
        /**
         * Field for orb property
         */
        private _orb;
        /**
         * Gets the orb of the switch
         *
         * @returns {HTMLElement}
         */
        readonly orb: HTMLElement;
    }
}
/**
 * Created by josemanuel on 12/23/13.
 */
declare module latte {
    /**
     * Shows a selectable radio button
     */
    class RadioItem extends ValueItem<boolean> {
        /**
         * Label for radio
         **/
        label: LabelItem;
        /**
         * Creates the RadioItem
         * @param text
         * @param value
         */
        constructor(text?: string, value?: boolean);
        /**
         * Override.
         */
        onValueChanged(): void;
        /**
         * Gets or sets the text of the checkbox
         **/
        /**
        * Gets or sets the text of the checkbox
        **/
        text: string;
    }
}
declare module latte {
    /**
     * Represents a progress bar
     **/
    class ProgressItem extends ValueItem<number> {
        /**
         *
         **/
        private _maxValue;
        /**
         *
         **/
        private _minValue;
        /**
         * Points to the DOM element of bar
         **/
        bar: JQuery;
        /**
         * Points to the DOM element where progress bar is contained
         **/
        container: JQuery;
        /**
         * Creates the progress item
         **/
        constructor();
        /**
         * Gets the percentage represented by min, max and value values.
         Value ranges from 0 to 100
         **/
        getPercentage(): number;
        /**
         * Raises the layout event
         **/
        onLayout(animate?: boolean): void;
        /**
         * Override.
         */
        onValueChanged(): void;
        /**
         * Property field
         */
        private _animated;
        /**
         * Gets or sets a value indicating if the progress should be animated
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets a value indicating if the progress should be animated
        *
        * @param {boolean} value
        */
        animated: boolean;
        /**
         * Gets or sets the maximum value of the progress bar
         **/
        /**
        * Gets or sets the maximum value of the progress bar
        **/
        maxValue: number;
        /**
         * Gets or sets the minimum value of the progress bar
         **/
        /**
        * Gets or sets the minimum value of the progress bar
        **/
        minValue: number;
    }
}
declare module latte {
    /**
     * Allows user to pick a time
     **/
    class TimePickerItem extends ValueItem<TimeSpan> {
        private ignorePassToCombos;
        /**
         *
         **/
        constructor();
        /**
         * Zero pads for dates
         * @param i
         * @returns {string}
         */
        private zeroPad;
        /**
         * Override.
         */
        onValueChanged(): void;
        /**
         * Override.
         * @returns {String}
         */
        onGetValueString(): string;
        /**
         * Silently sets the hour component of the value
         * @param hours
         */
        setHourSilently(hours: number): void;
        /**
         * Silently sets the hour component of the value
         * @param minutes
         */
        setMinuteSilently(minutes: number): void;
        /**
         * Silently sets the hour component of the value
         * @param seconds
         */
        setSecondSilently(seconds: number): void;
        /**
         * Silently sets the value without affecting the combos.
         * @param value
         */
        setValueSilently(value: TimeSpan): void;
        /**
         * Field for hourCombo property
         */
        private _hourCombo;
        /**
         * Gets the hour combo item
         *
         * @returns {ComboItem}
         */
        readonly hourCombo: ComboItem;
        /**
         * Field for minuteCombo property
         */
        private _minuteCombo;
        /**
         * Gets the minutes combo Item
         *
         * @returns {ComboItem}
         */
        readonly minuteCombo: ComboItem;
        /**
         * Field for secondCombo property
         */
        private _secondCombo;
        /**
         * Gets the seconds combo
         *
         * @returns {ComboItem}
         */
        readonly secondCombo: ComboItem;
    }
}
/**
 * Created by josemanuel on 3/22/15.
 */
declare module latte {
    /**
     *
     */
    class ItemOverlay extends Overlay {
        /**
         * Creates the overlay
         */
        constructor(item: Item);
        /**
         * Property field
         */
        private _item;
        /**
         * Gets or sets the item of the overlay
         *
         * @returns {Item}
         */
        /**
        * Gets or sets the item of the overlay
        *
        * @param {Item} value
        */
        item: Item;
        /**
         * Back field for event
         */
        private _itemChanged;
        /**
         * Gets an event raised when the value of the item property changes
         *
         * @returns {LatteEvent}
         */
        readonly itemChanged: LatteEvent;
        /**
         * Raises the <c>item</c> event
         */
        onItemChanged(): void;
    }
}
declare module latte {
    /**
     * Dismisses the overlay when the user clicks elsewhere off the overlay
     */
    class OverlayClickDismisser extends OverlayDismisser {
        handler: any;
        /**
         * Creates the dismisser
         */
        constructor();
        /**
         * Override.
         */
        install(): void;
        /**
         * Override.
         */
        uninstall(): void;
    }
}
declare module latte {
    /**
     * Dismisses the overlay when the user press the ESC key
     */
    class OverlayEscDismisser extends OverlayDismisser {
        handler: any;
        /**
         * Creates the dismisser
         */
        constructor();
        /**
         * Override.
         */
        install(): void;
        /**
         * Override.
         */
        uninstall(): void;
    }
}
declare module latte {
    /**
     *
     */
    class SidebarOverlay extends Overlay {
        static DEFAULT_SIZE: number;
        /**
         * Gets the side as a string
         * @param {latte.Side} side
         * @returns {string}
         */
        static sideString(side: Side): string;
        lastSide: string;
        /**
         * Creates the Overlay
         */
        constructor(side?: Side, size?: number);
        /**
         * Raises the <c>side</c> event
         */
        onSideChanged(): void;
        /**
         * Raises the <c>size</c> event
         */
        onSizeChanged(): void;
        /**
         * Shows the sidebar
         */
        show(): void;
        /**
         * Override
         */
        close(): void;
        /**
         * Back field for event
         */
        private _sideChanged;
        /**
         * Gets an event raised when the value of the side property changes
         *
         * @returns {LatteEvent}
         */
        readonly sideChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _sizeChanged;
        /**
         * Gets an event raised when the value of the size property changes
         *
         * @returns {LatteEvent}
         */
        readonly sizeChanged: LatteEvent;
        /**
         * Property field
         */
        private _side;
        /**
         * Gets or sets the side of the sidebar
         *
         * @returns {Side}
         */
        /**
        * Gets or sets the side of the sidebar
        *
        * @param {Side} value
        */
        side: Side;
        /**
         * Property field
         */
        private _size;
        /**
         * Gets or sets the size of the overlay
         *
         * @returns {number}
         */
        /**
        * Gets or sets the size of the overlay
        *
        * @param {number} value
        */
        size: number;
        /**
         * Field for btnClose property
         */
        private _btnClose;
        /**
         * Gets the close button
         *
         * @returns {ButtonItem}
         */
        readonly btnClose: ButtonItem;
    }
}
declare module latte {
    class SuggestionOverlay extends StackOverlay {
        constructor();
    }
}
declare module latte {
    /**
     * A View with a toolbar on the top, bottom or side
     **/
    class ToolbarView extends AnchorView {
        /**
         * Toolbar of the view
         **/
        toolbar: Toolbar;
        /**
         * Creates the ToolbarView
         **/
        constructor();
        onAnchorTopChanged(): void;
        onAnchorRightChanged(): void;
        onAnchorBottomChanged(): void;
        onAnchorLeftChanged(): void;
    }
}
declare module latte {
    /**
     * A <c>View</c> with a ribbon on the top.

     The view reacts in size when ribbon is collapsed and preserves it on the top.
     **/
    class RibbonView extends AnchorView {
        /**
         * The Ribbon of the View
         **/
        ribbon: Ribbon;
        /**
         * Creates the View
         **/
        constructor();
        /**
         * Handles changes in size
         **/
        onLayoutHIDDEN(): void;
    }
}
declare module latte {
    /**
     * Represents a Tabbed View.
     *
     * Add tabs and views to its collections to obtain "Tabbed View" behavior
     **/
    class TabView extends AnchorView {
        /**
         * Toolbar where tabs are stored
         */
        tabToolbar: TabToolbar;
        /**
         * Collection of tabs
         **/
        tabs: Collection<TabItem>;
        /**
         * Collection of views.
         View will be activated when tab changed if matches index of tab.
         **/
        views: Collection<View>;
        /**
         * Raised when a tab is selected
         **/
        selectedTabChanged: LatteEvent;
        /**
         * Creates the view
         **/
        constructor();
        /**
         *
         **/
        onTabAdded(tab: TabItem): void;
        /**
         *
         **/
        onTabRemoved(tab: TabItem): void;
        /**
         * Raises the <c>selectedTabChanged</c> event
         **/
        onSelectedTabChanged(): void;
        /**
         * Override
         */
        onAnchorTopChanged(): void;
        /**
         * Override
         */
        onAnchorRightChanged(): void;
        /**
         * Override
         */
        onAnchorBottomChanged(): void;
        /**
         * Override
         */
        onAnchorLeftChanged(): void;
        /**
         * Gets or sets the selected tab of the view
         **/
        /**
        * Gets or sets the selected tab of the view
        **/
        selectedTab: TabItem;
        /**
         * Property field
         */
        private _tabsSide;
        /**
         * Gets or sets the side of the tabs
         *
         * @returns {Side}
         */
        /**
        * Gets or sets the side of the tabs
        *
        * @param {Side} value
        */
        tabsSide: Side;
    }
}
declare module latte {
    /**
     * View for choosing dates or date ranges.

     The <c>DateItem</c> used inside the view adapts its <c>rows</c> and <c>columns</c> to take advantage of the view area.
     **/
    class DateView extends View {
        /**
         *
         **/
        private _useWorkWeek;
        /**
         * DateItem for date choosing.
         **/
        dateItem: DateItem;
        /**
         * Button for activating day selection mode.
         **/
        dayButton: ButtonItem;
        /**
         * Button for activating month selection mode.
         **/
        monthButton: ButtonItem;
        /**
         * Button for activating week selection mode.
         **/
        weekButton: ButtonItem;
        /**
         * Button for activating work week selection mode.
         **/
        workWeekButton: ButtonItem;
        /**
         * Creates the view
         **/
        constructor();
        /**
         * Hides the selection mode buttons
         **/
        hideButtons(): void;
        /**
         * Overriden
         **/
        onLayout(): void;
        /**
         * Layout of buttons
         **/
        onLayoutButtons(): void;
        /**
         * Shows the selection mode buttons
         **/
        showButtons(): void;
        /**
         * Updates the selection mode indicators
         **/
        updateSelectionMode(): void;
    }
}
declare module latte {
    /**
     * Renders a form to iunput data.
     **/
    class FormView extends ColumnView {
        /**
         * Creates a new form, using the specified fields
         and commands
         **/
        constructor(inputs?: Array<InputItem>);
        /**
         * Checks every input in <c>inputs</c> to be valid
         **/
        valid(): boolean;
        /**
         * Returns an object with the values of fields
         **/
        getValues(): any;
        /**
         * Gets or sets the with of the text parts.
         * Value must be percent since it must be leveled with value part. Value size will be adjusted
         * to 5% less large than it should to avoid edge collisions.
         * Values lower than 1 accepted.
         * Note that when horizontal input, layout may become affected.
         *
         */
        setTextWidth(value: number): void;
        /**
         * Back field for event
         */
        private _valueChanged;
        /**
         * Gets an event raised when a value of the form changes
         *
         * @returns {LatteEvent}
         */
        readonly valueChanged: LatteEvent;
        /**
         * Raises the <c>valueChanged</c> event
         */
        onValueChanged(): void;
        /**
         * Field for form property
         */
        private _form;
        /**
         * Gets the form of the view
         *
         * @returns {FormItem}
         */
        readonly form: FormItem;
        /**
         * Gets or sets a value indicating if the form has a visible face style.
         **/
        /**
        * Gets or sets a value indicating if the form has a visible face style.
        **/
        faceVisible: boolean;
        /**
         * Gets the inputs of the form
         *
         * @returns {Collection<InputItem>}
         */
        readonly inputs: Collection<InputItem>;
        /**
         * Gets a value indicating if the values in the form are valid
         *
         * @returns {boolean}
         */
        readonly isValid: boolean;
        /**
         * Gets or sets a value indicating if the inputs in the form are read-only
         **/
        /**
        * Gets or sets a value indicating if the inputs in the form are read-only
        **/
        readOnly: boolean;
        /**
         * Gets or sets the title of the form
         **/
        /**
        * Gets or sets the title of the form
        **/
        title: string;
        /**
         * Gets the title label of the form
         *
         * @returns {LabelItem}
         */
        readonly titleLabel: LabelItem;
    }
}
declare module latte {
    /**
     * A view with an editable text box
     **/
    class TextView extends View {
        /**
         * Points to the TEXTAREA of the view.
         **/
        textElement: JQuery;
        /**
         * Creates the TextView
         **/
        constructor();
        /**
         * Gets or sets the text of the view
         **/
        /**
        * Gets or sets the text of the view
        **/
        text: string;
    }
}
declare module latte {
    /**
     * Shows a message with eye sugar to improve usability and design.
     **/
    class MessageView extends View {
        /**
         *
         **/
        private _icon;
        descriptionElement: JQuery;
        /**
         * Pointer to the DOM element of icon holder.
         **/
        iconElement: JQuery;
        /**
         * Pointer to the DOM element of message text.
         **/
        messageElement: JQuery;
        /**
         * Creates the message view
         **/
        constructor();
        /**
         * Sets the icon as the default "alert" icon
         **/
        iconAlert(): MessageView;
        /**
         * Sets the icon as the default "error" icon
         **/
        iconError(): MessageView;
        /**
         * Sets the icon as the default "info" icon
         **/
        iconInfo(): MessageView;
        /**
         * Sets the icon as the default "alert" icon
         **/
        iconQuestion(): MessageView;
        /**
         * Gets or sets the description of the message
         **/
        /**
        * Gets or sets the description of the message
        **/
        description: string;
        /**
         * Gets or sets the icon of the message
         **/
        /**
        * Gets or sets the icon of the message
        **/
        icon: IconItem;
        /**
         * Gets or sets the message
         **/
        /**
        * Gets or sets the message
        **/
        message: string;
    }
}
declare module latte {
    /**
     * Provides a view that contains just HTML
     <example><code><span style="color: #000000">
     <span style="color: #0000BB"><br /><br />&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #FF8000">//&nbsp;Show&nbsp;an&nbsp;HTML&nbsp;view&nbsp;as&nbsp;modal&nbsp;dialog<br />&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #0000BB">View</span><span style="color: #007700">.</span><span style="color: #0000BB">modalView</span><span style="color: #007700">(new&nbsp;</span><span style="color: #0000BB">HtmlView</span><span style="color: #007700">(</span><span style="color: #DD0000">"&lt;p&gt;Hello&nbsp;World&lt;/p&gt;"</span><span style="color: #007700">));<br />&nbsp;<br /></span><span style="color: #0000BB"></span>
     </span>
     </code></example>
     **/
    class HtmlView extends View {
        /**
         * Creates the view with HTML or jQuery elements
         **/
        constructor(html: any);
        /**
         * Appends elements to the HTML view DOM
         **/
        append(element: JQuery): void;
        /**
         * Gets or sets the html of the view
         **/
        /**
        * Gets or sets the html of the view
        **/
        html: string;
    }
}
/**
 * Created by josemanuel on 6/8/16.
 */
declare module latte {
    /**
     *
     */
    class ProgressDialogView extends DialogView {
        /**
         *
         */
        constructor();
        /**
         * Updates the progress of the dialog
         * @param value
         * @param status
         * @param max
         * @param min
         */
        updateProgress(value: number, status?: string, max?: number, min?: number): void;
        /**
         * Field for columnView property
         */
        private _columnView;
        /**
         * Gets the column view
         *
         * @returns {ColumnView}
         */
        readonly columnView: ColumnView;
        /**
         * Field for label property
         */
        private _label;
        /**
         * Gets the label of the dialog
         *
         * @returns {LabelItem}
         */
        readonly label: LabelItem;
        /**
         * Field for progress property
         */
        private _progress;
        /**
         * Gets the progress item
         *
         * @returns {ProgressItem}
         */
        readonly progress: ProgressItem;
    }
}
declare module latte {
    /**
     * Presents a method for choosing options from a combobox.
     Combo options are presented as the button's items.
     The button's items tag value is assumed to be the value of the combobox.
     **/
    class RadioGroup extends ValueItem<string> {
        /**
         *
         **/
        private _options;
        /**
         *
         */
        private _radios;
        /**
         *
         */
        private stack;
        /**
         * Creates the radio group
         **/
        constructor(options?: any);
        /**
         * Gets the value as a string for human reading
         **/
        onGetValueString(): any;
        /**
         * Override.
         */
        onValueChanged(): void;
        /**
         * Gets or sets the options of the combo
         **/
        /**
        * Gets or sets the options of the combo
        **/
        options: any;
        /**
         * Gets the collection of radio items
         *
         * @returns {Collection<RadioItem>}
         */
        readonly radios: Collection<RadioItem>;
    }
}
declare module latte {
    /**
     * A View containing an Item
     **/
    class ItemView extends View {
        /**
         *
         **/
        private _item;
        /**
         *
         **/
        constructor(item?: Item);
        /**
         * Overriden.
         **/
        onLayout(): void;
        /**
         * Gets or sets the item of the view
         **/
        /**
        * Gets or sets the item of the view
        **/
        item: Item;
    }
}
/**
 * Created by josemanuel on 3/21/14.
 */
declare module latte {
    /**
     * Used to model swatches on the palettes
     */
    interface ColorPickerSwatch {
        /**
         * Bounds of swatch in canvas
         */
        bounds: Rectangle;
        /**
         * Color of swatch
         */
        color: Color;
    }
    /**
     *
     */
    class ColorPicker extends ItemStack {
        /**
         *
         */
        constructor();
        /**
         * Handles mouse move on canvas
         * @param screenX
         * @param screenY
         */
        canvasMouseMove(screenX: number, screenY: number): void;
        /**
         * Handles mouse down on canvas
         * @param screenX
         * @param screenY
         */
        canvasMouseDown(screenX: number, screenY: number): void;
        /**
         * Draws the palette
         */
        drawPalette(): void;
        /**
         * Raises the <c>color</c> event
         */
        onColorChanged(): void;
        /**
         * Override.
         */
        onLayout(): void;
        /**
         * Gets the swatch at the specified point (if any)
         * @param screenX
         * @param screenY
         * @returns {*}
         */
        swatchAt(screenX: number, screenY: number): ColorPickerSwatch;
        /**
         * Back field for event
         */
        private _colorChanged;
        /**
         * Gets an event raised when the value of the color property changes
         *
         * @returns {LatteEvent}
         */
        readonly colorChanged: LatteEvent;
        /**
         * Field for canvas property
         */
        private _canvas;
        /**
         * Gets the canvas where color palette is drawn
         *
         * @returns {JQuery}
         */
        readonly canvas: JQuery;
        /**
         * Field for lblIndicator property
         */
        private _lblIndicator;
        /**
         * Gets the color indicator label
         *
         * @returns {LabelItem}
         */
        readonly lblIndicator: LabelItem;
        /**
         * Field for toolbar property
         */
        private _toolbar;
        /**
         * Gets the toolbar
         *
         * @returns {Toolbar}
         */
        readonly toolbar: Toolbar;
        /**
         * Field for txtHex property
         */
        private _txtHex;
        /**
         * Gets the textbox item
         *
         * @returns {TextboxItem}
         */
        readonly txtHex: TextboxItem;
        /**
         * Property field
         */
        private _color;
        /**
         * Gets or sets the selected color of the picker
         *
         * @returns {Color}
         */
        /**
        * Gets or sets the selected color of the picker
        *
        * @param {Color} value
        */
        color: Color;
        /**
         * Field for context property
         */
        private _context;
        /**
         * Gets the context for rendering
         *
         * @returns {CanvasRenderingContext2D}
         */
        readonly context: CanvasRenderingContext2D;
        /**
         * Field for swatches property
         */
        private _swatches;
        /**
         * Gets the swatches on the canvas
         *
         * @returns {ColorPickerSwatch[]}
         */
        readonly swatches: ColorPickerSwatch[];
    }
}
declare module latte {
    /**
     * Renders a Ribbon.

     Ribbons are toolbars with tabbed views of tools and a button called <c>startButton</c>.
     **/
    class Ribbon extends Item {
        /**
         *
         **/
        private _lastWrapper;
        /**
         *
         */
        private _selectedTab;
        /**
         *
         **/
        collapseButton: ButtonItem;
        /**
         *
         **/
        face: JQuery;
        /**
         * Collection of items in the Ribbon
         **/
        items: Collection<Item>;
        /**
         *
         **/
        itemsContainer: JQuery;
        /**
         * Holds the pointer to the start button of the ribbon
         **/
        startButton: ButtonItem;
        /**
         * Collection of tabs in the Ribbon
         **/
        tabs: Collection<TabItem>;
        /**
         *
         **/
        tabsElement: JQuery;
        /**
         * Raised when <c>collapsed</c> value changes
         **/
        collapsedChanged: LatteEvent;
        /**
         * Raised when <c>selectedTab()</c> value changes.
         **/
        selectedTabChanged: LatteEvent;
        /**
         * Creates the Ribbon
         **/
        constructor();
        /**
         * Adds the item to the face of ribbon
         **/
        private _addToFace;
        private _cutLastWrapper;
        /**
         * Creates a wrapper for grouping items on ribbon's face
         **/
        private _addWrappedItem;
        /**
         *
         **/
        private _clearTabsMarks;
        /**
         * Gets the tab for the specified item
         **/
        private _getItemTab;
        /**
         * Tells if the item should be wrapped
         **/
        private _goesWrapped;
        /**
         *
         **/
        private _onAddItem;
        /**
         *
         **/
        private _onAddTab;
        /**
         *
         **/
        private _onRemoveItem;
        /**
         *
         **/
        private _onRemoveTab;
        /**
         * Adds a tab with the specified text
         **/
        addTab(text: string): TabItem;
        /**
         * Adds a separator on the specified tab
         * @param tab
         */
        addSeparator(tab: TabItem): void;
        /**
         * Raises the <c>collapsedChanged</c> event
         **/
        onCollapsedChanged(): void;
        /**
         * Raises the <c>layout</c> event
         **/
        onLayout(): void;
        /**
         * Raises the <c>selectedTabChanged</c> event
         **/
        onSelectedTabChanged(): void;
        /**
         * Gets or sets a value indicating if the ribbon is currently collapsed
         **/
        /**
        * Gets or sets a value indicating if the ribbon is currently collapsed
        **/
        collapsed: boolean;
        /**
         * Gets or sets a value indicating if the ribbon face is visible
         **/
        /**
        * Gets or sets a value indicating if the ribbon face is visible
        **/
        faceVisible: boolean;
        /**
         * Field for itemsInGroup property.
         */
        private _itemsInGroup;
        /**
         * Gets or sets the number of items in groups
         */
        /**
        * Gets or sets the number of items in groups
        */
        itemsInGroup: number;
        /**
         * Gets or sets the currently selected Tab
         **/
        /**
        * Gets or sets the currently selected Tab
        **/
        selectedTab: TabItem;
    }
}
declare module latte {
    /**
     *
     **/
    class NavigationListView extends NavigationView {
        /**
         *
         **/
        list: ListView;
        /**
         *
         **/
        toolbar: Toolbar;
        /**
         *
         **/
        constructor();
    }
}
declare module latte {
    /**
     *
     **/
    class FormItem extends ItemStack implements ISave {
        /**
         *
         **/
        constructor();
        /**
         * Returns an input by its assigned name
         **/
        byName(name: string): InputItem;
        /**
         * Implementation. Gets an empty array since the form class itself has no way of knowing what calls should make
         * the save itself.
         */
        getSaveCalls(): ICall[];
        /**
         * Gets an object with the values of fields
         **/
        getValues(): any;
        /**
         * Raises the <c>direction</c> event
         */
        onDirectionChanged(): void;
        /**
         * Called when an input has been added
         * @param {latte.InputItem} item
         */
        onInputAdded(input: InputItem): void;
        /**
         * Called when an input has been removed
         * @param {latte.InputItem} input
         */
        onInputRemoved(input: InputItem): void;
        /**
         * Raises the <c>readOnly</c> event
         */
        onReadOnlyChanged(): void;
        /**
         * Raises the <c>valueChanged</c> event
         */
        onValueChanged(): void;
        /**
         * Sets the direction of Inputs
         * @param d
         */
        setDirection(d: Direction): void;
        /**
         * Returns an input by its assigned name
         **/
        valueItemByName(name: string, baseClass?: Function): ValueItem<any>;
        /**
         * Gets or sets the with of the text parts.
         * Value must be percent since it must be leveled with value part. Value size will be adjusted
         * to 5% less large than it should to avoid edge collisions.
         * Values lower than 1 accepted.
         * Note that when horizontal input, layout may become affected.
         *
         */
        setTextWidth(value: number): void;
        /**
         * Back field for event
         */
        private _directionChanged;
        /**
         * Gets an event raised when the value of the direction property changes
         *
         * @returns {LatteEvent}
         */
        readonly directionChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _readOnlyChanged;
        /**
         * Gets an event raised when the value of the readOnly property changes
         *
         * @returns {LatteEvent}
         */
        readonly readOnlyChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _valueChanged;
        /**
         * Gets an event raised when the value of an input is changed
         *
         * @returns {LatteEvent}
         */
        readonly valueChanged: LatteEvent;
        /**
         * Property field
         */
        private _direction;
        /**
         * Gets or sets the direction of the inputs in the form
         *
         * @returns {Direction}
         */
        /**
        * Gets or sets the direction of the inputs in the form
        *
        * @param {Direction} value
        */
        direction: Direction;
        /**
         *
         **/
        private _faceVisible;
        /**
         * Gets or sets a value indicating if the form has a visible face style.
         **/
        /**
        * Gets or sets a value indicating if the form has a visible face style.
        **/
        faceVisible: boolean;
        /**
         * Field for inputs property
         */
        private _inputs;
        /**
         * Gets the inputs of the form
         *
         * @returns {Collection<Input>}
         */
        readonly inputs: Collection<InputItem>;
        /**
         * Gets a value indicating if the form is currently valid
         *
         * @returns {boolean}
         */
        readonly isValid: boolean;
        /**
         * Property field
         */
        private _readOnly;
        /**
         * Gets or sets a value indicating if the inputs should be read-only.
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets a value indicating if the inputs should be read-only.
        *
        * @param {boolean} value
        */
        readOnly: boolean;
        /**
         * Gets or sets the title of the form
         **/
        /**
        * Gets or sets the title of the form
        **/
        title: string;
        /**
         * Gets a value of checking every input in <c>inputs</c> to be valid
         **/
        readonly valid: boolean;
        /**
         * Field for titleLabel property
         */
        private _titleLabel;
        /**
         * Gets the title label
         *
         * @returns {LabelItem}
         */
        readonly titleLabel: LabelItem;
    }
}
declare module latte {
    /**
     * Renders an Item that may contains more <c>TreeItem</c>s and shows them as a tree.
     **/
    class TreeItem extends Item {
        /**
         * Global level expand glyph loader
         * @type {any}
         */
        static globalExpandGlyph: (item: TreeItem) => IconItem;
        /**
         * Global level collapse glyph loader
         * @type {any}
         */
        static globalCollapseGlyph: (item: TreeItem) => IconItem;
        /**
         *
         **/
        private _expandOnSelect;
        /**
         *
         **/
        private _expanded;
        /**
         *
         **/
        private _glyph;
        /**
         *
         **/
        private _icon;
        /**
         *
         **/
        private _level;
        /**
         *
         **/
        private _parent;
        /**
         *
         **/
        private _selected;
        /**
         *
         **/
        private _selectedIcon;
        /**
         *
         **/
        private _willLoadItems;
        /**
         *
         **/
        faceElement: JQuery;
        /**
         *
         **/
        glyphElement: JQuery;
        /**
         *
         **/
        iconElement: JQuery;
        /**
         *
         **/
        levelElement: JQuery;
        /**
         *
         **/
        textElement: JQuery;
        /**
         *
         **/
        items: Collection<TreeItem>;
        /**
         * Pointer to the element where items are placed
         **/
        itemsElement: JQuery;
        /**
         * Raised when user clicks the item
         **/
        click: LatteEvent;
        /**
         * Raised when children items need to be loaded
         **/
        loadItems: LatteEvent;
        /**
         * Raised when the <c>selected</c> property value changes
         **/
        selectedChanged: LatteEvent;
        /**
         * Creates the item
         **/
        constructor();
        /**
         *
         **/
        private _onAddItem;
        /**
         *
         **/
        private _onRemoveItem;
        /**
         *
         **/
        _updateGlyph(): void;
        /**
         * Deletes the node from its parent
         **/
        deleteFromParent(): void;
        /**
         * Raises the <c>click</c> event
         **/
        onClick(): void;
        /**
         * Raises the <c>loadItems</c> event
         **/
        onLoadItems(): void;
        /**
         * Raises the <c>selectedChanged</c> event
         **/
        onSelectedChanged(): void;
        /**
         * Reports to the <c>TreeView</c> that items have been loaded
         so it can trigger the <c>itemItemsLoaded</c>
         **/
        reportItemsLoaded(): void;
        /**
         * Returns the top most parent of the item
         **/
        topParent(): TreeItem;
        /**
         * Gets or sets a value indicating if the item will react to select as a gesture to alternate its <c>expand</c> state
         Default is <c>true</c>
         **/
        /**
        * Gets or sets a value indicating if the item will react to select as a gesture to alternate its <c>expand</c> state
        Default is <c>true</c>
        **/
        expandOnSelect: boolean;
        /**
         * Gets or sets a value indicating if the item is currently expanded, this is, showing its child items
         **/
        /**
        * Gets or sets a value indicating if the item is currently expanded, this is, showing its child items
        **/
        expanded: boolean;
        /**
         * Gets or sets the glyph of the item. Glyph is changed automatically when <c>expanded()</c> is invoked
         **/
        /**
        * Gets or sets the glyph of the item. Glyph is changed automatically when <c>expanded()</c> is invoked
        **/
        glyph: IconItem;
        /**
         * Gets a value indicating if the item contains child items or a handler for <c>loadItems</c> has been set
         **/
        readonly hasItems: boolean;
        /**
         * Gets or sets the icon of the item
         **/
        /**
        * Gets or sets the icon of the item
        **/
        icon: IconItem;
        /**
         * Gets or sets the level of the item. The level specifies the indent of the item.
         **/
        /**
        * Gets or sets the level of the item. The level specifies the indent of the item.
        **/
        level: number;
        /**
         * Gets the parent <c>TreeItem</c> of this item
         **/
        readonly parent: TreeItem;
        /**
         * Gets the navigation path as a string
         **/
        readonly path: any;
        /**
         * Gets or sets a value indicaing if the item is currently selected
         **/
        /**
        * Gets or sets a value indicaing if the item is currently selected
        **/
        selected: boolean;
        /**
         * Gets or sets the icon of the item when selected
         **/
        /**
        * Gets or sets the icon of the item when selected
        **/
        selectedIcon: IconItem;
        /**
         * Gets or sets the text of the item
         **/
        /**
        * Gets or sets the text of the item
        **/
        text: string;
        /**
         * Gets the <c>TreeView</c> item who contains this item, if any
         **/
        readonly treeView: TreeView;
    }
}
declare module latte {
    /**
     * Represents an item of a ListView
     **/
    class ListViewItem extends SelectableItem {
        /**
         *
         **/
        private _icon;
        /**
         *
         **/
        private _iconPadding;
        /**
         *
         **/
        private _text;
        /**
         *
         */
        private _columns;
        /**
         * Holds pointers to items
         */
        private _items;
        /**
         *
         **/
        columnsElement: JQuery;
        /**
         *
         **/
        iconElement: JQuery;
        /**
         *
         **/
        activated: LatteEvent;
        /**
         * Creates the Item. Optionally specifies its <c>ListView</c>
         **/
        constructor(listView?: ListView);
        /**
         * Adds a column of the specified width
         **/
        addColumn(width?: number): ListViewItem;
        /**
         * Gets the column element at the specified index
         *
         * @deprecated use columns.count instead
         **/
        getColumn(index: number): JQuery;
        /**
         * Gets the count of columns in item
         *
         * @deprecated use columns.count instead
         **/
        getColumnCount(): number;
        /**
         * Returns or sets the item of the specified column. First column's index is zero.
         *
         * @deprecated Use getItem and setItem methods
         **/
        item(index: number, value?: Item): Item;
        /**
         * Raises the <c>activated</c> event
         **/
        onActivated(): void;
        /**
         * Overriden. Raises the <c>layout</c> event
         **/
        onLayout(): void;
        /**
         *
         **/
        onSelectedChanged(): void;
        /**
         * Sets the width of the specified column
         **/
        setColumnWidth(index: number, width: number): void;
        /**
         * Gets the item at the specified column
         * @param index
         */
        getItem(index: number): Item;
        /**
         * Gets the text of a column (if a LabelItem)
         * @param index
         */
        getText(index: number): string;
        /**
         * Sets the text of a column
         *
         * @param index
         * @param text
         */
        setText(index: number, text: string): void;
        /**
         * Sets the item at the specified column
         * @param index
         * @param item
         */
        setItem(index: number, item: Item): void;
        /**
         * Returns or sets the text of the specified column.
         * When setting, it is equivalent to passing a <c>LabelItem</c> to the <c>item</c> method.
         *
         * @deprecated Use getText and setText instead
         **/
        text(index: number, value?: string): string;
        /**
         * Gets the column elements of the item
         *
         * @returns {Array<JQuery>}
         */
        readonly columns: JQuery[];
        /**
         * Gets or sets the icon of the item.
         **/
        /**
        * Gets or sets the icon of the item.
        **/
        icon: IconItem;
        /**
         * Property field
         */
        private _listView;
        /**
         * Gets or sets the listview of the item
         *
         * @returns {ListView}
         */
        /**
        * Gets or sets the listview of the item
        *
        * @param {ListView} value
        */
        listView: ListView;
    }
}
declare module latte {
    /**
     * Presents an input method for picking a date
     **/
    class DatePickerItem extends ValueItem<DateTime> {
        /**
         *
         **/
        private _dateButton;
        private lastDate;
        /**
         *
         **/
        constructor();
        /**
         * Zero pads for dates
         * @param i
         * @returns {string}
         */
        private zeroPad;
        /**
         * Raises the <c>dateVisible</c> event
         */
        onDateVisibleChanged(): void;
        /**
         * Raises the <c>isNull</c> event
         */
        onIsNullChanged(): void;
        /**
         * Raises the <c>nullable</c> event
         */
        onNullableChanged(): void;
        /**
         * Raises the <c>timeVisible</c> event
         */
        onTimeVisibleChanged(): void;
        /**
         * Override.
         */
        onValueChanged(): void;
        /**
         * Back field for event
         */
        private _dateVisibleChanged;
        /**
         * Gets an event raised when the value of the dateVisible property changes
         *
         * @returns {LatteEvent}
         */
        readonly dateVisibleChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _isNullChanged;
        /**
         * Gets an event raised when the value of the isNull property changes
         *
         * @returns {LatteEvent}
         */
        readonly isNullChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _nullableChanged;
        /**
         * Gets an event raised when the value of the nullable property changes
         *
         * @returns {LatteEvent}
         */
        readonly nullableChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _timeVisibleChanged;
        /**
         * Gets an event raised when the value of the timeVisible property changes
         *
         * @returns {LatteEvent}
         */
        readonly timeVisibleChanged: LatteEvent;
        /**
         * Property field
         */
        private _dateVisible;
        /**
         * Gets or sets a value indicating if the date part should be visible
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets a value indicating if the date part should be visible
        *
        * @param {boolean} value
        */
        dateVisible: boolean;
        /**
         * Gets the date button
         *
         * @returns {ButtonItem}
         */
        readonly dateButton: ButtonItem;
        /**
         * Property field
         */
        private _isNull;
        /**
         * Gets or sets a value indicating if the date is null
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets a value indicating if the date is null
        *
        * @param {boolean} value
        */
        isNull: boolean;
        /**
         * Property field
         */
        private _nullable;
        /**
         * Gets or sets a value indicating if the date may be null
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets a value indicating if the date may be null
        *
        * @param {boolean} value
        */
        nullable: boolean;
        /**
         * Property field
         */
        private _timeVisible;
        /**
         * Gets or sets a value indicating if the time part should be visible
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets a value indicating if the time part should be visible
        *
        * @param {boolean} value
        */
        timeVisible: boolean;
        /**
         * Field for dateItem property
         */
        private _dateItem;
        /**
         * Gets the date item
         *
         * @returns {DateItem}
         */
        readonly dateItem: DateItem;
        /**
         * Field for checkbox property
         */
        private _checkbox;
        /**
         * Gets the checkbox of item
         *
         * @returns {CheckboxItem}
         */
        readonly checkbox: CheckboxItem;
        /**
         * Field for hourCombo property
         */
        private _hourCombo;
        /**
         * Gets the hour combo item
         *
         * @returns {ComboItem}
         */
        readonly hourCombo: ComboItem;
        /**
         * Field for minuteCombo property
         */
        private _minuteCombo;
        /**
         * Gets the minutes combo Item
         *
         * @returns {ComboItem}
         */
        readonly minuteCombo: ComboItem;
    }
}
declare module latte {
    /**
     * Shows a graphical indicator of activity.
     <example><code><span style="color: #000000">
     <span style="color: #0000BB"><br /><br />&nbsp;&nbsp;</span><span style="color: #FF8000">//&nbsp;Show&nbsp;loader<br />&nbsp;&nbsp;</span><span style="color: #007700">var&nbsp;</span><span style="color: #0000BB">loader&nbsp;</span><span style="color: #007700">=&nbsp;new&nbsp;</span><span style="color: #0000BB">Loader</span><span style="color: #007700">(</span><span style="color: #DD0000">"Doing&nbsp;some&nbsp;stuff"</span><span style="color: #007700">);<br /><br />&nbsp;&nbsp;</span><span style="color: #FF8000">//&nbsp;...<br />&nbsp;&nbsp;//&nbsp;Load&nbsp;some&nbsp;heavy&nbsp;stuff..<br />&nbsp;&nbsp;//&nbsp;...<br /><br />&nbsp;&nbsp;//&nbsp;Hide&nbsp;loader<br />&nbsp;&nbsp;</span><span style="color: #0000BB">loader</span><span style="color: #007700">.</span><span style="color: #0000BB">stop</span><span style="color: #007700">();<br />&nbsp;<br /></span><span style="color: #0000BB"></span>
     </span>
     </code></example>
     **/
    class Loader extends Overlay {
        /**
         *
         **/
        private static _active;
        /**
         * Amount of pixels between loaders when stacked
         **/
        static separation: number;
        /**
         * Adds a loader to the list of active loaders, if not already present.
         **/
        private static add;
        /**
         * Removes the Loader from the active list of loaders
         **/
        private static remove;
        /**
         * Updates all active loaders position and ensures modal layer visibility
         **/
        private static update;
        /**
         * Updates all active loaders positions
         **/
        private static updateLayout;
        /**
         * Iterates trough active loaders to check if modal layer should be visible
         **/
        private static updateModalVisibility;
        /**
         * Gets the widest loader width
         **/
        private static readonly maxWidth;
        /**
         * Gets a boolean indicating if the modal layer should be visible based on the active loaders.
         **/
        private static readonly modalShouldBeVisible;
        /**
         * Gets or Sets visibility of modal layer. Optimized for concurrent calling.
         **/
        /**
        * Gets or Sets visibility of modal layer. Optimized for concurrent calling.
        **/
        private static modalVisible;
        /**
         *
         **/
        private _cancellable;
        /**
         *
         **/
        private _description;
        /**
         *
         **/
        private _modal;
        /**
         *
         */
        cancelElement: JQuery;
        /**
         * Points to the DOM element where loader text is placed
         **/
        labelElement: JQuery;
        /**
         * Progressbar of loader. Hidden by default.
         **/
        progress: ProgressItem;
        /**
         * Raised when user cancels the loader
         **/
        cancelled: LatteEvent;
        /**
         * Creates and shows the loader. Optionally specifies if is to be shown as <c>modal</c>.
         **/
        constructor(text?: string, modal?: boolean);
        /**
         * Raises the <c>cancelled</c> event
         **/
        onCancelled(): void;
        /**
         * Shows the loader on the UI
         **/
        start(): void;
        /**
         * Hides the loader on the UI
         **/
        stop(): void;
        /**
         * Gets or sets a value indicating if the loader allows user to cancel it.
         **/
        /**
        * Gets or sets a value indicating if the loader allows user to cancel it.
        **/
        cancellable: boolean;
        /**
         * Gets or sets the description of the loader
         **/
        /**
        * Gets or sets the description of the loader
        **/
        description: string;
        /**
         * Gets or sets a value indicating if the loader is modal
         **/
        /**
        * Gets or sets a value indicating if the loader is modal
        **/
        modal: boolean;
        /**
         * Gets or sets the text of the loader
         **/
        /**
        * Gets or sets the text of the loader
        **/
        text: string;
    }
}
declare module latte {
    /**
     * Shows items in a popup.
     **/
    class MenuOverlay extends Overlay {
        /**
         * Raised when closing all open menuitems. This method can be hooked statically
         to close elements with similar behavior to menus, like popups.
         **/
        static closingAll: LatteEvent;
        /**
         * Flag to save static initialization
         */
        static initialized: boolean;
        /**
         * Initialize handlers at global level
         **/
        static _initialize(): void;
        /**
         * Closes all open menus along the User Agent viewport
         **/
        static closeAll(): void;
        /**
         * Marks with CSS the element as currently showing a menu. If no side
         is specified, it just clears the CSS as "no showing the menu"
         **/
        static mark(elem: JQuery, side?: Side): void;
        /**
         * Raises the <c>closingAll</c> static event
         **/
        static onClosingAll(): void;
        /**
         *
         */
        private _domElement;
        /**
         *
         **/
        private _edge;
        /**
         *
         **/
        private _item;
        /**
         *
         **/
        private _parentButton;
        /**
         *
         **/
        private _side;
        /**
         * Items within the menu
         **/
        items: Collection<Item>;
        /**
         * Raised when the menu is closed
         **/
        closed: LatteEvent;
        /**
         * Raised when the menu is about the be shown at the passed X coordinate.
         Handler may return a number to alter its position.
         **/
        willShowAtX: LatteEvent;
        /**
         * Raised when the menu is about the be shown at the passed Y coordinate.
         Handler may return a number to alter its position.
         **/
        willShowAtY: LatteEvent;
        /**
         * Creates the Menu
         **/
        constructor();
        /**
         *
         **/
        private _onAddItem;
        /**
         *
         **/
        private _onRemoveItem;
        /**
         * Closes the menu and removes its elements from the DOM
         **/
        close(): this;
        /**
         * Closes the menus open by any of this Menu's children
         **/
        closeChildrenMenus(): this;
        /**
         * Raises the <c>closed</c> event
         **/
        onClosed(): void;
        /**
         * Override.
         */
        onLayout(): void;
        /**
         * Raises the <c>willShowAtX</c> event
         **/
        onWillShowAtX(x: number): any;
        /**
         * Raises the <c>willShowAtY</c> event
         **/
        onWillShowAtY(y: number): any;
        /**
         * Sets the parent button of the menu
         */
        setParentButton(b: ButtonItem): void;
        /**
         * Shows the menu relative to the specified element
         **/
        showByItem(item: Item, side: Side, edge: Side): MenuOverlay;
        /**
         * Shows the menu at the exact point
         **/
        showAt(x: number, y: number): void;
        /**
         * Gets the parent element relative to this menu. The menu is shown to the <c>side</c> of this element
         **/
        readonly domElement: JQuery;
        /**
         * Gets the edge of the menu, relative to element provided by <c>domElement</c>
         **/
        readonly edge: Side;
        /**
         * Gets the parent item of the menu
         **/
        readonly item: Item;
        /**
         * Gets the orientation of the menu, relative to element provided by <c>domElement</c>
         **/
        readonly side: Side;
    }
}
declare module latte {
    /**
     * Renders a view that contains only TreeItems
     **/
    class TreeView extends View {
        /**
         *
         **/
        private _defaultGlyphCollapse;
        /**
         *
         **/
        private _defaultGlyphCollapseSelected;
        /**
         *
         **/
        private _defaultGlyphExpand;
        /**
         *
         **/
        private _defaultGlyphExpandSelected;
        /**
         *
         **/
        private _navigating;
        /**
         *
         **/
        private _navigatingCurrent;
        /**
         *
         **/
        private _navigatingPath;
        /**
         *
         **/
        private _selectedItem;
        /**
         *
         */
        private _addItem;
        /**
         *
         */
        private _removeItem;
        /**
         * Items of view
         **/
        items: Collection<TreeItem>;
        /**
         * Raised when an item of the view is selected
         **/
        itemSelected: LatteEvent;
        /**
         * Raised when the items of an item are loaded. This event is manually
         * triggered, it is raised when <c>TreeItem.reportItemsLoaded</c> is invoked.
         **/
        itemItemsLoaded: LatteEvent;
        /**
         * Creates the item
         **/
        constructor();
        /**
         *
         **/
        informSelectedItem(item: TreeItem): void;
        /**
         * Advances in the navigation to a specific node path
         **/
        private _navigateToSection;
        /**
         *
         **/
        private onAddItem;
        /**
         *
         **/
        private onRemoveItem;
        /**
         * Goes to the specified path. Path is an array with names of nodes to visit.
         The path is in the format of the path found in <c>latte.Navigation.path</c>
         **/
        navigateToPath(path: Array<string>): void;
        /**
         * Raises the <c>itemItemsLoaded</c> event
         **/
        onItemItemsLoaded(item: TreeItem): void;
        /**
         * Raises the <c>itemSelected</c> event
         **/
        onItemSelected(item: TreeItem): void;
        /**
         * Gets an event raised when an item is added
         *
         * @returns {LatteEvent}
         */
        readonly addItem: LatteEvent;
        /**
         * Gets or sets the default glyph for collapse
         **/
        /**
        * Gets or sets the default glyph for collapse
        **/
        defaultGlyphCollapse: Glyph;
        /**
         * Gets or sets the default glyph for collapse when item is selected
         **/
        /**
        * Gets or sets the default glyph for collapse when item is selected
        **/
        defaultGlyphCollapseSelected: Glyph;
        /**
         * Gets or sets the default glyph for expand
         **/
        /**
        * Gets or sets the default glyph for expand
        **/
        defaultGlyphExpand: Glyph;
        /**
         * Gets or sets the default glyph for expand when item is selected
         **/
        /**
        * Gets or sets the default glyph for expand when item is selected
        **/
        defaultGlyphExpandSelected: Glyph;
        /**
         * Gets a value indicating if the tree view is currently in the process
         of navigating to a specific node.
         **/
        readonly navigating: boolean;
        /**
         * Gets the current navigation path as a string
         **/
        readonly path: any;
        /**
         * Gets or sets the item who is selected on the tree
         **/
        /**
        * Gets or sets the item who is selected on the tree
        **/
        selectedItem: TreeItem;
        /**
         * Gets an event raised when an item is removed from tree
         *
         * @returns {LatteEvent}
         */
        readonly removeItem: LatteEvent;
    }
}
declare module latte {
    /**
     * Shows items in calendar arrangement views
     **/
    class CalendarView extends SplitView {
        /**
         *
         **/
        _controls: JQuery;
        /**
         * Group of buttons for scrolling through calendar
         **/
        buttonGroup: ButtonGroupItem;
        /**
         * Button for scrolling to next date range
         **/
        buttonNext: ButtonItem;
        /**
         * Button for scrolling to previous date range
         **/
        buttonPrevious: ButtonItem;
        /**
         * Button for scrolling to today date range
         **/
        buttonToday: ButtonItem;
        /**
         * Selector of dates for calendar
         **/
        dateView: DateView;
        /**
         * View for showing full days
         **/
        dayView: CalendarDayView;
        /**
         * View for showing full days
         **/
        monthView: CalendarMonthView;
        /**
         * Title showing current date range
         **/
        titleItem: LabelItem;
        /**
         * Raised when <c>selectionStart</c> or <c>selectionEnd</c> properties value change.
         **/
        selectionChanged: LatteEvent;
        /**
         * Raised when an item is added
         **/
        userAddItem: LatteEvent;
        /**
         * Raised when an item is removed
         **/
        userRemoveItem: LatteEvent;
        /**
         * Raised when the view start/end changes
         **/
        viewRangeChanged: LatteEvent;
        /**
         * Creates the view
         **/
        constructor();
        /**
         * Navigates to the next range of dates, based on the current range
         **/
        goNext(): void;
        /**
         * Navigates to the previous range of dates, based on the current range
         **/
        goPrevious(): void;
        /**
         * Navigates to the today day.
         **/
        goToday(): void;
        /**
         * Overriden.
         **/
        onLayout(): void;
        /**
         * Raises the <c>selectionChanged</c> event
         **/
        onSelectionChanged(): void;
        /**
         * Raises the <c>userAddItem</c> event.
         **/
        onUserAddItem(item: CalendarItem): void;
        /**
         * Raises the <c>userRemoveItem</c> event.
         **/
        onUserRemoveItem(item: CalendarItem): void;
        /**
         * Raises the <c>viewRangeChanged</c> event.
         **/
        onViewRangeChanged(): void;
        /**
         * Gets or sets the working end time of specified week day.
         **/
        workDayEnd(day: WeekDay, value?: TimeSpan): TimeSpan;
        /**
         * Gets or sets the working start time of specified week day.
         **/
        workDayStart(day: WeekDay, value?: TimeSpan): TimeSpan;
        /**
         * Gets or sets a value indicating if user is allowed to create items on timespans
         **/
        /**
        * Gets or sets a value indicating if user is allowed to create items on timespans
        **/
        allowItemCreate: boolean;
        /**
         * Gets or sets a value indicating if user is allowed to drag items around
         **/
        /**
        * Gets or sets a value indicating if user is allowed to drag items around
        **/
        allowItemDrag: boolean;
        /**
         * Gets or sets a value indicating if user is allowed to edit item text
         **/
        /**
        * Gets or sets a value indicating if user is allowed to edit item text
        **/
        allowItemEdit: boolean;
        /**
         * Gets or sets a value indicating if user is allowed to delete items
         **/
        /**
        * Gets or sets a value indicating if user is allowed to delete items
        **/
        allowItemRemove: boolean;
        /**
         * Gets or sets a value indicating if user is allowed to resize timespan of items
         **/
        /**
        * Gets or sets a value indicating if user is allowed to resize timespan of items
        **/
        allowItemResize: boolean;
        /**
         * Gets or sets the time days should end. Default is 23:59:59
         **/
        /**
        * Gets or sets the time days should end. Default is 23:59:59
        **/
        dayEnd: TimeSpan;
        /**
         * Gets or sets the time days should start. Default is 00:00
         **/
        /**
        * Gets or sets the time days should start. Default is 00:00
        **/
        dayStart: TimeSpan;
        /**
         * Gets a value indicating if there is an item on edit mode
         **/
        /**
        * Gets a value indicating if there is an item on edit mode
        **/
        editMode: any;
        /**
         * Gets the item being edited, if any.
         **/
        /**
        * Gets the item being edited, if any.
        **/
        editModeItem: any;
        /**
         * Gets or sets the first day of week. Default is <c>WeekDay.SUNDAY</c>.
         **/
        /**
        * Gets or sets the first day of week. Default is <c>WeekDay.SUNDAY</c>.
        **/
        firstDayOfWeek: WeekDay;
        /**
         * Gets or sets a value indicating if the navigator elements should be visible
         **/
        /**
        * Gets or sets a value indicating if the navigator elements should be visible
        **/
        navigatorVisible: boolean;
        /**
         * Gets or sets the selection's start
         **/
        /**
        * Gets or sets the selection's start
        **/
        selectionEnd: DateTime;
        /**
         * Gets or sets the selection mode
         **/
        /**
        * Gets or sets the selection mode
        **/
        selectionMode: DateSelectionMode;
        /**
         * Gets or sets the selection's start
         **/
        /**
        * Gets or sets the selection's start
        **/
        selectionStart: DateTime;
        /**
         * Gets or sets the view's end.
         **/
        readonly viewEnd: DateTime;
        /**
         * Gets or sets the view's start.
         **/
        readonly viewStart: DateTime;
        /**
         * Gets or sets the work week's end.
         **/
        /**
        * Gets or sets the work week's end.
        **/
        workWeekEnd: WeekDay;
        /**
         * Gets or sets the work week's start.
         **/
        /**
        * Gets or sets the work week's start.
        **/
        workWeekStart: WeekDay;
    }
}
declare module latte {
    /**
     * Represents a month who show <c>CalendarItem</c>s
     **/
    class CalendarMonthView extends View {
        /**
         *
         **/
        private _content;
        /**
         *
         **/
        private _draggingSelection;
        /**
         *
         **/
        private _itemItemHeight;
        /**
         *
         **/
        private _itemItemTopStart;
        /**
         *
         **/
        private _itemPadding;
        /**
         *
         **/
        private _monthOnView;
        /**
         *
         **/
        private _selectionEnd;
        /**
         *
         **/
        private _selectionStart;
        /**
         *
         **/
        private _viewEnd;
        /**
         *
         **/
        private _viewStart;
        /**
         * Collection of items
         **/
        items: Collection<CalendarItem>;
        /**
         * Raised when the view start/end changes
         **/
        viewRangeChanged: LatteEvent;
        /**
         * Raised when an item is added
         **/
        userAddItem: LatteEvent;
        /**
         * Raised when an item is removed
         **/
        userRemoveItem: LatteEvent;
        /**
         * Creates the MonthView
         **/
        constructor();
        /**
         *
         **/
        private _createBoard;
        /**
         *
         **/
        private _createMatrix;
        /**
         *
         **/
        private _dayElement;
        /**
         *
         **/
        private _dayMouseDown;
        /**
         *
         **/
        private _dayMouseMove;
        /**
         *
         **/
        private _dayMouseUp;
        /**
         *
         **/
        private _keyDown;
        /**
         *
         **/
        private _onAddItem;
        /**
         *
         **/
        private _onRemoveItem;
        /**
         *
         **/
        private _rectanglesFor;
        /**
         *
         **/
        private _weekRectangle;
        /**
         * Clears the selection
         **/
        clearSelection(): void;
        /**
         * Creates an item at the selection
         **/
        createItemAtSelection(text?: string): CalendarItem;
        /**
         * Overriden. Raises the <c>layout</c> event.
         **/
        onLayout(): void;
        /**
         * Extension for setting the layout of items
         **/
        onLayoutItems(): void;
        /**
         * Raises the <c>userAddItem</c> event.
         **/
        onUserAddItem(item: CalendarItem): void;
        /**
         * Raises the <c>userRemoveItem</c> event.
         **/
        onUserRemoveItem(item: CalendarItem): void;
        /**
         * Raises the <c>viewRangeChanged</c> event.
         **/
        onViewRangeChanged(): void;
        /**
         *
         **/
        setSelectionRange(start: DateTime, end: DateTime): void;
        /**
         * Sets the month to show. Only year and month of date will be taken.
         **/
        setViewRange(date: DateTime): void;
        /**
         * Gets or sets the month on the view
         **/
        /**
        * Gets or sets the month on the view
        **/
        monthOnView: DateTime;
        /**
         * Gets the end of view
         **/
        readonly viewEnd: DateTime;
        /**
         * Gets the start of view
         **/
        readonly viewStart: DateTime;
    }
}
declare module latte {
    /**
     * Renders a list with columns
     **/
    class ListView extends View {
        /**
         *
         **/
        private _selectedItem;
        /**
         * Collection of column headers of list.
         **/
        columnHeaders: Collection<ColumnHeader>;
        /**
         * Points to the DOM element where the column headers are placed.
         **/
        columnHeadersElement: JQuery;
        /**
         * Collection of items in list
         **/
        items: Collection<ListViewItem>;
        /**
         * Creates the ListView
         **/
        constructor();
        selectNextItem(): void;
        selectPreviousItem(): void;
        /**
         *
         **/
        informSelectedItem(item: ListViewItem): void;
        /**
         *
         **/
        private _itemSelected;
        /**
         *
         **/
        private _onAddColumn;
        /**
         *
         **/
        private _onAddItem;
        /**
         *
         **/
        private _onRemoveColumn;
        /**
         *
         **/
        private _onRemoveItem;
        /**
         * Auto sizes all columns
         */
        autoSizeAllColumns(): void;
        /**
         * Auto sizes the specified column
         * @param index
         */
        autoSizeColumn(index: number): void;
        private updateWidthOfColumn;
        /**
         * Overriden. Raises the <c>layout</c> event
         **/
        onLayout(): void;
        /**
         * Sorts by the specified column
         * @param index
         */
        sortByColumn(index: number): void;
        /**
         * Gets or sets a value indicating if the column headers are currently visible
         **/
        /**
        * Gets or sets a value indicating if the column headers are currently visible
        **/
        columnHeadersVisible: boolean;
        /**
         * Property field
         */
        private _columnHeadersWidth;
        /**
         * Gets the width of column headers zone
         *
         * @returns {number}
         */
        readonly columnHeadersWidth: number;
        /**
         * Gets or sets the selected item of the list
         *
         * @returns {ListViewItem}
         */
        /**
        * Gets or sets the selected item of the list
        *
        * @param {ListViewItem} value
        */
        selectedItem: ListViewItem;
        /**
         * Back field for event
         */
        private _selectedItemChanged;
        /**
         * Gets an event raised when the value of the selectedItem property changes
         *
         * @returns {LatteEvent}
         */
        readonly selectedItemChanged: LatteEvent;
        /**
         * Raises the <c>selectedItem</c> event
         */
        onSelectedItemChanged(): void;
    }
}
declare module latte {
    /**
     * Shows a calendar to pick a date or a date range.
     **/
    class DateItem extends Item {
        /**
         *
         **/
        private _columns;
        /**
         *
         **/
        private _draggingSelection;
        /**
         *
         **/
        private _rows;
        /**
         *
         **/
        private _selectionEnd;
        /**
         *
         **/
        private _selectionMode;
        /**
         *
         **/
        private _selectionStart;
        /**
         *
         **/
        nextButton: ButtonItem;
        /**
         *
         **/
        previousButton: ButtonItem;
        /**
         * Points to the TABLE element where months are placed
         **/
        table: JQuery;
        /**
         * Raised when <c>selectionStart</c> or <c>selectionEnd</c> properties value change.
         **/
        selectionChanged: LatteEvent;
        /**
         * Raised when <c>selectionEnd</c> property changes.
         **/
        selectionEndChanged: LatteEvent;
        /**
         * Raised when <c>selectionStart</c> property changes.
         **/
        selectionStartChanged: LatteEvent;
        /**
         * Raised when <c>selectionMode</c> property changes.
         **/
        selectionModeChanged: LatteEvent;
        /**
         * Creates the Item
         **/
        constructor();
        /**
         * Creates a month. January is 1, december is 12.
         **/
        private _createMonth;
        /**
         *
         **/
        private _dayMouseDown;
        /**
         *
         **/
        private _dayMouseMove;
        /**
         *
         **/
        private _dayMouseUp;
        /**
         * Marks the specified day in calendar as selected
         **/
        private _selectDay;
        /**
         *
        **/
        getSelectionStart(): DateTime;
        /**
         * Returns a value indicating if the specified date is currently visible in the date range.
         **/
        isOnDisplay(date: DateTime): boolean;
        /**
         *
         **/
        onSelectionChanged(): void;
        /**
         *
         **/
        onSelectionEndChanged(): void;
        /**
         *
         **/
        onSelectionModeChanged(): void;
        /**
         *
         **/
        onSelectionStartChanged(): void;
        /**
         * SPECIAL GETTER
         Gets or sets the end of selection
         **/
        getSelectionEnd(): DateTime;
        /**
         * SPECIAL SETTER
         Gets or sets the end of selection
         **/
        setSelectionEnd(value?: DateTime, raiseEvent?: boolean): void;
        /**
         * Sets the selection range.
         If <c>start</c> is not on view, view will be taken to the <c>start</c>'s month
         Optionally rebuilds the calendar rows and columns.
         Optionally raises events.
         **/
        setSelectionRange(start: DateTime, end: DateTime, rebuild?: boolean, raiseEvents?: boolean): void;
        /**
         * Sets the start of selection
         **/
        setSelectionStart(value?: DateTime, raiseEvent?: boolean): void;
        /**
         * Sets the view start
         **/
        setViewStart(date: DateTime): void;
        /**
         * Unselects all dates on display
         **/
        unselectAll(): void;
        /**
         * Moves the view to the next set of months
         **/
        viewNext(): void;
        /**
         * Moves the view to the previous set of months
         **/
        viewPrevious(): void;
        /**
         * Gets or sets the number of columns of months
         **/
        /**
        * Gets or sets the number of columns of months
        **/
        columns: number;
        /**
         * Gets the size of a month as an object {width, height}
         **/
        readonly monthSize: any;
        /**
         * Gets or sets the number of rows of months
         **/
        /**
        * Gets or sets the number of rows of months
        **/
        rows: number;
        /**
         * Gets or sets the end of selection
         **/
        /**
        * Gets or sets the end of selection
        **/
        selectionEnd: DateTime;
        /**
         * Gets or sets the selection mode
         **/
        /**
        * Gets or sets the selection mode
        **/
        selectionMode: DateSelectionMode;
        /**
         * Gets or sets the start of selection
         **/
        /**
        * Gets or sets the start of selection
        **/
        selectionStart: DateTime;
        /**
         * Gets the first day on view
         **/
        readonly viewEnd: DateTime;
        /**
         * Gets the first day on view
         **/
        readonly viewStart: DateTime;
    }
}
declare module latte {
    /**
     * Html Editor. Loads the <c>rangy</c> plugin.

     For specification of <c>rangy</c> objects refer to:
     <a href="http://code.google.com/p/rangy/w/list" target=_blank>http://code.google.com/p/rangy/w/list</a>
     **/
    class HtmlEditorItem extends ValueItem<string> {
        /**
         *
         * @param {string} s
         * @returns {string}
         */
        static clearFormattingOf(e: HTMLElement): void;
        /**
         * Gets the path to rangy library
         * @returns {string}
         */
        static readonly rangyPath: string;
        static rangyLoaded: boolean;
        /**
         *
         **/
        private _ready;
        /**
         * Value is stored here while not ready.
         **/
        private _valueHtml;
        /**
         * Points to the iframe of the editor
         **/
        iframe: JQuery;
        /**
         * Toolbar of basic commands
         **/
        toolbar: Toolbar;
        /**
         * Creates the editor.
         **/
        constructor();
        /**
         * Creates default buttons
         **/
        private _addToolbarButtons;
        /**
         *
         **/
        private _assignElementHandlers;
        /**
         * Returns a value indicating if the editor can be initialized.
         It can be initialized when its attached to the DOM.
         **/
        private _canInit;
        /**
         * Clears all formatting in editor
         **/
        _clearFormatting(): void;
        /**
         * Tries to convert the passed object to a node
         **/
        private _ensureNode;
        /**
         * Tries to get the editor ready. Returns if control is ready after call.
         **/
        private _ensureReady;
        /**
         * Initializes the editor, if possible.
         **/
        private _initEditor;
        /**
         * Shows a dialog to insert HTML
         **/
        private _insertHTML;
        /**
         * Inserts an image, asking for the URL
         **/
        private _insertImage;
        /**
         * Inserts a link, asking for the Url
         **/
        private _insertLink;
        /**
         * Shows a dialog to insert a YouTube video
         **/
        private _insertYouTube;
        /**
         * Returns a value indicating if editor must be initialized.
         It happens every time its dettached from DOM.
         **/
        private _mustInit;
        /**
         * Gets the body of the iframe
         **/
        body(): JQuery;
        /**
         * Gets the JavaScript document's object of iframe.
         **/
        document(): Document;
        /**
         * Executes the specified command
         **/
        execCommand(command: string, value?: any): void;
        /**
         *
         **/
        getValue(): string;
        /**
         * Inserts the specified node at the currently selected range.
         Returns the inserted node, or <c>null</c> if not possible.
         **/
        insertElement(element: any): JQuery;
        /**
         * Raises the <c>imageSelected</c> event
         */
        onImageSelected(image: JQuery): any;
        /**
         * Overriden.
         **/
        onLayout(): void;
        /**
         * Raises the <c>selectionChanged</c> event.
         **/
        onSelectionChanged(): void;
        /**
         * Overriden.
         **/
        onValueChanged(): void;
        /**
         * Gets a value indicating if the editor is ready to be used as editor.
         While the editor is not ready, all data will be displayed in a non-editable element.
         **/
        ready(): boolean;
        /**
         * Selects the specified element and returns it as a jQuery object.
         **/
        selectElement(element: any): JQuery;
        /**
         * Selects the contents of the specified node and returns the element as a jQuery object.
         **/
        selectElementContents(element: any): JQuery;
        /**
         * Gets the element where selection ends.
         **/
        selectionEnd(): JQuery;
        /**
         * Returns the parent of selection, passing the specified <c>selector</c>
         to the jQuery <c>parents()<c> method.
         **/
        selectionParents(selector?: string): JQuery;
        /**
         * Gets the element where selection starts.
         **/
        selectionStart(): JQuery;
        /**
         * Override.
         **/
        setValue(value: string): void;
        /**
         * Surrounds selected contents with specified element, and returns the
         attached element as a jQuery object.
         **/
        surroundSelectionWith(element: any): JQuery;
        /**
         * Back field for event
         */
        private _selectionChanged;
        /**
         * Gets an event raised when the selection of the editor changes
         *
         * @returns {LatteEvent}
         */
        readonly selectionChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _imageSelected;
        /**
         * Gets an event raised when an image in the editor is selected
         *
         * @returns {LatteEvent}
         */
        readonly imageSelected: LatteEvent;
        /**
         * Gets the current selection
         **/
        readonly selection: RangySelection;
        /**
         * Gets the range of selection. Returns <c>null</c> if no current selection.
         **/
        readonly selectionRange: RangyRange;
        /**
         * Gets or sets the source html
         */
        /**
        * Gets or sets the source html
        */
        value: string;
        /**
         * Gets the Window of the iframe
         **/
        readonly window: any;
    }
}
declare module latte {
    enum TextboxFilter {
        NONE = 0,
        NUMBER = 1,
        INTEGER = 2
    }
    /**
     *
     **/
    class TextboxItem extends ValueItem<string> {
        /**
         *
         **/
        private _inputContainer;
        /**
         *
         **/
        private _invisible;
        /**
         *
         */
        private _minLenToSuggest;
        /**
         * Index of Currently selected suggestion
         */
        private selectedIndex;
        /**
         *
         */
        private _selectedSuggestion;
        /**
         *
         */
        private _loadingSuggestions;
        /**
         * Points to the element who receives input
         **/
        input: JQuery;
        ignorePassToTextbox: boolean;
        /**
         * Initializes the item
         **/
        constructor();
        /**
         * Updates the input element
         **/
        private _updateInput;
        /**
         * Hides the suggestions
         */
        hideSuggestions(): void;
        /**
         * Raises the <c>addSuggestion</c> event
         * @param item
         */
        onAddSuggestion(item: Item): void;
        /**
         * Raises the <c>enterPressed</c> event
         */
        onEnterPressed(): void;
        /**
         * Raises the <c>filterSuggestions</c> event
         */
        onFilterSuggestions(): void;
        /**
         * Raises the <c>keyDown</c>
         * @param e
         */
        onKeyDown(e: JQueryEventObject): any;
        /**
         * Raises the <c>keyUp</c>
         * @param e
         */
        onKeyUp(e: JQueryEventObject): any;
        /**
         * Raises the <c>keyPress</c> event
         */
        onKeyPress(e: any): any;
        /**
         * Override.
         **/
        onLayout(): void;
        /**
         * Raises the <c>readOnly</c> event
         */
        onReadOnlyChanged(): void;
        /**
         * Raises the <c>removeSuggestion</c> event
         * @param item
         */
        onRemoveSuggestion(item: Item): void;
        /**
         * Raises the <c>valid</c> event
         */
        onValidChanged(): any;
        /**
         * Override
         **/
        onValueChanged(): void;
        /**
         * Selects the first item of suggestions
         */
        selectFirstSuggestion(): void;
        /**
         * Selects the next suggestion (if possible)
         */
        selectNextSuggestion(): void;
        /**
         * Selects the previous suggestion (if possible)
         */
        selectPreviousSuggestion(): void;
        /**
         * Selects the specified suggestion from list
         * @throws Exception if index is out of range
         * @param index
         */
        selectSuggestion(index: number): void;
        /**
         * Sets the width as a percentage. Dont forget to include '%' after size
         **/
        setRelativeWidth(width: string): void;
        /**
         * Sets the side label as a "clear text" button, with the specified button
         * @param icon
         */
        setSideAsCleaner(icon?: IconItem): void;
        /**
         * Sets the value silently without updating the textbox
         * @param value
         */
        setValueSilently(value: string): void;
        /**
         * Back field for event
         */
        private _enterPressed;
        /**
         * Gets an event raised when user presses the enter key
         *
         * @returns {LatteEvent}
         */
        readonly enterPressed: LatteEvent;
        /**
         * Back field for event
         */
        private _filterSuggestions;
        /**
         * Gets an event raised when its time to add suggestins
         *
         * @returns {LatteEvent}
         */
        readonly filterSuggestions: LatteEvent;
        /**
         * Back field for event
         */
        private _keyPress;
        /**
         * Gets an event raised when the user presses a key on the input
         *
         * @returns {LatteEvent}
         */
        readonly keyPress: LatteEvent;
        /**
         * Back field for event
         */
        private _keyDown;
        /**
         * Gets an event raised when a key is pressed
         *
         * @returns {LatteEvent}
         */
        readonly keyDown: LatteEvent;
        /**
         * Back field for event
         */
        private _keyUp;
        /**
         * Gets an event raised when the key is released
         *
         * @returns {LatteEvent}
         */
        readonly keyUp: LatteEvent;
        /**
         * Back field for event
         */
        private _readOnlyChanged;
        /**
         * Gets an event raised when the value of the readOnly property changes
         *
         * @returns {LatteEvent}
         */
        readonly readOnlyChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _validChanged;
        /**
         * Gets an event raised when the value of the valid property changes
         *
         * @returns {LatteEvent}
         */
        readonly validChanged: LatteEvent;
        /**
         * Property field
         */
        private _allowedKeys;
        /**
         * Gets or sets the allowed keys of the keyboard
         *
         * @returns {Key[]}
         */
        /**
        * Gets or sets the allowed keys of the keyboard
        *
        * @param {Key[]} value
        */
        allowedKeys: Key[];
        /**
         *
         **/
        private _autoGrow;
        /**
         * Gets or sets a value indicating if the textbox height should grow automatically
         to adjust to fit its text
         **/
        /**
        * Gets or sets a value indicating if the textbox height should grow automatically
        to adjust to fit its text
        **/
        autoGrow: boolean;
        /**
         * Property field
         */
        private _filter;
        /**
         * Gets or sets the filter for input
         *
         * @returns {TextboxFilter}
         */
        /**
        * Gets or sets the filter for input
        *
        * @param {TextboxFilter} value
        */
        filter: TextboxFilter;
        /**
         * Gets or sets the maximum length for input in the textbox
         **/
        /**
        * Gets or sets the maximum length for input in the textbox
        **/
        maxLength: number;
        /**
         *
         **/
        private _maxLength;
        /**
         * Gets or sets the minimum height of the textbox, if multiline
         **/
        /**
        * Gets or sets the minimum height of the textbox, if multiline
        **/
        minHeight: number;
        /**
         * Gets or sets the minimum length of text to activate suggestions
         * @param value
         */
        /**
        * Gets or sets the minimum length of text to activate suggestions
        * @param value
        */
        minLengthToActivateSuggestions: number;
        /**
         *
         **/
        private _minHeight;
        /**
         *
         **/
        private _multiline;
        /**
         * Gets or sets a value indicating if the textbox can be multiline
         **/
        /**
        * Gets or sets a value indicating if the textbox can be multiline
        **/
        multiline: boolean;
        /**
         *
         **/
        private _password;
        /**
         * Gets or sets a value indicating if the textbox accepts passwords
         **/
        /**
        * Gets or sets a value indicating if the textbox accepts passwords
        **/
        password: boolean;
        /**
         * Gets or sets the placeholder text of textbox
         **/
        /**
        * Gets or sets the placeholder text of textbox
        **/
        placeholder: string;
        /**
         * Property field
         */
        private _readOnly;
        /**
         * Gets or sets a value indicating if the textbox should be read-only
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets a value indicating if the textbox should be read-only
        *
        * @param {boolean} value
        */
        readOnly: boolean;
        /**
         *
         */
        private _suggestions;
        /**
         * Gets the collection of suggestions for autocompletion
         *
         * @returns {Collection<Item>}
         */
        readonly suggestions: Collection<Item>;
        /**
         * Gets a value indicating if the suggestions list is currently visible
         * @returns {boolean}
         */
        readonly suggestionsVisible: boolean;
        /**
         * Property field
         */
        private _valid;
        /**
         * Gets or sets a value indicating if the control is valid
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets a value indicating if the control is valid
        *
        * @param {boolean} value
        */
        valid: boolean;
        /**
         * Property field
         */
        private _validationRegex;
        /**
         * Gets or sets the regular expression for validating content
         *
         * @returns {RegExp}
         */
        /**
        * Gets or sets the regular expression for validating content
        *
        * @param {RegExp} value
        */
        validationRegex: RegExp;
        /**
         * Gets or sets the width of the textbox.
         **/
        /**
        * Gets or sets the width of the textbox.
        **/
        width: number;
        /**
         * Field for placeHolerLabel property
         */
        private _placeholderLabel;
        /**
         * Gets the placeholder label
         *
         * @returns {LabelItem}
         */
        readonly placeholderLabel: LabelItem;
        /**
         * Field for sideLabel property
         */
        private _sideLabel;
        /**
         * Gets the side label
         *
         * @returns {LabelItem}
         */
        readonly sideLabel: LabelItem;
        /**
         *
         */
        private _suggestionOverlay;
        /**
         * Gets the suggestions overlay
         */
        readonly suggestionOverlay: SuggestionOverlay;
    }
}
declare module latte {
    /**
     * Renders an item to input data from user.
     **/
    class InputItem extends ValueItem<any> {
        /**
         * Gets a formatted string of the value depending on the type
         **/
        static format(value: any, type: string, options?: any): string;
        /**
         * Creates the input item from a caption and a value item
         *
         * @param text
         * @param item
         */
        static fromItem(text: string, item: ValueItem<any>): InputItem;
        /**
         * Gets an input from the specified IInput
         * @param input
         * @param name
         */
        static fromIInput(input: IInput, name?: string, value?: any): InputItem;
        /**
         * Returns a value indicating if the value is empty
         * @param value
         */
        static isEmptyValue(value: any): boolean;
        /**
         *
         */
        private _textWidth;
        /**
         * Saves the last assigned value item
         */
        private _lastValueItem;
        /**
         * Saves the last assigned hint item
         */
        private _lastHintItem;
        /**
         * Points to the label where text is stored
         **/
        label: LabelItem;
        /**
         * Points to the label where read-only elements are shown
         **/
        readOnlyLabel: LabelValueItem;
        /**
         * Points to separator element
         **/
        separatorElement: JQuery;
        /**
         * Points to the DOM element where <c>labelElement</> is contained, i.e. the text side.
         **/
        textElement: JQuery;
        /**
         * Points to the DOM element where the value is shown, i.e. the value side
         **/
        valueElement: JQuery;
        /**
         * Creates the input element
         **/
        constructor(text?: string, type?: InputType, value?: any, readOnly?: boolean, name?: string);
        /**
         * Updates the readonly label
         */
        private updateReadonlyLabel;
        /**
         * Creates an item from a specified value item
         * @param {latte.InputType} value
         * @returns {latte.ValueItem<any>}
         */
        private valueItemFromType;
        /**
         * Override
         * @returns {string}
         */
        getValueString(): string;
        /**
         * Checks if the current value is valid for the field <c>type</c>
         **/
        isValid(): boolean;
        /**
         *
         **/
        onLayout(): void;
        /**
         * Raises the <c>meta</c> event
         */
        onMetaChanged(): void;
        /**
         * Raises the <c>valueChanged</c> event
         */
        onValueChanged(): void;
        /**
         * Override.
         * @returns {string}
         */
        onGetValueString(): string;
        /**
         * Raises the <c>hintItem</c> event
         */
        onHintItemChanged(): void;
        /**
         * Raises the <c>options</c> event
         */
        onOptionsChanged(): void;
        /**
         * Raises the <c>readOnly</c> event
         */
        onReadOnlyChanged(): void;
        /**
         * Raises the <c>readOnlyValue</c> event
         */
        onReadOnlyValueChanged(): void;
        /**
         * Raises the <c>separator</c> event
         */
        onSeparatorChanged(): void;
        /**
         * Raises the <c>text</c> event
         */
        onTextChanged(): void;
        /**
         * Raises the <c>type</c> event
         */
        onTypeChanged(): void;
        /**
         * Raises the <c>valid</c> event
         */
        onValidChanged(): void;
        /**
         * Raises the <c>valueItem</c> event
         */
        onValueItemChanged(): void;
        /**
         * Sets the hint as a string in a label
         * @param hint
         */
        setHint(hint: string): void;
        /**
         * Back field for event
         */
        private _hintItemChanged;
        /**
         * Gets an event raised when the value of the hintItem property changes
         *
         * @returns {LatteEvent}
         */
        readonly hintItemChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _metaChanged;
        /**
         * Gets an event raised when the value of the meta property changes
         *
         * @returns {LatteEvent}
         */
        readonly metaChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _optionsChanged;
        /**
         * Gets an event raised when the value of the options property changes
         *
         * @returns {LatteEvent}
         */
        readonly optionsChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _readOnlyChanged;
        /**
         * Gets an event raised when the value of the readOnly property changes
         *
         * @returns {LatteEvent}
         */
        readonly readOnlyChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _readOnlyValueChanged;
        /**
         * Gets an event raised when the value of the readOnlyValue property changes
         *
         * @returns {LatteEvent}
         */
        readonly readOnlyValueChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _separatorChanged;
        /**
         * Gets an event raised when the value of the separator property changes
         *
         * @returns {LatteEvent}
         */
        readonly separatorChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _textChanged;
        /**
         * Gets an event raised when the value of the text property changes
         *
         * @returns {LatteEvent}
         */
        readonly textChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _typeChanged;
        /**
         * Gets an event raised when the value of the type property changes
         *
         * @returns {LatteEvent}
         */
        readonly typeChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _validChanged;
        /**
         * Gets an event raised when the value of the valid property changes
         *
         * @returns {LatteEvent}
         */
        readonly validChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _valueItemChanged;
        /**
         * Gets an event raised when the value of the valueItem property changes
         *
         * @returns {LatteEvent}
         */
        readonly valueItemChanged: LatteEvent;
        /**
         *
         **/
        private _direction;
        /**
         * Gets or sets the direction of input.
         **/
        /**
        * Gets or sets the direction of input.
        **/
        direction: Direction;
        /**
         * Property field
         */
        private _hintItem;
        /**
         * Gets or sets the hint item
         *
         * @returns {Item}
         */
        /**
        * Gets or sets the hint item
        *
        * @param {Item} value
        */
        hintItem: Item;
        /**
         * Property field
         */
        private _meta;
        /**
         * Gets or sets the metadata of the input
         *
         * @returns {IInput}
         */
        /**
        * Gets or sets the metadata of the input
        *
        * @param {IInput} value
        */
        meta: IInput;
        /**
         *
         **/
        private _name;
        /**
         * Gets or sets the name of the input
         **/
        /**
        * Gets or sets the name of the input
        **/
        name: string;
        /**
         * Property field
         */
        private _options;
        /**
         * Gets or sets the options of the combo or other
         *
         * @returns {any}
         */
        /**
        * Gets or sets the options of the combo or other
        *
        * @param {any} value
        */
        options: any;
        /**
         * Property field
         */
        private _readOnly;
        /**
         * Gets or sets a value indicating if the input is read-only
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets a value indicating if the input is read-only
        *
        * @param {boolean} value
        */
        readOnly: boolean;
        /**
         * Property field
         */
        private _readOnlyValue;
        /**
         * Gets or sets the read-only value to show
         *
         * @returns {string}
         */
        /**
        * Gets or sets the read-only value to show
        *
        * @param {string} value
        */
        readOnlyValue: string;
        /**
         * Property field
         */
        private _separator;
        /**
         * Gets or sets a value indicating if the input has a separator on bottom
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets a value indicating if the input has a separator on bottom
        *
        * @param {boolean} value
        */
        separator: boolean;
        /**
         * Property field
         */
        private _text;
        /**
         * Gets or sets the text of the input
         *
         * @returns {string}
         */
        /**
        * Gets or sets the text of the input
        *
        * @param {string} value
        */
        text: string;
        /**
         * Gets or sets a value indicating if the text section is visible
         **/
        /**
        * Gets or sets a value indicating if the text section is visible
        **/
        textVisible: boolean;
        /**
         * Gets or sets the with of the text part. Use value lower than 1 for percentages.
         * Note that when horizontal input, layout may become affected.
         *
         * @returns {number}
         */
        /**
        * Gets or sets the with of the text part.
        * Value must be percent since it must be leveled with value part. Value size will be adjusted
        * to 5% less large than it should to avoid edge collisions.
        * Values lower than 1 accepted.
        * Note that when horizontal input, layout may become affected.
        *
        */
        textWidth: number;
        /**
         * Property field
         */
        private _type;
        /**
         * Gets or sets the type of the input
         *
         * @returns {InputType}
         */
        /**
        * Gets or sets the type of the input
        *
        * @param {InputType} value
        */
        type: InputType;
        /**
         * Gets or sets the value of the input
         **/
        /**
        * Gets or sets the value of the input
        **/
        value: any;
        /**
         * Property field
         */
        private _valueItem;
        /**
         * Gets or sets the valueItem of the input
         *
         * @returns {ValueItem<any>}
         */
        /**
        * Gets or sets the valueItem of the input
        *
        * @param {ValueItem<any>} value
        */
        valueItem: ValueItem<any>;
        /**
         * Property field
         */
        private _valid;
        /**
         * Gets or sets a value indicating if the value of the item is currently valid
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets a value indicating if the value of the item is currently valid
        *
        * @param {boolean} value
        */
        valid: boolean;
    }
}
declare module latte {
    /**
     * Represents a set of days who contains day items
     **/
    class CalendarDayView extends View {
        /**
         *
         **/
        private _allDayOffset;
        /**
         *
         **/
        private _allowItemCreate;
        /**
         *
         **/
        private _columns;
        /**
         *
         **/
        private _columnsGrid;
        /**
         *
         **/
        private _columnsItems;
        /**
         *
         **/
        private _content;
        /**
         *
         **/
        private _daysGrid;
        /**
         *
         */
        private _daysItems;
        /**
         *
         **/
        private _draggingHeaderSelection;
        /**
         *
         **/
        private _draggingSelection;
        /**
         *
         **/
        private _itemPadding;
        /**
         *
         **/
        private _minuteSpan;
        /**
         *
         **/
        private _scrollStart;
        /**
         *
         **/
        private _selectionEnd;
        /**
         *
         **/
        private _selectionStart;
        /**
         *
         **/
        private _separator;
        /**
         *
         **/
        private _timeIndicator;
        /**
         *
         **/
        private _timeSpans;
        /**
         *
         **/
        private _timeline;
        /**
         *
         **/
        private _viewEnd;
        /**
         *
         **/
        private _viewStart;
        /**
         *
         **/
        private _workDayEnd;
        /**
         *
         **/
        private _workDayStart;
        /**
         *
         */
        private _firstScroll;
        /**
         * Collection of items
         **/
        items: Collection<CalendarItem>;
        /**
         * Raised when the view start/end changes
         **/
        viewRangeChanged: LatteEvent;
        /**
         * Raised when an item is added
         **/
        userAddItem: LatteEvent;
        /**
         * Raised when an item is removed
         **/
        userRemoveItem: LatteEvent;
        /**
         * Creates the day view
         **/
        constructor();
        /**
         *
         **/
        private _columnsMouseDown;
        /**
         *
         **/
        private _columnsMouseLeave;
        /**
         *
         **/
        private _columnsMouseMove;
        /**
         *
         **/
        private _columnsMouseUp;
        /**
         * Creates a matrix filling each item as a position to measure item width and horizontal location

         Assigns three properties to each item to know its horizontal position
         **/
        private _createMatrix;
        /**
         * Craetes a matrix for filling the all-day items
         **/
        private _createTopMatrix;
        /**
         *
         **/
        private _dayColumn;
        /**
         *
         **/
        private _daysGridMouseDown;
        /**
         *
         **/
        private _daysGridMouseMove;
        /**
         *
         **/
        private _daysGridMouseUp;
        /**
         *
         **/
        private _keyDown;
        /**
         *
         **/
        private _onAddItem;
        /**
         * Specifies if the page coordinates are on the headers zone
         **/
        private _onHeadersZone;
        /**
         *
         **/
        private _onRemoveItem;
        /**
         * Returns a collection of rectangles for the specified range
         **/
        private _rectanglesFor;
        /**
         *
         **/
        private _timeSpanHitTest;
        /**
         *
         **/
        private _updateBoard;
        /**
         * Clears the selection
         **/
        clearSelection(): void;
        /**
         * Creates an item at the selection
         **/
        createItemAtSelection(text?: string): CalendarItem;
        /**
         * Overriden. Raises the <c>layout</c> event
         **/
        onLayout(): void;
        /**
         * Updates layout of items on calendar
         **/
        onLayoutItems(): void;
        /**
         * Raises the <c>userAddItem</c> event.
         **/
        onUserAddItem(item: CalendarItem): void;
        /**
         * Raises the <c>userRemoveItem</c> event.
         **/
        onUserRemoveItem(item: CalendarItem): void;
        /**
         * Raises the <c>viewRangeChanged</c> event.
         **/
        onViewRangeChanged(): void;
        /**
         * Returns a value indicating if the selection is on header
         **/
        selectionOnHeader(): boolean;
        /**
         * Sets the current selection range
         **/
        setSelectionRange(start: DateTime, end: DateTime): void;
        /**
         * Sets the view range of the day view
         **/
        setViewRange(start: DateTime, end: DateTime): void;
        /**
         * Gets the height (or Y coordinate) for the specified time
         **/
        private _heightOf;
        /**
         * Gets the timespan element index of the specified time
         **/
        private _timeSpanIndexOf;
        /**
         * Gets the timespan element of the specified time
         **/
        private _timeSpanOf;
        /**
         * Gets or sets a value indicating if the view allows user to create new items
         **/
        /**
        * Gets or sets a value indicating if the view allows user to create new items
        **/
        allowItemCreate: boolean;
        /**
         * Gets the end of view
         **/
        readonly viewEnd: DateTime;
        /**
         * Gets the start of view
         **/
        readonly viewStart: DateTime;
    }
}
/**
 * Created by josemanuel on 8/22/16.
 */
declare module latte {
    /**
     *
     */
    class LinearIcon extends IconItem {
        static catalog: {
            home: string;
            home2: string;
            home3: string;
            home4: string;
            home5: string;
            home6: string;
            bathtub: string;
            toothbrush: string;
            bed: string;
            couch: string;
            chair: string;
            city: string;
            apartment: string;
            pencil: string;
            pencil2: string;
            pen: string;
            pencil3: string;
            eraser: string;
            pencil4: string;
            pencil5: string;
            feather: string;
            feather2: string;
            feather3: string;
            pen2: string;
            pen_add: string;
            pen_remove: string;
            vector: string;
            pen3: string;
            blog: string;
            brush: string;
            brush2: string;
            spray: string;
            paint_roller: string;
            stamp: string;
            tape: string;
            desk_tape: string;
            texture: string;
            eye_dropper: string;
            palette: string;
            color_sampler: string;
            bucket: string;
            gradient: string;
            gradient2: string;
            magic_wand: string;
            magnet: string;
            pencil_ruler: string;
            pencil_ruler2: string;
            compass: string;
            aim: string;
            gun: string;
            bottle: string;
            drop: string;
            drop_crossed: string;
            drop2: string;
            snow: string;
            snow2: string;
            fire: string;
            lighter: string;
            knife: string;
            dagger: string;
            tissue: string;
            toilet_paper: string;
            poop: string;
            umbrella: string;
            umbrella2: string;
            rain: string;
            tornado: string;
            wind: string;
            fan: string;
            contrast: string;
            sun_small: string;
            sun: string;
            sun2: string;
            moon: string;
            cloud: string;
            cloud_upload: string;
            cloud_download: string;
            cloud_rain: string;
            cloud_hailstones: string;
            cloud_snow: string;
            cloud_windy: string;
            sun_wind: string;
            cloud_fog: string;
            cloud_sun: string;
            cloud_lightning: string;
            cloud_sync: string;
            cloud_lock: string;
            cloud_gear: string;
            cloud_alert: string;
            cloud_check: string;
            cloud_cross: string;
            cloud_crossed: string;
            cloud_database: string;
            database: string;
            database_add: string;
            database_remove: string;
            database_lock: string;
            database_refresh: string;
            database_check: string;
            database_history: string;
            database_upload: string;
            database_download: string;
            server: string;
            shield: string;
            shield_check: string;
            shield_alert: string;
            shield_cross: string;
            lock: string;
            rotation_lock: string;
            unlock: string;
            key: string;
            key_hole: string;
            toggle_off: string;
            toggle_on: string;
            cog: string;
            cog2: string;
            wrench: string;
            screwdriver: string;
            hammer_wrench: string;
            hammer: string;
            saw: string;
            axe: string;
            axe2: string;
            shovel: string;
            pickaxe: string;
            factory: string;
            factory2: string;
            recycle: string;
            trash: string;
            trash2: string;
            trash3: string;
            broom: string;
            game: string;
            gamepad: string;
            joystick: string;
            dice: string;
            spades: string;
            diamonds: string;
            clubs: string;
            hearts: string;
            heart: string;
            star: string;
            star_half: string;
            star_empty: string;
            flag: string;
            flag2: string;
            flag3: string;
            mailbox_full: string;
            mailbox_empty: string;
            at_sign: string;
            envelope: string;
            envelope_open: string;
            paperclip: string;
            paper_plane: string;
            reply: string;
            reply_all: string;
            inbox: string;
            inbox2: string;
            outbox: string;
            box: string;
            archive: string;
            archive2: string;
            drawers: string;
            drawers2: string;
            drawers3: string;
            eye: string;
            eye_crossed: string;
            eye_plus: string;
            eye_minus: string;
            binoculars: string;
            binoculars2: string;
            hdd: string;
            hdd_down: string;
            hdd_up: string;
            floppy_disk: string;
            disc: string;
            tape2: string;
            printer: string;
            shredder: string;
            file_empty: string;
            file_add: string;
            file_check: string;
            file_lock: string;
            files: string;
            copy: string;
            compare: string;
            folder: string;
            folder_search: string;
            folder_plus: string;
            folder_minus: string;
            folder_download: string;
            folder_upload: string;
            folder_star: string;
            folder_heart: string;
            folder_user: string;
            folder_shared: string;
            folder_music: string;
            folder_picture: string;
            folder_film: string;
            scissors: string;
            paste: string;
            clipboard_empty: string;
            clipboard_pencil: string;
            clipboard_text: string;
            clipboard_check: string;
            clipboard_down: string;
            clipboard_left: string;
            clipboard_alert: string;
            clipboard_user: string;
            register: string;
            enter: string;
            exit: string;
            papers: string;
            news: string;
            reading: string;
            typewriter: string;
            document: string;
            document2: string;
            graduation_hat: string;
            license: string;
            license2: string;
            medal_empty: string;
            medal_first: string;
            medal_second: string;
            medal_third: string;
            podium: string;
            trophy: string;
            trophy2: string;
            music_note: string;
            music_note2: string;
            music_note3: string;
            playlist: string;
            playlist_add: string;
            guitar: string;
            trumpet: string;
            album: string;
            shuffle: string;
            repeat_one: string;
            repeat: string;
            headphones: string;
            headset: string;
            loudspeaker: string;
            equalizer: string;
            theater: string;
            _3d_glasses: string;
            ticket: string;
            presentation: string;
            play: string;
            film_play: string;
            clapboard_play: string;
            media: string;
            film: string;
            film2: string;
            surveillance: string;
            surveillance2: string;
            camera: string;
            camera_crossed: string;
            camera_play: string;
            time_lapse: string;
            record: string;
            camera2: string;
            camera_flip: string;
            panorama: string;
            time_lapse2: string;
            shutter: string;
            shutter2: string;
            face_detection: string;
            flare: string;
            convex: string;
            concave: string;
            picture: string;
            picture2: string;
            picture3: string;
            pictures: string;
            book: string;
            audio_book: string;
            book2: string;
            bookmark: string;
            bookmark2: string;
            label: string;
            library: string;
            library2: string;
            contacts: string;
            profile: string;
            portrait: string;
            portrait2: string;
            user: string;
            user_plus: string;
            user_minus: string;
            user_lock: string;
            users: string;
            users2: string;
            users_plus: string;
            users_minus: string;
            group_work: string;
            woman: string;
            man: string;
            baby: string;
            baby2: string;
            baby3: string;
            baby_bottle: string;
            walk: string;
            hand_waving: string;
            jump: string;
            run: string;
            woman2: string;
            man2: string;
            man_woman: string;
            height: string;
            weight: string;
            scale: string;
            button: string;
            bow_tie: string;
            tie: string;
            socks: string;
            shoe: string;
            shoes: string;
            hat: string;
            pants: string;
            shorts: string;
            flip_flops: string;
            shirt: string;
            hanger: string;
            laundry: string;
            store: string;
            haircut: string;
            store_24: string;
            barcode: string;
            barcode2: string;
            barcode3: string;
            cashier: string;
            bag: string;
            bag2: string;
            cart: string;
            cart_empty: string;
            cart_full: string;
            cart_plus: string;
            cart_plus2: string;
            cart_add: string;
            cart_remove: string;
            cart_exchange: string;
            tag: string;
            tags: string;
            receipt: string;
            wallet: string;
            credit_card: string;
            cash_dollar: string;
            cash_euro: string;
            cash_pound: string;
            cash_yen: string;
            bag_dollar: string;
            bag_euro: string;
            bag_pound: string;
            bag_yen: string;
            coin_dollar: string;
            coin_euro: string;
            coin_pound: string;
            coin_yen: string;
            calculator: string;
            calculator2: string;
            abacus: string;
            vault: string;
            telephone: string;
            phone_lock: string;
            phone_wave: string;
            phone_pause: string;
            phone_outgoing: string;
            phone_incoming: string;
            phone_in_out: string;
            phone_error: string;
            phone_sip: string;
            phone_plus: string;
            phone_minus: string;
            voicemail: string;
            dial: string;
            telephone2: string;
            pushpin: string;
            pushpin2: string;
            map_marker: string;
            map_marker_user: string;
            map_marker_down: string;
            map_marker_check: string;
            map_marker_crossed: string;
            radar: string;
            compass2: string;
            map: string;
            map2: string;
            location: string;
            road_sign: string;
            calendar_empty: string;
            calendar_check: string;
            calendar_cross: string;
            calendar_31: string;
            calendar_full: string;
            calendar_insert: string;
            calendar_text: string;
            calendar_user: string;
            mouse: string;
            mouse_left: string;
            mouse_right: string;
            mouse_both: string;
            keyboard: string;
            keyboard_up: string;
            keyboard_down: string;
            _delete: string;
            spell_check: string;
            escape: string;
            enter2: string;
            screen: string;
            aspect_ratio: string;
            signal: string;
            signal_lock: string;
            signal_80: string;
            signal_60: string;
            signal_40: string;
            signal_20: string;
            signal_0: string;
            signal_blocked: string;
            sim: string;
            flash_memory: string;
            usb_drive: string;
            phone: string;
            smartphone: string;
            smartphone_notification: string;
            smartphone_vibration: string;
            smartphone_embed: string;
            smartphone_waves: string;
            tablet: string;
            tablet2: string;
            laptop: string;
            laptop_phone: string;
            desktop: string;
            launch: string;
            new_tab: string;
            window: string;
            cable: string;
            cable2: string;
            tv: string;
            radio: string;
            remote_control: string;
            power_switch: string;
            power: string;
            power_crossed: string;
            flash_auto: string;
            lamp: string;
            flashlight: string;
            lampshade: string;
            cord: string;
            outlet: string;
            battery_power: string;
            battery_empty: string;
            battery_alert: string;
            battery_error: string;
            battery_low1: string;
            battery_low2: string;
            battery_low3: string;
            battery_mid1: string;
            battery_mid2: string;
            battery_mid3: string;
            battery_full: string;
            battery_charging: string;
            battery_charging2: string;
            battery_charging3: string;
            battery_charging4: string;
            battery_charging5: string;
            battery_charging6: string;
            battery_charging7: string;
            chip: string;
            chip_x64: string;
            chip_x86: string;
            bubble: string;
            bubbles: string;
            bubble_dots: string;
            bubble_alert: string;
            bubble_question: string;
            bubble_text: string;
            bubble_pencil: string;
            bubble_picture: string;
            bubble_video: string;
            bubble_user: string;
            bubble_quote: string;
            bubble_heart: string;
            bubble_emoticon: string;
            bubble_attachment: string;
            phone_bubble: string;
            quote_open: string;
            quote_close: string;
            dna: string;
            heart_pulse: string;
            pulse: string;
            syringe: string;
            pills: string;
            first_aid: string;
            lifebuoy: string;
            bandage: string;
            bandages: string;
            thermometer: string;
            microscope: string;
            brain: string;
            beaker: string;
            skull: string;
            bone: string;
            construction: string;
            construction_cone: string;
            pie_chart: string;
            pie_chart2: string;
            graph: string;
            chart_growth: string;
            chart_bars: string;
            chart_settings: string;
            cake: string;
            gift: string;
            balloon: string;
            rank: string;
            rank2: string;
            rank3: string;
            crown: string;
            lotus: string;
            diamond: string;
            diamond2: string;
            diamond3: string;
            diamond4: string;
            linearicons: string;
            teacup: string;
            teapot: string;
            glass: string;
            bottle2: string;
            glass_cocktail: string;
            glass2: string;
            dinner: string;
            dinner2: string;
            chef: string;
            scale2: string;
            egg: string;
            egg2: string;
            eggs: string;
            platter: string;
            steak: string;
            hamburger: string;
            hotdog: string;
            pizza: string;
            sausage: string;
            chicken: string;
            fish: string;
            carrot: string;
            cheese: string;
            bread: string;
            ice_cream: string;
            ice_cream2: string;
            candy: string;
            lollipop: string;
            coffee_bean: string;
            coffee_cup: string;
            cherry: string;
            grapes: string;
            citrus: string;
            apple: string;
            leaf: string;
            landscape: string;
            pine_tree: string;
            tree: string;
            cactus: string;
            paw: string;
            footprint: string;
            speed_slow: string;
            speed_medium: string;
            speed_fast: string;
            rocket: string;
            hammer2: string;
            balance: string;
            briefcase: string;
            luggage_weight: string;
            dolly: string;
            plane: string;
            plane_crossed: string;
            helicopter: string;
            traffic_lights: string;
            siren: string;
            road: string;
            engine: string;
            oil_pressure: string;
            coolant_temperature: string;
            car_battery: string;
            gas: string;
            gallon: string;
            transmission: string;
            car: string;
            car_wash: string;
            car_wash2: string;
            bus: string;
            bus2: string;
            car2: string;
            parking: string;
            car_lock: string;
            taxi: string;
            car_siren: string;
            car_wash3: string;
            car_wash4: string;
            ambulance: string;
            truck: string;
            trailer: string;
            scale_truck: string;
            train: string;
            ship: string;
            ship2: string;
            anchor: string;
            boat: string;
            bicycle: string;
            bicycle2: string;
            dumbbell: string;
            bench_press: string;
            swim: string;
            football: string;
            baseball_bat: string;
            baseball: string;
            tennis: string;
            tennis2: string;
            ping_pong: string;
            hockey: string;
            _8ball: string;
            bowling: string;
            bowling_pins: string;
            golf: string;
            golf2: string;
            archery: string;
            slingshot: string;
            soccer: string;
            basketball: string;
            cube: string;
            _3d_rotate: string;
            puzzle: string;
            glasses: string;
            glasses2: string;
            accessibility: string;
            wheelchair: string;
            wall: string;
            fence: string;
            wall2: string;
            icons: string;
            resize_handle: string;
            icons2: string;
            select: string;
            select2: string;
            site_map: string;
            earth: string;
            earth_lock: string;
            network: string;
            network_lock: string;
            planet: string;
            happy: string;
            smile: string;
            grin: string;
            tongue: string;
            sad: string;
            wink: string;
            dream: string;
            shocked: string;
            shocked2: string;
            tongue2: string;
            neutral: string;
            happy_grin: string;
            cool: string;
            mad: string;
            grin_evil: string;
            evil: string;
            wow: string;
            annoyed: string;
            wondering: string;
            confused: string;
            zipped: string;
            grumpy: string;
            mustache: string;
            tombstone_hipster: string;
            tombstone: string;
            ghost: string;
            ghost_hipster: string;
            halloween: string;
            christmas: string;
            easter_egg: string;
            mustache2: string;
            mustache_glasses: string;
            pipe: string;
            alarm: string;
            alarm_add: string;
            alarm_snooze: string;
            alarm_ringing: string;
            bullhorn: string;
            hearing: string;
            volume_high: string;
            volume_medium: string;
            volume_low: string;
            volume: string;
            mute: string;
            lan: string;
            lan2: string;
            wifi: string;
            wifi_lock: string;
            wifi_blocked: string;
            wifi_mid: string;
            wifi_low: string;
            wifi_low2: string;
            wifi_alert: string;
            wifi_alert_mid: string;
            wifi_alert_low: string;
            wifi_alert_low2: string;
            stream: string;
            stream_check: string;
            stream_error: string;
            stream_alert: string;
            communication: string;
            communication_crossed: string;
            broadcast: string;
            antenna: string;
            satellite: string;
            satellite2: string;
            mic: string;
            mic_mute: string;
            mic2: string;
            spotlights: string;
            hourglass: string;
            loading: string;
            loading2: string;
            loading3: string;
            refresh: string;
            refresh2: string;
            undo: string;
            redo: string;
            jump2: string;
            undo2: string;
            redo2: string;
            sync: string;
            repeat_one2: string;
            sync_crossed: string;
            sync2: string;
            repeat_one3: string;
            sync_crossed2: string;
            return: string;
            return2: string;
            refund: string;
            history: string;
            history2: string;
            self_timer: string;
            clock: string;
            clock2: string;
            clock3: string;
            watch: string;
            alarm2: string;
            alarm_add2: string;
            alarm_remove: string;
            alarm_check: string;
            alarm_error: string;
            timer: string;
            timer_crossed: string;
            timer2: string;
            timer_crossed2: string;
            download: string;
            upload: string;
            download2: string;
            upload2: string;
            enter_up: string;
            enter_down: string;
            enter_left: string;
            enter_right: string;
            exit_up: string;
            exit_down: string;
            exit_left: string;
            exit_right: string;
            enter_up2: string;
            enter_down2: string;
            enter_vertical: string;
            enter_left2: string;
            enter_right2: string;
            enter_horizontal: string;
            exit_up2: string;
            exit_down2: string;
            exit_left2: string;
            exit_right2: string;
            cli: string;
            bug: string;
            code: string;
            file_code: string;
            file_image: string;
            file_zip: string;
            file_audio: string;
            file_video: string;
            file_preview: string;
            file_charts: string;
            file_stats: string;
            file_spreadsheet: string;
            link: string;
            unlink: string;
            link2: string;
            unlink2: string;
            thumbs_up: string;
            thumbs_down: string;
            thumbs_up2: string;
            thumbs_down2: string;
            thumbs_up3: string;
            thumbs_down3: string;
            share: string;
            share2: string;
            share3: string;
            magnifier: string;
            file_search: string;
            find_replace: string;
            zoom_in: string;
            zoom_out: string;
            loupe: string;
            loupe_zoom_in: string;
            loupe_zoom_out: string;
            cross: string;
            menu: string;
            list: string;
            list2: string;
            list3: string;
            menu2: string;
            list4: string;
            menu3: string;
            exclamation: string;
            question: string;
            check: string;
            cross2: string;
            plus: string;
            minus: string;
            percent: string;
            chevron_up: string;
            chevron_down: string;
            chevron_left: string;
            chevron_right: string;
            chevrons_expand_vertical: string;
            chevrons_expand_horizontal: string;
            chevrons_contract_vertical: string;
            chevrons_contract_horizontal: string;
            arrow_up: string;
            arrow_down: string;
            arrow_left: string;
            arrow_right: string;
            arrow_up_right: string;
            arrows_merge: string;
            arrows_split: string;
            arrow_divert: string;
            arrow_return: string;
            expand: string;
            contract: string;
            expand2: string;
            contract2: string;
            move: string;
            tab: string;
            arrow_wave: string;
            expand3: string;
            expand4: string;
            contract3: string;
            notification: string;
            warning: string;
            notification_circle: string;
            question_circle: string;
            menu_circle: string;
            checkmark_circle: string;
            cross_circle: string;
            plus_circle: string;
            circle_minus: string;
            percent_circle: string;
            arrow_up_circle: string;
            arrow_down_circle: string;
            arrow_left_circle: string;
            arrow_right_circle: string;
            chevron_up_circle: string;
            chevron_down_circle: string;
            chevron_left_circle: string;
            chevron_right_circle: string;
            backward_circle: string;
            first_circle: string;
            previous_circle: string;
            stop_circle: string;
            play_circle: string;
            pause_circle: string;
            next_circle: string;
            last_circle: string;
            forward_circle: string;
            eject_circle: string;
            crop: string;
            frame_expand: string;
            frame_contract: string;
            focus: string;
            transform: string;
            grid: string;
            grid_crossed: string;
            layers: string;
            layers_crossed: string;
            toggle: string;
            rulers: string;
            ruler: string;
            funnel: string;
            flip_horizontal: string;
            flip_vertical: string;
            flip_horizontal2: string;
            flip_vertical2: string;
            angle: string;
            angle2: string;
            subtract: string;
            combine: string;
            intersect: string;
            exclude: string;
            align_center_vertical: string;
            align_right: string;
            align_bottom: string;
            align_left: string;
            align_center_horizontal: string;
            align_top: string;
            square: string;
            plus_square: string;
            minus_square: string;
            percent_square: string;
            arrow_up_square: string;
            arrow_down_square: string;
            arrow_left_square: string;
            arrow_right_square: string;
            chevron_up_square: string;
            chevron_down_square: string;
            chevron_left_square: string;
            chevron_right_square: string;
            check_square: string;
            cross_square: string;
            menu_square: string;
            prohibited: string;
            circle: string;
            radio_button: string;
            ligature: string;
            text_format: string;
            text_format_remove: string;
            text_size: string;
            bold: string;
            italic: string;
            underline: string;
            strikethrough: string;
            highlight: string;
            text_align_left: string;
            text_align_center: string;
            text_align_right: string;
            text_align_justify: string;
            line_spacing: string;
            indent_increase: string;
            indent_decrease: string;
            text_wrap: string;
            pilcrow: string;
            direction_ltr: string;
            direction_rtl: string;
            page_break: string;
            page_break2: string;
            sort_alpha_asc: string;
            sort_alpha_desc: string;
            sort_numeric_asc: string;
            sort_numeric_desc: string;
            sort_amount_asc: string;
            sort_amount_desc: string;
            sort_time_asc: string;
            sort_time_desc: string;
            sigma: string;
            pencil_line: string;
            hand: string;
            pointer_up: string;
            pointer_right: string;
            pointer_down: string;
            pointer_left: string;
            finger_tap: string;
            fingers_tap: string;
            reminder: string;
            fingers_crossed: string;
            fingers_victory: string;
            gesture_zoom: string;
            gesture_pinch: string;
            fingers_scroll_horizontal: string;
            fingers_scroll_vertical: string;
            fingers_scroll_left: string;
            fingers_scroll_right: string;
            hand2: string;
            pointer_up2: string;
            pointer_right2: string;
            pointer_down2: string;
            pointer_left2: string;
            finger_tap2: string;
            fingers_tap2: string;
            reminder2: string;
            gesture_zoom2: string;
            gesture_pinch2: string;
            fingers_scroll_horizontal2: string;
            fingers_scroll_vertical2: string;
            fingers_scroll_left2: string;
            fingers_scroll_right2: string;
            fingers_scroll_vertical3: string;
            border_style: string;
            border_all: string;
            border_outer: string;
            border_inner: string;
            border_top: string;
            border_horizontal: string;
            border_bottom: string;
            border_left: string;
            border_vertical: string;
            border_right: string;
            border_none: string;
            ellipsis: string;
        };
        static readonly home: LinearIcon;
        static readonly apartment: LinearIcon;
        static readonly pencil: LinearIcon;
        static readonly magic_wand: LinearIcon;
        static readonly drop: LinearIcon;
        static readonly lighter: LinearIcon;
        static readonly poop: LinearIcon;
        static readonly sun: LinearIcon;
        static readonly moon: LinearIcon;
        static readonly cloud: LinearIcon;
        static readonly cloud_upload: LinearIcon;
        static readonly cloud_download: LinearIcon;
        static readonly cloud_sync: LinearIcon;
        static readonly cloud_check: LinearIcon;
        static readonly database: LinearIcon;
        static readonly lock: LinearIcon;
        static readonly cog: LinearIcon;
        static readonly trash: LinearIcon;
        static readonly dice: LinearIcon;
        static readonly heart: LinearIcon;
        static readonly star: LinearIcon;
        static readonly star_half: LinearIcon;
        static readonly star_empty: LinearIcon;
        static readonly flag: LinearIcon;
        static readonly envelope: LinearIcon;
        static readonly paperclip: LinearIcon;
        static readonly inbox: LinearIcon;
        static readonly eye: LinearIcon;
        static readonly printer: LinearIcon;
        static readonly file_empty: LinearIcon;
        static readonly file_add: LinearIcon;
        static readonly enter: LinearIcon;
        static readonly exit: LinearIcon;
        static readonly graduation_hat: LinearIcon;
        static readonly license: LinearIcon;
        static readonly music_note: LinearIcon;
        static readonly film_play: LinearIcon;
        static readonly camera_video: LinearIcon;
        static readonly camera: LinearIcon;
        static readonly picture: LinearIcon;
        static readonly book: LinearIcon;
        static readonly bookmark: LinearIcon;
        static readonly user: LinearIcon;
        static readonly users: LinearIcon;
        static readonly shirt: LinearIcon;
        static readonly store: LinearIcon;
        static readonly cart: LinearIcon;
        static readonly tag: LinearIcon;
        static readonly phone_handset: LinearIcon;
        static readonly phone: LinearIcon;
        static readonly pushpin: LinearIcon;
        static readonly map_marker: LinearIcon;
        static readonly map: LinearIcon;
        static readonly location: LinearIcon;
        static readonly calendar_full: LinearIcon;
        static readonly keyboard: LinearIcon;
        static readonly spell_check: LinearIcon;
        static readonly screen: LinearIcon;
        static readonly smartphone: LinearIcon;
        static readonly tablet: LinearIcon;
        static readonly laptop: LinearIcon;
        static readonly laptop_phone: LinearIcon;
        static readonly power_switch: LinearIcon;
        static readonly bubble: LinearIcon;
        static readonly heart_pulse: LinearIcon;
        static readonly construction: LinearIcon;
        static readonly pie_chart: LinearIcon;
        static readonly chart_bars: LinearIcon;
        static readonly gift: LinearIcon;
        static readonly diamond: LinearIcon;
        static readonly linearicons: LinearIcon;
        static readonly dinner: LinearIcon;
        static readonly coffee_cup: LinearIcon;
        static readonly leaf: LinearIcon;
        static readonly paw: LinearIcon;
        static readonly rocket: LinearIcon;
        static readonly briefcase: LinearIcon;
        static readonly bus: LinearIcon;
        static readonly car: LinearIcon;
        static readonly train: LinearIcon;
        static readonly bicycle: LinearIcon;
        static readonly wheelchair: LinearIcon;
        static readonly select: LinearIcon;
        static readonly earth: LinearIcon;
        static readonly smile: LinearIcon;
        static readonly sad: LinearIcon;
        static readonly neutral: LinearIcon;
        static readonly mustache: LinearIcon;
        static readonly alarm: LinearIcon;
        static readonly bullhorn: LinearIcon;
        static readonly volume_high: LinearIcon;
        static readonly volume_medium: LinearIcon;
        static readonly volume_low: LinearIcon;
        static readonly volume: LinearIcon;
        static readonly mic: LinearIcon;
        static readonly hourglass: LinearIcon;
        static readonly undo: LinearIcon;
        static readonly redo: LinearIcon;
        static readonly sync: LinearIcon;
        static readonly history: LinearIcon;
        static readonly clock: LinearIcon;
        static readonly download: LinearIcon;
        static readonly upload: LinearIcon;
        static readonly enter_down: LinearIcon;
        static readonly exit_up: LinearIcon;
        static readonly bug: LinearIcon;
        static readonly code: LinearIcon;
        static readonly link: LinearIcon;
        static readonly unlink: LinearIcon;
        static readonly thumbs_up: LinearIcon;
        static readonly thumbs_down: LinearIcon;
        static readonly magnifier: LinearIcon;
        static readonly cross: LinearIcon;
        static readonly menu: LinearIcon;
        static readonly list: LinearIcon;
        static readonly chevron_up: LinearIcon;
        static readonly chevron_down: LinearIcon;
        static readonly chevron_left: LinearIcon;
        static readonly chevron_right: LinearIcon;
        static readonly arrow_up: LinearIcon;
        static readonly arrow_down: LinearIcon;
        static readonly arrow_left: LinearIcon;
        static readonly arrow_right: LinearIcon;
        static readonly move: LinearIcon;
        static readonly warning: LinearIcon;
        static readonly question_circle: LinearIcon;
        static readonly menu_circle: LinearIcon;
        static readonly checkmark_circle: LinearIcon;
        static readonly cross_circle: LinearIcon;
        static readonly plus_circle: LinearIcon;
        static readonly circle_minus: LinearIcon;
        static readonly arrow_up_circle: LinearIcon;
        static readonly arrow_down_circle: LinearIcon;
        static readonly arrow_left_circle: LinearIcon;
        static readonly arrow_right_circle: LinearIcon;
        static readonly chevron_up_circle: LinearIcon;
        static readonly chevron_down_circle: LinearIcon;
        static readonly chevron_left_circle: LinearIcon;
        static readonly chevron_right_circle: LinearIcon;
        static readonly crop: LinearIcon;
        static readonly frame_expand: LinearIcon;
        static readonly frame_contract: LinearIcon;
        static readonly layers: LinearIcon;
        static readonly funnel: LinearIcon;
        static readonly text_format: LinearIcon;
        static readonly text_format_remove: LinearIcon;
        static readonly text_size: LinearIcon;
        static readonly bold: LinearIcon;
        static readonly italic: LinearIcon;
        static readonly underline: LinearIcon;
        static readonly strikethrough: LinearIcon;
        static readonly highlight: LinearIcon;
        static readonly text_align_left: LinearIcon;
        static readonly text_align_center: LinearIcon;
        static readonly text_align_right: LinearIcon;
        static readonly text_align_justify: LinearIcon;
        static readonly line_spacing: LinearIcon;
        static readonly indent_increase: LinearIcon;
        static readonly indent_decrease: LinearIcon;
        static readonly pilcrow: LinearIcon;
        static readonly direction_ltr: LinearIcon;
        static readonly direction_rtl: LinearIcon;
        static readonly page_break: LinearIcon;
        static readonly sort_alpha_asc: LinearIcon;
        static readonly sort_amount_asc: LinearIcon;
        static readonly hand: LinearIcon;
        static readonly pointer_up: LinearIcon;
        static readonly pointer_right: LinearIcon;
        static readonly pointer_down: LinearIcon;
        static readonly pointer_left: LinearIcon;
        /**
         * Gets the icon by name
         * @param name
         * @returns {latte.LinearIcon}
         */
        static byCatalog_standby(name: string): LinearIcon;
        /**
         * Gets the icon by name
         * @param name
         * @returns {latte.LinearIcon}
         */
        static byCatalog(name: string): LinearIcon;
        /**
         * Gets the icon by name
         * @param name
         * @returns {latte.LinearIcon}
         */
        static byStyleName(name: string): LinearIcon;
        /**
         *
         */
        constructor();
        /**
         * Returns a clone of the icon
         **/
        clone(): IconItem;
        /**
         * Sets the color and returns the icon for chaining
         * @param color
         * @returns {latte.LinearIcon}
         */
        colorize(color: Color): LinearIcon;
        /**
         * Sets the size to 32 and returns the icon for chaining
         * @returns {latte.LinearIcon}
         */
        go32(): LinearIcon;
        /**
         *
         * @returns {latte.LinearIcon}
         */
        goSmall(): LinearIcon;
        /**
         * Property field
         */
        private _linearIconName;
        /**
         * Gets or sets the linear icon name
         *
         * @returns {string}
         */
        /**
        * Gets or sets the linear icon name
        *
        * @param {string} value
        */
        linearIconName: string;
    }
}
declare module latte {
    /**
     *
     */
    class Linear {
        static readonly home2: LinearIcon;
        static readonly home: LinearIcon;
        static readonly home3: LinearIcon;
        static readonly home5: LinearIcon;
        static readonly home4: LinearIcon;
        static readonly home6: LinearIcon;
        static readonly toothbrush: LinearIcon;
        static readonly bathtub: LinearIcon;
        static readonly bed: LinearIcon;
        static readonly chair: LinearIcon;
        static readonly couch: LinearIcon;
        static readonly city: LinearIcon;
        static readonly pencil: LinearIcon;
        static readonly apartment: LinearIcon;
        static readonly pencil2: LinearIcon;
        static readonly pencil3: LinearIcon;
        static readonly pen: LinearIcon;
        static readonly eraser: LinearIcon;
        static readonly pencil5: LinearIcon;
        static readonly pencil4: LinearIcon;
        static readonly feather: LinearIcon;
        static readonly feather3: LinearIcon;
        static readonly feather2: LinearIcon;
        static readonly pen2: LinearIcon;
        static readonly pen_remove: LinearIcon;
        static readonly pen_add: LinearIcon;
        static readonly vector: LinearIcon;
        static readonly blog: LinearIcon;
        static readonly pen3: LinearIcon;
        static readonly brush: LinearIcon;
        static readonly spray: LinearIcon;
        static readonly brush2: LinearIcon;
        static readonly paint_roller: LinearIcon;
        static readonly tape: LinearIcon;
        static readonly stamp: LinearIcon;
        static readonly desk_tape: LinearIcon;
        static readonly eye_dropper: LinearIcon;
        static readonly texture: LinearIcon;
        static readonly palette: LinearIcon;
        static readonly bucket: LinearIcon;
        static readonly color_sampler: LinearIcon;
        static readonly gradient: LinearIcon;
        static readonly magic_wand: LinearIcon;
        static readonly gradient2: LinearIcon;
        static readonly magnet: LinearIcon;
        static readonly pencil_ruler2: LinearIcon;
        static readonly pencil_ruler: LinearIcon;
        static readonly compass: LinearIcon;
        static readonly gun: LinearIcon;
        static readonly aim: LinearIcon;
        static readonly bottle: LinearIcon;
        static readonly drop_crossed: LinearIcon;
        static readonly drop: LinearIcon;
        static readonly drop2: LinearIcon;
        static readonly snow2: LinearIcon;
        static readonly snow: LinearIcon;
        static readonly fire: LinearIcon;
        static readonly knife: LinearIcon;
        static readonly lighter: LinearIcon;
        static readonly dagger: LinearIcon;
        static readonly toilet_paper: LinearIcon;
        static readonly tissue: LinearIcon;
        static readonly poop: LinearIcon;
        static readonly umbrella: LinearIcon;
        static readonly umbrella2: LinearIcon;
        static readonly rain: LinearIcon;
        static readonly tornado: LinearIcon;
        static readonly wind: LinearIcon;
        static readonly fan: LinearIcon;
        static readonly contrast: LinearIcon;
        static readonly sun_small: LinearIcon;
        static readonly sun: LinearIcon;
        static readonly sun2: LinearIcon;
        static readonly moon: LinearIcon;
        static readonly cloud: LinearIcon;
        static readonly cloud_upload: LinearIcon;
        static readonly cloud_download: LinearIcon;
        static readonly cloud_rain: LinearIcon;
        static readonly cloud_hailstones: LinearIcon;
        static readonly cloud_snow: LinearIcon;
        static readonly cloud_windy: LinearIcon;
        static readonly sun_wind: LinearIcon;
        static readonly cloud_fog: LinearIcon;
        static readonly cloud_sun: LinearIcon;
        static readonly cloud_lightning: LinearIcon;
        static readonly cloud_sync: LinearIcon;
        static readonly cloud_lock: LinearIcon;
        static readonly cloud_gear: LinearIcon;
        static readonly cloud_alert: LinearIcon;
        static readonly cloud_check: LinearIcon;
        static readonly cloud_cross: LinearIcon;
        static readonly cloud_crossed: LinearIcon;
        static readonly cloud_database: LinearIcon;
        static readonly database: LinearIcon;
        static readonly database_add: LinearIcon;
        static readonly database_remove: LinearIcon;
        static readonly database_lock: LinearIcon;
        static readonly database_refresh: LinearIcon;
        static readonly database_check: LinearIcon;
        static readonly database_history: LinearIcon;
        static readonly database_upload: LinearIcon;
        static readonly database_download: LinearIcon;
        static readonly server: LinearIcon;
        static readonly shield: LinearIcon;
        static readonly shield_check: LinearIcon;
        static readonly shield_alert: LinearIcon;
        static readonly shield_cross: LinearIcon;
        static readonly lock: LinearIcon;
        static readonly rotation_lock: LinearIcon;
        static readonly unlock: LinearIcon;
        static readonly key: LinearIcon;
        static readonly key_hole: LinearIcon;
        static readonly toggle_off: LinearIcon;
        static readonly toggle_on: LinearIcon;
        static readonly cog: LinearIcon;
        static readonly cog2: LinearIcon;
        static readonly wrench: LinearIcon;
        static readonly screwdriver: LinearIcon;
        static readonly hammer_wrench: LinearIcon;
        static readonly hammer: LinearIcon;
        static readonly saw: LinearIcon;
        static readonly axe: LinearIcon;
        static readonly axe2: LinearIcon;
        static readonly shovel: LinearIcon;
        static readonly pickaxe: LinearIcon;
        static readonly factory: LinearIcon;
        static readonly factory2: LinearIcon;
        static readonly recycle: LinearIcon;
        static readonly trash: LinearIcon;
        static readonly trash2: LinearIcon;
        static readonly trash3: LinearIcon;
        static readonly broom: LinearIcon;
        static readonly game: LinearIcon;
        static readonly gamepad: LinearIcon;
        static readonly joystick: LinearIcon;
        static readonly dice: LinearIcon;
        static readonly spades: LinearIcon;
        static readonly diamonds: LinearIcon;
        static readonly clubs: LinearIcon;
        static readonly hearts: LinearIcon;
        static readonly heart: LinearIcon;
        static readonly star: LinearIcon;
        static readonly star_half: LinearIcon;
        static readonly star_empty: LinearIcon;
        static readonly flag: LinearIcon;
        static readonly flag2: LinearIcon;
        static readonly flag3: LinearIcon;
        static readonly mailbox_full: LinearIcon;
        static readonly mailbox_empty: LinearIcon;
        static readonly at_sign: LinearIcon;
        static readonly envelope: LinearIcon;
        static readonly envelope_open: LinearIcon;
        static readonly paperclip: LinearIcon;
        static readonly paper_plane: LinearIcon;
        static readonly reply: LinearIcon;
        static readonly reply_all: LinearIcon;
        static readonly inbox: LinearIcon;
        static readonly inbox2: LinearIcon;
        static readonly outbox: LinearIcon;
        static readonly box: LinearIcon;
        static readonly archive: LinearIcon;
        static readonly archive2: LinearIcon;
        static readonly drawers: LinearIcon;
        static readonly drawers2: LinearIcon;
        static readonly drawers3: LinearIcon;
        static readonly eye: LinearIcon;
        static readonly eye_crossed: LinearIcon;
        static readonly eye_plus: LinearIcon;
        static readonly eye_minus: LinearIcon;
        static readonly binoculars: LinearIcon;
        static readonly binoculars2: LinearIcon;
        static readonly hdd: LinearIcon;
        static readonly hdd_down: LinearIcon;
        static readonly hdd_up: LinearIcon;
        static readonly floppy_disk: LinearIcon;
        static readonly disc: LinearIcon;
        static readonly tape2: LinearIcon;
        static readonly printer: LinearIcon;
        static readonly shredder: LinearIcon;
        static readonly file_empty: LinearIcon;
        static readonly file_add: LinearIcon;
        static readonly file_check: LinearIcon;
        static readonly file_lock: LinearIcon;
        static readonly files: LinearIcon;
        static readonly copy: LinearIcon;
        static readonly compare: LinearIcon;
        static readonly folder: LinearIcon;
        static readonly folder_search: LinearIcon;
        static readonly folder_plus: LinearIcon;
        static readonly folder_minus: LinearIcon;
        static readonly folder_download: LinearIcon;
        static readonly folder_upload: LinearIcon;
        static readonly folder_star: LinearIcon;
        static readonly folder_heart: LinearIcon;
        static readonly folder_user: LinearIcon;
        static readonly folder_shared: LinearIcon;
        static readonly folder_music: LinearIcon;
        static readonly folder_picture: LinearIcon;
        static readonly folder_film: LinearIcon;
        static readonly scissors: LinearIcon;
        static readonly paste: LinearIcon;
        static readonly clipboard_empty: LinearIcon;
        static readonly clipboard_pencil: LinearIcon;
        static readonly clipboard_text: LinearIcon;
        static readonly clipboard_check: LinearIcon;
        static readonly clipboard_down: LinearIcon;
        static readonly clipboard_left: LinearIcon;
        static readonly clipboard_alert: LinearIcon;
        static readonly clipboard_user: LinearIcon;
        static readonly register: LinearIcon;
        static readonly enter: LinearIcon;
        static readonly exit: LinearIcon;
        static readonly papers: LinearIcon;
        static readonly news: LinearIcon;
        static readonly reading: LinearIcon;
        static readonly typewriter: LinearIcon;
        static readonly document: LinearIcon;
        static readonly document2: LinearIcon;
        static readonly graduation_hat: LinearIcon;
        static readonly license: LinearIcon;
        static readonly license2: LinearIcon;
        static readonly medal_empty: LinearIcon;
        static readonly medal_first: LinearIcon;
        static readonly medal_second: LinearIcon;
        static readonly medal_third: LinearIcon;
        static readonly podium: LinearIcon;
        static readonly trophy: LinearIcon;
        static readonly trophy2: LinearIcon;
        static readonly music_note: LinearIcon;
        static readonly music_note2: LinearIcon;
        static readonly music_note3: LinearIcon;
        static readonly playlist: LinearIcon;
        static readonly playlist_add: LinearIcon;
        static readonly guitar: LinearIcon;
        static readonly trumpet: LinearIcon;
        static readonly album: LinearIcon;
        static readonly shuffle: LinearIcon;
        static readonly repeat_one: LinearIcon;
        static readonly repeat: LinearIcon;
        static readonly headphones: LinearIcon;
        static readonly headset: LinearIcon;
        static readonly loudspeaker: LinearIcon;
        static readonly equalizer: LinearIcon;
        static readonly theater: LinearIcon;
        static readonly _3d_glasses: LinearIcon;
        static readonly ticket: LinearIcon;
        static readonly presentation: LinearIcon;
        static readonly play: LinearIcon;
        static readonly film_play: LinearIcon;
        static readonly clapboard_play: LinearIcon;
        static readonly media: LinearIcon;
        static readonly film: LinearIcon;
        static readonly film2: LinearIcon;
        static readonly surveillance: LinearIcon;
        static readonly surveillance2: LinearIcon;
        static readonly camera: LinearIcon;
        static readonly camera_crossed: LinearIcon;
        static readonly camera_play: LinearIcon;
        static readonly time_lapse: LinearIcon;
        static readonly record: LinearIcon;
        static readonly camera2: LinearIcon;
        static readonly camera_flip: LinearIcon;
        static readonly panorama: LinearIcon;
        static readonly time_lapse2: LinearIcon;
        static readonly shutter: LinearIcon;
        static readonly shutter2: LinearIcon;
        static readonly face_detection: LinearIcon;
        static readonly flare: LinearIcon;
        static readonly convex: LinearIcon;
        static readonly concave: LinearIcon;
        static readonly picture: LinearIcon;
        static readonly picture2: LinearIcon;
        static readonly picture3: LinearIcon;
        static readonly pictures: LinearIcon;
        static readonly book: LinearIcon;
        static readonly audio_book: LinearIcon;
        static readonly book2: LinearIcon;
        static readonly bookmark: LinearIcon;
        static readonly bookmark2: LinearIcon;
        static readonly label: LinearIcon;
        static readonly library: LinearIcon;
        static readonly library2: LinearIcon;
        static readonly contacts: LinearIcon;
        static readonly profile: LinearIcon;
        static readonly portrait: LinearIcon;
        static readonly portrait2: LinearIcon;
        static readonly user: LinearIcon;
        static readonly user_plus: LinearIcon;
        static readonly user_minus: LinearIcon;
        static readonly user_lock: LinearIcon;
        static readonly users: LinearIcon;
        static readonly users2: LinearIcon;
        static readonly users_plus: LinearIcon;
        static readonly users_minus: LinearIcon;
        static readonly group_work: LinearIcon;
        static readonly woman: LinearIcon;
        static readonly man: LinearIcon;
        static readonly baby: LinearIcon;
        static readonly baby2: LinearIcon;
        static readonly baby3: LinearIcon;
        static readonly baby_bottle: LinearIcon;
        static readonly walk: LinearIcon;
        static readonly hand_waving: LinearIcon;
        static readonly jump: LinearIcon;
        static readonly run: LinearIcon;
        static readonly woman2: LinearIcon;
        static readonly man2: LinearIcon;
        static readonly man_woman: LinearIcon;
        static readonly height: LinearIcon;
        static readonly weight: LinearIcon;
        static readonly scale: LinearIcon;
        static readonly button: LinearIcon;
        static readonly bow_tie: LinearIcon;
        static readonly tie: LinearIcon;
        static readonly socks: LinearIcon;
        static readonly shoe: LinearIcon;
        static readonly shoes: LinearIcon;
        static readonly hat: LinearIcon;
        static readonly pants: LinearIcon;
        static readonly shorts: LinearIcon;
        static readonly flip_flops: LinearIcon;
        static readonly shirt: LinearIcon;
        static readonly hanger: LinearIcon;
        static readonly laundry: LinearIcon;
        static readonly store: LinearIcon;
        static readonly haircut: LinearIcon;
        static readonly store_24: LinearIcon;
        static readonly barcode: LinearIcon;
        static readonly barcode2: LinearIcon;
        static readonly barcode3: LinearIcon;
        static readonly cashier: LinearIcon;
        static readonly bag: LinearIcon;
        static readonly bag2: LinearIcon;
        static readonly cart: LinearIcon;
        static readonly cart_empty: LinearIcon;
        static readonly cart_full: LinearIcon;
        static readonly cart_plus: LinearIcon;
        static readonly cart_plus2: LinearIcon;
        static readonly cart_add: LinearIcon;
        static readonly cart_remove: LinearIcon;
        static readonly cart_exchange: LinearIcon;
        static readonly tag: LinearIcon;
        static readonly tags: LinearIcon;
        static readonly receipt: LinearIcon;
        static readonly wallet: LinearIcon;
        static readonly credit_card: LinearIcon;
        static readonly cash_dollar: LinearIcon;
        static readonly cash_euro: LinearIcon;
        static readonly cash_pound: LinearIcon;
        static readonly cash_yen: LinearIcon;
        static readonly bag_dollar: LinearIcon;
        static readonly bag_euro: LinearIcon;
        static readonly bag_pound: LinearIcon;
        static readonly bag_yen: LinearIcon;
        static readonly coin_dollar: LinearIcon;
        static readonly coin_euro: LinearIcon;
        static readonly coin_pound: LinearIcon;
        static readonly coin_yen: LinearIcon;
        static readonly calculator: LinearIcon;
        static readonly calculator2: LinearIcon;
        static readonly abacus: LinearIcon;
        static readonly vault: LinearIcon;
        static readonly telephone: LinearIcon;
        static readonly phone_lock: LinearIcon;
        static readonly phone_wave: LinearIcon;
        static readonly phone_pause: LinearIcon;
        static readonly phone_outgoing: LinearIcon;
        static readonly phone_incoming: LinearIcon;
        static readonly phone_in_out: LinearIcon;
        static readonly phone_error: LinearIcon;
        static readonly phone_sip: LinearIcon;
        static readonly phone_plus: LinearIcon;
        static readonly phone_minus: LinearIcon;
        static readonly voicemail: LinearIcon;
        static readonly dial: LinearIcon;
        static readonly telephone2: LinearIcon;
        static readonly pushpin: LinearIcon;
        static readonly pushpin2: LinearIcon;
        static readonly map_marker: LinearIcon;
        static readonly map_marker_user: LinearIcon;
        static readonly map_marker_down: LinearIcon;
        static readonly map_marker_check: LinearIcon;
        static readonly map_marker_crossed: LinearIcon;
        static readonly radar: LinearIcon;
        static readonly compass2: LinearIcon;
        static readonly map: LinearIcon;
        static readonly map2: LinearIcon;
        static readonly location: LinearIcon;
        static readonly road_sign: LinearIcon;
        static readonly calendar_empty: LinearIcon;
        static readonly calendar_check: LinearIcon;
        static readonly calendar_cross: LinearIcon;
        static readonly calendar_31: LinearIcon;
        static readonly calendar_full: LinearIcon;
        static readonly calendar_insert: LinearIcon;
        static readonly calendar_text: LinearIcon;
        static readonly calendar_user: LinearIcon;
        static readonly mouse: LinearIcon;
        static readonly mouse_left: LinearIcon;
        static readonly mouse_right: LinearIcon;
        static readonly mouse_both: LinearIcon;
        static readonly keyboard: LinearIcon;
        static readonly keyboard_up: LinearIcon;
        static readonly keyboard_down: LinearIcon;
        static readonly delete: LinearIcon;
        static readonly spell_check: LinearIcon;
        static readonly escape: LinearIcon;
        static readonly enter2: LinearIcon;
        static readonly screen: LinearIcon;
        static readonly aspect_ratio: LinearIcon;
        static readonly signal: LinearIcon;
        static readonly signal_lock: LinearIcon;
        static readonly signal_80: LinearIcon;
        static readonly signal_60: LinearIcon;
        static readonly signal_40: LinearIcon;
        static readonly signal_20: LinearIcon;
        static readonly signal_0: LinearIcon;
        static readonly signal_blocked: LinearIcon;
        static readonly sim: LinearIcon;
        static readonly flash_memory: LinearIcon;
        static readonly usb_drive: LinearIcon;
        static readonly phone: LinearIcon;
        static readonly smartphone: LinearIcon;
        static readonly smartphone_notification: LinearIcon;
        static readonly smartphone_vibration: LinearIcon;
        static readonly smartphone_embed: LinearIcon;
        static readonly smartphone_waves: LinearIcon;
        static readonly tablet: LinearIcon;
        static readonly tablet2: LinearIcon;
        static readonly laptop: LinearIcon;
        static readonly laptop_phone: LinearIcon;
        static readonly desktop: LinearIcon;
        static readonly launch: LinearIcon;
        static readonly new_tab: LinearIcon;
        static readonly window: LinearIcon;
        static readonly cable: LinearIcon;
        static readonly cable2: LinearIcon;
        static readonly tv: LinearIcon;
        static readonly radio: LinearIcon;
        static readonly remote_control: LinearIcon;
        static readonly power_switch: LinearIcon;
        static readonly power: LinearIcon;
        static readonly power_crossed: LinearIcon;
        static readonly flash_auto: LinearIcon;
        static readonly lamp: LinearIcon;
        static readonly flashlight: LinearIcon;
        static readonly lampshade: LinearIcon;
        static readonly cord: LinearIcon;
        static readonly outlet: LinearIcon;
        static readonly battery_power: LinearIcon;
        static readonly battery_empty: LinearIcon;
        static readonly battery_alert: LinearIcon;
        static readonly battery_error: LinearIcon;
        static readonly battery_low1: LinearIcon;
        static readonly battery_low2: LinearIcon;
        static readonly battery_low3: LinearIcon;
        static readonly battery_mid1: LinearIcon;
        static readonly battery_mid2: LinearIcon;
        static readonly battery_mid3: LinearIcon;
        static readonly battery_full: LinearIcon;
        static readonly battery_charging: LinearIcon;
        static readonly battery_charging2: LinearIcon;
        static readonly battery_charging3: LinearIcon;
        static readonly battery_charging4: LinearIcon;
        static readonly battery_charging5: LinearIcon;
        static readonly battery_charging6: LinearIcon;
        static readonly battery_charging7: LinearIcon;
        static readonly chip: LinearIcon;
        static readonly chip_x64: LinearIcon;
        static readonly chip_x86: LinearIcon;
        static readonly bubble: LinearIcon;
        static readonly bubbles: LinearIcon;
        static readonly bubble_dots: LinearIcon;
        static readonly bubble_alert: LinearIcon;
        static readonly bubble_question: LinearIcon;
        static readonly bubble_text: LinearIcon;
        static readonly bubble_pencil: LinearIcon;
        static readonly bubble_picture: LinearIcon;
        static readonly bubble_video: LinearIcon;
        static readonly bubble_user: LinearIcon;
        static readonly bubble_quote: LinearIcon;
        static readonly bubble_heart: LinearIcon;
        static readonly bubble_emoticon: LinearIcon;
        static readonly bubble_attachment: LinearIcon;
        static readonly phone_bubble: LinearIcon;
        static readonly quote_open: LinearIcon;
        static readonly quote_close: LinearIcon;
        static readonly dna: LinearIcon;
        static readonly heart_pulse: LinearIcon;
        static readonly pulse: LinearIcon;
        static readonly syringe: LinearIcon;
        static readonly pills: LinearIcon;
        static readonly first_aid: LinearIcon;
        static readonly lifebuoy: LinearIcon;
        static readonly bandage: LinearIcon;
        static readonly bandages: LinearIcon;
        static readonly thermometer: LinearIcon;
        static readonly microscope: LinearIcon;
        static readonly brain: LinearIcon;
        static readonly beaker: LinearIcon;
        static readonly skull: LinearIcon;
        static readonly bone: LinearIcon;
        static readonly construction: LinearIcon;
        static readonly construction_cone: LinearIcon;
        static readonly pie_chart: LinearIcon;
        static readonly pie_chart2: LinearIcon;
        static readonly graph: LinearIcon;
        static readonly chart_growth: LinearIcon;
        static readonly chart_bars: LinearIcon;
        static readonly chart_settings: LinearIcon;
        static readonly cake: LinearIcon;
        static readonly gift: LinearIcon;
        static readonly balloon: LinearIcon;
        static readonly rank: LinearIcon;
        static readonly rank2: LinearIcon;
        static readonly rank3: LinearIcon;
        static readonly crown: LinearIcon;
        static readonly lotus: LinearIcon;
        static readonly diamond: LinearIcon;
        static readonly diamond2: LinearIcon;
        static readonly diamond3: LinearIcon;
        static readonly diamond4: LinearIcon;
        static readonly linearicons: LinearIcon;
        static readonly teacup: LinearIcon;
        static readonly teapot: LinearIcon;
        static readonly glass: LinearIcon;
        static readonly bottle2: LinearIcon;
        static readonly glass_cocktail: LinearIcon;
        static readonly glass2: LinearIcon;
        static readonly dinner: LinearIcon;
        static readonly dinner2: LinearIcon;
        static readonly chef: LinearIcon;
        static readonly scale2: LinearIcon;
        static readonly egg: LinearIcon;
        static readonly egg2: LinearIcon;
        static readonly eggs: LinearIcon;
        static readonly platter: LinearIcon;
        static readonly steak: LinearIcon;
        static readonly hamburger: LinearIcon;
        static readonly hotdog: LinearIcon;
        static readonly pizza: LinearIcon;
        static readonly sausage: LinearIcon;
        static readonly chicken: LinearIcon;
        static readonly fish: LinearIcon;
        static readonly carrot: LinearIcon;
        static readonly cheese: LinearIcon;
        static readonly bread: LinearIcon;
        static readonly ice_cream: LinearIcon;
        static readonly ice_cream2: LinearIcon;
        static readonly candy: LinearIcon;
        static readonly lollipop: LinearIcon;
        static readonly coffee_bean: LinearIcon;
        static readonly coffee_cup: LinearIcon;
        static readonly cherry: LinearIcon;
        static readonly grapes: LinearIcon;
        static readonly citrus: LinearIcon;
        static readonly apple: LinearIcon;
        static readonly leaf: LinearIcon;
        static readonly landscape: LinearIcon;
        static readonly pine_tree: LinearIcon;
        static readonly tree: LinearIcon;
        static readonly cactus: LinearIcon;
        static readonly paw: LinearIcon;
        static readonly footprint: LinearIcon;
        static readonly speed_slow: LinearIcon;
        static readonly speed_medium: LinearIcon;
        static readonly speed_fast: LinearIcon;
        static readonly rocket: LinearIcon;
        static readonly hammer2: LinearIcon;
        static readonly balance: LinearIcon;
        static readonly briefcase: LinearIcon;
        static readonly luggage_weight: LinearIcon;
        static readonly dolly: LinearIcon;
        static readonly plane: LinearIcon;
        static readonly plane_crossed: LinearIcon;
        static readonly helicopter: LinearIcon;
        static readonly traffic_lights: LinearIcon;
        static readonly siren: LinearIcon;
        static readonly road: LinearIcon;
        static readonly engine: LinearIcon;
        static readonly oil_pressure: LinearIcon;
        static readonly coolant_temperature: LinearIcon;
        static readonly car_battery: LinearIcon;
        static readonly gas: LinearIcon;
        static readonly gallon: LinearIcon;
        static readonly transmission: LinearIcon;
        static readonly car: LinearIcon;
        static readonly car_wash: LinearIcon;
        static readonly car_wash2: LinearIcon;
        static readonly bus: LinearIcon;
        static readonly bus2: LinearIcon;
        static readonly car2: LinearIcon;
        static readonly parking: LinearIcon;
        static readonly car_lock: LinearIcon;
        static readonly taxi: LinearIcon;
        static readonly car_siren: LinearIcon;
        static readonly car_wash3: LinearIcon;
        static readonly car_wash4: LinearIcon;
        static readonly ambulance: LinearIcon;
        static readonly truck: LinearIcon;
        static readonly trailer: LinearIcon;
        static readonly scale_truck: LinearIcon;
        static readonly train: LinearIcon;
        static readonly ship: LinearIcon;
        static readonly ship2: LinearIcon;
        static readonly anchor: LinearIcon;
        static readonly boat: LinearIcon;
        static readonly bicycle: LinearIcon;
        static readonly bicycle2: LinearIcon;
        static readonly dumbbell: LinearIcon;
        static readonly bench_press: LinearIcon;
        static readonly swim: LinearIcon;
        static readonly football: LinearIcon;
        static readonly baseball_bat: LinearIcon;
        static readonly baseball: LinearIcon;
        static readonly tennis: LinearIcon;
        static readonly tennis2: LinearIcon;
        static readonly ping_pong: LinearIcon;
        static readonly hockey: LinearIcon;
        static readonly _8ball: LinearIcon;
        static readonly bowling: LinearIcon;
        static readonly bowling_pins: LinearIcon;
        static readonly golf: LinearIcon;
        static readonly golf2: LinearIcon;
        static readonly archery: LinearIcon;
        static readonly slingshot: LinearIcon;
        static readonly soccer: LinearIcon;
        static readonly basketball: LinearIcon;
        static readonly cube: LinearIcon;
        static readonly _3d_rotate: LinearIcon;
        static readonly puzzle: LinearIcon;
        static readonly glasses: LinearIcon;
        static readonly glasses2: LinearIcon;
        static readonly accessibility: LinearIcon;
        static readonly wheelchair: LinearIcon;
        static readonly wall: LinearIcon;
        static readonly fence: LinearIcon;
        static readonly wall2: LinearIcon;
        static readonly icons: LinearIcon;
        static readonly resize_handle: LinearIcon;
        static readonly icons2: LinearIcon;
        static readonly select: LinearIcon;
        static readonly select2: LinearIcon;
        static readonly site_map: LinearIcon;
        static readonly earth: LinearIcon;
        static readonly earth_lock: LinearIcon;
        static readonly network: LinearIcon;
        static readonly network_lock: LinearIcon;
        static readonly planet: LinearIcon;
        static readonly happy: LinearIcon;
        static readonly smile: LinearIcon;
        static readonly grin: LinearIcon;
        static readonly tongue: LinearIcon;
        static readonly sad: LinearIcon;
        static readonly wink: LinearIcon;
        static readonly dream: LinearIcon;
        static readonly shocked: LinearIcon;
        static readonly shocked2: LinearIcon;
        static readonly tongue2: LinearIcon;
        static readonly neutral: LinearIcon;
        static readonly happy_grin: LinearIcon;
        static readonly cool: LinearIcon;
        static readonly mad: LinearIcon;
        static readonly grin_evil: LinearIcon;
        static readonly evil: LinearIcon;
        static readonly wow: LinearIcon;
        static readonly annoyed: LinearIcon;
        static readonly wondering: LinearIcon;
        static readonly confused: LinearIcon;
        static readonly zipped: LinearIcon;
        static readonly grumpy: LinearIcon;
        static readonly mustache: LinearIcon;
        static readonly tombstone_hipster: LinearIcon;
        static readonly tombstone: LinearIcon;
        static readonly ghost: LinearIcon;
        static readonly ghost_hipster: LinearIcon;
        static readonly halloween: LinearIcon;
        static readonly christmas: LinearIcon;
        static readonly easter_egg: LinearIcon;
        static readonly mustache2: LinearIcon;
        static readonly mustache_glasses: LinearIcon;
        static readonly pipe: LinearIcon;
        static readonly alarm: LinearIcon;
        static readonly alarm_add: LinearIcon;
        static readonly alarm_snooze: LinearIcon;
        static readonly alarm_ringing: LinearIcon;
        static readonly bullhorn: LinearIcon;
        static readonly hearing: LinearIcon;
        static readonly volume_high: LinearIcon;
        static readonly volume_medium: LinearIcon;
        static readonly volume_low: LinearIcon;
        static readonly volume: LinearIcon;
        static readonly mute: LinearIcon;
        static readonly lan: LinearIcon;
        static readonly lan2: LinearIcon;
        static readonly wifi: LinearIcon;
        static readonly wifi_lock: LinearIcon;
        static readonly wifi_blocked: LinearIcon;
        static readonly wifi_mid: LinearIcon;
        static readonly wifi_low: LinearIcon;
        static readonly wifi_low2: LinearIcon;
        static readonly wifi_alert: LinearIcon;
        static readonly wifi_alert_mid: LinearIcon;
        static readonly wifi_alert_low: LinearIcon;
        static readonly wifi_alert_low2: LinearIcon;
        static readonly stream: LinearIcon;
        static readonly stream_check: LinearIcon;
        static readonly stream_error: LinearIcon;
        static readonly stream_alert: LinearIcon;
        static readonly communication: LinearIcon;
        static readonly communication_crossed: LinearIcon;
        static readonly broadcast: LinearIcon;
        static readonly antenna: LinearIcon;
        static readonly satellite: LinearIcon;
        static readonly satellite2: LinearIcon;
        static readonly mic: LinearIcon;
        static readonly mic_mute: LinearIcon;
        static readonly mic2: LinearIcon;
        static readonly spotlights: LinearIcon;
        static readonly hourglass: LinearIcon;
        static readonly loading: LinearIcon;
        static readonly loading2: LinearIcon;
        static readonly loading3: LinearIcon;
        static readonly refresh: LinearIcon;
        static readonly refresh2: LinearIcon;
        static readonly undo: LinearIcon;
        static readonly redo: LinearIcon;
        static readonly jump2: LinearIcon;
        static readonly undo2: LinearIcon;
        static readonly redo2: LinearIcon;
        static readonly sync: LinearIcon;
        static readonly repeat_one2: LinearIcon;
        static readonly sync_crossed: LinearIcon;
        static readonly sync2: LinearIcon;
        static readonly repeat_one3: LinearIcon;
        static readonly sync_crossed2: LinearIcon;
        static readonly return: LinearIcon;
        static readonly return2: LinearIcon;
        static readonly refund: LinearIcon;
        static readonly history: LinearIcon;
        static readonly history2: LinearIcon;
        static readonly self_timer: LinearIcon;
        static readonly clock: LinearIcon;
        static readonly clock2: LinearIcon;
        static readonly clock3: LinearIcon;
        static readonly watch: LinearIcon;
        static readonly alarm2: LinearIcon;
        static readonly alarm_add2: LinearIcon;
        static readonly alarm_remove: LinearIcon;
        static readonly alarm_check: LinearIcon;
        static readonly alarm_error: LinearIcon;
        static readonly timer: LinearIcon;
        static readonly timer_crossed: LinearIcon;
        static readonly timer2: LinearIcon;
        static readonly timer_crossed2: LinearIcon;
        static readonly download: LinearIcon;
        static readonly upload: LinearIcon;
        static readonly download2: LinearIcon;
        static readonly upload2: LinearIcon;
        static readonly enter_up: LinearIcon;
        static readonly enter_down: LinearIcon;
        static readonly enter_left: LinearIcon;
        static readonly enter_right: LinearIcon;
        static readonly exit_up: LinearIcon;
        static readonly exit_down: LinearIcon;
        static readonly exit_left: LinearIcon;
        static readonly exit_right: LinearIcon;
        static readonly enter_up2: LinearIcon;
        static readonly enter_down2: LinearIcon;
        static readonly enter_vertical: LinearIcon;
        static readonly enter_left2: LinearIcon;
        static readonly enter_right2: LinearIcon;
        static readonly enter_horizontal: LinearIcon;
        static readonly exit_up2: LinearIcon;
        static readonly exit_down2: LinearIcon;
        static readonly exit_left2: LinearIcon;
        static readonly exit_right2: LinearIcon;
        static readonly cli: LinearIcon;
        static readonly bug: LinearIcon;
        static readonly code: LinearIcon;
        static readonly file_code: LinearIcon;
        static readonly file_image: LinearIcon;
        static readonly file_zip: LinearIcon;
        static readonly file_audio: LinearIcon;
        static readonly file_video: LinearIcon;
        static readonly file_preview: LinearIcon;
        static readonly file_charts: LinearIcon;
        static readonly file_stats: LinearIcon;
        static readonly file_spreadsheet: LinearIcon;
        static readonly link: LinearIcon;
        static readonly unlink: LinearIcon;
        static readonly link2: LinearIcon;
        static readonly unlink2: LinearIcon;
        static readonly thumbs_up: LinearIcon;
        static readonly thumbs_down: LinearIcon;
        static readonly thumbs_up2: LinearIcon;
        static readonly thumbs_down2: LinearIcon;
        static readonly thumbs_up3: LinearIcon;
        static readonly thumbs_down3: LinearIcon;
        static readonly share: LinearIcon;
        static readonly share2: LinearIcon;
        static readonly share3: LinearIcon;
        static readonly magnifier: LinearIcon;
        static readonly file_search: LinearIcon;
        static readonly find_replace: LinearIcon;
        static readonly zoom_in: LinearIcon;
        static readonly zoom_out: LinearIcon;
        static readonly loupe: LinearIcon;
        static readonly loupe_zoom_in: LinearIcon;
        static readonly loupe_zoom_out: LinearIcon;
        static readonly cross: LinearIcon;
        static readonly menu: LinearIcon;
        static readonly list: LinearIcon;
        static readonly list2: LinearIcon;
        static readonly list3: LinearIcon;
        static readonly menu2: LinearIcon;
        static readonly list4: LinearIcon;
        static readonly menu3: LinearIcon;
        static readonly exclamation: LinearIcon;
        static readonly question: LinearIcon;
        static readonly check: LinearIcon;
        static readonly cross2: LinearIcon;
        static readonly plus: LinearIcon;
        static readonly minus: LinearIcon;
        static readonly percent: LinearIcon;
        static readonly chevron_up: LinearIcon;
        static readonly chevron_down: LinearIcon;
        static readonly chevron_left: LinearIcon;
        static readonly chevron_right: LinearIcon;
        static readonly chevrons_expand_vertical: LinearIcon;
        static readonly chevrons_expand_horizontal: LinearIcon;
        static readonly chevrons_contract_vertical: LinearIcon;
        static readonly chevrons_contract_horizontal: LinearIcon;
        static readonly arrow_up: LinearIcon;
        static readonly arrow_down: LinearIcon;
        static readonly arrow_left: LinearIcon;
        static readonly arrow_right: LinearIcon;
        static readonly arrow_up_right: LinearIcon;
        static readonly arrows_merge: LinearIcon;
        static readonly arrows_split: LinearIcon;
        static readonly arrow_divert: LinearIcon;
        static readonly arrow_return: LinearIcon;
        static readonly expand: LinearIcon;
        static readonly contract: LinearIcon;
        static readonly expand2: LinearIcon;
        static readonly contract2: LinearIcon;
        static readonly move: LinearIcon;
        static readonly tab: LinearIcon;
        static readonly arrow_wave: LinearIcon;
        static readonly expand3: LinearIcon;
        static readonly expand4: LinearIcon;
        static readonly contract3: LinearIcon;
        static readonly notification: LinearIcon;
        static readonly warning: LinearIcon;
        static readonly notification_circle: LinearIcon;
        static readonly question_circle: LinearIcon;
        static readonly menu_circle: LinearIcon;
        static readonly checkmark_circle: LinearIcon;
        static readonly cross_circle: LinearIcon;
        static readonly plus_circle: LinearIcon;
        static readonly circle_minus: LinearIcon;
        static readonly percent_circle: LinearIcon;
        static readonly arrow_up_circle: LinearIcon;
        static readonly arrow_down_circle: LinearIcon;
        static readonly arrow_left_circle: LinearIcon;
        static readonly arrow_right_circle: LinearIcon;
        static readonly chevron_up_circle: LinearIcon;
        static readonly chevron_down_circle: LinearIcon;
        static readonly chevron_left_circle: LinearIcon;
        static readonly chevron_right_circle: LinearIcon;
        static readonly backward_circle: LinearIcon;
        static readonly first_circle: LinearIcon;
        static readonly previous_circle: LinearIcon;
        static readonly stop_circle: LinearIcon;
        static readonly play_circle: LinearIcon;
        static readonly pause_circle: LinearIcon;
        static readonly next_circle: LinearIcon;
        static readonly last_circle: LinearIcon;
        static readonly forward_circle: LinearIcon;
        static readonly eject_circle: LinearIcon;
        static readonly crop: LinearIcon;
        static readonly frame_expand: LinearIcon;
        static readonly frame_contract: LinearIcon;
        static readonly focus: LinearIcon;
        static readonly transform: LinearIcon;
        static readonly grid: LinearIcon;
        static readonly grid_crossed: LinearIcon;
        static readonly layers: LinearIcon;
        static readonly layers_crossed: LinearIcon;
        static readonly toggle: LinearIcon;
        static readonly rulers: LinearIcon;
        static readonly ruler: LinearIcon;
        static readonly funnel: LinearIcon;
        static readonly flip_horizontal: LinearIcon;
        static readonly flip_vertical: LinearIcon;
        static readonly flip_horizontal2: LinearIcon;
        static readonly flip_vertical2: LinearIcon;
        static readonly angle: LinearIcon;
        static readonly angle2: LinearIcon;
        static readonly subtract: LinearIcon;
        static readonly combine: LinearIcon;
        static readonly intersect: LinearIcon;
        static readonly exclude: LinearIcon;
        static readonly align_center_vertical: LinearIcon;
        static readonly align_right: LinearIcon;
        static readonly align_bottom: LinearIcon;
        static readonly align_left: LinearIcon;
        static readonly align_center_horizontal: LinearIcon;
        static readonly align_top: LinearIcon;
        static readonly square: LinearIcon;
        static readonly plus_square: LinearIcon;
        static readonly minus_square: LinearIcon;
        static readonly percent_square: LinearIcon;
        static readonly arrow_up_square: LinearIcon;
        static readonly arrow_down_square: LinearIcon;
        static readonly arrow_left_square: LinearIcon;
        static readonly arrow_right_square: LinearIcon;
        static readonly chevron_up_square: LinearIcon;
        static readonly chevron_down_square: LinearIcon;
        static readonly chevron_left_square: LinearIcon;
        static readonly chevron_right_square: LinearIcon;
        static readonly check_square: LinearIcon;
        static readonly cross_square: LinearIcon;
        static readonly menu_square: LinearIcon;
        static readonly prohibited: LinearIcon;
        static readonly circle: LinearIcon;
        static readonly radio_button: LinearIcon;
        static readonly ligature: LinearIcon;
        static readonly text_format: LinearIcon;
        static readonly text_format_remove: LinearIcon;
        static readonly text_size: LinearIcon;
        static readonly bold: LinearIcon;
        static readonly italic: LinearIcon;
        static readonly underline: LinearIcon;
        static readonly strikethrough: LinearIcon;
        static readonly highlight: LinearIcon;
        static readonly text_align_left: LinearIcon;
        static readonly text_align_center: LinearIcon;
        static readonly text_align_right: LinearIcon;
        static readonly text_align_justify: LinearIcon;
        static readonly line_spacing: LinearIcon;
        static readonly indent_increase: LinearIcon;
        static readonly indent_decrease: LinearIcon;
        static readonly text_wrap: LinearIcon;
        static readonly pilcrow: LinearIcon;
        static readonly direction_ltr: LinearIcon;
        static readonly direction_rtl: LinearIcon;
        static readonly page_break: LinearIcon;
        static readonly page_break2: LinearIcon;
        static readonly sort_alpha_asc: LinearIcon;
        static readonly sort_alpha_desc: LinearIcon;
        static readonly sort_numeric_asc: LinearIcon;
        static readonly sort_numeric_desc: LinearIcon;
        static readonly sort_amount_asc: LinearIcon;
        static readonly sort_amount_desc: LinearIcon;
        static readonly sort_time_asc: LinearIcon;
        static readonly sort_time_desc: LinearIcon;
        static readonly sigma: LinearIcon;
        static readonly pencil_line: LinearIcon;
        static readonly hand: LinearIcon;
        static readonly pointer_up: LinearIcon;
        static readonly pointer_right: LinearIcon;
        static readonly pointer_down: LinearIcon;
        static readonly pointer_left: LinearIcon;
        static readonly finger_tap: LinearIcon;
        static readonly fingers_tap: LinearIcon;
        static readonly reminder: LinearIcon;
        static readonly fingers_crossed: LinearIcon;
        static readonly fingers_victory: LinearIcon;
        static readonly gesture_zoom: LinearIcon;
        static readonly gesture_pinch: LinearIcon;
        static readonly fingers_scroll_horizontal: LinearIcon;
        static readonly fingers_scroll_vertical: LinearIcon;
        static readonly fingers_scroll_left: LinearIcon;
        static readonly fingers_scroll_right: LinearIcon;
        static readonly hand2: LinearIcon;
        static readonly pointer_up2: LinearIcon;
        static readonly pointer_right2: LinearIcon;
        static readonly pointer_down2: LinearIcon;
        static readonly pointer_left2: LinearIcon;
        static readonly finger_tap2: LinearIcon;
        static readonly fingers_tap2: LinearIcon;
        static readonly reminder2: LinearIcon;
        static readonly gesture_zoom2: LinearIcon;
        static readonly gesture_pinch2: LinearIcon;
        static readonly fingers_scroll_horizontal2: LinearIcon;
        static readonly fingers_scroll_vertical2: LinearIcon;
        static readonly fingers_scroll_left2: LinearIcon;
        static readonly fingers_scroll_right2: LinearIcon;
        static readonly fingers_scroll_vertical3: LinearIcon;
        static readonly border_style: LinearIcon;
        static readonly border_all: LinearIcon;
        static readonly border_outer: LinearIcon;
        static readonly border_inner: LinearIcon;
        static readonly border_top: LinearIcon;
        static readonly border_horizontal: LinearIcon;
        static readonly border_bottom: LinearIcon;
        static readonly border_left: LinearIcon;
        static readonly border_vertical: LinearIcon;
        static readonly border_right: LinearIcon;
        static readonly border_none: LinearIcon;
        static readonly ellipsis: LinearIcon;
        static readonly uni21: LinearIcon;
        static readonly uni22: LinearIcon;
        static readonly uni23: LinearIcon;
        static readonly uni24: LinearIcon;
        static readonly uni25: LinearIcon;
        static readonly uni26: LinearIcon;
        static readonly uni27: LinearIcon;
        static readonly uni28: LinearIcon;
        static readonly uni29: LinearIcon;
        static readonly uni2a: LinearIcon;
        static readonly uni2b: LinearIcon;
        static readonly uni2c: LinearIcon;
        static readonly uni2d: LinearIcon;
        static readonly uni2e: LinearIcon;
        static readonly uni2f: LinearIcon;
        static readonly uni30: LinearIcon;
        static readonly uni31: LinearIcon;
        static readonly uni32: LinearIcon;
        static readonly uni33: LinearIcon;
        static readonly uni34: LinearIcon;
        static readonly uni35: LinearIcon;
        static readonly uni37: LinearIcon;
        static readonly uni38: LinearIcon;
        static readonly uni39: LinearIcon;
        static readonly uni3a: LinearIcon;
        static readonly uni3b: LinearIcon;
        static readonly uni3c: LinearIcon;
        static readonly uni3d: LinearIcon;
        static readonly uni3e: LinearIcon;
        static readonly uni3f: LinearIcon;
        static readonly uni40: LinearIcon;
        static readonly uni41: LinearIcon;
        static readonly uni42: LinearIcon;
        static readonly uni43: LinearIcon;
        static readonly uni44: LinearIcon;
        static readonly uni45: LinearIcon;
        static readonly uni46: LinearIcon;
        static readonly uni47: LinearIcon;
        static readonly uni48: LinearIcon;
        static readonly uni49: LinearIcon;
        static readonly uni4a: LinearIcon;
        static readonly uni4b: LinearIcon;
        static readonly uni4c: LinearIcon;
        static readonly uni4d: LinearIcon;
        static readonly uni4e: LinearIcon;
        static readonly uni4f: LinearIcon;
        static readonly uni50: LinearIcon;
        static readonly uni51: LinearIcon;
        static readonly uni52: LinearIcon;
        static readonly uni53: LinearIcon;
        static readonly uni54: LinearIcon;
        static readonly uni55: LinearIcon;
        static readonly uni56: LinearIcon;
        static readonly uni57: LinearIcon;
        static readonly uni58: LinearIcon;
        static readonly uni59: LinearIcon;
        static readonly uni5a: LinearIcon;
        static readonly uni5b: LinearIcon;
        static readonly uni5c: LinearIcon;
        static readonly uni5d: LinearIcon;
        static readonly uni5e: LinearIcon;
        static readonly uni5f: LinearIcon;
        static readonly uni60: LinearIcon;
        static readonly uni61: LinearIcon;
        static readonly uni62: LinearIcon;
        static readonly uni63: LinearIcon;
        static readonly uni64: LinearIcon;
        static readonly uni65: LinearIcon;
        static readonly uni66: LinearIcon;
        static readonly uni67: LinearIcon;
        static readonly uni68: LinearIcon;
        static readonly uni69: LinearIcon;
        static readonly uni6a: LinearIcon;
        static readonly uni6b: LinearIcon;
        static readonly uni6c: LinearIcon;
        static readonly uni6d: LinearIcon;
        static readonly uni6e: LinearIcon;
        static readonly uni6f: LinearIcon;
        static readonly uni70: LinearIcon;
        static readonly uni71: LinearIcon;
        static readonly uni72: LinearIcon;
        static readonly uni73: LinearIcon;
        static readonly uni74: LinearIcon;
        static readonly uni75: LinearIcon;
        static readonly uni76: LinearIcon;
        static readonly uni77: LinearIcon;
        static readonly uni78: LinearIcon;
        static readonly uni79: LinearIcon;
        static readonly uni7a: LinearIcon;
        static readonly uni7b: LinearIcon;
        static readonly uni7c: LinearIcon;
        static readonly uni7d: LinearIcon;
        static readonly uni7e: LinearIcon;
        static readonly copyright: LinearIcon;
    }
}
