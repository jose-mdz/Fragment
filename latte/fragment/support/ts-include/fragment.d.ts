/// <reference path="datalatte.d.ts" />
/// <reference path="fragment.strings.d.ts" />
/// <reference path="jquery.d.ts" />
/// <reference path="latte.d.ts" />
/// <reference path="latte.data.d.ts" />
/// <reference path="latte.data.strings.d.ts" />
/// <reference path="latte.data.ui.d.ts" />
/// <reference path="latte.element.d.ts" />
/// <reference path="latte.strings.d.ts" />
/// <reference path="latte.ui.d.ts" />
/// <reference path="latte.ui.strings.d.ts" />
/// <reference path="../../ts/ts-declarations/object-assign.d.ts" />
declare module latte {
    class settingBase extends DataRecord {
        _recordType: string;
        _moduleName: string;
        /**
         * Database field: int(11)
         */
        _idsetting: number;
        /**
         * Gets or sets the value of the idsetting field of type int(11)
         */
        /**
        * Gets or sets the value of the idsetting field of type int(11)
        */
        idsetting: number;
        /**
         * Back field for event
         */
        _idsettingChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the idsetting property changes
         */
        readonly idsettingChanged: LatteEvent;
        /**
         * Raises the <c>idsettingChanged</c> event
         */
        onIdsettingChanged(): void;
        /**
        * Gets the name of the autoincrement field
        **/
        onGetRecordIdName(): string;
        /**
         * Database field: int(11)
         */
        _idowner: number;
        /**
         * Gets or sets the value of the idowner field of type int(11)
         */
        /**
        * Gets or sets the value of the idowner field of type int(11)
        */
        idowner: number;
        /**
         * Back field for event
         */
        _idownerChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the idowner property changes
         */
        readonly idownerChanged: LatteEvent;
        /**
         * Raises the <c>idownerChanged</c> event
         */
        onIdownerChanged(): void;
        /**
         * Database field: varchar(50)
         */
        _owner: string;
        /**
         * Gets or sets the value of the owner field of type varchar(50)
         */
        /**
        * Gets or sets the value of the owner field of type varchar(50)
        */
        owner: string;
        /**
         * Back field for event
         */
        _ownerChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the owner property changes
         */
        readonly ownerChanged: LatteEvent;
        /**
         * Raises the <c>ownerChanged</c> event
         */
        onOwnerChanged(): void;
        /**
         * Database field: varchar(255)
         */
        _name: string;
        /**
         * Gets or sets the value of the name field of type varchar(255)
         */
        /**
        * Gets or sets the value of the name field of type varchar(255)
        */
        name: string;
        /**
         * Back field for event
         */
        _nameChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the name property changes
         */
        readonly nameChanged: LatteEvent;
        /**
         * Raises the <c>nameChanged</c> event
         */
        onNameChanged(): void;
        /**
         * Database field: longtext
         */
        _value: string;
        /**
         * Gets or sets the value of the value field of type longtext
         */
        /**
        * Gets or sets the value of the value field of type longtext
        */
        value: string;
        /**
         * Back field for event
         */
        _valueChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the value property changes
         */
        readonly valueChanged: LatteEvent;
        /**
         * Raises the <c>valueChanged</c> event
         */
        onValueChanged(): void;
        /**
        * Override. Gets data about the fields of the record.
        **/
        onGetFields(): any;
        /**
        * Override. Gets data about the type of fields of the record.
        **/
        onGetFieldTypes(): any;
        /**
        * Declares the native types of the record.
        **/
        static nativeTypes: {
            "idsetting": string;
            "idowner": string;
            "owner": string;
            "name": string;
            "value": string;
        };
        static byOwnerAndText(owner: string, text: string): RemoteCall<Setting[]>;
        static byOwnerOnly(owner: string, id: number): RemoteCall<Setting[]>;
        static create(owner: string, id: number, value: string): RemoteCall<Setting>;
        static getGlobal(name: string): RemoteCall<Setting>;
        static getGlobals(): RemoteCall<Setting[]>;
        static getGlobalByName(name: string): RemoteCall<Setting>;
        static getGlobalConfigurableSettings(): RemoteCall<IGlobalConfigSettings>;
    }
    class fileBase extends DataRecord {
        _recordType: string;
        _moduleName: string;
        /**
         * Database field: int(11)
         */
        _idfile: number;
        /**
         * Gets or sets the value of the idfile field of type int(11)
         */
        /**
        * Gets or sets the value of the idfile field of type int(11)
        */
        idfile: number;
        /**
         * Back field for event
         */
        _idfileChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the idfile property changes
         */
        readonly idfileChanged: LatteEvent;
        /**
         * Raises the <c>idfileChanged</c> event
         */
        onIdfileChanged(): void;
        /**
        * Gets the name of the autoincrement field
        **/
        onGetRecordIdName(): string;
        /**
         * Database field: varchar(50)
         */
        _guid: string;
        /**
         * Gets or sets the value of the guid field of type varchar(50)
         */
        /**
        * Gets or sets the value of the guid field of type varchar(50)
        */
        guid: string;
        /**
         * Back field for event
         */
        _guidChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the guid property changes
         */
        readonly guidChanged: LatteEvent;
        /**
         * Raises the <c>guidChanged</c> event
         */
        onGuidChanged(): void;
        /**
         * Database field: int(11)
         */
        _iduser: number;
        /**
         * Gets or sets the value of the iduser field of type int(11)
         */
        /**
        * Gets or sets the value of the iduser field of type int(11)
        */
        iduser: number;
        /**
         * Back field for event
         */
        _iduserChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the iduser property changes
         */
        readonly iduserChanged: LatteEvent;
        /**
         * Raises the <c>iduserChanged</c> event
         */
        onIduserChanged(): void;
        /**
         * Database field: int(11)
         */
        _idowner: number;
        /**
         * Gets or sets the value of the idowner field of type int(11)
         */
        /**
        * Gets or sets the value of the idowner field of type int(11)
        */
        idowner: number;
        /**
         * Back field for event
         */
        _idownerChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the idowner property changes
         */
        readonly idownerChanged: LatteEvent;
        /**
         * Raises the <c>idownerChanged</c> event
         */
        onIdownerChanged(): void;
        /**
         * Database field: int(11)
         */
        _idparent: number;
        /**
         * Gets or sets the value of the idparent field of type int(11)
         */
        /**
        * Gets or sets the value of the idparent field of type int(11)
        */
        idparent: number;
        /**
         * Back field for event
         */
        _idparentChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the idparent property changes
         */
        readonly idparentChanged: LatteEvent;
        /**
         * Raises the <c>idparentChanged</c> event
         */
        onIdparentChanged(): void;
        /**
         * Database field: varchar(50)
         */
        _owner: string;
        /**
         * Gets or sets the value of the owner field of type varchar(50)
         */
        /**
        * Gets or sets the value of the owner field of type varchar(50)
        */
        owner: string;
        /**
         * Back field for event
         */
        _ownerChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the owner property changes
         */
        readonly ownerChanged: LatteEvent;
        /**
         * Raises the <c>ownerChanged</c> event
         */
        onOwnerChanged(): void;
        /**
         * Database field: varchar(128)
         */
        _name: string;
        /**
         * Gets or sets the value of the name field of type varchar(128)
         */
        /**
        * Gets or sets the value of the name field of type varchar(128)
        */
        name: string;
        /**
         * Back field for event
         */
        _nameChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the name property changes
         */
        readonly nameChanged: LatteEvent;
        /**
         * Raises the <c>nameChanged</c> event
         */
        onNameChanged(): void;
        /**
         * Database field: int(11)
         */
        _size: number;
        /**
         * Gets or sets the value of the size field of type int(11)
         */
        /**
        * Gets or sets the value of the size field of type int(11)
        */
        size: number;
        /**
         * Back field for event
         */
        _sizeChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the size property changes
         */
        readonly sizeChanged: LatteEvent;
        /**
         * Raises the <c>sizeChanged</c> event
         */
        onSizeChanged(): void;
        /**
         * Database field: varchar(30)
         */
        _bucket: string;
        /**
         * Gets or sets the value of the bucket field of type varchar(30)
         */
        /**
        * Gets or sets the value of the bucket field of type varchar(30)
        */
        bucket: string;
        /**
         * Back field for event
         */
        _bucketChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the bucket property changes
         */
        readonly bucketChanged: LatteEvent;
        /**
         * Raises the <c>bucketChanged</c> event
         */
        onBucketChanged(): void;
        /**
         * Database field: varchar(128)
         */
        _path: string;
        /**
         * Gets or sets the value of the path field of type varchar(128)
         */
        /**
        * Gets or sets the value of the path field of type varchar(128)
        */
        path: string;
        /**
         * Back field for event
         */
        _pathChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the path property changes
         */
        readonly pathChanged: LatteEvent;
        /**
         * Raises the <c>pathChanged</c> event
         */
        onPathChanged(): void;
        /**
         * Database field: datetime
         */
        _uploaded: DateTime;
        /**
         * Gets or sets the value of the uploaded field of type datetime
         */
        /**
        * Gets or sets the value of the uploaded field of type datetime
        */
        uploaded: DateTime;
        /**
         * Back field for event
         */
        _uploadedChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the uploaded property changes
         */
        readonly uploadedChanged: LatteEvent;
        /**
         * Raises the <c>uploadedChanged</c> event
         */
        onUploadedChanged(): void;
        /**
         * Database field: varchar(200)
         */
        _description: string;
        /**
         * Gets or sets the value of the description field of type varchar(200)
         */
        /**
        * Gets or sets the value of the description field of type varchar(200)
        */
        description: string;
        /**
         * Back field for event
         */
        _descriptionChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the description property changes
         */
        readonly descriptionChanged: LatteEvent;
        /**
         * Raises the <c>descriptionChanged</c> event
         */
        onDescriptionChanged(): void;
        /**
         * Database field: int(11)
         */
        _width: number;
        /**
         * Gets or sets the value of the width field of type int(11)
         */
        /**
        * Gets or sets the value of the width field of type int(11)
        */
        width: number;
        /**
         * Back field for event
         */
        _widthChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the width property changes
         */
        readonly widthChanged: LatteEvent;
        /**
         * Raises the <c>widthChanged</c> event
         */
        onWidthChanged(): void;
        /**
         * Database field: int(11)
         */
        _height: number;
        /**
         * Gets or sets the value of the height field of type int(11)
         */
        /**
        * Gets or sets the value of the height field of type int(11)
        */
        height: number;
        /**
         * Back field for event
         */
        _heightChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the height property changes
         */
        readonly heightChanged: LatteEvent;
        /**
         * Raises the <c>heightChanged</c> event
         */
        onHeightChanged(): void;
        /**
         * Database field: varchar(50)
         */
        _key: string;
        /**
         * Gets or sets the value of the key field of type varchar(50)
         */
        /**
        * Gets or sets the value of the key field of type varchar(50)
        */
        key: string;
        /**
         * Back field for event
         */
        _keyChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the key property changes
         */
        readonly keyChanged: LatteEvent;
        /**
         * Raises the <c>keyChanged</c> event
         */
        onKeyChanged(): void;
        /**
        * Override. Gets data about the fields of the record.
        **/
        onGetFields(): any;
        /**
        * Override. Gets data about the type of fields of the record.
        **/
        onGetFieldTypes(): any;
        /**
        * Declares the native types of the record.
        **/
        static nativeTypes: {
            "idfile": string;
            "guid": string;
            "iduser": string;
            "idowner": string;
            "idparent": string;
            "owner": string;
            "name": string;
            "size": string;
            "bucket": string;
            "path": string;
            "uploaded": string;
            "description": string;
            "width": string;
            "height": string;
            "key": string;
        };
        static byGuids(guids: string): RemoteCall<File[]>;
        static byOwner(name: string, id: number): RemoteCall<Array<File>>;
        static myUnlinked(ownerName: string): RemoteCall<Array<File>>;
        static changeNameDescription(idfile: number, name: string, description: string): RemoteCall<any>;
        deleteChildren(): RemoteCall<any>;
        physicalRemove(): RemoteCall<any>;
    }
    class pageBase extends DataRecord {
        _recordType: string;
        _moduleName: string;
        /**
         * Database field: int(11)
         */
        _idpage: number;
        /**
         * Gets or sets the value of the idpage field of type int(11)
         */
        /**
        * Gets or sets the value of the idpage field of type int(11)
        */
        idpage: number;
        /**
         * Back field for event
         */
        _idpageChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the idpage property changes
         */
        readonly idpageChanged: LatteEvent;
        /**
         * Raises the <c>idpageChanged</c> event
         */
        onIdpageChanged(): void;
        /**
        * Gets the name of the autoincrement field
        **/
        onGetRecordIdName(): string;
        /**
         * Database field: int(11)
         */
        _idparent: number;
        /**
         * Gets or sets the value of the idparent field of type int(11)
         */
        /**
        * Gets or sets the value of the idparent field of type int(11)
        */
        idparent: number;
        /**
         * Back field for event
         */
        _idparentChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the idparent property changes
         */
        readonly idparentChanged: LatteEvent;
        /**
         * Raises the <c>idparentChanged</c> event
         */
        onIdparentChanged(): void;
        /**
         * Database field: int(11)
         */
        _idgroup: number;
        /**
         * Gets or sets the value of the idgroup field of type int(11)
         */
        /**
        * Gets or sets the value of the idgroup field of type int(11)
        */
        idgroup: number;
        /**
         * Back field for event
         */
        _idgroupChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the idgroup property changes
         */
        readonly idgroupChanged: LatteEvent;
        /**
         * Raises the <c>idgroupChanged</c> event
         */
        onIdgroupChanged(): void;
        /**
         * Database field: int(11)
         */
        _iduser: number;
        /**
         * Gets or sets the value of the iduser field of type int(11)
         */
        /**
        * Gets or sets the value of the iduser field of type int(11)
        */
        iduser: number;
        /**
         * Back field for event
         */
        _iduserChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the iduser property changes
         */
        readonly iduserChanged: LatteEvent;
        /**
         * Raises the <c>iduserChanged</c> event
         */
        onIduserChanged(): void;
        /**
         * Database field: varchar(50)
         */
        _guid: string;
        /**
         * Gets or sets the value of the guid field of type varchar(50)
         */
        /**
        * Gets or sets the value of the guid field of type varchar(50)
        */
        guid: string;
        /**
         * Back field for event
         */
        _guidChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the guid property changes
         */
        readonly guidChanged: LatteEvent;
        /**
         * Raises the <c>guidChanged</c> event
         */
        onGuidChanged(): void;
        /**
         * Database field: varchar(200)
         */
        _key: string;
        /**
         * Gets or sets the value of the key field of type varchar(200)
         */
        /**
        * Gets or sets the value of the key field of type varchar(200)
        */
        key: string;
        /**
         * Back field for event
         */
        _keyChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the key property changes
         */
        readonly keyChanged: LatteEvent;
        /**
         * Raises the <c>keyChanged</c> event
         */
        onKeyChanged(): void;
        /**
         * Database field: int(1)
         */
        _trash: boolean;
        /**
         * Gets or sets the value of the trash field of type int(1)
         */
        /**
        * Gets or sets the value of the trash field of type int(1)
        */
        trash: boolean;
        /**
         * Back field for event
         */
        _trashChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the trash property changes
         */
        readonly trashChanged: LatteEvent;
        /**
         * Raises the <c>trashChanged</c> event
         */
        onTrashChanged(): void;
        /**
         * Database field: int(1)
         */
        _online: boolean;
        /**
         * Gets or sets the value of the online field of type int(1)
         */
        /**
        * Gets or sets the value of the online field of type int(1)
        */
        online: boolean;
        /**
         * Back field for event
         */
        _onlineChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the online property changes
         */
        readonly onlineChanged: LatteEvent;
        /**
         * Raises the <c>onlineChanged</c> event
         */
        onOnlineChanged(): void;
        /**
         * Database field: varchar(20)
         */
        _template: string;
        /**
         * Gets or sets the value of the template field of type varchar(20)
         */
        /**
        * Gets or sets the value of the template field of type varchar(20)
        */
        template: string;
        /**
         * Back field for event
         */
        _templateChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the template property changes
         */
        readonly templateChanged: LatteEvent;
        /**
         * Raises the <c>templateChanged</c> event
         */
        onTemplateChanged(): void;
        /**
         * Database field: datetime
         */
        _created: DateTime;
        /**
         * Gets or sets the value of the created field of type datetime
         */
        /**
        * Gets or sets the value of the created field of type datetime
        */
        created: DateTime;
        /**
         * Back field for event
         */
        _createdChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the created property changes
         */
        readonly createdChanged: LatteEvent;
        /**
         * Raises the <c>createdChanged</c> event
         */
        onCreatedChanged(): void;
        /**
         * Database field: datetime
         */
        _modified: DateTime;
        /**
         * Gets or sets the value of the modified field of type datetime
         */
        /**
        * Gets or sets the value of the modified field of type datetime
        */
        modified: DateTime;
        /**
         * Back field for event
         */
        _modifiedChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the modified property changes
         */
        readonly modifiedChanged: LatteEvent;
        /**
         * Raises the <c>modifiedChanged</c> event
         */
        onModifiedChanged(): void;
        /**
         * Database field: varchar(128)
         */
        _title: string;
        /**
         * Gets or sets the value of the title field of type varchar(128)
         */
        /**
        * Gets or sets the value of the title field of type varchar(128)
        */
        title: string;
        /**
         * Back field for event
         */
        _titleChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the title property changes
         */
        readonly titleChanged: LatteEvent;
        /**
         * Raises the <c>titleChanged</c> event
         */
        onTitleChanged(): void;
        /**
         * Database field: varchar(255)
         */
        _description: string;
        /**
         * Gets or sets the value of the description field of type varchar(255)
         */
        /**
        * Gets or sets the value of the description field of type varchar(255)
        */
        description: string;
        /**
         * Back field for event
         */
        _descriptionChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the description property changes
         */
        readonly descriptionChanged: LatteEvent;
        /**
         * Raises the <c>descriptionChanged</c> event
         */
        onDescriptionChanged(): void;
        /**
         * Database field: int(11)
         */
        _order: number;
        /**
         * Gets or sets the value of the order field of type int(11)
         */
        /**
        * Gets or sets the value of the order field of type int(11)
        */
        order: number;
        /**
         * Back field for event
         */
        _orderChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the order property changes
         */
        readonly orderChanged: LatteEvent;
        /**
         * Raises the <c>orderChanged</c> event
         */
        onOrderChanged(): void;
        /**
         * Database field: varchar(20)
         */
        _sort: string;
        /**
         * Gets or sets the value of the sort field of type varchar(20)
         */
        /**
        * Gets or sets the value of the sort field of type varchar(20)
        */
        sort: string;
        /**
         * Back field for event
         */
        _sortChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the sort property changes
         */
        readonly sortChanged: LatteEvent;
        /**
         * Raises the <c>sortChanged</c> event
         */
        onSortChanged(): void;
        /**
         * Database field: int(11)
         */
        _powner: number;
        /**
         * Gets or sets the value of the powner field of type int(11)
         */
        /**
        * Gets or sets the value of the powner field of type int(11)
        */
        powner: number;
        /**
         * Back field for event
         */
        _pownerChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the powner property changes
         */
        readonly pownerChanged: LatteEvent;
        /**
         * Raises the <c>pownerChanged</c> event
         */
        onPownerChanged(): void;
        /**
         * Database field: int(11)
         */
        _pgroup: number;
        /**
         * Gets or sets the value of the pgroup field of type int(11)
         */
        /**
        * Gets or sets the value of the pgroup field of type int(11)
        */
        pgroup: number;
        /**
         * Back field for event
         */
        _pgroupChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the pgroup property changes
         */
        readonly pgroupChanged: LatteEvent;
        /**
         * Raises the <c>pgroupChanged</c> event
         */
        onPgroupChanged(): void;
        /**
         * Database field: int(11)
         */
        _pother: number;
        /**
         * Gets or sets the value of the pother field of type int(11)
         */
        /**
        * Gets or sets the value of the pother field of type int(11)
        */
        pother: number;
        /**
         * Back field for event
         */
        _potherChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the pother property changes
         */
        readonly potherChanged: LatteEvent;
        /**
         * Raises the <c>potherChanged</c> event
         */
        onPotherChanged(): void;
        /**
         * Database field: int(11)
         */
        _pworld: number;
        /**
         * Gets or sets the value of the pworld field of type int(11)
         */
        /**
        * Gets or sets the value of the pworld field of type int(11)
        */
        pworld: number;
        /**
         * Back field for event
         */
        _pworldChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the pworld property changes
         */
        readonly pworldChanged: LatteEvent;
        /**
         * Raises the <c>pworldChanged</c> event
         */
        onPworldChanged(): void;
        /**
         * Database field: int(11)
         */
        _flags: number;
        /**
         * Gets or sets the value of the flags field of type int(11)
         */
        /**
        * Gets or sets the value of the flags field of type int(11)
        */
        flags: number;
        /**
         * Back field for event
         */
        _flagsChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the flags property changes
         */
        readonly flagsChanged: LatteEvent;
        /**
         * Raises the <c>flagsChanged</c> event
         */
        onFlagsChanged(): void;
        /**
        * Override. Gets data about the fields of the record.
        **/
        onGetFields(): any;
        /**
        * Override. Gets data about the type of fields of the record.
        **/
        onGetFieldTypes(): any;
        /**
        * Declares the native types of the record.
        **/
        static nativeTypes: {
            "idpage": string;
            "idparent": string;
            "idgroup": string;
            "iduser": string;
            "guid": string;
            "key": string;
            "trash": string;
            "online": string;
            "template": string;
            "created": string;
            "modified": string;
            "title": string;
            "description": string;
            "order": string;
            "sort": string;
            "powner": string;
            "pgroup": string;
            "pother": string;
            "pworld": string;
            "flags": string;
        };
        static byUrlQ(q: string): RemoteCall<Page>;
        static isValidURLKey(idpage: number, key: string): RemoteCall<boolean>;
        static rootPages(): RemoteCall<Page[]>;
        getConfiguration(): RemoteCall<string>;
        setConfiguration(json: string): RemoteCall<Setting>;
        getFragments(): RemoteCall<Fragment[]>;
        getPages(page?: number): RemoteCall<PageResult<Page>>;
        getSettingsPack(): RemoteCall<IPageSettingsPack>;
        sendToTrash(): RemoteCall<any>;
        setOnline(online: boolean): RemoteCall<any>;
    }
    class groupUserBase extends DataRecord {
        _recordType: string;
        _moduleName: string;
        /**
         * Database field: int(11)
         */
        _idgroupuser: number;
        /**
         * Gets or sets the value of the idgroupuser field of type int(11)
         */
        /**
        * Gets or sets the value of the idgroupuser field of type int(11)
        */
        idgroupuser: number;
        /**
         * Back field for event
         */
        _idgroupuserChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the idgroupuser property changes
         */
        readonly idgroupuserChanged: LatteEvent;
        /**
         * Raises the <c>idgroupuserChanged</c> event
         */
        onIdgroupuserChanged(): void;
        /**
        * Gets the name of the autoincrement field
        **/
        onGetRecordIdName(): string;
        /**
         * Database field: int(11)
         */
        _idgroup: number;
        /**
         * Gets or sets the value of the idgroup field of type int(11)
         */
        /**
        * Gets or sets the value of the idgroup field of type int(11)
        */
        idgroup: number;
        /**
         * Back field for event
         */
        _idgroupChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the idgroup property changes
         */
        readonly idgroupChanged: LatteEvent;
        /**
         * Raises the <c>idgroupChanged</c> event
         */
        onIdgroupChanged(): void;
        /**
         * Database field: int(11)
         */
        _iduser: number;
        /**
         * Gets or sets the value of the iduser field of type int(11)
         */
        /**
        * Gets or sets the value of the iduser field of type int(11)
        */
        iduser: number;
        /**
         * Back field for event
         */
        _iduserChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the iduser property changes
         */
        readonly iduserChanged: LatteEvent;
        /**
         * Raises the <c>iduserChanged</c> event
         */
        onIduserChanged(): void;
        /**
        * Override. Gets data about the fields of the record.
        **/
        onGetFields(): any;
        /**
        * Override. Gets data about the type of fields of the record.
        **/
        onGetFieldTypes(): any;
        /**
        * Declares the native types of the record.
        **/
        static nativeTypes: {
            "idgroupuser": string;
            "idgroup": string;
            "iduser": string;
        };
        static byGroup(idgroup: number): RemoteCall<GroupUser[]>;
    }
    class fragmentBase extends DataRecord {
        _recordType: string;
        _moduleName: string;
        /**
         * Database field: int(11)
         */
        _idfragment: number;
        /**
         * Gets or sets the value of the idfragment field of type int(11)
         */
        /**
        * Gets or sets the value of the idfragment field of type int(11)
        */
        idfragment: number;
        /**
         * Back field for event
         */
        _idfragmentChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the idfragment property changes
         */
        readonly idfragmentChanged: LatteEvent;
        /**
         * Raises the <c>idfragmentChanged</c> event
         */
        onIdfragmentChanged(): void;
        /**
        * Gets the name of the autoincrement field
        **/
        onGetRecordIdName(): string;
        /**
         * Database field: int(11)
         */
        _idpage: number;
        /**
         * Gets or sets the value of the idpage field of type int(11)
         */
        /**
        * Gets or sets the value of the idpage field of type int(11)
        */
        idpage: number;
        /**
         * Back field for event
         */
        _idpageChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the idpage property changes
         */
        readonly idpageChanged: LatteEvent;
        /**
         * Raises the <c>idpageChanged</c> event
         */
        onIdpageChanged(): void;
        /**
         * Database field: longtext
         */
        _value: string;
        /**
         * Gets or sets the value of the value field of type longtext
         */
        /**
        * Gets or sets the value of the value field of type longtext
        */
        value: string;
        /**
         * Back field for event
         */
        _valueChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the value property changes
         */
        readonly valueChanged: LatteEvent;
        /**
         * Raises the <c>valueChanged</c> event
         */
        onValueChanged(): void;
        /**
         * Database field: varchar(50)
         */
        _name: string;
        /**
         * Gets or sets the value of the name field of type varchar(50)
         */
        /**
        * Gets or sets the value of the name field of type varchar(50)
        */
        name: string;
        /**
         * Back field for event
         */
        _nameChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the name property changes
         */
        readonly nameChanged: LatteEvent;
        /**
         * Raises the <c>nameChanged</c> event
         */
        onNameChanged(): void;
        /**
        * Override. Gets data about the fields of the record.
        **/
        onGetFields(): any;
        /**
        * Override. Gets data about the type of fields of the record.
        **/
        onGetFieldTypes(): any;
        /**
        * Declares the native types of the record.
        **/
        static nativeTypes: {
            "idfragment": string;
            "idpage": string;
            "value": string;
            "name": string;
        };
    }
    class groupBase extends DataRecord {
        _recordType: string;
        _moduleName: string;
        /**
         * Database field: int(11)
         */
        _idgroup: number;
        /**
         * Gets or sets the value of the idgroup field of type int(11)
         */
        /**
        * Gets or sets the value of the idgroup field of type int(11)
        */
        idgroup: number;
        /**
         * Back field for event
         */
        _idgroupChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the idgroup property changes
         */
        readonly idgroupChanged: LatteEvent;
        /**
         * Raises the <c>idgroupChanged</c> event
         */
        onIdgroupChanged(): void;
        /**
        * Gets the name of the autoincrement field
        **/
        onGetRecordIdName(): string;
        /**
         * Database field: varchar(128)
         */
        _name: string;
        /**
         * Gets or sets the value of the name field of type varchar(128)
         */
        /**
        * Gets or sets the value of the name field of type varchar(128)
        */
        name: string;
        /**
         * Back field for event
         */
        _nameChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the name property changes
         */
        readonly nameChanged: LatteEvent;
        /**
         * Raises the <c>nameChanged</c> event
         */
        onNameChanged(): void;
        /**
        * Override. Gets data about the fields of the record.
        **/
        onGetFields(): any;
        /**
        * Override. Gets data about the type of fields of the record.
        **/
        onGetFieldTypes(): any;
        /**
        * Declares the native types of the record.
        **/
        static nativeTypes: {
            "idgroup": string;
            "name": string;
        };
        static catalog(): RemoteCall<Group[]>;
        static search(text: string): RemoteCall<Group[]>;
    }
    class userBase extends DataRecord {
        _recordType: string;
        _moduleName: string;
        /**
         * Database field: int(11)
         */
        _iduser: number;
        /**
         * Gets or sets the value of the iduser field of type int(11)
         */
        /**
        * Gets or sets the value of the iduser field of type int(11)
        */
        iduser: number;
        /**
         * Back field for event
         */
        _iduserChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the iduser property changes
         */
        readonly iduserChanged: LatteEvent;
        /**
         * Raises the <c>iduserChanged</c> event
         */
        onIduserChanged(): void;
        /**
        * Gets the name of the autoincrement field
        **/
        onGetRecordIdName(): string;
        /**
         * Database field: varchar(128)
         */
        _uname: string;
        /**
         * Gets or sets the value of the uname field of type varchar(128)
         */
        /**
        * Gets or sets the value of the uname field of type varchar(128)
        */
        uname: string;
        /**
         * Back field for event
         */
        _unameChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the uname property changes
         */
        readonly unameChanged: LatteEvent;
        /**
         * Raises the <c>unameChanged</c> event
         */
        onUnameChanged(): void;
        /**
         * Database field: varchar(128)
         */
        _password: string;
        /**
         * Gets or sets the value of the password field of type varchar(128)
         */
        /**
        * Gets or sets the value of the password field of type varchar(128)
        */
        password: string;
        /**
         * Back field for event
         */
        _passwordChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the password property changes
         */
        readonly passwordChanged: LatteEvent;
        /**
         * Raises the <c>passwordChanged</c> event
         */
        onPasswordChanged(): void;
        /**
         * Database field: int(11)
         */
        _flags: number;
        /**
         * Gets or sets the value of the flags field of type int(11)
         */
        /**
        * Gets or sets the value of the flags field of type int(11)
        */
        flags: number;
        /**
         * Back field for event
         */
        _flagsChanged: LatteEvent;
        /**
         * Gets an event raised when the value of the flags property changes
         */
        readonly flagsChanged: LatteEvent;
        /**
         * Raises the <c>flagsChanged</c> event
         */
        onFlagsChanged(): void;
        /**
        * Override. Gets data about the fields of the record.
        **/
        onGetFields(): any;
        /**
        * Override. Gets data about the type of fields of the record.
        **/
        onGetFieldTypes(): any;
        /**
        * Declares the native types of the record.
        **/
        static nativeTypes: {
            "iduser": string;
            "uname": string;
            "password": string;
            "flags": string;
        };
        static search(text: string): RemoteCall<User[]>;
        static catalog(): RemoteCall<User[]>;
        changePassword(oldPassword: string, password: string): RemoteCall<boolean>;
        passwordCorrect(password: string): RemoteCall<boolean>;
    }
    class Server {
        static canWriteHtAccess(): RemoteCall<any>;
        static checkConnectionOk(): RemoteCall<boolean>;
        static checkFragmentFolderWritable(): RemoteCall<boolean>;
        static isDatabaseEmpty(): RemoteCall<boolean>;
        static isHtAccessPresent(): RemoteCall<boolean>;
        static checkModRewriteEnabled(): RemoteCall<number>;
        static getHtAccessSource(): RemoteCall<any>;
        static installDatabase(): RemoteCall<string>;
        static installHtAccess(): RemoteCall<number | boolean>;
        static installInitialRecords(rootPassword: any): RemoteCall<string>;
        static saveConnectionParameters(user: string, pass: string, db: string, host: string, lang: string): RemoteCall<string>;
        static setTemporaryLang(lang: string): RemoteCall<any>;
    }
    class Session {
        static logIn(uname: string, pass: string): RemoteCall<User>;
        static logOut(): RemoteCall<any>;
    }
}
declare module latte {
    class SignInViewBase extends Element<HTMLDivElement> {
        private _combo;
        readonly combo: Element<HTMLDivElement>;
        private _error;
        readonly error: Element<HTMLDivElement>;
        private _fieldEmail;
        readonly fieldEmail: Element<HTMLDivElement>;
        private _fieldPassword;
        readonly fieldPassword: Element<HTMLDivElement>;
        private _form;
        readonly form: Element<HTMLFormElement>;
        private _txtEmail;
        readonly txtEmail: Textbox;
        private _txtPassword;
        readonly txtPassword: Textbox;
        private static _Model;
        static getModel(): Element<HTMLDivElement>;
        constructor();
    }
}
declare module latte {
}
/**
 * Created by josemanuel on 10/11/16.
 */
declare module latte {
}
/**
 * Created by josemanuel on 9/19/16.
 */
declare module latte {
    interface IFragments {
        [index: string]: IFragment;
    }
}
declare module latte {
    interface IImageDescription {
        "image-alt-text": string;
        "image-desc-text": string;
        "image-width": string;
        "image-height": string;
    }
}
/**
 * Created by josemanuel on 9/19/16.
 */
declare module latte {
    interface IFragment {
        name?: string;
        key?: string;
        type?: string;
    }
}
/**
 * Created by josemanuel on 9/19/16.
 */
declare module latte {
    /**
     *
     */
    interface IGlobalConfigSetting {
        name?: string;
        icon?: string;
        type?: string;
    }
}
/**
 * Created by josemanuel on 9/19/16.
 */
declare module latte {
    interface IPageConfiguration {
        fragments?: IFragments;
        children?: IPageConfigurationChildren;
        settings?: IPageConfigurationSettings;
    }
}
declare module latte {
    interface IImageFragment extends IFragment {
        "image-fit": "aspect-fit" | "aspect-fill" | "aspect-fill-far" | "aspect-fill-near";
        "image-width": number;
        "image-height": number;
    }
}
/**
 * Created by josemanuel on 9/19/16.
 */
declare module latte {
    interface IPageConfigurationChildren {
        mayHaveChildren?: boolean;
        settings?: IPageConfigurationSettings;
        fragments?: IFragments;
    }
}
/**
 * Created by josemanuel on 6/1/17.
 */
declare module latte {
    interface IImageGalleryFragment extends IImageFragment {
        "thumb-fit": "aspect-fit" | "aspect-fill" | "aspect-fill-far" | "aspect-fill-near";
        "thumb-width": number;
        "thumb-height": number;
        "print-images": boolean;
    }
}
/**
 * Created by josemanuel on 9/19/16.
 */
declare module latte {
    interface IPageSettingsPack {
        config: string;
        parentConfig: string;
        settings: Setting[];
    }
}
/**
 * Created by josemanuel on 9/19/16.
 */
declare module latte {
    interface IPageConfigurationSettings {
        [index: string]: IPageConfigurationSetting;
    }
}
/**
 * Created by josemanuel on 9/19/16.
 */
declare module latte {
    interface IPageConfigurationSetting {
        name: string;
        key?: string;
        type?: 'string' | 'boolean' | 'enumeration';
        defaultValue?: any;
        options?: any;
        required?: boolean;
    }
}
/**
 * Created by josemanuel on 9/19/16.
 */
declare module latte {
    /**
     *
     */
    interface IGlobalConfigSettings {
        [key: string]: IGlobalConfigSetting;
    }
}
/**
 * Created by josemanuel on 7/26/16.
 */
declare module latte {
    /**
     * Adapts a fragment to its editor capabilities
     */
    class FragmentAdapter<T extends IFragment> implements ISave {
        private _isSavingChanges;
        private _changesWhileSaving;
        /**
         * You should leave empty the constructor
         */
        constructor();
        /**
         * Implementation.
         *
         * @returns {RemoteCall<any>[]}
         */
        getSaveCalls(): ICall[];
        /**
         * Returns the tabs for the ribbon of the view
         * @returns {Array}
         */
        getEditorTabs(): TabItem[];
        /**
         * Returns the items for the ribbon of the view
         * @returns {Array}
         */
        getEditorTabItems(): Item[];
        /**
         * Raises the <c>createEditorItem</c> event
         */
        onCreateEditorItem(): void;
        /**
         * Raises the <c>fragment</c> event
         */
        onFragmentChanged(): void;
        /**
         * Raises the <c>fragmentConfiguration</c> event
         */
        onFragmentConfigurationChanged(): void;
        /**
         * Raises the <c>editorBlur</c> event
         */
        onEditorBlur(): void;
        /**
         * Raises the <c>editorFocus</c> event
         */
        onEditorFocus(): void;
        /**
         * Raises the <c>editorItem</c> event
         */
        onEditorItemChanged(): void;
        /**
         * Raises the <c>register</c> event
         */
        onRegister(): void;
        /**
         * Raises the <c>tabsChanged</c> event
         */
        onTabsChanged(): void;
        /**
         * Raises the <c>unRegister</c> event
         */
        onUnRegister(): void;
        /**
         * Raises the <c>unsavedChanges</c> event
         */
        onUnsavedChangesChanged(): void;
        private _changesWhileSavingChanged;
        readonly changesWhileSavingChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _createEditorItem;
        /**
         * Gets an event raised when the editorItem should be initialized
         *
         * @returns {LatteEvent}
         */
        readonly createEditorItem: LatteEvent;
        /**
         * Back field for event
         */
        private _fragmentConfigurationChanged;
        /**
         * Gets an event raised when the value of the fragmentConfiguration property changes
         *
         * @returns {LatteEvent}
         */
        readonly fragmentConfigurationChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _editorBlur;
        /**
         * Gets an event raised when the editor item loses the focus
         *
         * @returns {LatteEvent}
         */
        readonly editorBlur: LatteEvent;
        /**
         * Back field for event
         */
        private _editorFocus;
        /**
         * Gets an event raised when the editor item receives the focus
         *
         * @returns {LatteEvent}
         */
        readonly editorFocus: LatteEvent;
        /**
         * Back field for event
         */
        private _editorItemChanged;
        /**
         * Gets an event raised when the value of the editorItem property changes
         *
         * @returns {LatteEvent}
         */
        readonly editorItemChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _register;
        /**
         * Gets an event raised when the adapter is registered
         *
         * @returns {LatteEvent}
         */
        readonly register: LatteEvent;
        /**
         * Back field for event
         */
        private _tabsChanged;
        /**
         * Gets an event raised when the tabs of the adapter changed
         *
         * @returns {LatteEvent}
         */
        readonly tabsChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _unRegister;
        /**
         * Gets an event raised when the adapter is un-registered
         *
         * @returns {LatteEvent}
         */
        readonly unRegister: LatteEvent;
        /**
         * Back field for event
         */
        private _unsavedChangesChanged;
        /**
         * Gets an event raised when the value of the unsavedChanges property changes
         *
         * @returns {LatteEvent}
         */
        readonly unsavedChangesChanged: LatteEvent;
        /**
         * Gets or sets a value indicating if changes where reported while saving
         */
        /**
        * Gets or sets a value indicating if changes where reported while saving
        *
        * @param {boolean} value
        */
        changesWhileSaving: boolean;
        /**
         * Property field
         */
        private _expando;
        /**
         * Gets or sets the expando where the item lives
         *
         * @returns {FragmentExpandoItem}
         */
        /**
        * Gets or sets the expando where the item lives
        *
        * @param {FragmentExpandoItem} value
        */
        expando: FragmentExpandoItem;
        /**
         * Back field for event
         */
        private _fragmentChanged;
        /**
         * Gets an event raised when the value of the fragment property changes
         *
         * @returns {LatteEvent}
         */
        readonly fragmentChanged: LatteEvent;
        /**
         * Property field
         */
        private _fragmentConfiguration;
        /**
         * Gets or sets the fragment configuration info
         *
         * @returns {IFragment}
         */
        /**
        * Gets or sets the fragment configuration info
        *
        * @param {IFragment} value
        */
        fragmentConfiguration: T;
        /**
         * Property field
         */
        private _fragment;
        /**
         * Gets or sets the fragment of the adapter
         *
         * @returns {Fragment}
         */
        /**
        * Gets or sets the fragment of the adapter
        *
        * @param {Fragment} value
        */
        fragment: Fragment;
        /**
         * Property field
         */
        private _editorItem;
        /**
         * Gets or sets the item of the fragment used to edit fragment contents
         *
         * @returns {Item}
         */
        /**
        * Gets or sets the item of the fragment used to edit fragment contents
        *
        * @param {Item} value
        */
        editorItem: Item;
        isSavingChanges: boolean;
        /**
         * Property field
         */
        private _unsavedChanges;
        /**
         * Gets or sets unsaved changes.
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets unsaved changes.
        *
        * @param {boolean} value
        */
        unsavedChanges: boolean;
    }
}
/**
 * Created by josemanuel on 12/9/14.
 */
declare module latte {
    /**
     *
     */
    class Uploader {
        /**
         * Creates the uploader. Additionally specifies target url.
         */
        constructor(url?: string);
        /**
         * Appends data to the form data
         * @param name
         * @param value
         */
        appendFormData(name: string, value: any): void;
        /**
         * Starts the upload
         */
        upload(): void;
        /**
         * Back field for event
         */
        private _aborted;
        /**
         * Gets an event raised when the upload is aborted
         *
         * @returns {LatteEvent}
         */
        readonly aborted: LatteEvent;
        /**
         * Raises the <c>aborted</c> event
         */
        onAborted(): void;
        /**
         * Back field for event
         */
        private _complete;
        /**
         * Gets an event raised when the upload is complete
         *
         * @returns {LatteEvent}
         */
        readonly complete: LatteEvent;
        /**
         * Raises the <c>complete</c> event
         */
        onComplete(): void;
        /**
         * Back field for event
         */
        private _error;
        /**
         * Gets an event raised when an error occurs
         *
         * @returns {LatteEvent}
         */
        readonly error: LatteEvent;
        /**
         * Raises the <c>error</c> event
         */
        onError(message: string): void;
        /**
         * Back field for event
         */
        private _progressChanged;
        /**
         * Gets an event raised when the value of the progress property changes
         *
         * @returns {LatteEvent}
         */
        readonly progressChanged: LatteEvent;
        /**
         * Raises the <c>progress</c> event
         */
        onProgressChanged(): void;
        /**
         * Property field
         */
        private _data;
        /**
         * Gets or sets the data result of the upload post
         *
         * @returns {any}
         */
        readonly data: any;
        /**
         * Property field
         */
        private _formData;
        /**
         * Gets the form data
         *
         * @returns {Array<{name: string; value: string}>}
         */
        readonly formData: Array<{
            name: string;
            value: any;
        }>;
        /**
         * Gets the current speed of upload. Zero if any
         *
         * @returns {string}
         */
        readonly currentUploadBytesPerSecond: number;
        /**
         * Property field
         */
        private _progress;
        /**
         * Gets or sets the progress of the upload (0 to 1)
         *
         * @returns {number}
         */
        /**
        * Gets or sets the progress of the upload (0 to 1)
        *
        * @param {number} value
        */
        progress: number;
        /**
         * Property field
         */
        private _response;
        /**
         * Gets the raw response from server
         *
         * @returns {string}
         */
        readonly response: string;
        /**
         * Property field
         */
        private _uploading;
        /**
         * Gets a value indicating if upload is in progress
         *
         * @returns {boolean}
         */
        readonly uploading: boolean;
        /**
         * Property field
         */
        private _uploadedBytes;
        /**
         * Gets the amount of uploaded bytes
         *
         * @returns {number}
         */
        readonly uploadedBytes: number;
        /**
         * Property field
         */
        private _uploadStarted;
        /**
         * Gets a value indicating the time when upload started
         *
         * @returns {DateTime}
         */
        readonly uploadStarted: DateTime;
        /**
         * Property field
         */
        private _url;
        /**
         * Gets or sets the url to post upload
         *
         * @returns {string}
         */
        /**
        * Gets or sets the url to post upload
        *
        * @param {string} value
        */
        url: string;
    }
}
declare module latte {
    /**
     * Create new DataRecordValueItem
     */
    class TagValueItem<T extends DataRecord> extends ValueItem<DataRecord> {
        /**
         * Create DataRecordValueItem
         */
        constructor();
        /**
         *  Handles auto complete
         */
        private textbox_filterSuggestions;
        /**
         * Handler for textbox enter
         */
        private textbox_EnterPressed;
        /**
         * has Input text
         * @param value
         */
        hasInputText(value: any): void;
        /**
         * Load DataRecords
         */
        updateList(): void;
        /**
         * Overriden
         */
        onLayout(): void;
        /**
         * @override
         * @param record
         */
        onCreateItem(record?: DataRecord): void;
        /**
         * Filter Suggestions
         */
        onFilterSuggestions(): void;
        /**
         * Called when fill to list
         * @param callback
         */
        onLoadItems(callback: GenericCallback): void;
        /**
         * @param record
         */
        onAddItem(record: DataRecord): void;
        /**
         * Raises the <c>trashed</c> event
         *
         * @param record
         */
        onItemTrashed(record: DataRecord): void;
        /**
         * Raises the <c>record</c> event
         */
        onRecordChanged(): void;
        /**
         * Raises the <c>selectedItem</c> event
         */
        onItemCreated(): void;
        /**
         * Raises the <c>selectedItem</c> event
         */
        onSelectedItemChanged(): void;
        /**
         * Field for _label property
         */
        private _label;
        /**
         * Gets the "description" LabelItem
         *
         * @returns {LabelItem}
         */
        readonly label: LabelItem;
        /**
         * Field for _textbox property
         */
        private _textbox;
        /**
         * Gets the "description" TextboxItem
         *
         * @returns {TextboxItem}
         */
        readonly textbox: TextboxItem;
        /**
         * Field for toolbar property
         */
        private _toolbar;
        /**
         * Gets the "description" Toolbar
         *
         * @returns {Toolbar}
         */
        readonly toolbar: Toolbar;
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
         * Field for _itemCreated property
         */
        private _itemCreated;
        /**
         * Gets the "description" LatteEvent
         *
         * @returns {LatteEvent}
         */
        readonly itemCreated: LatteEvent;
        /**
         * Field for _DataRecordTrashed property
         */
        private _itemTrashed;
        /**
         * Gets the "description" LatteEvent
         *
         * @returns {LatteEvent}
         */
        readonly itemTrashed: LatteEvent;
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
         * Field for readOnly property
         */
        _readOnly: boolean;
        /**
         * Gets or sets the readOnly property
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets the readOnly property
        *
        * @params value {boolean}
        */
        readOnly: boolean;
        /**
         * Gets the text of the textbox (if any)
         *
         * @returns {string}
         */
        readonly text: string;
        /**
         * Property field
         */
        private _selectedItem;
        /**
         * Gets or sets when the DataRecord property changes
         *
         * @returns {DataRecord}
         */
        /**
        * Gets or sets when the DataRecord property changes
        *
        * @param {DataRecord} value
        */
        selectedItem: DataRecord;
        /**
         * Property field for owner
         */
        private _record;
        /**
         * Gets or sets when the value of record property changes
         *
         * @returns {T}
         */
        /**
        * Gets or sets when the value of record property changes
        *
        * @param {T} value
        */
        record: T;
    }
}
/**
 * Created by josemanuel on 7/14/16.
 */
declare module latte {
    /**
     *
     */
    class Main {
        /**
         * Goes to the editor view
         * @param guid
         */
        static goEditorView(guid: string): void;
        /**
         * Goes to the install wizard
         */
        static goInstllWizard(): void;
        /**
         * Goes to the main view
         */
        static goMainView(): void;
        /**
         * Goes to the sign in view
         */
        static goSignInView(): void;
        /**
         * Logs the user out
         */
        static logOut(): void;
        /**
         * Boots the script
         */
        constructor();
    }
}
/**
 * Created by josemanuel on 8/5/16.
 */
declare module latte {
    /**
     *
     */
    class GroupUserExplorer extends ExplorerItemDataRecord<GroupUser> {
        /**
         *
         */
        constructor(r?: GroupUser);
        /**
         * Gets the columns of the item
         * @Override
         */
        getColumns(): string[];
        /**
         * Gets the name of the item
         * @Override
         */
        getName(): string;
        /**
         * Gets the icon of the item
         * @Override
         */
        getIcon(): IconItem;
    }
}
declare module latte {
    /**
     *
     */
    class UaEvents {
        /**
         * Raises the <c>initializedExplorer</c> event
         */
        static onInitializedExplorer(cmsExplorer: CmsExplorer): void;
        /**
         * Raises the <c>initializingExplorer</c> event
         */
        static onInitializingExplorer(cmsExplorer: CmsExplorer): void;
        /**
         * Back field for event
         */
        private static _initializingExplorer;
        /**
         * Gets an event raised when the explorer is being initialized
         *
         * @returns {LatteEvent}
         */
        static readonly initializingExplorer: LatteEvent;
        /**
         * Back field for event
         */
        private static _initializedExplorer;
        /**
         * Gets an event raised when the explorer has been initialized
         *
         * @returns {LatteEvent}
         */
        static readonly initializedExplorer: LatteEvent;
    }
}
/**
 * Created by josemanuel on 9/16/16.
 */
declare module latte {
    /**
     *
     */
    class GlobalSettingExplorer extends ExplorerItem {
        /**
         * Creates the setting
         */
        constructor(globalSetting: IGlobalConfigSetting, icon?: IconItem);
        /**
         * Gets the name of the item
         * @Override
         */
        getName(): string;
        /**
         * Gets the icon of the item
         * @Override
         */
        getIcon(): IconItem;
        /**
         * Gets the detail view of the item
         * @Override
         */
        getDetailView(): View;
        /**
         * Raises the <c>globalSetting</c> event
         */
        onGlobalSettingChanged(): void;
        /**
         * Back field for event
         */
        private _globalSettingChanged;
        /**
         * Gets an event raised when the value of the globalSetting property changes
         *
         * @returns {LatteEvent}
         */
        readonly globalSettingChanged: LatteEvent;
        /**
         * Property field
         */
        private _globalSetting;
        /**
         * Gets or sets the global setting item
         *
         * @returns {IGlobalConfigSetting}
         */
        /**
        * Gets or sets the global setting item
        *
        * @param {IGlobalConfigSetting} value
        */
        globalSetting: IGlobalConfigSetting;
        /**
         * Property field
         */
        private _settingName;
        /**
         * Gets or sets the name of the setting
         *
         * @returns {string}
         */
        /**
        * Gets or sets the name of the setting
        *
        * @param {string} value
        */
        settingName: string;
        /**
         * Property field
         */
        private _settingIcon;
        /**
         * Gets or sets the settings icon
         *
         * @returns {IconItem}
         */
        /**
        * Gets or sets the settings icon
        *
        * @param {IconItem} value
        */
        settingIcon: IconItem;
    }
}
/**
 * Created by josemanuel on 8/5/16.
 */
declare module latte {
    /**
     *
     */
    class GroupExplorer extends ExplorerItemDataRecord<Group> {
        /**
         *
         */
        constructor(r?: Group);
        /**
         * Gets the loader of children items
         *
         * @Override
         */
        getChildrenLoader(): RemoteCall<any>;
        /**
         * Gets the name of the item
         * @Override
         */
        getName(): string;
        /**
         * Gets the icon of the item
         * @Override
         */
        getIcon(): IconItem;
        /**
         * Gets the items (actions) of the item
         * @Override
         */
        getItems(): Item[];
    }
}
/**
 * Created by josemanuel on 9/28/16.
 */
declare module latte {
    /**
     *
     */
    class FileReplacer extends Uploader {
        /**
         *
         */
        constructor();
        /**
         * Override.
         */
        onComplete(): void;
        /**
         * Uploads the specified DetailView file
         **/
        upload(): void;
        /**
         * Property field
         */
        private _base64;
        /**
         * Gets or sets the base64 data to upload, if any
         *
         * @returns {string}
         */
        /**
        * Gets or sets the base64 data to upload, if any
        *
        * @param {string} value
        */
        base64: string;
        /**
         * Property field
         */
        private _description;
        /**
         * Gets or sets the description of the file
         *
         * @returns {string}
         */
        /**
        * Gets or sets the description of the file
        *
        * @param {string} value
        */
        description: string;
        /**
         * Property field
         */
        private _fileRecord;
        /**
         * Gets the file record result of replacement
         *
         * @returns {File}
         */
        readonly fileRecord: File;
        /**
         * Property field
         */
        private _height;
        /**
         * Gets or sets the height of the image (if image)
         *
         * @returns {number}
         */
        /**
        * Gets or sets the height of the image (if image)
        *
        * @param {number} value
        */
        height: number;
        /**
         * Property field
         */
        private _id;
        /**
         * Gets or sets the id of the file to replace
         *
         * @returns {string}
         */
        /**
        * Gets or sets the id of the file to replace
        *
        * @param {string} value
        */
        id: string;
        /**
         * Property field
         */
        private _key;
        /**
         * Gets or sets the key of the file to replace
         *
         * @returns {string}
         */
        /**
        * Gets or sets the key of the file to replace
        *
        * @param {string} value
        */
        key: string;
        /**
         * Property field
         */
        private _width;
        /**
         * Gets or sets the width of the image (if image)
         *
         * @returns {number}
         */
        /**
        * Gets or sets the width of the image (if image)
        *
        * @param {number} value
        */
        width: number;
    }
}
/**
 * Created by josemanuel on 7/14/16.
 */
declare module latte {
    /**
     *
     */
    class PageExplorer extends ExplorerItemDataRecord<Page> {
        /**
         * Creates the Item
         */
        constructor(r: Page);
        /**
         * Gets the loader of children items
         * @Override
         */
        getChildrenLoader(): RemoteCall<any>;
        /**
         * Override
         */
        getColumnHeaders(): ColumnHeader[];
        /**
         * Gets the columns of the item
         * @Override
         */
        getColumns(): string[];
        /**
         * Gets the width of columns
         * @Override
         */
        getColumnWithFor(name: string): number;
        /**
         * Gets the detail view of the item
         * @Override
         */
        getDetailView(): View;
        /**
         * Gets the name of the item
         * @Override
         */
        getName(): string;
        /**
         * Gets the icon of the item
         * @Override
         */
        getIcon(): IconItem;
        /**
         * Gets the items (actions) of the item
         * @Override
         */
        getItems(): Item[];
    }
}
/**
 * Created by josemanuel on 8/5/16.
 */
declare module latte {
    /**
     *
     */
    class GroupsExplorer extends ExplorerItem {
        /**
         *
         */
        constructor();
        /**
         * Gets the loader of children items
         *
         * @Override
         */
        getChildrenLoader(): RemoteCall<any>;
        /**
         * Gets the name of the item
         * @Override
         */
        getName(): string;
        /**
         * Gets the icon of the item
         * @Override
         */
        getIcon(): IconItem;
        /**
         * Gets the items (actions) of the item
         * @Override
         */
        getItems(): Item[];
    }
}
/**
 * Created by josemanuel on 7/14/16.
 */
declare module latte {
    /**
     *
     */
    class PagesExplorer extends ExplorerItem {
        /**
         *
         */
        constructor();
        /**
         * Gets the loader of children items
         * @Override
         */
        getChildrenLoader(): RemoteCall<any>;
        /**
         * Override
         */
        getColumnHeaders(): ColumnHeader[];
        /**
         * Gets the name of the item
         * @Override
         */
        getName(): string;
        /**
         * Gets the icon of the item
         * @Override
         */
        getIcon(): IconItem;
        /**
         * Gets the items (actions) of the item
         * @Override
         */
        getItems(): Item[];
    }
}
/**
 * Created by josemanuel on 7/26/16.
 */
declare module latte {
    /**
     *
     */
    class FragmentAdapterManager {
        private static _adapters;
        /**
         * Gets the adapter for the supported type
         *
         * @param type
         * @returns {any|null}
         */
        static byType(type: string): FragmentAdapter<IFragment>;
        /**
         * Gets the list of loaded plugins
         *
         * @returns {Plugin[]}
         */
        static getLoadedAdapters(): FragmentAdapter<IFragment>[];
        /**
         * Returns a value indicating if the specified type is supported by the manager
         *
         * @param type
         * @returns {boolean}
         */
        static isSupported(type: string): boolean;
        /**
         * Loads the specified plugin. If the plugin is already loaded, it will ignore it.
         * @param p
         */
        static register(type: string, className: string): void;
        /**
         * Unloads the specified plugin. Ignored if plugin wasn't loaded
         *
         * @param f
         */
        static unregister(type: string): void;
    }
}
/**
 * Created by josemanuel on 8/5/16.
 */
declare module latte {
    /**
     *
     */
    class UserExplorer extends ExplorerItemDataRecord<User> {
        /**
         *
         */
        constructor(r: User);
        private changePassword;
        /**
        * Gets the columns of the item
        * @Override
        */
        getColumns(): string[];
        /**
         * Gets the detail view of the item
         * @Override
         */
        getDetailView(): View;
        /**
         * Gets the name of the item
         * @Override
         */
        getName(): string;
        /**
         * Gets the icon of the item
         * @Override
         */
        getIcon(): IconItem;
        /**
         * Field for btnChangePassword property
         */
        private _btnChangePassword;
        /**
         * Gets the change password button
         *
         * @returns {ButtonItem}
         */
        readonly btnChangePassword: ButtonItem;
    }
}
/**
 * Created by josemanuel on 8/5/16.
 */
declare module latte {
    /**
     *
     */
    class UsersExplorer extends ExplorerItem {
        /**
         *
         */
        constructor();
        /**
         * Override.
         * @returns {latte.ColumnHeader[]}
         */
        getColumnHeaders(): ColumnHeader[];
        /**
         * Gets the loader of children items
         *
         * @Override
         */
        getChildrenLoader(): RemoteCall<any>;
        /**
         * Gets the name of the item
         * @Override
         */
        getName(): string;
        /**
         * Gets the icon of the item
         * @Override
         */
        getIcon(): IconItem;
        /**
         * Gets the items (actions) of the item
         * @Override
         */
        getItems(): Item[];
    }
}
/**
 * Created by josemanuel on 6/24/14.
 */
declare module latte {
    interface SystemFile {
        name: string;
        size: number;
    }
    /**
     * Uploads a file to the server, linking it to an object.
     * To upload a file as base46 mode, use static fromBase64
     */
    class FileUploader extends Uploader {
        /**
         * Creates a FileUploader object from base64 encoded data
         * @param base64
         * @param fileName
         * @param recordName
         * @param recordId
         * @returns {latte.FileUploader}
         */
        static fromBase64(base64: string, fileName: string, recordName: string, recordId: string | number): FileUploader;
        /**
         * Creates the file uploader
         */
        constructor(file: SystemFile, recordName: string, recordId: string | number);
        /**
         * Override.
         */
        onComplete(): void;
        /**
         * Uploads the specified DetailView file
         **/
        upload(): void;
        /**
         * Property field
         */
        private _base64;
        /**
         * Gets or sets the base64 data to upload, if any
         *
         * @returns {string}
         */
        /**
        * Gets or sets the base64 data to upload, if any
        *
        * @param {string} value
        */
        base64: string;
        /**
         * Property field
         */
        private _base64FileName;
        /**
         * Gets or sets the file name when uploading base64 data
         *
         * @returns {string}
         */
        /**
        * Gets or sets the file name when uploading base64 data
        *
        * @param {string} value
        */
        base64FileName: string;
        /**
         * Property field
         */
        private _description;
        /**
         * Gets or sets the description of the file to upload
         *
         * @returns {string}
         */
        /**
        * Gets or sets the description of the file to upload
        *
        * @param {string} value
        */
        description: string;
        /**
         * Property field
         */
        private _fileLocal;
        /**
         * Gets the local file object
         *
         * @returns {File}
         */
        readonly fileLocal: SystemFile;
        /**
         * Property field
         */
        private _fileRecord;
        /**
         * Gets the result file
         *
         * @returns {File}
         */
        readonly fileRecord: File;
        /**
         * Property field
         */
        private _height;
        /**
         * Gets or sets the height of the file if is image
         *
         * @returns {number}
         */
        /**
        * Gets or sets the height of the file if is image
        *
        * @param {number} value
        */
        height: number;
        /**
         * Property field
         */
        private _idparent;
        /**
         * Gets or sets the id of the parent file to make this file a thumbnail
         *
         * @returns {number}
         */
        /**
        * Gets or sets the id of the parent file to make this file a thumbnail
        *
        * @param {number} value
        */
        idparent: number;
        /**
         * Property field
         */
        private _key;
        /**
         * Gets or sets the key of the file
         *
         * @returns {string}
         */
        /**
        * Gets or sets the key of the file
        *
        * @param {string} value
        */
        key: string;
        /**
         * Property field
         */
        private _recordId;
        /**
         * Gets the id of record
         *
         * @returns {string}
         */
        readonly recordId: string;
        /**
         * Property field
         */
        private _recordName;
        /**
         * Gets the name of the record
         *
         * @returns {string}
         */
        readonly recordName: string;
        /**
         * Property field
         */
        private _width;
        /**
         * Gets or sets the width of the file if is image
         *
         * @returns {number}
         */
        /**
        * Gets or sets the width of the file if is image
        *
        * @param {number} value
        */
        width: number;
    }
}
/**
 * Created by josemanuel on 9/27/16.
 */
declare module latte {
    /**
     *
     */
    class ImageLoader {
        /**
         *
         */
        constructor(src: string);
        /**
         * Starts the load
         */
        start(): void;
        /**
         * Raises the <c>ended</c> event
         */
        onEnded(): void;
        /**
         * Raises the <c>progress</c> event
         */
        onProgressChanged(): void;
        /**
         * Raises the <c>started</c> event
         */
        onStarted(): void;
        /**
         * Back field for event
         */
        private _ended;
        /**
         * Gets an event raised when the load has ended
         *
         * @returns {LatteEvent}
         */
        readonly ended: LatteEvent;
        /**
         * Back field for event
         */
        private _progressChanged;
        /**
         * Gets an event raised when the value of the progress property changes
         *
         * @returns {LatteEvent}
         */
        readonly progressChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _started;
        /**
         * Gets an event raised when the load has started
         *
         * @returns {LatteEvent}
         */
        readonly started: LatteEvent;
        /**
         * Property field
         */
        private _hasStarted;
        /**
         * Gets a value indicating if the load has started
         *
         * @returns {boolean}
         */
        readonly hasStarted: boolean;
        /**
         * Property field
         */
        private _hasEnded;
        /**
         * Gets a value indicating if the load has ended
         *
         * @returns {boolean}
         */
        readonly hasEnded: boolean;
        /**
         * Property field
         */
        private _progress;
        /**
         * Gets or sets the progress of the load
         *
         * @returns {number}
         */
        /**
        * Gets or sets the progress of the load
        *
        * @param {number} value
        */
        progress: number;
        /**
         * Property field
         */
        private _resultBytes;
        /**
         * Gets the number of bytes
         *
         * @returns {number}
         */
        readonly resultBytes: number;
        /**
         * Field for resultImage property
         */
        private _resultImage;
        /**
         * Gets the result image
         *
         * @returns {HTMLImageElement}
         */
        readonly resultImage: HTMLImageElement;
        /**
         * Property field
         */
        private _resultSrc;
        /**
         * Gets the result source
         *
         * @returns {string}
         */
        readonly resultSrc: string;
        /**
         * Property field
         */
        private _src;
        /**
         * Gets the src of the image to load
         *
         * @returns {string}
         */
        readonly src: string;
    }
}
/**
 * Created by josemanuel on 7/26/16.
 */
declare module latte {
    /**
     *
     */
    class Plugin {
        /**
         *
         */
        constructor();
        /**
         * Raises the <c>load</c> event
         */
        onLoad(): void;
        /**
         * Raises the <c>unload</c> event
         */
        onUnload(): void;
        /**
         * Back field for event
         */
        private _load;
        /**
         * Gets an event raised when the plugin is loaded
         *
         * @returns {LatteEvent}
         */
        readonly load: LatteEvent;
        /**
         * Back field for event
         */
        private _unload;
        /**
         * Gets an event raised when the plugin is unloaded
         *
         * @returns {LatteEvent}
         */
        readonly unload: LatteEvent;
    }
}
/**
 * Created by josemanuel on 9/14/16.
 */
declare module latte {
    /**
     * Folder of global settings
     */
    class GlobalSettingsExplorer extends ExplorerItem {
        /**
         * Creates the item
         */
        constructor();
        /**
         * Override.
         * @returns {latte.ColumnHeader[]}
         */
        getColumnHeaders(): ColumnHeader[];
        /**
         * Gets the loader of children items
         *
         * @Override
         */
        getChildrenLoader(): RemoteCall<any>;
        /**
         * Gets the name of the item
         * @Override
         */
        getName(): string;
        /**
         * Gets the icon of the item
         * @Override
         */
        getIcon(): IconItem;
    }
}
/**
 * Created by josemanuel on 7/26/16.
 */
declare module latte {
    /**
     * Manages the plugins of the program
     */
    class PluginManager {
        private static _plugins;
        /**
         * Gets the list of loaded plugins
         *
         * @returns {Plugin[]}
         */
        static getLoadedPlugins(): Plugin[];
        /**
         * Loads the specified plugin. If the plugin is already loaded, it will ignore it.
         * @param p
         */
        static load(p: Plugin): void;
        /**
         * Unloads the specified plugin. Ignored if plugin wasn't loaded
         *
         * @param plugin
         */
        static unload(plugin: Plugin): void;
    }
}
/**
 * Created by josemanuel on 7/26/16.
 */
declare module latte {
    /**
     *
     */
    class PlainTextFragmentAdapter extends FragmentAdapter<IFragment> {
        /**
         * Override. Raises the <c>createEditorItem</c> event
         */
        onCreateEditorItem(): void;
        /**
         * Field for textbox property
         */
        private _textbox;
        private baseScrollHeight;
        private heightCheck;
        /**
         * Gets the textbox element
         *
         * @returns {Element<HTMLTextAreaElement>}
         */
        readonly textbox: Element<HTMLTextAreaElement>;
    }
}
/**
 * Created by josemanuel on 7/27/16.
 */
declare module latte {
    /**
     *
     */
    class HtmlFragmentAdapter extends FragmentAdapter<IFragment> {
        /**
         *
         */
        constructor();
        /**
         * Override
         */
        getEditorTabs(): TabItem[];
        /**
         * Returns the items for the ribbon of the view
         * @returns {Array}
         */
        getEditorTabItems(): Item[];
        /**
         * Override. Raises the <c>createEditorItem</c> event
         */
        onCreateEditorItem(): void;
        /**
         * Field for htmlEditor property
         */
        private _htmlEditor;
        /**
         * Gets the html editor
         *
         * @returns {HtmlEditorItem}
         */
        readonly htmlEditor: HtmlEditorItem;
        /**
         * Field for tabFormat property
         */
        private _tabFormat;
        /**
         * Gets the format tab
         *
         * @returns {TabItem}
         */
        readonly tabFormat: TabItem;
        /**
         * Field for formatItems property
         */
        private _formatItems;
        /**
         * Gets the format items
         *
         * @returns {Item[]}
         */
        readonly formatItems: Item[];
    }
}
/**
 * Created by josemanuel on 7/26/16.
 */
declare module latte {
    /**
     *
     */
    class FragmentExpandoItem extends ItemStack {
        /**
         *
         */
        constructor();
        /**
         * Raises the <c>fragmentItem</c> event
         */
        onFragmentItemChanged(): void;
        /**
         * Raises the <c>expanded</c> event
         */
        onExpandedChanged(): void;
        /**
         * Back field for event
         */
        private _expandedChanged;
        /**
         * Gets an event raised when the value of the expanded property changes
         *
         * @returns {LatteEvent}
         */
        readonly expandedChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _fragmentItemChanged;
        /**
         * Gets an event raised when the value of the fragmentItem property changes
         *
         * @returns {LatteEvent}
         */
        readonly fragmentItemChanged: LatteEvent;
        /**
         * Property field
         */
        private _expanded;
        /**
         * Gets or sets a value indicating if the expando is expanded
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets a value indicating if the expando is expanded
        *
        * @param {boolean} value
        */
        expanded: boolean;
        /**
         * Property field
         */
        private _fragmentItem;
        /**
         * Gets or sets the fragment item of the expando
         *
         * @returns {Item}
         */
        /**
        * Gets or sets the fragment item of the expando
        *
        * @param {Item} value
        */
        fragmentItem: Item;
        /**
         * Gets or sets the title of the expando
         *
         * @returns {string}
         */
        /**
        * Gets or sets the title of the expando
        *
        * @param {string} value
        */
        title: string;
        /**
         * Field for btnFold property
         */
        private _btnFold;
        /**
         * Gets the fold button
         *
         * @returns {ButtonItem}
         */
        readonly btnFold: ButtonItem;
        /**
         * Field for lblTitle property
         */
        private _lblTitle;
        /**
         * Gets the title label
         *
         * @returns {LabelItem}
         */
        readonly lblTitle: LabelItem;
        /**
         * Field for toolbar property
         */
        private _toolbar;
        /**
         * Gets the toolbar of the expando
         *
         * @returns {Toolbar}
         */
        readonly toolbar: Toolbar;
    }
}
/**
 * Created by josemanuel on 10/9/16.
 */
declare module latte {
    /**
     *
     */
    class FragmentPlaceholderItem extends Item {
        /**
         *
         */
        constructor();
        /**
         * Raises the <c>click</c> event
         */
        onClick(): void;
        /**
         * Raises the <c>dragEnd</c> event
         */
        onDragEnd(e: DragEvent): void;
        /**
         * Raises the <c>dragging</c> event
         */
        onDraggingChanged(): void;
        /**
         * Raises the <c>dragStart</c> event
         */
        onDragStart(e: DragEvent): void;
        /**
         * Raises the <c>drop</c> event
         */
        onDrop(e: DragEvent): void;
        /**
         * Raises the <c>emptyIcon</c> event
         */
        onEmptyIconChanged(): void;
        /**
         * Back field for event
         */
        private _click;
        /**
         * Gets an event raised when user clicks the control
         *
         * @returns {LatteEvent}
         */
        readonly click: LatteEvent;
        /**
         * Back field for event
         */
        private _dragEnd;
        /**
         * Gets an event raised when the drag operation ends
         *
         * @returns {LatteEvent}
         */
        readonly dragEnd: LatteEvent;
        /**
         * Back field for event
         */
        private _draggingChanged;
        /**
         * Gets an event raised when the value of the dragging property changes
         *
         * @returns {LatteEvent}
         */
        readonly draggingChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _dragStart;
        /**
         * Gets an event raised when a drag operation starts
         *
         * @returns {LatteEvent}
         */
        readonly dragStart: LatteEvent;
        /**
         * Back field for event
         */
        private _drop;
        /**
         * Gets an event raised when the user drops data
         *
         * @returns {LatteEvent}
         */
        readonly drop: LatteEvent;
        /**
         * Back field for event
         */
        private _emptyIconChanged;
        /**
         * Gets an event raised when the value of the emptyIcon property changes
         *
         * @returns {LatteEvent}
         */
        readonly emptyIconChanged: LatteEvent;
        /**
         * Property field
         */
        private _allowDrop;
        /**
         * Gets or sets a value indicating if the placeholder allows drop
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets a value indicating if the placeholder allows drop
        *
        * @param {boolean} value
        */
        allowDrop: boolean;
        /**
         * Property field
         */
        private _dragging;
        /**
         * Gets or sets a value indicating if the user is dragging something over the item
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets a value indicating if the user is dragging something over the item
        *
        * @param {boolean} value
        */
        dragging: boolean;
        /**
         * Property field
         */
        private _emptyIcon;
        /**
         * Gets or sets the icon item
         *
         * @returns {IconItem}
         */
        /**
        * Gets or sets the icon item
        *
        * @param {IconItem} value
        */
        emptyIcon: IconItem;
    }
}
/**
 * Generated by xlatte
 */
declare module latte {
    /**
     * Record for table fragment
     */
    class Fragment extends fragmentBase {
    }
}
/**
 * Generated by xlatte
 */
declare module latte {
    /**
     * Record for table group
     */
    class Group extends groupBase {
        /**
         * Gets the suggestion loader
         * @returns {*}
         */
        static suggestionLoader(): (d: DataRecordValueItem, callback: (items: Item[]) => any) => Message;
        /**
         * Gets the metadata about the record
         *
         * @returns Object
         */
        getMetadata(): IRecordMeta;
        /**
         * Returns a string representation of the object
         */
        toString(): string;
    }
}
declare module latte {
    /**
     * File Record
     **/
    class File extends fileBase {
        /**
         * Gets an array of files belonging to the specified record
         **/
        static byRecord(record: DataRecord, callback: (arr: Array<File>) => any): Message;
        /**
         * Gets the extension of the file
         * @param ext
         * @returns {string}
         */
        static extensionOf(ext: string): string;
        /**
         * Returns a value indicating if the extension is an image extension
         * @param e
         * @returns {boolean}
         */
        static isImageExtension(e: string): boolean;
        /**
         * Gets the name of the file without extension
         * @param fileName
         */
        static nameWithoutExtensionOf(fileName: string): string;
        /**
         * Makes a single upload of a file with the specified record as owner
         *
         * @param owner
         * @param idOwner
         * @param callback
         */
        static singleUpload(owner: string, idOwner: string, callback?: (File: any) => any): void;
        /**
         * Gets the human size of specified amount of bytes
         * @param size
         * @returns {string}
         */
        static humanSizeOf(size?: number): string;
        /**
         * Gets an URL for the specified path, by using the default bucket
         **/
        static urlOfPath(path: string): string;
        children: File[];
        /**
         *
         */
        constructor();
        /**
         * Creates a thumb that fits on the specified size
         *
         * @param options
         * @param key
         * @param callback
         */
        createThumbChild(options: ImageExportOptions, key: string, callback?: (child: File) => void): void;
        /**
         * Searches for the child of the specified description. Returns null if not found.
         * @param key
         * @returns {any}
         */
        getChildByKey(key: string): File;
        /**
         * Override.
         */
        getMetadata(): IRecordMeta;
        /**
         * Gets a value indicating if the file can be manipulated
         **/
        readonly canManipulate: boolean;
        /**
         * Gets the extension of the file, without the dot.
         The extension is returned always as a lowercase string.
         If the file has no name set, null will be returned. If the name has no extension,
         empty string will be returned.
         **/
        readonly extension: string;
        /**
         * Gets the human size of the file
         **/
        readonly humanSize: string;
        /**
         * Gets a value indicating if the file is an image
         **/
        readonly isImage: boolean;
        /**
         * Gets the url for downloading the file
         **/
        readonly url: string;
    }
}
/**
 * Generated by xlatte
 */
declare module latte {
    /**
     * Record for table setting
     */
    class Setting extends settingBase {
        /**
         * Buffer of settings
         * @type {{}}
         */
        private static globalBuffer;
        /**
         * Clears the buffer of loaded global settings
         */
        static clearGlobalSettingsBuffer(): void;
        /**
         * Goes to the server for a global setting. It buffers it locally.
         * @param name
         * @param callback
         */
        static getGlobalBuffered(name: string, callback: (s: Setting) => void): void;
        settingType: string;
        /**
         * Gets the metadata about the record
         *
         * @returns Object
         */
        getMetadata(): IRecordMeta;
    }
}
/**
 * Generated by xlatte
 */
declare module latte {
    /**
     * Record for table user
     */
    class User extends userBase {
        static FLAG_ROOT_USER: number;
        static FLAG_SYS_ADMIN: number;
        static FLAG_BANNED_USER: number;
        static FLAG_TRASH: number;
        static FLAG_USE_BACKEND: number;
        static me: User;
        /**
         * Gets the suggestion loader
         * @returns {*}
         */
        static suggestionLoader(): (d: DataRecordValueItem, callback: (items: Item[]) => any) => Message;
        /**
         * Gets the metadata about the record
         *
         * @returns Object
         */
        getMetadata(): IRecordMeta;
        /**
         * Returns a value indicating if the user belongs to the specified group
         * @param idgroup
         * @returns {boolean}
         */
        inGroup(idgroup: number): boolean;
        /**
         * Returns a string representation of the object
         */
        toString(): string;
        /**
         * Gets a string with attributes of the record
         *
         * @returns {string}
         */
        readonly attributes: string;
        /**
         * Gets a value indicating if the user is able to use the backend
         *
         * @returns {boolean}
         */
        readonly canUseBackend: boolean;
        /**
         * Gets the flags as a string
         *
         * @returns {string}
         */
        readonly flagsString: string;
        /**
         * Property field
         */
        private _groups;
        /**
         * Gets or sets the groups of the record
         *
         * @returns {Group[]}
         */
        /**
        * Gets or sets the groups of the record
        *
        * @param {Group[]} value
        */
        groups: Group[];
        /**
         * Gets a value indicating if the user is banned
         *
         * @returns {boolean}
         */
        readonly isBanned: boolean;
        /**
         * Gets a value indicating if user is root
         *
         * @returns {boolean}
         */
        readonly isRoot: boolean;
        /**
         * Gets a value indicating if user is sys-admin
         *
         * @returns {boolean}
         */
        readonly isSysAdmin: boolean;
        /**
         * Gets a value indicating if the user is trash
         *
         * @returns {boolean}
         */
        readonly isTrash: boolean;
    }
}
/**
 * Generated by xlatte
 */
declare module latte {
    /**
     * Record for table group_user
     */
    class GroupUser extends groupUserBase {
        /**
         * Gets the metadata about the record
         *
         * @returns Object
         */
        getMetadata(): IRecordMeta;
        /**
         * Property field
         */
        private _user;
        /**
         * Gets or sets the user of the relationship
         *
         * @returns {User}
         */
        /**
        * Gets or sets the user of the relationship
        *
        * @param {User} value
        */
        user: User;
        /**
         * Gets the users name
         *
         * @returns {string}
         */
        readonly userName: string;
        /**
         * Gets the user attributes string
         *
         * @returns {string}
         */
        readonly userAttributes: string;
    }
}
/**
 * Created by josemanuel on 8/11/16.
 */
declare module latte {
    /**
     *
     */
    class CmsMainView extends View {
        /**
         *
         */
        constructor();
        /**
         * Override.
         */
        onLoad(): void;
        /**
         * Field for explorer property
         */
        private _explorer;
        /**
         * Gets the explorer
         *
         * @returns {CmsExplorer}
         */
        readonly explorer: CmsExplorer;
        /**
         * Field for topBar property
         */
        private _topBar;
        /**
         * Gets the top bar
         *
         * @returns {Element<HTMLDivElement>}
         */
        readonly topBar: Element<HTMLDivElement>;
        /**
         * Field for logo property
         */
        private _logo;
        /**
         * Gets the logo element
         *
         * @returns {Element<HTMLDivElement>}
         */
        readonly logo: Element<HTMLDivElement>;
        /**
         * Field for logout property
         */
        private _logout;
        /**
         * Gets the logout element
         *
         * @returns {Element<HTMLDivElement>}
         */
        readonly logout: Element<HTMLDivElement>;
    }
}
/**
 * Created by josemanuel on 8/7/16.
 */
declare module latte {
    /**
     *
     */
    class PageAdvancedView extends ColumnView {
        /**
         *
         */
        constructor(r?: Page);
        /**
         * Override
         */
        onLoad(): void;
        /**
         * Raises the <c>page</c> event
         */
        onPageChanged(): void;
        /**
         * Raises the <c>sentToTrash</c> event
         */
        onSentToTrash(): void;
        /**
         * Sends the page to trash
         */
        sendToTrash(): void;
        /**
         * Back field for event
         */
        private _pageChanged;
        /**
         * Gets an event raised when the value of the page property changes
         *
         * @returns {LatteEvent}
         */
        readonly pageChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _sentToTrash;
        /**
         * Gets an event raised when the page is sent to trash
         *
         * @returns {LatteEvent}
         */
        readonly sentToTrash: LatteEvent;
        /**
         * Property field
         */
        private _page;
        /**
         * Gets or sets the page of the view
         *
         * @returns {Page}
         */
        /**
        * Gets or sets the page of the view
        *
        * @param {Page} value
        */
        page: Page;
        /**
         * Field for btnDelete property
         */
        private _btnDelete;
        /**
         * Gets the delete button
         *
         * @returns {ButtonItem}
         */
        readonly btnDelete: ButtonItem;
        /**
         * Field for form property
         */
        private _form;
        /**
         * Gets the form item
         *
         * @returns {DataRecordFormItem}
         */
        readonly form: DataRecordFormItem;
    }
}
/**
 * Created by josemanuel on 9/18/16.
 */
declare module latte {
    /**
     *
     */
    class GlobalSettingView extends ColumnView {
        /**
         * Creates the view
         */
        constructor(globalSetting: IGlobalConfigSetting);
        /**
         * Override.
         */
        onLoad(): void;
        /**
         * Raises the <c>setting</c> event
         */
        onSettingChanged(): any;
        /**
         * Back field for event
         */
        private _settingChanged;
        /**
         * Gets an event raised when the value of the setting property changes
         *
         * @returns {LatteEvent}
         */
        readonly settingChanged: LatteEvent;
        /**
         * Property field
         */
        private _setting;
        /**
         * Gets or sets the setting of the view
         *
         * @returns {Setting}
         */
        /**
        * Gets or sets the setting of the view
        *
        * @param {Setting} value
        */
        setting: Setting;
        /**
         * Property field
         */
        private _globalSetting;
        /**
         * Gets or sets the setting item
         *
         * @returns {IGlobalConfigSetting}
         */
        /**
        * Gets or sets the setting item
        *
        * @param {IGlobalConfigSetting} value
        */
        globalSetting: IGlobalConfigSetting;
        /**
         * Field for settingForm property
         */
        private _settingForm;
        /**
         * Gets the form of the setting
         *
         * @returns {DataRecordFormItem}
         */
        readonly settingForm: DataRecordFormItem;
    }
}
/**
 * Created by josemanuel on 7/14/16.
 */
declare module latte {
    /**
     *
     */
    class CmsExplorer extends ExplorerView {
        /**
         *
         */
        constructor();
    }
}
/**
 * Created by josemanuel on 7/16/16.
 */
declare module latte {
    /**
     *
     */
    class PageConfigurationView extends View {
        /**
         * Creates the view
         */
        constructor(r: Page);
        private updateJsonWarning;
        private inputChanged;
        /**
         * Loads data
         */
        onLoad(): void;
        getSaveCalls(): ICall[];
        private _lblInvalidJson;
        readonly lblInvalidJson: LabelItem;
        /**
         * Field for textbox property
         */
        private _textbox;
        /**
         * Gets the textbox
         *
         * @returns {Textbox}
         */
        readonly textbox: Element<HTMLTextAreaElement>;
        /**
         * Property field
         */
        private _page;
        /**
         * Gets or sets the page of theview
         *
         * @returns {Page}
         */
        /**
        * Gets or sets the page of theview
        *
        * @param {Page} value
        */
        page: Page;
    }
}
/**
 * Created by josemanuel on 7/14/16.
 */
declare module latte {
    /**
     *
     */
    class PageSidebar extends TabView {
        static lastSelectedTab: string;
        /**
         *
         */
        constructor(r: PageExplorer);
        /**
         * Override.
         */
        onLoad(): void;
        /**
         * Override.
         */
        onSavingChanges(): boolean;
        /**
         * Override.
         */
        onSelectedTabChanged(): void;
        /**
         * Raises the <c>page</c> event
         */
        onPageChanged(): void;
        /**
         * Back field for event
         */
        private _pageChanged;
        /**
         * Gets an event raised when the value of the page property changes
         *
         * @returns {LatteEvent}
         */
        readonly pageChanged: LatteEvent;
        /**
         * Property field
         */
        private _page;
        /**
         * Gets or sets the page of the sidebar
         *
         * @returns {Page}
         */
        /**
        * Gets or sets the page of the sidebar
        *
        * @param {Page} value
        */
        page: Page;
        /**
         * Property field
         */
        private _pageExplorer;
        /**
         * Gets or sets the page explorer
         *
         * @returns {PageExplorer}
         */
        /**
        * Gets or sets the page explorer
        *
        * @param {PageExplorer} value
        */
        pageExplorer: PageExplorer;
        /**
         * Field for advancedView property
         */
        private _advancedView;
        /**
         * Gets the advanced view
         *
         * @returns {PageAdvancedView}
         */
        readonly advancedView: PageAdvancedView;
        /**
         * Field for configurationView property
         */
        private _configurationView;
        /**
         * Gets the configuration view
         *
         * @returns {PageConfigurationView}
         */
        readonly configurationView: PageConfigurationView;
        /**
         * Field for detailView property
         */
        private _detailView;
        /**
         * Gets the detail view
         *
         * @returns {PageDetailView}
         */
        readonly detailView: PageDetailView;
        /**
         * Field for tabAdvanced property
         */
        private _tabAdvanced;
        /**
         * Gets the advanced tab
         *
         * @returns {TabItem}
         */
        readonly tabAdvanced: TabItem;
        /**
         * Field for tabDetail property
         */
        private _tabDetail;
        /**
         * Gets the detail tab
         *
         * @returns {TabItem}
         */
        readonly tabDetail: TabItem;
        /**
         * Field for tabConfiguration property
         */
        private _tabConfiguration;
        /**
         * Gets the configuration tab
         *
         * @returns {TabItem}
         */
        readonly tabConfiguration: TabItem;
    }
}
declare module latte {
    /**
     * PageTagsForm
     */
    class PageTagsForm extends FormItem {
        /**
         * PageTagsForm
         */
        constructor();
        /**
         * Raises the <c>record</c> event
         */
        onRecordChanged(): void;
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
         * Field for inputItem property
         */
        private _inputItem;
        /**
         * Gets the input for control tags
         *
         * @returns {InputItem}
         */
        readonly inputItem: InputItem;
        /**
         * Field for pageTagItem property
         */
        private _pageTagItem;
        /**
         * Gets the tag system property
         *
         * @returns {SettingValueItem}
         */
        readonly pageTagItem: SettingValueItem;
        /**
         * Property field
         */
        private _record;
        /**
         * Gets or sets when the record property changes
         *
         * @returns {Page}
         */
        /**
        * Gets or sets when the record property changes
        *
        * @param {Page} value
        */
        record: Page;
    }
}
declare module latte {
    /**
     * Create new SettingValueItem
     */
    class SettingValueItem extends TagValueItem<Page> {
        /**
         * Creates a new SettingValueItem
         */
        constructor();
        /**
         * @override
         * @param setting
         */
        onCreateItem(setting?: DataRecord): void;
        /**
         * Filter Suggestions
         */
        onFilterSuggestions(): void;
        /**
         * @param {latte.Setting} record
         */
        onAddItem(record: Setting): void;
        /**
         * Called when fill to list
         * @param callback
         */
        onLoadItems(callback: GenericCallback): void;
    }
}
/**
 * Created by josemanuel on 6/10/16.
 */
declare module latte {
    /**
     *
     */
    class SignInView extends SignInViewBase {
        /**
         *
         */
        constructor();
        /**
         * Handles the form submit
         */
        formSubmit(): void;
    }
}
/**
 * Created by josemanuel on 7/26/16.
 */
declare module latte {
    var defaultPageConfigurationFragment: IFragments;
    /**
     * Helps manage the configuration of a page.
     */
    class PageConfiguration {
        /**
         * Creates an input for the setting
         * @param setting
         */
        static inputFromSetting(setting: IPageConfigurationSetting): InputItem;
        /**
         * Parses configuration
         * @param configuration
         */
        static parseConfiguration(configuration: string): IPageConfiguration;
        /**
         * Resolves a string in configuration
         * @param s
         * @returns {any}
         */
        static resolveString(s: string): string;
        /**
         * Creates the configuration helper
         */
        constructor(r: Page, pack?: IPageSettingsPack);
        /**
         * Raises the <c>pack</c> event
         */
        onPackChanged(): void;
        /**
         * Raises the <c>page</c> event
         */
        onPageChanged(): void;
        /**
         * Reloads the pack.
         * Use this only when you know for sure that the settings of the parent
         * or the page have changed.
         *
         * @param call
         */
        reloadPack(call?: () => any): void;
        /**
         * Back field for event
         */
        private _packChanged;
        /**
         * Gets an event raised when the value of the pack property changes
         *
         * @returns {LatteEvent}
         */
        readonly packChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _pageChanged;
        /**
         * Gets an event raised when the value of the page property changes
         *
         * @returns {LatteEvent}
         */
        readonly pageChanged: LatteEvent;
        /**
         * Gets a value indicating if children of page may have children
         *
         * @returns {boolean}
         */
        readonly childrenMayHaveChildren: boolean;
        /**
         * Gets the fragments for the page, including parent page criteria
         *
         * @returns {IFragments}
         */
        readonly fragments: IFragments;
        /**
         * Property field
         */
        private _hasParentConfiguration;
        /**
         * Gets a value indicating if the helper has parent configuration.
         * You should call reloadPack in order to load it.
         *
         * @returns {boolean}
         */
        readonly hasParentConfiguration: boolean;
        /**
         * Gets a value indicating if the configuration indicates settings
         *
         * @returns {boolean}
         */
        readonly hasSettings: boolean;
        /**
         * Property field
         */
        private _pack;
        /**
         * Gets or sets the settings pack
         *
         * @returns {IPageSettingsPack}
         */
        /**
        * Gets or sets the settings pack
        *
        * @param {IPageSettingsPack} value
        */
        pack: IPageSettingsPack;
        /**
         * Property field
         */
        private _page;
        /**
         * Gets or sets the page of the object
         *
         * @returns {Page}
         */
        /**
        * Gets or sets the page of the object
        *
        * @param {Page} value
        */
        page: Page;
        /**
         * Property field
         */
        private _pageConfig;
        /**
         * Gets the page configuration
         *
         * @returns {IPageConfiguration}
         */
        readonly pageConfig: IPageConfiguration;
        /**
         * Property field
         */
        private _parentConfig;
        /**
         * Gets the parent configuration settings
         *
         * @returns {IPageConfigurationSettings}
         */
        readonly parentConfig: IPageConfiguration;
        /**
         * Gets the settings for the page, including parent page criteria
         *
         * @returns {IPageConfigurationSettings}
         */
        readonly settings: IPageConfigurationSettings;
        /**
         * Property field
         */
        private _settingsValues;
        /**
         * Gets the settings
         *
         * @returns {{[index: string]: Setting}}
         */
        readonly settingsValues: {
            [index: string]: Setting;
        };
    }
}
/**
 * Created by josemanuel on 8/1/16.
 */
declare module latte {
    /**
     *
     */
    class FileItem extends Item {
        static SYS_THUMB_KEY: string;
        static defaultThumbWidth: number;
        static defaultThumbHeight: number;
        /**
         *
         */
        constructor(f?: latte.File);
        /**
         * Updates the thumb of the item.
         */
        private updateThumb;
        /**
         * Raises the <c>file</c> event
         */
        onFileChanged(): void;
        /**
         * Raises the <c>fileUploader</c> event
         */
        onFileUploaderChanged(): void;
        /**
         * Raises the <c>thumbCreated</c> event
         */
        onThumbCreated(): void;
        /**
         * Raises the <c>thumbSize</c> event
         */
        onThumbSizeChanged(): void;
        /**
         * Back field for event
         */
        private _fileChanged;
        /**
         * Gets an event raised when the value of the file property changes
         *
         * @returns {LatteEvent}
         */
        readonly fileChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _fileUploaderChanged;
        /**
         * Gets an event raised when the value of the fileUploader property changes
         *
         * @returns {LatteEvent}
         */
        readonly fileUploaderChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _thumbCreated;
        /**
         * Gets an event raised when the system thumb has been created
         *
         * @returns {LatteEvent}
         */
        readonly thumbCreated: LatteEvent;
        /**
         * Back field for event
         */
        private _thumbSizeChanged;
        /**
         * Gets an event raised when the value of the thumbSize property changes
         *
         * @returns {LatteEvent}
         */
        readonly thumbSizeChanged: LatteEvent;
        /**
         * Property field
         */
        private _file;
        /**
         * Gets or sets the latte File
         *
         * @returns {latte.File}
         */
        /**
        * Gets or sets the latte File
        *
        * @param {latte.File} value
        */
        file: latte.File;
        /**
         * Property field
         */
        private _fileUploader;
        /**
         * Gets or sets the file uploader for this item. After uploading the file record will be added.
         *
         * @returns {FileUploader}
         */
        /**
        * Gets or sets the file uploader for this item. After uploading the file record will be added.
        *
        * @param {FileUploader} value
        */
        fileUploader: FileUploader;
        /**
         * Property field
         */
        private _thumbSize;
        /**
         * Gets or sets the size of the thumbnail
         *
         * @returns {Size}
         */
        /**
        * Gets or sets the size of the thumbnail
        *
        * @param {Size} value
        */
        thumbSize: Size;
        /**
         * Property field
         */
        private _quality;
        /**
         * Gets or sets the quality value
         *
         * @returns {number}
         */
        /**
        * Gets or sets the quality value
        *
        * @param {number} value
        */
        quality: number;
        /**
         * Field for infoBar property
         */
        private _divBar;
        /**
         * Gets the info bar element
         *
         * @returns {Element<HTMLDivElement>}
         */
        readonly divBar: Element<HTMLDivElement>;
        /**
         * Field for divExtension property
         */
        private _divExtension;
        /**
         * Gets the extension div
         *
         * @returns {Element<HTMLDivElement>}
         */
        readonly divExtension: Element<HTMLDivElement>;
        /**
         * Field for divName property
         */
        private _divName;
        /**
         * Gets the name element
         *
         * @returns {Element<HTMLDivElement>}
         */
        readonly divName: Element<HTMLDivElement>;
        /**
         * Field for divSize property
         */
        private _divSize;
        /**
         * Gets the size element
         *
         * @returns {Element<HTMLDivElement>}
         */
        readonly divSize: Element<HTMLDivElement>;
        /**
         * Field for thumb property
         */
        private _divThumb;
        /**
         * Gets the thumb of the item
         *
         * @returns {Element<HTMLDivElement>}
         */
        readonly divThumb: Element<HTMLDivElement>;
        /**
         * Field for img property
         */
        private _img;
        /**
         * Gets the image of the thumb
         *
         * @returns {Element<HTMLDivElement>}
         */
        readonly img: Element<HTMLImageElement>;
        /**
         * Field for progressBar property
         */
        private _progressBar;
        /**
         * Gets the progress item
         *
         * @returns {ProgressItem}
         */
        readonly progressBar: ProgressItem;
    }
}
/**
 * Generated by xlatte
 */
declare module latte {
    /**
     * Record for table page
     */
    class Page extends pageBase {
        /**
         * Allows the user to see the page and access the fragments of the page.
         * @type {number}
         */
        static PERMISSION_READ: number;
        /**
         * Allows the user to modify the page after it becomes online.
         * @type {number}
         */
        static PERMISSION_WRITE: number;
        /**
         * Allows the user to delete the page.
         * @type {number}
         */
        static PERMISSION_DELETE: number;
        /**
         * Allows the user to insert new children to the page.
         * @type {number}
         */
        static PERMISSION_INSERT_CHILD: number;
        /**
         * Allows the user to read children of the page. User gets to know the children he owns.
         * @type {number}
         */
        static PERMISSION_READ_CHILDREN: number;
        /**
         * Returns a boolean indicating if the user has the specified permission for the page
         * @param permission
         */
        canI(permission: number): boolean;
        /**
         * Gets the metadata about the record
         *
         * @returns Object
         */
        getMetadata(): IRecordMeta;
        /**
         * Override.
         * @param form
         */
        onFormCreated(form: DataRecordFormItem): void;
        /**
         * Raises the <c>onlineSwitched</c> event
         */
        onOnlineSwitched(): void;
        /**
         * Back field for event
         */
        private _onlineSwitched;
        /**
         * Gets an event raised when the online attribute has been switched
         *
         * @returns {LatteEvent}
         */
        readonly onlineSwitched: LatteEvent;
        /**
         * Gets a value indicating if user has WRITE permission
         *
         * @returns {boolean}
         */
        readonly canIDelete: boolean;
        /**
         * Gets a value indicating if user has INSERT_CHILD permission
         *
         * @returns {boolean}
         */
        readonly canIInsertChild: boolean;
        /**
         * Gets a value indicating if user has READ permission
         *
         * @returns {boolean}
         */
        readonly canIRead: boolean;
        /**
         * Gets a value indicating if the user has READ_CHILDREN permission
         *
         * @returns {boolean}
         */
        readonly canIReadChildren: boolean;
        /**
         * Gets a value indicating if user has WRITE permission
         *
         * @returns {boolean}
         */
        readonly canIWrite: boolean;
        /**
         * Property field
         */
        private _configurationSetting;
        /**
         * Gets or sets the configuration of the page
         *
         * @returns {Setting}
         */
        /**
        * Gets or sets the configuration of the page
        *
        * @param {Setting} value
        */
        configurationSetting: Setting;
        /**
         * Field for configuration property
         */
        private _configuration;
        /**
         * Gets the configuration helper for the page
         *
         * @returns {PageConfiguration}
         */
        readonly configuration: PageConfiguration;
        /**
         * Gets a value indicating if the page belongs to the logged user
         *
         * @returns {boolean}
         */
        readonly isMine: boolean;
        /**
         * Gets a value indicating if the user owns the page and has not write permissions
         *
         * @returns {boolean}
         */
        readonly isMineAndCantWrite: boolean;
        /**
         * Gets a value indicating if the page is currently online
         *
         * @returns {boolean}
         */
        readonly isOnline: boolean;
    }
}
/**
 * Created by josemanuel on 4/29/15.
 */
declare module latte {
    interface ICropBounds {
        top?: number;
        left?: number;
        right?: number;
        bottom?: number;
    }
    enum ImageFit {
        AspectFit = 0,
        AspectFill = 1,
        AspectFillNear = 2,
        AspectFillFar = 3
    }
    interface ImageExportOptions {
        size: Size;
        type?: string;
        quality?: number;
        background?: Color;
        fit: ImageFit;
        resize?: boolean;
    }
    /**
     *
     */
    class ImageUtil {
        static DEFAULT_QUALITY: number;
        static DEFAULT_TYPE: string;
        /**
         * Returns the amount of bytes on the specified string
         * @param base64
         * @returns {number}
         */
        static base64ByteSize(base64: string): number;
        /**
         * Parses ImageFit from specified string
         * @param fit
         * @returns {any}
         */
        static imageFitFromString(fit: string): ImageFit;
        /**
         * Creates an icon of the specified file, assuming it's an image file.
         *
         * @param file
         * @param options
         * @param callback
         */
        static createThumbOfFile(file: any, options: ImageExportOptions, callback?: (dataUrl: string) => any): void;
        /**
         * Creates an icon of the specified image.
         * This algorithm is stored under the name _Steps because it makes n steps
         * to scale down the image. It proved to be ineficient and results unwanted.
         * @param image
         * @param size
         * @returns {string}
         */
        static createThumbOfImage_Steps(image: HTMLImageElement, size: Size): string;
        /**
         * Crops the image with the specified crop bounds.
         * Crop bounds are referenced as dimensions from the edges to the specified property.
         * @param image
         * @param crop
         * @param options
         * @returns {HTMLImageElement|HTMLElement}
         */
        static cropImage(image: HTMLImageElement, crop: ICropBounds, options?: ImageExportOptions): HTMLImageElement;
        /**
         * Resize Images
         *
         * @param {HTMLImageElement} image
         * @param {latte.ImageExportOptions} options
         * @return {string}
         */
        static resizeImage(image: HTMLImageElement, options: ImageExportOptions): string;
        /**
         * Creates a smaller version of the image.
         * @param image
         * @param options
         */
        static createThumbOfImage(image: HTMLImageElement, options: ImageExportOptions): string;
        private static resample_hermite;
        /**
         * Creates an icon of the specified url image
         *
         * @param url
         * @param options
         * @param callback
         */
        static createThumbOfUrl(url: string, options: ImageExportOptions, callback?: (dataUrl: string) => any): void;
        /**
         * Gets the base64 data of the specified data url
         * @param dataUrl
         */
        static getBase64(dataUrl: string): string;
        /**
         * Reads the file and returns de data as dataUrl in the callback
         * @param url
         * @param callback
         */
        static readFileAsDataUrl(file: any, callback: (dataUrl: string) => any): void;
        /**
         * Gets the image encoded as base64 data
         * @param image
         * @returns {string}
         */
        static getImageAsBase64(image: HTMLImageElement): string;
        /**
         * Gets the mimetype of the specified extension.
         * Pass extension either with or without dot at the first character.
         * @param extension
         */
        static mimeTypeOf(extension: string): string;
        /**
         * Returns a value indicating if the specified mimetype is compressabel
         * @param mimeType
         * @returns {boolean}
         */
        static mimeTypeCompressable(mimeType: string): boolean;
        /**
         * Returns a value indicating if the specified mimetype is compressabel
         * @param mimeType
         * @returns {boolean}
         */
        static mimeTypeTransparent(mimeType: string): boolean;
        /**
         * Rotates the image counterclockwise
         * @param image
         * @param options
         * @returns {HTMLImageElement|HTMLElement}
         */
        static rotateCounterClockwise(image: HTMLImageElement, options?: ImageExportOptions): HTMLImageElement;
        /**
         * Rotates the image clockwise.
         * @param image
         * @param options
         * @returns {HTMLImageElement|HTMLElement}
         */
        static rotateClockwise(image: HTMLImageElement, options?: ImageExportOptions): HTMLImageElement;
    }
}
/**
 * Created by josemanuel on 9/21/16.
 */
declare module latte {
    interface InstallWizardStep {
        (callback: () => any): any;
    }
    /**
     *
     */
    class InstallWizardView extends View {
        /**
         * Notes during installation
         * @type {Array}
         */
        notes: string[];
        /**
         *
         */
        constructor();
        /**
         * Starts the wizard
         */
        start(): void;
        /**
         * Executes the next step of installation wizard
         */
        disptachStep(): void;
        /**
         * Step for checking folder writability
         * @param callback
         */
        checkFolderWritable(callback: () => any): void;
        /**
         * Checks if htaccess is present, installs if not
         * @param callback
         */
        checkHtAccess(callback: () => any): void;
        /**
         * Checks if mod_rewrite is available
         * @param callback
         */
        checkModRewrite(callback: () => any): void;
        /**
         * Ensures the database is present
         * @param callback
         */
        setupDataBase(callback: () => any): void;
        /**
         *
         * @param callback
         */
        setupDBConnection(callback: () => any): void;
        setupRoot(callback: () => any): void;
        /**
         * Chooose lang
         * @param callback
         */
        langChoose(callback: () => any): void;
        /**
         * Override. Start dispatching.
         */
        onLoad(): void;
        /**
         * Raises the <c>ended</c> event
         */
        onEnded(): void;
        /**
         * Back field for event
         */
        private _ended;
        /**
         * Gets an event raised when the install steps end
         *
         * @returns {LatteEvent}
         */
        readonly ended: LatteEvent;
        /**
         * Field for steps property
         */
        private _steps;
        /**
         * Gets the steps to execute on the wizard
         *
         * @returns {InstallWizardStep[]}
         */
        readonly steps: InstallWizardStep[];
        /**
         * Field for spinner property
         */
        private _spinner;
        /**
         * Gets the spinner element
         *
         * @returns {HTMLDivElement}
         */
        readonly spinner: HTMLDivElement;
    }
}
/**
 * Created by josemanuel on 7/18/16.
 */
declare module latte {
    /**
     *
     */
    class PageDetailView extends ColumnView {
        private validated;
        /**
         * Creates the view
         */
        constructor();
        /**
         * Adds settings to the view
         * @param settings
         * @param values
         */
        addSettings(settings: IPageConfigurationSettings, values: {
            [index: string]: Setting;
        }): void;
        /**
         * Loads the settings of the page
         */
        loadSettings(): void;
        /**
         * Override
         */
        onLoad(): void;
        /**
         * Raises the <c>page</c> event
         */
        onPageChanged(): void;
        /**
         * Override.
         */
        onSavingChanges(): boolean;
        /**
         * Opens the editor
         */
        openEditor(): void;
        /**
         * Override.
         * @returns {any[]}
         */
        getSaveCalls(): ICall[];
        /**
         * @returns {Array}
         */
        saveSettingsCalls(): ICall[];
        /**
         * Back field for event
         */
        private _pageChanged;
        /**
         * Gets an event raised when the value of the page property changes
         *
         * @returns {LatteEvent}
         */
        readonly pageChanged: LatteEvent;
        /**
         * Property field
         */
        private _page;
        /**
         * Gets or sets the page of the view
         *
         * @returns {Page}
         */
        /**
        * Gets or sets the page of the view
        *
        * @param {Page} value
        */
        page: Page;
        /**
         * Field for btnOpen property
         */
        private _btnOpen;
        /**
         * Gets the open button
         *
         * @returns {ButtonItem}
         */
        readonly btnOpen: ButtonItem;
        /**
         * Field for dataForm property
         */
        private _dataForm;
        /**
         * Gets the data record for item of the page
         *
         * @returns {DataRecordFormItem}
         */
        readonly dataForm: DataRecordFormItem;
        /**
         * Field for settingsForm property
         */
        private _settingsForm;
        /**
         * Gets the settings form item
         *
         * @returns {FormItem}
         */
        readonly settingsForm: FormItem;
        /**
         * Field for tagsForm property
         */
        private _tagsForm;
        /**
         * Gets the tags form item
         *
         * @returns {PageTagsForm}
         */
        readonly tagsForm: PageTagsForm;
    }
}
/**
 * Created by josemanuel on 7/23/16.
 */
declare module latte {
    /**
     * PageEditorView
     */
    class PageEditorView extends View {
        private timerId;
        private fragmentAdapters;
        private titleChanged;
        private cancelTitle;
        private onlineChanged;
        /**
         * @param {latte.Page} r
         * @param {latte.IPageSettingsPack} pack
         */
        constructor(r: Page, pack?: IPageSettingsPack);
        /**
         * Clears the ribbon of non-standard items and tabs
         */
        private clearRibbon;
        /**
         * Handles focus on the fragment
         *
         * @param adapter
         */
        private fragmentFocus;
        /**
         * Updates the tabs of the specified fragment adapter
         * @param adapter
         */
        private fragmentTabsUpdate;
        /**
         * Adds a fragment to the ui
         * @param key
         * @param fragmentData
         * @param fragment
         */
        addFragment(key: string, fragmentData: IFragment, fragment: Fragment): void;
        /**
         * Loads the page
         */
        loadPage(): void;
        /**
         * Raises the <c>focusedFragmentAdapter</c> event
         */
        onFocusedFragmentAdapterChanged(): void;
        /**
         * Override.
         */
        onLoad(): void;
        /**
         * Override.
         */
        onUnload(): void;
        /**
         * Raises the <c>page</c> event
         */
        onPageChanged(): void;
        /**
         * Previews the page
         */
        preview(): void;
        /**
         *
         */
        saveTick(): void;
        /**
         * Back field for event
         */
        private _closeRequested;
        /**
         * Gets an event raised when close was requested
         *
         * @returns {LatteEvent}
         */
        readonly closeRequested: LatteEvent;
        /**
         * Raises the <c>closeRequested</c> event
         */
        onCloseRequested(): void;
        /**
         * Back field for event
         */
        private _focusedFragmentAdapterChanged;
        /**
         * Gets an event raised when the value of the focusedFragmentAdapter property changes
         *
         * @returns {LatteEvent}
         */
        readonly focusedFragmentAdapterChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _pageChanged;
        /**
         * Gets an event raised when the value of the page property changes
         *
         * @returns {LatteEvent}
         */
        readonly pageChanged: LatteEvent;
        /**
         * Property field
         */
        private _focusedFragmentAdapter;
        /**
         * Gets or sets the focused fragment adapter
         *
         * @returns {FragmentAdapter<IFragment>}
         */
        /**
        * Gets or sets the focused fragment adapter
        *
        * @param {FragmentAdapter<IFragment>} value
        */
        focusedFragmentAdapter: FragmentAdapter<IFragment>;
        /**
         * Property field
         */
        private _pack;
        /**
         * Gets or sets the settings pack of the page
         *
         * @returns {IPageSettingsPack}
         */
        /**
        * Gets or sets
        *
        * @param {IPageSettingsPack} value
        */
        pack: IPageSettingsPack;
        /**
         * Property field
         */
        private _page;
        /**
         * Gets or sets the record of the view
         *
         * @returns {Page}
         */
        /**
        * Gets or sets the record of the view
        *
        * @param {Page} value
        */
        page: Page;
        /**
         * Gets the ribbon of the view
         *
         * @returns {Ribbon}
         */
        readonly ribbon: Ribbon;
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
        /**
         * Field for btnPreview property
         */
        private _btnPreview;
        /**
         * Gets the preview button
         *
         * @returns {ButtonItem}
         */
        readonly btnPreview: ButtonItem;
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
         * Field for ribbonView property
         */
        private _ribbonView;
        /**
         * Gets the ribbon in the view
         *
         * @returns {RibbonView}
         */
        readonly ribbonView: RibbonView;
        /**
         * Field for onlineInput property
         */
        private _onlineInput;
        /**
         * Gets the online input
         *
         * @returns {InputItem}
         */
        readonly onlineInput: InputItem;
        /**
         * Field for tabPage property
         */
        private _tabPage;
        /**
         * Gets the page tab
         *
         * @returns {TabItem}
         */
        readonly tabPage: TabItem;
        /**
         * Field for titleElement property
         */
        private _titleElement;
        /**
         * Gets the title element
         *
         * @returns {Element<HTMLDivElement>}
         */
        readonly titleElement: Element<HTMLDivElement>;
    }
}
/**
 * Created by josemanuel on 10/9/16.
 */
declare module latte {
    /**
     *
     */
    class ImageFragmentAdapter extends FragmentAdapter<IImageFragment> {
        static PRESENTABLE_KEY: string;
        /**
         *
         */
        constructor();
        /**
         * Uploads the file on the input
         */
        private fileInputChanged;
        private showProgressItem;
        private hideProgressItem;
        private redoImages;
        private viewOriginal;
        private viewResultImage;
        /**
         * Handler for the button alt image
         */
        private btnImageAltText_Click;
        /**
         * Override
         */
        getEditorTabs(): TabItem[];
        /**
         * Returns the items for the ribbon of the view
         * @returns {Array}
         */
        getEditorTabItems(): Item[];
        /**
         * Generates the presentable image of the specified file item.
         * @param file
         * @param callback
         */
        generatePresentableImage(file: File, callback: (child?: File) => void): void;
        /**
         * Activates the file input
         */
        insertImage(): void;
        /**
         * Raises the <c>file</c> event
         */
        onFileChanged(): void;
        /**
         * Override.
         */
        onCreateEditorItem(): void;
        /**
         * Raises the <c>image</c> event
         */
        onImageChanged(): void;
        /**
         * Raises the <c>presentableFile</c> event
         */
        onPresentableFileChanged(): void;
        /**
         * Raises the <c>fragmentConfiguration</c> event
         */
        onFragmentConfigurationChanged(): void;
        /**
         * Sets the file
         * @param file
         */
        setSystemFile(file: SystemFile): void;
        /**
         * Serializes the presentable image
         */
        serialize(): void;
        /**
         * Unserializes the presentable image
         */
        unserialize(): void;
        /**
         * Back field for event
         */
        private _fileChanged;
        /**
         * Gets an event raised when the value of the file property changes
         *
         * @returns {LatteEvent}
         */
        readonly fileChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _imageChanged;
        /**
         * Gets an event raised when the value of the image property changes
         *
         * @returns {LatteEvent}
         */
        readonly imageChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _presentableFileChanged;
        /**
         * Gets an event raised when the value of the presentableFile property changes
         *
         * @returns {LatteEvent}
         */
        readonly presentableFileChanged: LatteEvent;
        /**
         * Property field
         */
        private _file;
        /**
         * Gets or sets the file of image
         *
         * @returns {File}
         */
        /**
        * Gets or sets the file of image
        *
        * @param {File} value
        */
        file: File;
        /**
         * Field for fileInput property
         */
        private _fileInput;
        /**
         * Gets the file input
         *
         * @returns {Element<HTMLInputElement>}
         */
        readonly fileInput: Element<HTMLInputElement>;
        /**
         * Property field
         */
        private _image;
        /**
         * Gets or sets the presentable image
         *
         * @returns {HTMLImageElement}
         */
        /**
        * Gets or sets the presentable image
        *
        * @param {HTMLImageElement} value
        */
        image: HTMLImageElement;
        /**
         * Field for imageContainer property
         */
        private _imageContainer;
        /**
         * Gets the container of the image
         *
         * @returns {HTMLDivElement}
         */
        readonly imageContainer: HTMLDivElement;
        /**
         * Field for imageSize property
         */
        private _imageSize;
        /**
         * Gets the configured image size
         *
         * @returns {Size}
         */
        readonly imageSize: Size;
        /**
         * Property field
         */
        private _presentableFile;
        /**
         * Gets or sets the presentable file of the fragment
         *
         * @returns {File}
         */
        /**
        * Gets or sets the presentable file of the fragment
        *
        * @param {File} value
        */
        presentableFile: File;
        /**
         * Field for progressItem property
         */
        private _progressItem;
        /**
         * Gets the progress item
         *
         * @returns {ProgressItem}
         */
        readonly progressItem: ProgressItem;
        /**
         * Field for btnInsertImage property
         */
        private _btnInsertImage;
        /**
         * Gets the inser image button
         *
         * @returns {ButtonItem}
         */
        readonly btnInsertImage: ButtonItem;
        /**
         * Field for btnRedoImages property
         */
        private _btnRedoImages;
        /**
         * Gets the redo images button
         *
         * @returns {ButtonItem}
         */
        readonly btnRedoImages: ButtonItem;
        /**
         * Field for btnImageAltText property
         */
        private _btnImageAltText;
        /**
         * Gets the button for place the alt text
         *
         * @returns {ButtonItem}
         */
        readonly btnImageAltText: ButtonItem;
        /**
         * Field for btnResultImage property
         */
        private _btnResultImage;
        /**
         * Gets the result image
         *
         * @returns {ButtonItem}
         */
        readonly btnResultImage: ButtonItem;
        /**
         * Field for btnViewOriginal property
         */
        private _btnViewOriginal;
        /**
         * Gets the view original button
         *
         * @returns {ButtonItem}
         */
        readonly btnViewOriginal: ButtonItem;
        /**
         * Field for tabImage property
         */
        private _tabImage;
        /**
         * Gets the image tab
         *
         * @returns {TabItem}
         */
        readonly tabImage: TabItem;
    }
}
/**
 * Created by josemanuel on 7/29/16.
 */
declare module latte {
    /**
     *
     */
    class ImageGalleryFragmentAdapter extends FragmentAdapter<IImageGalleryFragment> {
        static PRESENTABLE_KEY: string;
        static defaultThumbWidth: number;
        static defaultThumbHeight: number;
        static defaultImageWidth: number;
        static defaultImageHeight: number;
        /**
         *
         */
        constructor();
        /**
         * Uploads the file on the input
         */
        private fileInputChanged;
        /**
         * Generates the presentable image of the specified file item.
         * @param item
         * @param callback
         */
        private generatePresentableImage;
        /**
         * Gets the files based
         */
        private getFileRecords;
        /**
         * Moves the selected image one position further
         */
        private moveImageAfter;
        /**
         * Moves the selected image one position back
         */
        private moveImageBefore;
        /**
         * Swaps the selected image with the contigous beofe (or after if the passed flag is true)
         * @param after
         */
        private swapSelectedImage;
        /**
         * Redoes the thumbs of selected file item
         */
        private redoThumbs;
        /**
         * Removes the selected image. (Asking first)
         */
        private removeSelectedImage;
        /**
         * Updates the enabled property of move before and after buttons
         */
        private updateBeforeAfterButtons;
        /**
         * Opens the viewer for selected presentable image
         */
        private viewSelectedImage;
        /**
         * Opens the editor for selected original
         */
        private viewSelectedOriginal;
        /**
         * Opens the viewer for selected thumb
         */
        private viewSelectedThumb;
        /**
         * Handler for the button alt text for image
         */
        private btnImageAltText_Click;
        /**
         * Handler for the button alt text for image
         */
        private btnImageSetSize_Click;
        /**
         *
         */
        activateFileInput(): void;
        /**
         * @return {string}
         */
        getDetaultImageDescription(): IImageDescription;
        /**
         * Override
         */
        getEditorTabs(): TabItem[];
        /**
         * Returns the items for the ribbon of the view
         * @returns {Array}
         */
        getEditorTabItems(): Item[];
        /**
         * Override. Raises the <c>createEditorItem</c> event
         */
        onCreateEditorItem(): void;
        /**
         * Raises the <c>fragmentConfiguration</c> event
         */
        onFragmentConfigurationChanged(): void;
        /**
         * Raises the <c>filesSelected</c> event
         */
        onFilesSelected(files: FileList): void;
        /**
         * Creates the image of the specified file item
         * @param item
         * @param f
         */
        createImagesOfFile(item: FileItem, f?: SystemFile): void;
        /**
         * Raises the <c>selectedFile</c> event
         */
        onSelectedFileChanged(): void;
        /**
         * Serializes the file array into the value of the fragment
         */
        serialize(): void;
        /**
         * Unserializes
         */
        unserialize(): void;
        /**
         * Back field for event
         */
        private _filesSelected;
        /**
         * Gets an event raised when files are selected for upload
         *
         * @returns {LatteEvent}
         */
        readonly filesSelected: LatteEvent;
        /**
         * Back field for event
         */
        private _selectedFileChanged;
        /**
         * Gets an event raised when the value of the selectedFile property changes
         *
         * @returns {LatteEvent}
         */
        readonly selectedFileChanged: LatteEvent;
        /**
         * Field for files property
         */
        private _files;
        /**
         * Gets the files of the editor
         *
         * @returns {Collection<FileItem>}
         */
        readonly files: Collection<FileItem>;
        /**
         * Field for imageSize property
         */
        private _imageSize;
        /**
         * Gets the configured image size
         *
         * @returns {Size}
         */
        readonly imageSize: Size;
        /**
         * Property field
         */
        private _selectedFile;
        /**
         * Gets or sets the selected file item
         *
         * @returns {FileItem}
         */
        /**
        * Gets or sets the selected file item
        *
        * @param {FileItem} value
        */
        selectedFile: FileItem;
        /**
         * Field for thumbSize property
         */
        private _thumbSize;
        /**
         * Gets the configured thumb size
         *
         * @returns {Size}
         */
        readonly thumbSize: Size;
        /**
         * Field for btnInsertImage property
         */
        private _btnInsertImage;
        /**
         * Gets the insert image button
         *
         * @returns {ButtonItem}
         */
        readonly btnInsertImage: ButtonItem;
        /**
         * Field for btnoveImageAfter property
         */
        private _btnMoveImageAfter;
        /**
         * Gets the move image after button
         *
         * @returns {ButtonItem}
         */
        readonly btnMoveImageAfter: ButtonItem;
        /**
         * Field for btnMoveImageBefore property
         */
        private _btnMoveImageBefore;
        /**
         * Gets the move image before item
         *
         * @returns {ButtonItem}
         */
        readonly btnMoveImageBefore: ButtonItem;
        /**
         * Field for btnRemoveImage property
         */
        private _btnRemoveImage;
        /**
         * Gets the remove image button
         *
         * @returns {ButtonItem}
         */
        readonly btnRemoveImage: ButtonItem;
        /**
         * Field for btnRedoThumb property
         */
        private _btnRedoThumb;
        /**
         * Gets the thumbs redo button
         *
         * @returns {ButtonItem}
         */
        readonly btnRedoThumb: ButtonItem;
        /**
         * Field for btnViewImage property
         */
        private _btnViewImage;
        /**
         * Gets the view image button
         *
         * @returns {ButtonItem}
         */
        readonly btnViewImage: ButtonItem;
        /**
         * Field for btnViewOriginal property
         */
        private _btnViewOriginal;
        /**
         * Gets the view original image button
         *
         * @returns {ButtonItem}
         */
        readonly btnViewOriginal: ButtonItem;
        /**
         * Field for viewThumb property
         */
        private _btnViewThumb;
        /**
         * Gets the view thumb button
         *
         * @returns {ButtonItem}
         */
        readonly btnViewThumb: ButtonItem;
        /**
         * Field for btnImageAltText property
         */
        private _btnImageAltText;
        /**
         * Gets the button for place the alt text
         *
         * @returns {ButtonItem}
         */
        readonly btnImageAltText: ButtonItem;
        /**
         * Field for btnImageSetSize property
         */
        private _btnImageSetSize;
        /**
         * Gets the button for set the sizes of the current image
         *
         * @returns {ButtonItem}
         */
        readonly btnImageSetSize: ButtonItem;
        /**
         * Field for fileInput property
         */
        private _fileInput;
        /**
         * Gets the file input
         *
         * @returns {Element<HTMLInputElement>}
         */
        readonly fileInput: Element<HTMLInputElement>;
        /**
         * Field for tabGallery property
         */
        private _tabGallery;
        /**
         * Gets the gallery tab
         *
         * @returns {TabItem}
         */
        readonly tabGallery: TabItem;
        /**
         * Field for tabImage property
         */
        private _tabImage;
        /**
         * Gets the image tab
         *
         * @returns {TabItem}
         */
        readonly tabImage: TabItem;
    }
}
/**
 * Created by josemanuel on 9/27/16.
 */
declare module latte {
    enum ImageZoomMode {
        ACTUAL_SIZE = 0,
        FIT = 1,
        NUMBER = 2
    }
    /**
     * Possible areas of crop
     */
    enum CropArea {
        NONE = 0,
        INSIDE = 1,
        TOP = 2,
        LEFT = 3,
        RIGHT = 4,
        BOTTOM = 5,
        TOP_LEFT = 6,
        TOP_RIGHT = 7,
        BOTTOM_LEFT = 8,
        BOTTOM_RIGHT = 9
    }
    enum ImageEditorTool {
        NONE = 0,
        CROP = 1
    }
    interface IImageEditorUndo {
        bytes: number;
        image: HTMLImageElement;
    }
    /**
     *
     */
    class ImageEditorView extends ToolbarView implements ISave {
        static QUALITY: number;
        /**
         * Gets a function that saves the image on the editor to the specified file
         * @returns {null}
         */
        private static fileSaver;
        /**
         * Creates an editor, shows it and returns it without any image
         * @returns {latte.ImageEditorView}
         */
        static showEditor(save?: (callback: () => any) => any): ImageEditorView;
        /**
         * Shows the editor for the specified file
         * @param file
         */
        static editImageFile(file: File): ImageEditorView;
        /**
         * Shows the editor for the specified files, starting by specified image as current.
         */
        static editImageFiles(files: File[], current?: number): ImageEditorView;
        /**
         * Shows the editor for the specified image's URL
         * @param url
         * @param save
         * @returns {ImageEditorView}
         */
        static editImageByUrl(url: string, save?: () => any): ImageEditorView;
        /**
         *
         * @param image
         * @param save
         * @returns {ImageEditorView}
         */
        static editImage(image: HTMLImageElement, save?: () => any): ImageEditorView;
        private bodyKeyChecker;
        private draggingCropArea;
        private undoStack;
        private loadingFromUndo;
        private defaultQuality;
        private _quality;
        /**
         * Creates the editor view
         */
        constructor();
        /**
         * Prepares UI for crop tool
         */
        private activateCrop;
        /**
         * Handles click on the close button
         */
        private closeClick;
        /**
         * Actually performs the crop of the crop tool
         */
        private cropNow;
        /**
         * Checks image layout after image loading
         */
        private layoutCheck;
        /**
         * Gets the crop area depending on the specified point
         * @param x
         * @param y
         * @returns {any}
         */
        private getCropArea;
        /**
         * Handles editor mousemove
         * @param e
         */
        private mouseMove;
        /**
         * Handles editor mouse up
         * @param e
         */
        private mouseUp;
        /**
         * Handles editor mouse down
         * @param e
         */
        private mouseDown;
        /**
         * Transforms a client coordinate to an image coordinate
         * @param x
         * @returns {number}
         */
        private toActualX;
        /**
         * Transforms a client coordinate to an image coordinate
         * @param y
         * @returns {number}
         */
        private toActualY;
        /**
         * Updates the cropper by the current draggingCropArea
         * @param x
         * @param y
         */
        private updateCropperDrag;
        /**
         * Converts the crop bounds to an actual rectangle
         * @param b
         * @returns {latte.Rectangle}
         */
        private cropBoundsToRectangle;
        /**
         * Returns a corrected ICropBounds object, making the rectangle absolute and
         * not larger than the image or canvas
         * @param b
         * @returns {{top: number, left: number, right: number, bottom: number}}
         */
        private cropBoundsCorrection;
        private swapZoom;
        private updateInfo;
        /**
         * Cancels current action
         */
        cancelCurrentAction(): void;
        /**
         * Tries to dismiss the image, first asking for saving changes
         * @param callback
         */
        dismissImage(callback: () => any): void;
        /**
         * Changes the enable state of controls
         * @param enabled
         */
        /**
         * Gets the quality setting for images
         * @param callback
         */
        getQuality(callback: (quality: number) => void): void;
        enableControls(enabled: boolean): void;
        /**
         * Loads the image from the specified url
         * @param url
         */
        loadImageFromUrl(url: string): void;
        /**
         * Raises the <c>bytes</c> event
         */
        onBytesChanged(): void;
        /**
         * Raises the <c>closed</c> event
         */
        onClosed(): void;
        /**
         * Raises the <c>closeRequested</c> event
         */
        onCloseRequested(): void;
        /**
         * Raises the <c>cropBounds</c> event
         */
        onCropBoundsChanged(): void;
        /**
         * Raises the <c>editable</c> event
         */
        onEditableChanged(): void;
        /**
         * Raises the <c>image</c> event
         */
        onImageChanged(): void;
        /**
         * Raises the <c>mouseCropArea</c> event
         */
        onMouseCropAreaChanged(): void;
        /**
         * Raises the <c>nextImageRequested</c> event
         */
        onNextImageRequested(): void;
        /**
         * Raises the <c>previousImageRequested</c> event
         */
        onPreviousImageRequested(): void;
        /**
         * Raises the <c>saved</c> event
         */
        onSaved(): void;
        /**
         * Raises the <c>saveHandler</c> event
         */
        onSaveHandlerChanged(): void;
        /**
         * Raises the <c>tool</c> event
         */
        onToolChanged(): void;
        /**
         * Override
         */
        onUnsavedChangesChanged(): void;
        /**
         * Raises the <c>zoomMode</c> event
         */
        onZoomModeChanged(): void;
        /**
         * Rotates the image counter clockwise
         */
        rotateImageCounterClockwise(): void;
        /**
         * Rotates the image clockwise
         */
        rotateImageClockwise(): void;
        /**
         * Tries to save the image, and calls the callback when done
         * @param callback
         */
        save(callback?: () => any): void;
        /**
         * Shows a dialog for resizing the image
         */
        showResizeDialog(): void;
        /**
         * Undoes the last action
         */
        undo(): void;
        /**
         * Back field for event
         */
        private _bytesChanged;
        /**
         * Gets an event raised when the value of the bytes property changes
         *
         * @returns {LatteEvent}
         */
        readonly bytesChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _closed;
        /**
         * Gets an event raised when the editor has been closed
         *
         * @returns {LatteEvent}
         */
        readonly closed: LatteEvent;
        /**
         * Back field for event
         */
        private _closeRequested;
        /**
         * Gets an event raised when the close of editor has been requested
         *
         * @returns {LatteEvent}
         */
        readonly closeRequested: LatteEvent;
        /**
         * Back field for event
         */
        private _cropBoundsChanged;
        /**
         * Gets an event raised when the value of the cropBounds property changes
         *
         * @returns {LatteEvent}
         */
        readonly cropBoundsChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _editableChanged;
        /**
         * Gets an event raised when the value of the editable property changes
         *
         * @returns {LatteEvent}
         */
        readonly editableChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _imageChanged;
        /**
         * Gets an event raised when the value of the image property changes
         *
         * @returns {LatteEvent}
         */
        readonly imageChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _mouseCropAreaChanged;
        /**
         * Gets an event raised when the value of the mouseCropArea property changes
         *
         * @returns {LatteEvent}
         */
        readonly mouseCropAreaChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _nextImageRequested;
        /**
         * Gets an event raised when the next image is requested
         *
         * @returns {LatteEvent}
         */
        readonly nextImageRequested: LatteEvent;
        /**
         * Back field for event
         */
        private _previousImageRequested;
        /**
         * Gets an event raised when the previous image is requested
         *
         * @returns {LatteEvent}
         */
        readonly previousImageRequested: LatteEvent;
        /**
         * Back field for event
         */
        private _saved;
        /**
         * Gets an event raised when the image is saved
         *
         * @returns {LatteEvent}
         */
        readonly saved: LatteEvent;
        /**
         * Back field for event
         */
        private _saveHandlerChanged;
        /**
         * Gets an event raised when the value of the saveHandler property changes
         *
         * @returns {LatteEvent}
         */
        readonly saveHandlerChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _toolChanged;
        /**
         * Gets an event raised when the value of the tool property changes
         *
         * @returns {LatteEvent}
         */
        readonly toolChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _zoomModeChanged;
        /**
         * Gets an event raised when the value of the zoomMode property changes
         *
         * @returns {LatteEvent}
         */
        readonly zoomModeChanged: LatteEvent;
        /**
         * Property field
         */
        private _bytes;
        /**
         * Gets or sets the size of the image in bytes
         *
         * @returns {number}
         */
        /**
        * Gets or sets the size of the image in bytes
        *
        * @param {number} value
        */
        bytes: number;
        /**
         * Property field
         */
        private _cropBounds;
        /**
         * Gets or sets the crop bounds
         *
         * @returns {ICropBounds}
         */
        /**
        * Gets or sets the crop bounds
        *
        * @param {ICropBounds} value
        */
        cropBounds: ICropBounds;
        /**
         * Property field
         */
        private _editable;
        /**
         * Gets or sets a value indicating if the image should be editable
         *
         * @returns {boolean}
         */
        /**
        * Gets or sets a value indicating if the image should be editable
        *
        * @param {boolean} value
        */
        editable: boolean;
        /**
         * Property field
         */
        private _image;
        /**
         * Gets or sets the image of the editor
         *
         * @returns {HTMLImageElement}
         */
        /**
        * Gets or sets the image of the editor
        *
        * @param {HTMLImageElement} value
        */
        image: HTMLImageElement;
        /**
         * Property field
         */
        private _mouseCropArea;
        /**
         * Gets or sets the CropArea of current mouse position
         *
         * @returns {CropArea}
         */
        /**
        * Gets or sets the CropArea of current mouse position
        *
        * @param {CropArea} value
        */
        mouseCropArea: CropArea;
        /**
         * Property field
         */
        private _saveHandler;
        /**
         * Gets or sets the save handler of the view
         *
         * @returns {(callback: () => any) => any}
         */
        /**
        * Gets or sets the save handler of the view
        *
        * @param {(callback: () => any) => any} value
        */
        saveHandler: (callback: () => any) => any;
        /**
         * Property field
         */
        private _tool;
        /**
         * Gets or sets the current tool of the editor
         *
         * @returns {ImageEditorTool}
         */
        /**
        * Gets or sets the current tool of the editor
        *
        * @param {ImageEditorTool} value
        */
        tool: ImageEditorTool;
        /**
         * Property field
         */
        private _zoom;
        /**
         * Gets the current zoom level. (1 is 100%)
         *
         * @returns {number}
         */
        readonly zoom: number;
        /**
         * Property field
         */
        private _zoomMode;
        /**
         * Gets or sets the image zoom mode
         *
         * @returns {ImageZoomMode}
         */
        /**
        * Gets or sets the image zoom mode
        *
        * @param {ImageZoomMode} value
        */
        zoomMode: ImageZoomMode;
        /**
         * Field for bottomToolbar property
         */
        private _bottomToolbar;
        /**
         * Gets the bottom toolbar
         *
         * @returns {Toolbar}
         */
        readonly bottomToolbar: Toolbar;
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
        /**
         * Field for btnCrop property
         */
        private _btnCrop;
        /**
         * Gets the crop button
         *
         * @returns {ButtonItem}
         */
        readonly btnCrop: ButtonItem;
        /**
         * Field for cropNow property
         */
        private _btnCropNow;
        /**
         * Gets the crop now button
         *
         * @returns {ButtonItem}
         */
        readonly btnCropNow: ButtonItem;
        /**
         * Field for btnResize property
         */
        private _btnResize;
        /**
         * Gets the resize button
         *
         * @returns {ButtonItem}
         */
        readonly btnResize: ButtonItem;
        /**
         * Field for btnRotateClockwise property
         */
        private _btnRotateClockwise;
        /**
         * Gets the rotate clockwise button
         *
         * @returns {ButtonItem}
         */
        readonly btnRotateClockwise: ButtonItem;
        /**
         * Field for btnRotateCounterClockwise property
         */
        private _btnRotateCounterClockwise;
        /**
         * Gets the rotate counter clockwise button
         *
         * @returns {ButtonItem}
         */
        readonly btnRotateCounterClockwise: ButtonItem;
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
         * Field for btnUndo property
         */
        private _btnUndo;
        /**
         * Gets the undo button
         *
         * @returns {ButtonItem}
         */
        readonly btnUndo: ButtonItem;
        /**
         * Field for canvas property
         */
        private _canvas;
        /**
         * Gets the canvas where image is placed
         *
         * @returns {HTMLCanvasElement}
         */
        readonly canvas: HTMLDivElement;
        /**
         * Field for cropper property
         */
        private _cropper;
        /**
         * Gets the cropper element
         *
         * @returns {Element<HTMLDivElement>}
         */
        readonly cropper: Element<HTMLDivElement>;
        /**
         * Field for copperOverlayTop property
         */
        private _cropperOverlayTop;
        /**
         * Gets the cropper overlay top
         *
         * @returns {HTMLDivElement}
         */
        readonly cropperOverlayTop: HTMLDivElement;
        /**
         * Field for copperOverlayTop property
         */
        private _cropperOverlayLeft;
        /**
         * Gets the cropper overlay top
         *
         * @returns {HTMLDivElement}
         */
        readonly cropperOverlayLeft: HTMLDivElement;
        /**
         * Field for copperOverlayTop property
         */
        private _cropperOverlayRight;
        /**
         * Gets the cropper overlay top
         *
         * @returns {HTMLDivElement}
         */
        readonly cropperOverlayRight: HTMLDivElement;
        /**
         * Field for copperOverlayTop property
         */
        private _cropperOverlayBottom;
        /**
         * Gets the cropper overlay top
         *
         * @returns {HTMLDivElement}
         */
        readonly cropperOverlayBottom: HTMLDivElement;
        /**
         * Field for lblInfo property
         */
        private _lblInfo;
        /**
         * Gets the info label
         *
         * @returns {LabelItem}
         */
        readonly lblInfo: LabelItem;
        /**
         * Field for lblZoom property
         */
        private _lblZoom;
        /**
         * Gets the zoom label
         *
         * @returns {LabelItem}
         */
        readonly lblZoom: LabelItem;
        /**
         * Field for progressItem property
         */
        private _progressItem;
        /**
         * Gets the progress item
         *
         * @returns {ProgressItem}
         */
        readonly progressItem: ProgressItem;
    }
}
