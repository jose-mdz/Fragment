/**
 * Created by josemanuel on 8/1/16.
 */
module latte {

    /**
     *
     */
    export class FileItem extends Item {

        //region Static
        static SYS_THUMB_KEY = 'sys-thumb';
        static defaultThumbWidth = 200;
        static defaultThumbHeight = 200;
        //endregion

        //region Fields

        //endregion

        /**
         *
         */
        constructor(f: latte.File = null) {
            super();

            this.addClass('file');

            this.divBar.add(this.divName);
            this.divBar.add(this.divSize);

            this.element.append(this.divThumb.element);
            this.element.append(this.divBar.element);

            if (f) {
                this.file = f;
            }
        }

        //region Private Methods

        /**
         * Updates the thumb of the item.
         */
        private updateThumb(){
            let thumb = this.file.getChildByKey(FileItem.SYS_THUMB_KEY);

            if(thumb) {
                this.img.element.src = thumb.url;
            }else {
                this.img.element.src = this.file.url;
                // Generate thumb
                this.file.createThumbChild({
                    size: this.thumbSize || new Size(FileItem.defaultThumbWidth, FileItem.defaultThumbHeight),
                    quality: this.quality,
                    fit: ImageFit.AspectFillNear
                }, FileItem.SYS_THUMB_KEY, () => {
                    this.updateThumb();
                    this.onThumbCreated();
                })
            }

        }
        //endregion

        //region Methods
        /**
         * Raises the <c>file</c> event
         */
        onFileChanged(){
            if(this._fileChanged){
                this._fileChanged.raise();
            }

            if(this.file) {
                this.divName.text = this.divName.tooltip = this.file.name;
                this.divSize.text = this.file.humanSize;

                if(!this.file.isImage) {
                    this.divExtension.text = this.file.extension.toUpperCase();
                }else{
                    this.updateThumb();
                }
            }else{
                this.divName.text = '';
                this.divSize.text = '';
                this.divExtension.text = '';
            }

        }

        /**
         * Raises the <c>fileUploader</c> event
         */
        onFileUploaderChanged(){
            if(this._fileUploaderChanged){
                this._fileUploaderChanged.raise();
            }

            if(this.fileUploader) {
                this.divName.text = this.divName.tooltip = this.fileUploader.fileLocal.name;
                this.divSize.text = File.humanSizeOf(this.fileUploader.fileLocal.size);
                this.divThumb.element.appendChild(this.progressBar.element.get(0));

                this.fileUploader.progressChanged.add(() => {
                    this.progressBar.value = this.fileUploader.progress * 100
                });

                this.fileUploader.complete.add(() => {
                    this.progressBar.visible = false;
                    this.file = this.fileUploader.fileRecord;
                });
            }
        }

        /**
         * Raises the <c>thumbCreated</c> event
         */
        onThumbCreated(){
            if(this._thumbCreated){
                this._thumbCreated.raise();
            }
        }

        /**
         * Raises the <c>thumbSize</c> event
         */
        onThumbSizeChanged(){
            if(this._thumbSizeChanged){
                this._thumbSizeChanged.raise();
            }

            if(this.thumbSize) {
                this.divThumb.width = this.thumbSize.width;
                this.divThumb.height = this.thumbSize.height;
            }
        }
        //endregion

        //region Events
        /**
         * Back field for event
         */
        private _fileChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the file property changes
         *
         * @returns {LatteEvent}
         */
        get fileChanged(): LatteEvent{
            if(!this._fileChanged){
                this._fileChanged = new LatteEvent(this);
            }
            return this._fileChanged;
        }

        /**
         * Back field for event
         */
        private _fileUploaderChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the fileUploader property changes
         *
         * @returns {LatteEvent}
         */
        get fileUploaderChanged(): LatteEvent{
            if(!this._fileUploaderChanged){
                this._fileUploaderChanged = new LatteEvent(this);
            }
            return this._fileUploaderChanged;
        }


        /**
         * Back field for event
         */
        private _thumbCreated: LatteEvent;

        /**
         * Gets an event raised when the system thumb has been created
         *
         * @returns {LatteEvent}
         */
        get thumbCreated(): LatteEvent{
            if(!this._thumbCreated){
                this._thumbCreated = new LatteEvent(this);
            }
            return this._thumbCreated;
        }

        /**
         * Back field for event
         */
        private _thumbSizeChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the thumbSize property changes
         *
         * @returns {LatteEvent}
         */
        get thumbSizeChanged(): LatteEvent{
            if(!this._thumbSizeChanged){
                this._thumbSizeChanged = new LatteEvent(this);
            }
            return this._thumbSizeChanged;
        }

        //endregion

        //region Properties

        /**
         * Property field
         */
        private _file: latte.File = null;

        /**
         * Gets or sets the latte File
         *
         * @returns {latte.File}
         */
        get file(): latte.File{
            return this._file;
        }

        /**
         * Gets or sets the latte File
         *
         * @param {latte.File} value
         */
        set file(value: latte.File){

            // Check if value changed
            let changed: boolean = value !== this._file;

            // Set value
            this._file = value;

            // Trigger changed event
            if(changed){
                this.onFileChanged();
            }
        }

        /**
         * Property field
         */
        private _fileUploader: FileUploader = null;

        /**
         * Gets or sets the file uploader for this item. After uploading the file record will be added.
         *
         * @returns {FileUploader}
         */
        get fileUploader(): FileUploader{
            return this._fileUploader;
        }

        /**
         * Gets or sets the file uploader for this item. After uploading the file record will be added.
         *
         * @param {FileUploader} value
         */
        set fileUploader(value: FileUploader){

            // Check if value changed
            let changed: boolean = value !== this._fileUploader;

            // Set value
            this._fileUploader = value;

            // Trigger changed event
            if(changed){
                this.onFileUploaderChanged();
            }
        }

        /**
         * Property field
         */
        private _thumbSize: Size = null;

        /**
         * Gets or sets the size of the thumbnail
         *
         * @returns {Size}
         */
        get thumbSize(): Size{
            return this._thumbSize;
        }

        /**
         * Gets or sets the size of the thumbnail
         *
         * @param {Size} value
         */
        set thumbSize(value: Size){

            // Check if value changed
            let changed: boolean = value !== this._thumbSize;

            // Set value
            this._thumbSize = value;

            // Trigger changed event
            if(changed){
                this.onThumbSizeChanged();
            }
        }

        /**
         * Property field
         */
        private _quality: number = 0.75;

        /**
         * Gets or sets the quality value
         *
         * @returns {number}
         */
        get quality(): number {
            return this._quality;
        }

        /**
         * Gets or sets the quality value
         *
         * @param {number} value
         */
        set quality(value: number) {
            this._quality = value;
        }

        //endregion

        //region Components

        /**
         * Field for infoBar property
         */
        private _divBar: Element<HTMLDivElement>;

        /**
         * Gets the info bar element
         *
         * @returns {Element<HTMLDivElement>}
         */
        get divBar(): Element<HTMLDivElement> {
            if (!this._divBar) {
                this._divBar = new Element<HTMLDivElement>(document.createElement('div'));
                this._divBar.addClass('info')
            }
            return this._divBar;
        }

        /**
         * Field for divExtension property
         */
        private _divExtension: Element<HTMLDivElement>;

        /**
         * Gets the extension div
         *
         * @returns {Element<HTMLDivElement>}
         */
        get divExtension(): Element<HTMLDivElement> {
            if (!this._divExtension) {
                this._divExtension = new Element<HTMLDivElement>(document.createElement('div'));
                this._divExtension.appendTo(this.divThumb.element);
                this._divExtension.addClass('extension');
            }
            return this._divExtension;
        }

        /**
         * Field for divName property
         */
        private _divName: Element<HTMLDivElement>;

        /**
         * Gets the name element
         *
         * @returns {Element<HTMLDivElement>}
         */
        get divName(): Element<HTMLDivElement> {
            if (!this._divName) {
                this._divName = new Element<HTMLDivElement>(document.createElement('div'));
                this._divName.addClass('name');
            }
            return this._divName;
        }

        /**
         * Field for divSize property
         */
        private _divSize: Element<HTMLDivElement>;

        /**
         * Gets the size element
         *
         * @returns {Element<HTMLDivElement>}
         */
        get divSize(): Element<HTMLDivElement> {
            if (!this._divSize) {
                this._divSize = new Element<HTMLDivElement>(document.createElement('div'));
                this._divSize.addClass('size');
            }
            return this._divSize;
        }

        /**
         * Field for thumb property
         */
        private _divThumb: Element<HTMLDivElement>;

        /**
         * Gets the thumb of the item
         *
         * @returns {Element<HTMLDivElement>}
         */
        get divThumb(): Element<HTMLDivElement> {
            if (!this._divThumb) {
                this._divThumb = new Element<HTMLDivElement>(document.createElement('div'));
                this._divThumb.addClass('thumb');
            }
            return this._divThumb;
        }

        /**
         * Field for img property
         */
        private _img: Element<HTMLImageElement>;

        /**
         * Gets the image of the thumb
         *
         * @returns {Element<HTMLDivElement>}
         */
        get img(): Element<HTMLImageElement> {
            if (!this._img) {
                this._img = new Element<HTMLImageElement>(document.createElement('img'));
                this._img.element.setAttribute('alt', this.file.description);
                this.divThumb.add(this._img);
            }
            return this._img;
        }

        /**
         * Field for progressBar property
         */
        private _progressBar: ProgressItem;

        /**
         * Gets the progress item
         *
         * @returns {ProgressItem}
         */
        get progressBar(): ProgressItem {
            if (!this._progressBar) {
                this._progressBar = new ProgressItem();
                this._progressBar.maxValue = 100;
                this._progressBar.animated = false;

            }
            return this._progressBar;
        }


        //endregion

    }

}