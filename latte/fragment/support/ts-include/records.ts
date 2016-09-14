module latte{
		export class settingBase extends DataRecord{

		/* Name of Php record */
		_recordType: string = 'Setting';

		/* Name of Module where record lives */
		_moduleName: string = 'fragment';

		/**
		 * Database field: int(11)
		 */
		_idsetting: number = null;

		/**
		 * Gets or sets the value of the idsetting field of type int(11)
		 */
		get idsetting(): number{
			return this._idsetting;
		}

		/**
		 * Gets or sets the value of the idsetting field of type int(11)
		 */
		set idsetting(value: number){
			var changed: boolean = value !== this._idsetting
			this._idsetting = value;
			if(changed){ this.onIdsettingChanged(); }
		}

		/**
		 * Back field for event
		 */
		_idsettingChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the idsetting property changes
		 */
		get idsettingChanged(): LatteEvent{
			if(!this._idsettingChanged){ this._idsettingChanged = new LatteEvent(this); }
			return this._idsettingChanged;
		}

		/**
		 * Raises the <c>idsettingChanged</c> event
		 */
		onIdsettingChanged(){
			if(this._idsettingChanged){
				this._idsettingChanged.raise()
			}
			this.onFieldValueChanged('idsetting', this.idsetting)
		}

		/**
		* Gets the name of the autoincrement field
		**/
		onGetRecordIdName(): string { return 'idsetting'; }

		/**
		 * Database field: int(11)
		 */
		_idowner: number = null;

		/**
		 * Gets or sets the value of the idowner field of type int(11)
		 */
		get idowner(): number{
			return this._idowner;
		}

		/**
		 * Gets or sets the value of the idowner field of type int(11)
		 */
		set idowner(value: number){
			var changed: boolean = value !== this._idowner
			this._idowner = value;
			if(changed){ this.onIdownerChanged(); }
		}

		/**
		 * Back field for event
		 */
		_idownerChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the idowner property changes
		 */
		get idownerChanged(): LatteEvent{
			if(!this._idownerChanged){ this._idownerChanged = new LatteEvent(this); }
			return this._idownerChanged;
		}

		/**
		 * Raises the <c>idownerChanged</c> event
		 */
		onIdownerChanged(){
			if(this._idownerChanged){
				this._idownerChanged.raise()
			}
			this.onFieldValueChanged('idowner', this.idowner)
		}

		/**
		 * Database field: varchar(50)
		 */
		_owner: string = null;

		/**
		 * Gets or sets the value of the owner field of type varchar(50)
		 */
		get owner(): string{
			return this._owner;
		}

		/**
		 * Gets or sets the value of the owner field of type varchar(50)
		 */
		set owner(value: string){
			var changed: boolean = value !== this._owner
			this._owner = value;
			if(changed){ this.onOwnerChanged(); }
		}

		/**
		 * Back field for event
		 */
		_ownerChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the owner property changes
		 */
		get ownerChanged(): LatteEvent{
			if(!this._ownerChanged){ this._ownerChanged = new LatteEvent(this); }
			return this._ownerChanged;
		}

		/**
		 * Raises the <c>ownerChanged</c> event
		 */
		onOwnerChanged(){
			if(this._ownerChanged){
				this._ownerChanged.raise()
			}
			this.onFieldValueChanged('owner', this.owner)
		}

		/**
		 * Database field: varchar(255)
		 */
		_name: string = null;

		/**
		 * Gets or sets the value of the name field of type varchar(255)
		 */
		get name(): string{
			return this._name;
		}

		/**
		 * Gets or sets the value of the name field of type varchar(255)
		 */
		set name(value: string){
			var changed: boolean = value !== this._name
			this._name = value;
			if(changed){ this.onNameChanged(); }
		}

		/**
		 * Back field for event
		 */
		_nameChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the name property changes
		 */
		get nameChanged(): LatteEvent{
			if(!this._nameChanged){ this._nameChanged = new LatteEvent(this); }
			return this._nameChanged;
		}

		/**
		 * Raises the <c>nameChanged</c> event
		 */
		onNameChanged(){
			if(this._nameChanged){
				this._nameChanged.raise()
			}
			this.onFieldValueChanged('name', this.name)
		}

		/**
		 * Database field: longtext
		 */
		_value: string = null;

		/**
		 * Gets or sets the value of the value field of type longtext
		 */
		get value(): string{
			return this._value;
		}

		/**
		 * Gets or sets the value of the value field of type longtext
		 */
		set value(value: string){
			var changed: boolean = value !== this._value
			this._value = value;
			if(changed){ this.onValueChanged(); }
		}

		/**
		 * Back field for event
		 */
		_valueChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the value property changes
		 */
		get valueChanged(): LatteEvent{
			if(!this._valueChanged){ this._valueChanged = new LatteEvent(this); }
			return this._valueChanged;
		}

		/**
		 * Raises the <c>valueChanged</c> event
		 */
		onValueChanged(){
			if(this._valueChanged){
				this._valueChanged.raise()
			}
			this.onFieldValueChanged('value', this.value)
		}

		/**
		* Override. Gets data about the fields of the record.
		**/
		onGetFields(): any { return {'idsetting': this.idsetting, 'idowner': this.idowner, 'owner': this.owner, 'name': this.name, 'value': this.value}; }

		/**
		* Declares the native types of the record.
		**/

		static nativeTypes = {"idsetting":"int(11)","idowner":"int(11)","owner":"varchar(50)","name":"varchar(255)","value":"longtext"};

		/*
		 * Remote Method. 
 Gets the global settings of the app


		 */
		static getGlobal(): RemoteCall<Setting[]>{
			return new RemoteCall<Setting[]>('fragment', 'Setting', 'getGlobal', {} );
		}
	}

	export class pageBase extends DataRecord{

		/* Name of Php record */
		_recordType: string = 'Page';

		/* Name of Module where record lives */
		_moduleName: string = 'fragment';

		/**
		 * Database field: int(11)
		 */
		_idpage: number = null;

		/**
		 * Gets or sets the value of the idpage field of type int(11)
		 */
		get idpage(): number{
			return this._idpage;
		}

		/**
		 * Gets or sets the value of the idpage field of type int(11)
		 */
		set idpage(value: number){
			var changed: boolean = value !== this._idpage
			this._idpage = value;
			if(changed){ this.onIdpageChanged(); }
		}

		/**
		 * Back field for event
		 */
		_idpageChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the idpage property changes
		 */
		get idpageChanged(): LatteEvent{
			if(!this._idpageChanged){ this._idpageChanged = new LatteEvent(this); }
			return this._idpageChanged;
		}

		/**
		 * Raises the <c>idpageChanged</c> event
		 */
		onIdpageChanged(){
			if(this._idpageChanged){
				this._idpageChanged.raise()
			}
			this.onFieldValueChanged('idpage', this.idpage)
		}

		/**
		* Gets the name of the autoincrement field
		**/
		onGetRecordIdName(): string { return 'idpage'; }

		/**
		 * Database field: int(11)
		 */
		_idparent: number = null;

		/**
		 * Gets or sets the value of the idparent field of type int(11)
		 */
		get idparent(): number{
			return this._idparent;
		}

		/**
		 * Gets or sets the value of the idparent field of type int(11)
		 */
		set idparent(value: number){
			var changed: boolean = value !== this._idparent
			this._idparent = value;
			if(changed){ this.onIdparentChanged(); }
		}

		/**
		 * Back field for event
		 */
		_idparentChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the idparent property changes
		 */
		get idparentChanged(): LatteEvent{
			if(!this._idparentChanged){ this._idparentChanged = new LatteEvent(this); }
			return this._idparentChanged;
		}

		/**
		 * Raises the <c>idparentChanged</c> event
		 */
		onIdparentChanged(){
			if(this._idparentChanged){
				this._idparentChanged.raise()
			}
			this.onFieldValueChanged('idparent', this.idparent)
		}

		/**
		 * Database field: int(11)
		 */
		_idgroup: number = null;

		/**
		 * Gets or sets the value of the idgroup field of type int(11)
		 */
		get idgroup(): number{
			return this._idgroup;
		}

		/**
		 * Gets or sets the value of the idgroup field of type int(11)
		 */
		set idgroup(value: number){
			var changed: boolean = value !== this._idgroup
			this._idgroup = value;
			if(changed){ this.onIdgroupChanged(); }
		}

		/**
		 * Back field for event
		 */
		_idgroupChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the idgroup property changes
		 */
		get idgroupChanged(): LatteEvent{
			if(!this._idgroupChanged){ this._idgroupChanged = new LatteEvent(this); }
			return this._idgroupChanged;
		}

		/**
		 * Raises the <c>idgroupChanged</c> event
		 */
		onIdgroupChanged(){
			if(this._idgroupChanged){
				this._idgroupChanged.raise()
			}
			this.onFieldValueChanged('idgroup', this.idgroup)
		}

		/**
		 * Database field: int(11)
		 */
		_iduser: number = null;

		/**
		 * Gets or sets the value of the iduser field of type int(11)
		 */
		get iduser(): number{
			return this._iduser;
		}

		/**
		 * Gets or sets the value of the iduser field of type int(11)
		 */
		set iduser(value: number){
			var changed: boolean = value !== this._iduser
			this._iduser = value;
			if(changed){ this.onIduserChanged(); }
		}

		/**
		 * Back field for event
		 */
		_iduserChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the iduser property changes
		 */
		get iduserChanged(): LatteEvent{
			if(!this._iduserChanged){ this._iduserChanged = new LatteEvent(this); }
			return this._iduserChanged;
		}

		/**
		 * Raises the <c>iduserChanged</c> event
		 */
		onIduserChanged(){
			if(this._iduserChanged){
				this._iduserChanged.raise()
			}
			this.onFieldValueChanged('iduser', this.iduser)
		}

		/**
		 * Database field: varchar(50)
		 */
		_guid: string = null;

		/**
		 * Gets or sets the value of the guid field of type varchar(50)
		 */
		get guid(): string{
			return this._guid;
		}

		/**
		 * Gets or sets the value of the guid field of type varchar(50)
		 */
		set guid(value: string){
			var changed: boolean = value !== this._guid
			this._guid = value;
			if(changed){ this.onGuidChanged(); }
		}

		/**
		 * Back field for event
		 */
		_guidChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the guid property changes
		 */
		get guidChanged(): LatteEvent{
			if(!this._guidChanged){ this._guidChanged = new LatteEvent(this); }
			return this._guidChanged;
		}

		/**
		 * Raises the <c>guidChanged</c> event
		 */
		onGuidChanged(){
			if(this._guidChanged){
				this._guidChanged.raise()
			}
			this.onFieldValueChanged('guid', this.guid)
		}

		/**
		 * Database field: varchar(200)
		 */
		_key: string = null;

		/**
		 * Gets or sets the value of the key field of type varchar(200)
		 */
		get key(): string{
			return this._key;
		}

		/**
		 * Gets or sets the value of the key field of type varchar(200)
		 */
		set key(value: string){
			var changed: boolean = value !== this._key
			this._key = value;
			if(changed){ this.onKeyChanged(); }
		}

		/**
		 * Back field for event
		 */
		_keyChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the key property changes
		 */
		get keyChanged(): LatteEvent{
			if(!this._keyChanged){ this._keyChanged = new LatteEvent(this); }
			return this._keyChanged;
		}

		/**
		 * Raises the <c>keyChanged</c> event
		 */
		onKeyChanged(){
			if(this._keyChanged){
				this._keyChanged.raise()
			}
			this.onFieldValueChanged('key', this.key)
		}

		/**
		 * Database field: int(1)
		 */
		_trash: boolean = null;

		/**
		 * Gets or sets the value of the trash field of type int(1)
		 */
		get trash(): boolean{
			return this._trash;
		}

		/**
		 * Gets or sets the value of the trash field of type int(1)
		 */
		set trash(value: boolean){
			var changed: boolean = value !== this._trash
			this._trash = value;
			if(changed){ this.onTrashChanged(); }
		}

		/**
		 * Back field for event
		 */
		_trashChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the trash property changes
		 */
		get trashChanged(): LatteEvent{
			if(!this._trashChanged){ this._trashChanged = new LatteEvent(this); }
			return this._trashChanged;
		}

		/**
		 * Raises the <c>trashChanged</c> event
		 */
		onTrashChanged(){
			if(this._trashChanged){
				this._trashChanged.raise()
			}
			this.onFieldValueChanged('trash', this.trash)
		}

		/**
		 * Database field: int(1)
		 */
		_online: boolean = null;

		/**
		 * Gets or sets the value of the online field of type int(1)
		 */
		get online(): boolean{
			return this._online;
		}

		/**
		 * Gets or sets the value of the online field of type int(1)
		 */
		set online(value: boolean){
			var changed: boolean = value !== this._online
			this._online = value;
			if(changed){ this.onOnlineChanged(); }
		}

		/**
		 * Back field for event
		 */
		_onlineChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the online property changes
		 */
		get onlineChanged(): LatteEvent{
			if(!this._onlineChanged){ this._onlineChanged = new LatteEvent(this); }
			return this._onlineChanged;
		}

		/**
		 * Raises the <c>onlineChanged</c> event
		 */
		onOnlineChanged(){
			if(this._onlineChanged){
				this._onlineChanged.raise()
			}
			this.onFieldValueChanged('online', this.online)
		}

		/**
		 * Database field: varchar(20)
		 */
		_template: string = null;

		/**
		 * Gets or sets the value of the template field of type varchar(20)
		 */
		get template(): string{
			return this._template;
		}

		/**
		 * Gets or sets the value of the template field of type varchar(20)
		 */
		set template(value: string){
			var changed: boolean = value !== this._template
			this._template = value;
			if(changed){ this.onTemplateChanged(); }
		}

		/**
		 * Back field for event
		 */
		_templateChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the template property changes
		 */
		get templateChanged(): LatteEvent{
			if(!this._templateChanged){ this._templateChanged = new LatteEvent(this); }
			return this._templateChanged;
		}

		/**
		 * Raises the <c>templateChanged</c> event
		 */
		onTemplateChanged(){
			if(this._templateChanged){
				this._templateChanged.raise()
			}
			this.onFieldValueChanged('template', this.template)
		}

		/**
		 * Database field: datetime
		 */
		_created: DateTime = null;

		/**
		 * Gets or sets the value of the created field of type datetime
		 */
		get created(): DateTime{
			return this._created;
		}

		/**
		 * Gets or sets the value of the created field of type datetime
		 */
		set created(value: DateTime){
			var changed: boolean = value !== this._created
			this._created = value;
			if(changed){ this.onCreatedChanged(); }
		}

		/**
		 * Back field for event
		 */
		_createdChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the created property changes
		 */
		get createdChanged(): LatteEvent{
			if(!this._createdChanged){ this._createdChanged = new LatteEvent(this); }
			return this._createdChanged;
		}

		/**
		 * Raises the <c>createdChanged</c> event
		 */
		onCreatedChanged(){
			if(this._createdChanged){
				this._createdChanged.raise()
			}
			this.onFieldValueChanged('created', this.created)
		}

		/**
		 * Database field: datetime
		 */
		_modified: DateTime = null;

		/**
		 * Gets or sets the value of the modified field of type datetime
		 */
		get modified(): DateTime{
			return this._modified;
		}

		/**
		 * Gets or sets the value of the modified field of type datetime
		 */
		set modified(value: DateTime){
			var changed: boolean = value !== this._modified
			this._modified = value;
			if(changed){ this.onModifiedChanged(); }
		}

		/**
		 * Back field for event
		 */
		_modifiedChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the modified property changes
		 */
		get modifiedChanged(): LatteEvent{
			if(!this._modifiedChanged){ this._modifiedChanged = new LatteEvent(this); }
			return this._modifiedChanged;
		}

		/**
		 * Raises the <c>modifiedChanged</c> event
		 */
		onModifiedChanged(){
			if(this._modifiedChanged){
				this._modifiedChanged.raise()
			}
			this.onFieldValueChanged('modified', this.modified)
		}

		/**
		 * Database field: varchar(128)
		 */
		_title: string = null;

		/**
		 * Gets or sets the value of the title field of type varchar(128)
		 */
		get title(): string{
			return this._title;
		}

		/**
		 * Gets or sets the value of the title field of type varchar(128)
		 */
		set title(value: string){
			var changed: boolean = value !== this._title
			this._title = value;
			if(changed){ this.onTitleChanged(); }
		}

		/**
		 * Back field for event
		 */
		_titleChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the title property changes
		 */
		get titleChanged(): LatteEvent{
			if(!this._titleChanged){ this._titleChanged = new LatteEvent(this); }
			return this._titleChanged;
		}

		/**
		 * Raises the <c>titleChanged</c> event
		 */
		onTitleChanged(){
			if(this._titleChanged){
				this._titleChanged.raise()
			}
			this.onFieldValueChanged('title', this.title)
		}

		/**
		 * Database field: varchar(255)
		 */
		_description: string = null;

		/**
		 * Gets or sets the value of the description field of type varchar(255)
		 */
		get description(): string{
			return this._description;
		}

		/**
		 * Gets or sets the value of the description field of type varchar(255)
		 */
		set description(value: string){
			var changed: boolean = value !== this._description
			this._description = value;
			if(changed){ this.onDescriptionChanged(); }
		}

		/**
		 * Back field for event
		 */
		_descriptionChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the description property changes
		 */
		get descriptionChanged(): LatteEvent{
			if(!this._descriptionChanged){ this._descriptionChanged = new LatteEvent(this); }
			return this._descriptionChanged;
		}

		/**
		 * Raises the <c>descriptionChanged</c> event
		 */
		onDescriptionChanged(){
			if(this._descriptionChanged){
				this._descriptionChanged.raise()
			}
			this.onFieldValueChanged('description', this.description)
		}

		/**
		 * Database field: int(11)
		 */
		_order: number = null;

		/**
		 * Gets or sets the value of the order field of type int(11)
		 */
		get order(): number{
			return this._order;
		}

		/**
		 * Gets or sets the value of the order field of type int(11)
		 */
		set order(value: number){
			var changed: boolean = value !== this._order
			this._order = value;
			if(changed){ this.onOrderChanged(); }
		}

		/**
		 * Back field for event
		 */
		_orderChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the order property changes
		 */
		get orderChanged(): LatteEvent{
			if(!this._orderChanged){ this._orderChanged = new LatteEvent(this); }
			return this._orderChanged;
		}

		/**
		 * Raises the <c>orderChanged</c> event
		 */
		onOrderChanged(){
			if(this._orderChanged){
				this._orderChanged.raise()
			}
			this.onFieldValueChanged('order', this.order)
		}

		/**
		 * Database field: varchar(20)
		 */
		_sort: string = null;

		/**
		 * Gets or sets the value of the sort field of type varchar(20)
		 */
		get sort(): string{
			return this._sort;
		}

		/**
		 * Gets or sets the value of the sort field of type varchar(20)
		 */
		set sort(value: string){
			var changed: boolean = value !== this._sort
			this._sort = value;
			if(changed){ this.onSortChanged(); }
		}

		/**
		 * Back field for event
		 */
		_sortChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the sort property changes
		 */
		get sortChanged(): LatteEvent{
			if(!this._sortChanged){ this._sortChanged = new LatteEvent(this); }
			return this._sortChanged;
		}

		/**
		 * Raises the <c>sortChanged</c> event
		 */
		onSortChanged(){
			if(this._sortChanged){
				this._sortChanged.raise()
			}
			this.onFieldValueChanged('sort', this.sort)
		}

		/**
		 * Database field: int(11)
		 */
		_powner: number = null;

		/**
		 * Gets or sets the value of the powner field of type int(11)
		 */
		get powner(): number{
			return this._powner;
		}

		/**
		 * Gets or sets the value of the powner field of type int(11)
		 */
		set powner(value: number){
			var changed: boolean = value !== this._powner
			this._powner = value;
			if(changed){ this.onPownerChanged(); }
		}

		/**
		 * Back field for event
		 */
		_pownerChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the powner property changes
		 */
		get pownerChanged(): LatteEvent{
			if(!this._pownerChanged){ this._pownerChanged = new LatteEvent(this); }
			return this._pownerChanged;
		}

		/**
		 * Raises the <c>pownerChanged</c> event
		 */
		onPownerChanged(){
			if(this._pownerChanged){
				this._pownerChanged.raise()
			}
			this.onFieldValueChanged('powner', this.powner)
		}

		/**
		 * Database field: int(11)
		 */
		_pgroup: number = null;

		/**
		 * Gets or sets the value of the pgroup field of type int(11)
		 */
		get pgroup(): number{
			return this._pgroup;
		}

		/**
		 * Gets or sets the value of the pgroup field of type int(11)
		 */
		set pgroup(value: number){
			var changed: boolean = value !== this._pgroup
			this._pgroup = value;
			if(changed){ this.onPgroupChanged(); }
		}

		/**
		 * Back field for event
		 */
		_pgroupChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the pgroup property changes
		 */
		get pgroupChanged(): LatteEvent{
			if(!this._pgroupChanged){ this._pgroupChanged = new LatteEvent(this); }
			return this._pgroupChanged;
		}

		/**
		 * Raises the <c>pgroupChanged</c> event
		 */
		onPgroupChanged(){
			if(this._pgroupChanged){
				this._pgroupChanged.raise()
			}
			this.onFieldValueChanged('pgroup', this.pgroup)
		}

		/**
		 * Database field: int(11)
		 */
		_pother: number = null;

		/**
		 * Gets or sets the value of the pother field of type int(11)
		 */
		get pother(): number{
			return this._pother;
		}

		/**
		 * Gets or sets the value of the pother field of type int(11)
		 */
		set pother(value: number){
			var changed: boolean = value !== this._pother
			this._pother = value;
			if(changed){ this.onPotherChanged(); }
		}

		/**
		 * Back field for event
		 */
		_potherChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the pother property changes
		 */
		get potherChanged(): LatteEvent{
			if(!this._potherChanged){ this._potherChanged = new LatteEvent(this); }
			return this._potherChanged;
		}

		/**
		 * Raises the <c>potherChanged</c> event
		 */
		onPotherChanged(){
			if(this._potherChanged){
				this._potherChanged.raise()
			}
			this.onFieldValueChanged('pother', this.pother)
		}

		/**
		 * Database field: int(11)
		 */
		_pworld: number = null;

		/**
		 * Gets or sets the value of the pworld field of type int(11)
		 */
		get pworld(): number{
			return this._pworld;
		}

		/**
		 * Gets or sets the value of the pworld field of type int(11)
		 */
		set pworld(value: number){
			var changed: boolean = value !== this._pworld
			this._pworld = value;
			if(changed){ this.onPworldChanged(); }
		}

		/**
		 * Back field for event
		 */
		_pworldChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the pworld property changes
		 */
		get pworldChanged(): LatteEvent{
			if(!this._pworldChanged){ this._pworldChanged = new LatteEvent(this); }
			return this._pworldChanged;
		}

		/**
		 * Raises the <c>pworldChanged</c> event
		 */
		onPworldChanged(){
			if(this._pworldChanged){
				this._pworldChanged.raise()
			}
			this.onFieldValueChanged('pworld', this.pworld)
		}

		/**
		 * Database field: int(11)
		 */
		_flags: number = null;

		/**
		 * Gets or sets the value of the flags field of type int(11)
		 */
		get flags(): number{
			return this._flags;
		}

		/**
		 * Gets or sets the value of the flags field of type int(11)
		 */
		set flags(value: number){
			var changed: boolean = value !== this._flags
			this._flags = value;
			if(changed){ this.onFlagsChanged(); }
		}

		/**
		 * Back field for event
		 */
		_flagsChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the flags property changes
		 */
		get flagsChanged(): LatteEvent{
			if(!this._flagsChanged){ this._flagsChanged = new LatteEvent(this); }
			return this._flagsChanged;
		}

		/**
		 * Raises the <c>flagsChanged</c> event
		 */
		onFlagsChanged(){
			if(this._flagsChanged){
				this._flagsChanged.raise()
			}
			this.onFieldValueChanged('flags', this.flags)
		}

		/**
		* Override. Gets data about the fields of the record.
		**/
		onGetFields(): any { return {'idpage': this.idpage, 'idparent': this.idparent, 'idgroup': this.idgroup, 'iduser': this.iduser, 'guid': this.guid, 'key': this.key, 'trash': this.trash, 'online': this.online, 'template': this.template, 'created': this.created, 'modified': this.modified, 'title': this.title, 'description': this.description, 'order': this.order, 'sort': this.sort, 'powner': this.powner, 'pgroup': this.pgroup, 'pother': this.pother, 'pworld': this.pworld, 'flags': this.flags}; }

		/**
		* Declares the native types of the record.
		**/

		static nativeTypes = {"idpage":"int(11)","idparent":"int(11)","idgroup":"int(11)","iduser":"int(11)","guid":"varchar(50)","key":"varchar(200)","trash":"int(1)","online":"int(1)","template":"varchar(20)","created":"datetime","modified":"datetime","title":"varchar(128)","description":"varchar(255)","order":"int(11)","sort":"varchar(20)","powner":"int(11)","pgroup":"int(11)","pother":"int(11)","pworld":"int(11)","flags":"int(11)"};

		/*
		 * Remote Method. 
 Returns a page from the specified URL query token.
 The q variable may be the guid or the key of the page.


		 */
		static byUrlQ(q: string): RemoteCall<Page>{
			return new RemoteCall<Page>('fragment', 'Page', 'byUrlQ', {q: q} );
		}

		/*
		 * Remote Method. 
 Return a value indicating if the key is valid for the specified page


		 */
		static isValidURLKey(idpage: number, key: string): RemoteCall<boolean>{
			return new RemoteCall<boolean>('fragment', 'Page', 'isValidURLKey', {idpage: idpage, key: key} );
		}

		/*
		 * Remote Method. 

		 */
		static rootPages(): RemoteCall<Page[]>{
			return new RemoteCall<Page[]>('fragment', 'Page', 'rootPages', {} );
		}

		/*
		 * Remote Method. 
 Gets the configuration of the page


		 */
		getConfiguration(): RemoteCall<string>{
			return new RemoteCall<string>('fragment', 'Page', 'getConfiguration', {} , this.recordId);
		}

		/*
		 * Remote Method. 
 Saves the configuration of the page


		 */
		setConfiguration(json: string): RemoteCall<Setting>{
			return new RemoteCall<Setting>('fragment', 'Page', 'setConfiguration', {json: json} , this.recordId);
		}

		/*
		 * Remote Method. 
 Returns the fragments of the page


		 */
		getFragments(): RemoteCall<Fragment[]>{
			return new RemoteCall<Fragment[]>('fragment', 'Page', 'getFragments', {} , this.recordId);
		}

		/*
		 * Remote Method. 
 Gets the child pages of the page.
 This method can be a little confuse because is a paginated result. Page parameter refers to pagination.


		 */
		getPages(page: number = 1): RemoteCall<PageResult<Page>>{
			return new RemoteCall<PageResult<Page>>('fragment', 'Page', 'getPages', {page: page} , this.recordId);
		}

		/*
		 * Remote Method. 
 Gets the settings of the page, including the parent ones.

		 */
		getSettingsPack(): RemoteCall<any>{
			return new RemoteCall<any>('fragment', 'Page', 'getSettingsPack', {} , this.recordId);
		}

		/*
		 * Remote Method. 
 Sends the page to trash

		 */
		sendToTrash(): RemoteCall<any>{
			return new RemoteCall<any>('fragment', 'Page', 'sendToTrash', {} , this.recordId);
		}

		/*
		 * Remote Method. 

		 */
		setOnline(online: boolean): RemoteCall<any>{
			return new RemoteCall<any>('fragment', 'Page', 'setOnline', {online: online} , this.recordId);
		}
	}

	export class fileBase extends DataRecord{

		/* Name of Php record */
		_recordType: string = 'File';

		/* Name of Module where record lives */
		_moduleName: string = 'fragment';

		/**
		 * Database field: int(11)
		 */
		_idfile: number = null;

		/**
		 * Gets or sets the value of the idfile field of type int(11)
		 */
		get idfile(): number{
			return this._idfile;
		}

		/**
		 * Gets or sets the value of the idfile field of type int(11)
		 */
		set idfile(value: number){
			var changed: boolean = value !== this._idfile
			this._idfile = value;
			if(changed){ this.onIdfileChanged(); }
		}

		/**
		 * Back field for event
		 */
		_idfileChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the idfile property changes
		 */
		get idfileChanged(): LatteEvent{
			if(!this._idfileChanged){ this._idfileChanged = new LatteEvent(this); }
			return this._idfileChanged;
		}

		/**
		 * Raises the <c>idfileChanged</c> event
		 */
		onIdfileChanged(){
			if(this._idfileChanged){
				this._idfileChanged.raise()
			}
			this.onFieldValueChanged('idfile', this.idfile)
		}

		/**
		* Gets the name of the autoincrement field
		**/
		onGetRecordIdName(): string { return 'idfile'; }

		/**
		 * Database field: varchar(50)
		 */
		_guid: string = null;

		/**
		 * Gets or sets the value of the guid field of type varchar(50)
		 */
		get guid(): string{
			return this._guid;
		}

		/**
		 * Gets or sets the value of the guid field of type varchar(50)
		 */
		set guid(value: string){
			var changed: boolean = value !== this._guid
			this._guid = value;
			if(changed){ this.onGuidChanged(); }
		}

		/**
		 * Back field for event
		 */
		_guidChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the guid property changes
		 */
		get guidChanged(): LatteEvent{
			if(!this._guidChanged){ this._guidChanged = new LatteEvent(this); }
			return this._guidChanged;
		}

		/**
		 * Raises the <c>guidChanged</c> event
		 */
		onGuidChanged(){
			if(this._guidChanged){
				this._guidChanged.raise()
			}
			this.onFieldValueChanged('guid', this.guid)
		}

		/**
		 * Database field: int(11)
		 */
		_iduser: number = null;

		/**
		 * Gets or sets the value of the iduser field of type int(11)
		 */
		get iduser(): number{
			return this._iduser;
		}

		/**
		 * Gets or sets the value of the iduser field of type int(11)
		 */
		set iduser(value: number){
			var changed: boolean = value !== this._iduser
			this._iduser = value;
			if(changed){ this.onIduserChanged(); }
		}

		/**
		 * Back field for event
		 */
		_iduserChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the iduser property changes
		 */
		get iduserChanged(): LatteEvent{
			if(!this._iduserChanged){ this._iduserChanged = new LatteEvent(this); }
			return this._iduserChanged;
		}

		/**
		 * Raises the <c>iduserChanged</c> event
		 */
		onIduserChanged(){
			if(this._iduserChanged){
				this._iduserChanged.raise()
			}
			this.onFieldValueChanged('iduser', this.iduser)
		}

		/**
		 * Database field: int(11)
		 */
		_idowner: number = null;

		/**
		 * Gets or sets the value of the idowner field of type int(11)
		 */
		get idowner(): number{
			return this._idowner;
		}

		/**
		 * Gets or sets the value of the idowner field of type int(11)
		 */
		set idowner(value: number){
			var changed: boolean = value !== this._idowner
			this._idowner = value;
			if(changed){ this.onIdownerChanged(); }
		}

		/**
		 * Back field for event
		 */
		_idownerChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the idowner property changes
		 */
		get idownerChanged(): LatteEvent{
			if(!this._idownerChanged){ this._idownerChanged = new LatteEvent(this); }
			return this._idownerChanged;
		}

		/**
		 * Raises the <c>idownerChanged</c> event
		 */
		onIdownerChanged(){
			if(this._idownerChanged){
				this._idownerChanged.raise()
			}
			this.onFieldValueChanged('idowner', this.idowner)
		}

		/**
		 * Database field: int(11)
		 */
		_idparent: number = null;

		/**
		 * Gets or sets the value of the idparent field of type int(11)
		 */
		get idparent(): number{
			return this._idparent;
		}

		/**
		 * Gets or sets the value of the idparent field of type int(11)
		 */
		set idparent(value: number){
			var changed: boolean = value !== this._idparent
			this._idparent = value;
			if(changed){ this.onIdparentChanged(); }
		}

		/**
		 * Back field for event
		 */
		_idparentChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the idparent property changes
		 */
		get idparentChanged(): LatteEvent{
			if(!this._idparentChanged){ this._idparentChanged = new LatteEvent(this); }
			return this._idparentChanged;
		}

		/**
		 * Raises the <c>idparentChanged</c> event
		 */
		onIdparentChanged(){
			if(this._idparentChanged){
				this._idparentChanged.raise()
			}
			this.onFieldValueChanged('idparent', this.idparent)
		}

		/**
		 * Database field: varchar(50)
		 */
		_owner: string = null;

		/**
		 * Gets or sets the value of the owner field of type varchar(50)
		 */
		get owner(): string{
			return this._owner;
		}

		/**
		 * Gets or sets the value of the owner field of type varchar(50)
		 */
		set owner(value: string){
			var changed: boolean = value !== this._owner
			this._owner = value;
			if(changed){ this.onOwnerChanged(); }
		}

		/**
		 * Back field for event
		 */
		_ownerChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the owner property changes
		 */
		get ownerChanged(): LatteEvent{
			if(!this._ownerChanged){ this._ownerChanged = new LatteEvent(this); }
			return this._ownerChanged;
		}

		/**
		 * Raises the <c>ownerChanged</c> event
		 */
		onOwnerChanged(){
			if(this._ownerChanged){
				this._ownerChanged.raise()
			}
			this.onFieldValueChanged('owner', this.owner)
		}

		/**
		 * Database field: varchar(128)
		 */
		_name: string = null;

		/**
		 * Gets or sets the value of the name field of type varchar(128)
		 */
		get name(): string{
			return this._name;
		}

		/**
		 * Gets or sets the value of the name field of type varchar(128)
		 */
		set name(value: string){
			var changed: boolean = value !== this._name
			this._name = value;
			if(changed){ this.onNameChanged(); }
		}

		/**
		 * Back field for event
		 */
		_nameChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the name property changes
		 */
		get nameChanged(): LatteEvent{
			if(!this._nameChanged){ this._nameChanged = new LatteEvent(this); }
			return this._nameChanged;
		}

		/**
		 * Raises the <c>nameChanged</c> event
		 */
		onNameChanged(){
			if(this._nameChanged){
				this._nameChanged.raise()
			}
			this.onFieldValueChanged('name', this.name)
		}

		/**
		 * Database field: int(11)
		 */
		_size: number = null;

		/**
		 * Gets or sets the value of the size field of type int(11)
		 */
		get size(): number{
			return this._size;
		}

		/**
		 * Gets or sets the value of the size field of type int(11)
		 */
		set size(value: number){
			var changed: boolean = value !== this._size
			this._size = value;
			if(changed){ this.onSizeChanged(); }
		}

		/**
		 * Back field for event
		 */
		_sizeChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the size property changes
		 */
		get sizeChanged(): LatteEvent{
			if(!this._sizeChanged){ this._sizeChanged = new LatteEvent(this); }
			return this._sizeChanged;
		}

		/**
		 * Raises the <c>sizeChanged</c> event
		 */
		onSizeChanged(){
			if(this._sizeChanged){
				this._sizeChanged.raise()
			}
			this.onFieldValueChanged('size', this.size)
		}

		/**
		 * Database field: varchar(30)
		 */
		_bucket: string = null;

		/**
		 * Gets or sets the value of the bucket field of type varchar(30)
		 */
		get bucket(): string{
			return this._bucket;
		}

		/**
		 * Gets or sets the value of the bucket field of type varchar(30)
		 */
		set bucket(value: string){
			var changed: boolean = value !== this._bucket
			this._bucket = value;
			if(changed){ this.onBucketChanged(); }
		}

		/**
		 * Back field for event
		 */
		_bucketChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the bucket property changes
		 */
		get bucketChanged(): LatteEvent{
			if(!this._bucketChanged){ this._bucketChanged = new LatteEvent(this); }
			return this._bucketChanged;
		}

		/**
		 * Raises the <c>bucketChanged</c> event
		 */
		onBucketChanged(){
			if(this._bucketChanged){
				this._bucketChanged.raise()
			}
			this.onFieldValueChanged('bucket', this.bucket)
		}

		/**
		 * Database field: varchar(128)
		 */
		_path: string = null;

		/**
		 * Gets or sets the value of the path field of type varchar(128)
		 */
		get path(): string{
			return this._path;
		}

		/**
		 * Gets or sets the value of the path field of type varchar(128)
		 */
		set path(value: string){
			var changed: boolean = value !== this._path
			this._path = value;
			if(changed){ this.onPathChanged(); }
		}

		/**
		 * Back field for event
		 */
		_pathChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the path property changes
		 */
		get pathChanged(): LatteEvent{
			if(!this._pathChanged){ this._pathChanged = new LatteEvent(this); }
			return this._pathChanged;
		}

		/**
		 * Raises the <c>pathChanged</c> event
		 */
		onPathChanged(){
			if(this._pathChanged){
				this._pathChanged.raise()
			}
			this.onFieldValueChanged('path', this.path)
		}

		/**
		 * Database field: datetime
		 */
		_uploaded: DateTime = null;

		/**
		 * Gets or sets the value of the uploaded field of type datetime
		 */
		get uploaded(): DateTime{
			return this._uploaded;
		}

		/**
		 * Gets or sets the value of the uploaded field of type datetime
		 */
		set uploaded(value: DateTime){
			var changed: boolean = value !== this._uploaded
			this._uploaded = value;
			if(changed){ this.onUploadedChanged(); }
		}

		/**
		 * Back field for event
		 */
		_uploadedChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the uploaded property changes
		 */
		get uploadedChanged(): LatteEvent{
			if(!this._uploadedChanged){ this._uploadedChanged = new LatteEvent(this); }
			return this._uploadedChanged;
		}

		/**
		 * Raises the <c>uploadedChanged</c> event
		 */
		onUploadedChanged(){
			if(this._uploadedChanged){
				this._uploadedChanged.raise()
			}
			this.onFieldValueChanged('uploaded', this.uploaded)
		}

		/**
		 * Database field: varchar(200)
		 */
		_description: string = null;

		/**
		 * Gets or sets the value of the description field of type varchar(200)
		 */
		get description(): string{
			return this._description;
		}

		/**
		 * Gets or sets the value of the description field of type varchar(200)
		 */
		set description(value: string){
			var changed: boolean = value !== this._description
			this._description = value;
			if(changed){ this.onDescriptionChanged(); }
		}

		/**
		 * Back field for event
		 */
		_descriptionChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the description property changes
		 */
		get descriptionChanged(): LatteEvent{
			if(!this._descriptionChanged){ this._descriptionChanged = new LatteEvent(this); }
			return this._descriptionChanged;
		}

		/**
		 * Raises the <c>descriptionChanged</c> event
		 */
		onDescriptionChanged(){
			if(this._descriptionChanged){
				this._descriptionChanged.raise()
			}
			this.onFieldValueChanged('description', this.description)
		}

		/**
		 * Database field: int(11)
		 */
		_width: number = null;

		/**
		 * Gets or sets the value of the width field of type int(11)
		 */
		get width(): number{
			return this._width;
		}

		/**
		 * Gets or sets the value of the width field of type int(11)
		 */
		set width(value: number){
			var changed: boolean = value !== this._width
			this._width = value;
			if(changed){ this.onWidthChanged(); }
		}

		/**
		 * Back field for event
		 */
		_widthChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the width property changes
		 */
		get widthChanged(): LatteEvent{
			if(!this._widthChanged){ this._widthChanged = new LatteEvent(this); }
			return this._widthChanged;
		}

		/**
		 * Raises the <c>widthChanged</c> event
		 */
		onWidthChanged(){
			if(this._widthChanged){
				this._widthChanged.raise()
			}
			this.onFieldValueChanged('width', this.width)
		}

		/**
		 * Database field: int(11)
		 */
		_height: number = null;

		/**
		 * Gets or sets the value of the height field of type int(11)
		 */
		get height(): number{
			return this._height;
		}

		/**
		 * Gets or sets the value of the height field of type int(11)
		 */
		set height(value: number){
			var changed: boolean = value !== this._height
			this._height = value;
			if(changed){ this.onHeightChanged(); }
		}

		/**
		 * Back field for event
		 */
		_heightChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the height property changes
		 */
		get heightChanged(): LatteEvent{
			if(!this._heightChanged){ this._heightChanged = new LatteEvent(this); }
			return this._heightChanged;
		}

		/**
		 * Raises the <c>heightChanged</c> event
		 */
		onHeightChanged(){
			if(this._heightChanged){
				this._heightChanged.raise()
			}
			this.onFieldValueChanged('height', this.height)
		}

		/**
		 * Database field: varchar(50)
		 */
		_key: string = null;

		/**
		 * Gets or sets the value of the key field of type varchar(50)
		 */
		get key(): string{
			return this._key;
		}

		/**
		 * Gets or sets the value of the key field of type varchar(50)
		 */
		set key(value: string){
			var changed: boolean = value !== this._key
			this._key = value;
			if(changed){ this.onKeyChanged(); }
		}

		/**
		 * Back field for event
		 */
		_keyChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the key property changes
		 */
		get keyChanged(): LatteEvent{
			if(!this._keyChanged){ this._keyChanged = new LatteEvent(this); }
			return this._keyChanged;
		}

		/**
		 * Raises the <c>keyChanged</c> event
		 */
		onKeyChanged(){
			if(this._keyChanged){
				this._keyChanged.raise()
			}
			this.onFieldValueChanged('key', this.key)
		}

		/**
		* Override. Gets data about the fields of the record.
		**/
		onGetFields(): any { return {'idfile': this.idfile, 'guid': this.guid, 'iduser': this.iduser, 'idowner': this.idowner, 'idparent': this.idparent, 'owner': this.owner, 'name': this.name, 'size': this.size, 'bucket': this.bucket, 'path': this.path, 'uploaded': this.uploaded, 'description': this.description, 'width': this.width, 'height': this.height, 'key': this.key}; }

		/**
		* Declares the native types of the record.
		**/

		static nativeTypes = {"idfile":"int(11)","guid":"varchar(50)","iduser":"int(11)","idowner":"int(11)","idparent":"int(11)","owner":"varchar(50)","name":"varchar(128)","size":"int(11)","bucket":"varchar(30)","path":"varchar(128)","uploaded":"datetime","description":"varchar(200)","width":"int(11)","height":"int(11)","key":"varchar(50)"};

		/*
		 * Remote Method. 
 Retrieves a list of files by searching by the specified, comma separated guids


		 */
		static byGuids(guids: string): RemoteCall<File[]>{
			return new RemoteCall<File[]>('fragment', 'File', 'byGuids', {guids: guids} );
		}

		/*
		 * Remote Method. 
 Gets the files of the specified records.  Files contains all children.


		 */
		static byOwner(name: string, id: number): RemoteCall<Array<File>>{
			return new RemoteCall<Array<File>>('fragment', 'File', 'byOwner', {name: name, id: id} );
		}

		/*
		 * Remote Method. 
 Gets an array unlinked File objects inserted by the logged user.


		 */
		static myUnlinked(ownerName: string): RemoteCall<Array<File>>{
			return new RemoteCall<Array<File>>('fragment', 'File', 'myUnlinked', {ownerName: ownerName} );
		}

		/*
		 * Remote Method. 

		 */
		static changeNameDescription(idfile: number, name: string, description: string): RemoteCall<any>{
			return new RemoteCall<any>('fragment', 'File', 'changeNameDescription', {idfile: idfile, name: name, description: description} );
		}

		/*
		 * Remote Method. 
 Removes the registry of file and its contents from S3.


		 */
		physicalRemove(): RemoteCall<any>{
			return new RemoteCall<any>('fragment', 'File', 'physicalRemove', {} , this.recordId);
		}
	}

	export class groupBase extends DataRecord{

		/* Name of Php record */
		_recordType: string = 'Group';

		/* Name of Module where record lives */
		_moduleName: string = 'fragment';

		/**
		 * Database field: int(11)
		 */
		_idgroup: number = null;

		/**
		 * Gets or sets the value of the idgroup field of type int(11)
		 */
		get idgroup(): number{
			return this._idgroup;
		}

		/**
		 * Gets or sets the value of the idgroup field of type int(11)
		 */
		set idgroup(value: number){
			var changed: boolean = value !== this._idgroup
			this._idgroup = value;
			if(changed){ this.onIdgroupChanged(); }
		}

		/**
		 * Back field for event
		 */
		_idgroupChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the idgroup property changes
		 */
		get idgroupChanged(): LatteEvent{
			if(!this._idgroupChanged){ this._idgroupChanged = new LatteEvent(this); }
			return this._idgroupChanged;
		}

		/**
		 * Raises the <c>idgroupChanged</c> event
		 */
		onIdgroupChanged(){
			if(this._idgroupChanged){
				this._idgroupChanged.raise()
			}
			this.onFieldValueChanged('idgroup', this.idgroup)
		}

		/**
		* Gets the name of the autoincrement field
		**/
		onGetRecordIdName(): string { return 'idgroup'; }

		/**
		 * Database field: varchar(128)
		 */
		_name: string = null;

		/**
		 * Gets or sets the value of the name field of type varchar(128)
		 */
		get name(): string{
			return this._name;
		}

		/**
		 * Gets or sets the value of the name field of type varchar(128)
		 */
		set name(value: string){
			var changed: boolean = value !== this._name
			this._name = value;
			if(changed){ this.onNameChanged(); }
		}

		/**
		 * Back field for event
		 */
		_nameChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the name property changes
		 */
		get nameChanged(): LatteEvent{
			if(!this._nameChanged){ this._nameChanged = new LatteEvent(this); }
			return this._nameChanged;
		}

		/**
		 * Raises the <c>nameChanged</c> event
		 */
		onNameChanged(){
			if(this._nameChanged){
				this._nameChanged.raise()
			}
			this.onFieldValueChanged('name', this.name)
		}

		/**
		* Override. Gets data about the fields of the record.
		**/
		onGetFields(): any { return {'idgroup': this.idgroup, 'name': this.name}; }

		/**
		* Declares the native types of the record.
		**/

		static nativeTypes = {"idgroup":"int(11)","name":"varchar(128)"};

		/*
		 * Remote Method. 


		 */
		static catalog(): RemoteCall<Group[]>{
			return new RemoteCall<Group[]>('fragment', 'Group', 'catalog', {} );
		}

		/*
		 * Remote Method. 

		 */
		static search(text: string): RemoteCall<Group[]>{
			return new RemoteCall<Group[]>('fragment', 'Group', 'search', {text: text} );
		}
	}

	export class fragmentBase extends DataRecord{

		/* Name of Php record */
		_recordType: string = 'Fragment';

		/* Name of Module where record lives */
		_moduleName: string = 'fragment';

		/**
		 * Database field: int(11)
		 */
		_idfragment: number = null;

		/**
		 * Gets or sets the value of the idfragment field of type int(11)
		 */
		get idfragment(): number{
			return this._idfragment;
		}

		/**
		 * Gets or sets the value of the idfragment field of type int(11)
		 */
		set idfragment(value: number){
			var changed: boolean = value !== this._idfragment
			this._idfragment = value;
			if(changed){ this.onIdfragmentChanged(); }
		}

		/**
		 * Back field for event
		 */
		_idfragmentChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the idfragment property changes
		 */
		get idfragmentChanged(): LatteEvent{
			if(!this._idfragmentChanged){ this._idfragmentChanged = new LatteEvent(this); }
			return this._idfragmentChanged;
		}

		/**
		 * Raises the <c>idfragmentChanged</c> event
		 */
		onIdfragmentChanged(){
			if(this._idfragmentChanged){
				this._idfragmentChanged.raise()
			}
			this.onFieldValueChanged('idfragment', this.idfragment)
		}

		/**
		* Gets the name of the autoincrement field
		**/
		onGetRecordIdName(): string { return 'idfragment'; }

		/**
		 * Database field: int(11)
		 */
		_idpage: number = null;

		/**
		 * Gets or sets the value of the idpage field of type int(11)
		 */
		get idpage(): number{
			return this._idpage;
		}

		/**
		 * Gets or sets the value of the idpage field of type int(11)
		 */
		set idpage(value: number){
			var changed: boolean = value !== this._idpage
			this._idpage = value;
			if(changed){ this.onIdpageChanged(); }
		}

		/**
		 * Back field for event
		 */
		_idpageChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the idpage property changes
		 */
		get idpageChanged(): LatteEvent{
			if(!this._idpageChanged){ this._idpageChanged = new LatteEvent(this); }
			return this._idpageChanged;
		}

		/**
		 * Raises the <c>idpageChanged</c> event
		 */
		onIdpageChanged(){
			if(this._idpageChanged){
				this._idpageChanged.raise()
			}
			this.onFieldValueChanged('idpage', this.idpage)
		}

		/**
		 * Database field: longtext
		 */
		_value: string = null;

		/**
		 * Gets or sets the value of the value field of type longtext
		 */
		get value(): string{
			return this._value;
		}

		/**
		 * Gets or sets the value of the value field of type longtext
		 */
		set value(value: string){
			var changed: boolean = value !== this._value
			this._value = value;
			if(changed){ this.onValueChanged(); }
		}

		/**
		 * Back field for event
		 */
		_valueChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the value property changes
		 */
		get valueChanged(): LatteEvent{
			if(!this._valueChanged){ this._valueChanged = new LatteEvent(this); }
			return this._valueChanged;
		}

		/**
		 * Raises the <c>valueChanged</c> event
		 */
		onValueChanged(){
			if(this._valueChanged){
				this._valueChanged.raise()
			}
			this.onFieldValueChanged('value', this.value)
		}

		/**
		 * Database field: varchar(50)
		 */
		_name: string = null;

		/**
		 * Gets or sets the value of the name field of type varchar(50)
		 */
		get name(): string{
			return this._name;
		}

		/**
		 * Gets or sets the value of the name field of type varchar(50)
		 */
		set name(value: string){
			var changed: boolean = value !== this._name
			this._name = value;
			if(changed){ this.onNameChanged(); }
		}

		/**
		 * Back field for event
		 */
		_nameChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the name property changes
		 */
		get nameChanged(): LatteEvent{
			if(!this._nameChanged){ this._nameChanged = new LatteEvent(this); }
			return this._nameChanged;
		}

		/**
		 * Raises the <c>nameChanged</c> event
		 */
		onNameChanged(){
			if(this._nameChanged){
				this._nameChanged.raise()
			}
			this.onFieldValueChanged('name', this.name)
		}

		/**
		* Override. Gets data about the fields of the record.
		**/
		onGetFields(): any { return {'idfragment': this.idfragment, 'idpage': this.idpage, 'value': this.value, 'name': this.name}; }

		/**
		* Declares the native types of the record.
		**/

		static nativeTypes = {"idfragment":"int(11)","idpage":"int(11)","value":"longtext","name":"varchar(50)"};
	}

	export class groupUserBase extends DataRecord{

		/* Name of Php record */
		_recordType: string = 'GroupUser';

		/* Name of Module where record lives */
		_moduleName: string = 'fragment';

		/**
		 * Database field: int(11)
		 */
		_idgroupuser: number = null;

		/**
		 * Gets or sets the value of the idgroupuser field of type int(11)
		 */
		get idgroupuser(): number{
			return this._idgroupuser;
		}

		/**
		 * Gets or sets the value of the idgroupuser field of type int(11)
		 */
		set idgroupuser(value: number){
			var changed: boolean = value !== this._idgroupuser
			this._idgroupuser = value;
			if(changed){ this.onIdgroupuserChanged(); }
		}

		/**
		 * Back field for event
		 */
		_idgroupuserChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the idgroupuser property changes
		 */
		get idgroupuserChanged(): LatteEvent{
			if(!this._idgroupuserChanged){ this._idgroupuserChanged = new LatteEvent(this); }
			return this._idgroupuserChanged;
		}

		/**
		 * Raises the <c>idgroupuserChanged</c> event
		 */
		onIdgroupuserChanged(){
			if(this._idgroupuserChanged){
				this._idgroupuserChanged.raise()
			}
			this.onFieldValueChanged('idgroupuser', this.idgroupuser)
		}

		/**
		* Gets the name of the autoincrement field
		**/
		onGetRecordIdName(): string { return 'idgroupuser'; }

		/**
		 * Database field: int(11)
		 */
		_idgroup: number = null;

		/**
		 * Gets or sets the value of the idgroup field of type int(11)
		 */
		get idgroup(): number{
			return this._idgroup;
		}

		/**
		 * Gets or sets the value of the idgroup field of type int(11)
		 */
		set idgroup(value: number){
			var changed: boolean = value !== this._idgroup
			this._idgroup = value;
			if(changed){ this.onIdgroupChanged(); }
		}

		/**
		 * Back field for event
		 */
		_idgroupChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the idgroup property changes
		 */
		get idgroupChanged(): LatteEvent{
			if(!this._idgroupChanged){ this._idgroupChanged = new LatteEvent(this); }
			return this._idgroupChanged;
		}

		/**
		 * Raises the <c>idgroupChanged</c> event
		 */
		onIdgroupChanged(){
			if(this._idgroupChanged){
				this._idgroupChanged.raise()
			}
			this.onFieldValueChanged('idgroup', this.idgroup)
		}

		/**
		 * Database field: int(11)
		 */
		_iduser: number = null;

		/**
		 * Gets or sets the value of the iduser field of type int(11)
		 */
		get iduser(): number{
			return this._iduser;
		}

		/**
		 * Gets or sets the value of the iduser field of type int(11)
		 */
		set iduser(value: number){
			var changed: boolean = value !== this._iduser
			this._iduser = value;
			if(changed){ this.onIduserChanged(); }
		}

		/**
		 * Back field for event
		 */
		_iduserChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the iduser property changes
		 */
		get iduserChanged(): LatteEvent{
			if(!this._iduserChanged){ this._iduserChanged = new LatteEvent(this); }
			return this._iduserChanged;
		}

		/**
		 * Raises the <c>iduserChanged</c> event
		 */
		onIduserChanged(){
			if(this._iduserChanged){
				this._iduserChanged.raise()
			}
			this.onFieldValueChanged('iduser', this.iduser)
		}

		/**
		* Override. Gets data about the fields of the record.
		**/
		onGetFields(): any { return {'idgroupuser': this.idgroupuser, 'idgroup': this.idgroup, 'iduser': this.iduser}; }

		/**
		* Declares the native types of the record.
		**/

		static nativeTypes = {"idgroupuser":"int(11)","idgroup":"int(11)","iduser":"int(11)"};

		/*
		 * Remote Method. 

		 */
		static byGroup(idgroup: number): RemoteCall<GroupUser[]>{
			return new RemoteCall<GroupUser[]>('fragment', 'GroupUser', 'byGroup', {idgroup: idgroup} );
		}
	}

	export class userBase extends DataRecord{

		/* Name of Php record */
		_recordType: string = 'User';

		/* Name of Module where record lives */
		_moduleName: string = 'fragment';

		/**
		 * Database field: int(11)
		 */
		_iduser: number = null;

		/**
		 * Gets or sets the value of the iduser field of type int(11)
		 */
		get iduser(): number{
			return this._iduser;
		}

		/**
		 * Gets or sets the value of the iduser field of type int(11)
		 */
		set iduser(value: number){
			var changed: boolean = value !== this._iduser
			this._iduser = value;
			if(changed){ this.onIduserChanged(); }
		}

		/**
		 * Back field for event
		 */
		_iduserChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the iduser property changes
		 */
		get iduserChanged(): LatteEvent{
			if(!this._iduserChanged){ this._iduserChanged = new LatteEvent(this); }
			return this._iduserChanged;
		}

		/**
		 * Raises the <c>iduserChanged</c> event
		 */
		onIduserChanged(){
			if(this._iduserChanged){
				this._iduserChanged.raise()
			}
			this.onFieldValueChanged('iduser', this.iduser)
		}

		/**
		* Gets the name of the autoincrement field
		**/
		onGetRecordIdName(): string { return 'iduser'; }

		/**
		 * Database field: varchar(128)
		 */
		_uname: string = null;

		/**
		 * Gets or sets the value of the uname field of type varchar(128)
		 */
		get uname(): string{
			return this._uname;
		}

		/**
		 * Gets or sets the value of the uname field of type varchar(128)
		 */
		set uname(value: string){
			var changed: boolean = value !== this._uname
			this._uname = value;
			if(changed){ this.onUnameChanged(); }
		}

		/**
		 * Back field for event
		 */
		_unameChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the uname property changes
		 */
		get unameChanged(): LatteEvent{
			if(!this._unameChanged){ this._unameChanged = new LatteEvent(this); }
			return this._unameChanged;
		}

		/**
		 * Raises the <c>unameChanged</c> event
		 */
		onUnameChanged(){
			if(this._unameChanged){
				this._unameChanged.raise()
			}
			this.onFieldValueChanged('uname', this.uname)
		}

		/**
		 * Database field: varchar(128)
		 */
		_password: string = null;

		/**
		 * Gets or sets the value of the password field of type varchar(128)
		 */
		get password(): string{
			return this._password;
		}

		/**
		 * Gets or sets the value of the password field of type varchar(128)
		 */
		set password(value: string){
			var changed: boolean = value !== this._password
			this._password = value;
			if(changed){ this.onPasswordChanged(); }
		}

		/**
		 * Back field for event
		 */
		_passwordChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the password property changes
		 */
		get passwordChanged(): LatteEvent{
			if(!this._passwordChanged){ this._passwordChanged = new LatteEvent(this); }
			return this._passwordChanged;
		}

		/**
		 * Raises the <c>passwordChanged</c> event
		 */
		onPasswordChanged(){
			if(this._passwordChanged){
				this._passwordChanged.raise()
			}
			this.onFieldValueChanged('password', this.password)
		}

		/**
		 * Database field: int(11)
		 */
		_flags: number = null;

		/**
		 * Gets or sets the value of the flags field of type int(11)
		 */
		get flags(): number{
			return this._flags;
		}

		/**
		 * Gets or sets the value of the flags field of type int(11)
		 */
		set flags(value: number){
			var changed: boolean = value !== this._flags
			this._flags = value;
			if(changed){ this.onFlagsChanged(); }
		}

		/**
		 * Back field for event
		 */
		_flagsChanged: LatteEvent;

		/**
		 * Gets an event raised when the value of the flags property changes
		 */
		get flagsChanged(): LatteEvent{
			if(!this._flagsChanged){ this._flagsChanged = new LatteEvent(this); }
			return this._flagsChanged;
		}

		/**
		 * Raises the <c>flagsChanged</c> event
		 */
		onFlagsChanged(){
			if(this._flagsChanged){
				this._flagsChanged.raise()
			}
			this.onFieldValueChanged('flags', this.flags)
		}

		/**
		* Override. Gets data about the fields of the record.
		**/
		onGetFields(): any { return {'iduser': this.iduser, 'uname': this.uname, 'password': this.password, 'flags': this.flags}; }

		/**
		* Declares the native types of the record.
		**/

		static nativeTypes = {"iduser":"int(11)","uname":"varchar(128)","password":"varchar(128)","flags":"int(11)"};

		/*
		 * Remote Method. 

		 */
		static search(text: string): RemoteCall<User[]>{
			return new RemoteCall<User[]>('fragment', 'User', 'search', {text: text} );
		}

		/*
		 * Remote Method. 

		 */
		static catalog(): RemoteCall<User[]>{
			return new RemoteCall<User[]>('fragment', 'User', 'catalog', {} );
		}

		/*
		 * Remote Method. 

		 */
		changePassword(oldPassword: string, password: string): RemoteCall<boolean>{
			return new RemoteCall<boolean>('fragment', 'User', 'changePassword', {oldPassword: oldPassword, password: password} , this.recordId);
		}

		/*
		 * Remote Method. 

		 */
		passwordCorrect(password: string): RemoteCall<boolean>{
			return new RemoteCall<boolean>('fragment', 'User', 'passwordCorrect', {password: password} , this.recordId);
		}
	}


		/*
		 * 
 Created by PhpStorm.
 User: josemanuel
 Date: 8/1/16
 Time: 21:34

		 */
	export class Session{

		/*
		 * Remote Method. 
 Makes a user login


		 */
		static logIn(uname: string, pass: string): RemoteCall<User>{
			return new RemoteCall<User>('fragment', 'Session', 'logIn', {uname: uname, pass: pass} );
		}

		/*
		 * Remote Method. 
 Logs the user out


		 */
		static logOut(): RemoteCall<any>{
			return new RemoteCall<any>('fragment', 'Session', 'logOut', {} );
		}
	}

}