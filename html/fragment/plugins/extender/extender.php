<?php
/**
 * Created by PhpStorm.
 * User: josemanuel
 * Date: 8/2/17
 * Time: 13:05
 */

require_once "FormExtender.php";

event_register('backend_render', 'do_extend_forms');

/**
 * Injects JavaScript directly on the backend output
 */
function do_extend_forms(){
    ?>
    <script>

        // Handle Window Load
        window.addEventListener('load', function(){

            //region Form Data Record

            // Declare Form class
            function Form(){};

            // Inherit from data record
            Form.prototype = new latte.Setting();

            // Override metadata
            Form.prototype.getMetadata = function(){
                return {
                    fields:{
                        value: {
                            text: 'Estado',
                            type: 'combo',
                            options: ["Contestar", "Incompleto", "En Proceso"]
                        }
                    }
                }
            };

            Form.prototype.toString = function(){
                return "Hey to string"
            };
            //endregion

            //region FormsExplorer
            // Declare item
            function FormsExplorer(){
                this.loadsChildrenFolders = false;
            }

            // Extend from ExplorerItem
            FormsExplorer.prototype = new latte.ExplorerItem();

            // Name
            FormsExplorer.prototype.getName = function(){ return "Formularios" };

            // Icon
            FormsExplorer.prototype.getIcon = function(){ return latte.LinearIcon.list };

            // Children Loader
            FormsExplorer.prototype.getChildrenLoader = function(){
                var _this = this;
                return (new latte.RemoteCall('fragment', 'FormExtender', 'doSome', {})
                ).withHandlers(function(response){
                    console.log(response);

                    for(var i = 0; i < 10; i++){
                        var
                        _this.children.add(
                            new FormExplorer(new Form())
                        );
                    }

                });
            };

            // Column headers
            FormsExplorer.prototype.getColumnHeaders = function(){
                return [new latte.ColumnHeader("Nombre", 100)];
            }

            //endregion

            //region FormExplorer
            // Declare item
            function FormExplorer(r){
                this.loadsChildren = false;
                this.loadsChildrenFolders = false;

                if(r) this.record = r;


            }

            // Extend from ExplorerItem
            FormExplorer.prototype = new latte.ExplorerItemDataRecord();

            // TODO: ESTO NO JALA
            FormExplorer.prototype.name = "Some name!";

            // Columns
            FormExplorer.prototype.getColumns = function(){ return ['name'] };

            // Icon
            FormExplorer.prototype.getIcon = function(){ return latte.LinearIcon.list };

            //endregion

            // Handle Explorer initialization
            latte.UaEvents.initializedExplorer.add(function(e){

                var formsItem = new FormsExplorer();

                e.addRootItem(formsItem);

            });
        });


    </script>
    <?php
}