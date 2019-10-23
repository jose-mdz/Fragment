module latte {

    /**
     * Create new SettingValueItem
     */
    export class SettingValueItem extends TagValueItem<Page> {

        /**
         * Creates a new SettingValueItem
         */
        constructor() {
            super();
            this.addClass('page-tags');
        }


        //region Private Methods
        //endregion


        //region Methods
        /**
         * @override
         * @param setting
         */
        onCreateItem(setting: DataRecord = null) {
            let text = String(this.text).trim();
            console.log(text);
            // Call server method
            Setting.create('PageTag', this.record.recordId, text).send((setting: Setting) => {
                if (setting instanceof Setting) {
                    this.onItemCreated();
                }
            });
        }

        /**
         * Filter Suggestions
         */
        onFilterSuggestions() {
            //throw new Ex("Not implemented");
            let text = String(this.textbox.value).trim();

            Setting.byOwnerAndText('PageTag', text).send((records: Setting[]) => {
                // Adds
                let items: Item[] = [];

                records.forEach((setting: Setting) => {
                    let b = new ButtonItem(setting.value, null,() => {
                        this.onCreateItem(setting);
                    });

                    b.tag = setting;
                    b.description = setting.owner;

                    items.push(b);
                });

                // Separator
                if (records.length) {
                    items.push(new SeparatorItem());
                }

                this.textbox.suggestions.clear();
                this.textbox.suggestions.addArray(items);
            });
        }

        /**
         * @param {latte.Setting} record
         */
        onAddItem(record: Setting) {
            let item = new ButtonItem();
            item.removeClass('clickable').addClass('tag-item');
            item.icon = LinearIcon.cross;
            item.text = record.value;
            item.tag = record;
            item.click.add(() => { this.selectedItem = record });

            item.icon.element.click((evt) => {
                record.remove(() => {
                    this.onItemTrashed(record);
                });
            });


            this.toolbar.items.add(item);
        }

        /**
         * Called when fill to list
         * @param callback
         */
        onLoadItems(callback: GenericCallback) {
            // Vars
            let recordId: number = this.record.recordId;

            // Call server method
            Setting.byOwnerOnly('PageTag', recordId).send((data: Setting[]) => {
                callback(data);
            });
        }
        //endregion


        //region Components
        //endregion


        //region Events
        //endregion


        //region Properties
        //endregion

    }
}
