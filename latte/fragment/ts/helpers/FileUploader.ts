/**
 * Created by josemanuel on 6/24/14.
 */
module latte {

    export interface SystemFile{

        name: string;

        size: number;
    }

    /**
     * Uploads a file to the server, linking it to an object.
     * To upload a file as base46 mode, use static fromBase64
     */
    export class FileUploader extends Uploader {

        //region Static

        /**
         * Creates a FileUploader object from base64 encoded data
         * @param base64
         * @param fileName
         * @param recordName
         * @param recordId
         * @returns {latte.FileUploader}
         */
        static fromBase64(base64: string, fileName: string, recordName: string, recordId: string){
            var f = new FileUploader(null, recordName, recordId);
            f.base64 = base64;
            f.base64FileName = fileName;

            return f;
        }

        //endregion

        //region Fields
        //endregion

        /**
         * Creates the file uploader
         */
        constructor(file: SystemFile, recordName: string, recordId: string) {

            super();

            this._fileLocal = file;
            this._recordName = recordName;
            this._recordId = recordId;

        }

        //region Private Methods
        //endregion

        //region Methods

        /**
         * Override.
         */
        onComplete(){


            var data = this.data;

            if(_isArray(data) && data.length > 0 && data[0]){

                this._fileRecord = <any>(data[0]);

            }else{
                log("Error uploading file: " + this.response);
            }

            super.onComplete();

        }

        /**
         * Uploads the specified DetailView file
         **/
        upload(){

            // Set url
            this.url = '/latte/releases/fragment/support/actions/'
                + (this.base64 ? 'upload64' : 'upload' ) + '.php';


            // Add file params
            this.appendFormData('name', this.recordName);
            this.appendFormData('id', this.recordId);

            if(this.idparent != null)       this.appendFormData('idparent', this.idparent);
            if(this.width != null)          this.appendFormData('width', this.width);
            if(this.height != null)         this.appendFormData('height', this.height);
            if(this.description != null)    this.appendFormData('description', this.description);
            if(this.key != null)            this.appendFormData('key', this.key);

            if(this.base64) {
                this.appendFormData('data', this.base64);
                this.appendFormData('filename', this.base64FileName);
            }else {
                this.appendFormData('file', this.fileLocal);
            }

            super.upload();

        }

        //endregion

        //region Events


        //endregion

        //region Properties

        /**
         * Property field
         */
        private _base64:string = null;

        /**
         * Gets or sets the base64 data to upload, if any
         *
         * @returns {string}
         */
        get base64():string {
            return this._base64;
        }

        /**
         * Gets or sets the base64 data to upload, if any
         *
         * @param {string} value
         */
        set base64(value:string) {
            this._base64 = value;
        }

        /**
         * Property field
         */
        private _base64FileName:string = null;

        /**
         * Gets or sets the file name when uploading base64 data
         *
         * @returns {string}
         */
        get base64FileName():string {
            return this._base64FileName;
        }

        /**
         * Gets or sets the file name when uploading base64 data
         *
         * @param {string} value
         */
        set base64FileName(value:string) {
            this._base64FileName = value;
        }

        /**
         * Property field
         */
        private _description:string = null;

        /**
         * Gets or sets the description of the file to upload
         *
         * @returns {string}
         */
        get description():string {
            return this._description;
        }

        /**
         * Gets or sets the description of the file to upload
         *
         * @param {string} value
         */
        set description(value:string) {
            this._description = value;
        }

        /**
         * Property field
         */
        private _fileLocal:SystemFile = null;

        /**
         * Gets the local file object
         *
         * @returns {File}
         */
        public get fileLocal():SystemFile {
            return this._fileLocal;
        }

        /**
         * Property field
         */
        private _fileRecord:File;

        /**
         * Gets the result file
         *
         * @returns {File}
         */
        public get fileRecord():File {
            return this._fileRecord;
        }

        /**
         * Property field
         */
        private _height:number = null;

        /**
         * Gets or sets the height of the file if is image
         *
         * @returns {number}
         */
        get height():number {
            return this._height;
        }

        /**
         * Gets or sets the height of the file if is image
         *
         * @param {number} value
         */
        set height(value:number) {
            this._height = value;
        }

        /**
         * Property field
         */
        private _idparent:number = null;

        /**
         * Gets or sets the id of the parent file to make this file a thumbnail
         *
         * @returns {number}
         */
        get idparent():number {
            return this._idparent;
        }

        /**
         * Gets or sets the id of the parent file to make this file a thumbnail
         *
         * @param {number} value
         */
        set idparent(value:number) {
            this._idparent = value;
        }

        /**
         * Property field
         */
        private _key: string = null;

        /**
         * Gets or sets the key of the file
         *
         * @returns {string}
         */
        get key(): string {
            return this._key;
        }

        /**
         * Gets or sets the key of the file
         *
         * @param {string} value
         */
        set key(value: string) {
            this._key = value;
        }

        /**
         * Property field
         */
        private _recordId:string;

        /**
         * Gets the id of record
         *
         * @returns {string}
         */
        public get recordId():string {
            return this._recordId;
        }

        /**
         * Property field
         */
        private _recordName:string;

        /**
         * Gets the name of the record
         *
         * @returns {string}
         */
        public get recordName():string {
            return this._recordName;
        }

        /**
         * Property field
         */
        private _width:number = null;

        /**
         * Gets or sets the width of the file if is image
         *
         * @returns {number}
         */
        get width():number {
            return this._width;
        }

        /**
         * Gets or sets the width of the file if is image
         *
         * @param {number} value
         */
        set width(value:number) {
            this._width = value;
        }

        //endregion

    }

}