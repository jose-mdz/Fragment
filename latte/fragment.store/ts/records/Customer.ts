/**
 * Generated by xlatte
 */
module latte{

	/**
	 * Record for table customer
	 */
	export class Customer extends customerBase{

		//region Static
		/**
		 * Gets the suggestion loader
		 * @returns {*}
		 */
		static suggestionLoader(){

			// Return the loader function
			return (d: DataRecordValueItem, callback: (items: Item[]) => any): Message  => {

				// Return search Message
				return Customer.search(d.text).send((records: Customer[]) => {

					// Items to return on callback
					let items: Item[] = [];

					// Add a button for each result hit
					records.forEach((r) => {
						items.push(new ButtonItem([r.firstname, r.lastname].join(' '), null, () => d.record = r));
					});

					// Callback to inform load completion
					callback.call(this, items)

				})
			}
		}
		//endregion

		//region Fields
		//endregion

		//region Methods

		/**
		 * Gets the metadata about the record
		 *
		 * @returns Object
		 */
		getMetadata(): IRecordMeta {
			return {
				fields: {
					firstname: {
						text: strings.name,
						type: 'string'
					},
					lastname: {
						text: strings.lastname
					},
					birthday: {
						text: strings.birthday,
                        type: 'date'
					},
					phone: {
						text: strings.phone
					},
					email: {
						text: strings.email
					}
				}
			}
		}

		/**
		 * Returns a string representation of the object
		 */
		toString(): string{
		    return [this.firstname, this.lastname].join(' ');
		}
		//endregion

		//region Events
		//endregion

		//region Properties
        /**
         * Gets the full name
         *
         * @returns {string}
         */
        get fullName(): string {
            return [this.firstname, this.lastname].join(' ');
        }

        //endregion

	}
}