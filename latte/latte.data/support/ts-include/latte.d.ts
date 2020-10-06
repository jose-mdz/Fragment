/// <reference path="datalatte.d.ts" />
/// <reference path="latte.strings.d.ts" />
declare module latte {
    /**
     *
     */
    enum BindValueType {
        ANY = 0,
        NUMBER = 1,
        BOOLEAN = 2,
        STRING = 3,
        DATETIME = 4,
        TIMESPAN = 5
    }
}
declare module latte {
    /**
     * Object who contains marshalled call data
     */
    interface IDataRemoteCall {
        moduleName: string;
        className: string;
        method: string;
        id: number;
        params: any;
    }
}
declare module latte {
    /**
     *
     */
    interface ICall {
        marshall(): IDataRemoteCall;
        respond(responseData: IRemoteResponse): any;
        send(success?: (data: any) => void, failure?: (errorDescription: string) => void): IMessage;
        withHandlers(success?: (data: any) => void, failure?: (errorDescription: string) => void): ICall;
        success: LatteEvent;
        failure: LatteEvent;
    }
}
/**
 * Created by josemanuel on 8/9/16.
 */
declare module latte {
    interface IInputOptions {
        [index: string]: string;
    }
    interface IInputFlagOptions {
        [index: number]: string;
    }
    interface IInputList {
        [field: string]: IInput;
    }
    /**
     * Boolean that resolves based on criteria
     */
    type InputResolvedBoolean = boolean | 'if-inserted' | 'if-not-inserted' | 'if-value' | 'if-readonly-and-value';
    /**
     * Types of input
     */
    type InputType = 'auto' | 'label' | 'md5-password' | 'string' | 'text' | 'html' | 'number' | 'integer' | 'float' | 'boolean' | 'switch' | 'password' | 'date' | 'time' | 'datetime' | 'enumeration' | 'combo' | 'radio' | 'flags' | 'file' | 'image' | 'record' | 'record-combo' | 'color' | 'custom';
    /**
     * Specifies an input description
     */
    interface IInput {
        type?: InputType;
        options?: IInputOptions | IInputFlagOptions | String[];
        visible?: InputResolvedBoolean;
        loaderFunction?: (...any: any[]) => any;
        readOnly?: InputResolvedBoolean;
        recordType?: string;
        text?: string;
        defaultValue?: any;
        category?: string;
        hint?: string;
        separator?: InputResolvedBoolean;
        nullable?: InputResolvedBoolean;
        updatesForm?: InputResolvedBoolean;
        customFunction?: () => any;
    }
}
declare module latte {
    /**
     *
     */
    interface ICountry {
        name: string;
        phone: string;
        code: string;
        shortCode: string;
    }
}
/**
 * Created by josemanuel on 8/9/16.
 */
declare module latte {
    interface IEntityMeta {
        /**
         * Should give information about the fields of the entity
         */
        fields?: IInputList;
        /**
         * It's called when the form about the entity is created and fully loaded
         * @param form
         */
        onFormCreated?(form: any): any;
        /**
         * It's called when the form about the entity is created
         * @param form
         */
        onFormCreating?(form: any): any;
    }
}
declare module latte {
    interface IRemoteResponse {
        success: boolean;
        data: any;
        errorCode: number;
        errorDescription: string;
    }
}
/**
 * Created by josemanuel on 7/18/16.
 */
declare module latte {
    /**
     * Interface for describing objects that may acquire
     * an unsaved state.
     *
     * The object provide mechanisms to indicate:
     *  - An event to indicate when unsaved state has been acquired
     *  - A flag to query if the object has unsaved changes
     *  - A method to retrieve calls to save the changes
     */
    interface ISave {
        /**
         * Gets or sets a value indicating if changes were reported while saving
         */
        changesWhileSaving: boolean;
        /**
         * Event raised when the value of <c>changesWhileSaving</c> property changes.
         */
        changesWhileSavingChanged: LatteEvent;
        /**
         * Gets a value indicating if changes are currently being saved.
         */
        isSavingChanges: boolean;
        /**
         * Gets or sets a value indicating if the object has an unsaved state.
         */
        unsavedChanges: boolean;
        /**
         * Event raised when the value of <c>unsavedChanges</c> property changes.
         */
        unsavedChangesChanged: LatteEvent;
        /**
         * Returns an array of calls to save the changes.
         * The code handling the calls result should manually change the value of <c>unsavedChanges</c> to <c>false</c>
         * in case the save call is successful.
         */
        getSaveCalls(): ICall[];
    }
}
/**
 * Created by josemanuel on 7/18/16.
 */
declare module latte {
    /**
     * The SaveContainer is an object that may contain ISave objects in its structure.
     */
    interface ISaveContainer {
        /**
         * Collection of ISave objects this container has.
         */
        saveItems: Collection<ISave>;
    }
}
/**
 * Created by josemanuel on 12/12/13.
 */
declare module latte {
    enum TriBool {
        UNKNOWN = 0,
        TRUE = 1,
        FALSE = 2
    }
}
declare module latte {
    /**
     * Enumeration of Keyboard key codes
     */
    enum Key {
        /**
         * Backspace key
         *
         * @type {number}
         */
        BACKSPACE = 8,
        /**
         * Tab key
         *
         * @type {number}
         */
        TAB = 9,
        /**
         * Enter key
         *
         * @type {number}
         */
        ENTER = 13,
        /**
         * Shift key
         *
         * @type {number}
         */
        SHIFT = 16,
        /**
         * Control key
         *
         * @type {number}
         */
        CONTROL = 17,
        /**
         * Alt key
         *
         * @type {number}
         */
        ALT = 18,
        /**
         * Backspace key
         *
         * @type {number}
         */
        PAUSE = 19,
        /**
         * Caps Lock key
         *
         * @type {number}
         */
        CAPS_LOCK = 20,
        /**
         * Escape key
         *
         * @type {number}
         */
        ESCAPE = 27,
        /**
         * Page up key
         *
         * @type {number}
         */
        PAGE_UP = 33,
        /**
         * Page down key
         *
         * @type {number}
         */
        PAGE_DOWN = 34,
        /**
         * End key
         *
         * @type {number}
         */
        END = 35,
        /**
         * Home key
         *
         * @type {number}
         */
        HOME = 36,
        /**
         * Left arrow key
         *
         * @type {number}
         */
        ARROW_LEFT = 37,
        /**
         * Up arrow key
         *
         * @type {number}
         */
        ARROW_UP = 38,
        /**
         * Right arrow key
         *
         * @type {number}
         */
        ARROW_RIGHT = 39,
        /**
         * Down arrow key
         *
         * @type {number}
         */
        ARROW_DOWN = 40,
        /**
         * Insert key
         *
         * @type {number}
         */
        INSERT = 45,
        /**
         * Delete key
         *
         * @type {number}
         */
        DELETE = 46,
        /**
         * Zero key
         *
         * @type {number}
         */
        NUMBER_0 = 48,
        /**
         * One key
         *
         * @type {number}
         */
        NUMBER_1 = 49,
        /**
         * Two key
         *
         * @type {number}
         */
        NUMBER_2 = 50,
        /**
         * Three key
         *
         * @type {number}
         */
        NUMBER_3 = 51,
        /**
         * Four key
         *
         * @type {number}
         */
        NUMBER_4 = 52,
        /**
         * Five key
         *
         * @type {number}
         */
        NUMBER_5 = 53,
        /**
         * Siz key
         *
         * @type {number}
         */
        NUMBER_6 = 54,
        /**
         * Seven key
         *
         * @type {number}
         */
        NUMBER_7 = 55,
        /**
         * Eight key
         *
         * @type {number}
         */
        NUMBER_8 = 56,
        /**
         * Nine key
         *
         * @type {number}
         */
        NUMBER_9 = 57,
        /**
         * A key
         *
         * @type {number}
         */
        A = 65,
        /**
         * B key
         *
         * @type {number}
         */
        B = 66,
        /**
         * C key
         *
         * @type {number}
         */
        C = 67,
        /**
         * D key
         *
         * @type {number}
         */
        D = 68,
        /**
         * E key
         *
         * @type {number}
         */
        E = 69,
        /**
         * F key
         *
         * @type {number}
         */
        F = 70,
        /**
         * G key
         *
         * @type {number}
         */
        G = 71,
        /**
         * H key
         *
         * @type {number}
         */
        H = 72,
        /**
         * I key
         *
         * @type {number}
         */
        I = 73,
        /**
         * J key
         *
         * @type {number}
         */
        J = 74,
        /**
         * K key
         *
         * @type {number}
         */
        K = 75,
        /**
         * L key
         *
         * @type {number}
         */
        L = 76,
        /**
         * M key
         *
         * @type {number}
         */
        M = 77,
        /**
         * N key
         *
         * @type {number}
         */
        N = 78,
        /**
         * O key
         *
         * @type {number}
         */
        O = 79,
        /**
         * P key
         *
         * @type {number}
         */
        P = 80,
        /**
         * Q key
         *
         * @type {number}
         */
        Q = 81,
        /**
         * R key
         *
         * @type {number}
         */
        R = 82,
        /**
         * S key
         *
         * @type {number}
         */
        S = 83,
        /**
         * T key
         *
         * @type {number}
         */
        T = 84,
        /**
         * U key
         *
         * @type {number}
         */
        U = 85,
        /**
         * V key
         *
         * @type {number}
         */
        V = 86,
        /**
         * W key
         *
         * @type {number}
         */
        W = 87,
        /**
         * X key
         *
         * @type {number}
         */
        X = 88,
        /**
         * Y key
         *
         * @type {number}
         */
        Y = 89,
        /**
         * Z key
         *
         * @type {number}
         */
        Z = 90,
        /**
         * Left window key
         *
         * @type {number}
         */
        LEFT_WINDOW = 91,
        /**
         * Right window key
         *
         * @type {number}
         */
        RIGHT_WINDOW = 92,
        /**
         * Select key
         *
         * @type {number}
         */
        SELECT = 93,
        /**
         * Numpad Zero key
         *
         * @type {number}
         */
        NUMPAD_0 = 96,
        /**
         * Numpad One key
         *
         * @type {number}
         */
        NUMPAD_1 = 97,
        /**
         * Numpad two key
         *
         * @type {number}
         */
        NUMPAD_2 = 98,
        /**
         * Numpad 3 key
         *
         * @type {number}
         */
        NUMPAD_3 = 99,
        /**
         * Numpad 4 key
         *
         * @type {number}
         */
        NUMPAD_4 = 100,
        /**
         * Numpad 5 key
         *
         * @type {number}
         */
        NUMPAD_5 = 101,
        /**
         * Numpad 6 key
         *
         * @type {number}
         */
        NUMPAD_6 = 102,
        /**
         * Numpad 7 key
         *
         * @type {number}
         */
        NUMPAD_7 = 103,
        /**
         * Numpad 8 key
         *
         * @type {number}
         */
        NUMPAD_8 = 104,
        /**
         * Numpad 9 key
         *
         * @type {number}
         */
        NUMPAD_9 = 105,
        /**
         * Numpad * key
         *
         * @type {number}
         */
        NUMPAD_MULTIPLY = 106,
        /**
         * Numpad + key
         *
         * @type {number}
         */
        NUMPAD_ADD = 107,
        /**
         * Numpad - key
         *
         * @type {number}
         */
        NUMPAD_SUBTRACT = 109,
        /**
         * Numpad . key
         *
         * @type {number}
         */
        NUMPAD_DECIMAL_POINT = 110,
        /**
         * Numpad / key
         *
         * @type {number}
         */
        NUMPAD_DIVIDE = 111,
        /**
         * F1 key
         *
         * @type {number}
         */
        F1 = 112,
        /**
         * F2 key
         *
         * @type {number}
         */
        F2 = 113,
        /**
         * F3 key
         *
         * @type {number}
         */
        F3 = 114,
        /**
         * F4 key
         *
         * @type {number}
         */
        F4 = 115,
        /**
         * F5 key
         *
         * @type {number}
         */
        F5 = 116,
        /**
         * F6 key
         *
         * @type {number}
         */
        F6 = 117,
        /**
         * F7 key
         *
         * @type {number}
         */
        F7 = 118,
        /**
         * F8 key
         *
         * @type {number}
         */
        F8 = 119,
        /**
         * F9 key
         *
         * @type {number}
         */
        F9 = 120,
        /**
         * F10 key
         *
         * @type {number}
         */
        F10 = 121,
        /**
         * F11 key
         *
         * @type {number}
         */
        F11 = 122,
        /**
         * F12 key
         *
         * @type {number}
         */
        F12 = 123,
        /**
         * Num lock key
         *
         * @type {number}
         */
        NUM_LOCK = 144,
        /**
         * Scroll lock key
         *
         * @type {number}
         */
        SCROLL_LOCK = 145,
        /**
         * , key
         *
         * @type {number}
         */
        SEMI_COLON = 186,
        /**
         *  = key
         *
         * @type {number}
         */
        EQUAL_SIGN = 187,
        /**
         * , key
         *
         * @type {number}
         */
        COMMA = 188,
        /**
         * - key
         *
         * @type {number}
         */
        DASH = 189,
        /**
         * . key
         *
         * @type {number}
         */
        PERIOD = 190,
        /**
         * / key
         *
         * @type {number}
         */
        FORWARD_SLASH = 191,
        /**
         * Grave acccent key
         *
         * @type {number}
         */
        GRAVE_ACCENT = 192,
        /**
         * [ key
         *
         * @type {number}
         */
        OPEN_BRACKET = 219,
        /**
         * \ key
         *
         * @type {number}
         */
        BACK_SLASH = 220,
        /**
         * ] key
         *
         * @type {number}
         */
        CLOSE_BRACKET = 221,
        /**
         * ' key
         *
         * @type {number}
         */
        SINGLE_QUOTE = 222,
        /**
         * Space bar key
         * @type {number}
         */
        SPACEBAR = 32
    }
}
declare module latte {
    /**
     * Holds a list of already included plugins
     *
     * @type {Array<string>}
     */
    var includedPlugins: Object;
    /**
     * Tells if the passed objects are equal in its properties
     *
     * @param {object} a
     * @param {object} b
     */
    function _equalObjects(a: any, b: any): boolean;
    /**
     * Returns a value indicating if the parameter is a number
     *
     * @returns {boolean}
     */
    function _isNumber(param: any): boolean;
    /**
     * Returns a value indicating if the parameter is a boolean
     *
     * @returns {boolean}
     */
    function _isBoolean(param: any): boolean;
    /**
     * Returns a value indicating if the parameter is a string
     *
     * @returns {boolean}
     */
    function _isString(param: any): boolean;
    /**
     * Returns a value indicating if the parameter is an Array, optionally specifies
     * the minimum length required to return a true value
     *
     * @returns {boolean}
     */
    function _isArray(param: any, minLength?: number): boolean;
    /**
     * Returns a value indicating if the parameter is a Function
     *
     * @returns {boolean}
     */
    function _isFunction(param: any): boolean;
    /**
     * Returns a value indicating if the parameter is an Object
     *
     * @returns {boolean}
     */
    function _isObject(param: any): boolean;
    /**
     * Returns a value indicating if the parameter as string represents a numeric value
     *
     * @returns {boolean}
     */
    function _isNumeric(param: any): boolean;
    /**
     * Gets or sets the latte Url. By default: /latte
     * @private
     */
    function _latteUrl(value?: string): any;
    /**
     * Returns a value indicating if the specified object is empty of properties
     * @param object
     * @returns {boolean}
     * @private
     */
    function _empty(object: any): boolean;
    /**
     * Returns a value indicating if the parameter is undefined
     *
     * @returns {boolean}
     */
    function _undef(param: any): boolean;
    /**
     * Logs the specified data if there's a console.
     */
    function log(...any: any[]): void;
    /**
     * Merges the two objects
     * @param a
     * @param b
     * @private
     */
    function _merge(a: any, b: any): any;
    /**
     * sprintf for only %s strings
     */
    function sprintf(...any: any[]): string;
    /**
     * Warns user about deprecated code.
     *
     * @param code
     * @param alternateUse
     */
    function warnDeprecated(code: string, alternateUse: string): void;
}
declare module latte {
    /**
     * Enumerates week days
     */
    enum WeekDay {
        /**
         * Sunday
         *
         * @type {number}
         */
        SUNDAY = 0,
        /**
         * Monday
         *
         * @type {number}
         */
        MONDAY = 1,
        /**
         * Tuesday
         *
         * @type {number}
         */
        TUESDAY = 2,
        /**
         * Wednesday
         *
         * @type {number}
         */
        WEDNESDAY = 3,
        /**
         * Thursday
         *
         * @type {number}
         */
        THURSDAY = 4,
        /**
         * Friday
         *
         * @type {number}
         */
        FRIDAY = 5,
        /**
         * Saturday
         *
         * @type {number}
         */
        SATURDAY = 6
    }
}
/**
 * Created by josemanuel on 7/20/16.
 */
declare module latte {
    /**
     *
     */
    interface IMessage {
        responseArrived: LatteEvent;
    }
}
declare module latte {
    /**
     * Generic Exception class
     *
     * Usage
     * <example>
     *  if(somethingWrong){
     *      // Throw a simple exception
     *      throw new Ex()
     *  }
     * </example>
     */
    class Ex {
        private description;
        /**
         * Creates the exception object
         *
         * @param description
         */
        constructor(description?: string);
        /**
         * Returns the exception as a string.
         *
         * @returns {string}
         */
        toString(): string;
    }
}
/**
 * Created by josemanuel on 5/4/15.
 */
declare module latte {
    /**
     *
     */
    class Ajax {
        /**
         * Loads an URL
         * @param url
         * @param success
         * @param error
         */
        static get(url: string, success?: (string: any) => void, error?: (string: any) => void): void;
        /**
         * Loads an URL
         *
         * @param url
         * @param data
         * @param success
         * @param error
         */
        static post(url: string, data: any, success?: (string: any) => void, error?: (string: any) => void): void;
    }
}
declare module latte {
    /**
     * Passed to events that could be cancelled after executing a callback
     */
    class CancellableCallbackEvent {
        /**
         *
         */
        constructor();
        /**
         * Property field
         */
        private _callback;
        /**
         * Gets or sets the callback to check for cancelation
         *
         * @returns {(cancel: boolean) => any}
         */
        /**
        * Gets or sets the callback to check for cancelation
        *
        * @param {(cancel: boolean) => any} value
        */
        callback: (handle: (cancel: boolean) => any) => any;
    }
}
declare module latte {
    /**
     *
     */
    class CollectionEvent<T> {
        /**
         * Initializes the event
         */
        constructor(item: T, itemIndex?: number, cancellable?: boolean);
        /**
         * Property field
         */
        private _cancel;
        /**
         * Gets or sets a value indicating if the event can be cancelled
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets a value indicating if the event can be cancelled
        *
        * @param {boolean} value
        */
        cancel: boolean;
        /**
         * Property field
         */
        private _cancellable;
        /**
         * Gets a value indicating if the event is cancellable
         *
         * @returns {boolean}
         */
        readonly cancellable: boolean;
        /**
         * Property field
         */
        private _item;
        /**
         * Gets the item of the event
         *
         * @returns {any}
         */
        readonly item: T;
        /**
         * Property field
         */
        private _itemIndex;
        /**
         * Gets the index of the item concerning the event
         *
         * @returns {number}
         */
        readonly itemIndex: number;
    }
}
declare module latte {
    interface CollectionEventHanler<T> {
        (item: T, e: CollectionEvent<T>): any;
    }
    /**
     *
     */
    class Collection<T> {
        private pointer;
        /**
         * Initializes the collection
         */
        constructor(addCallback?: (e: T, index: number) => void, removeCallback?: (e: T, index: number) => void, context?: any);
        /**
         * Adds an element to the collection
         *
         * @param element
         * @param raiseEvent
         */
        add(element: T, raiseEvent?: boolean): T;
        /**
         * Adds an array of elements
         *
         * @param elements
         * @param raiseEvent
         */
        addArray(elements: T[], raiseEvent?: boolean): T[];
        /**
         * Adds a collection of elements to the collection
         *
         * @param collection
         * @param raiseEvent
         */
        addCollection(collection: Collection<T>, raiseEvent?: boolean): void;
        /**
         * Clears the collection
         */
        clear(): void;
        /**
         * Returns a value indicating if the specified element is contained in the collection
         * @param element
         */
        contains(element: T): boolean;
        /**
         * Corrects the collection to be the specified on the arguments, without raising events.
         *
         * @param {T[]} elements
         */
        correctItems(elements: T[]): void;
        /**
         * Iterates through the collection, executing the handler for each item
         * @param handler
         */
        each(handler: (item: T, index: number) => any): void;
        /**
         * Iterates through the collection, executing the handler for each item
         * @param handler
         */
        eachBut(exclude: T, handler: (item: T, index: number) => any): void;
        /**
         * Gets the index of the specified element if found. -1 if not found.
         * @param item
         * @returns {number}
         */
        indexOf(item: T): number;
        /**
         * Gets the item at the specified position
         * @param index
         * @returns {*}
         */
        item(index: number): T;
        /**
         * Returns the object on current pointer and moves the pointer forward.
         * It returns null and resets pointer if end of collection reached.
         * @returns {*}
         */
        next(): T;
        /**
         * Raises the <c>addItem</c> event
         */
        onAddItem(item: T, index: number): void;
        /**
         * Raises the <c>removeItem</c> event
         */
        onRemoveItem(item: T, index: number): void;
        /**
         * Raises the <c>removingItem</c> event
         */
        onRemovingItem(e: CollectionEvent<T>): void;
        /**
         * Removes the specified item from the collection
         * @param item
         * @param raiseEvent
         */
        remove(item: T, raiseEvent?: boolean): T;
        /**
         * Removes the item ath the specified index
         * @param index
         * @param raiseEvent
         */
        removeAt(index: number, raiseEvent?: boolean): void;
        /**
         * Resets the internal pointer for calls to <c>next()</c> method.
         */
        resetPointer(): void;
        /**
         * Returns an array representation of the collection
         * @returns {T[]}
         */
        toArray(): T[];
        /**
         * Back field for event
         */
        private _addingItem;
        /**
         * Gets an event raised when the collection is about to add an item. Its cancellable
         *
         * @returns {LatteEvent}
         */
        readonly addingItem: LatteEvent;
        /**
         * Raises the <c>addingItem</c> event
         */
        onAddingItem(e: CollectionEvent<T>): void;
        /**
         * Back field for event
         */
        private _addItem;
        /**
         * Gets an event raised when an item is added
         *
         * @returns {LatteEvent}
         */
        readonly addItem: LatteEvent;
        /**
         * Back field for event
         */
        private _removeItem;
        /**
         * Gets an event raised when an item is removed
         *
         * @returns {LatteEvent}
         */
        readonly removeItem: LatteEvent;
        /**
         * Back field for event
         */
        private _removingItem;
        /**
         * Gets an event raised when the item is about to be removed
         *
         * @returns {LatteEvent}
         */
        readonly removingItem: LatteEvent;
        /**
         * Property field
         */
        private _context;
        /**
         * Gets or sets the context to execute methods of collection
         *
         * @returns {any}
         */
        /**
        * Gets or sets the context to execute methods of collection
        *
        * @param {any} value
        */
        context: any;
        /**
         * Gets the count of elements in collection
         *
         * @returns {number}
         */
        readonly count: number;
        /**
         * Gets the first element of the collection
         * @returns {*}
         */
        readonly first: T;
        /**
         * Gets the last element of the collection
         * @returns {*}
         */
        readonly last: T;
        /**
         * Property field
         */
        private _length;
        /**
         * Gets the length of the collection
         *
         * @returns {number}
         */
        readonly length: number;
    }
}
declare module latte {
    /**
     * Represents a color
     **/
    class Color {
        /**
         * Creates a color from the hexadecimal value.
         * It may contain the <c>#</c> symbol at the beginning of the string.
         **/
        static fromHex(hexColor: string): Color;
        /**
         * Gets the RGB (Red, Green, Blue) components from a CMYK namespace
         * @param c
         * @param m
         * @param y
         * @param k
         * @returns number[]
         */
        static cmykToRgb(c: number, m: number, y: number, k: number): number[];
        /**
         * HSV to RGB color conversion
         *
         * H runs from 0 to 360 degrees
         * S and V run from 0 to 100
         *
         * Ported from the excellent java algorithm by Eugene Vishnevsky at:
         * http://www.cs.rit.edu/~ncs/color/t_convert.html
         */
        static hsvToRgb(h: any, s: any, v: any): number[];
        /**
         * Gets the CMYK (Cyan, Magenta, Yellow and Key Black) components from a RGB namespace
         * @param red
         * @param green
         * @param blue
         * @returns {number[]}
         */
        static rgbToCmyk(red: number, green: number, blue: number): number[];
        /**
         * Gets the HSV (Hue, Saturation, Value) components from a RGB namespace
         * @param red
         * @param green
         * @param blue
         * @returns {number[]}
         */
        static rgbToHsv(red: number, green: number, blue: number): number[];
        /**
         * Field for black property.
         */
        private static _black;
        /**
         * Gets the black color
         */
        static readonly black: Color;
        /**
         * Field for white property.
         */
        private static _white;
        /**
         * Gets the white color
         */
        static readonly white: Color;
        /**
         * Field for red property.
         */
        private static _red;
        /**
         * Gets the red color
         */
        static readonly red: Color;
        /**
         * Field for green property.
         */
        private static _green;
        /**
         * Gets the green color
         */
        static readonly green: Color;
        /**
         * Field for blue property.
         */
        private static _blue;
        /**
         * Gets the blue color
         */
        static readonly blue: Color;
        /**
         * Field for transparent property.
         */
        private static _transparent;
        /**
         * Gets the transparent color
         */
        static readonly transparent: Color;
        /**
         * Creates the color from the specified RGB and Aplha components.
         **/
        constructor(r?: number, g?: number, b?: number, a?: number);
        /**
         * Returns the color as a hex string
         **/
        toHexString(): string;
        /**
         * Returns the color as a string
         **/
        toString(): string;
        /**
         *
         **/
        private _a;
        /**
         * Gets r sets the Alpha component of color, from 0 to 255
         * @returns {number}
         */
        /**
        * Gets or sets the Aplha component of color, from 0 to 255.
        **/
        a: number;
        /**
         *
         **/
        private _b;
        /**
         * Gets or sets the Blue component of color, from 0 to 255.
         **/
        /**
        * Gets or sets the Blue component of color, from 0 to 255.
        **/
        b: number;
        /**
         * Gets or sets the Cyan component of the CMKYK namespace
         *
         * @returns {number}
         */
        /**
        * Gets or sets the Cyan component of the CMKYK namespace
        *
        * @returns {number}
        */
        c: number;
        /**
         *
         **/
        private _g;
        /**
         * Gets or sets the Green component of color, from 0 to 255.
         **/
        /**
        * Gets or sets the Green component of color, from 0 to 255.
        **/
        g: number;
        /**
         * Gets the K (Black Key) component of the CMKYK namespace
         *
         * @returns {number}
         */
        readonly k: number;
        /**
         * Gets the Magenta component of the CMYK namespace
         *
         * @returns {number}
         */
        readonly m: number;
        /**
         * Gets the Yellow component of the CMYK namespace
         *
         * @returns {number}
         */
        readonly y: number;
        /**
         * Returns a copy of the color with the specified alpha between 0 and 255.
         *
         * @param alpha
         */
        fade(alpha: number): Color;
        /**
         * Returns a copy of the color with the specified alpha between 0 and 1.
         *
         * @param alpha
         */
        fadeFloat(alpha: number): Color;
        /**
         * Gets a value indicating if the color is a dark color, by checking its perceived luminosity
         *
         * @returns {boolean}
         */
        readonly isDark: boolean;
        /**
         * Gets a value indicating if the color is a light color, by checking its perceived luminosity
         *
         * @returns {boolean}
         */
        readonly isLight: boolean;
        /**
         * Gets a value indicating if the color is transparent.
         **/
        readonly isTransparent: boolean;
        /**
         * Returns the perceived luminosity (https://en.wikipedia.org/wiki/Luminous_intensity)
         *
         *
         * @returns {number}
         */
        readonly perceivedLuminosity: number;
        /**
         *
         **/
        private _r;
        /**
         * Gets or sets the Red component of color, from 0 to 255.
         **/
        /**
        * Gets or sets the Red component of color, from 0 to 255.
        **/
        r: number;
    }
}
/**
 * Created by josemanuel on 2/6/14.
 */
declare module latte {
    /**
     *
     */
    class Culture {
        /**
         * Property field
         */
        private static _current;
        /**
         * Gets or sets the current culture of the system
         *
         * @returns {Culture}
         */
        /**
        * Gets or sets the current culture of the system
        *
        * @param {Culture} value
        */
        static current: Culture;
        /**
         * Field for esMX property
         */
        private static _esEs;
        /**
         * Gets the Español-Mexico Culture
         *
         * @returns {Culture}
         */
        static readonly esEs: Culture;
        /**
         * Field for esMX property
         */
        private static _esMx;
        /**
         * Gets the Español-Mexico Culture
         *
         * @returns {Culture}
         */
        static readonly esMx: Culture;
        /**
         * Field for enUs property
         */
        private static _enUs;
        /**
         * Gets the English-USA Culture
         *
         * @returns {Culture}
         */
        static readonly enUs: Culture;
        /**
         * Formats currency using the current culture
         * @param n
         * @returns {string}
         */
        static formatCurrency(n: number): string;
        /**
         * Returns the date as a short format
         * @param d
         */
        static formatShortDate(d: DateTime): string;
        /**
         * Returns the date as a short format
         * @param d
         */
        static formatLongDate(d: DateTime): string;
        /**
         * Formats a number using the current Culture
         * @param n
         * @param decimals
         * @param symbol
         * @returns {string}
         */
        static formatNumber(n: number, decimals?: number, symbol?: string): string;
        /**
         * Short date format
         */
        shortDateFormat: string;
        /**
         * Long date format
         */
        longDateFormat: string;
        /**
         * Amount of decimals to show in currency format
         */
        currencyDecimals: number;
        /**
         * Separator of decimals for currency
         */
        numberDecimalsSeparator: string;
        /**
         * Thousands separator for currency
         */
        numberThousandsSeparator: string;
        /**
         * Symbol to use in currency
         */
        currencySymbol: string;
        /**
         * Regular expression for validating floating point numbers
         * @type {RegExp}
         */
        floatValidator: RegExp;
        /**
         * Regular expression for validating integer numbers
         * @type {RegExp}
         */
        intValidator: RegExp;
        /**
         *
         */
        constructor();
        /**
         * Returns the specified number as a currency
         * @param n
         */
        onFormatCurrency(n: number): string;
        /**
         * Formats the specified number
         * @param n
         * @param decimals
         * @param symbol
         * @returns {string}
         */
        onFormatNumber(n: number, decimals?: number, symbol?: string): string;
        /**
         * Returns the date as a long format
         * @param d
         */
        onFormatLongDate(d: DateTime): string;
        /**
         * Returns the date as a short format
         * @param d
         */
        onFormatShortDate(d: DateTime): string;
    }
}
declare module latte {
    /**
     *
     */
    class Country {
        /**
         * Gets the country codes
         */
        static codes: string[];
        /**
         * Gets options for a select of country
         * @returns {{[p: string]: string}}
         */
        static getCountrySelectOptions(): {
            [index: string]: string;
        };
        /**
         * Gets options for a select of country phone code
         * @returns {{[p: string]: string}}
         */
        static getCountryPhoneSelectOptions(): {
            [index: string]: string;
        };
        static AF: ICountry;
        static AL: ICountry;
        static DZ: ICountry;
        static AS: ICountry;
        static AD: ICountry;
        static AO: ICountry;
        static AI: ICountry;
        static AQ: ICountry;
        static AG: ICountry;
        static AR: ICountry;
        static AM: ICountry;
        static AW: ICountry;
        static AU: ICountry;
        static AT: ICountry;
        static AZ: ICountry;
        static BS: ICountry;
        static BH: ICountry;
        static BD: ICountry;
        static BB: ICountry;
        static BY: ICountry;
        static BE: ICountry;
        static BZ: ICountry;
        static BJ: ICountry;
        static BM: ICountry;
        static BT: ICountry;
        static BO: ICountry;
        static BA: ICountry;
        static BW: ICountry;
        static BR: ICountry;
        static IO: ICountry;
        static VG: ICountry;
        static BN: ICountry;
        static BG: ICountry;
        static BF: ICountry;
        static BI: ICountry;
        static KH: ICountry;
        static CM: ICountry;
        static CA: ICountry;
        static CV: ICountry;
        static KY: ICountry;
        static CF: ICountry;
        static TD: ICountry;
        static CL: ICountry;
        static CN: ICountry;
        static CX: ICountry;
        static CC: ICountry;
        static CO: ICountry;
        static KM: ICountry;
        static CK: ICountry;
        static CR: ICountry;
        static HR: ICountry;
        static CU: ICountry;
        static CW: ICountry;
        static CY: ICountry;
        static CZ: ICountry;
        static CD: ICountry;
        static DK: ICountry;
        static DJ: ICountry;
        static DM: ICountry;
        static DO: ICountry;
        static TL: ICountry;
        static EC: ICountry;
        static EG: ICountry;
        static SV: ICountry;
        static GQ: ICountry;
        static ER: ICountry;
        static EE: ICountry;
        static ET: ICountry;
        static FK: ICountry;
        static FO: ICountry;
        static FJ: ICountry;
        static FI: ICountry;
        static FR: ICountry;
        static PF: ICountry;
        static GA: ICountry;
        static GM: ICountry;
        static GE: ICountry;
        static DE: ICountry;
        static GH: ICountry;
        static GI: ICountry;
        static GR: ICountry;
        static GL: ICountry;
        static GD: ICountry;
        static GU: ICountry;
        static GT: ICountry;
        static GG: ICountry;
        static GN: ICountry;
        static GW: ICountry;
        static GY: ICountry;
        static HT: ICountry;
        static HN: ICountry;
        static HK: ICountry;
        static HU: ICountry;
        static IS: ICountry;
        static IN: ICountry;
        static ID: ICountry;
        static IR: ICountry;
        static IQ: ICountry;
        static IE: ICountry;
        static IM: ICountry;
        static IL: ICountry;
        static IT: ICountry;
        static CI: ICountry;
        static JM: ICountry;
        static JP: ICountry;
        static JE: ICountry;
        static JO: ICountry;
        static KZ: ICountry;
        static KE: ICountry;
        static KI: ICountry;
        static XK: ICountry;
        static KW: ICountry;
        static KG: ICountry;
        static LA: ICountry;
        static LV: ICountry;
        static LB: ICountry;
        static LS: ICountry;
        static LR: ICountry;
        static LY: ICountry;
        static LI: ICountry;
        static LT: ICountry;
        static LU: ICountry;
        static MO: ICountry;
        static MK: ICountry;
        static MG: ICountry;
        static MW: ICountry;
        static MY: ICountry;
        static MV: ICountry;
        static ML: ICountry;
        static MT: ICountry;
        static MH: ICountry;
        static MR: ICountry;
        static MU: ICountry;
        static YT: ICountry;
        static MX: ICountry;
        static FM: ICountry;
        static MD: ICountry;
        static MC: ICountry;
        static MN: ICountry;
        static ME: ICountry;
        static MS: ICountry;
        static MA: ICountry;
        static MZ: ICountry;
        static MM: ICountry;
        static NA: ICountry;
        static NR: ICountry;
        static NP: ICountry;
        static NL: ICountry;
        static AN: ICountry;
        static NC: ICountry;
        static NZ: ICountry;
        static NI: ICountry;
        static NE: ICountry;
        static NG: ICountry;
        static NU: ICountry;
        static KP: ICountry;
        static MP: ICountry;
        static NO: ICountry;
        static OM: ICountry;
        static PK: ICountry;
        static PW: ICountry;
        static PS: ICountry;
        static PA: ICountry;
        static PG: ICountry;
        static PY: ICountry;
        static PE: ICountry;
        static PH: ICountry;
        static PN: ICountry;
        static PL: ICountry;
        static PT: ICountry;
        static PR: ICountry;
        static QA: ICountry;
        static CG: ICountry;
        static RE: ICountry;
        static RO: ICountry;
        static RU: ICountry;
        static RW: ICountry;
        static BL: ICountry;
        static SH: ICountry;
        static KN: ICountry;
        static LC: ICountry;
        static MF: ICountry;
        static PM: ICountry;
        static VC: ICountry;
        static WS: ICountry;
        static SM: ICountry;
        static ST: ICountry;
        static SA: ICountry;
        static SN: ICountry;
        static RS: ICountry;
        static SC: ICountry;
        static SL: ICountry;
        static SG: ICountry;
        static SX: ICountry;
        static SK: ICountry;
        static SI: ICountry;
        static SB: ICountry;
        static SO: ICountry;
        static ZA: ICountry;
        static KR: ICountry;
        static SS: ICountry;
        static ES: ICountry;
        static LK: ICountry;
        static SD: ICountry;
        static SR: ICountry;
        static SJ: ICountry;
        static SZ: ICountry;
        static SE: ICountry;
        static CH: ICountry;
        static SY: ICountry;
        static TW: ICountry;
        static TJ: ICountry;
        static TZ: ICountry;
        static TH: ICountry;
        static TG: ICountry;
        static TK: ICountry;
        static TO: ICountry;
        static TT: ICountry;
        static TN: ICountry;
        static TR: ICountry;
        static TM: ICountry;
        static TC: ICountry;
        static TV: ICountry;
        static VI: ICountry;
        static UG: ICountry;
        static UA: ICountry;
        static AE: ICountry;
        static GB: ICountry;
        static US: ICountry;
        static UY: ICountry;
        static UZ: ICountry;
        static VU: ICountry;
        static VA: ICountry;
        static VE: ICountry;
        static VN: ICountry;
        static WF: ICountry;
        static EH: ICountry;
        static YE: ICountry;
        static ZM: ICountry;
        static ZW: ICountry;
    }
}
declare module latte {
    /**
     * Represents a specific date and time
     **/
    class DateTime {
        /**
         * Amount of days in months of a non-leap year
         **/
        static monthDays: Array<number>;
        /**
         * Amount of days in months of leap year
         **/
        static monthDaysLeapYear: Array<number>;
        /**
         * Returns the absolute number of days on the specified day-month-year
         **/
        static absoluteDays(year: number, month: number, day: number): number;
        /**
         * Returns the amount of days in the specified month of the specified year
         **/
        static daysInMonth(year: number, month: number): number;
        /**
         * Returns a DateTime object from the specifed date and time components
         **/
        static fromDateAndTime(date: DateTime, time: TimeSpan): DateTime;
        /**
         * Returns a DateTime object from the specified amount of milliseconds
         **/
        static fromMilliseconds(milliseconds: number): DateTime;
        /**
         * Creates a DateTime object from the specified string.
         String should be in the format <c>yyyy-mm-dd hh:mm:ss</c>
         **/
        static fromString(dateTimeString: string): DateTime;
        /**
         * Returns a value indicating if the specified year is leap year
         **/
        static isLeapYear(year: number): boolean;
        /**
         * Gets a DateTime representing the current millisecond
         **/
        static readonly now: DateTime;
        /**
         * Gets a DateTime representing the current day without time component
         **/
        static readonly today: DateTime;
        /**
         * Gets a DateTime representing the day of tomorrow without time component
         **/
        static readonly tomorrow: DateTime;
        /**
         * Gets the unix epoch
         * @returns {latte.DateTime}
         */
        static readonly epoch: DateTime;
        /**
         * Gets a DateTime representing the day of yesterday without time component
         **/
        static readonly yesterday: DateTime;
        _span: TimeSpan;
        /**
         * Creates the DateTime object
         **/
        constructor(year?: number, month?: number, day?: number, hour?: number, minute?: number, second?: number, millisecond?: number);
        /**
         * Prepends a zero to the number if lower than 10
         **/
        private _zeroPad;
        /**
         * Returns the specified element of date.
         Possible values for <c>what</c> are: <c>year</c> | <c>month</c> | <c>dayyear</c> | <c>day</c>
         **/
        private fromTimeSpan;
        /**
         * Returns the result of adding the specified timespan to this date
         **/
        add(timespan: TimeSpan): DateTime;
        /**
         * Returns the result of adding the specified amount of days to this date
         **/
        addDays(days: number): DateTime;
        /**
         * Returns the result of adding the specified amount of hours to this date
         **/
        addHours(hours: number): DateTime;
        /**
         * Returns the result of adding the specified amount of milliseconds to this date
         **/
        addMilliseconds(milliseconds: number): DateTime;
        /**
         * Returns the result of adding the specified amount of minutes to this date
         **/
        addMinutes(minutes: number): DateTime;
        /**
         * Returns the result of adding the specified amount of months to this date
         **/
        addMonths(months: number): DateTime;
        /**
         * Returns the result of adding the specified amount of seconds to this date
         **/
        addSeconds(seconds: number): DateTime;
        /**
         * Returns the result of adding the specified amount of years to this date
         **/
        addYears(years: number): DateTime;
        /**
         * Returns the result of comparing this datetime to the specified datetime
         **/
        compareTo(datetime: DateTime): number;
        /**
         * Gets a value indicating if the specified datetime is equals to this datetime
         **/
        equals(datetime: DateTime): boolean;
        /**
         * Returns a value indicating if the date is contained in the range specified by the arguments
         **/
        onRange(start: DateTime, end: DateTime): boolean;
        /**
         * Returns the result of subtracting the specified datetime to this datetime
         **/
        subtractDate(datetime: DateTime): TimeSpan;
        /**
         * Returns the result of subtracting the specified timespan to this datetime
         **/
        subtractTime(timespan: TimeSpan): DateTime;
        /**
         * Returns a relative representatio of the date, like "Yesterday 10:00AM"
         **/
        toRelativeString(withTime?: boolean): string;
        /**
         * Returns a formatted string
         **/
        toFormattedString(format?: string): string;
        /**
         * Gets the DateTime as a string
         **/
        toString(includeTime?: boolean): string;
        /**
         * Gets a value of the object
         * @returns {number}
         */
        valueOf(): number;
        /**
         * Gets the day of this datetime
         **/
        readonly day: number;
        /**
         * Gets the day of week this datetime. Sunday is 0 and Saturday is 6.
         **/
        readonly dayOfWeek: number;
        /**
         * Gets the name of the day of the week
         * @returns {*}
         */
        readonly dayOfWeekString: string;
        /**
         * Gets the name of the day of the week
         * @returns {*}
         */
        readonly dayOfWeekStringShort: string;
        /**
         * Gets the name of the day of the week
         * @returns {*}
         */
        readonly dayOfWeekStringInitial: string;
        /**
         * Gets the day of year datetime
         **/
        readonly dayOfYear: number;
        /**
         * Gets the comparer value of the date
         *
         * @returns {number}
         */
        readonly comparer: number;
        /**
         * Returns just the date component of this datetime
         **/
        readonly date: DateTime;
        /**
         * Gets the hour of the datetime
         **/
        readonly hour: number;
        /**
         * Gets the millisecond of the date
         **/
        readonly millisecond: number;
        /**
         * Gets the minute of the time
         **/
        readonly minute: number;
        /**
         * Gets the month of the date
         **/
        readonly month: number;
        /**
         * Gets the name of the month of the date
         **/
        readonly monthString: string;
        /**
         * Gets the name of the month of the date
         **/
        readonly monthStringShort: string;
        /**
         * Gets the name of the month of the date
         **/
        readonly monthStringInitial: string;
        /**
         * Gets the second of the date
         **/
        readonly second: number;
        /**
         * Gets the time component of this datetime
         **/
        readonly timeOfDay: TimeSpan;
        /**
         * Gets a value indicating if the date is after the unix epoch
         *
         * @returns {boolean}
         */
        readonly thisEpoch: boolean;
        /**
         * Gets the week number of date. First week of year is 1
         **/
        readonly weekOfYear: number;
        /**
         * Gets the year of the date
         **/
        readonly year: number;
    }
}
declare module latte {
    class EventHandler {
        handler: Function;
        context: any;
        constructor(handler: Function, context: any);
    }
    /**
     * Manages events and event handlers
     */
    class LatteEvent {
        context: any;
        handlers: Array<EventHandler>;
        /**
         * Raised when a handler is added to the event
         */
        _handlerAdded: LatteEvent;
        /**
         *
         * @param context Context where
         */
        constructor(context: any);
        /**
         * Gets the event for handler adding
         *
         * @returns {LatteEvent}
         */
        readonly handlerAdded: LatteEvent;
        /**
         * Adds a handler to the event
         * @param handler
         */
        add(handler: Function, context?: any): void;
        /**
         * Raises the <c>handlerAdded</c> event
         * @param handler
         */
        onHandlerAdded(handler: Function): void;
        /**
         * Raises the actual event handlers.
         * @param parameter
         * @returns {*}
         */
        raise(...parameter: any[]): any;
        /**
         * Removes the specified handler
         * @param {Function} handler
         */
        remove(handler: Function): void;
    }
}
declare module latte {
    /**
     * Exception thrown when an argument of the function was invalid.
     *
     * Usage:
     * <example>
     *
     * function pow(a){
     *
     *      if(typeof a != 'number')
     *          // Inform user that the parameter was invalid
     *          throw new InvalidArgumentEx('a');
     *
     *      return a * a;
     *
     * }
     *
     * </example>
     */
    class InvalidArgumentEx extends Ex {
        argument: string;
        value: any;
        /**
         * Creates the exception
         *
         * @param argument
         * @param value
         */
        constructor(argument?: string, value?: any);
        /**
         * Returns a string explaining the exception
         *
         * @returns {string}
         */
        toString(): string;
    }
}
/**
 * Created by josemanuel on 5/12/14.
 */
declare module latte {
    /**
     *
     */
    class Point {
        /**
         * Gets the distance between two points
         * @param a
         * @param b
         */
        static distance(a: Point, b: Point): number;
        /**
         * Returns an empty point
         * @returns {latte.Point}
         */
        static empty(): Point;
        /**
         * Returns a point situated on the origin
         * @returns {latte.Point}
         */
        static origin(): Point;
        /**
         * Creates a new point, optionally
         */
        constructor(x?: number, y?: number);
        /**
         * Gets the distance to the specified point
         * @param {latte.Point} p
         * @returns {number}
         */
        distanceTo(p: Point): number;
        /**
         * Gets a value indicating if the passed point is equals to this one
         * @param {latte.Point} p
         * @returns {boolean}
         */
        equals(p: Point): boolean;
        /**
         * Returns the offset operation of the point
         *
         * @param x
         * @param y
         * @returns {latte.Point}
         */
        offset(x: number, y: number): Point;
        /**
         * Gets string representation of the point
         * @returns {string}
         */
        toString(): string;
        /**
         * Gets a value indicating if the point is empty (No value has been set)
         *
         * @returns {boolean}
         */
        readonly isEmpty: boolean;
        /**
         * Property field
         */
        private _x;
        /**
         * Gets or sets the x coordinate
         *
         * @returns {number}
         */
        /**
        * Gets or sets the x coordinate
        *
        * @param {number} value
        */
        x: number;
        /**
         * Property field
         */
        private _y;
        /**
         * Gets or sets the y coordinate
         *
         * @returns {number}
         */
        /**
        * Gets or sets the y coordinate
        *
        * @param {number} value
        */
        y: number;
    }
}
declare module latte {
    /**
     * Exception thrown when an argument of the function was invalid.
     *
     * Usage:
     * <example>
     *
     * function pow(a){
     *
     *      throw new latte.InvalidCallEx('pow')
     *
     * }
     *
     * </example>
     */
    class InvalidCallEx extends Ex {
        method: string;
        /**
         * Creates the Exception
         * @param method
         */
        constructor(method?: string);
        /**
         * Returns a string explaining the exception
         *
         * @returns {string}
         */
        toString(): string;
    }
}
declare module latte {
    /**
     * Reprsents a Rectangle
     **/
    class Rectangle {
        /**
         * Creates a rectangle with the specified left, right, top and bottom.
         **/
        static fromLRTB(left: number, right: number, top: number, bottom: number): Rectangle;
        /**
         * Creates a rectangle from the specified object (top, left, width, height)
         * @param obj
         */
        static fromObject(obj: any): Rectangle;
        /**
         * Creates a rectangle from the specified object (top, left, width, height)
         * @param obj
         */
        static fromObjectLFTB(obj: any): Rectangle;
        /**
         * Creates a rectangle of the specified rectangle
         * @param {HTMLElement} e
         * @returns {latte.Rectangle}
         */
        static fromElement(e: HTMLElement): Rectangle;
        /**
         * Height of rectangle
         **/
        private _height;
        /**
         * Left of rectangle
         **/
        private _left;
        /**
         * Top of rectangle
         **/
        private _top;
        /**
         * Width of rectangle
         **/
        private _width;
        /**
         *
         */
        private _tag;
        /**
         * Creates a rectangle with the specified left, top, width and height.
         **/
        constructor(left?: number, top?: number, width?: number, height?: number);
        /**
         * Returns a rectangle of positive width and height, by changing its coordinates and preserving width and height
         */
        absolute(): Rectangle;
        /**
         * Returns the result of centering this into the specified container
         **/
        centerOn(container: Rectangle): Rectangle;
        /**
         * Gets a value indicating if the specified point is contained
         **/
        contains(x: number, y: number): boolean;
        /**
         * Gets a value indicating if the rectangle is contained inside this rectangle
         **/
        containsRectangle(rectangle: Rectangle): boolean;
        /**
         * Compares this rectangle with the specified rectangle and returns the result
         * @param r
         * @returns {boolean}
         */
        equals(r: Rectangle): boolean;
        /**
         * Returns the result of inflating the rectangle vertically and horizontally on each edge.
         **/
        inflate(horizontal: number, vertical: number): Rectangle;
        /**
         * Returns the rectangle result of intersecting this with passed rectangle
         **/
        intersection(rectangle: Rectangle): Rectangle;
        /**
         * Gets a value indicating if the rectangle intersects specified rectangle
         **/
        intersects(rectangle: Rectangle): boolean;
        /**
         * Returns a scaled rectangle
         * @param width
         */
        scaleToHeight(height: number): Rectangle;
        /**
         * Returns a scaled rectangle
         * @param width
         */
        scaleToWidth(width: number): Rectangle;
        /**
         * Returns a string describing the rectangle
         **/
        toString(): string;
        /**
         * Gets a rectangle representing the union of this rectangle and the passed one
         **/
        union(rectangle: Rectangle): Rectangle;
        /**
         * Gets the area of the rectangle
         *
         * @returns {number}
         */
        readonly area: number;
        /**
         * Gets or sets the right side of the rectangle
         **/
        /**
        * Gets or sets the right side of the rectangle
        **/
        bottom: number;
        /**
         * Gets or sets the center of the rectangle
         * @returns {latte.Point}
         */
        /**
        * Gets or sets the center of the rectangle
        * @param value
        */
        center: Point;
        /**
         * Gets or sets the height of the rectangle
         **/
        /**
        * Gets or sets the height of the rectangle
        **/
        height: number;
        /**
         * Gets a value indicating if the rectangle is empty
         *
         * @returns {boolean}
         */
        readonly isEmpty: boolean;
        /**
         * Gets or sets the left of the rectangle
         **/
        /**
        * Gets or sets the left of the rectangle
        **/
        left: number;
        /**
         * Gets the location of the rectangle
         *
         * @returns {Point}
         */
        readonly location: Point;
        /**
         * Gets or sets the right side of the rectangle
         **/
        /**
        * Gets or sets the right side of the rectangle
        **/
        right: number;
        /**
         * Gets the size of the rectangle
         *
         * @returns {Size}
         */
        readonly size: Size;
        /**
         * Gets or sets a tag
         * @returns {any}
         */
        /**
        * Gets or sets a tag
        * @param value
        */
        tag: any;
        /**
         * Gets or sets the top of the rectangle
         **/
        /**
        * Gets or sets the top of the rectangle
        **/
        top: number;
        /**
         * Gets or sets the width of the rectangle
         **/
        /**
        * Gets or sets the width of the rectangle
        **/
        width: number;
    }
}
declare module latte {
    /**
     * Represents a time interval.
     **/
    class TimeSpan {
        millis: number;
        /**
         * Creates a TimeSpan from the specified amount of days
         **/
        static fromDays(days: number): TimeSpan;
        /**
         * Creates a TimeSpan from the specified amount of hours
         **/
        static fromHours(hours: number): TimeSpan;
        /**
         * Creates a TimeSpan from the specified amount of milliseconds
         **/
        static fromMilliseconds(milliseconds: number): TimeSpan;
        /**
         * Creates a TimeSpan from the specified amount of minutes
         **/
        static fromMinutes(minutes: number): TimeSpan;
        /**
         * Creates a TimeSpan from the specified amount of seconds
         **/
        static fromSeconds(seconds: number): TimeSpan;
        /**
         * Creates a TimeSpan object from the specified string.
         String should be in the format <c>hh:mm:ss</c>
         **/
        static fromString(timeString: string): TimeSpan;
        /**
         * Gets a timespan with the time passed since the specified date and time
         * @param d
         */
        static timeSince(d: DateTime): TimeSpan;
        /**
         * Creates the TimeSpan with the specified parameters. Parameters not specified will be asumed to be zero.
         **/
        constructor(days?: number, hours?: number, minutes?: number, seconds?: number, milliseconds?: number);
        /**
         * Makes math rounding depending on the sign of the milliseconds
         **/
        private _rounder;
        /**
         * Prepends a zero to the number if lower than 10
         **/
        private _zeroPad;
        /**
         * Returns the result of adding the specified timespan to this timespan
         **/
        add(timespan: TimeSpan): TimeSpan;
        /**
         * Returns the result of adding the specified amount of hours to this timespan
         **/
        addHours(hours: number): TimeSpan;
        /**
         * Returns the result of adding the specified amount of minutes to this timespan
         **/
        addMinutes(minutes: number): TimeSpan;
        /**
         * Returns the result of adding the specified amount of seconds to this timespan
         **/
        addSeconds(seconds: number): TimeSpan;
        /**
         * Returns the result of comparing this timespan against the provided timespan
         **/
        compareTo(timespan: TimeSpan): number;
        /**
         * Returns a timespan representing the actual duration of the timespan
         **/
        duration(): TimeSpan;
        /**
         * Returns a value indicating if this timespan represents the same than the specified timespan
         **/
        equals(timespan: TimeSpan): boolean;
        /**
         * Negates the timespan duration
         **/
        negate(): void;
        /**
         * Returns the result of subtracting the specified timespan to this timespan
         **/
        subtract(timespan: TimeSpan): TimeSpan;
        /**
         * Returns this timespan as a string
         **/
        toString(includeMilliseconds?: boolean): string;
        /**
         * Returns the timespan as a shor string, e.g. 5 minutes or 5m
         * @param shortNames
         */
        toShortString(shortNames?: boolean): string;
        /**
         * Gets the timespan as a number
         * @returns {number}
         */
        valueOf(): number;
        /**
         * Gets the days component of the time interval represented by this object
         **/
        readonly days: number;
        /**
         * Gets the hours component of the time interval represented by this object
         **/
        readonly hours: number;
        /**
         * Gets a value indicating if the total time this timespan represents is zero
         **/
        readonly isEmpty: boolean;
        /**
         * Gets the milliseconds component of the time interval represented by this object
         **/
        readonly milliseconds: number;
        /**
         * Gets the minutes component of the time interval represented by this object
         **/
        readonly minutes: number;
        /**
         * Gets the seconds component of the time interval represented by this object
         **/
        readonly seconds: number;
        /**
         * Gets the value of this timespan expressed in whole and fractional days
         **/
        readonly totalDays: number;
        /**
         * Gets the value of this timespan expressed in whole and fractional hours
         **/
        readonly totalHours: number;
        /**
         * Gets the value of this timespan expressed in milliseconds
         **/
        readonly totalMilliseconds: number;
        /**
         * Gets the value of this timespan expressed in whole and fractional minutes
         **/
        readonly totalMinutes: number;
        /**
         * Gets the value of this timespan expressed in whole and fractional seconds
         **/
        readonly totalSeconds: number;
    }
}
/**
 * Created by josemanuel on 5/26/15.
 */
declare module latte {
    /**
     *
     */
    class LoadInfo {
        /**
         * Field for instance property
         */
        private static _instance;
        /**
         * Gets the load mechanism singleton.
         *
         * @returns {LoadMechanism}
         */
        static readonly instance: LoadInfo;
        /**
         * @private
         */
        constructor();
        /**
         * Ends a loading process
         */
        end(): void;
        /**
         * Raises the <c>loadingStart</c> event
         */
        onLoadingStart(): void;
        /**
         * Raises the <c>loadingEnd</c> event
         */
        onLoadingEnd(): void;
        /**
         * Raises the <c>loadingText</c> event
         */
        onLoadingTextChanged(): void;
        /**
         * Starts a loading process
         * @param text
         */
        start(text: string): void;
        /**
         * Back field for event
         */
        private _loadingStart;
        /**
         * Gets an event raised when the loading starts
         *
         * @returns {LatteEvent}
         */
        readonly loadingStart: LatteEvent;
        /**
         * Back field for event
         */
        private _loadingEnd;
        /**
         * Gets an event raised when the loading ends
         *
         * @returns {LatteEvent}
         */
        readonly loadingEnd: LatteEvent;
        /**
         * Back field for event
         */
        private _loadingTextChanged;
        /**
         * Gets an event raised when the value of the loadingText property changes
         *
         * @returns {LatteEvent}
         */
        readonly loadingTextChanged: LatteEvent;
        /**
         * Property field
         */
        private _loadingText;
        /**
         * Gets or sets the text of the load information
         *
         * @returns {string}
         */
        /**
        * Gets or sets the text of the load information
        *
        * @param {string} value
        */
        loadingText: string;
    }
}
/**
 * Created by josemanuel on 5/12/14.
 */
declare module latte {
    /**
     *
     */
    class Size {
        /**
         * Returns an empty size
         * @returns {latte.Size}
         */
        static empty(): Size;
        /**
         * Returns a size of zero width and zero height
         * @returns {latte.Point}
         */
        static zero(): Size;
        /**
         * Creates a new Size, optionally sets its Width and Height components
         */
        constructor(width?: number, height?: number);
        /**
         * Gets a value indicating if the size contains the specified size.
         * @param size
         */
        contains(size: Size): boolean;
        /**
         * Inflates the size on the specified width and height
         *
         * @param width
         * @param height
         * @returns {latte.Size}
         */
        inflate(width: number, height: number): Size;
        /**
         * Inflates the size uniformly
         * @param wide
         */
        inflateUniform(wide: number): Size;
        /**
         * Gets a scaled Size that fits in the specified target.
         * @param target
         */
        scaleToFit(target: Size): Size;
        /**
         * Gets a scaled Size that fills the specified target.
         * @param target
         */
        scaleToFill(target: Size): Size;
        /**
         * Gets string representation of the size
         * @returns {string}
         */
        toString(): string;
        /**
         * Gets the area represented by the size
         *
         * @returns {number}
         */
        readonly area: number;
        /**
         * Gets a value indicating if the size has no compnents assigned or initialized
         *
         * @returns {boolean}
         */
        readonly isEmpty: boolean;
        /**
         * Gets a value indicating if the size is horizontal
         *
         * @returns {boolean}
         */
        readonly isHorizontal: boolean;
        /**
         * Gets a value indicating if the size is a square
         *
         * @returns {boolean}
         */
        readonly isSquare: boolean;
        /**
         * Gets a value indicating if the size is vertical
         *
         * @returns {boolean}
         */
        readonly isVertical: boolean;
        /**
         * Property field
         */
        private _height;
        /**
         * Gets the Height component of the size
         *
         * @returns {number}
         */
        readonly height: number;
        /**
         * Property field
         */
        private _width;
        /**
         * Gets the Width component of the size
         *
         * @returns {number}
         */
        readonly width: number;
    }
}
declare module latte {
    class HEvent<T> {
    }
}
declare module latte {
    /**
     * Executes an action every specified amount of milliseconds
     **/
    class Timer {
        /**
         *
         **/
        private _callback;
        /**
         *
         **/
        private _context;
        /**
         *
         **/
        private _milliseconds;
        /**
         *
         **/
        private _paused;
        /**
         * Creates a timer that will call <c>callback</c> every specified amount of
         <c>milliseconds</c> on the specified <c>context</c>.
         **/
        constructor(callback: Function, milliseconds: number, context: any);
        /**
         * Gets or sets the function who will be called every tick
         **/
        /**
        * Gets or sets the function who will be called every tick
        **/
        callback: Function;
        /**
         * Gets or sets the context in which the function is executed
         **/
        /**
        * Gets or sets the context in which the function is executed
        **/
        context: any;
        /**
         * Gets or sets the milliseconds to sleep between calls
         **/
        /**
        * Gets or sets the milliseconds to sleep between calls
        **/
        milliseconds: number;
        /**
         * Pauses the timer
         **/
        pause(): void;
        /**
         * Starts ticking
         **/
        start(): void;
        /**
         * Ticks the timer. Executes the callback and programs next tick.
         **/
        tick(): void;
    }
}
