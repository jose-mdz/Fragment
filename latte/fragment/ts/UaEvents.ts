module latte {

    /**
     *
     */
    export class UaEvents{

        //region Static Methods

        /**
         * Raises the <c>initializedExplorer</c> event
         */
        static onInitializedExplorer(cmsExplorer: CmsExplorer){
            if(this._initializedExplorer){
                this._initializedExplorer.raise(cmsExplorer);
            }
        }

        /**
         * Raises the <c>initializingExplorer</c> event
         */
        static onInitializingExplorer(cmsExplorer: CmsExplorer){
            if(this._initializingExplorer){
                this._initializingExplorer.raise(cmsExplorer);
            }
        }

        //endregion

        //region Static Events

        /**
         * Back field for event
         */
        private static _initializingExplorer: LatteEvent;

        /**
         * Gets an event raised when the explorer is being initialized
         *
         * @returns {LatteEvent}
         */
        static get initializingExplorer(): LatteEvent{
            if(!this._initializingExplorer){
                this._initializingExplorer = new LatteEvent(this);
            }
            return this._initializingExplorer;
        }

        /**
         * Back field for event
         */
        private static _initializedExplorer: LatteEvent;

        /**
         * Gets an event raised when the explorer has been initialized
         *
         * @returns {LatteEvent}
         */
        static get initializedExplorer(): LatteEvent{
            if(!this._initializedExplorer){
                this._initializedExplorer = new LatteEvent(this);
            }
            return this._initializedExplorer;
        }



        //endregion

    }

}