/**
 * Created by josemanuel on 7/26/16.
 */
module latte {

    /**
     *
     */
    export class FragmentAdapterManager {

        //region Static
        private static _adapters = {};

        /**
         * Gets the adapter for the supported type
         *
         * @param type
         * @returns {any|null}
         */
        static byType(type: string): FragmentAdapter<IFragment>{
            return FragmentAdapterManager._adapters[type] ? new latte[FragmentAdapterManager._adapters[type]] : null;
        }

        /**
         * Gets the list of loaded plugins
         *
         * @returns {Plugin[]}
         */
        static getLoadedAdapters(): FragmentAdapter<IFragment>[]{
            var r = [];
            for(let i in FragmentAdapterManager._adapters){
                r.push(FragmentAdapterManager._adapters[i]);
            }
            return r;
        }

        /**
         * Returns a value indicating if the specified type is supported by the manager
         *
         * @param type
         * @returns {boolean}
         */
        static isSupported(type: string): boolean{
            return !!FragmentAdapterManager._adapters[type];
        }

        /**
         * Loads the specified plugin. If the plugin is already loaded, it will ignore it.
         * @param p
         */
        static register(type: string, className: string){
            FragmentAdapterManager._adapters[type] = className;
        }

        /**
         * Unloads the specified plugin. Ignored if plugin wasn't loaded
         *
         * @param f
         */
        static unregister(type: string){

            if(FragmentAdapterManager._adapters[type]){
                delete FragmentAdapterManager._adapters[type];
            }

        }



    }

}