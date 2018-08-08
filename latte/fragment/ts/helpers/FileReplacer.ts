/**
 * Created by josemanuel on 9/28/16.
 */
module latte {

    /**
     *
     */
    export class FileReplacer extends Uploader {

        //region Static
        //endregion

        //region Fields
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
            this.url = _latteUrl() + '/releases/fragment/support/actions/file_replace64.php';

            // Add file params
            this.appendFormData('id', this.id);

            if(this.width != null)          this.appendFormData('width', this.width);
            if(this.height != null)         this.appendFormData('height', this.height);
            if(this.description != null)    this.appendFormData('description', this.description);
            if(this.key != null)            this.appendFormData('key', this.key);

            if(this.base64) {
                this.appendFormData('data', this.base64);
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
        private _description: string = null;

        /**
         * Gets or sets the description of the file
         *
         * @returns {string}
         */
        get description(): string {
            return this._description;
        }

        /**
         * Gets or sets the description of the file
         *
         * @param {string} value
         */
        set description(value: string) {
            this._description = value;
        }

        /**
         * Property field
         */
        private _fileRecord: File;

        /**
         * Gets the file record result of replacement
         *
         * @returns {File}
         */
        get fileRecord(): File {
            return this._fileRecord;
        }

        /**
         * Property field
         */
        private _height: number = null;

        /**
         * Gets or sets the height of the image (if image)
         *
         * @returns {number}
         */
        get height(): number {
            return this._height;
        }

        /**
         * Gets or sets the height of the image (if image)
         *
         * @param {number} value
         */
        set height(value: number) {
            this._height = value;
        }

        /**
         * Property field
         */
        private _id: string = null;

        /**
         * Gets or sets the id of the file to replace
         *
         * @returns {string}
         */
        get id(): string {
            return this._id;
        }

        /**
         * Gets or sets the id of the file to replace
         *
         * @param {string} value
         */
        set id(value: string) {
            this._id = value;
        }

        /**
         * Property field
         */
        private _key: string = null;

        /**
         * Gets or sets the key of the file to replace
         *
         * @returns {string}
         */
        get key(): string {
            return this._key;
        }

        /**
         * Gets or sets the key of the file to replace
         *
         * @param {string} value
         */
        set key(value: string) {
            this._key = value;
        }

        /**
         * Property field
         */
        private _width: number = null;

        /**
         * Gets or sets the width of the image (if image)
         *
         * @returns {number}
         */
        get width(): number {
            return this._width;
        }

        /**
         * Gets or sets the width of the image (if image)
         *
         * @param {number} value
         */
        set width(value: number) {
            this._width = value;
        }

        //endregion

    }

}