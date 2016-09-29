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
    export class ImageEditorView extends ToolbarView implements ISave {

        //region Static

        /**
         * Creates an editor, shows it and returns it without any image
         * @returns {latte.ImageEditorView}
         */
        static showEditor(save: () => any = null): ImageEditorView{
            let editor = new ImageEditorView();
            let current = View.mainView;

            editor.closeRequested.add(() => {
                View.mainView = current;
                editor.onClosed();
            });

            if(_isFunction(save)){
                editor.saveRequested.add(save);
            }

            View.mainView = editor;

            return editor;
        }

        /**
         * Shows the editor for the specified file
         * @param file
         */
        static editImageFile(file: File): ImageEditorView{

            if(!file.isImage) {
                throw "Not an image";
            }

            let editor = ImageEditorView.showEditor();

            editor.loadImageFromUrl(file.url);
            editor.saveRequested.add(() => {
                let img = editor.image;
                let rep = new FileReplacer();

                img.style.visibility = 'hidden';
                editor.infoItem = editor.progressItem;

                rep.id = String(file.idfile);
                rep.width = img.naturalWidth;
                rep.height = img.naturalHeight;
                rep.base64 = ImageUtil.getBase64(img.src);

                rep.progressChanged.add(() => {
                    editor.progressItem.value = Math.round(rep.progress * 100);
                });

                rep.complete.add(() => {
                    editor.progressItem = null;
                    img.style.visibility = 'visible';
                    editor.onSaved(); // Implementers have obligation to report this.
                });

                rep.upload();

            });

            return editor;

        }

        static editImageByUrl(url: string, save: () => any = null): ImageEditorView{
            let editor = ImageEditorView.showEditor(save);
            editor.loadImageFromUrl(url);
            return editor;
        }

        /**
         *
         * @param image
         * @param save
         * @returns {ImageEditorView}
         */
        static editImage(image: HTMLImageElement, save: () => any = null): ImageEditorView{

            let editor = ImageEditorView.showEditor(save);
            editor.image = image;
            return editor;

        }
        //endregion

        //region Fields
        private closeAfterSave = false;

        private bodyKeyChecker;

        //endregion

        /**
         * Creates the editor view
         */
        constructor() {
            super();

            this.addClass('image-editor');

            this.toolbar.faceVisible = false;
            this.toolbar.items.add(this.btnSave);
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

            this.bodyKeyChecker = (e: KeyboardEvent) => {
                // log("Key: " + e.keyCode)
                if(e.keyCode == Key.ESCAPE) {
                    this.btnClose.onClick();
                }
            };

            window.addEventListener('keydown', this.bodyKeyChecker);
            // window.addEventListener('keydown', (e) => {
            //     log(e.keyCode)
            // });

        }

        //region Private Methods

        private closeClick(){

            if(this.unsavedChanges) {
                DialogView.ask(strings.unsavedChanges, strings.saveChangesOnImageQ,
                [
                    new ButtonItem(strings.yesSaveChanges, null, () => {
                        this.closeAfterSave = true;
                        this.btnSave.onClick();
                    }),
                    new ButtonItem(strings.noIgnoreChanges, null, () => {
                        this.unsavedChanges = false;
                        this.onCloseRequested()
                    }),
                    new ButtonItem(strings.cancel)
                ])
            }else{
                this.onCloseRequested();
            }

        }

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
         * Raises the <c>closed</c> event
         */
        onClosed(){
            if(this._closed){
                this._closed.raise();
            }
            window.removeEventListener('keydown', this.bodyKeyChecker);
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
         * Raises the <c>editable</c> event
         */
        onEditableChanged(){
            if(this._editableChanged){
                this._editableChanged.raise();
            }

            this.btnSave.visible = this.editable;
            this.btnRotateClockwise.visible = this.editable;
            this.btnRotateCounterClockwise.visible = this.editable;
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
         * Raises the <c>saveRequested</c> event
         */
        onSaveRequested(){
            if(this._saveRequested){
                this._saveRequested.raise();
            }
        }

        /**
         * Raises the <c>saved</c> event
         */
        onSaved(){
            if(this._saved){
                this._saved.raise();
            }

            this.unsavedChanges = false;

            if(this.closeAfterSave) {
                this.onCloseRequested();
            }

        }

        onUnsavedChangesChanged(){
            super.onUnsavedChangesChanged();

            this.btnSave.enabled = this.unsavedChanges;

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

        /**
         * Rotates the image counter clockwise
         */
        rotateImageCounterClockwise(){
            this.image = ImageUtil.rotateCounterClockwise(this.image);
            this.unsavedChanges = true;
        }

        /**
         * Rotates the image clockwise
         */
        rotateImageClockwise(){
            this.image = ImageUtil.rotateClockwise(this.image);
            this.unsavedChanges = true;
        }

        //endregion

        //region Events


        /**
         * Back field for event
         */
        private _closed: LatteEvent;

        /**
         * Gets an event raised when the editor has been closed
         *
         * @returns {LatteEvent}
         */
        get closed(): LatteEvent{
            if(!this._closed){
                this._closed = new LatteEvent(this);
            }
            return this._closed;
        }

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
         * Back field for event
         */
        private _editableChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the editable property changes
         *
         * @returns {LatteEvent}
         */
        get editableChanged(): LatteEvent{
            if(!this._editableChanged){
                this._editableChanged = new LatteEvent(this);
            }
            return this._editableChanged;
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
        private _saved: LatteEvent;

        /**
         * Gets an event raised when the image is saved
         *
         * @returns {LatteEvent}
         */
        get saved(): LatteEvent{
            if(!this._saved){
                this._saved = new LatteEvent(this);
            }
            return this._saved;
        }

        /**
         * Back field for event
         */
        private _saveRequested: LatteEvent;

        /**
         * Gets an event raised when the save has been requested
         *
         * @returns {LatteEvent}
         */
        get saveRequested(): LatteEvent{
            if(!this._saveRequested){
                this._saveRequested = new LatteEvent(this);
            }
            return this._saveRequested;
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
        private _editable: boolean = true;

        /**
         * Gets or sets a value indicating if the image should be editable
         *
         * @returns {boolean}
         */
        get editable(): boolean{
            return this._editable;
        }

        /**
         * Gets or sets a value indicating if the image should be editable
         *
         * @param {boolean} value
         */
        set editable(value: boolean){

            // Check if value changed
            let changed: boolean = value !== this._editable;

            // Set value
            this._editable = value;

            // Trigger changed event
            if(changed){
                this.onEditableChanged();
            }
        }

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
                this._btnClose = new ButtonItem(null, LinearIcon.cross, () => this.closeClick());
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
         * Field for btnSave property
         */
        private _btnSave: ButtonItem;

        /**
         * Gets the save button
         *
         * @returns {ButtonItem}
         */
        get btnSave(): ButtonItem {
            if (!this._btnSave) {
                this._btnSave = new ButtonItem(null, LinearIcon.download, () => this.onSaveRequested());
                this._btnSave.enabled = false;
            }
            return this._btnSave;
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