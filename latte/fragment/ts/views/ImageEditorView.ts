/**
 * Created by josemanuel on 9/27/16.
 */
module latte {

    export enum ImageZoomMode{
        ACTUAL_SIZE,
        FIT,
        NUMBER
    }

    /**
     *
     */
    export class ImageEditorView extends ToolbarView {

        //region Static

        /**
         * Creates an editor, shows it and returns it
         * @returns {latte.ImageEditorView}
         */
        static showEditor(): ImageEditorView{
            let editor = new ImageEditorView();
            let current = View.mainView;

            editor.closeRequested.add(() => {
                View.mainView = current;
            });

            View.mainView = editor;

            return editor;
        }

        static editImageByUrl(url: string): ImageEditorView{
            let editor = ImageEditorView.showEditor();
            editor.loadImageFromUrl(url);
            return editor;
        }

        static editImage(image: HTMLImageElement): ImageEditorView{

            let editor = ImageEditorView.showEditor();
            editor.image = image;
            return editor;

        }
        //endregion

        //region Fields
        //endregion

        /**
         * Creates the editor view
         */
        constructor() {
            super();

            this.addClass('image-editor');


            this.toolbar.faceVisible = false;
            this.toolbar.items.add(this.btnRotateCounterClockwise);
            this.toolbar.items.add(this.btnRotateClockwise);
            this.toolbar.items.add(this.lblZoom);
            this.toolbar.sideItems.add(this.btnClose);

            this.container.click(() => {
                if(this.zoomMode == ImageZoomMode.FIT) {
                    this.zoomMode = ImageZoomMode.ACTUAL_SIZE;
                }else {
                    this.zoomMode = ImageZoomMode.FIT;
                }
            });


        }

        //region Private Methods
        private layoutCheck(){
            let img = this.image; if(!img) return;
            let size = new Size(this.container.width(), this.container.height());

            if(img.naturalWidth > size.width || img.naturalHeight > size.height) {
                this.zoomMode = ImageZoomMode.FIT;
            }else {
                this.zoomMode = ImageZoomMode.ACTUAL_SIZE;
            }
            this.image.style.visibility = 'visible';
        }
        //endregion

        //region Methods

        /**
         * Loads the image from the specified url
         * @param url
         */
        loadImageFromUrl(url: string){

            this.image = null;
            this.infoItem = this.progressItem;

            let loader = new ImageLoader(url);

            loader.progressChanged.add(() => {
                this.progressItem.value = loader.progress * 100;
            });

            loader.ended.add(() => {
                this.image = loader.resultImage;
                this.infoItem = null;
            });

            loader.start();

        }

        /**
         * Raises the <c>image</c> event
         */
        onImageChanged(){
            if(this._imageChanged){
                this._imageChanged.raise();
            }

            this.container.empty();

            if(this.image){
                this.zoomMode = null;
                this.container.append(this.image);
                this.image.style.visibility = 'hidden';

                this.image.onload = () => {this.layoutCheck()}
            }
        }

        /**
         * Raises the <c>zoomMode</c> event
         */
        onZoomModeChanged(){
            if(this._zoomModeChanged){
                this._zoomModeChanged.raise();
            }

            if(this.zoomMode == null) {
                return;
            }

            let size = new Size(this.container.width(), this.container.height());
            let img = this.image;

            if(!img){
                return;
            }

            let imgSize = new Size(img.naturalWidth, img.naturalHeight);

            img.className = '';
            img.style.marginTop = '';
            img.style.marginLeft = '';

            switch(this.zoomMode){
                case ImageZoomMode.ACTUAL_SIZE:
                    img.width = img.naturalWidth;
                    img.height = img.naturalHeight;
                    this.lblZoom.text = strings.actualSize;
                    break;

                case ImageZoomMode.FIT:
                    let fitted = imgSize.scaleToFit(size);
                    img.width = fitted.width;
                    img.height = fitted.height;
                    this.lblZoom.text = sprintf("%s%", Math.round(fitted.area / imgSize.area * 100));
                    break;
            }

            if(size.width > img.width) {
                img.classList.add('centered-x');
                img.style.marginLeft = sprintf('%spx', Math.round(-img.width / 2));
            }

            if(size.height > img.height) {
                img.classList.add('centered-y');
                img.style.marginTop = sprintf('%spx', Math.round(-img.height / 2));
            }

            if(!size.contains(imgSize)) {
                this.container.css('overflow', 'auto');
            }

        }

        rotateImageCounterClockwise(){
            this.image = ImageUtil.rotateCounterClockwise(this.image);
        }

        /**
         * Rotates the image clockwise
         */
        rotateImageClockwise(){
            this.image = ImageUtil.rotateClockwise(this.image);
        }

        //endregion

        //region Events
        
        
        /**
         * Back field for event
         */
        private _closeRequested: LatteEvent;
        
        /**
         * Gets an event raised when the close of editor has been requested
         *
         * @returns {LatteEvent}
         */
        get closeRequested(): LatteEvent{
            if(!this._closeRequested){
                this._closeRequested = new LatteEvent(this);
            }
            return this._closeRequested;
        }
        
        /**
         * Raises the <c>closeRequested</c> event
         */
        onCloseRequested(){
            if(this._closeRequested){
                this._closeRequested.raise();
            }
        }
        
        /**
         * Back field for event
         */
        private _imageChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the image property changes
         *
         * @returns {LatteEvent}
         */
        get imageChanged(): LatteEvent{
            if(!this._imageChanged){
                this._imageChanged = new LatteEvent(this);
            }
            return this._imageChanged;
        }

        /**
         * Back field for event
         */
        private _zoomModeChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the zoomMode property changes
         *
         * @returns {LatteEvent}
         */
        get zoomModeChanged(): LatteEvent{
            if(!this._zoomModeChanged){
                this._zoomModeChanged = new LatteEvent(this);
            }
            return this._zoomModeChanged;
        }

        //endregion

        //region Properties
        /**
         * Property field
         */
        private _image: HTMLImageElement = null;

        /**
         * Gets or sets the image of the editor
         *
         * @returns {HTMLImageElement}
         */
        get image(): HTMLImageElement{
            return this._image;
        }

        /**
         * Gets or sets the image of the editor
         *
         * @param {HTMLImageElement} value
         */
        set image(value: HTMLImageElement){

            // Check if value changed
            let changed: boolean = value !== this._image;

            // Set value
            this._image = value;

            // Trigger changed event
            if(changed){
                this.onImageChanged();
            }
        }

        /**
         * Property field
         */
        private _zoomMode: ImageZoomMode = null;

        /**
         * Gets or sets the image zoom mode
         *
         * @returns {ImageZoomMode}
         */
        get zoomMode(): ImageZoomMode{
            return this._zoomMode;
        }

        /**
         * Gets or sets the image zoom mode
         *
         * @param {ImageZoomMode} value
         */
        set zoomMode(value: ImageZoomMode){

            // Check if value changed
            let changed: boolean = value !== this._zoomMode;

            // Set value
            this._zoomMode = value;

            // Trigger changed event
            if(changed){
                this.onZoomModeChanged();
            }
        }

        //endregion

        //region Components

        /**
         * Field for btnClose property
         */
        private _btnClose: ButtonItem;

        /**
         * Gets the close button
         *
         * @returns {ButtonItem}
         */
        get btnClose(): ButtonItem {
            if (!this._btnClose) {
                this._btnClose = new ButtonItem(null, LinearIcon.cross, () => this.onCloseRequested());
            }
            return this._btnClose;
        }

        /**
         * Field for btnRotateClockwise property
         */
        private _btnRotateClockwise: ButtonItem;

        /**
         * Gets the rotate clockwise button
         *
         * @returns {ButtonItem}
         */
        get btnRotateClockwise(): ButtonItem {
            if (!this._btnRotateClockwise) {
                this._btnRotateClockwise = new ButtonItem(null, LinearIcon.redo, () => this.rotateImageClockwise());
            }
            return this._btnRotateClockwise;
        }

        /**
         * Field for btnRotateCounterClockwise property
         */
        private _btnRotateCounterClockwise: ButtonItem;

        /**
         * Gets the rotate counter clockwise button
         *
         * @returns {ButtonItem}
         */
        get btnRotateCounterClockwise(): ButtonItem {
            if (!this._btnRotateCounterClockwise) {
                this._btnRotateCounterClockwise = new ButtonItem(null, LinearIcon.undo, () => this.rotateImageCounterClockwise());
            }
            return this._btnRotateCounterClockwise;
        }


        /**
         * Field for lblZoom property
         */
        private _lblZoom: LabelItem;

        /**
         * Gets the zoom label
         *
         * @returns {LabelItem}
         */
        get lblZoom(): LabelItem {
            if (!this._lblZoom) {
                this._lblZoom = new LabelItem();
            }
            return this._lblZoom;
        }

        /**
         * Field for progressItem property
         */
        private _progressItem: ProgressItem;

        /**
         * Gets the progress item
         *
         * @returns {ProgressItem}
         */
        get progressItem(): ProgressItem {
            if (!this._progressItem) {
                this._progressItem = new ProgressItem();
                this._progressItem.animated = false;
                this._progressItem.element.css('min-width', 100);
                this._progressItem.element.css('max-width', 100);
            }
            return this._progressItem;
        }


        //endregion

    }

}