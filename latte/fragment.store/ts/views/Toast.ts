/**
 * Created by josemanuel on 11/14/16.
 */
module latte {

    /**
     *
     */
    export class Toast extends ToastBase {

        //region Static

        static current: Toast = null;


        static loading(message: string = null){
            let t = Toast.current || new Toast();

            t.label.text = message || '';
            t.show();

            Toast.current = t;
        }

        static loaded(message: string = null){
            if(Toast.current) {
                Toast.current.showCalls--;

                if(Toast.current.showCalls == 0) {
                    Toast.current = null;
                }
            }
        }

        /**
         * Shows a toast while loading message
         * @param message
         * @returns {Message}
         */
        static loadMessage(message: Message): Message{

            let showOrNot = () => {
                if(message.working()) {
                    Toast.loading();
                }else {
                    Toast.loaded();
                }
            };

            message.workingChanged.add(() => showOrNot());

            showOrNot();

            return message;
        }

        /**
         * Property field
         */
        private static _message: Message = null;

        /**
         * Gets or sets the message on toast
         *
         * @returns {Message}
         */
        static get message(): Message {
            return Toast._message;
        }

        /**
         * Gets or sets the message on toast
         *
         * @param {Message} value
         */
        static set message(value: Message) {
            Toast._message = value;

            Toast.loadMessage(value);
        }

        //endregion

        //region Fields
        appended: boolean = false;
        //endregion

        /**
         *
         */
        constructor() {
            super();

        }

        //region Private Methods
        //endregion

        //region Methods

        /**
         * Shows the toast.
         */
        show(){
            this.showCalls++;

            if(!this.appended){
                document.body.appendChild(this.element);
                this.addClass('visible');
                this.appended = true;
            }
        }

        /**
         * Raises the <c>showCalls</c> event
         */
        onShowCallsChanged(){
            if(this._showCallsChanged){
                this._showCallsChanged.raise();
            }

            if(this.showCalls == 0) {
                this.removeFromParent();
            }
        }
        //endregion

        //region Events

        /**
         * Back field for event
         */
        private _showCallsChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the showCalls property changes
         *
         * @returns {LatteEvent}
         */
        get showCallsChanged(): LatteEvent{
            if(!this._showCallsChanged){
                this._showCallsChanged = new LatteEvent(this);
            }
            return this._showCallsChanged;
        }
        //endregion

        //region Properties
        /**
         * Property field
         */
        private _showCalls: number = 0;

        /**
         * Gets or sets the number of show calls made to this toast
         *
         * @returns {number}
         */
        get showCalls(): number{
            return this._showCalls;
        }

        /**
         * Gets or sets the number of show calls made to this toast
         *
         * @param {number} value
         */
        set showCalls(value: number){

            // Check if value changed
            let changed: boolean = value !== this._showCalls;

            // Set value
            this._showCalls = value;

            // Trigger changed event
            if(changed){
                this.onShowCallsChanged();
            }
        }
        //endregion

    }

}