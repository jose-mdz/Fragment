/**
 * Created by josemanuel on 7/26/16.
 */
module latte {

    /**
     * Manages the plugins of the program
     */
    export class PluginManager {

        //region Static

        private static _plugins: Plugin[];

        /**
         * Gets the list of loaded plugins
         *
         * @returns {Plugin[]}
         */
        static getLoadedPlugins(): Plugin[]{
            return PluginManager._plugins;
        }

        /**
         * Loads the specified plugin. If the plugin is already loaded, it will ignore it.
         * @param p
         */
        static load(p: Plugin){
            PluginManager._plugins.push(p);
            p.onLoad();
        }

        /**
         * Unloads the specified plugin. Ignored if plugin wasn't loaded
         *
         * @param plugin
         */
        static unload(plugin: Plugin){
            var r = [];

            for(let i in PluginManager._plugins){
                let p = PluginManager._plugins[i];

                if(p == plugin) {
                    p.onUnload();
                }else{
                    r.push(p);
                }
            }

            PluginManager._plugins = r;
        }

        //endregion

        //region Fields
        //endregion

        //region Private Methods
        //endregion

        //region Methods
        //endregion

        //region Events
        //endregion

        //region Properties
        //endregion

    }

}