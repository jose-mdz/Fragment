/// <reference path="datalatte.d.ts" />
/// <reference path="jquery.d.ts" />
/// <reference path="latte.d.ts" />
/// <reference path="latte.data.d.ts" />
/// <reference path="latte.data.strings.d.ts" />
/// <reference path="latte.strings.d.ts" />
/// <reference path="latte.ui.d.ts" />
/// <reference path="latte.ui.strings.d.ts" />
/**
 * Created by josemanuel on 5/2/16.
 */
declare module latte {
    /**
     *
     */
    interface IDataRecordCustomForm {
        onFormCreated?(form: DataRecordFormItem): any;
        onFormCreating?(form: DataRecordFormItem): any;
    }
}
/**
 * Created by josemanuel on 5/2/16.
 */
declare module latte {
    /**
     *
     */
    interface IDataRecordCustomView {
        onViewCreated?(view: View): any;
        onViewCreating?(view: View): any;
    }
}
declare module latte {
    /**
     * Creates a form for a specific <c>DataRecord</c>
     **/
    class MetaFormItem extends FormItem implements ISave {
        /**
         * Creates the form of the specified record
         **/
        constructor(source?: any, metadata?: IEntityMeta, updater?: () => IEntityMeta);
        /**
         * Loads the record
         *
         * @param record
         */
        private loadMetadata;
        /**
         * Adds the specified input
         * @param {string} name
         * @param {latte.IInput} field
         * @returns {latte.ICall}
         */
        protected addInput(name: string, field: IInput): ICall;
        /**
         * Handles the load of a Record
         * @param {latte.IInput} field
         * @param {latte.DataRecordValueItem} d
         * @returns {latte.ICall}
         */
        protected handleRecordInput(field: IInput, input: InputItem, value: any): ICall;
        /**
         * Updates the findings that may change the read-only value
         * @param {latte.InputItem} input
         * @param {string} name
         */
        protected updateFieldReadOnlyFindings(input: InputItem, name: string): void;
        /**
         * Updates the visibility of the field
         * @param {string} name
         * @param {latte.IInput} field
         * @param {latte.DataRecord} record
         * @param value
         */
        protected updateFieldVisibility(field: IInput, input: InputItem, value: any): void;
        /**
         * Resolves a boolean in function of many criteria
         * @param {latte.IInput} field
         * @param {latte.InputItem} input
         * @param value
         */
        protected resolveBoolean(resolver: InputResolvedBoolean, field: IInput, input: InputItem, value: any): boolean;
        /**
         * Applies the values on form to the record. Optionally specifies which record
         is supposed to receive the values
         **/
        applyValues(record?: any): void;
        /**
         * Raises the <c>category</c> event
         */
        onCategoryChanged(): void;
        /**
         * Raises the <c>formUpdated</c> event
         */
        onFormUpdated(): void;
        /**
         * Raises the <c>loadedMetadata</c> event
         */
        onLoadedMetadata(): void;
        /**
         * Raises the <c>loadedRecordProperty</c> event
         */
        onLoadedRecordProperty(propertyName: string): void;
        /**
         * Raises the <c>metadata</c> event
         */
        onMetadataChanged(): void;
        /**
         * Override.
         */
        onReadOnlyChanged(): void;
        /**
         * Raises the <c>source</c> event
         */
        onSourceChanged(): void;
        /**
         * Updates the inputs of the form based on the criteria of metadata
         */
        updateForm(): void;
        /**
         * Back field for event
         */
        private _categoryChanged;
        /**
         * Gets an event raised when the value of the category property changes
         *
         * @returns {LatteEvent}
         */
        readonly categoryChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _formUpdated;
        /**
         * Gets an event raised when the form is updated
         *
         * @returns {LatteEvent}
         */
        readonly formUpdated: LatteEvent;
        /**
         * Back field for event
         */
        private _loadedMetadata;
        /**
         * Gets an event raised when metadata has been fully loaded
         *
         * @returns {LatteEvent}
         */
        readonly loadedMetadata: LatteEvent;
        /**
         * Back field for event
         */
        private _loadedRecordProperty;
        /**
         * Gets an event raised when a property of type record has been loaded
         *
         * @returns {LatteEvent}
         */
        readonly loadedRecordProperty: LatteEvent;
        /**
         * Back field for event
         */
        private _metadataChanged;
        /**
         * Gets an event raised when the value of the metadata property changes
         *
         * @returns {LatteEvent}
         */
        readonly metadataChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _sourceChanged;
        /**
         * Gets an event raised when the value of the source property changes
         *
         * @returns {LatteEvent}
         */
        readonly sourceChanged: LatteEvent;
        /**
         * Property field
         */
        private _category;
        /**
         * Gets or sets the category of fields to show
         *
         * @returns {string}
         */
        /**
        * Gets or sets the category of fields to show
        *
        * @param {string} value
        */
        category: string;
        /**
         * Property field
         */
        private _metadata;
        /**
         * Gets or sets the metadata to load
         *
         * @returns {IEntityMeta}
         */
        /**
        * Gets or sets the metadata to load
        *
        * @param {IEntityMeta} value
        */
        metadata: IEntityMeta;
        /**
         * Property field
         */
        private _source;
        /**
         * Gets or sets the source object of the metadata
         *
         * @returns {any}
         */
        /**
        * Gets or sets the source object of the metadata
        *
        * @param {any} value
        */
        source: any;
        /**
         * Property field
         */
        private _updater;
        /**
         * Gets or sets the updater of metadata
         *
         * @returns {() => IEntityMeta}
         */
        /**
        * Gets or sets the updater of metadata
        *
        * @param {() => IEntityMeta} value
        */
        updater: () => IEntityMeta;
    }
}
declare module latte {
    /**
     * Renders a grid that allows data manipulation
     **/
    class GridView extends View {
        /**
         *
         **/
        private _actionCommit;
        /**
         *
         **/
        private _actionCopyCellValue;
        /**
         *
         **/
        private _actionPasteCellValue;
        /**
         * Convert to PUBLIC
         **/
        _actionRemoveRow: Action;
        /**
         *
         **/
        private _actionRollback;
        /**
         *
         **/
        private _actionSetCellNull;
        /**
         *
         **/
        private _allowChangeRows;
        /**
         *
         **/
        private _allowDeleteRows;
        /**
         *
         **/
        private _allowNewRows;
        /**
         *
         **/
        private _editingTd;
        /**
         *
         **/
        private _readOnly;
        /**
         *
         **/
        private _tdAll;
        /**
         *
         **/
        private _trColumns;
        /**
         * Columns of the grid view
         **/
        columns: Collection<GridViewColumn>;
        /**
         * Rows of data of the grid
         **/
        rows: Collection<GridViewRow>;
        /**
         * Holds the Table element where the grid lives
         **/
        table: JQuery;
        /**
         * Raised after <c>rowsAdded</c>, <c>rowsChanged</c>, <c>rowsRemoved</c> are raised originated by calling <c>commit()</c>
         **/
        committed: LatteEvent;
        /**
         * Raised when the value of a cell changed
         The object passed has the attribubtes:
         <example>
         {
           column:   number,
           row:      number,
           value:    string,
           oldValue: string
         }
         </exapmle>
         **/
        valueChanged: LatteEvent;
        /**
         * Raised when new rows are added to the grid and confirmed by the user.
         The object passed to the event is a <c>DataSet</c> with the new rows
         **/
        rowsAdded: LatteEvent;
        /**
         * Raised when changed rows where changed, and confirmed by the user.
         The object passed to the event is a <c>DataSet</c> with the changed rows
         **/
        rowsChanged: LatteEvent;
        /**
         * Raised when rows are removed from the grid and confirmed by the user.
         The object passed to the event is a <c>DataSet</c> with the deleted rows
         **/
        rowsRemoved: LatteEvent;
        /**
         * Creates the GridView
         **/
        constructor();
        /**
         *
         **/
        private _addInsertRow;
        /**
         *
         **/
        private _createCell;
        /**
         *
         **/
        private _createRow;
        /**
         *
         **/
        private _makeInsertRowCandidate;
        /**
         *
         **/
        private _onAddColumn;
        /**
         *
         **/
        private _onAddRow;
        /**
         *
         **/
        private _onRemoveColumn;
        /**
         *
         **/
        private _onRemoveRow;
        /**
         *
         **/
        private _removeInsertRow;
        /**
         *
         **/
        private _selectColumnHeader;
        /**
         *
         **/
        private _selectRowHeader;
        /**
         *
         **/
        private _transactionEnd;
        /**
         *
         **/
        private _transactionStart;
        /**
         *
         **/
        private _updateRowIndexes;
        /**
         * Gets a value indicating if the cell at the specified position can be edited.
         **/
        canEditCellAt(columnIndex: number, rowIndex: number): boolean;
        /**
         * Clears selection of cells.
         **/
        clearSelection(): void;
        /**
         * Commits the current transaction of rows added, changed and deleted.
         Events <c>rowsAdded</c>, <c>rowsChanged</c>, <c>rowsRemoved</c> are raised accordingly.
         **/
        commit(): void;
        /**
         * Commits the current transaction of rows added.
         LatteEvent <c>rowsAdded</c> is raised.
         **/
        commitAddedRows(): void;
        /**
         * Commits the current transaction of rows changed.
         LatteEvent <c>rowsChanged</c> is raised.
         **/
        commitChangedRows(): void;
        /**
         * Commits the current transaction of rows deleted.
         LatteEvent <c>rowsDeleted</c> is raised.
         **/
        commitDeletedRows(): void;
        /**
         * Confirms the commit of added rows
         **/
        confirmRowsAdded(): void;
        /**
         * Confirms the commit of changed rows
         **/
        confirmRowsChanged(): void;
        /**
         * Confirms the commit of delete rows
         **/
        confirmRowsRemoved(): void;
        /**
         * Enables the user a mechanism for copying the value of the cell to clipboard
         **/
        copySelectedCellValue(): void;
        /**
         * Marks the row at the specified position for deletion
         **/
        deleteRowAt(rowIndex: number): void;
        /**
         * Starts the edition mode of the cell at the specified row and column.
         **/
        editCellAt(columnIndex: number, rowIndex: number): void;
        /**
         * Starts the edition mode of the next cell on the grid, if already in edition mode.
         **/
        editNextCell(): void;
        /**
         * Starts the edition mode of the previous cell on the grid, if already in edition mode.
         **/
        editPreviousCell(): void;
        /**
         * Ends the edition mode of the current editing cell. Optionally cancells edition by returning value to its original state.
         **/
        endCellEdit(cancelled?: boolean): void;
        /**
         * Gets the actual element of the cell at specified column and row.
         **/
        getCellElementAt(columnIndex: number, rowIndex: number): JQuery;
        /**
         *
         **/
        getData(): DataSet;
        /**
         * Gets the actual element of the row at specified column and row.
         **/
        getRowElementAt(rowIndex: number): JQuery;
        /**
         * Gets the data value at the specified position.
         **/
        getValueAt(columnIndex: number, rowIndex: number): any;
        /**
         * Gets a value indicating if the there is a cell for the specified position
         **/
        hasCellAt(columnIndex: number, rowIndex: number): boolean;
        /**
         * Gets a value indicating if there is a value at the specified position.
         **/
        hasValueAt(columnIndex: number, rowIndex: number): boolean;
        /**
         * Raises the <c>committed</c> event
         **/
        onCommitted(): void;
        /**
         * Raises the <c>contextItemsShow</c> event.
         **/
        onContextItemsShow(): void;
        /**
         * Raises the <c>rowsAdded</c> event.
         **/
        onRowsAdded(dataset: DataSet): void;
        /**
         * Raises the <c>rowsChanged</c> event.
         **/
        onRowsChanged(dataset: DataSet, oldDataset?: DataSet): void;
        /**
         * Raises the <c>rowsDeleted</c> event.
         **/
        onRowsRemoved(dataset: DataSet): void;
        /**
         * Raises the <c>valueChanged</c> event.
         **/
        onValueChanged(columnIndex: number, rowIndex: number, value: any, oldValue: any): void;
        /**
         * Gets or sets the original value of the specified position.
         If no changes have occoured, it will return <c>undefined</c>
         **/
        originalValue(columnIndex: number, rowIndex: number, value?: any): any;
        /**
         * Restores the original value at the specified position if possible.
         **/
        restoreValueAt(columnIndex: number, rowIndex: number): void;
        /**
         * Cancels the current transaction of rows added, changed and deleted.
         **/
        rollback(): void;
        /**
         * Selects the cell at the specified position.
         **/
        selectCellAt(columnIndex: number, rowIndex: number): void;
        /**
         *
         **/
        setData(value: DataSet): void;
        /**
         * Sets the data value at the specified position.
         Optionally specifies if the <c>valueChanged</c> should be raised
         **/
        setValueAt(columnIndex: number, rowIndex: number, value: any, raiseEvent?: boolean): void;
        /**
         * Gets or sets a value indicating if the user is allowed to change values on rows
         **/
        /**
        * Gets or sets a value indicating if the user is allowed to change values on rows
        **/
        allowChangeRows: boolean;
        /**
         * Gets or sets a value indicating if the user is allowed to delete rows
         **/
        /**
        * Gets or sets a value indicating if the user is allowed to delete rows
        **/
        allowDeleteRows: boolean;
        /**
         * Gets or sets a value indicating if the user is allowed to create new rows
         **/
        /**
        * Gets or sets a value indicating if the user is allowed to create new rows
        **/
        allowNewRows: boolean;
        /**
         * Gets or sets the data on grid as a DataSet
         **/
        /**
        * Gets or sets the data on grid as a DataSet
        **/
        data: DataSet;
        /**
         * Gets a value indicating if some cell of the grid is currently on edit mode
         **/
        readonly editing: boolean;
        /**
         * Gets or sets a value indicating if the whole grid should be read-only.
         **/
        /**
        * Gets or sets a value indicating if the whole grid should be read-only.
        **/
        readOnly: boolean;
        /**
         * Gets or sets the selected cell of grid
         **/
        /**
        * Gets or sets the selected cell of grid
        **/
        selectedCell: JQuery;
    }
}
/**
 * Created by josemanuel on 8/8/14.
 */
declare module latte {
    /**
     *
     */
    class ExplorerItem {
        /**
         * Creates the explorer item
         */
        constructor();
        /**
         * Creates a tree item for the record
         */
        createTreeItem(): TreeItem;
        /**
         * Creates a list view item for the record
         */
        createListViewItem(): ListViewItem;
        /**
         * Gets a value indicating if the item may be deleted
         *
         * @returns {boolean}
         */
        getCanBeDeleted(): boolean;
        /**
         * Gets the column headers of the item
         * @returns {Array}
         */
        getColumnHeaders(): ColumnHeader[];
        /**
         * Gets the name of the columns that go in the lists
         * This are names of fields, described in metadata of record.
         */
        getColumns(): string[];
        /**
         * Loads the children of the item
         */
        getChildrenLoader(): RemoteCall<any>;
        /**
         * Gets the view who renders children. Return null to use the standard ListView
         */
        getChildrenView(): ExplorerChildrenView;
        /**
         * Gets the detail view of the item
         *
         * @returns {latte.DataRecordFormItem}
         */
        getDetailView(): View;
        /**
         * Gets the items of the options of detail view
         * @Override
         */
        getDetailViewOptions(): Item[];
        /**
         * Gets the actions of the button
         *
         * @returns {Array}
         */
        getItems(): Item[];
        /**
         * Gets the actions that apply for child items
         *
         * @returns {Array}
         */
        getChildrenItems(): Item[];
        /**
         * Gets the icon of 16 pixels
         *
         * @returns {IconItem}
         */
        getIcon(): IconItem;
        /**
         * Gets the icon of 32 pixels
         *
         * @returns {IconItem}
         */
        getIcon32(): IconItem;
        /**
         * Gets the name for the item
         *
         * @returns {string}
         */
        getName(): string;
        /**
         * Loads children if necessary.
         * Checks <c>loadsChildren</c> and <c>childrenLoaded</c> flags to avoid re-loading.
         */
        loadChildren(callback?: () => void): void;
        /**
         * Raises the <c>childAdded</c> event
         */
        onChildAdded(item: ExplorerItem): void;
        /**
         * Raises the <c>childrenPages</c> event
         */
        onChildrenPagesChanged(): void;
        /**
         * Raises the <c>childRemoved</c> event
         */
        onChildRemoved(item: ExplorerItem): void;
        /**
         * Raises the <c>childrenChanged</c> event
         */
        onChildrenChanged(): void;
        /**
         * Raises the <c>childrenLoadStarted</c> event
         */
        onChildrenLoadStarted(): void;
        /**
         * Raises the <c>childrenLoadEnd</c> event
         */
        onChildrenLoadEnd(): void;
        /**
         * Synchronizes UI Items to reflect possible changes
         */
        syncUI(): void;
        /**
         * Back field for event
         */
        private _childAdded;
        /**
         * Gets an event raised when a child is added
         *
         * @returns {LatteEvent}
         */
        readonly childAdded: LatteEvent;
        /**
         * Back field for event
         */
        private _childRemoved;
        /**
         * Gets an event raised when a child is removed
         *
         * @returns {LatteEvent}
         */
        readonly childRemoved: LatteEvent;
        /**
         * Back field for event
         */
        private _childrenChanged;
        /**
         * Gets an event raised when the children of the item changed
         *
         * @returns {LatteEvent}
         */
        readonly childrenChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _childrenLoadStarted;
        /**
         * Gets an event raised when the load of children starts
         *
         * @returns {LatteEvent}
         */
        readonly childrenLoadStarted: LatteEvent;
        /**
         * Back field for event
         */
        private _childrenLoadEnd;
        /**
         * Gets an event raised when the load of children ends
         *
         * @returns {LatteEvent}
         */
        readonly childrenLoadEnd: LatteEvent;
        /**
         * Field for children property
         */
        private _children;
        /**
         * Gets the collection of child items of this item
         *
         * @returns {Collection<ExplorerItem>}
         */
        readonly children: Collection<ExplorerItem>;
        /**
         * Property field
         */
        private _childrenLoaded;
        /**
         * Gets or sets a value indicating if the children is loaded
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets a value indicating if the children is loaded
        *
        * @param {boolean} value
        */
        childrenLoaded: boolean;
        /**
         * Gets a value indicating if the node needs to load children, by analyzing its state
         *
         * @returns {boolean}
         */
        readonly childrenLoadNeeded: boolean;
        /**
         * Property field
         */
        private _childrenPage;
        /**
         * Gets or sets the current page of children
         *
         * @returns {number}
         */
        /**
        * Gets or sets the current page of children
        *
        * @param {number} value
        */
        childrenPage: number;
        /**
         * Property field
         */
        private _childrenPages;
        /**
         * Gets or sets the total pages of children items
         *
         * @returns {number}
         */
        /**
        * Gets or sets the total pages of children items
        *
        * @param {number} value
        */
        childrenPages: number;
        /**
         * Back field for event
         */
        private _childrenPagesChanged;
        /**
         * Gets an event raised when the value of the childrenPages property changes
         *
         * @returns {LatteEvent}
         */
        readonly childrenPagesChanged: LatteEvent;
        /**
         * Property field
         */
        private _explorer;
        /**
         * Gets or sets the explorer view where the item lives
         *
         * @returns {ExplorerView}
         */
        /**
        * Gets or sets the explorer view where the item lives
        *
        * @param {ExplorerView} value
        */
        explorer: ExplorerView;
        /**
         * Property field
         */
        private _childrenLoading;
        /**
         * Gets a value indicating if children are being loaded
         *
         * @returns {boolean}
         */
        readonly childrenLoading: boolean;
        /**
         * Property field
         */
        private _listViewItem;
        /**
         * Gets the last created listview item
         *
         * @returns {ListViewItem}
         */
        readonly listViewItem: ListViewItem;
        /**
         * Property field
         */
        private _loadsChildren;
        /**
         * Gets or sets a flag indicating if the item may load children for sub-items
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets a flag indicating if the item may load children for sub-items
        *
        * @param {boolean} value
        */
        loadsChildren: boolean;
        /**
         * Property field
         */
        private _loadsChildrenFolders;
        /**
         * Gets or sets a value indicating if the item will load items with sub-items.
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets a value indicating if the item will load items with sub-items.
        *
        * @param {boolean} value
        */
        loadsChildrenFolders: boolean;
        /**
         * Property field
         */
        private _parent;
        /**
         * Gets the parent item of this item
         *
         * @returns {ExplorerItem}
         */
        readonly parent: ExplorerItem;
        /**
         * Property field
         */
        private _treeItem;
        /**
         * Gets the last created tree item
         *
         * @returns {TreeItem}
         */
        readonly treeItem: TreeItem;
    }
}
declare module latte {
    /**
     * Shows a dialog to edit the specified <c>DataRecord</c>
     **/
    class DataRecordDialogView extends DialogView {
        /**
         * Shows a dialog to edit the specified record
         * @param r
         * @param onSaved
         * @param title
         */
        static editRecord(r: DataRecord, onSaved?: () => any, title?: string): DataRecordDialogView;
        /**
         *
         */
        private _readOnly;
        /**
         *
         **/
        cancelButton: ButtonItem;
        /**
         *
         **/
        formView: DataRecordFormView;
        /**
         *
         **/
        saveButton: ButtonItem;
        /**
         *
         **/
        saving: LatteEvent;
        /**
         *
         **/
        saved: LatteEvent;
        /**
         *
         **/
        constructor(record?: DataRecord);
        /**
         * Raises the <c>saved</c> event
         **/
        onSaved(): void;
        /**
         * Raises the <c>saving</c> event
         **/
        onSaving(): void;
        /**
         * Gets or sets a value indicating if the form is for read-only
         **/
        /**
        * Gets or sets a value indicating if the form is for read-only
        **/
        readOnly: boolean;
        /**
         * Gets the record of the view
         *
         * @returns {DataRecord}
         */
        readonly record: DataRecord;
    }
}
declare module latte {
    /**
     * Creates a form for a specific <c>DataRecord</c>
     **/
    class DataRecordFormItemOld extends FormItem implements ISave {
        /**
         * Creates the form of the specified record
         **/
        constructor(record?: DataRecord);
        /**
         * Loads the record
         *
         * @param record
         */
        private loadRecord;
        /**
         * Adds the specified input
         * @param {string} name
         * @param {latte.IInput} field
         * @returns {latte.ICall}
         */
        private addInput;
        /**
         * Handles the load of a Record
         * @param {latte.IInput} field
         * @param {latte.DataRecordValueItem} d
         * @returns {latte.ICall}
         */
        private handleRecordInput;
        /**
         * Updates the visibility of the field
         * @param {string} name
         * @param {latte.IInput} field
         * @param {latte.DataRecord} record
         * @param value
         */
        private updateFieldVisibility;
        /**
         * Applies the values on form to the record. Optionally specifies which record
         is supposed to receive the values
         **/
        applyValues(record?: DataRecord): void;
        /**
         * Property field
         */
        private _category;
        /**
         * Gets or sets the category of fields to show
         *
         * @returns {string}
         */
        /**
        * Gets or sets the category of fields to show
        *
        * @param {string} value
        */
        category: string;
        /**
         * Override.
         */
        getSaveCalls(): ICall[];
        /**
         * Raises the <c>category</c> event
         */
        onCategoryChanged(): void;
        /**
         * Raises the <c>loadedRecordProperty</c> event
         */
        onLoadedRecordProperty(propertyName: string): void;
        /**
         * Raises the <c>record</c> event
         */
        onRecordChanged(): void;
        /**
         * Raises the <c>record</c> event
         */
        onRecordChangedOLD(): void;
        /**
         * Raises the <c>recordLoaded</c> event
         */
        onRecordLoaded(): void;
        /**
         * Back field for event
         */
        private _categoryChanged;
        /**
         * Gets an event raised when the value of the category property changes
         *
         * @returns {LatteEvent}
         */
        readonly categoryChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _loadedRecordProperty;
        /**
         * Gets an event raised when a property of type record has been loaded
         *
         * @returns {LatteEvent}
         */
        readonly loadedRecordProperty: LatteEvent;
        /**
         * Back field for event
         */
        private _recordChanged;
        /**
         * Gets an event raised when the value of the record property changes
         *
         * @returns {LatteEvent}
         */
        readonly recordChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _recordLoaded;
        /**
         * Gets an event raised when the full data of the record is loaded
         *
         * @returns {LatteEvent}
         */
        readonly recordLoaded: LatteEvent;
        /**
         * Property field
         */
        private _record;
        /**
         * Gets or sets the record of the form
         *
         * @returns {DataRecord}
         */
        /**
        * Gets or sets the record of the form
        *
        * @param {DataRecord} value
        */
        record: DataRecord;
    }
}
declare module latte {
    /**
     *
     **/
    class DataRecordFormView extends FormView {
        /**
         * Creates the form of the specified record
         **/
        constructor(record?: DataRecord);
        /**
         * Applies the values on form to the record. Optionally specifies which record
         is supposed to recieve the values
         **/
        applyValues(record?: DataRecord): void;
        /**
         * Override
         * @returns {latte.ICall[]}
         */
        getSaveCalls(): ICall[];
        printSaveStack(view: View): void;
        /**
         * Field for form property
         */
        private _dataform;
        /**
         * Gets the data record form view
         *
         * @returns {DataRecordFormItem}
         */
        readonly form: DataRecordFormItem;
        /**
         * Gets or sets the record of the form
         **/
        /**
        * Gets or sets the record of the form
        **/
        record: DataRecord;
    }
}
declare module latte {
    /**
     * Hanldles insertions, updates and deletion of <c>DataRecords</c>
     **/
    class DataRecordGridView extends GridView {
        /**
         *
         **/
        private _metadata;
        /**
         *
         **/
        _recordType: string;
        /**
         * Collection of records on the grid
         **/
        records: Collection<DataRecord>;
        /**
         *
         **/
        constructor();
        /**
         *
         **/
        private _onAddRecord;
        /**
         *
         **/
        private _onRemoveRecord;
        /**
         * Applies the values on row to the speified record
         **/
        applyValues(row: DataSetRow, record: DataRecord): void;
        /**
         * Prepares items for context item showing
         **/
        onContextItemsShow(): void;
        /**
         * Raises the <c>rowsAdded</c> event.
         **/
        onRowsAdded(dataset: DataSet): void;
        /**
         * Raises the <c>rowsChanged</c> event.
         **/
        onRowsChanged(dataset: DataSet): void;
        /**
         * Raises the <c>rowsRemoved</c> event.
         **/
        onRowsRemoved(dataset: DataSet): void;
        /**
         * Gets or sets the recordType of the grid
         **/
        /**
        * Gets or sets the recordType of the grid
        **/
        recordType: string;
    }
}
/**
 * Created by josemanuel on 10/24/14.
 */
declare module latte {
    /**
     *
     */
    class DataRecordWidget extends WidgetItem {
        /**
         *
         */
        constructor(record?: DataRecord);
        /**
         * Raises the <c>record</c> event
         */
        onRecordChanged(): void;
        /**
         * Raises the <c>saving</c> event
         */
        onSaving(): void;
        /**
         * Raises the <c>saved</c> event
         */
        onSaved(): void;
        /**
         * Back field for event
         */
        private _recordChanged;
        /**
         * Gets an event raised when the value of the record property changes
         *
         * @returns {LatteEvent}
         */
        readonly recordChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _saving;
        /**
         * Gets an event raised when the record is being saved
         *
         * @returns {LatteEvent}
         */
        readonly saving: LatteEvent;
        /**
         * Back field for event
         */
        private _saved;
        /**
         * Gets an event raised when the record is saved
         *
         * @returns {LatteEvent}
         */
        readonly saved: LatteEvent;
        /**
         * Field for form property
         */
        private _form;
        /**
         * Gets the form of the record
         *
         * @returns {DataRecordFormItem}
         */
        readonly form: DataRecordFormItem;
        /**
         * Field for btnSave property
         */
        private _btnSave;
        /**
         * Gets the save button
         *
         * @returns {ButtonItem}
         */
        readonly btnSave: ButtonItem;
        /**
         * Property field
         */
        private _record;
        /**
         * Gets or sets the record of the widget
         *
         * @returns {DataRecord}
         */
        /**
        * Gets or sets the record of the widget
        *
        * @param {DataRecord} value
        */
        record: DataRecord;
    }
}
declare module latte {
    /**
     *
     */
    class DataRecordFormItem extends MetaFormItem {
        /**
         * Creates the item
         */
        constructor(record?: DataRecord);
        /**
         * Loads the record
         *
         * @param record
         */
        protected loadRecord(): void;
        /**
         * Resolves a boolean in function of many criteria
         * @param {latte.IInput} field
         * @param {latte.InputItem} input
         * @param value
         */
        protected resolveBoolean(resolver: InputResolvedBoolean, field: IInput, input: InputItem, value: any): boolean;
        /**
         * Override.
         */
        getSaveCalls(): ICall[];
        /**
         * Raises the <c>category</c> event
         */
        onCategoryChanged(): void;
        /**
         * Override
         * @param {latte.InputItem} input
         */
        onInputAdded(input: InputItem): void;
        /**
         * Override
         */
        onLoadedMetadata(): void;
        /**
         * Raises the <c>record</c> event
         */
        onRecordChanged(): void;
        /**
         * Raises the <c>recordLoaded</c> event
         */
        onRecordLoaded(): void;
        /**
         * Back field for event
         */
        private _recordChanged;
        /**
         * Gets an event raised when the value of the record property changes
         *
         * @returns {LatteEvent}
         */
        readonly recordChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _recordLoaded;
        /**
         * Gets an event raised when the record data has been fully loaded
         *
         * @returns {LatteEvent}
         */
        readonly recordLoaded: LatteEvent;
        /**
         * Property field
         */
        private _record;
        /**
         * Gets or sets the Data Record of the item
         *
         * @returns {DataRecord}
         */
        /**
        * Gets or sets the Data Record of the item
        *
        * @param {DataRecord} value
        */
        record: DataRecord;
    }
}
declare module latte {
    /**
     * Represents a row of data on the <c>GridView</c>
     **/
    class GridViewRow extends DataSetRow {
        /**
         * Points to the row element on grid
         **/
        element: JQuery;
        /**
         * Creates the row
         **/
        constructor(data?: Array<any>);
    }
}
/**
 * Created by josemanuel on 10/25/14.
 */
declare module latte {
    /**
     * Widget for showing children of a DataRecord.
     *
     * Children are added using the <c>children</c> collection, when <c>loadChildren</c> method is called.
     */
    class DataRecordChildrenView extends ToolbarView {
        /**
         * Creates the widget
         */
        constructor(loadChildren?: () => any, childAdd?: () => any, childEdit?: () => any, childRemove?: () => any);
        /**
         * Raises the <c>childAdd</c> event
         */
        onChildrenAdd(): void;
        /**
         * Raises the <c>childEdit</c> event
         */
        onChildEdit(): void;
        /**
         * Raises the <c>childRemove</c> event
         */
        onChildRemove(): void;
        /**
         * Raises the <c>loadChildren</c> event
         */
        onLoadChildren(): void;
        /**
         * Raises the <c>record</c> event
         */
        onRecordChanged(): void;
        /**
         * Reloads children of the view
         */
        reloadChildren(): void;
        /**
         * Back field for event
         */
        private _childAdd;
        /**
         * Gets an event raised when the user asks to add a new children
         *
         * @returns {LatteEvent}
         */
        readonly childAdd: LatteEvent;
        /**
         * Back field for event
         */
        private _childEdit;
        /**
         * Gets an event raised when the user requests to edit the children
         *
         * @returns {LatteEvent}
         */
        readonly childEdit: LatteEvent;
        /**
         * Back field for event
         */
        private _childRemove;
        /**
         * Gets an event raised when the user requests to delete the children
         *
         * @returns {LatteEvent}
         */
        readonly childRemove: LatteEvent;
        /**
         * Back field for event
         */
        private _loadChildren;
        /**
         * Gets an event raised when the children must be loaded
         *
         * @returns {LatteEvent}
         */
        readonly loadChildren: LatteEvent;
        /**
         * Back field for event
         */
        private _recordChanged;
        /**
         * Gets an event raised when the value of the record property changes
         *
         * @returns {LatteEvent}
         */
        readonly recordChanged: LatteEvent;
        /**
         * Field for btnAdd property
         */
        private _btnAdd;
        /**
         * Gets the add button
         *
         * @returns {ButtonItem}
         */
        readonly btnAdd: ButtonItem;
        /**
         * Field for btnEdit property
         */
        private _btnEdit;
        /**
         * Gets the edit button
         *
         * @returns {ButtonItem}
         */
        readonly btnEdit: ButtonItem;
        /**
         * Field for btnRefresh property
         */
        private _btnRefresh;
        /**
         * Gets the refresh button
         *
         * @returns {ButtonItem}
         */
        readonly btnRefresh: ButtonItem;
        /**
         * Field for btnRemove property
         */
        private _btnRemove;
        /**
         * Gets the remove button
         *
         * @returns {ButtonItem}
         */
        readonly btnRemove: ButtonItem;
        /**
         * Field for listView property
         */
        private _listView;
        /**
         * Gets the list view of the view
         *
         * @returns {ListView}
         */
        readonly listView: ListView;
        /**
         * Field for pagination property
         */
        private _pagination;
        /**
         * Gets the pagination item
         *
         * @returns {PaginationItem}
         */
        readonly pagination: PaginationItem;
        /**
         * Gets the collection of children of the widget
         *
         * @returns {Collection<SelectableItem>}
         */
        readonly children: Collection<ListViewItem>;
        /**
         * Property field
         */
        private _record;
        /**
         * Gets or sets the record parent of the children
         *
         * @returns {DataRecord}
         */
        /**
        * Gets or sets the record parent of the children
        *
        * @param {DataRecord} value
        */
        record: DataRecord;
        /**
         * Gets the selected child of the widget
         *
         * @returns {SelectableItem}
         */
        readonly selectedChild: SelectableItem;
    }
}
/**
 * Created by josemanuel on 1/13/14.
 */
declare module latte {
    /**
     *
     */
    interface DataRecordSuggestionLoader {
        (d: DataRecordValueItem, callback: (items: Item[]) => any): Message;
    }
    /**
     * Value item for representing data records as value item.
     */
    class DataRecordValueItem extends ValueItem<number> {
        private buttonGroup;
        /**
         * Creates the value item
         * @param loader
         * @param textboxCreated
         */
        constructor(loader?: DataRecordSuggestionLoader, textboxCreated?: (t: TextboxItem) => any, placeholder?: string);
        /**
         * Override
         * @returns {string}
         */
        readonly valueString: string;
        /**
         * Override
         */
        onLayout(): void;
        /**
         * Raises the <c>record</c> event
         */
        onRecordChanged(): void;
        /**
         * Raises the <c>textboxCreated</c> event
         */
        onTextboxCreated(): void;
        /**
         * Override
         * @param value
         */
        setValue(value: any): void;
        /**
         * Sets the record without raising the valueChanged event
         */
        setRecordSilent(r: DataRecord): void;
        /**
         * Updates the item inside to show
         */
        updateItem(): void;
        /**
         * Back field for event
         */
        private _recordChanged;
        /**
         * Gets an event raised when the value of the record property changes
         *
         * @returns {LatteEvent}
         */
        readonly recordChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _textboxCreated;
        /**
         * Gets an event raised when the textbox has been created
         *
         * @returns {LatteEvent}
         */
        readonly textboxCreated: LatteEvent;
        /**
         * Property field
         */
        private _loaderFunction;
        /**
         * Gets or sets the loader function
         *
         * @returns {(text:string, callback:(items:Array<Item>) => any) => Message}
         */
        /**
        * Gets or sets the loader function
        *
        * @param {(text:string, callback:(items:Array<Item>) => any) => Message} value
        */
        loaderFunction: DataRecordSuggestionLoader;
        /**
         * Property field
         */
        private _placeholder;
        /**
         * Gets or sets the placeholder
         *
         * @returns {string}
         */
        /**
        * Gets or sets the placeholder
        *
        * @param {string} value
        */
        placeholder: string;
        /**
         * Property field
         */
        private _record;
        /**
         * Gets or sets the record of the item
         *
         * @returns {DataRecord}
         */
        /**
        * Gets or sets
        *
        * @param {DataRecord} value
        */
        record: DataRecord;
        /**
         * Property field
         */
        private _textbox;
        /**
         * Gets the textbox used to search
         *
         * @returns {TextboxItem}
         */
        readonly textbox: TextboxItem;
        /**
         * Gets the text of the textbox (if any)
         *
         * @returns {string}
         */
        readonly text: string;
    }
}
/**
 * Created by josemanuel on 10/25/14.
 */
declare module latte {
    /**
     * Widget for showing children of a DataRecord.
     *
     * Children are added using the <c>children</c> collection, when <c>loadChildren</c> method is called.
     */
    class DataRecordChildrenWidget extends WidgetItem {
        /**
         * Creates the widget
         */
        constructor(loadChildren?: () => any, childAdd?: () => any, childEdit?: () => any, childRemove?: () => any);
        /**
         * Raises the <c>childAdd</c> event
         */
        onChildrenAdd(): void;
        /**
         * Raises the <c>childEdit</c> event
         */
        onChildEdit(): void;
        /**
         * Raises the <c>childRemove</c> event
         */
        onChildRemove(): void;
        /**
         * Raises the <c>loadChildren</c> event
         */
        onLoadChildren(): void;
        /**
         * Raises the <c>record</c> event
         */
        onRecordChanged(): void;
        /**
         * Reloads children
         */
        reloadChildren(): void;
        /**
         * Back field for event
         */
        private _childAdd;
        /**
         * Gets an event raised when the user asks to add a new children
         *
         * @returns {LatteEvent}
         */
        readonly childAdd: LatteEvent;
        /**
         * Back field for event
         */
        private _childEdit;
        /**
         * Gets an event raised when the user requests to edit the children
         *
         * @returns {LatteEvent}
         */
        readonly childEdit: LatteEvent;
        /**
         * Back field for event
         */
        private _childRemove;
        /**
         * Gets an event raised when the user requests to delete the children
         *
         * @returns {LatteEvent}
         */
        readonly childRemove: LatteEvent;
        /**
         * Back field for event
         */
        private _loadChildren;
        /**
         * Gets an event raised when the children must be loaded
         *
         * @returns {LatteEvent}
         */
        readonly loadChildren: LatteEvent;
        /**
         * Back field for event
         */
        private _recordChanged;
        /**
         * Gets an event raised when the value of the record property changes
         *
         * @returns {LatteEvent}
         */
        readonly recordChanged: LatteEvent;
        /**
         * Field for btnAdd property
         */
        private _btnAdd;
        /**
         * Gets the add button
         *
         * @returns {ButtonItem}
         */
        readonly btnAdd: ButtonItem;
        /**
         * Field for btnEdit property
         */
        private _btnEdit;
        /**
         * Gets the edit button
         *
         * @returns {ButtonItem}
         */
        readonly btnEdit: ButtonItem;
        /**
         * Field for btnRefresh property
         */
        private _btnRefresh;
        /**
         * Gets the refresh button
         *
         * @returns {ButtonItem}
         */
        readonly btnRefresh: ButtonItem;
        /**
         * Field for btnRemove property
         */
        private _btnRemove;
        /**
         * Gets the remove button
         *
         * @returns {ButtonItem}
         */
        readonly btnRemove: ButtonItem;
        /**
         * Field for stackChildren property
         */
        private _stackChildren;
        /**
         * Gets the stack where children are placed
         *
         * @returns {SelectableStack}
         */
        readonly stackChildren: SelectableStack;
        /**
         * Gets the collection of children of the widget
         *
         * @returns {Collection<SelectableItem>}
         */
        readonly children: Collection<SelectableItem>;
        /**
         * Property field
         */
        private _record;
        /**
         * Gets or sets the record parent of the children
         *
         * @returns {DataRecord}
         */
        /**
        * Gets or sets the record parent of the children
        *
        * @param {DataRecord} value
        */
        record: DataRecord;
        /**
         * Gets the selected child of the widget
         *
         * @returns {SelectableItem}
         */
        readonly selectedChild: SelectableItem;
    }
}
declare module latte {
    /**
     * Represents a column of data in the GridView
     **/
    class GridViewColumn extends DataSetColumn {
        /**
         *
         **/
        private _header;
        /**
         *
         **/
        private _readonly;
        /**
         * Creates the column.
         Optionally specifies its name, type and length.
         **/
        constructor(name?: string, type?: string, length?: number);
        /**
         * Gets or sets the GridView header element this column represents
         **/
        /**
        * Gets or sets the GridView header element this column represents
        **/
        header: JQuery;
        /**
         * Gets or sets a value indicating if the column is read only
         **/
        /**
        * Gets or sets a value indicating if the column is read only
        **/
        readOnly: boolean;
    }
}
/**
 * Created by josemanuel on 7/3/17.
 */
declare module latte {
    /**
     *
     */
    class ExplorerChildrenView extends View {
        /**
         * Initializes the class
         */
        constructor();
        /**
         * Raises the <c>explorerItem</c> event
         */
        onExplorerItemChanged(): void;
        /**
         * Raises the <c>showChildren</c> event
         */
        onShowChildren(): void;
        /**
         * Back field for event
         */
        private _explorerItemChanged;
        /**
         * Gets an event raised when the value of the explorerItem property changes
         *
         * @returns {LatteEvent}
         */
        readonly explorerItemChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _showChildren;
        /**
         * Gets an event raised when the children should be shown in the view
         *
         * @returns {LatteEvent}
         */
        readonly showChildren: LatteEvent;
        /**
         * Property field
         */
        private _explorerItem;
        /**
         * Gets or sets the explorer item which children this view represent
         *
         * @returns {ExplorerItem}
         */
        /**
        * Gets or sets the explorer item which children this view represent
        *
        * @param {ExplorerItem} value
        */
        explorerItem: ExplorerItem;
    }
}
/**
 * Created by josemanuel on 8/11/14.
 */
declare module latte {
    /**
     *
     */
    class ExplorerItemDataRecord<T extends DataRecord> extends ExplorerItem {
        /**
         *
         */
        constructor(r?: DataRecord);
        /**
         * Creates a list view item for the record
         */
        createListViewItem(): ListViewItem;
        /**
         * Gets the name for the item
         *
         * @returns {string}
         */
        getName(): string;
        /**
         * Gets the name of the columns that go in the lists
         * This are names of fields, described in metadata of record.
         */
        getColumns(): string[];
        /**
         * Gets the width of the specified column
         *
         * @param name
         */
        getColumnWithFor(name: string): number;
        /**
         * Gets an item for the column
         *
         * @param name
         */
        getItemForColumn(name: string): Item;
        /**
         * Gets the detail view of the item
         *
         * @returns {latte.DataRecordFormItem}
         */
        getDetailView(): View;
        /**
         * Synchronizes UI Items to reflect possible changes
         */
        syncUI(): void;
        /**
         * Property field
         */
        private _record;
        /**
         * Gets or sets the record of the item
         *
         * @returns {DataRecord}
         */
        /**
        * Gets or sets the record of the item
        *
        * @param {DataRecord} value
        */
        record: T;
    }
}
/**
 * Created by josemanuel on 8/6/14.
 */
declare module latte {
    /**
     *
     */
    class ExplorerView extends SplitView {
        private ignorePageChange;
        private detailViewItem;
        /**
         * Saves the milliseconds that the last 100 times lasted
         * @type {Array}
         */
        private loadTimes;
        /**
         * Stores the prediction (in milliseconds) of next load
         * @type {number}
         */
        private nextLoadTimePrediction;
        /**
         *
         */
        constructor(rootItem?: ExplorerItem);
        /**
         * Adds a loading time for criteria enrichment
         * @param time
         */
        private addLoadingTime;
        /**
         * Adds handlers to the item
         */
        private addTreeItemHandlers;
        /**
         * Loads the children of the specified item into the children view
         * @param item
         */
        private childrenViewOf;
        /**
         * Loads the children of specified item into the listview
         * @param treeItem
         */
        private listViewChildrenOf;
        /**
         * Loads the children of the specified item, and passes the callback when done
         * This method does not place the children into the list.
         * @param item
         * @param callback
         */
        private loadChildrenOf;
        /**
         * Loads the children of specified item into its node
         * @param item
         */
        private treeViewChildrenOf;
        /**
         * Assigns handlers to list view items
         * @param listItem
         */
        private addListViewItemHandlers;
        /**
         * Sets the detail view of the specified item, if any
         *
         * @param item
         */
        private detailViewOf;
        /**
         * Adds a root item
         *
         * @param item
         */
        addRootItem(item: ExplorerItem): void;
        /**
         * Refreshes the children of the list
         */
        refreshList(): void;
        /**
         * Sets the detail view
         * @param {latte.View} view
         */
        setDetailView(view: View): void;
        /**
         * Field for btnDetailOptions property
         */
        private _btnDetailOptions;
        /**
         * Gets the options detail button
         *
         * @returns {ButtonItem}
         */
        readonly btnDetailOptions: ButtonItem;
        /**
         * Field for btnHideDetailBar property
         */
        private _btnHideDetailBar;
        /**
         * Gets the hide sidebar button
         *
         * @returns {ButtonItem}
         */
        readonly btnHideDetailBar: ButtonItem;
        /**
         * Field for btnSaveDetail property
         */
        private _btnSaveDetail;
        /**
         * Gets the "save" button
         *
         * @returns {boolean}
         */
        readonly btnSaveDetail: ButtonItem;
        /**
         * Field for btnRefresh property
         */
        private _btnRefresh;
        /**
         * Gets the refresh button
         *
         * @returns {ButtonItem}
         */
        readonly btnRefresh: ButtonItem;
        /**
         * Field for btnRemoveDetail property
         */
        private _btnRemoveDetail;
        /**
         * Gets the remove button
         *
         * @returns {ButtonItem}
         */
        readonly btnRemoveDetail: ButtonItem;
        /**
         * Field for childrenSide property
         */
        private _childrenSide;
        /**
         * Gets the children side view
         *
         * @returns {ToolbarView}
         */
        readonly childrenSide: ToolbarView;
        /**
         * Field for detailSplitView property
         */
        private _detailSplitView;
        /**
         * Gets the details split view
         *
         * @returns {SplitView}
         */
        readonly detailSplitView: SplitView;
        /**
         * Field for detailViewToolbarView property
         */
        private _detailViewToolbarView;
        /**
         * Gets the detail view toolbar view
         *
         * @returns {ToolbarView}
         */
        readonly detailViewToolbarView: ToolbarView;
        /**
         * Gets the toolbar of the detail zone
         *
         * @returns {Toolbar}
         */
        readonly detailViewToolbar: Toolbar;
        /**
         * Property field
         */
        private _treeViewToolbar;
        /**
         * Gets the toolbar of the tree view
         *
         * @returns {Toolbar}
         */
        readonly treeViewToolbar: Toolbar;
        /**
         * Property field
         */
        private _listSelectedItem;
        /**
         * Gets the selected item on the list
         *
         * @returns {ExplorerItem}
         */
        readonly listSelectedItem: ExplorerItem;
        /**
         * Property field
         */
        private _listViewToolbar;
        /**
         * Gets the toolbar of the list view
         *
         * @returns {Toolbar}
         */
        readonly listViewToolbar: Toolbar;
        /**
         * Field for loadBar property
         */
        private _loadBar;
        /**
         * Gets the load bar
         *
         * @returns {HTMLDivElement}
         */
        readonly loadBar: HTMLDivElement;
        /**
         * Field for detailView property
         */
        private _detailView;
        /**
         * Gets the detail View
         *
         * @returns {View}
         */
        readonly detailView: View;
        /**
         * Field for listView property
         */
        private _listView;
        /**
         * Gets the list view
         *
         * @returns {ListView}
         */
        readonly listView: ListView;
        /**
         * Field for paginator property
         */
        private _paginator;
        /**
         * Gets the pagination item
         *
         * @returns {PaginationItem}
         */
        readonly paginator: PaginationItem;
        /**
         * Property field
         */
        private _treeSelectedItem;
        /**
         * Gets the selected item on the tree side
         *
         * @returns {ExplorerItem}
         */
        readonly treeSelectedItem: ExplorerItem;
        /**
         * Field for treeView property
         */
        private _treeView;
        /**
         * Gets the tree view
         *
         * @returns {TreeView}
         */
        readonly treeView: TreeView;
        /**
         * Gets or sets a value indicating if the detail view is currently visible
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets a value indicating if the detail view is currently visible
        *
        * @param {boolean} value
        */
        detailVisible: boolean;
    }
}
/**
 * Created by josemanuel on 8/8/14.
 */
declare module latte {
    /**
     *
     */
    class ExplorerTreeItem extends TreeItem {
        /**
         *
         */
        constructor();
        /**
         * Property field
         */
        private _record;
        /**
         * Gets or sets the record of the tree item
         *
         * @returns {DataRecord}
         */
        /**
        * Gets or sets the record of the tree item
        *
        * @param {DataRecord} value
        */
        record: DataRecord;
    }
}
