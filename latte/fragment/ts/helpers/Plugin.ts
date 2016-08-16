/**
 * Created by josemanuel on 7/26/16.
 */
module latte {

    /**
     *
     */
    export class Plugin {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         *
         */
        constructor() {

        }

        //region Private Methods
        //endregion

        //region Methods
        /**
         * Raises the <c>load</c> event
         */
        onLoad(){
            if(this._load){
                this._load.raise();
            }
        }

        /**
         * Raises the <c>unload</c> event
         */
        onUnload(){
            if(this._unload){
                this._unload.raise();
            }
        }
        //endregion

        //region Events

        /**
         * Back field for event
         */
        private _load: LatteEvent;

        /**
         * Gets an event raised when the plugin is loaded
         *
         * @returns {LatteEvent}
         */
        get load(): LatteEvent{
            if(!this._load){
                this._load = new LatteEvent(this);
            }
            return this._load;
        }

        /**
         * Back field for event
         */
        private _unload: LatteEvent;

        /**
         * Gets an event raised when the plugin is unloaded
         *
         * @returns {LatteEvent}
         */
        get unload(): LatteEvent{
            if(!this._unload){
                this._unload = new LatteEvent(this);
            }
            return this._unload;
        }


        //endregion

        //region Properties
        //endregion

    }

}