var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var latte;
(function (latte) {
    var pageBase = (function (_super) {
        __extends(pageBase, _super);
        function pageBase() {
            _super.apply(this, arguments);
            /* Name of Php record */
            this._recordType = 'Page';
            /* Name of Module where record lives */
            this._moduleName = 'fragment';
            /**
             * Database field: int(11)
             */
            this._idpage = null;
            /**
             * Database field: int(11)
             */
            this._idparent = null;
            /**
             * Database field: int(11)
             */
            this._idgroup = null;
            /**
             * Database field: int(11)
             */
            this._iduser = null;
            /**
             * Database field: varchar(50)
             */
            this._guid = null;
            /**
             * Database field: varchar(200)
             */
            this._key = null;
            /**
             * Database field: int(1)
             */
            this._trash = null;
            /**
             * Database field: int(1)
             */
            this._online = null;
            /**
             * Database field: varchar(20)
             */
            this._template = null;
            /**
             * Database field: datetime
             */
            this._created = null;
            /**
             * Database field: datetime
             */
            this._modified = null;
            /**
             * Database field: varchar(128)
             */
            this._title = null;
            /**
             * Database field: varchar(255)
             */
            this._description = null;
            /**
             * Database field: int(11)
             */
            this._order = null;
            /**
             * Database field: varchar(20)
             */
            this._sort = null;
            /**
             * Database field: int(11)
             */
            this._powner = null;
            /**
             * Database field: int(11)
             */
            this._pgroup = null;
            /**
             * Database field: int(11)
             */
            this._pother = null;
            /**
             * Database field: int(11)
             */
            this._pworld = null;
            /**
             * Database field: int(11)
             */
            this._flags = null;
        }
        Object.defineProperty(pageBase.prototype, "idpage", {
            /**
             * Gets or sets the value of the idpage field of type int(11)
             */
            get: function () {
                return this._idpage;
            },
            /**
             * Gets or sets the value of the idpage field of type int(11)
             */
            set: function (value) {
                var changed = value !== this._idpage;
                this._idpage = value;
                if (changed) {
                    this.onIdpageChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(pageBase.prototype, "idpageChanged", {
            /**
             * Gets an event raised when the value of the idpage property changes
             */
            get: function () {
                if (!this._idpageChanged) {
                    this._idpageChanged = new latte.LatteEvent(this);
                }
                return this._idpageChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>idpageChanged</c> event
         */
        pageBase.prototype.onIdpageChanged = function () {
            if (this._idpageChanged) {
                this._idpageChanged.raise();
            }
            this.onFieldValueChanged('idpage', this.idpage);
        };
        /**
        * Gets the name of the autoincrement field
        **/
        pageBase.prototype.onGetRecordIdName = function () { return 'idpage'; };
        Object.defineProperty(pageBase.prototype, "idparent", {
            /**
             * Gets or sets the value of the idparent field of type int(11)
             */
            get: function () {
                return this._idparent;
            },
            /**
             * Gets or sets the value of the idparent field of type int(11)
             */
            set: function (value) {
                var changed = value !== this._idparent;
                this._idparent = value;
                if (changed) {
                    this.onIdparentChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(pageBase.prototype, "idparentChanged", {
            /**
             * Gets an event raised when the value of the idparent property changes
             */
            get: function () {
                if (!this._idparentChanged) {
                    this._idparentChanged = new latte.LatteEvent(this);
                }
                return this._idparentChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>idparentChanged</c> event
         */
        pageBase.prototype.onIdparentChanged = function () {
            if (this._idparentChanged) {
                this._idparentChanged.raise();
            }
            this.onFieldValueChanged('idparent', this.idparent);
        };
        Object.defineProperty(pageBase.prototype, "idgroup", {
            /**
             * Gets or sets the value of the idgroup field of type int(11)
             */
            get: function () {
                return this._idgroup;
            },
            /**
             * Gets or sets the value of the idgroup field of type int(11)
             */
            set: function (value) {
                var changed = value !== this._idgroup;
                this._idgroup = value;
                if (changed) {
                    this.onIdgroupChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(pageBase.prototype, "idgroupChanged", {
            /**
             * Gets an event raised when the value of the idgroup property changes
             */
            get: function () {
                if (!this._idgroupChanged) {
                    this._idgroupChanged = new latte.LatteEvent(this);
                }
                return this._idgroupChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>idgroupChanged</c> event
         */
        pageBase.prototype.onIdgroupChanged = function () {
            if (this._idgroupChanged) {
                this._idgroupChanged.raise();
            }
            this.onFieldValueChanged('idgroup', this.idgroup);
        };
        Object.defineProperty(pageBase.prototype, "iduser", {
            /**
             * Gets or sets the value of the iduser field of type int(11)
             */
            get: function () {
                return this._iduser;
            },
            /**
             * Gets or sets the value of the iduser field of type int(11)
             */
            set: function (value) {
                var changed = value !== this._iduser;
                this._iduser = value;
                if (changed) {
                    this.onIduserChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(pageBase.prototype, "iduserChanged", {
            /**
             * Gets an event raised when the value of the iduser property changes
             */
            get: function () {
                if (!this._iduserChanged) {
                    this._iduserChanged = new latte.LatteEvent(this);
                }
                return this._iduserChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>iduserChanged</c> event
         */
        pageBase.prototype.onIduserChanged = function () {
            if (this._iduserChanged) {
                this._iduserChanged.raise();
            }
            this.onFieldValueChanged('iduser', this.iduser);
        };
        Object.defineProperty(pageBase.prototype, "guid", {
            /**
             * Gets or sets the value of the guid field of type varchar(50)
             */
            get: function () {
                return this._guid;
            },
            /**
             * Gets or sets the value of the guid field of type varchar(50)
             */
            set: function (value) {
                var changed = value !== this._guid;
                this._guid = value;
                if (changed) {
                    this.onGuidChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(pageBase.prototype, "guidChanged", {
            /**
             * Gets an event raised when the value of the guid property changes
             */
            get: function () {
                if (!this._guidChanged) {
                    this._guidChanged = new latte.LatteEvent(this);
                }
                return this._guidChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>guidChanged</c> event
         */
        pageBase.prototype.onGuidChanged = function () {
            if (this._guidChanged) {
                this._guidChanged.raise();
            }
            this.onFieldValueChanged('guid', this.guid);
        };
        Object.defineProperty(pageBase.prototype, "key", {
            /**
             * Gets or sets the value of the key field of type varchar(200)
             */
            get: function () {
                return this._key;
            },
            /**
             * Gets or sets the value of the key field of type varchar(200)
             */
            set: function (value) {
                var changed = value !== this._key;
                this._key = value;
                if (changed) {
                    this.onKeyChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(pageBase.prototype, "keyChanged", {
            /**
             * Gets an event raised when the value of the key property changes
             */
            get: function () {
                if (!this._keyChanged) {
                    this._keyChanged = new latte.LatteEvent(this);
                }
                return this._keyChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>keyChanged</c> event
         */
        pageBase.prototype.onKeyChanged = function () {
            if (this._keyChanged) {
                this._keyChanged.raise();
            }
            this.onFieldValueChanged('key', this.key);
        };
        Object.defineProperty(pageBase.prototype, "trash", {
            /**
             * Gets or sets the value of the trash field of type int(1)
             */
            get: function () {
                return this._trash;
            },
            /**
             * Gets or sets the value of the trash field of type int(1)
             */
            set: function (value) {
                var changed = value !== this._trash;
                this._trash = value;
                if (changed) {
                    this.onTrashChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(pageBase.prototype, "trashChanged", {
            /**
             * Gets an event raised when the value of the trash property changes
             */
            get: function () {
                if (!this._trashChanged) {
                    this._trashChanged = new latte.LatteEvent(this);
                }
                return this._trashChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>trashChanged</c> event
         */
        pageBase.prototype.onTrashChanged = function () {
            if (this._trashChanged) {
                this._trashChanged.raise();
            }
            this.onFieldValueChanged('trash', this.trash);
        };
        Object.defineProperty(pageBase.prototype, "online", {
            /**
             * Gets or sets the value of the online field of type int(1)
             */
            get: function () {
                return this._online;
            },
            /**
             * Gets or sets the value of the online field of type int(1)
             */
            set: function (value) {
                var changed = value !== this._online;
                this._online = value;
                if (changed) {
                    this.onOnlineChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(pageBase.prototype, "onlineChanged", {
            /**
             * Gets an event raised when the value of the online property changes
             */
            get: function () {
                if (!this._onlineChanged) {
                    this._onlineChanged = new latte.LatteEvent(this);
                }
                return this._onlineChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>onlineChanged</c> event
         */
        pageBase.prototype.onOnlineChanged = function () {
            if (this._onlineChanged) {
                this._onlineChanged.raise();
            }
            this.onFieldValueChanged('online', this.online);
        };
        Object.defineProperty(pageBase.prototype, "template", {
            /**
             * Gets or sets the value of the template field of type varchar(20)
             */
            get: function () {
                return this._template;
            },
            /**
             * Gets or sets the value of the template field of type varchar(20)
             */
            set: function (value) {
                var changed = value !== this._template;
                this._template = value;
                if (changed) {
                    this.onTemplateChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(pageBase.prototype, "templateChanged", {
            /**
             * Gets an event raised when the value of the template property changes
             */
            get: function () {
                if (!this._templateChanged) {
                    this._templateChanged = new latte.LatteEvent(this);
                }
                return this._templateChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>templateChanged</c> event
         */
        pageBase.prototype.onTemplateChanged = function () {
            if (this._templateChanged) {
                this._templateChanged.raise();
            }
            this.onFieldValueChanged('template', this.template);
        };
        Object.defineProperty(pageBase.prototype, "created", {
            /**
             * Gets or sets the value of the created field of type datetime
             */
            get: function () {
                return this._created;
            },
            /**
             * Gets or sets the value of the created field of type datetime
             */
            set: function (value) {
                var changed = value !== this._created;
                this._created = value;
                if (changed) {
                    this.onCreatedChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(pageBase.prototype, "createdChanged", {
            /**
             * Gets an event raised when the value of the created property changes
             */
            get: function () {
                if (!this._createdChanged) {
                    this._createdChanged = new latte.LatteEvent(this);
                }
                return this._createdChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>createdChanged</c> event
         */
        pageBase.prototype.onCreatedChanged = function () {
            if (this._createdChanged) {
                this._createdChanged.raise();
            }
            this.onFieldValueChanged('created', this.created);
        };
        Object.defineProperty(pageBase.prototype, "modified", {
            /**
             * Gets or sets the value of the modified field of type datetime
             */
            get: function () {
                return this._modified;
            },
            /**
             * Gets or sets the value of the modified field of type datetime
             */
            set: function (value) {
                var changed = value !== this._modified;
                this._modified = value;
                if (changed) {
                    this.onModifiedChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(pageBase.prototype, "modifiedChanged", {
            /**
             * Gets an event raised when the value of the modified property changes
             */
            get: function () {
                if (!this._modifiedChanged) {
                    this._modifiedChanged = new latte.LatteEvent(this);
                }
                return this._modifiedChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>modifiedChanged</c> event
         */
        pageBase.prototype.onModifiedChanged = function () {
            if (this._modifiedChanged) {
                this._modifiedChanged.raise();
            }
            this.onFieldValueChanged('modified', this.modified);
        };
        Object.defineProperty(pageBase.prototype, "title", {
            /**
             * Gets or sets the value of the title field of type varchar(128)
             */
            get: function () {
                return this._title;
            },
            /**
             * Gets or sets the value of the title field of type varchar(128)
             */
            set: function (value) {
                var changed = value !== this._title;
                this._title = value;
                if (changed) {
                    this.onTitleChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(pageBase.prototype, "titleChanged", {
            /**
             * Gets an event raised when the value of the title property changes
             */
            get: function () {
                if (!this._titleChanged) {
                    this._titleChanged = new latte.LatteEvent(this);
                }
                return this._titleChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>titleChanged</c> event
         */
        pageBase.prototype.onTitleChanged = function () {
            if (this._titleChanged) {
                this._titleChanged.raise();
            }
            this.onFieldValueChanged('title', this.title);
        };
        Object.defineProperty(pageBase.prototype, "description", {
            /**
             * Gets or sets the value of the description field of type varchar(255)
             */
            get: function () {
                return this._description;
            },
            /**
             * Gets or sets the value of the description field of type varchar(255)
             */
            set: function (value) {
                var changed = value !== this._description;
                this._description = value;
                if (changed) {
                    this.onDescriptionChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(pageBase.prototype, "descriptionChanged", {
            /**
             * Gets an event raised when the value of the description property changes
             */
            get: function () {
                if (!this._descriptionChanged) {
                    this._descriptionChanged = new latte.LatteEvent(this);
                }
                return this._descriptionChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>descriptionChanged</c> event
         */
        pageBase.prototype.onDescriptionChanged = function () {
            if (this._descriptionChanged) {
                this._descriptionChanged.raise();
            }
            this.onFieldValueChanged('description', this.description);
        };
        Object.defineProperty(pageBase.prototype, "order", {
            /**
             * Gets or sets the value of the order field of type int(11)
             */
            get: function () {
                return this._order;
            },
            /**
             * Gets or sets the value of the order field of type int(11)
             */
            set: function (value) {
                var changed = value !== this._order;
                this._order = value;
                if (changed) {
                    this.onOrderChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(pageBase.prototype, "orderChanged", {
            /**
             * Gets an event raised when the value of the order property changes
             */
            get: function () {
                if (!this._orderChanged) {
                    this._orderChanged = new latte.LatteEvent(this);
                }
                return this._orderChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>orderChanged</c> event
         */
        pageBase.prototype.onOrderChanged = function () {
            if (this._orderChanged) {
                this._orderChanged.raise();
            }
            this.onFieldValueChanged('order', this.order);
        };
        Object.defineProperty(pageBase.prototype, "sort", {
            /**
             * Gets or sets the value of the sort field of type varchar(20)
             */
            get: function () {
                return this._sort;
            },
            /**
             * Gets or sets the value of the sort field of type varchar(20)
             */
            set: function (value) {
                var changed = value !== this._sort;
                this._sort = value;
                if (changed) {
                    this.onSortChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(pageBase.prototype, "sortChanged", {
            /**
             * Gets an event raised when the value of the sort property changes
             */
            get: function () {
                if (!this._sortChanged) {
                    this._sortChanged = new latte.LatteEvent(this);
                }
                return this._sortChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>sortChanged</c> event
         */
        pageBase.prototype.onSortChanged = function () {
            if (this._sortChanged) {
                this._sortChanged.raise();
            }
            this.onFieldValueChanged('sort', this.sort);
        };
        Object.defineProperty(pageBase.prototype, "powner", {
            /**
             * Gets or sets the value of the powner field of type int(11)
             */
            get: function () {
                return this._powner;
            },
            /**
             * Gets or sets the value of the powner field of type int(11)
             */
            set: function (value) {
                var changed = value !== this._powner;
                this._powner = value;
                if (changed) {
                    this.onPownerChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(pageBase.prototype, "pownerChanged", {
            /**
             * Gets an event raised when the value of the powner property changes
             */
            get: function () {
                if (!this._pownerChanged) {
                    this._pownerChanged = new latte.LatteEvent(this);
                }
                return this._pownerChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>pownerChanged</c> event
         */
        pageBase.prototype.onPownerChanged = function () {
            if (this._pownerChanged) {
                this._pownerChanged.raise();
            }
            this.onFieldValueChanged('powner', this.powner);
        };
        Object.defineProperty(pageBase.prototype, "pgroup", {
            /**
             * Gets or sets the value of the pgroup field of type int(11)
             */
            get: function () {
                return this._pgroup;
            },
            /**
             * Gets or sets the value of the pgroup field of type int(11)
             */
            set: function (value) {
                var changed = value !== this._pgroup;
                this._pgroup = value;
                if (changed) {
                    this.onPgroupChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(pageBase.prototype, "pgroupChanged", {
            /**
             * Gets an event raised when the value of the pgroup property changes
             */
            get: function () {
                if (!this._pgroupChanged) {
                    this._pgroupChanged = new latte.LatteEvent(this);
                }
                return this._pgroupChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>pgroupChanged</c> event
         */
        pageBase.prototype.onPgroupChanged = function () {
            if (this._pgroupChanged) {
                this._pgroupChanged.raise();
            }
            this.onFieldValueChanged('pgroup', this.pgroup);
        };
        Object.defineProperty(pageBase.prototype, "pother", {
            /**
             * Gets or sets the value of the pother field of type int(11)
             */
            get: function () {
                return this._pother;
            },
            /**
             * Gets or sets the value of the pother field of type int(11)
             */
            set: function (value) {
                var changed = value !== this._pother;
                this._pother = value;
                if (changed) {
                    this.onPotherChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(pageBase.prototype, "potherChanged", {
            /**
             * Gets an event raised when the value of the pother property changes
             */
            get: function () {
                if (!this._potherChanged) {
                    this._potherChanged = new latte.LatteEvent(this);
                }
                return this._potherChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>potherChanged</c> event
         */
        pageBase.prototype.onPotherChanged = function () {
            if (this._potherChanged) {
                this._potherChanged.raise();
            }
            this.onFieldValueChanged('pother', this.pother);
        };
        Object.defineProperty(pageBase.prototype, "pworld", {
            /**
             * Gets or sets the value of the pworld field of type int(11)
             */
            get: function () {
                return this._pworld;
            },
            /**
             * Gets or sets the value of the pworld field of type int(11)
             */
            set: function (value) {
                var changed = value !== this._pworld;
                this._pworld = value;
                if (changed) {
                    this.onPworldChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(pageBase.prototype, "pworldChanged", {
            /**
             * Gets an event raised when the value of the pworld property changes
             */
            get: function () {
                if (!this._pworldChanged) {
                    this._pworldChanged = new latte.LatteEvent(this);
                }
                return this._pworldChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>pworldChanged</c> event
         */
        pageBase.prototype.onPworldChanged = function () {
            if (this._pworldChanged) {
                this._pworldChanged.raise();
            }
            this.onFieldValueChanged('pworld', this.pworld);
        };
        Object.defineProperty(pageBase.prototype, "flags", {
            /**
             * Gets or sets the value of the flags field of type int(11)
             */
            get: function () {
                return this._flags;
            },
            /**
             * Gets or sets the value of the flags field of type int(11)
             */
            set: function (value) {
                var changed = value !== this._flags;
                this._flags = value;
                if (changed) {
                    this.onFlagsChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(pageBase.prototype, "flagsChanged", {
            /**
             * Gets an event raised when the value of the flags property changes
             */
            get: function () {
                if (!this._flagsChanged) {
                    this._flagsChanged = new latte.LatteEvent(this);
                }
                return this._flagsChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>flagsChanged</c> event
         */
        pageBase.prototype.onFlagsChanged = function () {
            if (this._flagsChanged) {
                this._flagsChanged.raise();
            }
            this.onFieldValueChanged('flags', this.flags);
        };
        /**
        * Override. Gets data about the fields of the record.
        **/
        pageBase.prototype.onGetFields = function () { return { 'idpage': this.idpage, 'idparent': this.idparent, 'idgroup': this.idgroup, 'iduser': this.iduser, 'guid': this.guid, 'key': this.key, 'trash': this.trash, 'online': this.online, 'template': this.template, 'created': this.created, 'modified': this.modified, 'title': this.title, 'description': this.description, 'order': this.order, 'sort': this.sort, 'powner': this.powner, 'pgroup': this.pgroup, 'pother': this.pother, 'pworld': this.pworld, 'flags': this.flags }; };
        /*
         * Remote Method.

         */
        pageBase.rootPages = function () {
            return new latte.RemoteCall('fragment', 'Page', 'rootPages', {});
        };
        /*
         * Remote Method.
 Gets the configuration of the page


         */
        pageBase.prototype.getConfiguration = function () {
            return new latte.RemoteCall('fragment', 'Page', 'getConfiguration', {}, this.recordId);
        };
        /*
         * Remote Method.
 Saves the configuration of the page


         */
        pageBase.prototype.setConfiguration = function (json) {
            return new latte.RemoteCall('fragment', 'Page', 'setConfiguration', { json: json }, this.recordId);
        };
        /*
         * Remote Method.
 Returns the fragments of the page


         */
        pageBase.prototype.getFragments = function () {
            return new latte.RemoteCall('fragment', 'Page', 'getFragments', {}, this.recordId);
        };
        /*
         * Remote Method.
 Gets the child pages of the page.
 This method can be a little confuse because is a paginated result. Page parameter refers to pagination.


         */
        pageBase.prototype.getPages = function (page, options) {
            if (page === void 0) { page = 1; }
            if (options === void 0) { options = null; }
            return new latte.RemoteCall('fragment', 'Page', 'getPages', { page: page, options: options }, this.recordId);
        };
        /*
         * Remote Method.
 Gets the settings of the page, including the parent ones.

         */
        pageBase.prototype.getSettingsPack = function () {
            return new latte.RemoteCall('fragment', 'Page', 'getSettingsPack', {}, this.recordId);
        };
        /*
         * Remote Method.

         */
        pageBase.prototype.setOnline = function (online) {
            return new latte.RemoteCall('fragment', 'Page', 'setOnline', { online: online }, this.recordId);
        };
        return pageBase;
    }(latte.DataRecord));
    latte.pageBase = pageBase;
    var fileBase = (function (_super) {
        __extends(fileBase, _super);
        function fileBase() {
            _super.apply(this, arguments);
            /* Name of Php record */
            this._recordType = 'File';
            /* Name of Module where record lives */
            this._moduleName = 'fragment';
            /**
             * Database field: int(11)
             */
            this._idfile = null;
            /**
             * Database field: varchar(50)
             */
            this._guid = null;
            /**
             * Database field: int(11)
             */
            this._iduser = null;
            /**
             * Database field: int(11)
             */
            this._idowner = null;
            /**
             * Database field: int(11)
             */
            this._idparent = null;
            /**
             * Database field: varchar(50)
             */
            this._owner = null;
            /**
             * Database field: varchar(128)
             */
            this._name = null;
            /**
             * Database field: int(11)
             */
            this._size = null;
            /**
             * Database field: varchar(30)
             */
            this._bucket = null;
            /**
             * Database field: varchar(128)
             */
            this._path = null;
            /**
             * Database field: datetime
             */
            this._uploaded = null;
            /**
             * Database field: varchar(200)
             */
            this._description = null;
            /**
             * Database field: int(11)
             */
            this._width = null;
            /**
             * Database field: int(11)
             */
            this._height = null;
            /**
             * Database field: varchar(50)
             */
            this._key = null;
        }
        Object.defineProperty(fileBase.prototype, "idfile", {
            /**
             * Gets or sets the value of the idfile field of type int(11)
             */
            get: function () {
                return this._idfile;
            },
            /**
             * Gets or sets the value of the idfile field of type int(11)
             */
            set: function (value) {
                var changed = value !== this._idfile;
                this._idfile = value;
                if (changed) {
                    this.onIdfileChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(fileBase.prototype, "idfileChanged", {
            /**
             * Gets an event raised when the value of the idfile property changes
             */
            get: function () {
                if (!this._idfileChanged) {
                    this._idfileChanged = new latte.LatteEvent(this);
                }
                return this._idfileChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>idfileChanged</c> event
         */
        fileBase.prototype.onIdfileChanged = function () {
            if (this._idfileChanged) {
                this._idfileChanged.raise();
            }
            this.onFieldValueChanged('idfile', this.idfile);
        };
        /**
        * Gets the name of the autoincrement field
        **/
        fileBase.prototype.onGetRecordIdName = function () { return 'idfile'; };
        Object.defineProperty(fileBase.prototype, "guid", {
            /**
             * Gets or sets the value of the guid field of type varchar(50)
             */
            get: function () {
                return this._guid;
            },
            /**
             * Gets or sets the value of the guid field of type varchar(50)
             */
            set: function (value) {
                var changed = value !== this._guid;
                this._guid = value;
                if (changed) {
                    this.onGuidChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(fileBase.prototype, "guidChanged", {
            /**
             * Gets an event raised when the value of the guid property changes
             */
            get: function () {
                if (!this._guidChanged) {
                    this._guidChanged = new latte.LatteEvent(this);
                }
                return this._guidChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>guidChanged</c> event
         */
        fileBase.prototype.onGuidChanged = function () {
            if (this._guidChanged) {
                this._guidChanged.raise();
            }
            this.onFieldValueChanged('guid', this.guid);
        };
        Object.defineProperty(fileBase.prototype, "iduser", {
            /**
             * Gets or sets the value of the iduser field of type int(11)
             */
            get: function () {
                return this._iduser;
            },
            /**
             * Gets or sets the value of the iduser field of type int(11)
             */
            set: function (value) {
                var changed = value !== this._iduser;
                this._iduser = value;
                if (changed) {
                    this.onIduserChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(fileBase.prototype, "iduserChanged", {
            /**
             * Gets an event raised when the value of the iduser property changes
             */
            get: function () {
                if (!this._iduserChanged) {
                    this._iduserChanged = new latte.LatteEvent(this);
                }
                return this._iduserChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>iduserChanged</c> event
         */
        fileBase.prototype.onIduserChanged = function () {
            if (this._iduserChanged) {
                this._iduserChanged.raise();
            }
            this.onFieldValueChanged('iduser', this.iduser);
        };
        Object.defineProperty(fileBase.prototype, "idowner", {
            /**
             * Gets or sets the value of the idowner field of type int(11)
             */
            get: function () {
                return this._idowner;
            },
            /**
             * Gets or sets the value of the idowner field of type int(11)
             */
            set: function (value) {
                var changed = value !== this._idowner;
                this._idowner = value;
                if (changed) {
                    this.onIdownerChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(fileBase.prototype, "idownerChanged", {
            /**
             * Gets an event raised when the value of the idowner property changes
             */
            get: function () {
                if (!this._idownerChanged) {
                    this._idownerChanged = new latte.LatteEvent(this);
                }
                return this._idownerChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>idownerChanged</c> event
         */
        fileBase.prototype.onIdownerChanged = function () {
            if (this._idownerChanged) {
                this._idownerChanged.raise();
            }
            this.onFieldValueChanged('idowner', this.idowner);
        };
        Object.defineProperty(fileBase.prototype, "idparent", {
            /**
             * Gets or sets the value of the idparent field of type int(11)
             */
            get: function () {
                return this._idparent;
            },
            /**
             * Gets or sets the value of the idparent field of type int(11)
             */
            set: function (value) {
                var changed = value !== this._idparent;
                this._idparent = value;
                if (changed) {
                    this.onIdparentChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(fileBase.prototype, "idparentChanged", {
            /**
             * Gets an event raised when the value of the idparent property changes
             */
            get: function () {
                if (!this._idparentChanged) {
                    this._idparentChanged = new latte.LatteEvent(this);
                }
                return this._idparentChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>idparentChanged</c> event
         */
        fileBase.prototype.onIdparentChanged = function () {
            if (this._idparentChanged) {
                this._idparentChanged.raise();
            }
            this.onFieldValueChanged('idparent', this.idparent);
        };
        Object.defineProperty(fileBase.prototype, "owner", {
            /**
             * Gets or sets the value of the owner field of type varchar(50)
             */
            get: function () {
                return this._owner;
            },
            /**
             * Gets or sets the value of the owner field of type varchar(50)
             */
            set: function (value) {
                var changed = value !== this._owner;
                this._owner = value;
                if (changed) {
                    this.onOwnerChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(fileBase.prototype, "ownerChanged", {
            /**
             * Gets an event raised when the value of the owner property changes
             */
            get: function () {
                if (!this._ownerChanged) {
                    this._ownerChanged = new latte.LatteEvent(this);
                }
                return this._ownerChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>ownerChanged</c> event
         */
        fileBase.prototype.onOwnerChanged = function () {
            if (this._ownerChanged) {
                this._ownerChanged.raise();
            }
            this.onFieldValueChanged('owner', this.owner);
        };
        Object.defineProperty(fileBase.prototype, "name", {
            /**
             * Gets or sets the value of the name field of type varchar(128)
             */
            get: function () {
                return this._name;
            },
            /**
             * Gets or sets the value of the name field of type varchar(128)
             */
            set: function (value) {
                var changed = value !== this._name;
                this._name = value;
                if (changed) {
                    this.onNameChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(fileBase.prototype, "nameChanged", {
            /**
             * Gets an event raised when the value of the name property changes
             */
            get: function () {
                if (!this._nameChanged) {
                    this._nameChanged = new latte.LatteEvent(this);
                }
                return this._nameChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>nameChanged</c> event
         */
        fileBase.prototype.onNameChanged = function () {
            if (this._nameChanged) {
                this._nameChanged.raise();
            }
            this.onFieldValueChanged('name', this.name);
        };
        Object.defineProperty(fileBase.prototype, "size", {
            /**
             * Gets or sets the value of the size field of type int(11)
             */
            get: function () {
                return this._size;
            },
            /**
             * Gets or sets the value of the size field of type int(11)
             */
            set: function (value) {
                var changed = value !== this._size;
                this._size = value;
                if (changed) {
                    this.onSizeChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(fileBase.prototype, "sizeChanged", {
            /**
             * Gets an event raised when the value of the size property changes
             */
            get: function () {
                if (!this._sizeChanged) {
                    this._sizeChanged = new latte.LatteEvent(this);
                }
                return this._sizeChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>sizeChanged</c> event
         */
        fileBase.prototype.onSizeChanged = function () {
            if (this._sizeChanged) {
                this._sizeChanged.raise();
            }
            this.onFieldValueChanged('size', this.size);
        };
        Object.defineProperty(fileBase.prototype, "bucket", {
            /**
             * Gets or sets the value of the bucket field of type varchar(30)
             */
            get: function () {
                return this._bucket;
            },
            /**
             * Gets or sets the value of the bucket field of type varchar(30)
             */
            set: function (value) {
                var changed = value !== this._bucket;
                this._bucket = value;
                if (changed) {
                    this.onBucketChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(fileBase.prototype, "bucketChanged", {
            /**
             * Gets an event raised when the value of the bucket property changes
             */
            get: function () {
                if (!this._bucketChanged) {
                    this._bucketChanged = new latte.LatteEvent(this);
                }
                return this._bucketChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>bucketChanged</c> event
         */
        fileBase.prototype.onBucketChanged = function () {
            if (this._bucketChanged) {
                this._bucketChanged.raise();
            }
            this.onFieldValueChanged('bucket', this.bucket);
        };
        Object.defineProperty(fileBase.prototype, "path", {
            /**
             * Gets or sets the value of the path field of type varchar(128)
             */
            get: function () {
                return this._path;
            },
            /**
             * Gets or sets the value of the path field of type varchar(128)
             */
            set: function (value) {
                var changed = value !== this._path;
                this._path = value;
                if (changed) {
                    this.onPathChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(fileBase.prototype, "pathChanged", {
            /**
             * Gets an event raised when the value of the path property changes
             */
            get: function () {
                if (!this._pathChanged) {
                    this._pathChanged = new latte.LatteEvent(this);
                }
                return this._pathChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>pathChanged</c> event
         */
        fileBase.prototype.onPathChanged = function () {
            if (this._pathChanged) {
                this._pathChanged.raise();
            }
            this.onFieldValueChanged('path', this.path);
        };
        Object.defineProperty(fileBase.prototype, "uploaded", {
            /**
             * Gets or sets the value of the uploaded field of type datetime
             */
            get: function () {
                return this._uploaded;
            },
            /**
             * Gets or sets the value of the uploaded field of type datetime
             */
            set: function (value) {
                var changed = value !== this._uploaded;
                this._uploaded = value;
                if (changed) {
                    this.onUploadedChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(fileBase.prototype, "uploadedChanged", {
            /**
             * Gets an event raised when the value of the uploaded property changes
             */
            get: function () {
                if (!this._uploadedChanged) {
                    this._uploadedChanged = new latte.LatteEvent(this);
                }
                return this._uploadedChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>uploadedChanged</c> event
         */
        fileBase.prototype.onUploadedChanged = function () {
            if (this._uploadedChanged) {
                this._uploadedChanged.raise();
            }
            this.onFieldValueChanged('uploaded', this.uploaded);
        };
        Object.defineProperty(fileBase.prototype, "description", {
            /**
             * Gets or sets the value of the description field of type varchar(200)
             */
            get: function () {
                return this._description;
            },
            /**
             * Gets or sets the value of the description field of type varchar(200)
             */
            set: function (value) {
                var changed = value !== this._description;
                this._description = value;
                if (changed) {
                    this.onDescriptionChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(fileBase.prototype, "descriptionChanged", {
            /**
             * Gets an event raised when the value of the description property changes
             */
            get: function () {
                if (!this._descriptionChanged) {
                    this._descriptionChanged = new latte.LatteEvent(this);
                }
                return this._descriptionChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>descriptionChanged</c> event
         */
        fileBase.prototype.onDescriptionChanged = function () {
            if (this._descriptionChanged) {
                this._descriptionChanged.raise();
            }
            this.onFieldValueChanged('description', this.description);
        };
        Object.defineProperty(fileBase.prototype, "width", {
            /**
             * Gets or sets the value of the width field of type int(11)
             */
            get: function () {
                return this._width;
            },
            /**
             * Gets or sets the value of the width field of type int(11)
             */
            set: function (value) {
                var changed = value !== this._width;
                this._width = value;
                if (changed) {
                    this.onWidthChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(fileBase.prototype, "widthChanged", {
            /**
             * Gets an event raised when the value of the width property changes
             */
            get: function () {
                if (!this._widthChanged) {
                    this._widthChanged = new latte.LatteEvent(this);
                }
                return this._widthChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>widthChanged</c> event
         */
        fileBase.prototype.onWidthChanged = function () {
            if (this._widthChanged) {
                this._widthChanged.raise();
            }
            this.onFieldValueChanged('width', this.width);
        };
        Object.defineProperty(fileBase.prototype, "height", {
            /**
             * Gets or sets the value of the height field of type int(11)
             */
            get: function () {
                return this._height;
            },
            /**
             * Gets or sets the value of the height field of type int(11)
             */
            set: function (value) {
                var changed = value !== this._height;
                this._height = value;
                if (changed) {
                    this.onHeightChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(fileBase.prototype, "heightChanged", {
            /**
             * Gets an event raised when the value of the height property changes
             */
            get: function () {
                if (!this._heightChanged) {
                    this._heightChanged = new latte.LatteEvent(this);
                }
                return this._heightChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>heightChanged</c> event
         */
        fileBase.prototype.onHeightChanged = function () {
            if (this._heightChanged) {
                this._heightChanged.raise();
            }
            this.onFieldValueChanged('height', this.height);
        };
        Object.defineProperty(fileBase.prototype, "key", {
            /**
             * Gets or sets the value of the key field of type varchar(50)
             */
            get: function () {
                return this._key;
            },
            /**
             * Gets or sets the value of the key field of type varchar(50)
             */
            set: function (value) {
                var changed = value !== this._key;
                this._key = value;
                if (changed) {
                    this.onKeyChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(fileBase.prototype, "keyChanged", {
            /**
             * Gets an event raised when the value of the key property changes
             */
            get: function () {
                if (!this._keyChanged) {
                    this._keyChanged = new latte.LatteEvent(this);
                }
                return this._keyChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>keyChanged</c> event
         */
        fileBase.prototype.onKeyChanged = function () {
            if (this._keyChanged) {
                this._keyChanged.raise();
            }
            this.onFieldValueChanged('key', this.key);
        };
        /**
        * Override. Gets data about the fields of the record.
        **/
        fileBase.prototype.onGetFields = function () { return { 'idfile': this.idfile, 'guid': this.guid, 'iduser': this.iduser, 'idowner': this.idowner, 'idparent': this.idparent, 'owner': this.owner, 'name': this.name, 'size': this.size, 'bucket': this.bucket, 'path': this.path, 'uploaded': this.uploaded, 'description': this.description, 'width': this.width, 'height': this.height, 'key': this.key }; };
        /*
         * Remote Method.
 Retrieves a list of files by searching by the specified, comma separated guids


         */
        fileBase.byGuids = function (guids) {
            return new latte.RemoteCall('fragment', 'File', 'byGuids', { guids: guids });
        };
        /*
         * Remote Method.
 Gets the files of the specified records.  Files contains all children.


         */
        fileBase.byOwner = function (name, id) {
            return new latte.RemoteCall('fragment', 'File', 'byOwner', { name: name, id: id });
        };
        /*
         * Remote Method.
 Gets an array unlinked File objects inserted by the logged user.


         */
        fileBase.myUnlinked = function (ownerName) {
            return new latte.RemoteCall('fragment', 'File', 'myUnlinked', { ownerName: ownerName });
        };
        /*
         * Remote Method.

         */
        fileBase.changeNameDescription = function (idfile, name, description) {
            return new latte.RemoteCall('fragment', 'File', 'changeNameDescription', { idfile: idfile, name: name, description: description });
        };
        /*
         * Remote Method.
 Removes the registry of file and its contents from S3.


         */
        fileBase.prototype.physicalRemove = function () {
            return new latte.RemoteCall('fragment', 'File', 'physicalRemove', {}, this.recordId);
        };
        return fileBase;
    }(latte.DataRecord));
    latte.fileBase = fileBase;
    var settingBase = (function (_super) {
        __extends(settingBase, _super);
        function settingBase() {
            _super.apply(this, arguments);
            /* Name of Php record */
            this._recordType = 'Setting';
            /* Name of Module where record lives */
            this._moduleName = 'fragment';
            /**
             * Database field: int(11)
             */
            this._idsetting = null;
            /**
             * Database field: int(11)
             */
            this._idowner = null;
            /**
             * Database field: varchar(50)
             */
            this._owner = null;
            /**
             * Database field: varchar(255)
             */
            this._name = null;
            /**
             * Database field: longtext
             */
            this._value = null;
        }
        Object.defineProperty(settingBase.prototype, "idsetting", {
            /**
             * Gets or sets the value of the idsetting field of type int(11)
             */
            get: function () {
                return this._idsetting;
            },
            /**
             * Gets or sets the value of the idsetting field of type int(11)
             */
            set: function (value) {
                var changed = value !== this._idsetting;
                this._idsetting = value;
                if (changed) {
                    this.onIdsettingChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(settingBase.prototype, "idsettingChanged", {
            /**
             * Gets an event raised when the value of the idsetting property changes
             */
            get: function () {
                if (!this._idsettingChanged) {
                    this._idsettingChanged = new latte.LatteEvent(this);
                }
                return this._idsettingChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>idsettingChanged</c> event
         */
        settingBase.prototype.onIdsettingChanged = function () {
            if (this._idsettingChanged) {
                this._idsettingChanged.raise();
            }
            this.onFieldValueChanged('idsetting', this.idsetting);
        };
        /**
        * Gets the name of the autoincrement field
        **/
        settingBase.prototype.onGetRecordIdName = function () { return 'idsetting'; };
        Object.defineProperty(settingBase.prototype, "idowner", {
            /**
             * Gets or sets the value of the idowner field of type int(11)
             */
            get: function () {
                return this._idowner;
            },
            /**
             * Gets or sets the value of the idowner field of type int(11)
             */
            set: function (value) {
                var changed = value !== this._idowner;
                this._idowner = value;
                if (changed) {
                    this.onIdownerChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(settingBase.prototype, "idownerChanged", {
            /**
             * Gets an event raised when the value of the idowner property changes
             */
            get: function () {
                if (!this._idownerChanged) {
                    this._idownerChanged = new latte.LatteEvent(this);
                }
                return this._idownerChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>idownerChanged</c> event
         */
        settingBase.prototype.onIdownerChanged = function () {
            if (this._idownerChanged) {
                this._idownerChanged.raise();
            }
            this.onFieldValueChanged('idowner', this.idowner);
        };
        Object.defineProperty(settingBase.prototype, "owner", {
            /**
             * Gets or sets the value of the owner field of type varchar(50)
             */
            get: function () {
                return this._owner;
            },
            /**
             * Gets or sets the value of the owner field of type varchar(50)
             */
            set: function (value) {
                var changed = value !== this._owner;
                this._owner = value;
                if (changed) {
                    this.onOwnerChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(settingBase.prototype, "ownerChanged", {
            /**
             * Gets an event raised when the value of the owner property changes
             */
            get: function () {
                if (!this._ownerChanged) {
                    this._ownerChanged = new latte.LatteEvent(this);
                }
                return this._ownerChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>ownerChanged</c> event
         */
        settingBase.prototype.onOwnerChanged = function () {
            if (this._ownerChanged) {
                this._ownerChanged.raise();
            }
            this.onFieldValueChanged('owner', this.owner);
        };
        Object.defineProperty(settingBase.prototype, "name", {
            /**
             * Gets or sets the value of the name field of type varchar(255)
             */
            get: function () {
                return this._name;
            },
            /**
             * Gets or sets the value of the name field of type varchar(255)
             */
            set: function (value) {
                var changed = value !== this._name;
                this._name = value;
                if (changed) {
                    this.onNameChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(settingBase.prototype, "nameChanged", {
            /**
             * Gets an event raised when the value of the name property changes
             */
            get: function () {
                if (!this._nameChanged) {
                    this._nameChanged = new latte.LatteEvent(this);
                }
                return this._nameChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>nameChanged</c> event
         */
        settingBase.prototype.onNameChanged = function () {
            if (this._nameChanged) {
                this._nameChanged.raise();
            }
            this.onFieldValueChanged('name', this.name);
        };
        Object.defineProperty(settingBase.prototype, "value", {
            /**
             * Gets or sets the value of the value field of type longtext
             */
            get: function () {
                return this._value;
            },
            /**
             * Gets or sets the value of the value field of type longtext
             */
            set: function (value) {
                var changed = value !== this._value;
                this._value = value;
                if (changed) {
                    this.onValueChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(settingBase.prototype, "valueChanged", {
            /**
             * Gets an event raised when the value of the value property changes
             */
            get: function () {
                if (!this._valueChanged) {
                    this._valueChanged = new latte.LatteEvent(this);
                }
                return this._valueChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>valueChanged</c> event
         */
        settingBase.prototype.onValueChanged = function () {
            if (this._valueChanged) {
                this._valueChanged.raise();
            }
            this.onFieldValueChanged('value', this.value);
        };
        /**
        * Override. Gets data about the fields of the record.
        **/
        settingBase.prototype.onGetFields = function () { return { 'idsetting': this.idsetting, 'idowner': this.idowner, 'owner': this.owner, 'name': this.name, 'value': this.value }; };
        /*
         * Remote Method.
 Gets the global settings of the app


         */
        settingBase.getGlobal = function () {
            return new latte.RemoteCall('fragment', 'Setting', 'getGlobal', {});
        };
        return settingBase;
    }(latte.DataRecord));
    latte.settingBase = settingBase;
    var fragmentBase = (function (_super) {
        __extends(fragmentBase, _super);
        function fragmentBase() {
            _super.apply(this, arguments);
            /* Name of Php record */
            this._recordType = 'Fragment';
            /* Name of Module where record lives */
            this._moduleName = 'fragment';
            /**
             * Database field: int(11)
             */
            this._idfragment = null;
            /**
             * Database field: int(11)
             */
            this._idpage = null;
            /**
             * Database field: longtext
             */
            this._value = null;
            /**
             * Database field: varchar(50)
             */
            this._name = null;
        }
        Object.defineProperty(fragmentBase.prototype, "idfragment", {
            /**
             * Gets or sets the value of the idfragment field of type int(11)
             */
            get: function () {
                return this._idfragment;
            },
            /**
             * Gets or sets the value of the idfragment field of type int(11)
             */
            set: function (value) {
                var changed = value !== this._idfragment;
                this._idfragment = value;
                if (changed) {
                    this.onIdfragmentChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(fragmentBase.prototype, "idfragmentChanged", {
            /**
             * Gets an event raised when the value of the idfragment property changes
             */
            get: function () {
                if (!this._idfragmentChanged) {
                    this._idfragmentChanged = new latte.LatteEvent(this);
                }
                return this._idfragmentChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>idfragmentChanged</c> event
         */
        fragmentBase.prototype.onIdfragmentChanged = function () {
            if (this._idfragmentChanged) {
                this._idfragmentChanged.raise();
            }
            this.onFieldValueChanged('idfragment', this.idfragment);
        };
        /**
        * Gets the name of the autoincrement field
        **/
        fragmentBase.prototype.onGetRecordIdName = function () { return 'idfragment'; };
        Object.defineProperty(fragmentBase.prototype, "idpage", {
            /**
             * Gets or sets the value of the idpage field of type int(11)
             */
            get: function () {
                return this._idpage;
            },
            /**
             * Gets or sets the value of the idpage field of type int(11)
             */
            set: function (value) {
                var changed = value !== this._idpage;
                this._idpage = value;
                if (changed) {
                    this.onIdpageChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(fragmentBase.prototype, "idpageChanged", {
            /**
             * Gets an event raised when the value of the idpage property changes
             */
            get: function () {
                if (!this._idpageChanged) {
                    this._idpageChanged = new latte.LatteEvent(this);
                }
                return this._idpageChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>idpageChanged</c> event
         */
        fragmentBase.prototype.onIdpageChanged = function () {
            if (this._idpageChanged) {
                this._idpageChanged.raise();
            }
            this.onFieldValueChanged('idpage', this.idpage);
        };
        Object.defineProperty(fragmentBase.prototype, "value", {
            /**
             * Gets or sets the value of the value field of type longtext
             */
            get: function () {
                return this._value;
            },
            /**
             * Gets or sets the value of the value field of type longtext
             */
            set: function (value) {
                var changed = value !== this._value;
                this._value = value;
                if (changed) {
                    this.onValueChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(fragmentBase.prototype, "valueChanged", {
            /**
             * Gets an event raised when the value of the value property changes
             */
            get: function () {
                if (!this._valueChanged) {
                    this._valueChanged = new latte.LatteEvent(this);
                }
                return this._valueChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>valueChanged</c> event
         */
        fragmentBase.prototype.onValueChanged = function () {
            if (this._valueChanged) {
                this._valueChanged.raise();
            }
            this.onFieldValueChanged('value', this.value);
        };
        Object.defineProperty(fragmentBase.prototype, "name", {
            /**
             * Gets or sets the value of the name field of type varchar(50)
             */
            get: function () {
                return this._name;
            },
            /**
             * Gets or sets the value of the name field of type varchar(50)
             */
            set: function (value) {
                var changed = value !== this._name;
                this._name = value;
                if (changed) {
                    this.onNameChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(fragmentBase.prototype, "nameChanged", {
            /**
             * Gets an event raised when the value of the name property changes
             */
            get: function () {
                if (!this._nameChanged) {
                    this._nameChanged = new latte.LatteEvent(this);
                }
                return this._nameChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>nameChanged</c> event
         */
        fragmentBase.prototype.onNameChanged = function () {
            if (this._nameChanged) {
                this._nameChanged.raise();
            }
            this.onFieldValueChanged('name', this.name);
        };
        /**
        * Override. Gets data about the fields of the record.
        **/
        fragmentBase.prototype.onGetFields = function () { return { 'idfragment': this.idfragment, 'idpage': this.idpage, 'value': this.value, 'name': this.name }; };
        return fragmentBase;
    }(latte.DataRecord));
    latte.fragmentBase = fragmentBase;
    var groupBase = (function (_super) {
        __extends(groupBase, _super);
        function groupBase() {
            _super.apply(this, arguments);
            /* Name of Php record */
            this._recordType = 'Group';
            /* Name of Module where record lives */
            this._moduleName = 'fragment';
            /**
             * Database field: int(11)
             */
            this._idgroup = null;
            /**
             * Database field: varchar(128)
             */
            this._name = null;
        }
        Object.defineProperty(groupBase.prototype, "idgroup", {
            /**
             * Gets or sets the value of the idgroup field of type int(11)
             */
            get: function () {
                return this._idgroup;
            },
            /**
             * Gets or sets the value of the idgroup field of type int(11)
             */
            set: function (value) {
                var changed = value !== this._idgroup;
                this._idgroup = value;
                if (changed) {
                    this.onIdgroupChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(groupBase.prototype, "idgroupChanged", {
            /**
             * Gets an event raised when the value of the idgroup property changes
             */
            get: function () {
                if (!this._idgroupChanged) {
                    this._idgroupChanged = new latte.LatteEvent(this);
                }
                return this._idgroupChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>idgroupChanged</c> event
         */
        groupBase.prototype.onIdgroupChanged = function () {
            if (this._idgroupChanged) {
                this._idgroupChanged.raise();
            }
            this.onFieldValueChanged('idgroup', this.idgroup);
        };
        /**
        * Gets the name of the autoincrement field
        **/
        groupBase.prototype.onGetRecordIdName = function () { return 'idgroup'; };
        Object.defineProperty(groupBase.prototype, "name", {
            /**
             * Gets or sets the value of the name field of type varchar(128)
             */
            get: function () {
                return this._name;
            },
            /**
             * Gets or sets the value of the name field of type varchar(128)
             */
            set: function (value) {
                var changed = value !== this._name;
                this._name = value;
                if (changed) {
                    this.onNameChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(groupBase.prototype, "nameChanged", {
            /**
             * Gets an event raised when the value of the name property changes
             */
            get: function () {
                if (!this._nameChanged) {
                    this._nameChanged = new latte.LatteEvent(this);
                }
                return this._nameChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>nameChanged</c> event
         */
        groupBase.prototype.onNameChanged = function () {
            if (this._nameChanged) {
                this._nameChanged.raise();
            }
            this.onFieldValueChanged('name', this.name);
        };
        /**
        * Override. Gets data about the fields of the record.
        **/
        groupBase.prototype.onGetFields = function () { return { 'idgroup': this.idgroup, 'name': this.name }; };
        /*
         * Remote Method.


         */
        groupBase.catalog = function () {
            return new latte.RemoteCall('fragment', 'Group', 'catalog', {});
        };
        /*
         * Remote Method.

         */
        groupBase.search = function (text) {
            return new latte.RemoteCall('fragment', 'Group', 'search', { text: text });
        };
        return groupBase;
    }(latte.DataRecord));
    latte.groupBase = groupBase;
    var groupUserBase = (function (_super) {
        __extends(groupUserBase, _super);
        function groupUserBase() {
            _super.apply(this, arguments);
            /* Name of Php record */
            this._recordType = 'GroupUser';
            /* Name of Module where record lives */
            this._moduleName = 'fragment';
            /**
             * Database field: int(11)
             */
            this._idgroupuser = null;
            /**
             * Database field: int(11)
             */
            this._idgroup = null;
            /**
             * Database field: int(11)
             */
            this._iduser = null;
        }
        Object.defineProperty(groupUserBase.prototype, "idgroupuser", {
            /**
             * Gets or sets the value of the idgroupuser field of type int(11)
             */
            get: function () {
                return this._idgroupuser;
            },
            /**
             * Gets or sets the value of the idgroupuser field of type int(11)
             */
            set: function (value) {
                var changed = value !== this._idgroupuser;
                this._idgroupuser = value;
                if (changed) {
                    this.onIdgroupuserChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(groupUserBase.prototype, "idgroupuserChanged", {
            /**
             * Gets an event raised when the value of the idgroupuser property changes
             */
            get: function () {
                if (!this._idgroupuserChanged) {
                    this._idgroupuserChanged = new latte.LatteEvent(this);
                }
                return this._idgroupuserChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>idgroupuserChanged</c> event
         */
        groupUserBase.prototype.onIdgroupuserChanged = function () {
            if (this._idgroupuserChanged) {
                this._idgroupuserChanged.raise();
            }
            this.onFieldValueChanged('idgroupuser', this.idgroupuser);
        };
        /**
        * Gets the name of the autoincrement field
        **/
        groupUserBase.prototype.onGetRecordIdName = function () { return 'idgroupuser'; };
        Object.defineProperty(groupUserBase.prototype, "idgroup", {
            /**
             * Gets or sets the value of the idgroup field of type int(11)
             */
            get: function () {
                return this._idgroup;
            },
            /**
             * Gets or sets the value of the idgroup field of type int(11)
             */
            set: function (value) {
                var changed = value !== this._idgroup;
                this._idgroup = value;
                if (changed) {
                    this.onIdgroupChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(groupUserBase.prototype, "idgroupChanged", {
            /**
             * Gets an event raised when the value of the idgroup property changes
             */
            get: function () {
                if (!this._idgroupChanged) {
                    this._idgroupChanged = new latte.LatteEvent(this);
                }
                return this._idgroupChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>idgroupChanged</c> event
         */
        groupUserBase.prototype.onIdgroupChanged = function () {
            if (this._idgroupChanged) {
                this._idgroupChanged.raise();
            }
            this.onFieldValueChanged('idgroup', this.idgroup);
        };
        Object.defineProperty(groupUserBase.prototype, "iduser", {
            /**
             * Gets or sets the value of the iduser field of type int(11)
             */
            get: function () {
                return this._iduser;
            },
            /**
             * Gets or sets the value of the iduser field of type int(11)
             */
            set: function (value) {
                var changed = value !== this._iduser;
                this._iduser = value;
                if (changed) {
                    this.onIduserChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(groupUserBase.prototype, "iduserChanged", {
            /**
             * Gets an event raised when the value of the iduser property changes
             */
            get: function () {
                if (!this._iduserChanged) {
                    this._iduserChanged = new latte.LatteEvent(this);
                }
                return this._iduserChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>iduserChanged</c> event
         */
        groupUserBase.prototype.onIduserChanged = function () {
            if (this._iduserChanged) {
                this._iduserChanged.raise();
            }
            this.onFieldValueChanged('iduser', this.iduser);
        };
        /**
        * Override. Gets data about the fields of the record.
        **/
        groupUserBase.prototype.onGetFields = function () { return { 'idgroupuser': this.idgroupuser, 'idgroup': this.idgroup, 'iduser': this.iduser }; };
        /*
         * Remote Method.

         */
        groupUserBase.byGroup = function (idgroup) {
            return new latte.RemoteCall('fragment', 'GroupUser', 'byGroup', { idgroup: idgroup });
        };
        return groupUserBase;
    }(latte.DataRecord));
    latte.groupUserBase = groupUserBase;
    var userBase = (function (_super) {
        __extends(userBase, _super);
        function userBase() {
            _super.apply(this, arguments);
            /* Name of Php record */
            this._recordType = 'User';
            /* Name of Module where record lives */
            this._moduleName = 'fragment';
            /**
             * Database field: int(11)
             */
            this._iduser = null;
            /**
             * Database field: varchar(128)
             */
            this._uname = null;
            /**
             * Database field: varchar(128)
             */
            this._password = null;
            /**
             * Database field: varchar(128)
             */
            this._flags = null;
        }
        Object.defineProperty(userBase.prototype, "iduser", {
            /**
             * Gets or sets the value of the iduser field of type int(11)
             */
            get: function () {
                return this._iduser;
            },
            /**
             * Gets or sets the value of the iduser field of type int(11)
             */
            set: function (value) {
                var changed = value !== this._iduser;
                this._iduser = value;
                if (changed) {
                    this.onIduserChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(userBase.prototype, "iduserChanged", {
            /**
             * Gets an event raised when the value of the iduser property changes
             */
            get: function () {
                if (!this._iduserChanged) {
                    this._iduserChanged = new latte.LatteEvent(this);
                }
                return this._iduserChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>iduserChanged</c> event
         */
        userBase.prototype.onIduserChanged = function () {
            if (this._iduserChanged) {
                this._iduserChanged.raise();
            }
            this.onFieldValueChanged('iduser', this.iduser);
        };
        /**
        * Gets the name of the autoincrement field
        **/
        userBase.prototype.onGetRecordIdName = function () { return 'iduser'; };
        Object.defineProperty(userBase.prototype, "uname", {
            /**
             * Gets or sets the value of the uname field of type varchar(128)
             */
            get: function () {
                return this._uname;
            },
            /**
             * Gets or sets the value of the uname field of type varchar(128)
             */
            set: function (value) {
                var changed = value !== this._uname;
                this._uname = value;
                if (changed) {
                    this.onUnameChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(userBase.prototype, "unameChanged", {
            /**
             * Gets an event raised when the value of the uname property changes
             */
            get: function () {
                if (!this._unameChanged) {
                    this._unameChanged = new latte.LatteEvent(this);
                }
                return this._unameChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>unameChanged</c> event
         */
        userBase.prototype.onUnameChanged = function () {
            if (this._unameChanged) {
                this._unameChanged.raise();
            }
            this.onFieldValueChanged('uname', this.uname);
        };
        Object.defineProperty(userBase.prototype, "password", {
            /**
             * Gets or sets the value of the password field of type varchar(128)
             */
            get: function () {
                return this._password;
            },
            /**
             * Gets or sets the value of the password field of type varchar(128)
             */
            set: function (value) {
                var changed = value !== this._password;
                this._password = value;
                if (changed) {
                    this.onPasswordChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(userBase.prototype, "passwordChanged", {
            /**
             * Gets an event raised when the value of the password property changes
             */
            get: function () {
                if (!this._passwordChanged) {
                    this._passwordChanged = new latte.LatteEvent(this);
                }
                return this._passwordChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>passwordChanged</c> event
         */
        userBase.prototype.onPasswordChanged = function () {
            if (this._passwordChanged) {
                this._passwordChanged.raise();
            }
            this.onFieldValueChanged('password', this.password);
        };
        Object.defineProperty(userBase.prototype, "flags", {
            /**
             * Gets or sets the value of the flags field of type varchar(128)
             */
            get: function () {
                return this._flags;
            },
            /**
             * Gets or sets the value of the flags field of type varchar(128)
             */
            set: function (value) {
                var changed = value !== this._flags;
                this._flags = value;
                if (changed) {
                    this.onFlagsChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(userBase.prototype, "flagsChanged", {
            /**
             * Gets an event raised when the value of the flags property changes
             */
            get: function () {
                if (!this._flagsChanged) {
                    this._flagsChanged = new latte.LatteEvent(this);
                }
                return this._flagsChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>flagsChanged</c> event
         */
        userBase.prototype.onFlagsChanged = function () {
            if (this._flagsChanged) {
                this._flagsChanged.raise();
            }
            this.onFieldValueChanged('flags', this.flags);
        };
        /**
        * Override. Gets data about the fields of the record.
        **/
        userBase.prototype.onGetFields = function () { return { 'iduser': this.iduser, 'uname': this.uname, 'password': this.password, 'flags': this.flags }; };
        /*
         * Remote Method.

         */
        userBase.search = function (text) {
            return new latte.RemoteCall('fragment', 'User', 'search', { text: text });
        };
        /*
         * Remote Method.

         */
        userBase.catalog = function () {
            return new latte.RemoteCall('fragment', 'User', 'catalog', {});
        };
        /*
         * Remote Method.

         */
        userBase.prototype.changePassword = function (oldPassword, password) {
            return new latte.RemoteCall('fragment', 'User', 'changePassword', { oldPassword: oldPassword, password: password }, this.recordId);
        };
        /*
         * Remote Method.

         */
        userBase.prototype.passwordCorrect = function (password) {
            return new latte.RemoteCall('fragment', 'User', 'passwordCorrect', { password: password }, this.recordId);
        };
        return userBase;
    }(latte.DataRecord));
    latte.userBase = userBase;
    /*
     *
Created by PhpStorm.
User: josemanuel
Date: 8/1/16
Time: 21:34

     */
    var Session = (function () {
        function Session() {
        }
        /*
         * Remote Method.
 Makes a user login


         */
        Session.logIn = function (uname, pass) {
            return new latte.RemoteCall('fragment', 'Session', 'logIn', { uname: uname, pass: pass });
        };
        /*
         * Remote Method.
 Logs the user out


         */
        Session.logOut = function () {
            return new latte.RemoteCall('fragment', 'Session', 'logOut', {});
        };
        return Session;
    }());
    latte.Session = Session;
})(latte || (latte = {}));
var latte;
(function (latte) {
    var SignInViewBase = (function (_super) {
        __extends(SignInViewBase, _super);
        function SignInViewBase() {
            _super.call(this, latte.Element.fromBank('SignInViewBase'));
            this.bind(this, true);
        }
        Object.defineProperty(SignInViewBase.prototype, "combo", {
            get: function () {
                if (!this._combo) {
                    this._combo = new latte.Element(this.querySelector('[data-property=combo]'));
                }
                return this._combo;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignInViewBase.prototype, "error", {
            get: function () {
                if (!this._error) {
                    this._error = new latte.Element(this.querySelector('[data-property=error]'));
                }
                return this._error;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignInViewBase.prototype, "fieldEmail", {
            get: function () {
                if (!this._fieldEmail) {
                    this._fieldEmail = new latte.Element(this.querySelector('[data-property=fieldEmail]'));
                }
                return this._fieldEmail;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignInViewBase.prototype, "fieldPassword", {
            get: function () {
                if (!this._fieldPassword) {
                    this._fieldPassword = new latte.Element(this.querySelector('[data-property=fieldPassword]'));
                }
                return this._fieldPassword;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignInViewBase.prototype, "form", {
            get: function () {
                if (!this._form) {
                    this._form = new latte.Element(this.querySelector('[data-property=form]'));
                }
                return this._form;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignInViewBase.prototype, "txtEmail", {
            get: function () {
                if (!this._txtEmail) {
                    this._txtEmail = new latte.Textbox(this.querySelector('[data-property=txtEmail]'));
                }
                return this._txtEmail;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignInViewBase.prototype, "txtPassword", {
            get: function () {
                if (!this._txtPassword) {
                    this._txtPassword = new latte.Textbox(this.querySelector('[data-property=txtPassword]'));
                }
                return this._txtPassword;
            },
            enumerable: true,
            configurable: true
        });
        SignInViewBase.getModel = function () {
            if (!this._Model) {
                this._Model = new latte.Element(latte.Element.fromBank('SignInViewBase'));
            }
            return this._Model;
        };
        return SignInViewBase;
    }(latte.Element));
    latte.SignInViewBase = SignInViewBase;
})(latte || (latte = {}));
var latte;
(function (latte) {
    window['latte']['globalViewsBank'] = latte._merge(window['latte']['globalViewsBank'] || {}, {
        "SignInViewBase": "<div data-class=\"SignInViewBase\" class=\"signin-view holder\">\n    <header>\n        <!--<h1>Cuenta</h1>-->\n        <div class=\"logo\"></div>\n    </header>\n    <main>\n        <h2>Sign In</h2>\n        <form data-property=\"form\">\n            <div data-property=\"combo\" class=\"combo\">\n                <div data-property=\"fieldEmail\" class=\"field user\">\n                    <input data-property=\"txtEmail\" type=\"text\" placeholder=\"User\">\n                </div>\n                <div class=\"separator\"></div>\n                <div data-property=\"fieldPassword\" class=\"field password \">\n                    <input data-property=\"txtPassword\" type=\"password\" placeholder=\"Password\">\n                </div>\n            </div>\n            <div style=\"display: none;\" data-property=\"error\" class=\"error\">User, email or password are invalid. Please try again.</div>\n            <!--<div class=\"remember\">-->\n                <!--<input id=\"remember\" name=\"remember\" type=\"checkbox\" checked/>-->\n                <!--<label for=\"remember\">Remember Me</label>-->\n            <!--</div>-->\n            <button class=\"submit\" tabindex=\"0\">Sign In</button>\n        </form>\n    </main>\n    <footer>\n        <!--<p class=\"link\">Forgot Password?</p>-->\n        <!--<p class=\"link\">Register</p>-->\n    </footer>\n</div>"
    });
})(latte || (latte = {}));
/**
 * Created by josemanuel on 7/26/16.
 */
var latte;
(function (latte) {
    /**
     * Adapts a fragment to its editor capabilities
     */
    var FragmentAdapter = (function () {
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         * You should leave empty the constructor
         */
        function FragmentAdapter() {
            /**
             * Property field
             */
            this._fragmentConfiguration = null;
            /**
             * Property field
             */
            this._fragment = null;
            /**
             * Property field
             */
            this._editorItem = null;
            /**
             * Property field
             */
            this._unsavedChanges = false;
        }
        //region Private Methods
        //endregion
        //region Methods
        /**
         * Implementation.
         *
         * @returns {RemoteCall<any>[]}
         */
        FragmentAdapter.prototype.getSaveCalls = function () {
            var _this = this;
            if (this.unsavedChanges) {
                return [this.fragment.saveCall().withHandlers(function () { return _this.unsavedChanges = false; })];
            }
            return [];
        };
        /**
         * Returns the tabs for the ribbon of the view
         * @returns {Array}
         */
        FragmentAdapter.prototype.getEditorTabs = function () {
            return [];
        };
        /**
         * Returns the items for the ribbon of the view
         * @returns {Array}
         */
        FragmentAdapter.prototype.getEditorTabItems = function () {
            return [];
        };
        /**
         * Raises the <c>createEditorItem</c> event
         */
        FragmentAdapter.prototype.onCreateEditorItem = function () {
            if (this._createEditorItem) {
                this._createEditorItem.raise();
            }
        };
        /**
         * Raises the <c>fragment</c> event
         */
        FragmentAdapter.prototype.onFragmentChanged = function () {
            if (this._fragmentChanged) {
                this._fragmentChanged.raise();
            }
        };
        /**
         * Raises the <c>fragmentConfiguration</c> event
         */
        FragmentAdapter.prototype.onFragmentConfigurationChanged = function () {
            if (this._fragmentConfigurationChanged) {
                this._fragmentConfigurationChanged.raise();
            }
        };
        /**
         * Raises the <c>editorFocus</c> event
         */
        FragmentAdapter.prototype.onEditorFocus = function () {
            if (this._editorFocus) {
                this._editorFocus.raise();
            }
        };
        /**
         * Raises the <c>register</c> event
         */
        FragmentAdapter.prototype.onRegister = function () {
            if (this._register) {
                this._register.raise();
            }
        };
        /**
         * Raises the <c>tabsChanged</c> event
         */
        FragmentAdapter.prototype.onTabsChanged = function () {
            if (this._tabsChanged) {
                this._tabsChanged.raise();
            }
        };
        /**
         * Raises the <c>unRegister</c> event
         */
        FragmentAdapter.prototype.onUnRegister = function () {
            if (this._unRegister) {
                this._unRegister.raise();
            }
        };
        /**
         * Raises the <c>unsavedChanges</c> event
         */
        FragmentAdapter.prototype.onUnsavedChangesChanged = function () {
            if (this._unsavedChangesChanged) {
                this._unsavedChangesChanged.raise();
            }
        };
        Object.defineProperty(FragmentAdapter.prototype, "createEditorItem", {
            /**
             * Gets an event raised when the editorItem should be initialized
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._createEditorItem) {
                    this._createEditorItem = new latte.LatteEvent(this);
                }
                return this._createEditorItem;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FragmentAdapter.prototype, "fragmentConfigurationChanged", {
            /**
             * Gets an event raised when the value of the fragmentConfiguration property changes
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._fragmentConfigurationChanged) {
                    this._fragmentConfigurationChanged = new latte.LatteEvent(this);
                }
                return this._fragmentConfigurationChanged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FragmentAdapter.prototype, "editorBlur", {
            /**
             * Gets an event raised when the editor item loses the focus
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._editorBlur) {
                    this._editorBlur = new latte.LatteEvent(this);
                }
                return this._editorBlur;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>editorBlur</c> event
         */
        FragmentAdapter.prototype.onEditorBlur = function () {
            if (this._editorBlur) {
                this._editorBlur.raise();
            }
        };
        Object.defineProperty(FragmentAdapter.prototype, "editorFocus", {
            /**
             * Gets an event raised when the editor item receives the focus
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._editorFocus) {
                    this._editorFocus = new latte.LatteEvent(this);
                }
                return this._editorFocus;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FragmentAdapter.prototype, "register", {
            /**
             * Gets an event raised when the adapter is registered
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._register) {
                    this._register = new latte.LatteEvent(this);
                }
                return this._register;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FragmentAdapter.prototype, "tabsChanged", {
            /**
             * Gets an event raised when the tabs of the adapter changed
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._tabsChanged) {
                    this._tabsChanged = new latte.LatteEvent(this);
                }
                return this._tabsChanged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FragmentAdapter.prototype, "unRegister", {
            /**
             * Gets an event raised when the adapter is un-registered
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._unRegister) {
                    this._unRegister = new latte.LatteEvent(this);
                }
                return this._unRegister;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FragmentAdapter.prototype, "unsavedChangesChanged", {
            /**
             * Gets an event raised when the value of the unsavedChanges property changes
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._unsavedChangesChanged) {
                    this._unsavedChangesChanged = new latte.LatteEvent(this);
                }
                return this._unsavedChangesChanged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FragmentAdapter.prototype, "fragmentChanged", {
            /**
             * Gets an event raised when the value of the fragment property changes
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._fragmentChanged) {
                    this._fragmentChanged = new latte.LatteEvent(this);
                }
                return this._fragmentChanged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FragmentAdapter.prototype, "fragmentConfiguration", {
            /**
             * Gets or sets the fragment configuration info
             *
             * @returns {IFragment}
             */
            get: function () {
                return this._fragmentConfiguration;
            },
            /**
             * Gets or sets the fragment configuration info
             *
             * @param {IFragment} value
             */
            set: function (value) {
                // Check if value changed
                var changed = value !== this._fragmentConfiguration;
                // Set value
                this._fragmentConfiguration = value;
                // Trigger changed event
                if (changed) {
                    this.onFragmentConfigurationChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FragmentAdapter.prototype, "fragment", {
            /**
             * Gets or sets the fragment of the adapter
             *
             * @returns {Fragment}
             */
            get: function () {
                return this._fragment;
            },
            /**
             * Gets or sets the fragment of the adapter
             *
             * @param {Fragment} value
             */
            set: function (value) {
                // Check if value changed
                var changed = value !== this._fragment;
                // Set value
                this._fragment = value;
                // Trigger changed event
                if (changed) {
                    this.onFragmentChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FragmentAdapter.prototype, "editorItem", {
            /**
             * Gets or sets the item of the fragment used to edit fragment contents
             *
             * @returns {Item}
             */
            get: function () {
                return this._editorItem;
            },
            /**
             * Gets or sets the item of the fragment used to edit fragment contents
             *
             * @param {Item} value
             */
            set: function (value) {
                this._editorItem = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FragmentAdapter.prototype, "unsavedChanges", {
            /**
             * Gets or sets unsaved changes.
             *
             * @returns {boolean}
             */
            get: function () {
                return this._unsavedChanges;
            },
            /**
             * Gets or sets unsaved changes.
             *
             * @param {boolean} value
             */
            set: function (value) {
                // Check if value changed
                var changed = value !== this._unsavedChanges;
                // Set value
                this._unsavedChanges = value;
                // Trigger changed event
                if (changed) {
                    this.onUnsavedChangesChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        return FragmentAdapter;
    }());
    latte.FragmentAdapter = FragmentAdapter;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 12/9/14.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var Uploader = (function () {
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         * Creates the uploader. Additionally specifies target url.
         */
        function Uploader(url) {
            if (url === void 0) { url = null; }
            //endregion
            //region Properties
            /**
             * Property field
             */
            this._data = null;
            /**
             * Property field
             */
            this._formData = [];
            /**
             * Property field
             */
            this._progress = 0;
            /**
             * Property field
             */
            this._url = null;
            if (url) {
                this.url = url;
            }
        }
        //region Private Methods
        //endregion
        //region Methods
        /**
         * Appends data to the form data
         * @param name
         * @param value
         */
        Uploader.prototype.appendFormData = function (name, value) {
            this.formData.push({ name: name, value: value });
        };
        /**
         * Starts the upload
         */
        Uploader.prototype.upload = function () {
            var _this = this;
            if (!this.url) {
                throw "No URL for upload";
            }
            if (this.formData.length == 0) {
                throw "No data to upload";
            }
            this._uploading = true;
            this._uploadStarted = latte.DateTime.now;
            var xhr = new XMLHttpRequest();
            var formData = new FormData();
            // Append form data
            for (var i = 0; i < this.formData.length; i++) {
                formData.append(this.formData[i].name, this.formData[i].value);
            }
            // Get upload object
            var upload = xhr.upload;
            upload.addEventListener('progress', function (e) {
                _this._uploadedBytes = e.total;
                _this.progress = e.loaded / e.total;
            }, false);
            upload.addEventListener('error', function () {
                _this.onError('');
            }, false);
            upload.addEventListener('abort', function () {
                this.onAborted();
            }, false);
            upload.addEventListener('load', function () {
            }, false);
            xhr.onreadystatechange = function () {
                if (xhr.responseText && _this.uploading) {
                    _this._response = xhr.responseText;
                    // Create message & call to emulate response
                    var m = new latte.Message();
                    var call = new latte.RemoteCall(null, null, null);
                    call.success.add(function (data) {
                        _this._uploading = false;
                        _this._data = data;
                        _this.onComplete();
                    });
                    m.calls.push(call);
                    m.dataArrived(xhr.responseText);
                }
            };
            xhr.open('post', this.url, true);
            xhr.send(formData);
        };
        Object.defineProperty(Uploader.prototype, "aborted", {
            /**
             * Gets an event raised when the upload is aborted
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._aborted) {
                    this._aborted = new latte.LatteEvent(this);
                }
                return this._aborted;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>aborted</c> event
         */
        Uploader.prototype.onAborted = function () {
            if (this._aborted) {
                this._aborted.raise();
            }
        };
        Object.defineProperty(Uploader.prototype, "complete", {
            /**
             * Gets an event raised when the upload is complete
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._complete) {
                    this._complete = new latte.LatteEvent(this);
                }
                return this._complete;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>complete</c> event
         */
        Uploader.prototype.onComplete = function () {
            if (this._complete) {
                this._complete.raise();
            }
        };
        Object.defineProperty(Uploader.prototype, "error", {
            /**
             * Gets an event raised when an error occurs
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._error) {
                    this._error = new latte.LatteEvent(this);
                }
                return this._error;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>error</c> event
         */
        Uploader.prototype.onError = function (message) {
            if (this._error) {
                this._error.raise(message);
            }
        };
        Object.defineProperty(Uploader.prototype, "progressChanged", {
            /**
             * Gets an event raised when the value of the progress property changes
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._progressChanged) {
                    this._progressChanged = new latte.LatteEvent(this);
                }
                return this._progressChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>progress</c> event
         */
        Uploader.prototype.onProgressChanged = function () {
            if (this._progressChanged) {
                this._progressChanged.raise();
            }
        };
        Object.defineProperty(Uploader.prototype, "data", {
            /**
             * Gets or sets the data result of the upload post
             *
             * @returns {any}
             */
            get: function () {
                return this._data;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Uploader.prototype, "formData", {
            /**
             * Gets the form data
             *
             * @returns {Array<{name: string; value: string}>}
             */
            get: function () {
                return this._formData;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Uploader.prototype, "currentUploadBytesPerSecond", {
            /**
             * Gets the current speed of upload. Zero if any
             *
             * @returns {string}
             */
            get: function () {
                return this.uploadedBytes / latte.DateTime.now.subtractDate(this.uploadStarted).totalSeconds;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Uploader.prototype, "progress", {
            /**
             * Gets or sets the progress of the upload (0 to 1)
             *
             * @returns {number}
             */
            get: function () {
                return this._progress;
            },
            /**
             * Gets or sets the progress of the upload (0 to 1)
             *
             * @param {number} value
             */
            set: function (value) {
                // Check if value changed
                var changed = value !== this._progress;
                // Set value
                this._progress = value;
                // Trigger changed event
                if (changed) {
                    this.onProgressChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Uploader.prototype, "response", {
            /**
             * Gets the raw response from server
             *
             * @returns {string}
             */
            get: function () {
                return this._response;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Uploader.prototype, "uploading", {
            /**
             * Gets a value indicating if upload is in progress
             *
             * @returns {boolean}
             */
            get: function () {
                return this._uploading;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Uploader.prototype, "uploadedBytes", {
            /**
             * Gets the amount of uploaded bytes
             *
             * @returns {number}
             */
            get: function () {
                return this._uploadedBytes;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Uploader.prototype, "uploadStarted", {
            /**
             * Gets a value indicating the time when upload started
             *
             * @returns {DateTime}
             */
            get: function () {
                return this._uploadStarted;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Uploader.prototype, "url", {
            /**
             * Gets or sets the url to post upload
             *
             * @returns {string}
             */
            get: function () {
                return this._url;
            },
            /**
             * Gets or sets the url to post upload
             *
             * @param {string} value
             */
            set: function (value) {
                this._url = value;
            },
            enumerable: true,
            configurable: true
        });
        return Uploader;
    }());
    latte.Uploader = Uploader;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 7/14/16.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var Main = (function () {
        //endregion
        //region Fields
        //endregion
        /**
         *
         */
        function Main() {
            console.log('%cFRAGMENT', 'font-size: 30px; color: #ff4d4d; text-shadow: 3px 3px 3px rgba(0,0,0,0.2); font-family:"Avenir Next","Myriad",sans-serif;');
            console.log('http://github.com/menendezpoo/Fragment');
            latte.FragmentAdapterManager.register('text', 'PlainTextFragmentAdapter');
            latte.FragmentAdapterManager.register('html', 'HtmlFragmentAdapter');
            latte.FragmentAdapterManager.register('gallery', 'ImageGalleryFragmentAdapter');
            // View.mainView = new CmsExplorer();
            if (window['loggedFragmentUser']) {
                latte.User.me = latte.DataRecord.fromServerObject(window['loggedFragmentUser']);
                Main.goMainView();
            }
            else {
                Main.goSignInView();
            }
        }
        //region Static
        Main.goMainView = function () {
            var body = new latte.Element(document.body);
            body.clear();
            latte.View.mainView = new latte.CmsMainView();
        };
        Main.goSignInView = function () {
            var v = new latte.SignInView();
            document.body.appendChild(v.element);
        };
        Main.logOut = function () {
            latte.View.mainView = null;
            latte.Session.logOut().send(function () {
                document.location.reload();
            });
        };
        return Main;
    }());
    latte.Main = Main;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 8/5/16.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var GroupExplorer = (function (_super) {
        __extends(GroupExplorer, _super);
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         *
         */
        function GroupExplorer(r) {
            if (r === void 0) { r = null; }
            _super.call(this);
            this.loadsChildrenFolders = false;
            if (r) {
                this.record = r;
            }
        }
        //region Private Methods
        //endregion
        //region Methods
        /**
         * Gets the loader of children items
         *
         * @Override
         */
        GroupExplorer.prototype.getChildrenLoader = function () {
            var _this = this;
            return latte.GroupUser.byGroup(this.record.idgroup).withHandlers(function (records) {
                for (var i in records) {
                    _this.children.add(new latte.GroupUserExplorer(records[i]));
                }
            });
        };
        /**
         * Gets the name of the item
         * @Override
         */
        GroupExplorer.prototype.getName = function () {
            return this.record.name;
        };
        /**
         * Gets the icon of the item
         * @Override
         */
        GroupExplorer.prototype.getIcon = function () {
            return latte.IconItem.fileIcon();
        };
        /**
         * Gets the items (actions) of the item
         * @Override
         */
        GroupExplorer.prototype.getItems = function () {
            var _this = this;
            return [
                new latte.ButtonItem(strings.addUserToGroup, latte.IconItem.newIcon(), function () {
                    var r = new latte.GroupUser();
                    r.idgroup = _this.record.idgroup;
                    latte.DataRecordDialogView.editRecord(r, function () { return _this.onChildrenChanged(); }, strings.addUserToGroup);
                })
            ];
        };
        return GroupExplorer;
    }(latte.ExplorerItemDataRecord));
    latte.GroupExplorer = GroupExplorer;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 8/5/16.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var GroupUserExplorer = (function (_super) {
        __extends(GroupUserExplorer, _super);
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         *
         */
        function GroupUserExplorer(r) {
            if (r === void 0) { r = null; }
            _super.call(this);
            if (r) {
                this.record = r;
            }
        }
        //region Private Methods
        //endregion
        //region Methods
        /**
         * Gets the columns of the item
         * @Override
         */
        GroupUserExplorer.prototype.getColumns = function () {
            return ['userName', 'userAttributes'];
        };
        /**
         * Gets the name of the item
         * @Override
         */
        GroupUserExplorer.prototype.getName = function () {
            return (this.record.user || new latte.User()).toString();
        };
        /**
         * Gets the icon of the item
         * @Override
         */
        GroupUserExplorer.prototype.getIcon = function () {
            return latte.IconItem.fileIcon();
        };
        return GroupUserExplorer;
    }(latte.ExplorerItemDataRecord));
    latte.GroupUserExplorer = GroupUserExplorer;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 8/5/16.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var GroupsExplorer = (function (_super) {
        __extends(GroupsExplorer, _super);
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         *
         */
        function GroupsExplorer() {
            _super.call(this);
        }
        //region Private Methods
        //endregion
        //region Methods
        /**
         * Gets the loader of children items
         *
         * @Override
         */
        GroupsExplorer.prototype.getChildrenLoader = function () {
            var _this = this;
            return latte.Group.catalog().withHandlers(function (records) {
                for (var i in records) {
                    _this.children.add(new latte.GroupExplorer(records[i]));
                }
            });
        };
        /**
         * Gets the name of the item
         * @Override
         */
        GroupsExplorer.prototype.getName = function () {
            return strings.groups;
        };
        /**
         * Gets the icon of the item
         * @Override
         */
        GroupsExplorer.prototype.getIcon = function () {
            return latte.IconItem.folderIcon();
        };
        /**
         * Gets the items (actions) of the item
         * @Override
         */
        GroupsExplorer.prototype.getItems = function () {
            var _this = this;
            return [
                new latte.ButtonItem(strings.newGroup, latte.IconItem.newIcon(), function () {
                    var r = new latte.Group();
                    latte.DataRecordDialogView.editRecord(r, function () { return _this.onChildrenChanged(); }, strings.newGroup);
                })
            ];
        };
        return GroupsExplorer;
    }(latte.ExplorerItem));
    latte.GroupsExplorer = GroupsExplorer;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 7/14/16.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var PageExplorer = (function (_super) {
        __extends(PageExplorer, _super);
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         * Creates the Item
         */
        function PageExplorer(r) {
            _super.call(this);
            this.record = r;
            this.loadsChildrenFolders = r.configuration.childrenMayHaveChildren;
        }
        //region Private Methods
        //endregion
        //region Methods
        /**
         * Gets the loader of children items
         * @Override
         */
        PageExplorer.prototype.getChildrenLoader = function () {
            var _this = this;
            return this.record.getPages(this.childrenPage).withHandlers(function (result) {
                for (var i in result.records) {
                    _this.children.add(new PageExplorer(result.records[i]));
                    _this.childrenPage = result.page;
                    _this.childrenPages = result.pages;
                }
            });
        };
        /**
         * Gets the columns of the item
         * @Override
         */
        PageExplorer.prototype.getColumns = function () {
            return ['title', 'key', 'guid'];
        };
        /**
         * Gets the width of columns
         * @Override
         */
        PageExplorer.prototype.getColumnWithFor = function (name) {
            if (name == "title") {
                return 250;
            }
            return _super.prototype.getColumnWithFor.call(this, name);
        };
        /**
         * Gets the detail view of the item
         * @Override
         */
        PageExplorer.prototype.getDetailView = function () {
            return new latte.PageSidebar(this.record);
        };
        /**
         * Gets the name of the item
         * @Override
         */
        PageExplorer.prototype.getName = function () {
            return this.record.title;
        };
        /**
         * Gets the icon of the item
         * @Override
         */
        PageExplorer.prototype.getIcon = function () {
            return latte.IconItem.fileIcon();
        };
        /**
         * Gets the items (actions) of the item
         * @Override
         */
        PageExplorer.prototype.getItems = function () {
            var _this = this;
            var items = [];
            if (this.record.canIInsertChild) {
                items.push(new latte.ButtonItem(strings.newPage, latte.IconItem.newIcon(), function () {
                    var p = new latte.Page();
                    p.idparent = _this.record.idpage;
                    latte.DataRecordDialogView.editRecord(p, function () { return _this.onChildrenChanged(); }, strings.newPage);
                }));
            }
            return items;
        };
        return PageExplorer;
    }(latte.ExplorerItemDataRecord));
    latte.PageExplorer = PageExplorer;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 7/14/16.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var PagesExplorer = (function (_super) {
        __extends(PagesExplorer, _super);
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         *
         */
        function PagesExplorer() {
            _super.call(this);
        }
        //region Private Methods
        //endregion
        //region Methods
        /**
         * Gets the loader of children items
         * @Override
         */
        PagesExplorer.prototype.getChildrenLoader = function () {
            var _this = this;
            return latte.Page.rootPages().withHandlers(function (records) {
                for (var i in records) {
                    _this.children.add(new latte.PageExplorer(records[i]));
                }
            });
        };
        /**
         * Gets the name of the item
         * @Override
         */
        PagesExplorer.prototype.getName = function () {
            return strings.pages;
        };
        /**
         * Gets the icon of the item
         * @Override
         */
        PagesExplorer.prototype.getIcon = function () {
            return latte.IconItem.folderIcon();
        };
        /**
         * Gets the items (actions) of the item
         * @Override
         */
        PagesExplorer.prototype.getItems = function () {
            var _this = this;
            var items = [];
            if (latte.User.me.isRoot) {
                items.push(new latte.ButtonItem(strings.newRootPage, latte.IconItem.newIcon(), function () {
                    var p = new latte.Page();
                    latte.DataRecordDialogView.editRecord(p, function () { return _this.onChildrenChanged(); }, strings.newPage);
                }));
            }
            return items;
        };
        return PagesExplorer;
    }(latte.ExplorerItem));
    latte.PagesExplorer = PagesExplorer;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 8/5/16.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var UserExplorer = (function (_super) {
        __extends(UserExplorer, _super);
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         *
         */
        function UserExplorer(r) {
            _super.call(this);
            if (r) {
                this.record = r;
            }
        }
        //region Private Methods
        UserExplorer.prototype.changePassword = function () {
            var _this = this;
            var fields = {
                old: {
                    text: strings.oldPassword,
                    type: 'password'
                },
                choose: {
                    text: strings.newPassword,
                    type: 'password',
                    hint: strings.passwordRules
                },
                confirm: {
                    text: strings.confirmNewPassword,
                    type: 'password'
                }
            };
            if (latte.User.me.isRoot) {
                delete fields['old'];
            }
            latte.DialogView.input(strings.changePassword, fields, function (values, inputs) {
                inputs['choose'].valid = String(values['choose']).length >= 5;
                if (values['choose'] != values['confirm']) {
                    inputs['confirm'].valid = false;
                    inputs['confirm'].setHint(strings.passwordsDontMatch);
                }
                else {
                    inputs['confirm'].valid = true;
                    inputs['confirm'].hintItem = null;
                }
                if (!latte.User.me.isRoot) {
                    return function (callback) {
                        _this.record.passwordCorrect(values['old']).send(function (result) {
                            inputs['old'].valid = result;
                            inputs['old'].setHint(result ? null : strings.currentPasswordNotValid);
                            callback();
                        });
                    };
                }
            }, function (values) {
                _this.record.changePassword(values['old'] || '', values['choose']).send(function () {
                    latte.DialogView.inform(strings.passwordChangeSuccess).addOkButton();
                });
            });
        };
        //endregion
        //region Methods
        /**
        * Gets the columns of the item
        * @Override
        */
        UserExplorer.prototype.getColumns = function () {
            return ['uname', 'flags'];
        };
        /**
         * Gets the detail view of the item
         * @Override
         */
        UserExplorer.prototype.getDetailView = function () {
            var v = _super.prototype.getDetailView.call(this);
            v.items.add(this.btnChangePassword);
            return v;
        };
        /**
         * Gets the name of the item
         * @Override
         */
        UserExplorer.prototype.getName = function () {
            return this.record.uname;
        };
        /**
         * Gets the icon of the item
         * @Override
         */
        UserExplorer.prototype.getIcon = function () {
            return latte.IconItem.fileIcon();
        };
        Object.defineProperty(UserExplorer.prototype, "btnChangePassword", {
            /**
             * Gets the change password button
             *
             * @returns {ButtonItem}
             */
            get: function () {
                var _this = this;
                if (!this._btnChangePassword) {
                    this._btnChangePassword = new latte.ButtonItem(strings.changePassword);
                    this._btnChangePassword.addClass('action-button');
                    this._btnChangePassword.click.add(function () { return _this.changePassword(); });
                }
                return this._btnChangePassword;
            },
            enumerable: true,
            configurable: true
        });
        return UserExplorer;
    }(latte.ExplorerItemDataRecord));
    latte.UserExplorer = UserExplorer;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 8/5/16.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var UsersExplorer = (function (_super) {
        __extends(UsersExplorer, _super);
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         *
         */
        function UsersExplorer() {
            _super.call(this);
            this.loadsChildrenFolders = false;
        }
        //region Private Methods
        //endregion
        //region Methods
        /**
         * Gets the loader of children items
         *
         * @Override
         */
        UsersExplorer.prototype.getChildrenLoader = function () {
            var _this = this;
            return latte.User.catalog().withHandlers(function (records) {
                for (var i in records) {
                    _this.children.add(new latte.UserExplorer(records[i]));
                }
            });
        };
        /**
         * Gets the name of the item
         * @Override
         */
        UsersExplorer.prototype.getName = function () {
            return strings.users;
        };
        /**
         * Gets the icon of the item
         * @Override
         */
        UsersExplorer.prototype.getIcon = function () {
            return latte.IconItem.folderIcon();
        };
        /**
         * Gets the items (actions) of the item
         * @Override
         */
        UsersExplorer.prototype.getItems = function () {
            var _this = this;
            return [
                new latte.ButtonItem(strings.newUser, latte.IconItem.newIcon(), function () {
                    var r = new latte.User();
                    latte.DataRecordDialogView.editRecord(r, function () { return _this.onChildrenChanged(); }, strings.newUser);
                })
            ];
        };
        return UsersExplorer;
    }(latte.ExplorerItem));
    latte.UsersExplorer = UsersExplorer;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 6/24/14.
 */
var latte;
(function (latte) {
    /**
     * Uploads a file to the server, linking it to an object.
     * To upload a file as base46 mode, use static fromBase64
     */
    var FileUploader = (function (_super) {
        __extends(FileUploader, _super);
        //endregion
        //region Fields
        //endregion
        /**
         * Creates the file uploader
         */
        function FileUploader(file, recordName, recordId) {
            _super.call(this);
            //endregion
            //region Events
            //endregion
            //region Properties
            /**
             * Property field
             */
            this._base64 = null;
            /**
             * Property field
             */
            this._base64FileName = null;
            /**
             * Property field
             */
            this._description = null;
            /**
             * Property field
             */
            this._fileLocal = null;
            /**
             * Property field
             */
            this._height = null;
            /**
             * Property field
             */
            this._idparent = null;
            /**
             * Property field
             */
            this._key = null;
            /**
             * Property field
             */
            this._width = null;
            this._fileLocal = file;
            this._recordName = recordName;
            this._recordId = recordId;
        }
        //region Static
        /**
         * Creates a FileUploader object from base64 encoded data
         * @param base64
         * @param fileName
         * @param recordName
         * @param recordId
         * @returns {latte.FileUploader}
         */
        FileUploader.fromBase64 = function (base64, fileName, recordName, recordId) {
            var f = new FileUploader(null, recordName, recordId);
            f.base64 = base64;
            f.base64FileName = fileName;
            return f;
        };
        //region Private Methods
        //endregion
        //region Methods
        /**
         * Override.
         */
        FileUploader.prototype.onComplete = function () {
            var data = this.data;
            if (latte._isArray(data) && data.length > 0 && data[0]) {
                this._fileRecord = (data[0]);
            }
            else {
                latte.log("Error uploading file: " + this.response);
            }
            _super.prototype.onComplete.call(this);
        };
        /**
         * Uploads the specified DetailView file
         **/
        FileUploader.prototype.upload = function () {
            // Set url
            this.url = '/latte/releases/fragment/support/actions/'
                + (this.base64 ? 'upload64' : 'upload') + '.php';
            // Add file params
            this.appendFormData('name', this.recordName);
            this.appendFormData('id', this.recordId);
            if (this.idparent != null)
                this.appendFormData('idparent', this.idparent);
            if (this.width != null)
                this.appendFormData('width', this.width);
            if (this.height != null)
                this.appendFormData('height', this.height);
            if (this.description != null)
                this.appendFormData('description', this.description);
            if (this.key != null)
                this.appendFormData('key', this.key);
            if (this.base64) {
                this.appendFormData('data', this.base64);
                this.appendFormData('filename', this.base64FileName);
            }
            else {
                this.appendFormData('file', this.fileLocal);
            }
            _super.prototype.upload.call(this);
        };
        Object.defineProperty(FileUploader.prototype, "base64", {
            /**
             * Gets or sets the base64 data to upload, if any
             *
             * @returns {string}
             */
            get: function () {
                return this._base64;
            },
            /**
             * Gets or sets the base64 data to upload, if any
             *
             * @param {string} value
             */
            set: function (value) {
                this._base64 = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileUploader.prototype, "base64FileName", {
            /**
             * Gets or sets the file name when uploading base64 data
             *
             * @returns {string}
             */
            get: function () {
                return this._base64FileName;
            },
            /**
             * Gets or sets the file name when uploading base64 data
             *
             * @param {string} value
             */
            set: function (value) {
                this._base64FileName = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileUploader.prototype, "description", {
            /**
             * Gets or sets the description of the file to upload
             *
             * @returns {string}
             */
            get: function () {
                return this._description;
            },
            /**
             * Gets or sets the description of the file to upload
             *
             * @param {string} value
             */
            set: function (value) {
                this._description = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileUploader.prototype, "fileLocal", {
            /**
             * Gets the local file object
             *
             * @returns {File}
             */
            get: function () {
                return this._fileLocal;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileUploader.prototype, "fileRecord", {
            /**
             * Gets the result file
             *
             * @returns {File}
             */
            get: function () {
                return this._fileRecord;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileUploader.prototype, "height", {
            /**
             * Gets or sets the height of the file if is image
             *
             * @returns {number}
             */
            get: function () {
                return this._height;
            },
            /**
             * Gets or sets the height of the file if is image
             *
             * @param {number} value
             */
            set: function (value) {
                this._height = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileUploader.prototype, "idparent", {
            /**
             * Gets or sets the id of the parent file to make this file a thumbnail
             *
             * @returns {number}
             */
            get: function () {
                return this._idparent;
            },
            /**
             * Gets or sets the id of the parent file to make this file a thumbnail
             *
             * @param {number} value
             */
            set: function (value) {
                this._idparent = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileUploader.prototype, "key", {
            /**
             * Gets or sets the key of the file
             *
             * @returns {string}
             */
            get: function () {
                return this._key;
            },
            /**
             * Gets or sets the key of the file
             *
             * @param {string} value
             */
            set: function (value) {
                this._key = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileUploader.prototype, "recordId", {
            /**
             * Gets the id of record
             *
             * @returns {string}
             */
            get: function () {
                return this._recordId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileUploader.prototype, "recordName", {
            /**
             * Gets the name of the record
             *
             * @returns {string}
             */
            get: function () {
                return this._recordName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileUploader.prototype, "width", {
            /**
             * Gets or sets the width of the file if is image
             *
             * @returns {number}
             */
            get: function () {
                return this._width;
            },
            /**
             * Gets or sets the width of the file if is image
             *
             * @param {number} value
             */
            set: function (value) {
                this._width = value;
            },
            enumerable: true,
            configurable: true
        });
        return FileUploader;
    }(latte.Uploader));
    latte.FileUploader = FileUploader;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 7/26/16.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var FragmentAdapterManager = (function () {
        function FragmentAdapterManager() {
        }
        /**
         * Gets the adapter for the supported type
         *
         * @param type
         * @returns {any|null}
         */
        FragmentAdapterManager.byType = function (type) {
            return FragmentAdapterManager._adapters[type] ? new latte[FragmentAdapterManager._adapters[type]] : null;
        };
        /**
         * Gets the list of loaded plugins
         *
         * @returns {Plugin[]}
         */
        FragmentAdapterManager.getLoadedAdapters = function () {
            var r = [];
            for (var i in FragmentAdapterManager._adapters) {
                r.push(FragmentAdapterManager._adapters[i]);
            }
            return r;
        };
        /**
         * Returns a value indicating if the specified type is supported by the manager
         *
         * @param type
         * @returns {boolean}
         */
        FragmentAdapterManager.isSupported = function (type) {
            return !!FragmentAdapterManager._adapters[type];
        };
        /**
         * Loads the specified plugin. If the plugin is already loaded, it will ignore it.
         * @param p
         */
        FragmentAdapterManager.register = function (type, className) {
            FragmentAdapterManager._adapters[type] = className;
        };
        /**
         * Unloads the specified plugin. Ignored if plugin wasn't loaded
         *
         * @param f
         */
        FragmentAdapterManager.unregister = function (type) {
            if (FragmentAdapterManager._adapters[type]) {
                delete FragmentAdapterManager._adapters[type];
            }
        };
        //region Static
        FragmentAdapterManager._adapters = {};
        return FragmentAdapterManager;
    }());
    latte.FragmentAdapterManager = FragmentAdapterManager;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 4/29/15.
 */
var latte;
(function (latte) {
    (function (ImageFit) {
        ImageFit[ImageFit["AspectFit"] = 0] = "AspectFit";
        ImageFit[ImageFit["AspectFill"] = 1] = "AspectFill";
        ImageFit[ImageFit["AspectFillNear"] = 2] = "AspectFillNear";
        ImageFit[ImageFit["AspectFillFar"] = 3] = "AspectFillFar";
    })(latte.ImageFit || (latte.ImageFit = {}));
    var ImageFit = latte.ImageFit;
    ;
    /**
     *
     */
    var ImageUtil = (function () {
        function ImageUtil() {
        }
        //region Static
        /**
         * Parses ImageFit from specified string
         * @param fit
         * @returns {any}
         */
        ImageUtil.imageFitFromString = function (fit) {
            if (fit == 'aspect-fit') {
                return ImageFit.AspectFit;
            }
            else if (fit == 'aspect-fill') {
                return ImageFit.AspectFill;
            }
            else if (fit == 'aspect-fill-near') {
                return ImageFit.AspectFillNear;
            }
            else if (fit == 'aspect-fill-far') {
                return ImageFit.AspectFillFar;
            }
            return null;
        };
        /**
         * Creates an icon of the specified file, assuming it's an image file.
         *
         * @param file
         * @param size
         * @param callback
         */
        ImageUtil.createThumbOfFile = function (file, options, callback) {
            if (callback === void 0) { callback = null; }
            ImageUtil.readFileAsDataUrl(file, function (dataUrl) {
                // Create icon
                ImageUtil.createThumbOfUrl(dataUrl, options, function (dataUrl) {
                    // Return result
                    callback(dataUrl);
                });
            });
        };
        /**
         * Creates an icon of the specified image.
         * This algorithm is stored under the name _Steps because it makes n steps
         * to scale down the image. It proved to be ineficient and results unwanted.
         * @param image
         * @param size
         * @returns {string}
         */
        ImageUtil.createThumbOfImage_Steps = function (image, size) {
            var w = image.width;
            var h = image.height;
            var scale = Math.min(size.width / w, size.height / h);
            var targW = w * scale;
            var steps = Math.ceil(Math.log(w / targW) / Math.log(2)) + 1;
            var stepWidth = Math.round(Math.abs(targW - w) / steps);
            //console.log(w + " X " + h + "-> scale: " + scale + " steps: " + steps + " of " + stepWidth)
            //console.log("Target: " + targW + " x " + targH);
            var oc = document.createElement('canvas'), octx = oc.getContext('2d');
            var curW = w;
            var curH = h;
            var curImg = image;
            for (var i = 0; i < steps; i++) {
                curW -= stepWidth;
                curH = Math.round(curW * h / w);
                //console.log("Step: " + curW + " x " + curH);
                oc.width = curW;
                oc.height = curH;
                octx.drawImage(curImg, 0, 0, curW, curH);
                curImg = document.createElement('img');
                curImg.src = oc.toDataURL();
            }
            //log(sprintf("Scaled image of (%s x %s) asked to (%s x %s) scaled to (%s x %s) scale of %s %s steps of %s",
            //    w, h, size.width, size.height, curImg.width, curImg.height, scale, steps, stepWidth));
            // Capture DataURL
            var result = curImg.src;
            // Free memory
            curImg = null;
            oc = null;
            octx = null;
            return result;
        };
        ImageUtil.resizeImage = function (image, options) {
            var w = image.width;
            var h = image.height;
            var original = new latte.Size(w, h);
            var size = options.size;
            var type = options.type || "image/png";
            var quality = options.quality || 0.9;
            var bg = options.background || null;
            var canvas = document.createElement('canvas');
            var cx = canvas.getContext('2d');
            var target;
            var fit = options.fit || ImageFit.AspectFit;
            if (fit == ImageFit.AspectFit) {
                target = original.scaleToFit(size);
            }
            else {
                target = original.scaleToFill(size);
            }
            canvas.width = image.width;
            canvas.height = image.height;
            if (bg instanceof latte.Color) {
                cx.fillStyle = bg.toHexString();
                cx.fillRect(0, 0, w, h);
            }
            cx.drawImage(image, 0, 0, w, h);
            ImageUtil.resample_hermite(canvas, w, h, target.width, target.height);
            // Trim extra edges
            if (fit == ImageFit.AspectFill || fit == ImageFit.AspectFillNear || fit == ImageFit.AspectFillFar) {
                var offsetx = 0;
                var offsety = 0;
                if (target.height > size.height) {
                    if (fit == ImageFit.AspectFill) {
                        offsety = (target.height - size.height) / 2;
                    }
                    else if (fit == ImageFit.AspectFillFar) {
                        offsety = target.height - size.height;
                    }
                }
                if (target.width > size.width) {
                    if (fit == ImageFit.AspectFill) {
                        offsetx = (target.width - size.width) / 2;
                    }
                    else if (fit == ImageFit.AspectFillFar) {
                        offsetx = target.width - size.width;
                    }
                }
                var canvasex = document.createElement('canvas');
                canvasex.width = size.width;
                canvasex.height = size.height;
                var cx_1 = canvasex.getContext('2d');
                cx_1.drawImage(canvas, offsetx, offsety, size.width, size.height, 0, 0, size.width, size.height);
                canvas = canvasex;
            }
            var result = '';
            if (ImageUtil.mimeTypeCompressable(type)) {
                result = canvas.toDataURL(type, quality);
            }
            else {
                result = canvas.toDataURL(type);
            }
            // Explicitly free memory
            canvas = null;
            return result;
        };
        /**
         * Creates a smaller version of the image.
         * @param image
         * @param size
         * @param type Mime type of the image
         * @param quality Quality 0 - 1, if jpg
         */
        ImageUtil.createThumbOfImage = function (image, options) {
            return ImageUtil.resizeImage(image, options);
            //
            // let w = image.width;
            // let h = image.height;
            // let size = options.size;
            // let type = options.type || "image/png";
            // let quality = options.quality || 0.9;
            // let bg: Color = options.background || null;
            // let canvas: HTMLCanvasElement = document.createElement('canvas');
            // let fit = options.fit || ImageFit.AspectFit;
            // let cx = canvas.getContext('2d');
            // let scale = 0;
            // let targW = 0;
            // let targH = 0;
            //
            // if(fit == ImageFit.AspectFit) {
            //     scale = Math.min(size.width / w, size.height / h);
            //     targW = w * scale;
            //     targH = targW * h / w;
            //
            // }else if(fit == ImageFit.AspectFill) {
            //
            // }
            //
            // // Prepare canvas with original image
            // canvas.width = image.width;
            // canvas.height = image.height;
            //
            // // Draw background
            // if(bg instanceof Color){
            //     cx.fillStyle = bg.toHexString();
            //     cx.fillRect(0, 0, w, h);
            // }
            //
            // // Draw original image
            // cx.drawImage(image, 0, 0, w, h);
            //
            // ImageUtil.resample_hermite(canvas, w, h, targW, targH);
            //
            // var result = '';
            //
            // if(ImageUtil.mimeTypeCompressable(type)){
            //     result = canvas.toDataURL(type, quality);
            // }else {
            //     result = canvas.toDataURL(type);
            // }
            //
            // // Explicitly free memory
            // canvas = null;
            //
            // return result;
        };
        ImageUtil.resample_hermite = function (canvas, W, H, W2, H2) {
            var time1 = Date.now();
            W2 = Math.round(W2);
            H2 = Math.round(H2);
            var img = canvas.getContext("2d").getImageData(0, 0, W, H);
            var img2 = canvas.getContext("2d").getImageData(0, 0, W2, H2);
            var data = img.data;
            var data2 = img2.data;
            var ratio_w = W / W2;
            var ratio_h = H / H2;
            var ratio_w_half = Math.ceil(ratio_w / 2);
            var ratio_h_half = Math.ceil(ratio_h / 2);
            for (var j = 0; j < H2; j++) {
                for (var i = 0; i < W2; i++) {
                    var x2 = (i + j * W2) * 4;
                    var weight = 0;
                    var weights = 0;
                    var weights_alpha = 0;
                    var gx_r = 0, gx_g = 0, gx_b = 0, gx_a = 0;
                    var center_y = (j + 0.5) * ratio_h;
                    for (var yy = Math.floor(j * ratio_h); yy < (j + 1) * ratio_h; yy++) {
                        var dy = Math.abs(center_y - (yy + 0.5)) / ratio_h_half;
                        var center_x = (i + 0.5) * ratio_w;
                        var w0 = dy * dy; //pre-calc part of w
                        for (var xx = Math.floor(i * ratio_w); xx < (i + 1) * ratio_w; xx++) {
                            var dx = Math.abs(center_x - (xx + 0.5)) / ratio_w_half;
                            var w = Math.sqrt(w0 + dx * dx);
                            if (w >= -1 && w <= 1) {
                                //hermite filter
                                weight = 2 * w * w * w - 3 * w * w + 1;
                                if (weight > 0) {
                                    dx = 4 * (xx + yy * W);
                                    //alpha
                                    gx_a += weight * data[dx + 3];
                                    weights_alpha += weight;
                                    //colors
                                    if (data[dx + 3] < 255)
                                        weight = weight * data[dx + 3] / 250;
                                    gx_r += weight * data[dx];
                                    gx_g += weight * data[dx + 1];
                                    gx_b += weight * data[dx + 2];
                                    weights += weight;
                                }
                            }
                        }
                    }
                    data2[x2] = gx_r / weights;
                    data2[x2 + 1] = gx_g / weights;
                    data2[x2 + 2] = gx_b / weights;
                    data2[x2 + 3] = gx_a / weights_alpha;
                }
            }
            console.log("hermite = " + (Math.round(Date.now() - time1) / 1000) + " s");
            canvas.getContext("2d").clearRect(0, 0, Math.max(W, W2), Math.max(H, H2));
            canvas.width = W2;
            canvas.height = H2;
            canvas.getContext("2d").putImageData(img2, 0, 0);
        };
        /**
         * Creates an icon of the specified url image
         *
         * @param url
         * @param size
         * @param type
         * @param quality
         * @param callback
         */
        ImageUtil.createThumbOfUrl = function (url, options, callback) {
            if (callback === void 0) { callback = null; }
            // Create image
            var img = new Image();
            // Handle load
            img.onload = function () {
                // Create icon of image
                callback(ImageUtil.createThumbOfImage(img, options));
            };
            // Start loading image
            img.crossOrigin = '';
            img.src = url;
        };
        /**
         * Gets the base64 data of the specified data url
         * @param dataUrl
         */
        ImageUtil.getBase64 = function (dataUrl) {
            var indicator = 'base64,';
            var index = dataUrl.indexOf(indicator);
            if (index > 0) {
                return dataUrl.substr(index + indicator.length);
            }
            return null;
        };
        /**
         * Reads the file and returns de data as dataUrl in the callback
         * @param url
         * @param callback
         */
        ImageUtil.readFileAsDataUrl = function (file, callback) {
            // Craete file reader
            var reader = new FileReader();
            // Handle load of file
            reader.onload = function (e) {
                // Gets the data url
                var dataUrl = e.target.result;
                // Callback
                callback(dataUrl);
            };
            // Start reading file
            reader.readAsDataURL(file);
        };
        /**
         * Gets the image encoded as base64 data
         * @param image
         * @returns {string}
         */
        ImageUtil.getImageAsBase64 = function (image) {
            var canvas = document.createElement('canvas');
            canvas.width = image.width;
            canvas.height = image.height;
            var c = canvas.getContext('2d');
            c.drawImage(image, 0, 0);
            return ImageUtil.getBase64(canvas.toDataURL('image/png'));
        };
        /**
         * Gets the mimetype of the specified extension.
         * Pass extension either with or without dot at the first character.
         * @param extension
         */
        ImageUtil.mimeTypeOf = function (extension) {
            var e = String(extension).toLowerCase().trim();
            if (e.charAt(0) == '.')
                e = e.substr(1);
            switch (e) {
                case "jpg":
                    return "image/jpeg";
                case "jpeg":
                    return "image/jpeg";
                case "gif":
                    return "image/gif";
                case "webp":
                    return "image/webp";
                case "png":
                    return "image/png";
                default:
                    return "image/png";
            }
        };
        /**
         * Returns a value indicating if the specified mimetype is compressabel
         * @param mimeType
         * @returns {boolean}
         */
        ImageUtil.mimeTypeCompressable = function (mimeType) {
            var m = String(mimeType).toLocaleLowerCase();
            return m == "image/jpg" || m == "image/jpeg" || m == "image/webp";
        };
        /**
         * Returns a value indicating if the specified mimetype is compressabel
         * @param mimeType
         * @returns {boolean}
         */
        ImageUtil.mimeTypeTransparent = function (mimeType) {
            var m = String(mimeType).toLocaleLowerCase();
            return m == "image/png" || m == "image/gif";
        };
        return ImageUtil;
    }());
    latte.ImageUtil = ImageUtil;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 7/26/16.
 */
var latte;
(function (latte) {
    latte.defaultPageConfigurationFragment = {
        body: {
            name: "strings.body"
        }
    };
    /**
     * Helps manage the configuration of a page.
     */
    var PageConfiguration = (function () {
        //endregion
        //region Fields
        //endregion
        /**
         * Creates the configuration helper
         */
        function PageConfiguration(r, pack) {
            if (pack === void 0) { pack = null; }
            /**
             * Property field
             */
            this._pack = null;
            /**
             * Property field
             */
            this._page = null;
            if (pack) {
                this.pack = pack;
            }
            this.page = r;
        }
        //region Static
        /**
         * Creates an input for the setting
         * @param setting
         */
        PageConfiguration.inputFromSetting = function (setting) {
            var input = new latte.InputItem(setting.name, setting.type || 'string', setting.defaultValue);
            if (setting.options) {
                input.options = setting.options;
            }
            return input;
        };
        /**
         * Parses configuration
         * @param configuration
         */
        PageConfiguration.parseConfiguration = function (configuration) {
            var r = {};
            if (configuration) {
                try {
                    r = JSON.parse(configuration);
                }
                catch (e) {
                    r = {};
                }
            }
            return r;
        };
        /**
         * Resolves a string in configuration
         * @param s
         * @returns {any}
         */
        PageConfiguration.resolveString = function (s) {
            if (s.indexOf('strings.') === 0) {
                return strings[s.substr(8)];
            }
            return s;
        };
        //region Private Methods
        //endregion
        //region Methods
        /**
         * Raises the <c>pack</c> event
         */
        PageConfiguration.prototype.onPackChanged = function () {
            if (this._packChanged) {
                this._packChanged.raise();
            }
            this._parentConfig = {};
            this._pageConfig = {};
            this._hasParentConfiguration = false;
            if (this.pack) {
                this._hasParentConfiguration = true;
                this._parentConfig = PageConfiguration.parseConfiguration(this.pack.parentConfig);
                this._pageConfig = PageConfiguration.parseConfiguration(this.pack.config);
                this._settingsValues = {};
                for (var i in this.pack.settings) {
                    var s = this.pack.settings[i];
                    this.settingsValues[s.name] = s;
                }
            }
        };
        /**
         * Raises the <c>page</c> event
         */
        PageConfiguration.prototype.onPageChanged = function () {
            if (this._pageChanged) {
                this._pageChanged.raise();
            }
            this._pageConfig = {};
            if (this.page.configurationSetting) {
                this._pageConfig = PageConfiguration.parseConfiguration(this.page.configurationSetting.value);
            }
        };
        /**
         * Reloads the pack.
         * Use this only when you know for sure that the settings of the parent
         * or the page have changed.
         *
         * @param call
         */
        PageConfiguration.prototype.reloadPack = function (call) {
            var _this = this;
            if (call === void 0) { call = null; }
            this.page.getSettingsPack().send(function (p) {
                _this.pack = p;
                if (call) {
                    call();
                }
            });
        };
        Object.defineProperty(PageConfiguration.prototype, "packChanged", {
            /**
             * Gets an event raised when the value of the pack property changes
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._packChanged) {
                    this._packChanged = new latte.LatteEvent(this);
                }
                return this._packChanged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageConfiguration.prototype, "pageChanged", {
            /**
             * Gets an event raised when the value of the page property changes
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._pageChanged) {
                    this._pageChanged = new latte.LatteEvent(this);
                }
                return this._pageChanged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageConfiguration.prototype, "childrenMayHaveChildren", {
            //endregion
            //region Properties
            /**
             * Gets a value indicating if children of page may have children
             *
             * @returns {boolean}
             */
            get: function () {
                return !(this.pageConfig.children && this.pageConfig.children.mayHaveChildren === false);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageConfiguration.prototype, "fragments", {
            /**
             * Gets the fragments for the page, including parent page criteria
             *
             * @returns {IFragments}
             */
            get: function () {
                var parents = this.parentConfig.children && this.parentConfig.children.fragments ? this.parentConfig.children.fragments : {};
                var locals = this.pageConfig.fragments ? this.pageConfig.fragments : {};
                var all = latte._merge(parents, locals);
                return latte._empty(all) ? latte.defaultPageConfigurationFragment : all;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageConfiguration.prototype, "hasParentConfiguration", {
            /**
             * Gets a value indicating if the helper has parent configuration.
             * You should call reloadPack in order to load it.
             *
             * @returns {boolean}
             */
            get: function () {
                return !!this._hasParentConfiguration;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageConfiguration.prototype, "hasSettings", {
            /**
             * Gets a value indicating if the configuration indicates settings
             *
             * @returns {boolean}
             */
            get: function () {
                return !latte._empty(this.settings);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageConfiguration.prototype, "pack", {
            /**
             * Gets or sets the settings pack
             *
             * @returns {IPageSettingsPack}
             */
            get: function () {
                return this._pack;
            },
            /**
             * Gets or sets the settings pack
             *
             * @param {IPageSettingsPack} value
             */
            set: function (value) {
                // Check if value changed
                var changed = value !== this._pack;
                // Set value
                this._pack = value;
                // Trigger changed event
                if (changed) {
                    this.onPackChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageConfiguration.prototype, "page", {
            /**
             * Gets or sets the page of the object
             *
             * @returns {Page}
             */
            get: function () {
                return this._page;
            },
            /**
             * Gets or sets the page of the object
             *
             * @param {Page} value
             */
            set: function (value) {
                // Check if value changed
                var changed = value !== this._page;
                // Set value
                this._page = value;
                // Trigger changed event
                if (changed) {
                    this.onPageChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageConfiguration.prototype, "pageConfig", {
            /**
             * Gets the page configuration
             *
             * @returns {IPageConfiguration}
             */
            get: function () {
                return this._pageConfig;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageConfiguration.prototype, "parentConfig", {
            /**
             * Gets the parent configuration settings
             *
             * @returns {IPageConfigurationSettings}
             */
            get: function () {
                return this._parentConfig;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageConfiguration.prototype, "settings", {
            /**
             * Gets the settings for the page, including parent page criteria
             *
             * @returns {IPageConfigurationSettings}
             */
            get: function () {
                return latte._merge(this.parentConfig.children && this.parentConfig.children.settings ? this.parentConfig.children.settings : {}, this.pageConfig.settings ? this.pageConfig.settings : {});
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageConfiguration.prototype, "settingsValues", {
            /**
             * Gets the settings
             *
             * @returns {{[index: string]: Setting}}
             */
            get: function () {
                return this._settingsValues;
            },
            enumerable: true,
            configurable: true
        });
        return PageConfiguration;
    }());
    latte.PageConfiguration = PageConfiguration;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 7/26/16.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var Plugin = (function () {
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         *
         */
        function Plugin() {
        }
        //region Private Methods
        //endregion
        //region Methods
        /**
         * Raises the <c>load</c> event
         */
        Plugin.prototype.onLoad = function () {
            if (this._load) {
                this._load.raise();
            }
        };
        /**
         * Raises the <c>unload</c> event
         */
        Plugin.prototype.onUnload = function () {
            if (this._unload) {
                this._unload.raise();
            }
        };
        Object.defineProperty(Plugin.prototype, "load", {
            /**
             * Gets an event raised when the plugin is loaded
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._load) {
                    this._load = new latte.LatteEvent(this);
                }
                return this._load;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Plugin.prototype, "unload", {
            /**
             * Gets an event raised when the plugin is unloaded
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._unload) {
                    this._unload = new latte.LatteEvent(this);
                }
                return this._unload;
            },
            enumerable: true,
            configurable: true
        });
        return Plugin;
    }());
    latte.Plugin = Plugin;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 7/26/16.
 */
var latte;
(function (latte) {
    /**
     * Manages the plugins of the program
     */
    var PluginManager = (function () {
        function PluginManager() {
        }
        /**
         * Gets the list of loaded plugins
         *
         * @returns {Plugin[]}
         */
        PluginManager.getLoadedPlugins = function () {
            return PluginManager._plugins;
        };
        /**
         * Loads the specified plugin. If the plugin is already loaded, it will ignore it.
         * @param p
         */
        PluginManager.load = function (p) {
            PluginManager._plugins.push(p);
            p.onLoad();
        };
        /**
         * Unloads the specified plugin. Ignored if plugin wasn't loaded
         *
         * @param plugin
         */
        PluginManager.unload = function (plugin) {
            var r = [];
            for (var i in PluginManager._plugins) {
                var p = PluginManager._plugins[i];
                if (p == plugin) {
                    p.onUnload();
                }
                else {
                    r.push(p);
                }
            }
            PluginManager._plugins = r;
        };
        return PluginManager;
    }());
    latte.PluginManager = PluginManager;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 7/27/16.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var HtmlFragmentAdapter = (function (_super) {
        __extends(HtmlFragmentAdapter, _super);
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         *
         */
        function HtmlFragmentAdapter() {
            _super.call(this);
        }
        //region Private Methods
        //endregion
        //region Methods
        /**
         * Override
         */
        HtmlFragmentAdapter.prototype.getEditorTabs = function () {
            return [
                this.tabFormat
            ];
        };
        /**
         * Returns the items for the ribbon of the view
         * @returns {Array}
         */
        HtmlFragmentAdapter.prototype.getEditorTabItems = function () {
            return this.formatItems;
        };
        /**
         * Override. Raises the <c>createEditorItem</c> event
         */
        HtmlFragmentAdapter.prototype.onCreateEditorItem = function () {
            _super.prototype.onCreateEditorItem.call(this);
            this.editorItem = this.htmlEditor;
            this.htmlEditor.value = this.fragment.value || '';
        };
        Object.defineProperty(HtmlFragmentAdapter.prototype, "htmlEditor", {
            /**
             * Gets the html editor
             *
             * @returns {HtmlEditorItem}
             */
            get: function () {
                var _this = this;
                if (!this._htmlEditor) {
                    this._htmlEditor = new latte.HtmlEditorItem();
                    this._htmlEditor.toolbar.visible = false;
                    this._htmlEditor.focus.add(function () { return _this.onEditorFocus(); });
                    this._htmlEditor.blur.add(function () { return _this.onEditorBlur(); });
                    this._htmlEditor.addClass('html-fragment-adapter');
                    this._htmlEditor.valueChanged.add(function () {
                        _this.fragment.value = _this.htmlEditor.value;
                        _this.unsavedChanges = true;
                    });
                }
                return this._htmlEditor;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HtmlFragmentAdapter.prototype, "tabFormat", {
            /**
             * Gets the format tab
             *
             * @returns {TabItem}
             */
            get: function () {
                if (!this._tabFormat) {
                    this._tabFormat = new latte.TabItem(strings.format);
                }
                return this._tabFormat;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HtmlFragmentAdapter.prototype, "formatItems", {
            /**
             * Gets the format items
             *
             * @returns {Item[]}
             */
            get: function () {
                var _this = this;
                if (!this._formatItems) {
                    var btn = function (u, v, tooltip, cmd) {
                        var b = new latte.ButtonItem();
                        b.icon = latte.IconItem.standard(u, v);
                        b.tooltip = tooltip;
                        b.click.add(function () { return _this.htmlEditor.execCommand(cmd); });
                        b.tab = _this.tabFormat;
                        return b;
                    };
                    var sep = function () {
                        var s = new latte.SeparatorItem();
                        s.tab = _this.tabFormat;
                        return s;
                    };
                    this._formatItems = [
                        btn(5, 2, strings.bold, latte.HtmlEditorCommands.BOLD),
                        btn(6, 2, strings.italics, latte.HtmlEditorCommands.ITALIC),
                        sep(),
                        btn(8, 2, strings.alignLeft, latte.HtmlEditorCommands.JUSTIFY_LEFT),
                        btn(10, 2, strings.alignCenter, latte.HtmlEditorCommands.JUSTIFY_CENTER),
                        btn(9, 2, strings.alignRight, latte.HtmlEditorCommands.JUSTIFY_RIGHT),
                        btn(11, 2, strings.alignJustify, latte.HtmlEditorCommands.JUSTIFY_FULL),
                        sep(),
                        btn(15, 2, strings.indent, latte.HtmlEditorCommands.INDENT),
                        btn(14, 2, strings.outdent, latte.HtmlEditorCommands.OUTDENT),
                        sep(),
                        btn(18, 1, strings.numberedList, latte.HtmlEditorCommands.INSERT_ORDERED_LIST),
                        btn(19, 1, strings.bulletList, latte.HtmlEditorCommands.INSERT_UNORDERED_LIST),
                        sep(),
                        btn(16, 2, strings.eraseFormat, latte.HtmlEditorCommands.CLEAR_FORMAT),
                        sep(),
                        btn(12, 3, strings.insertLink, latte.HtmlEditorCommands.INSERT_LINK),
                        btn(9, 3, strings.insertImage, latte.HtmlEditorCommands.INSERT_IMAGE)
                    ];
                }
                return this._formatItems;
            },
            enumerable: true,
            configurable: true
        });
        return HtmlFragmentAdapter;
    }(latte.FragmentAdapter));
    latte.HtmlFragmentAdapter = HtmlFragmentAdapter;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 7/29/16.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var ImageGalleryFragmentAdapter = (function (_super) {
        __extends(ImageGalleryFragmentAdapter, _super);
        //endregion
        //region Fields
        //endregion
        /**
         *
         */
        function ImageGalleryFragmentAdapter() {
            _super.call(this);
            /**
             * Property field
             */
            this._selectedFile = null;
        }
        //region Private Methods
        /**
         * Uploads the file on the input
         */
        ImageGalleryFragmentAdapter.prototype.fileInputChanged = function () {
            var _this = this;
            if (this.fileInput.element.files.length > 0) {
                // Get file
                var f = this.fileInput.element.files[0];
                // Create uploader
                var u = new latte.FileUploader(f, 'Page', this.fragment.idpage);
                // Add File Item to show upload process
                var item_1 = new latte.FileItem();
                item_1.fileUploader = u;
                item_1.thumbCreated.add(function () { return _this.generatePresentableImage(item_1, function () { return _this.serialize(); }); });
                this.files.add(item_1);
                // Start upload
                u.upload();
            }
        };
        /**
         * Generates the presentable image of the specified file item.
         * @param item
         * @param callback
         */
        ImageGalleryFragmentAdapter.prototype.generatePresentableImage = function (item, callback) {
            item.file.createThumbChild({
                size: this.imageSize,
                fit: latte.ImageUtil.imageFitFromString(this.fragmentConfiguration['thumb-fit']) || latte.ImageFit.AspectFill
            }, ImageGalleryFragmentAdapter.PRESENTABLE_KEY, function () { return callback(); });
        };
        ImageGalleryFragmentAdapter.prototype.moveImageAfter = function () {
            if (!this.selectedFile) {
                return;
            }
            this.swapSelectedImage(true);
        };
        ImageGalleryFragmentAdapter.prototype.moveImageBefore = function () {
            if (!this.selectedFile) {
                return;
            }
            this.swapSelectedImage(false);
        };
        /**
         * Swaps the selected image with the contigous beofe (or after if the passed flag is true)
         * @param after
         */
        ImageGalleryFragmentAdapter.prototype.swapSelectedImage = function (after) {
            var _this = this;
            var index = this.files.indexOf(this.selectedFile);
            this.files.each(function (f) { return f.element.detach(); });
            var indexA = index - 1;
            var indexB = index;
            if (after) {
                indexA = index + 1;
                indexB = index;
            }
            var tmp = this.files[indexA];
            this.files[indexA] = this.selectedFile;
            this.files[indexB] = tmp;
            this.files.each(function (f) { return _this.editorItem.element.append(f.element); });
            this.updateBeforeAfterButtons();
            this.serialize();
        };
        /**
         * Removes the selected image. (Asking first)
         */
        ImageGalleryFragmentAdapter.prototype.removeSelectedImage = function () {
            var _this = this;
            if (!this.selectedFile) {
                return;
            }
            latte.DialogView.confirmDelete(this.selectedFile.file.name, function () {
                _this.files.remove(_this.selectedFile);
                _this.selectedFile = null;
                _this.serialize();
            });
        };
        /**
         * Updates the enabled property of move before and after buttons
         */
        ImageGalleryFragmentAdapter.prototype.updateBeforeAfterButtons = function () {
            var index = this.files.indexOf(this.selectedFile);
            this.btnMoveImageBefore.enabled = index > 0;
            this.btnMoveImageAfter.enabled = index < (this.files.length - 1);
        };
        ImageGalleryFragmentAdapter.prototype.viewSelectedImage = function () {
            var pic = this.selectedFile.file.getChildByKey(ImageGalleryFragmentAdapter.PRESENTABLE_KEY);
            if (pic) {
                window.open(pic.url);
            }
        };
        ImageGalleryFragmentAdapter.prototype.viewSelectedOriginal = function () {
            window.open(this.selectedFile.file.url);
        };
        //endregion
        //region Methods
        /**
         *
         */
        ImageGalleryFragmentAdapter.prototype.activateFileInput = function () {
            this.fileInput.element.click();
        };
        /**
         * Override
         */
        ImageGalleryFragmentAdapter.prototype.getEditorTabs = function () {
            var tabs = [
                this.tabGallery
            ];
            if (this.selectedFile) {
                tabs.push(this.tabImage);
            }
            return tabs;
        };
        /**
         * Returns the items for the ribbon of the view
         * @returns {Array}
         */
        ImageGalleryFragmentAdapter.prototype.getEditorTabItems = function () {
            var items = [this.btnInsertImage];
            if (this.selectedFile) {
                items = items.concat([
                    this.btnViewImage,
                    this.btnViewOriginal,
                    latte.SeparatorItem.withTab(this.tabImage),
                    this.btnMoveImageBefore,
                    this.btnMoveImageAfter,
                    latte.SeparatorItem.withTab(this.tabImage),
                    this.btnRemoveImage
                ]);
            }
            return items;
        };
        /**
         * Override. Raises the <c>createEditorItem</c> event
         */
        ImageGalleryFragmentAdapter.prototype.onCreateEditorItem = function () {
            var _this = this;
            _super.prototype.onCreateEditorItem.call(this);
            this.editorItem = new latte.Item();
            this.editorItem.addClass('gallery-fragment-editor');
            this.editorItem.element.get(0).setAttribute('tabindex', 1);
            this.editorItem.element.get(0).addEventListener('click', function () {
                _this.selectedFile = null;
            });
            this.editorItem.element.get(0).addEventListener('focus', function () { return _this.onEditorFocus(); });
            this.editorItem.element.get(0).addEventListener('blur', function () { return _this.onEditorBlur(); });
            this.editorItem.element.append(this.fileInput.element);
            this.unserialize();
        };
        /**
         * Raises the <c>selectedFile</c> event
         */
        ImageGalleryFragmentAdapter.prototype.onSelectedFileChanged = function () {
            if (this._selectedFileChanged) {
                this._selectedFileChanged.raise();
            }
            this.files.each(function (f) { return f.removeClass('selected'); });
            if (this.selectedFile) {
                this.selectedFile.addClass('selected');
                this.updateBeforeAfterButtons();
            }
            this.onTabsChanged();
        };
        /**
         * Serializes the file array into the value of the fragment
         */
        ImageGalleryFragmentAdapter.prototype.serialize = function () {
            var d = document.createElement('div');
            this.files.each(function (f) {
                // log(f.file.name)
                var thumb = f.file.getChildByKey(latte.FileItem.SYS_THUMB_KEY);
                var presentable = f.file.getChildByKey(ImageGalleryFragmentAdapter.PRESENTABLE_KEY);
                if (!thumb || !presentable)
                    return;
                var img = document.createElement('img');
                img.setAttribute('data-guid', f.file.guid);
                img.setAttribute('data-thumb-guid', thumb.guid);
                img.setAttribute('data-image-guid', presentable.guid);
                img.setAttribute('data-image-url', presentable.url);
                img.classList.add('thumb');
                img.src = thumb.url;
                d.appendChild(img);
            });
            var oldValue = this.fragment.value;
            this.fragment.value = d.innerHTML;
            this.unsavedChanges = oldValue != this.fragment.value;
            if (this.unsavedChanges) {
                latte.log("Unsaved Changes");
            }
            // log(this.fragment.value);
        };
        /**
         * Unserializes
         */
        ImageGalleryFragmentAdapter.prototype.unserialize = function () {
            var _this = this;
            var guids = [];
            // debugger;
            // log("Unserializing: " + this.fragment.value)
            var d = new latte.Element(document.createElement('div'));
            // Eval nodes
            d.element.innerHTML = this.fragment.value;
            // Scan nodes
            for (var i in d.element.childNodes) {
                var node = d.element.childNodes[i];
                if (node.nodeType == 1) {
                    var img = node;
                    var guid = img.getAttribute('data-guid');
                    if (guid) {
                        guids.push(img.getAttribute('data-guid'));
                    }
                }
            }
            // Load files
            // HACK: Loading visual cues!
            latte.File.byGuids(guids.join(',')).send(function (files) {
                var sorted = {};
                files.forEach(function (f) { return sorted[f.guid] = f; });
                guids.forEach(function (g) {
                    if (sorted[g]) {
                        _this.files.add(new latte.FileItem(sorted[g]));
                    }
                });
            });
        };
        Object.defineProperty(ImageGalleryFragmentAdapter.prototype, "selectedFileChanged", {
            /**
             * Gets an event raised when the value of the selectedFile property changes
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._selectedFileChanged) {
                    this._selectedFileChanged = new latte.LatteEvent(this);
                }
                return this._selectedFileChanged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageGalleryFragmentAdapter.prototype, "files", {
            /**
             * Gets the files of the editor
             *
             * @returns {Collection<FileItem>}
             */
            get: function () {
                var _this = this;
                if (!this._files) {
                    this._files = new latte.Collection(
                    // Added
                    // Added
                    function (f) {
                        _this.editorItem.element.append(f.element);
                        f.thumbSize = _this.thumbSize;
                        f.element.get(0).addEventListener('click', function (e) {
                            e.stopImmediatePropagation();
                            _this.selectedFile = f;
                        });
                    }, 
                    // Removed
                    // Removed
                    function (f) {
                        f.element.detach();
                    });
                }
                return this._files;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageGalleryFragmentAdapter.prototype, "imageSize", {
            /**
             * Gets the configured image size
             *
             * @returns {Size}
             */
            get: function () {
                if (!this._imageSize) {
                    this._imageSize = new latte.Size(this.fragmentConfiguration["image-width"] || ImageGalleryFragmentAdapter.defaultImageWidth, this.fragmentConfiguration["image-height"] || ImageGalleryFragmentAdapter.defaultImageHeight);
                }
                return this._imageSize;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageGalleryFragmentAdapter.prototype, "selectedFile", {
            /**
             * Gets or sets the selected file item
             *
             * @returns {FileItem}
             */
            get: function () {
                return this._selectedFile;
            },
            /**
             * Gets or sets the selected file item
             *
             * @param {FileItem} value
             */
            set: function (value) {
                // Check if value changed
                var changed = value !== this._selectedFile;
                // Set value
                this._selectedFile = value;
                // Trigger changed event
                if (changed) {
                    this.onSelectedFileChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageGalleryFragmentAdapter.prototype, "thumbSize", {
            /**
             * Gets the configured thumb size
             *
             * @returns {Size}
             */
            get: function () {
                if (!this._thumbSize) {
                    this._thumbSize = new latte.Size(this.fragmentConfiguration["thumb-width"] || ImageGalleryFragmentAdapter.defaultThumbWidth, this.fragmentConfiguration["thumb-height"] || ImageGalleryFragmentAdapter.defaultThumbHeight);
                }
                return this._thumbSize;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageGalleryFragmentAdapter.prototype, "btnInsertImage", {
            /**
             * Gets the insert image button
             *
             * @returns {ButtonItem}
             */
            get: function () {
                var _this = this;
                if (!this._btnInsertImage) {
                    this._btnInsertImage = new latte.ButtonItem(strings.insertImage, latte.IconItem.standard(8, 7, 32), function () { return _this.activateFileInput(); });
                    this._btnInsertImage.tab = this.tabGallery;
                }
                return this._btnInsertImage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageGalleryFragmentAdapter.prototype, "btnMoveImageAfter", {
            /**
             * Gets the move image after button
             *
             * @returns {ButtonItem}
             */
            get: function () {
                var _this = this;
                if (!this._btnMoveImageAfter) {
                    this._btnMoveImageAfter = new latte.ButtonItem(null, latte.Glyph.right, function () { return _this.moveImageAfter(); });
                    this._btnMoveImageAfter.tooltip = strings.moveImageAfter;
                    this._btnMoveImageAfter.tab = this.tabImage;
                }
                return this._btnMoveImageAfter;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageGalleryFragmentAdapter.prototype, "btnMoveImageBefore", {
            /**
             * Gets the move image before item
             *
             * @returns {ButtonItem}
             */
            get: function () {
                var _this = this;
                if (!this._btnMoveImageBefore) {
                    this._btnMoveImageBefore = new latte.ButtonItem(null, latte.Glyph.left, function () { return _this.moveImageBefore(); });
                    this._btnMoveImageBefore.tooltip = strings.moveImageBefore;
                    this._btnMoveImageBefore.tab = this.tabImage;
                }
                return this._btnMoveImageBefore;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageGalleryFragmentAdapter.prototype, "btnRemoveImage", {
            /**
             * Gets the remove image button
             *
             * @returns {ButtonItem}
             */
            get: function () {
                var _this = this;
                if (!this._btnRemoveImage) {
                    this._btnRemoveImage = new latte.ButtonItem(strings.deleteImage, latte.IconItem.standard(10, 6, 32), function () { return _this.removeSelectedImage(); });
                    this._btnRemoveImage.tab = this.tabImage;
                }
                return this._btnRemoveImage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageGalleryFragmentAdapter.prototype, "btnViewImage", {
            /**
             * Gets the view image button
             *
             * @returns {ButtonImage}
             */
            get: function () {
                var _this = this;
                if (!this._btnViewImage) {
                    this._btnViewImage = new latte.ButtonItem(strings.viewImage, latte.IconItem.standard(9, 3), function () { return _this.viewSelectedImage(); });
                    this._btnViewImage.tab = this.tabImage;
                }
                return this._btnViewImage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageGalleryFragmentAdapter.prototype, "btnViewOriginal", {
            /**
             * Gets the view original image button
             *
             * @returns {ButtonItem}
             */
            get: function () {
                var _this = this;
                if (!this._btnViewOriginal) {
                    this._btnViewOriginal = new latte.ButtonItem(strings.viewOriginal, latte.IconItem.standard(2, 1), function () { return _this.viewSelectedOriginal(); });
                    this._btnViewOriginal.tab = this.tabImage;
                }
                return this._btnViewOriginal;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageGalleryFragmentAdapter.prototype, "fileInput", {
            /**
             * Gets the file input
             *
             * @returns {Element<HTMLInputElement>}
             */
            get: function () {
                var _this = this;
                if (!this._fileInput) {
                    this._fileInput = new latte.Element(document.createElement('input'));
                    this._fileInput.element.type = 'file';
                    this._fileInput.addEventListener('change', function () { return _this.fileInputChanged(); });
                }
                return this._fileInput;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageGalleryFragmentAdapter.prototype, "tabGallery", {
            /**
             * Gets the gallery tab
             *
             * @returns {TabItem}
             */
            get: function () {
                if (!this._tabGallery) {
                    this._tabGallery = new latte.TabItem(strings.imageGallery);
                }
                return this._tabGallery;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageGalleryFragmentAdapter.prototype, "tabImage", {
            /**
             * Gets the image tab
             *
             * @returns {TabItem}
             */
            get: function () {
                if (!this._tabImage) {
                    this._tabImage = new latte.TabItem(strings.image);
                }
                return this._tabImage;
            },
            enumerable: true,
            configurable: true
        });
        //region Static
        ImageGalleryFragmentAdapter.PRESENTABLE_KEY = 'presentable';
        ImageGalleryFragmentAdapter.defaultThumbWidth = 200;
        ImageGalleryFragmentAdapter.defaultThumbHeight = 200;
        ImageGalleryFragmentAdapter.defaultImageWidth = 800;
        ImageGalleryFragmentAdapter.defaultImageHeight = 600;
        return ImageGalleryFragmentAdapter;
    }(latte.FragmentAdapter));
    latte.ImageGalleryFragmentAdapter = ImageGalleryFragmentAdapter;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 7/26/16.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var PlainTextFragmentAdapter = (function (_super) {
        __extends(PlainTextFragmentAdapter, _super);
        function PlainTextFragmentAdapter() {
            _super.apply(this, arguments);
            this.heightCheck = false;
        }
        //region Static
        //endregion
        //region Fields
        //endregion
        //region Private Methods
        //endregion
        //region Methods
        /**
         * Override. Raises the <c>createEditorItem</c> event
         */
        PlainTextFragmentAdapter.prototype.onCreateEditorItem = function () {
            _super.prototype.onCreateEditorItem.call(this);
            this.editorItem = new latte.Item();
            this.editorItem.element.get(0).appendChild(this.textbox.element);
            this.textbox.text = this.fragment.value;
        };
        Object.defineProperty(PlainTextFragmentAdapter.prototype, "textbox", {
            /**
             * Gets the textbox element
             *
             * @returns {Element<HTMLTextAreaElement>}
             */
            get: function () {
                var _this = this;
                if (!this._textbox) {
                    this._textbox = new latte.Element(document.createElement('textarea'));
                    this._textbox.addClass('plain-text-fragment');
                    this._textbox.element.rows = 10;
                    this._textbox.addEventListener('input', function () {
                        _this.unsavedChanges = true;
                        _this.fragment.value = _this.textbox.text;
                        if (!_this.heightCheck) {
                            var minRows = 10;
                            var rows = void 0;
                            _this._textbox.element.rows = minRows;
                            rows = Math.ceil((_this._textbox.element.scrollHeight - _this.baseScrollHeight) / 17);
                            _this._textbox.element.rows = minRows + rows;
                            _this.heightCheck = true;
                        }
                    });
                    this._textbox.addEventListener('focus', function () {
                        var savedValue = _this._textbox.text;
                        _this._textbox.text = '';
                        _this.baseScrollHeight = _this._textbox.element.scrollHeight;
                        _this._textbox.text = savedValue;
                    });
                }
                return this._textbox;
            },
            enumerable: true,
            configurable: true
        });
        return PlainTextFragmentAdapter;
    }(latte.FragmentAdapter));
    latte.PlainTextFragmentAdapter = PlainTextFragmentAdapter;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 8/1/16.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var FileItem = (function (_super) {
        __extends(FileItem, _super);
        //endregion
        //region Fields
        //endregion
        /**
         *
         */
        function FileItem(f) {
            if (f === void 0) { f = null; }
            _super.call(this);
            //endregion
            //region Properties
            /**
             * Property field
             */
            this._file = null;
            /**
             * Property field
             */
            this._fileUploader = null;
            /**
             * Property field
             */
            this._thumbSize = null;
            this.addClass('file');
            this.divBar.add(this.divName);
            this.divBar.add(this.divSize);
            this.element.append(this.divThumb.element);
            this.element.append(this.divBar.element);
            if (f) {
                this.file = f;
            }
        }
        //region Private Methods
        /**
         * Updates the thumb of the item.
         */
        FileItem.prototype.updateThumb = function () {
            var _this = this;
            var thumb = this.file.getChildByKey(FileItem.SYS_THUMB_KEY);
            if (thumb) {
                this.img.element.src = thumb.url;
            }
            else {
                this.img.element.src = this.file.url;
                // Generate thumb
                this.file.createThumbChild({
                    size: this.thumbSize || new latte.Size(FileItem.defaultThumbWidth, FileItem.defaultThumbHeight),
                    fit: latte.ImageFit.AspectFillNear
                }, FileItem.SYS_THUMB_KEY, function () {
                    _this.updateThumb();
                    _this.onThumbCreated();
                });
            }
        };
        //endregion
        //region Methods
        /**
         * Raises the <c>file</c> event
         */
        FileItem.prototype.onFileChanged = function () {
            if (this._fileChanged) {
                this._fileChanged.raise();
            }
            this.divName.text = this.divName.tooltip = this.file.name;
            this.divSize.text = this.file.humanSize;
            if (!this.file.isImage) {
                this.divExtension.text = this.file.extension.toUpperCase();
            }
            else {
                this.updateThumb();
            }
        };
        /**
         * Raises the <c>fileUploader</c> event
         */
        FileItem.prototype.onFileUploaderChanged = function () {
            var _this = this;
            if (this._fileUploaderChanged) {
                this._fileUploaderChanged.raise();
            }
            if (this.fileUploader) {
                this.divName.text = this.divName.tooltip = this.fileUploader.fileLocal.name;
                this.divSize.text = latte.File.humanSizeOf(this.fileUploader.fileLocal.size);
                this.divThumb.element.appendChild(this.progressBar.element.get(0));
                this.fileUploader.progressChanged.add(function () {
                    _this.progressBar.value = _this.fileUploader.progress * 100;
                });
                this.fileUploader.complete.add(function () {
                    _this.progressBar.visible = false;
                    _this.file = _this.fileUploader.fileRecord;
                });
            }
        };
        /**
         * Raises the <c>thumbCreated</c> event
         */
        FileItem.prototype.onThumbCreated = function () {
            if (this._thumbCreated) {
                this._thumbCreated.raise();
            }
        };
        /**
         * Raises the <c>thumbSize</c> event
         */
        FileItem.prototype.onThumbSizeChanged = function () {
            if (this._thumbSizeChanged) {
                this._thumbSizeChanged.raise();
            }
            if (this.thumbSize) {
                this.divThumb.width = this.thumbSize.width;
                this.divThumb.height = this.thumbSize.height;
            }
        };
        Object.defineProperty(FileItem.prototype, "fileChanged", {
            /**
             * Gets an event raised when the value of the file property changes
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._fileChanged) {
                    this._fileChanged = new latte.LatteEvent(this);
                }
                return this._fileChanged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileItem.prototype, "fileUploaderChanged", {
            /**
             * Gets an event raised when the value of the fileUploader property changes
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._fileUploaderChanged) {
                    this._fileUploaderChanged = new latte.LatteEvent(this);
                }
                return this._fileUploaderChanged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileItem.prototype, "thumbCreated", {
            /**
             * Gets an event raised when the system thumb has been created
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._thumbCreated) {
                    this._thumbCreated = new latte.LatteEvent(this);
                }
                return this._thumbCreated;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileItem.prototype, "thumbSizeChanged", {
            /**
             * Gets an event raised when the value of the thumbSize property changes
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._thumbSizeChanged) {
                    this._thumbSizeChanged = new latte.LatteEvent(this);
                }
                return this._thumbSizeChanged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileItem.prototype, "file", {
            /**
             * Gets or sets the latte File
             *
             * @returns {latte.File}
             */
            get: function () {
                return this._file;
            },
            /**
             * Gets or sets the latte File
             *
             * @param {latte.File} value
             */
            set: function (value) {
                // Check if value changed
                var changed = value !== this._file;
                // Set value
                this._file = value;
                // Trigger changed event
                if (changed) {
                    this.onFileChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileItem.prototype, "fileUploader", {
            /**
             * Gets or sets the file uploader for this item. After uploading the file record will be added.
             *
             * @returns {FileUploader}
             */
            get: function () {
                return this._fileUploader;
            },
            /**
             * Gets or sets the file uploader for this item. After uploading the file record will be added.
             *
             * @param {FileUploader} value
             */
            set: function (value) {
                // Check if value changed
                var changed = value !== this._fileUploader;
                // Set value
                this._fileUploader = value;
                // Trigger changed event
                if (changed) {
                    this.onFileUploaderChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileItem.prototype, "thumbSize", {
            /**
             * Gets or sets the size of the thumbnail
             *
             * @returns {Size}
             */
            get: function () {
                return this._thumbSize;
            },
            /**
             * Gets or sets the size of the thumbnail
             *
             * @param {Size} value
             */
            set: function (value) {
                // Check if value changed
                var changed = value !== this._thumbSize;
                // Set value
                this._thumbSize = value;
                // Trigger changed event
                if (changed) {
                    this.onThumbSizeChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileItem.prototype, "divBar", {
            /**
             * Gets the info bar element
             *
             * @returns {Element<HTMLDivElement>}
             */
            get: function () {
                if (!this._divBar) {
                    this._divBar = new latte.Element(document.createElement('div'));
                    this._divBar.addClass('info');
                }
                return this._divBar;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileItem.prototype, "divExtension", {
            /**
             * Gets the extension div
             *
             * @returns {Element<HTMLDivElement>}
             */
            get: function () {
                if (!this._divExtension) {
                    this._divExtension = new latte.Element(document.createElement('div'));
                    this._divExtension.appendTo(this.divThumb.element);
                    this._divExtension.addClass('extension');
                }
                return this._divExtension;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileItem.prototype, "divName", {
            /**
             * Gets the name element
             *
             * @returns {Element<HTMLDivElement>}
             */
            get: function () {
                if (!this._divName) {
                    this._divName = new latte.Element(document.createElement('div'));
                    this._divName.addClass('name');
                }
                return this._divName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileItem.prototype, "divSize", {
            /**
             * Gets the size element
             *
             * @returns {Element<HTMLDivElement>}
             */
            get: function () {
                if (!this._divSize) {
                    this._divSize = new latte.Element(document.createElement('div'));
                    this._divSize.addClass('size');
                }
                return this._divSize;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileItem.prototype, "divThumb", {
            /**
             * Gets the thumb of the item
             *
             * @returns {Element<HTMLDivElement>}
             */
            get: function () {
                if (!this._divThumb) {
                    this._divThumb = new latte.Element(document.createElement('div'));
                    this._divThumb.addClass('thumb');
                }
                return this._divThumb;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileItem.prototype, "img", {
            /**
             * Gets the image of the thumb
             *
             * @returns {Element<HTMLDivElement>}
             */
            get: function () {
                if (!this._img) {
                    this._img = new latte.Element(document.createElement('img'));
                    this.divThumb.add(this._img);
                }
                return this._img;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileItem.prototype, "progressBar", {
            /**
             * Gets the progress item
             *
             * @returns {ProgressItem}
             */
            get: function () {
                if (!this._progressBar) {
                    this._progressBar = new latte.ProgressItem();
                    this._progressBar.maxValue = 100;
                    this._progressBar.animated = false;
                }
                return this._progressBar;
            },
            enumerable: true,
            configurable: true
        });
        //region Static
        FileItem.SYS_THUMB_KEY = 'sys-thumb';
        FileItem.defaultThumbWidth = 200;
        FileItem.defaultThumbHeight = 200;
        return FileItem;
    }(latte.Item));
    latte.FileItem = FileItem;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 7/26/16.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var FragmentExpandoItem = (function (_super) {
        __extends(FragmentExpandoItem, _super);
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         *
         */
        function FragmentExpandoItem() {
            _super.call(this);
            //endregion
            //region Properties
            /**
             * Property field
             */
            this._expanded = true;
            /**
             * Property field
             */
            this._fragmentItem = null;
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
        FragmentExpandoItem.prototype.onFragmentItemChanged = function () {
            if (this._fragmentItemChanged) {
                this._fragmentItemChanged.raise();
            }
            // Remove items
            while (this.items.length > 1) {
                this.items.remove(this.items[1]);
            }
            // Add current item
            this.items.add(this.fragmentItem);
        };
        /**
         * Raises the <c>expanded</c> event
         */
        FragmentExpandoItem.prototype.onExpandedChanged = function () {
            if (this._expandedChanged) {
                this._expandedChanged.raise();
            }
            if (this.items.length > 1) {
                this.items[1].visible = this.expanded;
            }
            if (this.expanded) {
                this.btnFold.icon = latte.Glyph.collapseRibbon;
            }
            else {
                this.btnFold.icon = latte.Glyph.expandWidget;
            }
        };
        Object.defineProperty(FragmentExpandoItem.prototype, "expandedChanged", {
            /**
             * Gets an event raised when the value of the expanded property changes
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._expandedChanged) {
                    this._expandedChanged = new latte.LatteEvent(this);
                }
                return this._expandedChanged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FragmentExpandoItem.prototype, "fragmentItemChanged", {
            /**
             * Gets an event raised when the value of the fragmentItem property changes
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._fragmentItemChanged) {
                    this._fragmentItemChanged = new latte.LatteEvent(this);
                }
                return this._fragmentItemChanged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FragmentExpandoItem.prototype, "expanded", {
            /**
             * Gets or sets a value indicating if the expando is expanded
             *
             * @returns {boolean}
             */
            get: function () {
                return this._expanded;
            },
            /**
             * Gets or sets a value indicating if the expando is expanded
             *
             * @param {boolean} value
             */
            set: function (value) {
                // Check if value changed
                var changed = value !== this._expanded;
                // Set value
                this._expanded = value;
                // Trigger changed event
                if (changed) {
                    this.onExpandedChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FragmentExpandoItem.prototype, "fragmentItem", {
            /**
             * Gets or sets the fragment item of the expando
             *
             * @returns {Item}
             */
            get: function () {
                return this._fragmentItem;
            },
            /**
             * Gets or sets the fragment item of the expando
             *
             * @param {Item} value
             */
            set: function (value) {
                // Check if value changed
                var changed = value !== this._fragmentItem;
                // Set value
                this._fragmentItem = value;
                // Trigger changed event
                if (changed) {
                    this.onFragmentItemChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FragmentExpandoItem.prototype, "title", {
            /**
             * Gets or sets the title of the expando
             *
             * @returns {string}
             */
            get: function () {
                return this.lblTitle.text;
            },
            /**
             * Gets or sets the title of the expando
             *
             * @param {string} value
             */
            set: function (value) {
                this.lblTitle.text = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FragmentExpandoItem.prototype, "btnFold", {
            /**
             * Gets the fold button
             *
             * @returns {ButtonItem}
             */
            get: function () {
                var _this = this;
                if (!this._btnFold) {
                    this._btnFold = new latte.ButtonItem(null, latte.Glyph.collapseRibbon, function () { return _this.expanded = !_this.expanded; });
                }
                return this._btnFold;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FragmentExpandoItem.prototype, "lblTitle", {
            /**
             * Gets the title label
             *
             * @returns {LabelItem}
             */
            get: function () {
                if (!this._lblTitle) {
                    this._lblTitle = new latte.LabelItem();
                    this._lblTitle.addClass('expando-title');
                }
                return this._lblTitle;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FragmentExpandoItem.prototype, "toolbar", {
            /**
             * Gets the toolbar of the expando
             *
             * @returns {Toolbar}
             */
            get: function () {
                if (!this._toolbar) {
                    this._toolbar = new latte.Toolbar();
                }
                return this._toolbar;
            },
            enumerable: true,
            configurable: true
        });
        return FragmentExpandoItem;
    }(latte.ItemStack));
    latte.FragmentExpandoItem = FragmentExpandoItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    /**
     * File Record
     **/
    var File = (function (_super) {
        __extends(File, _super);
        //endregion
        /**
         *
         **/
        function File() {
            _super.call(this);
        }
        //region Static
        /**
         * Gets an array of files belonging to the specified record
         **/
        File.byRecord = function (record, callback) {
            if (!(record instanceof latte.DataRecord))
                throw new latte.InvalidArgumentEx('record');
            if (!latte._isFunction(callback))
                throw new latte.InvalidArgumentEx('callback');
            return latte.fileBase.byOwner(record.recordType, record.recordId)
                .send(function (data) {
                var object = data;
                callback.call(this, object);
            });
        };
        /**
         * Gets the extension of the file
         * @param ext
         * @returns {string}
         */
        File.extensionOf = function (ext) {
            var point = ext.lastIndexOf('.');
            if (point < 0)
                return '';
            return ext.substr(point + 1).toLowerCase();
        };
        /**
         * Returns a value indicating if the extension is an image extension
         * @param e
         * @returns {boolean}
         */
        File.isImageExtension = function (e) {
            return e == 'jpg' || e == 'jpeg' || e == 'gif' || e == 'png' || e == 'tiff' || e == 'bmp';
        };
        /**
         * Gets the name of the file without extension
         * @param fileName
         */
        File.nameWithoutExtensionOf = function (fileName) {
            var ext = File.extensionOf(fileName);
            if (ext.length == 0) {
                return fileName;
            }
            else {
                var index = fileName.lastIndexOf('.');
                return fileName.substr(0, index);
            }
        };
        /**
         * Makes a single upload of a file with the specified record as owner
         *
         * @param owner
         * @param idOwner
         * @param callback
         */
        File.singleUpload = function (owner, idOwner, callback) {
            if (callback === void 0) { callback = null; }
            var f = $('<input type=file>').appendTo('body').change(function () {
                var input = f.get(0);
                var files = input.files;
                var loader = new latte.Loader(latte.sprintf(strings.uploadingS, '0%'));
                loader.progress.visible = true;
                loader.progress.maxValue = 100;
                if (!files || !files.length) {
                    return;
                }
                var uploader = new latte.FileUploader(files[0], owner, idOwner);
                uploader.complete.add(function () {
                    loader.progress.visible = false;
                    loader.text = strings.loading;
                    loader.stop();
                    f.remove();
                    if (callback) {
                        callback(uploader.fileRecord);
                    }
                });
                uploader.progressChanged.add(function (value) {
                    loader.progress.value = value * 100;
                    loader.text = latte.sprintf(strings.uploadingS, Math.round(value * 100) + '%');
                });
                uploader.upload();
            });
            f.trigger('click');
        };
        /**
         * Gets the human size of specified amount of bytes
         * @param size
         * @returns {string}
         */
        File.humanSizeOf = function (size) {
            if (size === void 0) { size = 0; }
            var bytes = size;
            var kilobyte = 1024;
            var megabyte = kilobyte * 1024;
            var gigabyte = megabyte * 1024;
            var terabyte = gigabyte * 1024;
            if ((bytes >= 0) && (bytes < kilobyte)) {
                return bytes + ' B';
            }
            else if ((bytes >= kilobyte) && (bytes < megabyte)) {
                return (bytes / kilobyte).toFixed(0) + ' KB';
            }
            else if ((bytes >= megabyte) && (bytes < gigabyte)) {
                return (bytes / megabyte).toFixed(1) + ' MB';
            }
            else if ((bytes >= gigabyte) && (bytes < terabyte)) {
                return (bytes / gigabyte).toFixed(2) + 'GB';
            }
            else if (bytes >= terabyte) {
                return (bytes / gigabyte).toFixed(2) + ' TB';
            }
            else {
                return bytes + ' B';
            }
        };
        /**
         * Gets an URL for the specified path, by using the default bucket
         **/
        File.urlOfPath = function (path) {
            var p = document.location.protocol == 'https:' ? 'https://' : 'http://';
            return p + 'goplek-net' + ".s3.amazonaws.com/" + path;
        };
        //region Methods
        /**
         * Creates a thumb that fits on the specified size
         *
         * @param width
         * @param height
         * @param description
         * @param callback
         */
        File.prototype.createThumbChild = function (options, key, callback) {
            var _this = this;
            if (callback === void 0) { callback = null; }
            var type = latte.ImageUtil.mimeTypeOf(this.extension);
            // Generate actual thumb
            latte.ImageUtil.createThumbOfUrl(this.url, options, function (data) {
                var img = document.createElement('img');
                img.addEventListener('load', function () {
                    var fu = latte.FileUploader.fromBase64(latte.ImageUtil.getBase64(data), _this.name, "File", _this.idfile);
                    fu.complete.add(function () {
                        // File uploaded!
                        _this.children.push(fu.fileRecord);
                        // Free memory
                        img = null;
                        if (latte._isFunction(callback)) {
                            callback(fu.fileRecord);
                        }
                    });
                    fu.key = key;
                    fu.width = img.width;
                    fu.height = img.height;
                    fu.idparent = _this.idfile;
                    // Upload file
                    fu.upload();
                });
                img.src = data;
            });
        };
        /**
         * Searches for the child of the specified description. Returns null if not found.
         * @param key
         * @returns {any}
         */
        File.prototype.getChildByKey = function (key) {
            if (!latte._isArray(this.children))
                return null;
            for (var i = 0; i < this.children.length; i++) {
                if (this.children[i].key == key)
                    return this.children[i];
            }
            return null;
        };
        /**
         * Override.
         */
        File.prototype.getMetadata = function () {
            return {
                fields: {
                    name: {
                        text: strings.name
                    },
                    size: {
                        text: strings.fileSize
                    },
                    path: {
                        text: strings.path
                    },
                    uploaded: {
                        text: strings.created
                    }
                }
            };
        };
        Object.defineProperty(File.prototype, "canManipulate", {
            //endregion
            //region Properties
            /**
             * Gets a value indicating if the file can be manipulated
             **/
            get: function () {
                // HACK: Wuts up with dis?
                return true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(File.prototype, "extension", {
            /**
             * Gets the extension of the file, without the dot.
             The extension is returned always as a lowercase string.
             If the file has no name set, null will be returned. If the name has no extension,
             empty string will be returned.
             **/
            get: function () {
                var ext = this.name;
                if (!latte._isString(ext))
                    return null;
                var point = ext.lastIndexOf('.');
                if (point < 0)
                    return '';
                return ext.substr(point + 1).toLowerCase();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(File.prototype, "humanSize", {
            /**
             * Gets the human size of the file
             **/
            get: function () {
                return File.humanSizeOf(this.size);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(File.prototype, "isImage", {
            /**
             * Gets a value indicating if the file is an image
             **/
            get: function () {
                return File.isImageExtension(this.extension);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(File.prototype, "url", {
            /**
             * Gets the url for downloading the file
             **/
            get: function () {
                if (this.bucket) {
                    var p = document.location.protocol == 'https:' ? 'https://' : 'http://';
                    return p + this.bucket + ".s3.amazonaws.com/" + this.path;
                }
                else {
                    return '/' + this.path;
                }
            },
            enumerable: true,
            configurable: true
        });
        return File;
    }(latte.fileBase));
    latte.File = File;
})(latte || (latte = {}));
/**
 * Generated by xlatte
 */
var latte;
(function (latte) {
    /**
     * Record for table fragment
     */
    var Fragment = (function (_super) {
        __extends(Fragment, _super);
        function Fragment() {
            _super.apply(this, arguments);
        }
        return Fragment;
    }(latte.fragmentBase));
    latte.Fragment = Fragment;
})(latte || (latte = {}));
/**
 * Generated by xlatte
 */
var latte;
(function (latte) {
    /**
     * Record for table group
     */
    var Group = (function (_super) {
        __extends(Group, _super);
        function Group() {
            _super.apply(this, arguments);
        }
        //region Static
        /**
         * Gets the suggestion loader
         * @returns {*}
         */
        Group.suggestionLoader = function () {
            var _this = this;
            return function (d, callback) {
                return Group.search(d.text).send(function (records) {
                    var items = [];
                    records.forEach(function (g) {
                        var b = new latte.ButtonItem(g.name);
                        b.click.add(function () { d.record = g; });
                        items.push(b);
                    });
                    callback.call(_this, items);
                });
            };
        };
        //endregion
        //region Fields
        //endregion
        //region Private Methods
        //endregion
        //region Methods
        /**
         * Gets the metadata about the record
         *
         * @returns Object
         */
        Group.prototype.getMetadata = function () {
            return {
                fields: {
                    name: {
                        text: strings.name,
                        type: 'string'
                    }
                }
            };
        };
        /**
         * Returns a string representation of the object
         */
        Group.prototype.toString = function () {
            return this.name;
        };
        return Group;
    }(latte.groupBase));
    latte.Group = Group;
})(latte || (latte = {}));
/**
 * Generated by xlatte
 */
var latte;
(function (latte) {
    /**
     * Record for table group_user
     */
    var GroupUser = (function (_super) {
        __extends(GroupUser, _super);
        function GroupUser() {
            _super.apply(this, arguments);
            //endregion
            //region Events
            //endregion
            //region Properties
            /**
             * Property field
             */
            this._user = null;
        }
        //region Static
        //endregion
        //region Fields
        //endregion
        //region Private Methods
        //endregion
        //region Methods
        /**
         * Gets the metadata about the record
         *
         * @returns Object
         */
        GroupUser.prototype.getMetadata = function () {
            return {
                fields: {
                    idgroup: {
                        text: strings.group,
                        type: 'record',
                        recordType: 'Group',
                        loaderFunction: latte.Group.suggestionLoader()
                    },
                    iduser: {
                        text: strings.user,
                        type: 'record',
                        recordType: 'User',
                        loaderFunction: latte.User.suggestionLoader()
                    }
                }
            };
        };
        Object.defineProperty(GroupUser.prototype, "user", {
            /**
             * Gets or sets the user of the relationship
             *
             * @returns {User}
             */
            get: function () {
                return this._user;
            },
            /**
             * Gets or sets the user of the relationship
             *
             * @param {User} value
             */
            set: function (value) {
                this._user = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GroupUser.prototype, "userName", {
            /**
             * Gets the users name
             *
             * @returns {string}
             */
            get: function () {
                return (this.user || new latte.User()).toString();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GroupUser.prototype, "userAttributes", {
            /**
             * Gets the user attributes string
             *
             * @returns {string}
             */
            get: function () {
                return (this.user || new latte.User()).attributes;
            },
            enumerable: true,
            configurable: true
        });
        return GroupUser;
    }(latte.groupUserBase));
    latte.GroupUser = GroupUser;
})(latte || (latte = {}));
/**
 * Generated by xlatte
 */
var latte;
(function (latte) {
    /**
     * Record for table page
     */
    var Page = (function (_super) {
        __extends(Page, _super);
        function Page() {
            _super.apply(this, arguments);
            /**
             * Property field
             */
            this._configurationSetting = null;
        }
        //endregion
        //region Fields
        //endregion
        //region  Methods
        /**
         * Returns a boolean indicating if the user has the specified permission for the page
         * @param permission
         */
        Page.prototype.canI = function (permission) {
            if (latte.User.me.isRoot) {
                return true;
            }
            var owner = (this.powner & permission) == permission;
            var group = (this.pgroup & permission) == permission;
            var other = (this.pother & permission) == permission;
            var can = false;
            if (other) {
                return true;
            }
            if (owner || group) {
                can = owner && this.iduser == latte.User.me.iduser;
                if (!can && latte.User.me.inGroup(this.idgroup)) {
                    can = true;
                }
            }
            return can;
        };
        /**
         * Gets the metadata about the record
         *
         * @returns Object
         */
        Page.prototype.getMetadata = function () {
            return {
                fields: {
                    idparent: {
                        visible: false
                    },
                    guid: {
                        text: strings.guid,
                        type: 'string',
                        readOnly: true,
                        visible: 'if-inserted'
                    },
                    online: {
                        text: strings.online,
                        type: 'switch',
                        visible: 'if-inserted'
                    },
                    title: {
                        text: strings.title,
                        type: 'string'
                    },
                    description: {
                        text: strings.description,
                        type: 'string'
                    },
                    key: {
                        text: strings.pageKey,
                        type: 'string'
                    },
                    template: {
                        category: 'advanced',
                        text: strings.template,
                        type: 'string',
                        visible: 'if-inserted'
                    },
                    trash: {
                        text: strings.inTrash,
                        type: 'boolean',
                        visible: false
                    },
                    created: {
                        category: 'advanced',
                        text: strings.created,
                        type: 'string',
                        readOnly: true,
                        visible: 'if-inserted'
                    },
                    modified: {
                        category: 'advanced',
                        text: strings.modified,
                        type: 'string',
                        readOnly: true,
                        visible: 'if-inserted'
                    },
                    sort: {
                        category: 'advanced',
                        text: strings.pageSort,
                        type: 'combo',
                        defaultValue: 'created-asc',
                        options: {
                            'created-asc': strings.pageSortCreatedAsc,
                            'created-desc': strings.pageSortCreatedDesc,
                            'modified-asc': strings.pageSortModifiedAsc,
                            'modified-desc': strings.pageSortModifiedDesc,
                            'title-asc': strings.pageSortTitleAsc,
                            'title-desc': strings.pageSortTitleDesc,
                            'custom': strings.pageSortCustom,
                        },
                        visible: 'if-inserted'
                    },
                    order: {
                        category: 'advanced',
                        text: strings.pageSortIndex,
                        type: 'number',
                        visible: this.sort == 'custom'
                    },
                    idgroup: {
                        category: 'advanced',
                        text: strings.group,
                        type: 'record',
                        recordType: 'Group',
                        loaderFunction: latte.Group.suggestionLoader(),
                        visible: 'if-inserted'
                    },
                    iduser: {
                        category: 'advanced',
                        text: strings.user,
                        type: 'record',
                        recordType: 'User',
                        loaderFunction: latte.User.suggestionLoader(),
                        visible: 'if-inserted'
                    },
                    powner: {
                        category: 'advanced',
                        text: strings.owner,
                        type: 'flags',
                        options: {
                            1: strings.readPermission,
                            2: strings.writePermission,
                            4: strings.removePermission,
                            8: strings.insertChildPermission,
                            16: strings.readChildrenPermission
                        },
                        visible: 'if-inserted'
                    },
                    pgroup: {
                        category: 'advanced',
                        text: strings.group,
                        type: 'flags',
                        options: {
                            1: strings.readPermission,
                            2: strings.writePermission,
                            4: strings.removePermission,
                            8: strings.insertChildPermission,
                            16: strings.readChildrenPermission
                        },
                        visible: 'if-inserted'
                    },
                    pother: {
                        category: 'advanced',
                        text: strings.permissionsOther,
                        type: 'flags',
                        options: {
                            1: strings.readPermission,
                            2: strings.writePermission,
                            4: strings.removePermission,
                            8: strings.insertChildPermission,
                            16: strings.readChildrenPermission
                        },
                        visible: 'if-inserted'
                    },
                    pworld: {
                        category: 'advanced',
                        text: strings.permissionsWorld,
                        type: 'flags',
                        options: {
                            1: strings.readPermission,
                            16: strings.readChildrenPermission
                        },
                        defaultValue: 17,
                        visible: 'if-inserted'
                    }
                }
            };
        };
        /**
         * Override.
         * @param form
         */
        Page.prototype.onFormCreated = function (form) {
            // Change color of iduser
            // form.byName('guid').visible = this.inserted();
            // form.byName('created').visible = this.inserted();
            // form.byName('modified').visible = this.inserted();
            var _this = this;
            var sw = form.byName('online');
            // debugger;
            if (sw) {
                sw.valueChanged.add(function () {
                    if (sw.value) {
                        if (_this.isMineAndCantWrite) {
                            var d = latte.DialogView.ask(strings.areYouSureSetPageOnline, strings.areYouSureSetPageOnlineDesc, [
                                new latte.ButtonItem(strings.yesMakeOnline, null, function () {
                                    _this.setOnline(true).send(function () {
                                        _this.online = 1;
                                        _this.onOnlineSwitched();
                                        latte.log("Has been set online.");
                                    });
                                }),
                                new latte.ButtonItem(strings.cancel, null, function () {
                                    sw.value = false;
                                })
                            ]);
                            d.closeButton.visible = false;
                        }
                    }
                });
            }
        };
        /**
         * Raises the <c>onlineSwitched</c> event
         */
        Page.prototype.onOnlineSwitched = function () {
            if (this._onlineSwitched) {
                this._onlineSwitched.raise();
            }
        };
        Object.defineProperty(Page.prototype, "onlineSwitched", {
            /**
             * Gets an event raised when the online attribute has been switched
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._onlineSwitched) {
                    this._onlineSwitched = new latte.LatteEvent(this);
                }
                return this._onlineSwitched;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Page.prototype, "canIDelete", {
            //endregion
            //region Properties
            /**
             * Gets a value indicating if user has WRITE permission
             *
             * @returns {boolean}
             */
            get: function () {
                return this.canI(Page.PERMISSION_DELETE);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Page.prototype, "canIInsertChild", {
            /**
             * Gets a value indicating if user has INSERT_CHILD permission
             *
             * @returns {boolean}
             */
            get: function () {
                return this.canI(Page.PERMISSION_INSERT_CHILD);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Page.prototype, "canIRead", {
            /**
             * Gets a value indicating if user has READ permission
             *
             * @returns {boolean}
             */
            get: function () {
                return this.canI(Page.PERMISSION_READ);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Page.prototype, "canIReadChildren", {
            /**
             * Gets a value indicating if the user has READ_CHILDREN permission
             *
             * @returns {boolean}
             */
            get: function () {
                return this.canI(Page.PERMISSION_READ_CHILDREN);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Page.prototype, "canIWrite", {
            /**
             * Gets a value indicating if user has WRITE permission
             *
             * @returns {boolean}
             */
            get: function () {
                return this.canI(Page.PERMISSION_WRITE) || (this.isMine && !this.isOnline);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Page.prototype, "configurationSetting", {
            /**
             * Gets or sets the configuration of the page
             *
             * @returns {Setting}
             */
            get: function () {
                return this._configurationSetting;
            },
            /**
             * Gets or sets the configuration of the page
             *
             * @param {Setting} value
             */
            set: function (value) {
                this._configurationSetting = value;
                this._configuration = null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Page.prototype, "configuration", {
            /**
             * Gets the configuration helper for the page
             *
             * @returns {PageConfiguration}
             */
            get: function () {
                if (!this._configuration) {
                    this._configuration = new latte.PageConfiguration(this);
                }
                return this._configuration;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Page.prototype, "isMine", {
            /**
             * Gets a value indicating if the page belongs to the logged user
             *
             * @returns {boolean}
             */
            get: function () {
                return this.iduser == latte.User.me.iduser;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Page.prototype, "isMineAndCantWrite", {
            /**
             * Gets a value indicating if the user owns the page and has not write permissions
             *
             * @returns {boolean}
             */
            get: function () {
                return !this.canI(Page.PERMISSION_WRITE) && this.isMine;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Page.prototype, "isOnline", {
            /**
             * Gets a value indicating if the page is currently online
             *
             * @returns {boolean}
             */
            get: function () {
                return parseInt(this.online) > 0;
            },
            enumerable: true,
            configurable: true
        });
        //region Static
        /**
         * Allows the user to see the page and access the fragments of the page.
         * @type {number}
         */
        Page.PERMISSION_READ = 1;
        /**
         * Allows the user to modify the page after it becomes online.
         * @type {number}
         */
        Page.PERMISSION_WRITE = 2;
        /**
         * Allows the user to delete the page.
         * @type {number}
         */
        Page.PERMISSION_DELETE = 4;
        /**
         * Allows the user to insert new children to the page.
         * @type {number}
         */
        Page.PERMISSION_INSERT_CHILD = 8;
        /**
         * Allows the user to read children of the page. User gets to know the children he owns.
         * @type {number}
         */
        Page.PERMISSION_READ_CHILDREN = 16;
        return Page;
    }(latte.pageBase));
    latte.Page = Page;
})(latte || (latte = {}));
/**
 * Generated by xlatte
 */
var latte;
(function (latte) {
    /**
     * Record for table setting
     */
    var Setting = (function (_super) {
        __extends(Setting, _super);
        function Setting() {
            _super.apply(this, arguments);
        }
        return Setting;
    }(latte.settingBase));
    latte.Setting = Setting;
})(latte || (latte = {}));
/**
 * Generated by xlatte
 */
var latte;
(function (latte) {
    /**
     * Record for table user
     */
    var User = (function (_super) {
        __extends(User, _super);
        function User() {
            _super.apply(this, arguments);
        }
        /**
         * Gets the suggestion loader
         * @returns {*}
         */
        User.suggestionLoader = function () {
            var _this = this;
            return function (d, callback) {
                return User.search(d.text).send(function (users) {
                    var items = [];
                    users.forEach(function (u) {
                        var b = new latte.ButtonItem(u.uname);
                        b.click.add(function () { d.record = u; });
                        items.push(b);
                    });
                    callback.call(_this, items);
                });
            };
        };
        //endregion
        //region Fields
        //endregion
        //region Methods
        /**
         * Gets the metadata about the record
         *
         * @returns Object
         */
        User.prototype.getMetadata = function () {
            return {
                fields: {
                    uname: {
                        text: strings.userName,
                        type: 'string'
                    },
                    password: {
                        text: strings.password,
                        type: 'password',
                        visible: 'if-not-inserted'
                    },
                    flags: {
                        text: strings.flags,
                        type: 'flags',
                        options: {
                            1: strings.isRoot,
                            2: strings.isSysAdmin,
                            4: strings.isBanned,
                            8: strings.inTrash
                        }
                    }
                }
            };
        };
        /**
         * Returns a value indicating if the user belongs to the specified group
         * @param idgroup
         * @returns {boolean}
         */
        User.prototype.inGroup = function (idgroup) {
            if (this.groups && this.groups.length) {
                for (var i in this.groups) {
                    if (this.groups[i].idgroup == idgroup) {
                        return true;
                    }
                }
            }
            return false;
        };
        /**
         * Returns a string representation of the object
         */
        User.prototype.toString = function () {
            return this.uname;
        };
        Object.defineProperty(User.prototype, "attributes", {
            //endregion
            //region Events
            //endregion
            //region Properties
            /**
             * Gets a string with attributes of the record
             *
             * @returns {string}
             */
            get: function () {
                // TODO: Give info like "is root", "is banned" etc
                var arr = [];
                if (this.isRoot) {
                    arr.push(strings.isRoot);
                }
                if (this.isBanned) {
                    arr.push(strings.isBanned);
                }
                if (this.isTrash) {
                    arr.push(strings.inTrash);
                }
                return arr.join(", ");
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(User.prototype, "flagsString", {
            /**
             * Gets the flags as a string
             *
             * @returns {string}
             */
            get: function () {
                return latte.InputItem.format(this.flags, 'flags', this.getMetadata().fields['flags'].options);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(User.prototype, "groups", {
            /**
             * Gets or sets the groups of the record
             *
             * @returns {Group[]}
             */
            get: function () {
                return this._groups;
            },
            /**
             * Gets or sets the groups of the record
             *
             * @param {Group[]} value
             */
            set: function (value) {
                this._groups = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(User.prototype, "isBanned", {
            /**
             * Gets a value indicating if the user is banned
             *
             * @returns {boolean}
             */
            get: function () {
                return (this.flags & User.FLAG_BANNED_USER) == User.FLAG_BANNED_USER;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(User.prototype, "isRoot", {
            /**
             * Gets a value indicating if user is root
             *
             * @returns {boolean}
             */
            get: function () {
                return (this.flags & User.FLAG_ROOT_USER) == User.FLAG_ROOT_USER;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(User.prototype, "isSysAdmin", {
            /**
             * Gets a value indicating if user is sys-admin
             *
             * @returns {boolean}
             */
            get: function () {
                return (this.flags & User.FLAG_SYS_ADMIN) == User.FLAG_SYS_ADMIN;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(User.prototype, "isTrash", {
            /**
             * Gets a value indicating if the user is trash
             *
             * @returns {boolean}
             */
            get: function () {
                return (this.flags & User.FLAG_TRASH) == User.FLAG_TRASH;
            },
            enumerable: true,
            configurable: true
        });
        //region Static
        User.FLAG_ROOT_USER = 1;
        User.FLAG_SYS_ADMIN = 2;
        User.FLAG_BANNED_USER = 4;
        User.FLAG_TRASH = 8;
        User.me = null;
        return User;
    }(latte.userBase));
    latte.User = User;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 7/14/16.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var CmsExplorer = (function (_super) {
        __extends(CmsExplorer, _super);
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         *
         */
        function CmsExplorer() {
            _super.call(this);
            this.addClass('cms-explorer');
            this.addRootItem(new latte.PagesExplorer());
            if (latte.User.me.isRoot) {
                this.addRootItem(new latte.UsersExplorer());
                this.addRootItem(new latte.GroupsExplorer());
            }
        }
        return CmsExplorer;
    }(latte.ExplorerView));
    latte.CmsExplorer = CmsExplorer;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 8/11/16.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var CmsMainView = (function (_super) {
        __extends(CmsMainView, _super);
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         *
         */
        function CmsMainView() {
            _super.call(this);
            this.addClass('cms-main-view');
        }
        //region Private Methods
        //endregion
        //region Methods
        /**
         * Override.
         */
        CmsMainView.prototype.onLoad = function () {
            _super.prototype.onLoad.call(this);
            this.element.append(this.topBar.element);
            this.topBar.add(this.logo);
            this.topBar.add(this.logout);
            this.view = this.explorer;
        };
        Object.defineProperty(CmsMainView.prototype, "explorer", {
            /**
             * Gets the explorer
             *
             * @returns {CmsExplorer}
             */
            get: function () {
                if (!this._explorer) {
                    this._explorer = new latte.CmsExplorer();
                }
                return this._explorer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CmsMainView.prototype, "topBar", {
            /**
             * Gets the top bar
             *
             * @returns {Element<HTMLDivElement>}
             */
            get: function () {
                if (!this._topBar) {
                    this._topBar = new latte.Element(document.createElement('div'));
                    this._topBar.addClass('top-bar');
                }
                return this._topBar;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CmsMainView.prototype, "logo", {
            /**
             * Gets the logo element
             *
             * @returns {Element<HTMLDivElement>}
             */
            get: function () {
                if (!this._logo) {
                    this._logo = new latte.Element(document.createElement('div'));
                    this._logo.addClass('logo');
                }
                return this._logo;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CmsMainView.prototype, "logout", {
            /**
             * Gets the logout element
             *
             * @returns {Element<HTMLDivElement>}
             */
            get: function () {
                if (!this._logout) {
                    this._logout = new latte.Element(document.createElement('div'));
                    this._logout.text = latte.sprintf('(%s) %s', latte.User.me.uname, strings.signOut);
                    this._logout.addClass('logout');
                    this._logout.addEventListener('click', function () { return latte.Main.logOut(); });
                }
                return this._logout;
            },
            enumerable: true,
            configurable: true
        });
        return CmsMainView;
    }(latte.View));
    latte.CmsMainView = CmsMainView;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 8/7/16.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var PageAdvancedView = (function (_super) {
        __extends(PageAdvancedView, _super);
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         *
         */
        function PageAdvancedView(r) {
            if (r === void 0) { r = null; }
            _super.call(this);
            //endregion
            //region Properties
            /**
             * Property field
             */
            this._page = null;
            if (r) {
                this.page = r;
            }
        }
        //region Private Methods
        //endregion
        //region Methods
        /**
         * Override
         */
        PageAdvancedView.prototype.onLoad = function () {
            this.items.add(this.form);
        };
        /**
         * Raises the <c>page</c> event
         */
        PageAdvancedView.prototype.onPageChanged = function () {
            if (this._pageChanged) {
                this._pageChanged.raise();
            }
            this.form.record = this.page;
            this.form.readOnly = !this.page.canI(latte.Page.PERMISSION_WRITE);
        };
        Object.defineProperty(PageAdvancedView.prototype, "pageChanged", {
            /**
             * Gets an event raised when the value of the page property changes
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._pageChanged) {
                    this._pageChanged = new latte.LatteEvent(this);
                }
                return this._pageChanged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageAdvancedView.prototype, "page", {
            /**
             * Gets or sets the page of the view
             *
             * @returns {Page}
             */
            get: function () {
                return this._page;
            },
            /**
             * Gets or sets the page of the view
             *
             * @param {Page} value
             */
            set: function (value) {
                // Check if value changed
                var changed = value !== this._page;
                // Set value
                this._page = value;
                // Trigger changed event
                if (changed) {
                    this.onPageChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageAdvancedView.prototype, "form", {
            /**
             * Gets the form item
             *
             * @returns {DataRecordFormItem}
             */
            get: function () {
                if (!this._form) {
                    this._form = new latte.DataRecordFormItem();
                    this._form.category = 'advanced';
                    this.saveItems.add(this._form);
                }
                return this._form;
            },
            enumerable: true,
            configurable: true
        });
        return PageAdvancedView;
    }(latte.ColumnView));
    latte.PageAdvancedView = PageAdvancedView;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 7/16/16.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var PageConfigurationView = (function (_super) {
        __extends(PageConfigurationView, _super);
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         * Creates the view
         */
        function PageConfigurationView(r) {
            _super.call(this);
            //endregion
            //region Properties
            /**
             * Property field
             */
            this._page = null;
            this.container.get(0).appendChild(this.textbox.element);
            this.page = r;
        }
        //region Private Methods
        //endregion
        //region Methods
        /**
         * Loads data
         */
        PageConfigurationView.prototype.onLoad = function () {
            var _this = this;
            this.page.getConfiguration().send(function (config) {
                _this.textbox.text = config;
            });
        };
        PageConfigurationView.prototype.getSaveCalls = function () {
            var _this = this;
            return [
                this.page.setConfiguration(this.textbox.text).withHandlers(function (s) {
                    _this.page.configurationSetting = s;
                    _this.unsavedChanges = false;
                })];
        };
        Object.defineProperty(PageConfigurationView.prototype, "textbox", {
            /**
             * Gets the textbox
             *
             * @returns {Textbox}
             */
            get: function () {
                var _this = this;
                if (!this._textbox) {
                    this._textbox = new latte.Element(document.createElement('textarea'));
                    this._textbox.addClass('page-configuration');
                    this._textbox.addEventListener('input', function () { return _this.unsavedChanges = true; });
                }
                return this._textbox;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageConfigurationView.prototype, "page", {
            /**
             * Gets or sets the page of theview
             *
             * @returns {Page}
             */
            get: function () {
                return this._page;
            },
            /**
             * Gets or sets the page of theview
             *
             * @param {Page} value
             */
            set: function (value) {
                this._page = value;
            },
            enumerable: true,
            configurable: true
        });
        return PageConfigurationView;
    }(latte.View));
    latte.PageConfigurationView = PageConfigurationView;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 7/18/16.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var PageDetailView = (function (_super) {
        __extends(PageDetailView, _super);
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         * Creates the view
         */
        function PageDetailView() {
            _super.call(this);
            //endregion
            //region Properties
            /**
             * Property field
             */
            this._page = null;
            this.addClass('page-detail-view');
        }
        //region Private Methods
        //endregion
        //region Methods
        /**
         * Adds settings to the view
         * @param settings
         * @param values
         */
        PageDetailView.prototype.addSettings = function (settings, values) {
            for (var key in settings) {
                var setting = values[key];
                if (!setting) {
                    setting = new latte.Setting();
                    setting.owner = 'Page';
                    setting.idowner = this.page.idpage;
                    setting.name = key;
                }
                var input = latte.PageConfiguration.inputFromSetting(settings[key]);
                input.tag = setting;
                if (setting.idsetting > 0) {
                    input.value = setting.value;
                }
                this.settingsForm.inputs.add(input);
            }
        };
        /**
         * Loads the settings of the page
         */
        PageDetailView.prototype.loadSettings = function () {
            var _this = this;
            if (!this.page.configuration.pack) {
                this.page.configuration.reloadPack(function () { return _this.loadSettings(); });
                return;
            }
            // Clear settings
            this.settingsForm.inputs.clear();
            // Add settings inputs
            this.addSettings(this.page.configuration.settings, this.page.configuration.settingsValues);
            // Set settings form visibility
            this.settingsForm.visible = this.settingsForm.inputs.count > 0;
        };
        /**
         * Override
         */
        PageDetailView.prototype.onLoad = function () {
            _super.prototype.onLoad.call(this);
            if (this.page.canIWrite) {
                this.items.add(this.btnOpen);
            }
            this.items.addArray([
                this.dataForm,
                this.settingsForm
            ]);
        };
        /**
         * Raises the <c>page</c> event
         */
        PageDetailView.prototype.onPageChanged = function () {
            var _this = this;
            if (this._pageChanged) {
                this._pageChanged.raise();
            }
            this.page.onlineChanged.add(function () {
                if (!_this.page.canIWrite) {
                    for (var i = 0; i < _this.dataForm.inputs.length; i++) {
                        _this.dataForm.inputs[i].readOnly = true;
                    }
                    for (var i = 0; i < _this.settingsForm.inputs.length; i++) {
                        _this.settingsForm.inputs[i].readOnly = true;
                    }
                    _this.unsavedChanges = false;
                }
            });
            // Set record on form
            this.dataForm.record = this.page;
            // Check write permission
            this.dataForm.readOnly = this.settingsForm.readOnly = !this.page.canIWrite;
            // Load settings
            this.loadSettings();
        };
        /**
         * Opens the editor
         */
        PageDetailView.prototype.openEditor = function () {
            var _this = this;
            var mainView = latte.View.mainView;
            var editor = new latte.PageEditorView(this.page);
            latte.View.mainView = editor;
            editor.closeRequested.add(function () {
                _this.dataForm.onRecordChanged();
                latte.View.mainView = mainView;
            });
        };
        /**
         * Override.
         * @returns {any[]}
         */
        PageDetailView.prototype.getSaveCalls = function () {
            var all = []
                .concat(this.dataForm.getSaveCalls())
                .concat(this.saveSettingsCalls());
            return all;
        };
        /**
         * @returns {Array}
         */
        PageDetailView.prototype.saveSettingsCalls = function () {
            var _this = this;
            var r = [];
            for (var i = 0; i < this.settingsForm.inputs.length; i++) {
                var input = this.settingsForm.inputs[i];
                var setting = input.tag;
                setting.value = input.value;
                var call = setting.saveCall();
                if (i == 0) {
                    call.withHandlers(function () {
                        _this.unsavedChanges = false;
                        _this.onPageChanged();
                    });
                }
                r.push(call);
            }
            return r;
        };
        Object.defineProperty(PageDetailView.prototype, "pageChanged", {
            /**
             * Gets an event raised when the value of the page property changes
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._pageChanged) {
                    this._pageChanged = new latte.LatteEvent(this);
                }
                return this._pageChanged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageDetailView.prototype, "page", {
            /**
             * Gets or sets the page of the view
             *
             * @returns {Page}
             */
            get: function () {
                return this._page;
            },
            /**
             * Gets or sets the page of the view
             *
             * @param {Page} value
             */
            set: function (value) {
                // Check if value changed
                var changed = value !== this._page;
                // Set value
                this._page = value;
                // Trigger changed event
                if (changed) {
                    this.onPageChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageDetailView.prototype, "btnOpen", {
            /**
             * Gets the open button
             *
             * @returns {ButtonItem}
             */
            get: function () {
                var _this = this;
                if (!this._btnOpen) {
                    this._btnOpen = new latte.ButtonItem(strings.openPageEditor, null, function () { return _this.openEditor(); });
                    this._btnOpen.addClass('open-editor-button');
                }
                return this._btnOpen;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageDetailView.prototype, "dataForm", {
            /**
             * Gets the data record for item of the page
             *
             * @returns {DataRecordFormItem}
             */
            get: function () {
                if (!this._dataForm) {
                    this._dataForm = new latte.DataRecordFormItem();
                    this._dataForm.category = '';
                    this.saveItems.add(this._dataForm);
                }
                return this._dataForm;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageDetailView.prototype, "settingsForm", {
            /**
             * Gets the settings form item
             *
             * @returns {FormItem}
             */
            get: function () {
                if (!this._settingsForm) {
                    this._settingsForm = new latte.FormItem();
                    this._settingsForm.direction = latte.Direction.VERTICAL;
                    this.saveItems.add(this._settingsForm);
                }
                return this._settingsForm;
            },
            enumerable: true,
            configurable: true
        });
        return PageDetailView;
    }(latte.ColumnView));
    latte.PageDetailView = PageDetailView;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 7/23/16.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var PageEditorView = (function (_super) {
        __extends(PageEditorView, _super);
        //endregion
        /**
         *
         */
        function PageEditorView(r, pack) {
            if (pack === void 0) { pack = null; }
            _super.call(this);
            //endregion
            //region Properties
            /**
             * Property field
             */
            this._pack = null;
            /**
             * Property field
             */
            this._page = null;
            this.addClass('page-editor-main-view');
            if (pack) {
                this.pack = pack;
            }
            this.page = r;
        }
        //region Private Methods
        /**
         * Clears the ribbon of non-standard items and tabs
         */
        PageEditorView.prototype.clearRibbon = function (selectFirstTab) {
            var _this = this;
            if (selectFirstTab === void 0) { selectFirstTab = true; }
            var goners = [];
            this.ribbon.items.each(function (item) {
                if (item.tab != _this.tabPage) {
                    goners.push(item);
                }
            });
            for (var i in goners) {
                this.ribbon.items.remove(goners[i]);
            }
            while (this.ribbon.tabs.length > 1) {
                this.ribbon.tabs.remove(this.ribbon.tabs[1]);
            }
            if (selectFirstTab !== false) {
                this.ribbon.selectedTab = this.ribbon.tabs.first;
            }
        };
        /**
         * Handles focus on the fragment
         *
         * @param adapter
         */
        PageEditorView.prototype.fragmentFocus = function (adapter) {
            this.fragmentTabsUpdate(adapter);
        };
        /**
         * Updates the tabs of the specified fragment adapter
         * @param adapter
         */
        PageEditorView.prototype.fragmentTabsUpdate = function (adapter) {
            this.clearRibbon(false);
            this.ribbon.tabs.addArray(adapter.getEditorTabs());
            this.ribbon.items.addArray(adapter.getEditorTabItems());
            if (this.ribbon.tabs.length > 0) {
                this.ribbon.selectedTab = this.ribbon.tabs.last;
            }
        };
        //endregion
        //region Methods
        /**
         * Adds a fragment to the ui
         * @param key
         * @param fragment
         */
        PageEditorView.prototype.addFragment = function (key, fragmentData, fragment) {
            var _this = this;
            var type = fragmentData.type || 'html';
            var adapter = null;
            // Get the adapter
            if (latte.FragmentAdapterManager.isSupported(type)) {
                adapter = latte.FragmentAdapterManager.byType(type);
            }
            else {
                adapter = new latte.PlainTextFragmentAdapter();
            }
            // Initialize adapter
            adapter.fragmentConfiguration = fragmentData;
            adapter.fragment = fragment;
            adapter.onCreateEditorItem();
            adapter.editorFocus.add(function () { return _this.fragmentFocus(adapter); });
            adapter.tabsChanged.add(function () { return _this.fragmentTabsUpdate(adapter); });
            //adapter.editorBlur.add(() => this.clearRibbon());
            // Create expando
            var expando = new latte.FragmentExpandoItem();
            expando.title = latte.PageConfiguration.resolveString(fragmentData.name) || strings.missingName;
            expando.fragmentItem = adapter.editorItem;
            this.columnView.items.add(expando);
            this.fragmentAdapters.push(adapter);
        };
        /**
         * Loads the page
         */
        PageEditorView.prototype.loadPage = function () {
            var _this = this;
            if (!this.page.configuration.pack) {
                this.page.configuration.reloadPack(function () { return _this.loadPage(); });
                return;
            }
            this.fragmentAdapters = [];
            // Title
            this.titleElement.text = this.page.title;
            // Load Fragments
            this.page.getFragments().send(function (arr) {
                var fragments = {};
                arr.forEach(function (f) { return fragments[f.name] = f; });
                // Add each fragment
                for (var i in _this.page.configuration.fragments) {
                    var spec = _this.page.configuration.fragments[i];
                    var f = fragments[spec.key || i] ? fragments[spec.key || i] : new latte.Fragment();
                    if (!(f.idfragment > 0)) {
                        f.idpage = _this.page.idpage;
                        f.name = spec.key || i;
                    }
                    _this.addFragment(i, spec, f);
                }
            });
        };
        /**
         * Override.
         */
        PageEditorView.prototype.onLoad = function () {
            var _this = this;
            _super.prototype.onLoad.call(this);
            this.element.append(this.titleElement.element);
            this.element.append(this.btnClose.element);
            this.ribbon.startButton.visible = false;
            this.ribbon.items.addArray([
                this.onlineInput
            ]);
            this.ribbon.tabs.addArray([
                this.tabPage
            ]);
            this.ribbon.selectedTab = this.ribbon.tabs.first;
            this.ribbonView.view = this.columnView;
            this.view = this.ribbonView;
            this.timerId = setInterval(function () { return _this.saveTick(); }, 1000);
        };
        /**
         * Override.
         */
        PageEditorView.prototype.onUnload = function () {
            _super.prototype.onUnload.call(this);
            clearInterval(this.timerId);
        };
        /**
         * Raises the <c>page</c> event
         */
        PageEditorView.prototype.onPageChanged = function () {
            if (this._pageChanged) {
                this._pageChanged.raise();
            }
            this.loadPage();
        };
        /**
         *
         */
        PageEditorView.prototype.saveTick = function () {
            var calls = [];
            var pageChanged = false;
            for (var i in this.fragmentAdapters) {
                var a = this.fragmentAdapters[i];
                calls = calls.concat(a.getSaveCalls());
            }
            if (this.titleChanged) {
                this.page.title = this.titleElement.text;
                pageChanged = true;
            }
            if (this.onlineChanged) {
                pageChanged = true;
            }
            if (pageChanged) {
                calls.push(this.page.saveCall());
            }
            if (calls.length) {
                latte.Message.sendCalls(calls);
            }
        };
        Object.defineProperty(PageEditorView.prototype, "closeRequested", {
            /**
             * Gets an event raised when close was requested
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._closeRequested) {
                    this._closeRequested = new latte.LatteEvent(this);
                }
                return this._closeRequested;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>closeRequested</c> event
         */
        PageEditorView.prototype.onCloseRequested = function () {
            if (this._closeRequested) {
                this._closeRequested.raise();
            }
        };
        Object.defineProperty(PageEditorView.prototype, "pageChanged", {
            /**
             * Gets an event raised when the value of the page property changes
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._pageChanged) {
                    this._pageChanged = new latte.LatteEvent(this);
                }
                return this._pageChanged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageEditorView.prototype, "pack", {
            /**
             * Gets or sets the settings pack of the page
             *
             * @returns {IPageSettingsPack}
             */
            get: function () {
                return this._pack;
            },
            /**
             * Gets or sets
             *
             * @param {IPageSettingsPack} value
             */
            set: function (value) {
                this._pack = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageEditorView.prototype, "page", {
            /**
             * Gets or sets the record of the view
             *
             * @returns {Page}
             */
            get: function () {
                return this._page;
            },
            /**
             * Gets or sets the record of the view
             *
             * @param {Page} value
             */
            set: function (value) {
                // Check if value changed
                var changed = value !== this._page;
                // Set value
                this._page = value;
                // Trigger changed event
                if (changed) {
                    this.onPageChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageEditorView.prototype, "ribbon", {
            /**
             * Gets the ribbon of the view
             *
             * @returns {Ribbon}
             */
            get: function () {
                return this.ribbonView.ribbon;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageEditorView.prototype, "btnClose", {
            /**
             * Gets the close button
             *
             * @returns {ButtonItem}
             */
            get: function () {
                var _this = this;
                if (!this._btnClose) {
                    this._btnClose = new latte.ButtonItem(null, latte.IconItem.standard(20, 4), function () { return _this.onCloseRequested(); });
                    this._btnClose.addClass('page-close');
                    this._btnClose.faceVisible = false;
                }
                return this._btnClose;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageEditorView.prototype, "columnView", {
            /**
             * Gets the column view
             *
             * @returns {ColumnView}
             */
            get: function () {
                if (!this._columnView) {
                    this._columnView = new latte.ColumnView();
                    this._columnView.columnPadding = 0;
                }
                return this._columnView;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageEditorView.prototype, "ribbonView", {
            /**
             * Gets the ribbon in the view
             *
             * @returns {RibbonView}
             */
            get: function () {
                if (!this._ribbonView) {
                    this._ribbonView = new latte.RibbonView();
                    this._ribbonView.ribbon.collapseButton.visible = false;
                }
                return this._ribbonView;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageEditorView.prototype, "onlineInput", {
            /**
             * Gets the online input
             *
             * @returns {InputItem}
             */
            get: function () {
                var _this = this;
                if (!this._onlineInput) {
                    this._onlineInput = latte.InputItem.fromIInput({
                        text: strings.online,
                        type: 'switch'
                    }, 'online', this.page.online > 0);
                    this._onlineInput.valueChanged.add(function () {
                        _this.page.online = _this.onlineInput.value ? 1 : 0;
                        _this.onlineChanged = true;
                    });
                    this._onlineInput.tab = this.tabPage;
                }
                return this._onlineInput;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageEditorView.prototype, "tabPage", {
            /**
             * Gets the page tab
             *
             * @returns {TabItem}
             */
            get: function () {
                if (!this._tabPage) {
                    this._tabPage = new latte.TabItem(strings.page);
                }
                return this._tabPage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageEditorView.prototype, "titleElement", {
            /**
             * Gets the title element
             *
             * @returns {Element<HTMLDivElement>}
             */
            get: function () {
                var _this = this;
                if (!this._titleElement) {
                    this._titleElement = new latte.Element(document.createElement('div'));
                    this._titleElement.addClass('page-title-gizmo');
                    this._titleElement.contentEditable = true;
                    this._titleElement.addEventListener('focus', function () {
                        _this.clearRibbon();
                        _this.cancelTitle = _this.titleElement.text;
                    });
                    this._titleElement.addEventListener('input', function () { return _this.titleChanged = true; });
                    this._titleElement.addEventListener('keydown', function (e) {
                        if (e.keyCode == latte.Key.ENTER) {
                            _this.titleElement.element.blur();
                            e.preventDefault();
                        }
                        else if (e.keyCode == latte.Key.ESCAPE) {
                            _this.titleElement.text = _this.cancelTitle;
                            _this.titleChanged = true;
                            _this.titleElement.element.blur();
                            e.preventDefault();
                        }
                    });
                }
                return this._titleElement;
            },
            enumerable: true,
            configurable: true
        });
        return PageEditorView;
    }(latte.View));
    latte.PageEditorView = PageEditorView;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 7/14/16.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var PageSidebar = (function (_super) {
        __extends(PageSidebar, _super);
        //endregion
        //region Fields
        //endregion
        /**
         *
         */
        function PageSidebar(r) {
            _super.call(this);
            //endregion
            //region Properties
            /**
             * Property field
             */
            this._page = null;
            this.page = r;
        }
        //region Private Methods
        //endregion
        //region Methods
        /**
         * Override.
         */
        PageSidebar.prototype.onLoad = function () {
            this.tabs.addArray([
                this.tabDetail,
                this.tabConfiguration,
                this.tabAdvanced
            ]);
            if (PageSidebar.lastSelectedTab == this.tabAdvanced.text) {
                this.selectedTab = this.tabAdvanced;
            }
            else if (PageSidebar.lastSelectedTab == this.tabConfiguration.text) {
                this.selectedTab = this.tabConfiguration;
            }
            else {
                this.selectedTab = this.tabDetail;
            }
            this.tabsSide = latte.Side.BOTTOM;
        };
        /**
         * Override.
         */
        PageSidebar.prototype.onSelectedTabChanged = function () {
            _super.prototype.onSelectedTabChanged.call(this);
            PageSidebar.lastSelectedTab = this.selectedTab.text;
            if (this.selectedTab == this.tabDetail) {
                this.view = this.detailView;
            }
            else if (this.selectedTab == this.tabConfiguration) {
                this.view = this.configurationView;
            }
            else if (this.selectedTab == this.tabAdvanced) {
                this.view = this.advancedView;
            }
        };
        /**
         * Raises the <c>page</c> event
         */
        PageSidebar.prototype.onPageChanged = function () {
            if (this._pageChanged) {
                this._pageChanged.raise();
            }
            if (this._configurationView) {
                this.configurationView.page = this.page;
            }
            if (this._advancedView) {
                this.advancedView.page = this.page;
            }
            this.detailView.page = this.page;
            this.tabConfiguration.visible = latte.User.me.isSysAdmin;
        };
        Object.defineProperty(PageSidebar.prototype, "pageChanged", {
            /**
             * Gets an event raised when the value of the page property changes
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._pageChanged) {
                    this._pageChanged = new latte.LatteEvent(this);
                }
                return this._pageChanged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageSidebar.prototype, "page", {
            /**
             * Gets or sets the page of the sidebar
             *
             * @returns {Page}
             */
            get: function () {
                return this._page;
            },
            /**
             * Gets or sets the page of the sidebar
             *
             * @param {Page} value
             */
            set: function (value) {
                // Check if value changed
                var changed = value !== this._page;
                // Set value
                this._page = value;
                // Trigger changed event
                if (changed) {
                    this.onPageChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageSidebar.prototype, "advancedView", {
            /**
             * Gets the advanced view
             *
             * @returns {PageAdvancedView}
             */
            get: function () {
                if (!this._advancedView) {
                    this._advancedView = new latte.PageAdvancedView(this.page);
                }
                return this._advancedView;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageSidebar.prototype, "configurationView", {
            /**
             * Gets the configuration view
             *
             * @returns {PageConfigurationView}
             */
            get: function () {
                if (!this._configurationView) {
                    this._configurationView = new latte.PageConfigurationView(this.page);
                }
                return this._configurationView;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageSidebar.prototype, "detailView", {
            /**
             * Gets the detail view
             *
             * @returns {PageDetailView}
             */
            get: function () {
                if (!this._detailView) {
                    this._detailView = new latte.PageDetailView();
                }
                return this._detailView;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageSidebar.prototype, "tabAdvanced", {
            /**
             * Gets the advanced tab
             *
             * @returns {TabItem}
             */
            get: function () {
                if (!this._tabAdvanced) {
                    this._tabAdvanced = new latte.TabItem(strings.advanced);
                }
                return this._tabAdvanced;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageSidebar.prototype, "tabDetail", {
            /**
             * Gets the detail tab
             *
             * @returns {TabItem}
             */
            get: function () {
                if (!this._tabDetail) {
                    this._tabDetail = new latte.TabItem(strings.detail);
                }
                return this._tabDetail;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageSidebar.prototype, "tabConfiguration", {
            /**
             * Gets the configuration tab
             *
             * @returns {TabItem}
             */
            get: function () {
                if (!this._tabConfiguration) {
                    this._tabConfiguration = new latte.TabItem(strings.configuration);
                }
                return this._tabConfiguration;
            },
            enumerable: true,
            configurable: true
        });
        //region Static
        PageSidebar.lastSelectedTab = null;
        return PageSidebar;
    }(latte.TabView));
    latte.PageSidebar = PageSidebar;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 6/10/16.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var SignInView = (function (_super) {
        __extends(SignInView, _super);
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         *
         */
        function SignInView() {
            var _this = this;
            _super.call(this);
            // FX handlers
            this.txtEmail.addEventListener('focus', function () {
                _this.combo.ensureClass('focus', true);
                _this.fieldEmail.ensureClass('focus', true);
                _this.fieldPassword.ensureClass('focus', false);
            });
            this.txtPassword.addEventListener('focus', function () {
                _this.combo.ensureClass('focus', true);
                _this.fieldEmail.ensureClass('focus', false);
                _this.fieldPassword.ensureClass('focus', true);
            });
            this.txtEmail.addEventListener('blur', function () {
                _this.combo.ensureClass('focus', false);
                _this.fieldEmail.ensureClass('focus', false);
            });
            this.txtPassword.addEventListener('blur', function () {
                _this.combo.ensureClass('focus', false);
                _this.fieldPassword.ensureClass('focus', false);
            });
            this.form.addEventListener('submit', function (e) {
                e.preventDefault();
                _this.formSubmit();
            });
        }
        //region Private Methods
        //endregion
        //region Methods
        /**
         * Handles the form submit
         */
        SignInView.prototype.formSubmit = function () {
            var _this = this;
            var call = latte.Session.logIn(this.txtEmail.text, this.txtPassword.text).withHandlers(function (user) {
                latte.User.me = user;
                latte.Main.goMainView();
            });
            call.failure.add(function (err) {
                if (err) {
                    if (strings[err]) {
                        _this.error.text = strings[err];
                    }
                    else {
                        _this.error.text = err;
                    }
                }
                _this.error.visible = true;
            });
            call.send();
        };
        return SignInView;
    }(latte.SignInViewBase));
    latte.SignInView = SignInView;
})(latte || (latte = {}));
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/support/ts-include/datalatte.d.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/support/ts-include/fragment.strings.d.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/support/ts-include/jquery.d.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/support/ts-include/latte.d.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/support/ts-include/latte.data.d.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/support/ts-include/latte.data.strings.d.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/support/ts-include/latte.data.ui.d.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/support/ts-include/latte.element.d.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/support/ts-include/latte.strings.d.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/support/ts-include/latte.ui.d.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/support/ts-include/latte.ui.strings.d.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/support/ts-include/records.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/support/ts-include/views.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/support/ts-include/views_bank.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/helpers/FragmentAdapter.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/helpers/Uploader.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/Main.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/explorers/GroupExplorer.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/explorers/GroupUserExplorer.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/explorers/GroupsExplorer.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/explorers/PageExplorer.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/explorers/PagesExplorer.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/explorers/UserExplorer.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/explorers/UsersExplorer.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/helpers/FileUploader.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/helpers/FragmentAdapterManager.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/helpers/ImageUtil.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/helpers/PageConfiguration.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/helpers/Plugin.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/helpers/PluginManager.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/helpers/adapters/HtmlFragmentAdapter.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/helpers/adapters/ImageGalleryFragmentAdapter.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/helpers/adapters/PlainTextFragmentAdapter.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/items/FileItem.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/items/FragmentExpandoItem.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/records/File.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/records/Fragment.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/records/Group.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/records/GroupUser.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/records/Page.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/records/Setting.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/records/User.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/views/CmsExplorer.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/views/CmsMainView.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/views/PageAdvancedView.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/views/PageConfigurationView.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/views/PageDetailView.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/views/PageEditorView.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/views/PageSidebar.ts" />
/// <reference path="/Users/josemanuel/Sites/Fragment/latte/fragment/ts/views/SignInView.ts" /> 
