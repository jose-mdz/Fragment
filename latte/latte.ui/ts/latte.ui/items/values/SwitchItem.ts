/**
 * Created by josemanuel on 8/4/16.
 */
module latte {

    /**
     *
     */
    export class SwitchItem extends ValueItem {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         *
         */
        constructor() {
            super();

            this.addClass('switch');
            this.element.append(this.orb);

            this.element.get(0).addEventListener('click', () => {
                this.value = !this.value;
            });
        }

        //region Private Methods
        //endregion

        //region Methods
        /**
         * Raises the <c>value</c> event
         */
        onValueChanged(){
            if(this._valueChanged){
                this._valueChanged.raise();
            }

            if(this.value) {
                this.addClass('on');
            }else {
                this.removeClass('on');
            }
        }
        //endregion

        //region Events
        /**
         * Back field for event
         */
        private _valueChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the value property changes
         *
         * @returns {LatteEvent}
         */
        get valueChanged(): LatteEvent{
            if(!this._valueChanged){
                this._valueChanged = new LatteEvent(this);
            }
            return this._valueChanged;
        }

        //endregion

        //region Properties
        /**
         * Property field
         */
        private _value: boolean = false;

        /**
         * Gets or sets the value of the switch
         *
         * @returns {boolean}
         */
        get value(): boolean{
            return this._value;
        }

        /**
         * Gets or sets the value of the switch
         *
         * @param {boolean} value
         */
        set value(value: boolean){

            // Check if value changed
            let changed: boolean = value !== this._value;

            if(!_isBoolean(value)) {
                if(_isString(value) && _isNumeric(value)) {
                    value = !!parseInt(<any>value);
                }
            }

            // Set value
            this._value = !!value;

            // Trigger changed event
            if(changed){
                this.onValueChanged();
            }
        }

        /**
         * Gets the value as a string
         *
         * @returns {string}
         */
        get valueString(): string {
            return this.value ? strings.switchOn : strings.switchOff;
        }


        //endregion

        //region Components
        /**
         * Field for orb property
         */
        private _orb: HTMLElement;

        /**
         * Gets the orb of the switch
         *
         * @returns {HTMLElement}
         */
        get orb(): HTMLElement {
            if (!this._orb) {
                this._orb = document.createElement('div');
                this._orb.classList.add('orb');
            }
            return this._orb;
        }

        //endregion

    }

}