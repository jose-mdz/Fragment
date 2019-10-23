/**
 * Created by josemanuel on 12/9/14.
 */
module latte {

    /**
     *
     */
    export class Uploader {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         * Creates the uploader. Additionally specifies target url.
         */
        constructor(url: string = null) {

            if(url) {
                this.url = url;
            }
        }

        //region Private Methods
        //endregion

        //region Methods

        /**
         * Appends data to the form data
         * @param name
         * @param value
         */
        appendFormData(name: string, value: any){
            this.formData.push({name: name, value: value});
        }

        /**
         * Starts the upload
         */
        upload(){

            if(!this.url) {
                throw "No URL for upload";
            }

            if(this.formData.length == 0) {
                throw "No data to upload";
            }

            this._uploading = true;
            this._uploadStarted = DateTime.now;

            var xhr = new XMLHttpRequest();
            var formData = new FormData();

            // Append form data
            for (var i = 0; i < this.formData.length; i++) {
                formData.append(this.formData[i].name, this.formData[i].value);
            }

            // Get upload object
            var upload = xhr.upload;

            upload.addEventListener('progress', (e: any) => {

                this._uploadedBytes = e.total;
                this.progress = e.loaded / e.total;

            }, false);

            upload.addEventListener('error', () => {
                this.onError('');
            }, false);

            upload.addEventListener('abort', () => {
                this.onAborted();
            }, false);

            upload.addEventListener('load', function(){
            }, false);

            xhr.onreadystatechange = () => {
                if(xhr.responseText && this.uploading){

                    this._response = xhr.responseText;

                    // Create message & call to emulate response
                    var m = new Message();
                    var call = new RemoteCall(null, null, null);

                    call.success.add((data) => {

                        this._uploading = false;
                        this._data = data;
                        this.onComplete();

                    });

                    m.calls.push(call);
                    m.dataArrived(xhr.responseText);
                }
            };

            xhr.open('post', this.url, true);
            xhr.send(formData);

        }

        //endregion

        //region Events

        /**
         * Back field for event
         */
        private _aborted: LatteEvent;

        /**
         * Gets an event raised when the upload is aborted
         *
         * @returns {LatteEvent}
         */
        get aborted(): LatteEvent{
            if(!this._aborted){
                this._aborted = new LatteEvent(this);
            }
            return this._aborted;
        }

        /**
         * Raises the <c>aborted</c> event
         */
        onAborted(){
            if(this._aborted){
                this._aborted.raise();
            }
        }

        /**
         * Back field for event
         */
        private _complete: LatteEvent

        /**
         * Gets an event raised when the upload is complete
         *
         * @returns {LatteEvent}
         */
        public get complete(): LatteEvent{
            if(!this._complete){
                this._complete = new LatteEvent(this);
            }
            return this._complete;
        }

        /**
         * Raises the <c>complete</c> event
         */
        public onComplete(){
            if(this._complete){
                this._complete.raise();
            }
        }

        /**
         * Back field for event
         */
        private _error: LatteEvent

        /**
         * Gets an event raised when an error occurs
         *
         * @returns {LatteEvent}
         */
        public get error(): LatteEvent{
            if(!this._error){
                this._error = new LatteEvent(this);
            }
            return this._error;
        }

        /**
         * Raises the <c>error</c> event
         */
        public onError(message: string){
            if(this._error){
                this._error.raise(message);
            }
        }

        /**
         * Back field for event
         */
        private _progressChanged: LatteEvent

        /**
         * Gets an event raised when the value of the progress property changes
         *
         * @returns {LatteEvent}
         */
        public get progressChanged(): LatteEvent{
            if(!this._progressChanged){
                this._progressChanged = new LatteEvent(this);
            }
            return this._progressChanged;
        }

        /**
         * Raises the <c>progress</c> event
         */
        public onProgressChanged(){
            if(this._progressChanged){
                this._progressChanged.raise();
            }
        }

        //endregion

        //region Properties

        /**
         * Property field
         */
        private _data:any = null;

        /**
         * Gets or sets the data result of the upload post
         *
         * @returns {any}
         */
        get data():any {
            return this._data;
        }

        /**
         * Property field
         */
        private _formData:Array<{name: string; value: any}> = [];

        /**
         * Gets the form data
         *
         * @returns {Array<{name: string; value: string}>}
         */
        get formData():Array<{name: string; value: any}> {
            return this._formData;
        }

        /**
         * Gets the current speed of upload. Zero if any
         *
         * @returns {string}
         */
        public get currentUploadBytesPerSecond():number {
            return  this.uploadedBytes /  DateTime.now.subtractDate(this.uploadStarted).totalSeconds;
        }

        /**
         * Property field
         */
        private _progress: number = 0;

        /**
         * Gets or sets the progress of the upload (0 to 1)
         *
         * @returns {number}
         */
        public get progress(): number{
            return this._progress;
        }

        /**
         * Gets or sets the progress of the upload (0 to 1)
         *
         * @param {number} value
         */
        public set progress(value: number){

            // Check if value changed
            var changed: boolean = value !== this._progress;

            // Set value
            this._progress = value;

            // Trigger changed event
            if(changed){
                this.onProgressChanged();
            }
        }

        /**
         * Property field
         */
        private _response:string;

        /**
         * Gets the raw response from server
         *
         * @returns {string}
         */
        get response():string {
            return this._response;
        }

        /**
         * Property field
         */
        private _uploading:boolean;

        /**
         * Gets a value indicating if upload is in progress
         *
         * @returns {boolean}
         */
        public get uploading():boolean {
            return this._uploading;
        }

        /**
         * Property field
         */
        private _uploadedBytes:number;

        /**
         * Gets the amount of uploaded bytes
         *
         * @returns {number}
         */
        public get uploadedBytes():number {
            return this._uploadedBytes;
        }

        /**
         * Property field
         */
        private _uploadStarted:DateTime;

        /**
         * Gets a value indicating the time when upload started
         *
         * @returns {DateTime}
         */
        public get uploadStarted():DateTime {
            return this._uploadStarted;
        }

        /**
         * Property field
         */
        private _url:string = null;

        /**
         * Gets or sets the url to post upload
         *
         * @returns {string}
         */
        get url():string {
            return this._url;
        }

        /**
         * Gets or sets the url to post upload
         *
         * @param {string} value
         */
        set url(value:string) {
            this._url = value;
        }

        //endregion

    }

}