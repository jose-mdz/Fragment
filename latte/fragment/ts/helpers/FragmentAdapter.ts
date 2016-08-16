/**
 * Created by josemanuel on 7/26/16.
 */
module latte {

    /**
     * Adapts a fragment to its editor capabilities
     */
    export class FragmentAdapter<T extends IFragment> implements ISave {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         * You should leave empty the constructor
         */
        constructor() {

        }

        //region Private Methods
        //endregion

        //region Methods

        /**
         * Implementation.
         *
         * @returns {RemoteCall<any>[]}
         */
        getSaveCalls(): ICall[]{
            if(this.unsavedChanges){
                return [this.fragment.saveCall().withHandlers(() => this.unsavedChanges = false)]
            }
            return [];
        }

        /**
         * Returns the tabs for the ribbon of the view
         * @returns {Array}
         */
        getEditorTabs(): TabItem[]{
            return [];
        }

        /**
         * Returns the items for the ribbon of the view
         * @returns {Array}
         */
        getEditorTabItems(): Item[]{
            return [];
        }

        /**
         * Raises the <c>createEditorItem</c> event
         */
        onCreateEditorItem(){
            if(this._createEditorItem){
                this._createEditorItem.raise();
            }
        }

        /**
         * Raises the <c>fragment</c> event
         */
        onFragmentChanged(){
            if(this._fragmentChanged){
                this._fragmentChanged.raise();
            }
        }

        /**
         * Raises the <c>fragmentConfiguration</c> event
         */
        onFragmentConfigurationChanged(){
            if(this._fragmentConfigurationChanged){
                this._fragmentConfigurationChanged.raise();
            }
        }

        /**
         * Raises the <c>editorFocus</c> event
         */
        onEditorFocus(){
            if(this._editorFocus){
                this._editorFocus.raise();
            }
        }

        /**
         * Raises the <c>register</c> event
         */
        onRegister(){
            if(this._register){
                this._register.raise();
            }
        }

        /**
         * Raises the <c>tabsChanged</c> event
         */
        onTabsChanged(){
            if(this._tabsChanged){
                this._tabsChanged.raise();
            }
        }

        /**
         * Raises the <c>unRegister</c> event
         */
        onUnRegister(){
            if(this._unRegister){
                this._unRegister.raise();
            }
        }

        /**
         * Raises the <c>unsavedChanges</c> event
         */
        onUnsavedChangesChanged(){
            if(this._unsavedChangesChanged){
                this._unsavedChangesChanged.raise();
            }
        }
        //endregion

        //region Events

        /**
         * Back field for event
         */
        private _createEditorItem: LatteEvent;

        /**
         * Gets an event raised when the editorItem should be initialized
         *
         * @returns {LatteEvent}
         */
        get createEditorItem(): LatteEvent{
            if(!this._createEditorItem){
                this._createEditorItem = new LatteEvent(this);
            }
            return this._createEditorItem;
        }

        /**
         * Back field for event
         */
        private _fragmentConfigurationChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the fragmentConfiguration property changes
         *
         * @returns {LatteEvent}
         */
        get fragmentConfigurationChanged(): LatteEvent{
            if(!this._fragmentConfigurationChanged){
                this._fragmentConfigurationChanged = new LatteEvent(this);
            }
            return this._fragmentConfigurationChanged;
        }

        /**
         * Back field for event
         */
        private _editorBlur: LatteEvent;

        /**
         * Gets an event raised when the editor item loses the focus
         *
         * @returns {LatteEvent}
         */
        get editorBlur(): LatteEvent{
            if(!this._editorBlur){
                this._editorBlur = new LatteEvent(this);
            }
            return this._editorBlur;
        }

        /**
         * Raises the <c>editorBlur</c> event
         */
        onEditorBlur(){
            if(this._editorBlur){
                this._editorBlur.raise();
            }
        }

        /**
         * Back field for event
         */
        private _editorFocus: LatteEvent;

        /**
         * Gets an event raised when the editor item receives the focus
         *
         * @returns {LatteEvent}
         */
        get editorFocus(): LatteEvent{
            if(!this._editorFocus){
                this._editorFocus = new LatteEvent(this);
            }
            return this._editorFocus;
        }

        /**
         * Back field for event
         */
        private _register: LatteEvent;

        /**
         * Gets an event raised when the adapter is registered
         *
         * @returns {LatteEvent}
         */
        get register(): LatteEvent{
            if(!this._register){
                this._register = new LatteEvent(this);
            }
            return this._register;
        }


        /**
         * Back field for event
         */
        private _tabsChanged: LatteEvent;

        /**
         * Gets an event raised when the tabs of the adapter changed
         *
         * @returns {LatteEvent}
         */
        get tabsChanged(): LatteEvent{
            if(!this._tabsChanged){
                this._tabsChanged = new LatteEvent(this);
            }
            return this._tabsChanged;
        }

        /**
         * Back field for event
         */
        private _unRegister: LatteEvent;

        /**
         * Gets an event raised when the adapter is un-registered
         *
         * @returns {LatteEvent}
         */
        get unRegister(): LatteEvent{
            if(!this._unRegister){
                this._unRegister = new LatteEvent(this);
            }
            return this._unRegister;
        }

        /**
         * Back field for event
         */
        private _unsavedChangesChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the unsavedChanges property changes
         *
         * @returns {LatteEvent}
         */
        get unsavedChangesChanged(): LatteEvent{
            if(!this._unsavedChangesChanged){
                this._unsavedChangesChanged = new LatteEvent(this);
            }
            return this._unsavedChangesChanged;
        }

        //endregion

        //region Properties
        /**
         * Back field for event
         */
        private _fragmentChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the fragment property changes
         *
         * @returns {LatteEvent}
         */
        get fragmentChanged(): LatteEvent{
            if(!this._fragmentChanged){
                this._fragmentChanged = new LatteEvent(this);
            }
            return this._fragmentChanged;
        }

        /**
         * Property field
         */
        private _fragmentConfiguration: T = null;

        /**
         * Gets or sets the fragment configuration info
         *
         * @returns {IFragment}
         */
        get fragmentConfiguration(): T{
            return this._fragmentConfiguration;
        }

        /**
         * Gets or sets the fragment configuration info
         *
         * @param {IFragment} value
         */
        set fragmentConfiguration(value: T){

            // Check if value changed
            let changed: boolean = value !== this._fragmentConfiguration;

            // Set value
            this._fragmentConfiguration = value;

            // Trigger changed event
            if(changed){
                this.onFragmentConfigurationChanged();
            }
        }

        /**
         * Property field
         */
        private _fragment: Fragment = null;

        /**
         * Gets or sets the fragment of the adapter
         *
         * @returns {Fragment}
         */
        get fragment(): Fragment{
            return this._fragment;
        }

        /**
         * Gets or sets the fragment of the adapter
         *
         * @param {Fragment} value
         */
        set fragment(value: Fragment){

            // Check if value changed
            let changed: boolean = value !== this._fragment;

            // Set value
            this._fragment = value;

            // Trigger changed event
            if(changed){
                this.onFragmentChanged();
            }
        }

        /**
         * Property field
         */
        private _editorItem: Item = null;

        /**
         * Gets or sets the item of the fragment used to edit fragment contents
         *
         * @returns {Item}
         */
        get editorItem(): Item {
            return this._editorItem;
        }

        /**
         * Gets or sets the item of the fragment used to edit fragment contents
         *
         * @param {Item} value
         */
        set editorItem(value: Item) {
            this._editorItem = value;
        }

        /**
         * Property field
         */
        private _unsavedChanges: boolean = false;

        /**
         * Gets or sets unsaved changes.
         *
         * @returns {boolean}
         */
        get unsavedChanges(): boolean{
            return this._unsavedChanges;
        }

        /**
         * Gets or sets unsaved changes.
         *
         * @param {boolean} value
         */
        set unsavedChanges(value: boolean){

            // Check if value changed
            let changed: boolean = value !== this._unsavedChanges;

            // Set value
            this._unsavedChanges = value;

            // Trigger changed event
            if(changed){
                this.onUnsavedChangesChanged();
            }
        }

        //endregion

    }

}