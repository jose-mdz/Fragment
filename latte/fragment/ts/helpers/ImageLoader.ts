/**
 * Created by josemanuel on 9/27/16.
 */
module latte {

    /**
     *
     */
    export class ImageLoader {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         *
         */
        constructor(src: string) {

            this._src = src;
        }

        //region Private Methods

        /**
         * Starts the load
         */
        start(){

            let x = new XMLHttpRequest();
            x.open('GET', this.src, true);
            x.responseType = 'arraybuffer';

            x.onload = () => {
                this._resultSrc = window.URL.createObjectURL(new Blob([x.response]));
                this.onEnded();
            };

            x.onprogress = (e) => {
                this.progress = e.loaded / e.total;
            };

            x.onloadstart = () => {
                this.onStarted();
            };

            x.send();

        }

        //endregion

        //region Methods
        /**
         * Raises the <c>ended</c> event
         */
        onEnded(){
            this._hasEnded = true;
            if(this._ended){
                this._ended.raise();
            }
        }

        /**
         * Raises the <c>progress</c> event
         */
        onProgressChanged(){
            if(this._progressChanged){
                this._progressChanged.raise();
            }
        }

        /**
         * Raises the <c>started</c> event
         */
        onStarted(){
            this._hasStarted = true;
            if(this._started){
                this._started.raise();
            }
        }

        //endregion

        //region Events


        /**
         * Back field for event
         */
        private _ended: LatteEvent;

        /**
         * Gets an event raised when the load has ended
         *
         * @returns {LatteEvent}
         */
        get ended(): LatteEvent{
            if(!this._ended){
                this._ended = new LatteEvent(this);
            }
            return this._ended;
        }

        /**
         * Back field for event
         */
        private _progressChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the progress property changes
         *
         * @returns {LatteEvent}
         */
        get progressChanged(): LatteEvent{
            if(!this._progressChanged){
                this._progressChanged = new LatteEvent(this);
            }
            return this._progressChanged;
        }

        /**
         * Back field for event
         */
        private _started: LatteEvent;

        /**
         * Gets an event raised when the load has started
         *
         * @returns {LatteEvent}
         */
        get started(): LatteEvent{
            if(!this._started){
                this._started = new LatteEvent(this);
            }
            return this._started;
        }


        //endregion

        //region Properties

        /**
         * Property field
         */
        private _hasStarted: boolean;

        /**
         * Gets a value indicating if the load has started
         *
         * @returns {boolean}
         */
        get hasStarted(): boolean {
            return this._hasStarted;
        }

        /**
         * Property field
         */
        private _hasEnded: boolean;

        /**
         * Gets a value indicating if the load has ended
         *
         * @returns {boolean}
         */
        get hasEnded(): boolean {
            return this._hasEnded;
        }

        /**
         * Property field
         */
        private _progress: number = 0;

        /**
         * Gets or sets the progress of the load
         *
         * @returns {number}
         */
        get progress(): number{
            return this._progress;
        }

        /**
         * Gets or sets the progress of the load
         *
         * @param {number} value
         */
        set progress(value: number){

            // Check if value changed
            let changed: boolean = value !== this._progress;

            // Set value
            this._progress = value;

            // Trigger changed event
            if(changed){
                this.onProgressChanged();
            }
        }

        /**
         * Field for resultImage property
         */
        private _resultImage: HTMLImageElement;

        /**
         * Gets the result image
         *
         * @returns {HTMLImageElement}
         */
        get resultImage(): HTMLImageElement {
            if (!this._resultImage) {
                this._resultImage = document.createElement('img');
                this._resultImage.src = this.resultSrc;
            }
            return this._resultImage;
        }

        /**
         * Property field
         */
        private _resultSrc: string;

        /**
         * Gets the result source
         *
         * @returns {string}
         */
        get resultSrc(): string {
            return this._resultSrc;
        }

        /**
         * Property field
         */
        private _src: string;

        /**
         * Gets the src of the image to load
         *
         * @returns {string}
         */
        get src(): string {
            return this._src;
        }

        //endregion

    }

}