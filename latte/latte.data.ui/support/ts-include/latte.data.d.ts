/// <reference path="datalatte.d.ts" />
/// <reference path="latte.d.ts" />
/// <reference path="latte.data.strings.d.ts" />
/// <reference path="latte.strings.d.ts" />
/**
 * Created by josemanuel on 8/9/16.
 */
declare module latte {
    interface IRecordMeta extends IEntityMeta {
    }
}
declare module latte {
    /**
     * Represents a set of structured data
     **/
    class DataSet {
        /**
         * Columns of the dataset
         **/
        columns: Collection<DataSetColumn>;
        /**
         * Rows of data
         **/
        rows: Collection<DataSetRow>;
        /**
         * Creates the dataset
         **/
        constructor();
        /**
         * Creates a <c>DataSet</c> from the dataset specified as a JSON object
         **/
        static fromServerObject(dataset: any): DataSet;
        /**
         * Converts the type sent by server to a type compatible with <c>InputItem</c>
         **/
        static fromServerType(type: string): string;
        /**
         * Gets the index of the column by passing the name of the column
         **/
        getColumnIndex(columnName: string): number;
        /**
         * Gets the data as an array of arrays
         **/
        getDataArray(): any[];
        /**
         * Gets the value of the specified column at the specified row index
         **/
        getValue(columnName: string, rowIndex: number): any;
        /**
         * Gets the value at the specified position
         **/
        getValueAt(columnIndex: number, rowIndex: number): any;
        /**
         * Sets the value at the specified position
         **/
        setValue(columnName: string, rowIndex: number, value: any): DataSet;
        /**
         * Sets the value at the specified position
         **/
        setValueAt(columnIndex: number, rowIndex: number, value: any): DataSet;
    }
}
declare module latte {
    /**
     *
     */
    class DataBindActor {
        /**
         * Creates the actor
         *
         * If no propertyChanged event is passed, the "propertyChanged" event will be automatically seeked.
         *
         */
        constructor(actor: any, propertyName: string, propertyType?: BindValueType, propertyChanged?: LatteEvent);
        /**
         * Property field
         */
        private _actor;
        /**
         * Gets the actor of the bind
         *
         * @returns {any}
         */
        readonly actor: any;
        /**
         * Property field
         */
        private _propertyChanged;
        /**
         * Gets the event of property change
         *
         * @returns {LatteEvent}
         */
        readonly propertyChanged: LatteEvent;
        /**
         * Property field
         */
        private _propertyName;
        /**
         * Gets the name of the property
         *
         * @returns {string}
         */
        readonly propertyName: string;
        /**
         * Property field
         */
        private _propertyType;
        /**
         * Gets the type of the property
         *
         * @returns {BindType}
         */
        readonly propertyType: BindValueType;
    }
}
declare module latte {
    /**
     * Initialize, then call value property to obtain coerced value
     */
    class DataBindCoercion {
        /**
         * Performs the coercion
         * @param value
         * @param {latte.BindValueType} sourceType
         * @param {latte.BindValueType} targetType
         * @returns {any}
         */
        static coerce(value: any, sourceType: BindValueType, targetType: BindValueType): any;
        /**
         * Ensures the specified value is of the specified type
         * @param value
         * @param {latte.BindValueType} type
         */
        static ensureType(value: any, type: BindValueType): any;
        /**
         * Parses the type
         * @param {string} typeAsString
         */
        static parseType(typeAsString?: string): BindValueType;
    }
}
declare module latte {
    /**
     * Represents a collection of records
     */
    class DataRecordCollection extends Collection<DataRecord> {
        /**
         * Creates the collection of the specified type.
         * Optionally specifies handlers for adding and removing items, and a
         * context to call as closure of events.
         *
         * @param addCallback
         * @param removeCallback
         * @param context
         */
        constructor(addCallback?: (DataRecord: any, number: any) => any, removeCallback?: (DataRecord: any, number: any) => any, context?: any);
        /**
         * Finds the record of the specified <c>id</c>
         *
         * @param id
         * @returns {null}
         */
        byId(id: number): DataRecord;
    }
}
declare module latte {
    /**
     * Represents a row of data for <c>DataSet</c>
     **/
    class DataSetRow {
        data: Array<any>;
        /**
         *
         **/
        private _dataSet;
        /**
         *
         **/
        private _readOnly;
        /**
         *
         **/
        private _tag;
        /**
         * Creates the row of data. Optionally sets the array of data
         **/
        constructor(data?: Array<any>);
        /**
         * Gets the data as an array of specified positions. Undefined positions will be set to null
         **/
        getDataArray(columns: number): Array<any>;
        /**
         * Gets a value indicating if there is a value at the specified index
         **/
        hasValueAt(index: number): boolean;
        /**
         * Gets or sets a value indicating if the row is read-only
         **/
        /**
        * Gets or sets a value indicating if the row is read-only
        **/
        readOnly: boolean;
        /**
         * Gets or sets the value at the specified position
         **/
        /**
        * Gets or sets the value at the specified position
        **/
        tag: any;
        /**
         * Gets or sets the value at the specified position
         **/
        getValueAt(index: number): any;
        /**
         * Gets or sets the value at the specified position
         **/
        setValueAt(index: number, value: any): void;
    }
}
declare module latte {
    interface MessageSucceededCallback {
        (data: any): void;
        (): void;
    }
    /**
     * Sends messages to objects on server.
     * <example>
     * // ( 1 )
     * // Execute method Person::computeAge() on person with id 1
     * var m1 = new Message('Person', 'computeAge', {}, 1);
     *
     * m1.send(function(){
     *   // Log result of computeAge()
     *   log(this.data);
     * });
     *
     * // ( 2 )
     * // Execute *static* method Person::count()
     * var m2 = new Message('Person', 'count');
     *
     * m2.send(function(){
     *   // Log result of count()
     *   log(this.data);
     * });
     *
     * </example>
     *
     * @class
     */
    class Message {
        static log: Message[];
        /**
         * Holds the current amount of seconds to execute next retry
         **/
        private static _retryCountdown;
        /**
         * Pointer to message who is leading the retry mechanism
         **/
        private static _retryLeader;
        /**
         * Holds the time of last retry
         **/
        private static _retryTime;
        /**
         * Pointer to timer who executes retry
         **/
        private static _retryTimer;
        /**
         * Path where requests are made
         */
        static readonly pathToRequest: string;
        /**
         * Directly sends an array of calls
         * @param calls
         * @returns {latte.Message}
         */
        static sendCalls(calls: ICall[], callback?: () => void): Message;
        /**
         * Assign a function to this property to be executed on global fail. Its executed on the context of the failed message
         **/
        static globalFailed: Function;
        /**
         * Property field
         */
        private static _networkAvailable;
        /**
         * Gets or sets a value indicating if the Network is currently available
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets a value indicating if the Network is currently available
        *
        * @param {boolean} value
        */
        static networkAvailable: boolean;
        /**
         * Back field for event
         */
        private static _networkAvailableChanged;
        /**
         * Gets an event raised when the value of the networkAvailable property changes
         *
         * @returns {LatteEvent}
         */
        static readonly networkAvailableChanged: LatteEvent;
        /**
         * Raises the <c>networkAvailable</c> event
         */
        static onNetworkAvailableChanged(): void;
        /**
         *
         **/
        private _loaderText;
        /**
         *
         **/
        private _working;
        /**
         *
         */
        private _calls;
        /**
         *
         */
        critical: boolean;
        /**
         * Complete response of message
         **/
        response: string;
        /**
         * Executed when message response arrives, before parsing it
         **/
        _responseArrived: LatteEvent;
        /**
         * Executed when message is sent
         **/
        _sent: LatteEvent;
        /**
         * Executed when message arrives with error
         **/
        _failed: LatteEvent;
        /**
         * Executed when the network has failed
         **/
        _networkFailed: LatteEvent;
        /**
         * Creates the message with the specified call
         **/
        constructor(moduleName?: string, className?: string, method?: string, methodArgs?: any, id?: number);
        /**
         * Adds calls to the calls array
         * @param calls
         */
        addCalls(calls: ICall[]): void;
        /**
         * Reacts to data arrived
         **/
        dataArrived(data: string): void;
        /**
         * Raises the failed event
         **/
        onFailed(errorDescription: string): void;
        /**
         * Raises the networkFailed event
         **/
        onNetworkFailed(): void;
        /**
         * Raises the responseArrived event
         **/
        onResponseArrived(): void;
        /**
         * Raises the <c>sent</c> event
         **/
        onSent(): void;
        /**
         * Sends the message. Optionally adds event handlers for <c>succeeded</c> and <c>failed</c> events
         **/
        send(success?: (data: any) => any, failure?: (errorDesc: string) => any): Message;
        /**
         * Gets a value indcating if the message is in progress
         **/
        working(): boolean;
        /**
         * Gets the calls this message will make
         *
         * @returns {Array<RemoteCall>}
         */
        readonly calls: ICall[];
        /**
         * Gets an event raised when the message fails by network issues or server issues
         * @returns {LatteEvent}
         */
        readonly failed: LatteEvent;
        /**
         * Gets an event raised when the network fails
         * @returns {LatteEvent}
         */
        readonly networkFailed: LatteEvent;
        /**
         * Gets an event raised when the response arrives
         * @returns {LatteEvent}
         */
        readonly responseArrived: LatteEvent;
        /**
         * Gets an event raised when the message is sent
         * @returns {LatteEvent}
         */
        readonly sent: LatteEvent;
    }
}
declare module latte {
    /**
     * Represents a call to a remote procedure
     */
    class RemoteCall<T> implements ICall {
        private _className;
        private _method;
        private _id;
        private _params;
        private _returns;
        private _beforeSuccess;
        private _success;
        private _failure;
        private _response;
        /**
         * Creates the procedure with optional parameters
         * @param moduleName
         * @param className
         * @param method
         * @param params
         * @param id
         * @param returns
         */
        constructor(moduleName?: string, className?: string, method?: string, params?: any, id?: number, returns?: T);
        /**
         * Gets the marshalled call
         */
        marshall(): IDataRemoteCall;
        /**
         * Raises the <c>failure</c> event
         */
        onFailure(errorDescription: string, errorCode: string): void;
        onBeforeSuccess(data: T): void;
        /**
         * Raises the <c>success</c> event
         * @param data
         */
        onSuccess(data: T): void;
        /**
         * Reports a response from server to the call
         *
         * @param responseData
         */
        respond(responseData: IRemoteResponse): void;
        /**
         * Creates a Message object and sends the call, additionally handlers for success and failure may be added.
         */
        send(success?: (data: T) => void, failure?: (errorDescription: string) => void): Message;
        /**
         * Creates a Message object and sends the call, showing a loader with the specified text
         * @param loaderText
         * @param success
         * @param failure
         */
        sendWithLoader(loaderText: string, success?: (data: T) => void, failure?: () => void): Message;
        /**
         * Gets a string representation of the call
         * @returns {*|string}
         */
        toString(): string;
        /**
         * Adds handlers for success and/or failure and returns the call object
         * @param success
         * @param failure
         * @returns {latte.RemoteCall}
         */
        withHandlers(success?: (data: T) => void, failure?: (errorDescription: string) => void): RemoteCall<any>;
        /**
         * Gets or sets the name of the class where the procedure is located
         * @returns {string}
         */
        /**
        * Gets or sets the name of the class where the procedure is located
        * @param value
        */
        className: string;
        /**
         * Gets or sets the name of the remote procedure to be called
         * @returns {string}
         */
        /**
        * Gets or sets the name of the remote procedure to be called
        * @param value
        */
        method: string;
        /**
         * Gets an event raised when the call fails
         * @returns {LatteEvent}
         */
        readonly failure: LatteEvent;
        /**
         * Property field
         */
        private _something;
        /**
         * Gets or sets something
         *
         * @returns {string}
         */
        /**
        * Gets or sets something
        *
        * @param {string} value
        */
        something: string;
        /**
         * Property field
         */
        private _moduleName;
        /**
         * Gets or sets the module name
         *
         * @returns {string}
         */
        /**
        * Gets or sets the module name
        *
        * @param {string} value
        */
        moduleName: string;
        /**
         * Gets or sets the id of the object instance where procedure should be called
         * @returns {number}
         */
        /**
        * Gets or sets the id of the object instance where procedure should be called
        * @param value
        */
        id: number;
        /**
         * Gets or sets an object representing the parameters to use when calling the remote procedure
         * @returns {*}
         */
        /**
        * Gets or sets an object representing the parameters to use when calling the remote procedure
        * @param value
        */
        params: any;
        /**
         * Gets or sets the response of the message
         *
         * @returns {RemoteResponse}
         */
        /**
        * Gets or sets the response of the message
        *
        * @param value
        */
        response: RemoteResponse<T>;
        /**
         * Gets or sets the type of data returned by the remote procedure
         * @param value
         */
        /**
        * Gets or sets the type of data returned by the remote procedure
        * @param value
        */
        returns: T;
        /**
         * Gets an event raised when message arrives successfully
         */
        readonly success: LatteEvent;
        /**
         * Gets an event raised when message arrives successfully
         */
        readonly beforeSuccess: LatteEvent;
    }
}
declare module latte {
    /**
     * Represents a column of data for <c>DataSet</c>
     **/
    class DataSetColumn {
        /**
         *
         **/
        private _length;
        /**
         *
         **/
        private _name;
        /**
         *
         **/
        private _options;
        /**
         *
         **/
        private _tag;
        /**
         *
         **/
        private _type;
        /**
         * Raised when <c>options</c> value is changed.
         **/
        optionsChanged: LatteEvent;
        /**
         * Creates the column.
         Optionally specifies its name, type and length.
         **/
        constructor(name?: string, type?: string, length?: number);
        /**
         * Gets or sets the length of the column values.
         **/
        /**
        * Gets or sets the length of the column values.
        **/
        length: number;
        /**
         * Gets or sets the name of the column.
         **/
        /**
        * Gets or sets the name of the column.
        **/
        name: string;
        /**
         * Raises the <c>optionsChanged</c> event.
         **/
        onOptionsChanged(): void;
        /**
         * Gets or sets the options of the column.
         **/
        /**
        * Gets or sets the options of the column.
        **/
        options: any;
        /**
         * Gets or sets a generic tag value for the object
         **/
        /**
        * Gets or sets a generic tag value for the object
        **/
        tag: any;
        /**
         * Gets or sets the type of the column values.
         **/
        /**
        * Gets or sets the type of the column values.
        **/
        type: string;
    }
}
declare module latte {
    /**
     *
     */
    class RemoteResponse<T> {
        private _call;
        private _response;
        private _errorCode;
        private _errorDescription;
        private _success;
        private _data;
        /**
         * Creates the response
         * @param call
         * @param responseText
         */
        constructor(call: RemoteCall<T>, response: IRemoteResponse);
        /**
         * Unpacks the response text to indicate attributes
         */
        private unmarshall;
        /**
         * Gets the call who originated this response
         * @returns {RemoteCall}
         */
        readonly call: RemoteCall<T>;
        /**
         * Gets the error code returned (if any)
         * @returns {number}
         */
        readonly errorCode: number;
        /**
         * Gets the error description returned (if any)
         * @returns {string}
         */
        readonly errorDescription: string;
        /**
         * Property field
         */
        private _logs;
        /**
         * Gets or sets the logs array in response
         *
         * @returns {Array<string>}
         */
        /**
        * Gets or sets the logs array in response
        *
        * @param {Array<string>} value
        */
        logs: Array<string>;
        /**
         * Gets the literal response from server
         * @returns {string}
         */
        readonly response: IRemoteResponse;
        /**
         * Gets
         * @returns {T}
         */
        readonly data: T;
        /**
         * Gets a value indicating if the call was a success
         * @returns {boolean}
         */
        readonly success: boolean;
        /**
         * Property field
         */
        private _warnings;
        /**
         * Gets or sets
         *
         * @returns {Array<string>}
         */
        /**
        * Gets or sets
        *
        * @param {Array<string>} value
        */
        warnings: Array<string>;
    }
}
declare module latte {
    /**
     * Binds two values bi-directionally
     */
    class ValueDataBind {
        /**
         * Creates the bi-directional bind
         */
        constructor(a: DataBindActor, b: DataBindActor);
        /**
         * Uninstall the
         */
        uninstall(): void;
        /**
         * Property field
         */
        private _actorA;
        /**
         * Gets the A actor
         *
         * @returns {DataBindActor}
         */
        readonly actorA: DataBindActor;
        /**
         * Property field
         */
        private _actorB;
        /**
         * Gets the B actor
         *
         * @returns {DataBindActor}
         */
        readonly actorB: DataBindActor;
        /**
         * Property field
         */
        private _bindA;
        /**
         * Gets the A bind
         *
         * @returns {ValueSingleDataBind}
         */
        readonly bindA: ValueSingleDataBind;
        /**
         * Property field
         */
        private _bindB;
        /**
         * Gets the B Bind
         *
         * @returns {ValueSingleDataBind}
         */
        readonly bindB: ValueSingleDataBind;
    }
}
declare module latte {
    interface DataRecordArrayCallback {
        (records: Array<DataRecord>): void;
    }
    interface DataRecordCallback {
        (record: DataRecord): void;
    }
    interface VoidCallback {
        (): any;
    }
    /**
     * Represents a DataRecord on App
     **/
    class DataRecord {
        /**
         * Pointer to the default namespace where records are stored, used by <c>fromServerObject</c> method for selecting records.
         **/
        static _defaultRecordsNamespace: Object;
        /**
         * Name of object where records are stored
         */
        static recordsNamespaceName: string;
        /**
         * Scans the passed Object and converts available packed records to latte.DataRecord
         instances
         **/
        static scanAndConvert(obj: any): any;
        /**
         * Sets the default records namespace, and injects common code into records.
         **/
        static setDefaultRecordsNamespace(namespace: Object): void;
        /**
         * Creates a record from the specified name and id. If no id is specified, empty record will arrive.
         **/
        static fromName(name: string, id: number, callback: DataRecordCallback): Message;
        /**
         * Converts a server given Object to a Record of the specified type, if no type specified <c>DataRecord</c> will be used.
         **/
        static fromServerObject(obj: any, classType?: Function): DataRecord;
        /**
         * Converts a server given array of Object to a Records array
         **/
        static fromServerObjects(array: Array<Object>, classType?: Function): Array<DataRecord>;
        /**
         * Returns a value indicating if the passed Object
         is a packed Object
         **/
        static isPackedRecord(object: any): boolean;
        /**
         * Serializes the native value
         * @param value
         * @param nativeType
         * @returns {any}
         */
        static serializeNativeValue(value: any, nativeType: string): string;
        /**
         * Unserializes the native value
         * @param value
         * @param nativeType
         */
        static unserializeNativeValue(value: string, nativeType: string): any;
        private _binds;
        /**
         *
         **/
        _recordType: string;
        /**
         *
         **/
        private _tag;
        /**
         * Arbitrary collection of tags
         */
        tags: any;
        /**
         * Metadata of record. Comes from server.
         **/
        metadata: IEntityMeta;
        /**
         * Creates the record
         **/
        constructor();
        /**
         * Adds a bind to a property
         * @param {string} property
         * @param {any} target
         * @param {string} targetProperty
         * @param {any} type
         *
         */
        addBind(property: string, target: any, targetProperty: string, type?: string | BindValueType): ValueDataBind;
        /**
         * Clears all the binds of the element
         */
        clearBinds(): void;
        /**
         * Copies the data
         * @param r
         */
        copyFieldsDataFrom(r: DataRecord): void;
        /**
         * Gets the fields of the record, with values
         **/
        getFields(): Object;
        /**
         * Can be overriden to return dynamically generated metadata
         **/
        getMetadata(): IEntityMeta;
        /**
         * Gets the fields of the record, with values serialized.
         */
        getSerializedFields(): Object;
        /**
         * Sends an insert message to the server
         **/
        insert(callback: VoidCallback): latte.Message;
        /**
         * Gets the remote call for insertion
         *
         * @returns {latte.RemoteCall}
         */
        insertCall(): RemoteCall<string>;
        /**
         * Returns a value indicating if the record is inserted, based on the existence of id
         **/
        inserted(): boolean;
        /**
         * Raises the <c>fieldValueChanged</c> event
         */
        onFieldValueChanged(field: string, value: any): void;
        /**
         * Raises the <c>formCreating</c> event
         */
        onFormCreating(dataRecordFormItem: any): void;
        /**
         * Raises the <c>formCreated</c> event
         */
        onFormCreated(dataRecordFormItem: any): void;
        /**
         * Gets the fields of the record with its data.
         */
        onGetFields(): any;
        /**
         *  Gets a dictionary with the TypeScript type of each property
         * @returns {any}
         */
        onGetFieldTypes(): any;
        /**
         * Gets the name of the id field
         * @returns {undefined}
         */
        onGetRecordIdName(): string;
        /**
         * Raises the <c>recordId</c> event
         */
        onRecordIdChanged(): void;
        /**
         * Sends a DELETE request to the server
         **/
        remove(callback?: () => any): Message;
        /**
         * Removes binds of the specified target
         * @param target
         */
        removeBindsOf(target: any): void;
        /**
         * Gets the call for removing this record
         * @returns {latte.RemoteCall}
         */
        removeCall(): RemoteCall<boolean>;
        /**
         * Inserts or updates the record
         **/
        save(callback?: VoidCallback): latte.Message;
        /**
         * Gets the insert or update call for record
         */
        saveCall(): RemoteCall<any>;
        /**
         * Represents the person as a string
         * @returns {string}
         */
        toString(): string;
        /**
         * Sends an update message to the record
         **/
        update(callback: VoidCallback): Message;
        /**
         * Gets the call for updating the record
         *
         * @returns {latte.RemoteCall<string>}
         */
        updateCall(): RemoteCall<string>;
        /**
         * Back field for event
         */
        private _formCreating;
        /**
         * Gets an event raised when a DataRecordFormItem about the record is being created
         *
         * @returns {LatteEvent}
         */
        readonly formCreating: LatteEvent;
        /**
         * Back field for event
         */
        private _formCreated;
        /**
         * Gets an event raised when a DataRecordFormItem about the record has been created
         *
         * @returns {LatteEvent}
         */
        readonly formCreated: LatteEvent;
        /**
         * Back field for event
         */
        private _fieldValueChanged;
        /**
         * Gets an event raised when the value of a field is changed
         *
         * @returns {LatteEvent}
         */
        readonly fieldValueChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _recordIdChanged;
        /**
         * Gets an event raised when the value of the recordId property changes
         *
         * @returns {LatteEvent}
         */
        readonly recordIdChanged: LatteEvent;
        /**
         * Property field
         */
        _moduleName: string;
        /**
         * Gets or sets the name of the module where record is contained
         *
         * @returns {string}
         */
        /**
        * Gets or sets the name of the module where record is contained
        *
        * @param {string} value
        */
        moduleName: string;
        /**
         * Property field
         */
        private _recordId;
        /**
         * Gets or sets the record id
         *
         * @returns {number}
         */
        /**
        * Gets or sets the record id
        *
        * @param {number} value
        */
        recordId: number;
        /**
         * Gets or sets the record type
         **/
        /**
        * Gets or sets the record type
        **/
        recordType: string;
        /**
         * Gets or sets an arbitrary value for the record
         **/
        /**
        * Gets or sets an arbitrary value for the record
        **/
        tag: string;
    }
}
declare module latte {
    /**
     * Binds one source to
     */
    class ValueSingleDataBind {
        lastHandleApplied: () => void;
        /**
         * Creates the bind
         */
        constructor(sourceActor: DataBindActor, targetActor: DataBindActor);
        /**
         * Updates the target's value
         */
        apply(): void;
        /**
         * Installs the bind
         */
        install(): void;
        /**
         * Raises the <c>applied</c> event
         */
        onApplied(): void;
        /**
         * Raises the <c>willApply</c> event
         */
        onWillApply(): void;
        /**
         * Uninstalls the bind
         */
        uninstall(): void;
        /**
         * Back field for event
         */
        private _applied;
        /**
         * Gets an event raised when the value has been applied to the target
         *
         * @returns {LatteEvent}
         */
        readonly applied: LatteEvent;
        /**
         * Back field for event
         */
        private _willApply;
        /**
         * Gets an event raised when the bind will apply the value
         *
         * @returns {LatteEvent}
         */
        readonly willApply: LatteEvent;
        /**
         * Property field
         */
        private _sourceActor;
        /**
         * Gets the source actor data
         *
         * @returns {DataBindActor}
         */
        readonly sourceActor: DataBindActor;
        /**
         * Property field
         */
        private _skipNextApply;
        /**
         * Gets or sets a value indicating if the next apply should be ignored
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets a value indicating if the next apply should be ignored
        *
        * @param {boolean} value
        */
        skipNextApply: boolean;
        /**
         * Property field
         */
        private _targetActor;
        /**
         * Gets the target actor data
         *
         * @returns {DataBindActor}
         */
        readonly targetActor: DataBindActor;
    }
}
