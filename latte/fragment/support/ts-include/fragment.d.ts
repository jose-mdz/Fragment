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
declare module latte {
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
        idfileChanged: LatteEvent;
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
        guidChanged: LatteEvent;
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
        iduserChanged: LatteEvent;
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
        idownerChanged: LatteEvent;
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
        idparentChanged: LatteEvent;
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
        ownerChanged: LatteEvent;
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
        nameChanged: LatteEvent;
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
        sizeChanged: LatteEvent;
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
        bucketChanged: LatteEvent;
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
        pathChanged: LatteEvent;
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
        uploadedChanged: LatteEvent;
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
        descriptionChanged: LatteEvent;
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
        widthChanged: LatteEvent;
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
        heightChanged: LatteEvent;
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
        keyChanged: LatteEvent;
        /**
         * Raises the <c>keyChanged</c> event
         */
        onKeyChanged(): void;
        /**
        * Override. Gets data about the fields of the record.
        **/
        onGetFields(): any;
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
        idpageChanged: LatteEvent;
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
        idparentChanged: LatteEvent;
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
        idgroupChanged: LatteEvent;
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
        iduserChanged: LatteEvent;
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
        guidChanged: LatteEvent;
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
        keyChanged: LatteEvent;
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
        trashChanged: LatteEvent;
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
        onlineChanged: LatteEvent;
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
        templateChanged: LatteEvent;
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
        createdChanged: LatteEvent;
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
        modifiedChanged: LatteEvent;
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
        titleChanged: LatteEvent;
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
        descriptionChanged: LatteEvent;
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
        orderChanged: LatteEvent;
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
        sortChanged: LatteEvent;
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
        pownerChanged: LatteEvent;
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
        pgroupChanged: LatteEvent;
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
        potherChanged: LatteEvent;
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
        pworldChanged: LatteEvent;
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
        flagsChanged: LatteEvent;
        /**
         * Raises the <c>flagsChanged</c> event
         */
        onFlagsChanged(): void;
        /**
        * Override. Gets data about the fields of the record.
        **/
        onGetFields(): any;
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
        static isValidURLKey(idpage: number, key: string): RemoteCall<boolean>;
        static rootPages(): RemoteCall<Page[]>;
        getConfiguration(): RemoteCall<string>;
        setConfiguration(json: string): RemoteCall<Setting>;
        getFragments(): RemoteCall<Fragment[]>;
        getPages(page?: number): RemoteCall<PageResult<Page>>;
        getSettingsPack(): RemoteCall<any>;
        sendToTrash(): RemoteCall<any>;
        setOnline(online: boolean): RemoteCall<any>;
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
        idfragmentChanged: LatteEvent;
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
        idpageChanged: LatteEvent;
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
        valueChanged: LatteEvent;
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
        nameChanged: LatteEvent;
        /**
         * Raises the <c>nameChanged</c> event
         */
        onNameChanged(): void;
        /**
        * Override. Gets data about the fields of the record.
        **/
        onGetFields(): any;
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
        idsettingChanged: LatteEvent;
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
        idownerChanged: LatteEvent;
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
        ownerChanged: LatteEvent;
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
        nameChanged: LatteEvent;
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
        valueChanged: LatteEvent;
        /**
         * Raises the <c>valueChanged</c> event
         */
        onValueChanged(): void;
        /**
        * Override. Gets data about the fields of the record.
        **/
        onGetFields(): any;
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
        static getGlobal(): RemoteCall<Setting[]>;
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
        idgroupuserChanged: LatteEvent;
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
        idgroupChanged: LatteEvent;
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
        iduserChanged: LatteEvent;
        /**
         * Raises the <c>iduserChanged</c> event
         */
        onIduserChanged(): void;
        /**
        * Override. Gets data about the fields of the record.
        **/
        onGetFields(): any;
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
        idgroupChanged: LatteEvent;
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
        nameChanged: LatteEvent;
        /**
         * Raises the <c>nameChanged</c> event
         */
        onNameChanged(): void;
        /**
        * Override. Gets data about the fields of the record.
        **/
        onGetFields(): any;
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
        iduserChanged: LatteEvent;
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
        unameChanged: LatteEvent;
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
        passwordChanged: LatteEvent;
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
        flagsChanged: LatteEvent;
        /**
         * Raises the <c>flagsChanged</c> event
         */
        onFlagsChanged(): void;
        /**
        * Override. Gets data about the fields of the record.
        **/
        onGetFields(): any;
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
    class Session {
        static logIn(uname: string, pass: string): RemoteCall<User>;
        static logOut(): RemoteCall<any>;
    }
}
declare module latte {
    class SignInViewBase extends Element<HTMLDivElement> {
        private _combo;
        combo: Element<HTMLDivElement>;
        private _error;
        error: Element<HTMLDivElement>;
        private _fieldEmail;
        fieldEmail: Element<HTMLDivElement>;
        private _fieldPassword;
        fieldPassword: Element<HTMLDivElement>;
        private _form;
        form: Element<HTMLFormElement>;
        private _txtEmail;
        txtEmail: Textbox;
        private _txtPassword;
        txtPassword: Textbox;
        private static _Model;
        static getModel(): Element<HTMLDivElement>;
        constructor();
    }
}
declare module latte {
}
/**
 * Created by josemanuel on 7/26/16.
 */
declare module latte {
    /**
     * Adapts a fragment to its editor capabilities
     */
    class FragmentAdapter<T extends IFragment> implements ISave {
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
        /**
         * Back field for event
         */
        private _createEditorItem;
        /**
         * Gets an event raised when the editorItem should be initialized
         *
         * @returns {LatteEvent}
         */
        createEditorItem: LatteEvent;
        /**
         * Back field for event
         */
        private _fragmentConfigurationChanged;
        /**
         * Gets an event raised when the value of the fragmentConfiguration property changes
         *
         * @returns {LatteEvent}
         */
        fragmentConfigurationChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _editorBlur;
        /**
         * Gets an event raised when the editor item loses the focus
         *
         * @returns {LatteEvent}
         */
        editorBlur: LatteEvent;
        /**
         * Back field for event
         */
        private _editorFocus;
        /**
         * Gets an event raised when the editor item receives the focus
         *
         * @returns {LatteEvent}
         */
        editorFocus: LatteEvent;
        /**
         * Back field for event
         */
        private _register;
        /**
         * Gets an event raised when the adapter is registered
         *
         * @returns {LatteEvent}
         */
        register: LatteEvent;
        /**
         * Back field for event
         */
        private _tabsChanged;
        /**
         * Gets an event raised when the tabs of the adapter changed
         *
         * @returns {LatteEvent}
         */
        tabsChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _unRegister;
        /**
         * Gets an event raised when the adapter is un-registered
         *
         * @returns {LatteEvent}
         */
        unRegister: LatteEvent;
        /**
         * Back field for event
         */
        private _unsavedChangesChanged;
        /**
         * Gets an event raised when the value of the unsavedChanges property changes
         *
         * @returns {LatteEvent}
         */
        unsavedChangesChanged: LatteEvent;
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
        fragmentChanged: LatteEvent;
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
        aborted: LatteEvent;
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
        complete: LatteEvent;
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
        error: LatteEvent;
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
        progressChanged: LatteEvent;
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
        data: any;
        /**
         * Property field
         */
        private _formData;
        /**
         * Gets the form data
         *
         * @returns {Array<{name: string; value: string}>}
         */
        formData: Array<{
            name: string;
            value: any;
        }>;
        /**
         * Gets the current speed of upload. Zero if any
         *
         * @returns {string}
         */
        currentUploadBytesPerSecond: number;
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
        response: string;
        /**
         * Property field
         */
        private _uploading;
        /**
         * Gets a value indicating if upload is in progress
         *
         * @returns {boolean}
         */
        uploading: boolean;
        /**
         * Property field
         */
        private _uploadedBytes;
        /**
         * Gets the amount of uploaded bytes
         *
         * @returns {number}
         */
        uploadedBytes: number;
        /**
         * Property field
         */
        private _uploadStarted;
        /**
         * Gets a value indicating the time when upload started
         *
         * @returns {DateTime}
         */
        uploadStarted: DateTime;
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
/**
 * Created by josemanuel on 7/14/16.
 */
declare module latte {
    /**
     *
     */
    class Main {
        static goMainView(): void;
        static goSignInView(): void;
        static logOut(): void;
        /**
         *
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
    class UserExplorer extends ExplorerItemDataRecord<User> {
        /**
         *
         */
        constructor(r: User);
        private changePassword();
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
        btnChangePassword: ButtonItem;
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
        static fromBase64(base64: string, fileName: string, recordName: string, recordId: string): FileUploader;
        /**
         * Creates the file uploader
         */
        constructor(file: SystemFile, recordName: string, recordId: string);
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
        fileLocal: SystemFile;
        /**
         * Property field
         */
        private _fileRecord;
        /**
         * Gets the result file
         *
         * @returns {File}
         */
        fileRecord: File;
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
        recordId: string;
        /**
         * Property field
         */
        private _recordName;
        /**
         * Gets the name of the record
         *
         * @returns {string}
         */
        recordName: string;
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
 * Created by josemanuel on 7/26/16.
 */
declare module latte {
    interface IPageSettingsPack {
        config: string;
        parentConfig: string;
        settings: Setting[];
    }
    interface IFragment {
        name?: string;
        key?: string;
        type?: string;
    }
    interface IFragments {
        [index: string]: IFragment;
    }
    interface IPageConfigurationSetting {
        name: string;
        key?: string;
        type?: 'string' | 'boolean' | 'enumeration';
        defaultValue?: any;
        options?: any;
        required?: boolean;
    }
    interface IPageConfigurationSettings {
        [index: string]: IPageConfigurationSetting;
    }
    interface IPageConfigurationChildren {
        mayHaveChildren?: boolean;
        settings?: IPageConfigurationSettings;
        fragments?: IFragments;
    }
    interface IPageConfiguration {
        fragments?: IFragments;
        children?: IPageConfigurationChildren;
        settings?: IPageConfigurationSettings;
    }
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
        packChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _pageChanged;
        /**
         * Gets an event raised when the value of the page property changes
         *
         * @returns {LatteEvent}
         */
        pageChanged: LatteEvent;
        /**
         * Gets a value indicating if children of page may have children
         *
         * @returns {boolean}
         */
        childrenMayHaveChildren: boolean;
        /**
         * Gets the fragments for the page, including parent page criteria
         *
         * @returns {IFragments}
         */
        fragments: IFragments;
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
        hasParentConfiguration: boolean;
        /**
         * Gets a value indicating if the configuration indicates settings
         *
         * @returns {boolean}
         */
        hasSettings: boolean;
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
        pageConfig: IPageConfiguration;
        /**
         * Property field
         */
        private _parentConfig;
        /**
         * Gets the parent configuration settings
         *
         * @returns {IPageConfigurationSettings}
         */
        parentConfig: IPageConfiguration;
        /**
         * Gets the settings for the page, including parent page criteria
         *
         * @returns {IPageConfigurationSettings}
         */
        settings: IPageConfigurationSettings;
        /**
         * Property field
         */
        private _settingsValues;
        /**
         * Gets the settings
         *
         * @returns {{[index: string]: Setting}}
         */
        settingsValues: {
            [index: string]: Setting;
        };
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
        load: LatteEvent;
        /**
         * Back field for event
         */
        private _unload;
        /**
         * Gets an event raised when the plugin is unloaded
         *
         * @returns {LatteEvent}
         */
        unload: LatteEvent;
    }
}
/**
 * Created by josemanuel on 4/29/15.
 */
declare module latte {
    enum ImageFit {
        AspectFit = 0,
        AspectFill = 1,
        AspectFillNear = 2,
        AspectFillFar = 3,
    }
    interface ImageExportOptions {
        size: Size;
        type?: string;
        quality?: number;
        background?: Color;
        fit: ImageFit;
    }
    /**
     *
     */
    class ImageUtil {
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
         * @param size
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
        static resizeImage(image: HTMLImageElement, options: ImageExportOptions): string;
        /**
         * Creates a smaller version of the image.
         * @param image
         * @param size
         * @param type Mime type of the image
         * @param quality Quality 0 - 1, if jpg
         */
        static createThumbOfImage(image: HTMLImageElement, options: ImageExportOptions): string;
        private static resample_hermite(canvas, W, H, W2, H2);
        /**
         * Creates an icon of the specified url image
         *
         * @param url
         * @param size
         * @param type
         * @param quality
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
        htmlEditor: HtmlEditorItem;
        /**
         * Field for tabFormat property
         */
        private _tabFormat;
        /**
         * Gets the format tab
         *
         * @returns {TabItem}
         */
        tabFormat: TabItem;
        /**
         * Field for formatItems property
         */
        private _formatItems;
        /**
         * Gets the format items
         *
         * @returns {Item[]}
         */
        formatItems: Item[];
    }
}
/**
 * Created by josemanuel on 7/29/16.
 */
declare module latte {
    interface IImageGalleryFragment extends IFragment {
        "thumb-fit": "aspect-fit" | "aspect-fill" | "aspect-fill-far" | "aspect-fill-near";
        "thumb-width": number;
        "thumb-height": number;
        "image-fit": "aspect-fit" | "aspect-fill" | "aspect-fill-far" | "aspect-fill-near";
        "image-width": number;
        "image-height": number;
        "print-images": boolean;
    }
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
        private fileInputChanged();
        /**
         * Generates the presentable image of the specified file item.
         * @param item
         * @param callback
         */
        private generatePresentableImage(item, callback);
        private moveImageAfter();
        private moveImageBefore();
        /**
         * Swaps the selected image with the contigous beofe (or after if the passed flag is true)
         * @param after
         */
        private swapSelectedImage(after);
        /**
         * Removes the selected image. (Asking first)
         */
        private removeSelectedImage();
        /**
         * Updates the enabled property of move before and after buttons
         */
        private updateBeforeAfterButtons();
        private viewSelectedImage();
        private viewSelectedOriginal();
        /**
         *
         */
        activateFileInput(): void;
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
         * Raises the <c>draggingFiles</c> event
         */
        onDraggingFilesChanged(): void;
        /**
         * Raises the <c>filesSelected</c> event
         */
        onFilesSelected(files: FileList): void;
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
        private _draggingFilesChanged;
        /**
         * Back field for event
         */
        private _filesSelected;
        /**
         * Gets an event raised when files are selected for upload
         *
         * @returns {LatteEvent}
         */
        filesSelected: LatteEvent;
        /**
         * Gets an event raised when the value of the draggingFiles property changes
         *
         * @returns {LatteEvent}
         */
        draggingFilesChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _selectedFileChanged;
        /**
         * Gets an event raised when the value of the selectedFile property changes
         *
         * @returns {LatteEvent}
         */
        selectedFileChanged: LatteEvent;
        /**
         * Property field
         */
        private _draggingFiles;
        /**
         * Gets or sets a value indicating if user is currently dragging files around
         *
         * @returns {boolean}
         */
        /**
         * Gets or sets a value indicating if user is currently dragging files around
         *
         * @param {boolean} value
         */
        draggingFiles: boolean;
        /**
         * Field for files property
         */
        private _files;
        /**
         * Gets the files of the editor
         *
         * @returns {Collection<FileItem>}
         */
        files: Collection<FileItem>;
        /**
         * Field for imageSize property
         */
        private _imageSize;
        /**
         * Gets the configured image size
         *
         * @returns {Size}
         */
        imageSize: Size;
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
        thumbSize: Size;
        /**
         * Field for btnInsertImage property
         */
        private _btnInsertImage;
        /**
         * Gets the insert image button
         *
         * @returns {ButtonItem}
         */
        btnInsertImage: ButtonItem;
        /**
         * Field for btnoveImageAfter property
         */
        private _btnMoveImageAfter;
        /**
         * Gets the move image after button
         *
         * @returns {ButtonItem}
         */
        btnMoveImageAfter: ButtonItem;
        /**
         * Field for btnMoveImageBefore property
         */
        private _btnMoveImageBefore;
        /**
         * Gets the move image before item
         *
         * @returns {ButtonItem}
         */
        btnMoveImageBefore: ButtonItem;
        /**
         * Field for btnRemoveImage property
         */
        private _btnRemoveImage;
        /**
         * Gets the remove image button
         *
         * @returns {ButtonItem}
         */
        btnRemoveImage: ButtonItem;
        /**
         * Field for btnViewImage property
         */
        private _btnViewImage;
        /**
         * Gets the view image button
         *
         * @returns {ButtonImage}
         */
        btnViewImage: ButtonItem;
        /**
         * Field for btnViewOriginal property
         */
        private _btnViewOriginal;
        /**
         * Gets the view original image button
         *
         * @returns {ButtonItem}
         */
        btnViewOriginal: ButtonItem;
        /**
         * Field for fileInput property
         */
        private _fileInput;
        /**
         * Gets the file input
         *
         * @returns {Element<HTMLInputElement>}
         */
        fileInput: Element<HTMLInputElement>;
        /**
         * Field for tabGallery property
         */
        private _tabGallery;
        /**
         * Gets the gallery tab
         *
         * @returns {TabItem}
         */
        tabGallery: TabItem;
        /**
         * Field for tabImage property
         */
        private _tabImage;
        /**
         * Gets the image tab
         *
         * @returns {TabItem}
         */
        tabImage: TabItem;
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
        textbox: Element<HTMLTextAreaElement>;
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
        private updateThumb();
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
        fileChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _fileUploaderChanged;
        /**
         * Gets an event raised when the value of the fileUploader property changes
         *
         * @returns {LatteEvent}
         */
        fileUploaderChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _thumbCreated;
        /**
         * Gets an event raised when the system thumb has been created
         *
         * @returns {LatteEvent}
         */
        thumbCreated: LatteEvent;
        /**
         * Back field for event
         */
        private _thumbSizeChanged;
        /**
         * Gets an event raised when the value of the thumbSize property changes
         *
         * @returns {LatteEvent}
         */
        thumbSizeChanged: LatteEvent;
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
         * Field for infoBar property
         */
        private _divBar;
        /**
         * Gets the info bar element
         *
         * @returns {Element<HTMLDivElement>}
         */
        divBar: Element<HTMLDivElement>;
        /**
         * Field for divExtension property
         */
        private _divExtension;
        /**
         * Gets the extension div
         *
         * @returns {Element<HTMLDivElement>}
         */
        divExtension: Element<HTMLDivElement>;
        /**
         * Field for divName property
         */
        private _divName;
        /**
         * Gets the name element
         *
         * @returns {Element<HTMLDivElement>}
         */
        divName: Element<HTMLDivElement>;
        /**
         * Field for divSize property
         */
        private _divSize;
        /**
         * Gets the size element
         *
         * @returns {Element<HTMLDivElement>}
         */
        divSize: Element<HTMLDivElement>;
        /**
         * Field for thumb property
         */
        private _divThumb;
        /**
         * Gets the thumb of the item
         *
         * @returns {Element<HTMLDivElement>}
         */
        divThumb: Element<HTMLDivElement>;
        /**
         * Field for img property
         */
        private _img;
        /**
         * Gets the image of the thumb
         *
         * @returns {Element<HTMLDivElement>}
         */
        img: Element<HTMLImageElement>;
        /**
         * Field for progressBar property
         */
        private _progressBar;
        /**
         * Gets the progress item
         *
         * @returns {ProgressItem}
         */
        progressBar: ProgressItem;
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
        expandedChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _fragmentItemChanged;
        /**
         * Gets an event raised when the value of the fragmentItem property changes
         *
         * @returns {LatteEvent}
         */
        fragmentItemChanged: LatteEvent;
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
        btnFold: ButtonItem;
        /**
         * Field for lblTitle property
         */
        private _lblTitle;
        /**
         * Gets the title label
         *
         * @returns {LabelItem}
         */
        lblTitle: LabelItem;
        /**
         * Field for toolbar property
         */
        private _toolbar;
        /**
         * Gets the toolbar of the expando
         *
         * @returns {Toolbar}
         */
        toolbar: Toolbar;
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
        static home: LinearIcon;
        static apartment: LinearIcon;
        static pencil: LinearIcon;
        static magic_wand: LinearIcon;
        static drop: LinearIcon;
        static lighter: LinearIcon;
        static poop: LinearIcon;
        static sun: LinearIcon;
        static moon: LinearIcon;
        static cloud: LinearIcon;
        static cloud_upload: LinearIcon;
        static cloud_download: LinearIcon;
        static cloud_sync: LinearIcon;
        static cloud_check: LinearIcon;
        static database: LinearIcon;
        static lock: LinearIcon;
        static cog: LinearIcon;
        static trash: LinearIcon;
        static dice: LinearIcon;
        static heart: LinearIcon;
        static star: LinearIcon;
        static star_half: LinearIcon;
        static star_empty: LinearIcon;
        static flag: LinearIcon;
        static envelope: LinearIcon;
        static paperclip: LinearIcon;
        static inbox: LinearIcon;
        static eye: LinearIcon;
        static printer: LinearIcon;
        static file_empty: LinearIcon;
        static file_add: LinearIcon;
        static enter: LinearIcon;
        static exit: LinearIcon;
        static graduation_hat: LinearIcon;
        static license: LinearIcon;
        static music_note: LinearIcon;
        static film_play: LinearIcon;
        static camera_video: LinearIcon;
        static camera: LinearIcon;
        static picture: LinearIcon;
        static book: LinearIcon;
        static bookmark: LinearIcon;
        static user: LinearIcon;
        static users: LinearIcon;
        static shirt: LinearIcon;
        static store: LinearIcon;
        static cart: LinearIcon;
        static tag: LinearIcon;
        static phone_handset: LinearIcon;
        static phone: LinearIcon;
        static pushpin: LinearIcon;
        static map_marker: LinearIcon;
        static map: LinearIcon;
        static location: LinearIcon;
        static calendar_full: LinearIcon;
        static keyboard: LinearIcon;
        static spell_check: LinearIcon;
        static screen: LinearIcon;
        static smartphone: LinearIcon;
        static tablet: LinearIcon;
        static laptop: LinearIcon;
        static laptop_phone: LinearIcon;
        static power_switch: LinearIcon;
        static bubble: LinearIcon;
        static heart_pulse: LinearIcon;
        static construction: LinearIcon;
        static pie_chart: LinearIcon;
        static chart_bars: LinearIcon;
        static gift: LinearIcon;
        static diamond: LinearIcon;
        static linearicons: LinearIcon;
        static dinner: LinearIcon;
        static coffee_cup: LinearIcon;
        static leaf: LinearIcon;
        static paw: LinearIcon;
        static rocket: LinearIcon;
        static briefcase: LinearIcon;
        static bus: LinearIcon;
        static car: LinearIcon;
        static train: LinearIcon;
        static bicycle: LinearIcon;
        static wheelchair: LinearIcon;
        static select: LinearIcon;
        static earth: LinearIcon;
        static smile: LinearIcon;
        static sad: LinearIcon;
        static neutral: LinearIcon;
        static mustache: LinearIcon;
        static alarm: LinearIcon;
        static bullhorn: LinearIcon;
        static volume_high: LinearIcon;
        static volume_medium: LinearIcon;
        static volume_low: LinearIcon;
        static volume: LinearIcon;
        static mic: LinearIcon;
        static hourglass: LinearIcon;
        static undo: LinearIcon;
        static redo: LinearIcon;
        static sync: LinearIcon;
        static history: LinearIcon;
        static clock: LinearIcon;
        static download: LinearIcon;
        static upload: LinearIcon;
        static enter_down: LinearIcon;
        static exit_up: LinearIcon;
        static bug: LinearIcon;
        static code: LinearIcon;
        static link: LinearIcon;
        static unlink: LinearIcon;
        static thumbs_up: LinearIcon;
        static thumbs_down: LinearIcon;
        static magnifier: LinearIcon;
        static cross: LinearIcon;
        static menu: LinearIcon;
        static list: LinearIcon;
        static chevron_up: LinearIcon;
        static chevron_down: LinearIcon;
        static chevron_left: LinearIcon;
        static chevron_right: LinearIcon;
        static arrow_up: LinearIcon;
        static arrow_down: LinearIcon;
        static arrow_left: LinearIcon;
        static arrow_right: LinearIcon;
        static move: LinearIcon;
        static warning: LinearIcon;
        static question_circle: LinearIcon;
        static menu_circle: LinearIcon;
        static checkmark_circle: LinearIcon;
        static cross_circle: LinearIcon;
        static plus_circle: LinearIcon;
        static circle_minus: LinearIcon;
        static arrow_up_circle: LinearIcon;
        static arrow_down_circle: LinearIcon;
        static arrow_left_circle: LinearIcon;
        static arrow_right_circle: LinearIcon;
        static chevron_up_circle: LinearIcon;
        static chevron_down_circle: LinearIcon;
        static chevron_left_circle: LinearIcon;
        static chevron_right_circle: LinearIcon;
        static crop: LinearIcon;
        static frame_expand: LinearIcon;
        static frame_contract: LinearIcon;
        static layers: LinearIcon;
        static funnel: LinearIcon;
        static text_format: LinearIcon;
        static text_format_remove: LinearIcon;
        static text_size: LinearIcon;
        static bold: LinearIcon;
        static italic: LinearIcon;
        static underline: LinearIcon;
        static strikethrough: LinearIcon;
        static highlight: LinearIcon;
        static text_align_left: LinearIcon;
        static text_align_center: LinearIcon;
        static text_align_right: LinearIcon;
        static text_align_justify: LinearIcon;
        static line_spacing: LinearIcon;
        static indent_increase: LinearIcon;
        static indent_decrease: LinearIcon;
        static pilcrow: LinearIcon;
        static direction_ltr: LinearIcon;
        static direction_rtl: LinearIcon;
        static page_break: LinearIcon;
        static sort_alpha_asc: LinearIcon;
        static sort_amount_asc: LinearIcon;
        static hand: LinearIcon;
        static pointer_up: LinearIcon;
        static pointer_right: LinearIcon;
        static pointer_down: LinearIcon;
        static pointer_left: LinearIcon;
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
        static singleUpload(owner: string, idOwner: string, callback?: (File) => any): void;
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
         **/
        constructor();
        /**
         * Creates a thumb that fits on the specified size
         *
         * @param width
         * @param height
         * @param description
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
        canManipulate: boolean;
        /**
         * Gets the extension of the file, without the dot.
         The extension is returned always as a lowercase string.
         If the file has no name set, null will be returned. If the name has no extension,
         empty string will be returned.
         **/
        extension: string;
        /**
         * Gets the human size of the file
         **/
        humanSize: string;
        /**
         * Gets a value indicating if the file is an image
         **/
        isImage: boolean;
        /**
         * Gets the url for downloading the file
         **/
        url: string;
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
        userName: string;
        /**
         * Gets the user attributes string
         *
         * @returns {string}
         */
        userAttributes: string;
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
        onlineSwitched: LatteEvent;
        /**
         * Gets a value indicating if user has WRITE permission
         *
         * @returns {boolean}
         */
        canIDelete: boolean;
        /**
         * Gets a value indicating if user has INSERT_CHILD permission
         *
         * @returns {boolean}
         */
        canIInsertChild: boolean;
        /**
         * Gets a value indicating if user has READ permission
         *
         * @returns {boolean}
         */
        canIRead: boolean;
        /**
         * Gets a value indicating if the user has READ_CHILDREN permission
         *
         * @returns {boolean}
         */
        canIReadChildren: boolean;
        /**
         * Gets a value indicating if user has WRITE permission
         *
         * @returns {boolean}
         */
        canIWrite: boolean;
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
        configuration: PageConfiguration;
        /**
         * Gets a value indicating if the page belongs to the logged user
         *
         * @returns {boolean}
         */
        isMine: boolean;
        /**
         * Gets a value indicating if the user owns the page and has not write permissions
         *
         * @returns {boolean}
         */
        isMineAndCantWrite: boolean;
        /**
         * Gets a value indicating if the page is currently online
         *
         * @returns {boolean}
         */
        isOnline: boolean;
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
        explorer: CmsExplorer;
        /**
         * Field for topBar property
         */
        private _topBar;
        /**
         * Gets the top bar
         *
         * @returns {Element<HTMLDivElement>}
         */
        topBar: Element<HTMLDivElement>;
        /**
         * Field for logo property
         */
        private _logo;
        /**
         * Gets the logo element
         *
         * @returns {Element<HTMLDivElement>}
         */
        logo: Element<HTMLDivElement>;
        /**
         * Field for logout property
         */
        private _logout;
        /**
         * Gets the logout element
         *
         * @returns {Element<HTMLDivElement>}
         */
        logout: Element<HTMLDivElement>;
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
        attributes: string;
        /**
         * Gets a value indicating if the user is able to use the backend
         *
         * @returns {boolean}
         */
        canUseBackend: boolean;
        /**
         * Gets the flags as a string
         *
         * @returns {string}
         */
        flagsString: string;
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
        isBanned: boolean;
        /**
         * Gets a value indicating if user is root
         *
         * @returns {boolean}
         */
        isRoot: boolean;
        /**
         * Gets a value indicating if user is sys-admin
         *
         * @returns {boolean}
         */
        isSysAdmin: boolean;
        /**
         * Gets a value indicating if the user is trash
         *
         * @returns {boolean}
         */
        isTrash: boolean;
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
        pageChanged: LatteEvent;
        /**
         * Back field for event
         */
        private _sentToTrash;
        /**
         * Gets an event raised when the page is sent to trash
         *
         * @returns {LatteEvent}
         */
        sentToTrash: LatteEvent;
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
        btnDelete: ButtonItem;
        /**
         * Field for form property
         */
        private _form;
        /**
         * Gets the form item
         *
         * @returns {DataRecordFormItem}
         */
        form: DataRecordFormItem;
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
        /**
         * Loads data
         */
        onLoad(): void;
        getSaveCalls(): ICall[];
        /**
         * Field for textbox property
         */
        private _textbox;
        /**
         * Gets the textbox
         *
         * @returns {Textbox}
         */
        textbox: Element<HTMLTextAreaElement>;
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
        pageChanged: LatteEvent;
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
        btnOpen: ButtonItem;
        /**
         * Field for dataForm property
         */
        private _dataForm;
        /**
         * Gets the data record for item of the page
         *
         * @returns {DataRecordFormItem}
         */
        dataForm: DataRecordFormItem;
        /**
         * Field for settingsForm property
         */
        private _settingsForm;
        /**
         * Gets the settings form item
         *
         * @returns {FormItem}
         */
        settingsForm: FormItem;
    }
}
/**
 * Created by josemanuel on 7/23/16.
 */
declare module latte {
    /**
     *
     */
    class PageEditorView extends View {
        private timerId;
        private fragmentAdapters;
        private titleChanged;
        private cancelTitle;
        private onlineChanged;
        /**
         *
         */
        constructor(r: Page, pack?: IPageSettingsPack);
        /**
         * Clears the ribbon of non-standard items and tabs
         */
        private clearRibbon(selectFirstTab?);
        /**
         * Handles focus on the fragment
         *
         * @param adapter
         */
        private fragmentFocus(adapter);
        /**
         * Updates the tabs of the specified fragment adapter
         * @param adapter
         */
        private fragmentTabsUpdate(adapter);
        /**
         * Adds a fragment to the ui
         * @param key
         * @param fragment
         */
        addFragment(key: string, fragmentData: IFragment, fragment: Fragment): void;
        /**
         * Loads the page
         */
        loadPage(): void;
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
        closeRequested: LatteEvent;
        /**
         * Raises the <c>closeRequested</c> event
         */
        onCloseRequested(): void;
        /**
         * Back field for event
         */
        private _pageChanged;
        /**
         * Gets an event raised when the value of the page property changes
         *
         * @returns {LatteEvent}
         */
        pageChanged: LatteEvent;
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
        ribbon: Ribbon;
        /**
         * Field for btnClose property
         */
        private _btnClose;
        /**
         * Gets the close button
         *
         * @returns {ButtonItem}
         */
        btnClose: ButtonItem;
        /**
         * Field for columnView property
         */
        private _columnView;
        /**
         * Gets the column view
         *
         * @returns {ColumnView}
         */
        columnView: ColumnView;
        /**
         * Field for ribbonView property
         */
        private _ribbonView;
        /**
         * Gets the ribbon in the view
         *
         * @returns {RibbonView}
         */
        ribbonView: RibbonView;
        /**
         * Field for onlineInput property
         */
        private _onlineInput;
        /**
         * Gets the online input
         *
         * @returns {InputItem}
         */
        onlineInput: InputItem;
        /**
         * Field for tabPage property
         */
        private _tabPage;
        /**
         * Gets the page tab
         *
         * @returns {TabItem}
         */
        tabPage: TabItem;
        /**
         * Field for titleElement property
         */
        private _titleElement;
        /**
         * Gets the title element
         *
         * @returns {Element<HTMLDivElement>}
         */
        titleElement: Element<HTMLDivElement>;
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
        pageChanged: LatteEvent;
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
        advancedView: PageAdvancedView;
        /**
         * Field for configurationView property
         */
        private _configurationView;
        /**
         * Gets the configuration view
         *
         * @returns {PageConfigurationView}
         */
        configurationView: PageConfigurationView;
        /**
         * Field for detailView property
         */
        private _detailView;
        /**
         * Gets the detail view
         *
         * @returns {PageDetailView}
         */
        detailView: PageDetailView;
        /**
         * Field for tabAdvanced property
         */
        private _tabAdvanced;
        /**
         * Gets the advanced tab
         *
         * @returns {TabItem}
         */
        tabAdvanced: TabItem;
        /**
         * Field for tabDetail property
         */
        private _tabDetail;
        /**
         * Gets the detail tab
         *
         * @returns {TabItem}
         */
        tabDetail: TabItem;
        /**
         * Field for tabConfiguration property
         */
        private _tabConfiguration;
        /**
         * Gets the configuration tab
         *
         * @returns {TabItem}
         */
        tabConfiguration: TabItem;
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
