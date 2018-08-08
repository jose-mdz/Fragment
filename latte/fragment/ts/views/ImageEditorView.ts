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
     * Possible areas of crop
     */
    export enum CropArea{
        NONE = 0,
        INSIDE = 1,
        TOP = 2,
        LEFT = 3,
        RIGHT = 4,
        BOTTOM = 5,
        TOP_LEFT = 6,
        TOP_RIGHT = 7,
        BOTTOM_LEFT = 8,
        BOTTOM_RIGHT = 9
    }

    export enum ImageEditorTool{
        NONE,
        CROP
    }

    export interface IImageEditorUndo{
        bytes: number,
        image: HTMLImageElement
    }

    /**
     *
     */
    export class ImageEditorView extends ToolbarView implements ISave {

        //region Static

        static QUALITY: number;

        /**
         * Gets a function that saves the image on the editor to the specified file
         * @returns {null}
         */
        private static fileSaver(file: File, editor: ImageEditorView): (callback: () => any) => any{
            return (callback) => {
                let img = editor.image;
                let can = editor.canvas;
                let rep = new FileReplacer();

                can.style.visibility = 'hidden';
                editor.infoItem = editor.progressItem;

                rep.id = String(file.idfile);
                rep.width = img.naturalWidth;
                rep.height = img.naturalHeight;
                rep.base64 = ImageUtil.getBase64(img.src);

                rep.progressChanged.add(() => {
                    editor.progressItem.value = Math.round(rep.progress * 100);
                });

                rep.complete.add(() => {
                    editor.infoItem = null;
                    can.style.visibility = 'visible';
                    file.path = rep.fileRecord.path;
                    file.size = rep.fileRecord.size;
                    if(_isFunction(callback)) {
                        callback();
                    }
                });

                rep.upload();
            };
        }

        /**
         * Creates an editor, shows it and returns it without any image
         * @returns {latte.ImageEditorView}
         */
        static showEditor(save: (callback: () => any) => any = null): ImageEditorView{
            let editor = new ImageEditorView();
            let current = View.mainView;

            editor.closeRequested.add(() => {
                View.mainView = current;
                editor.onClosed();
            });

            if(_isFunction(save)){
                editor.saveHandler = save;
                // editor.saveRequested.add(save);
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

            // Configure Image Util for File transparency
            ImageUtil.DEFAULT_TYPE = ImageUtil.mimeTypeOf(file.extension);

            let editor = ImageEditorView.showEditor();

            editor.loadImageFromUrl(file.url);
            editor.saveHandler = ImageEditorView.fileSaver(file, editor);

            // editor.saveRequested.add(ImageEditorView.fileSaver(file, editor));

            return editor;

        }

        /**
         * Shows the editor for the specified files, starting by specified image as current.
         */
        static editImageFiles(files: File[], current: number = 0){

            let editor: ImageEditorView = ImageEditorView.showEditor();

            let goImage = (index: number) => {

                if(index < 0 || index >= files.length){
                    throw "Index not in bounds";
                }

                let file = files[index];

                if(!file.isImage) {
                    throw "Not an image";
                }

                editor.loadImageFromUrl(file.url);
                editor.saveHandler = ImageEditorView.fileSaver(file, editor);
                // editor.saveRequested.handlers = [ImageEditorView.fileSaver(file, editor)];
                current = index;
            };

            let tryGo = (index: number) => {
                editor.dismissImage(() => {
                    goImage(index);
                });
            };

            editor.nextImageRequested.add(() => {
                if(current == files.length - 1) {
                    current = 0;
                }else{
                    current++;
                }
                tryGo(current);
            });

            editor.previousImageRequested.add(() => {
                if(current == 0) {
                    current = files.length - 1
                }else{
                    current--;
                }
                tryGo(current);
            });

            tryGo(current);

            return editor;
        }

        /**
         * Shows the editor for the specified image's URL
         * @param url
         * @param save
         * @returns {ImageEditorView}
         */
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
        // private closeAfterSave = false;

        private bodyKeyChecker;

        private draggingCropArea: CropArea = CropArea.NONE;

        private undoStack: IImageEditorUndo[] = [];

        private loadingFromUndo = false;

        private defaultQuality = 0.85;

        private _quality = 0;

        //endregion

        /**
         * Creates the editor view
         */
        constructor() {
            super();

            this.addClass('image-editor');

            this.toolbar.faceVisible = false;
            this.toolbar.items.add(this.btnSave);
            this.toolbar.items.add(this.btnUndo);
            this.toolbar.items.add(this.btnResize);
            this.toolbar.items.add(this.btnCrop);
            // this.toolbar.items.add(this.btnRotateCounterClockwise);
            this.toolbar.items.add(this.btnRotateClockwise);
            this.toolbar.sideItems.add(this.btnClose);
            this.toolbar.sideItems.add(this.btnCropNow);

            this.anchorBottom = this.bottomToolbar;
            this.bottomToolbar.faceVisible = false;
            this.bottomToolbar.items.add(this.lblInfo);
            this.bottomToolbar.sideItems.add(this.lblZoom);

            this.container.get(0).addEventListener('mousemove', (e) => this.mouseMove(e));
            this.container.get(0).addEventListener('mousedown', (e) => this.mouseDown(e));
            this.container.get(0).addEventListener('mouseup', (e) => this.mouseUp(e));
            this.container.append(this.canvas);

            this.bodyKeyChecker = (e: KeyboardEvent) => {

                if(View.modalView instanceof DialogView) {
                    return;
                }

                let control = e.metaKey || e.ctrlKey;
                let something = true;
                let editable = this.editable;

                if(e.keyCode == Key.ESCAPE) {
                    this.cancelCurrentAction();

                }else if(e.keyCode == Key.ARROW_RIGHT && !control){
                    this.onNextImageRequested();

                }else if(e.keyCode == Key.ARROW_LEFT && !control){
                    this.onPreviousImageRequested();

                }else if(e.keyCode == Key.C && !control && editable){
                    this.btnCrop.onClick();

                }else if(e.keyCode == Key.I && !control && editable){
                    this.btnResize.onClick();

                }else if(e.keyCode == Key.R && !control && editable){
                    this.rotateImageClockwise();

                }else if(e.keyCode == Key.S && control && editable){
                    this.btnSave.onClick();

                }else if(e.keyCode == Key.S && !control && editable){
                    this.btnResize.onClick();

                }else if(e.keyCode == Key.Z && control && editable) {
                    this.undo();

                }else if(e.keyCode == Key.SPACEBAR) {
                    this.swapZoom();

                }else if(e.keyCode == Key.ENTER) {
                    if(this.tool == ImageEditorTool.NONE) {
                        this.swapZoom();

                    }else if(this.tool == ImageEditorTool.CROP){
                        this.cropNow();
                    }
                }else{
                    something = false;
                }

                if(something) {
                    e.preventDefault();
                }
            };

            window.addEventListener('keydown', this.bodyKeyChecker);

        }

        //region Private Methods

        /**
         * Prepares UI for crop tool
         */
        private activateCrop(){
            if(this._cropper) {
                return;
            }

            this.canvas.appendChild(this.cropper.element);
            this.canvas.appendChild(this.cropperOverlayTop);
            this.canvas.appendChild(this.cropperOverlayLeft);
            this.canvas.appendChild(this.cropperOverlayRight);
            this.canvas.appendChild(this.cropperOverlayBottom);

            this.cropBounds = {};
        }

        /**
         * Handles click on the close button
         */
        private closeClick(){

            this.dismissImage(() => {
                this.onCloseRequested();
            });

        }

        /**
         * Actually performs the crop of the crop tool
         */
        private cropNow(){

            let options: ImageExportOptions = <ImageExportOptions>{
                quality: ImageEditorView.QUALITY
            };

            this.enableControls(false);
            this.image = ImageUtil.cropImage(this.image, this.cropBounds, options);
            this.enableControls(true);
            this.unsavedChanges = true;

            this.tool = ImageEditorTool.NONE;
        }

        /**
         * Checks image layout after image loading
         */
        private layoutCheck(){
            let img = this.image; if(!img) return;
            let size = new Size(this.container.width(), this.container.height());

            this.updateInfo();

            if(img.naturalWidth > size.width || img.naturalHeight > size.height) {
                this.zoomMode = ImageZoomMode.FIT;
            }else {
                this.zoomMode = ImageZoomMode.ACTUAL_SIZE;
            }
            this.canvas.style.visibility = 'visible';
        }

        /**
         * Gets the crop area depending on the specified point
         * @param x
         * @param y
         * @returns {any}
         */
        private getCropArea(x: number, y: number): CropArea{

            if(!this._cropper) {
                return CropArea.NONE;
            }

            let cr = this.canvas.getBoundingClientRect();
            let canvasr = new Rectangle(cr.left, cr.top, cr.width, cr.height);
            let br = this.cropper.element.getBoundingClientRect();
            let r = new Rectangle(br.left, br.top, br.width, br.height);
            let sense = 10;

            // Sensors
            let sTop = new Rectangle(r.left, r.top - sense, r.width, sense * 2);
            let sBottom = new Rectangle(r.left, r.bottom - sense, r.width, sense * 2);
            let sLeft = new Rectangle(r.left - sense, r.top, sense * 2, r.height);
            let sRight = new Rectangle(r.right - sense, r.top, sense * 2, r.height);
            let sTopLeft = new Rectangle(r.left - sense, r.top - sense, sense * 2, sense * 2);
            let sTopRight = new Rectangle(r.right - sense, r.top - sense, sense * 2, sense * 2);
            let sBottomLeft = new Rectangle(r.left - sense, r.bottom - sense, sense * 2, sense * 2);
            let sBottomRight = new Rectangle(r.right - sense, r.bottom - sense, sense * 2, sense * 2);

            let checkers: any = [
                [CropArea.TOP_LEFT, sTopLeft],
                [CropArea.TOP_RIGHT, sTopRight],
                [CropArea.BOTTOM_RIGHT, sBottomRight],
                [CropArea.BOTTOM_LEFT, sBottomLeft],
                [CropArea.TOP, sTop],
                [CropArea.LEFT, sLeft],
                [CropArea.RIGHT, sRight],
                [CropArea.BOTTOM, sBottom],
            ];

            for(let i in checkers){
                let checker:Rectangle = checkers[i][1];

                if(checker.contains(x, y)) {
                    return checkers[i][0];
                }
            }

            if(canvasr.contains(x, y)) {
                return CropArea.INSIDE;
            }

            return CropArea.NONE;
        }

        /**
         * Handles editor mousemove
         * @param e
         */
        private mouseMove(e: MouseEvent){
            if(this.draggingCropArea) {
                this.updateCropperDrag(e.x, e.y);

            }else{
                if(this.tool == ImageEditorTool.CROP) {
                    this.mouseCropArea = this.getCropArea(e.clientX, e.clientY);
                }
            }
        }

        /**
         * Handles editor mouse up
         * @param e
         */
        private mouseUp(e: MouseEvent){

            if(this.draggingCropArea) {
                this.draggingCropArea = null;
                this.cropBounds = this.cropBoundsCorrection(this.cropBounds);
                e.preventDefault();
                e.stopImmediatePropagation();
            }else{
                this.swapZoom();
            }
        }

        /**
         * Handles editor mouse down
         * @param e
         */
        private mouseDown(e: MouseEvent){

            let cropArea = this.getCropArea(e.clientX, e.clientY);

            if(cropArea != CropArea.NONE) {

                if(cropArea == CropArea.INSIDE) {
                    // Set cropper to cross-hair position
                    this.cropBounds = {
                        left: this.toActualX(e.clientX),
                        top: this.toActualY(e.clientY),
                        right: this.image.naturalWidth - this.toActualX(e.clientX),
                        bottom: this.image.naturalHeight - this.toActualY(e.clientY),
                    };
                    // Set Crop Area to SouthEast
                    cropArea = CropArea.BOTTOM_RIGHT;
                }

                this.draggingCropArea = cropArea;
                e.preventDefault();
                e.stopImmediatePropagation();
            }
        }

        /**
         * Transforms a client coordinate to an image coordinate
         * @param x
         * @returns {number}
         */
        private toActualX(x: number): number{
            let r = this.canvas.getBoundingClientRect();
            return (x - r.left) / (this.canvas.clientWidth / this.image.naturalWidth);
        }

        /**
         * Transforms a client coordinate to an image coordinate
         * @param y
         * @returns {number}
         */
        private toActualY(y: number):number{
            let r = this.canvas.getBoundingClientRect();
            return (y - r.top) / (this.canvas.clientHeight / this.image.naturalHeight);
        }

        /**
         * Updates the cropper by the current draggingCropArea
         * @param x
         * @param y
         */
        private updateCropperDrag(x: number, y: number){

            let r = this.canvas.getBoundingClientRect();
            let b: ICropBounds = {}; for(let i in this.cropBounds) b[i] = this.cropBounds[i];
            let vz = this.canvas.clientHeight / this.image.naturalHeight;
            let hz = this.canvas.clientWidth / this.image.naturalWidth ;

            switch(this.draggingCropArea){
                case CropArea.TOP:
                    b.top = (y - r.top) / vz;
                    break;
                case CropArea.LEFT:
                    b.left = (x - r.left) / hz;
                    break;
                case CropArea.BOTTOM:
                    b.bottom = (r.bottom - y) / vz;
                    break;
                case CropArea.RIGHT:
                    b.right = (r.right - x) / hz;
                    break;
                case CropArea.TOP_LEFT:
                    b.top = (y - r.top) / vz;
                    b.left = (x - r.left) / hz;
                    break;
                case CropArea.TOP_RIGHT:
                    b.top = (y - r.top) / vz;
                    b.right = (r.right - x) / hz;
                    break;
                case CropArea.BOTTOM_LEFT:
                    b.bottom = (r.bottom - y) / vz;
                    b.left = (x - r.left) / hz;
                    break;
                case CropArea.BOTTOM_RIGHT:
                    b.bottom = (r.bottom - y) / vz;
                    b.right = (r.right - x) / hz;
                    break;
            }

            this.cropBounds = b;

        }

        /**
         * Converts the crop bounds to an actual rectangle
         * @param b
         * @returns {latte.Rectangle}
         */
        private cropBoundsToRectangle(b: ICropBounds): Rectangle{
            let imgW = this.image.naturalWidth;
            let imgH = this.image.naturalHeight;
            let top = b.top || 0;
            let left = b.left || 0;
            let right = b.right || 0;
            let bottom = b.bottom || 0;
            return new Rectangle(left, top, imgW - left - right, imgH - top - bottom);
        }

        /**
         * Returns a corrected ICropBounds object, making the rectangle absolute and
         * not larger than the image or canvas
         * @param b
         * @returns {{top: number, left: number, right: number, bottom: number}}
         */
        private cropBoundsCorrection(b: ICropBounds): ICropBounds{
            let imgW = this.image.naturalWidth;
            let imgH = this.image.naturalHeight;
            let r = this.cropBoundsToRectangle(b).absolute();

            // Max out for natural size
            r = r.intersection(new Rectangle(0, 0, imgW, imgH));

            return {
                top: r.top,
                left: r.left,
                right: imgW - r.right,
                bottom: imgH - r.bottom
            }

        }

        private swapZoom(){
            if(this.zoomMode == ImageZoomMode.FIT) {
                this.zoomMode = ImageZoomMode.ACTUAL_SIZE;
            }else {
                this.zoomMode = ImageZoomMode.FIT;
            }
        }

        private updateInfo(){
            switch(this.tool){
                case ImageEditorTool.NONE:
                    let sw = Culture.formatNumber(this.image.naturalWidth);
                    let sh = Culture.formatNumber(this.image.naturalHeight);
                    this.lblInfo.text = sprintf("%spx x %spx (%s)", sw, sh, File.humanSizeOf(this.bytes));
                    break;
                case ImageEditorTool.CROP:
                    let r = this.cropBoundsToRectangle(this.cropBounds);
                    let cw = Culture.formatNumber(r.width);
                    let ch = Culture.formatNumber(r.height);
                    this.lblInfo.text = sprintf("%spx x %spx", cw, ch);
                    break;
            }
        }

        //endregion

        //region Methods

        /**
         * Cancels current action
         */
        cancelCurrentAction(){
            switch(this.tool){
                case ImageEditorTool.NONE:
                    this.btnClose.onClick();
                    break;
                case ImageEditorTool.CROP:
                    this.tool = ImageEditorTool.NONE;
                    break;
            }
        }

        /**
         * Tries to dismiss the image, first asking for saving changes
         * @param callback
         */
        dismissImage(callback: () => any){
            if(this.unsavedChanges) {
                DialogView.ask(strings.unsavedChanges, strings.saveChangesOnImageQ,
                    [
                        new ButtonItem(strings.yesSaveChanges, null, () => {
                            // this.closeAfterSave = true;
                            this.save(callback);
                        }),
                        new ButtonItem(strings.noIgnoreChanges, null, () => {
                            this.unsavedChanges = false;
                            callback();
                        }),
                        new ButtonItem(strings.cancel)
                    ])
            }else{
                callback();
            }

        }

        /**
         * Changes the enable state of controls
         * @param enabled
         */

        /**
         * Gets the quality setting for images
         * @param callback
         */
        getQuality(callback: (quality: number) => void){

            if (ImageEditorView.QUALITY) {
                callback(ImageEditorView.QUALITY);
            } else {
                Setting.getGlobalByName('image-quality').send((s: Setting) => {

                    ImageEditorView.QUALITY = parseFloat(s.value) || ImageUtil.DEFAULT_QUALITY;

                    // Is this a patch?
                    ImageUtil.DEFAULT_QUALITY  = ImageEditorView.QUALITY;

                    callback(ImageEditorView.QUALITY);
                })
            }

        }

        enableControls(enabled: boolean){
            this.btnUndo.enabled =
                this.btnResize.enabled =
                    this.btnCrop.enabled =
                        this.btnRotateClockwise.enabled = enabled;

            this.btnSave.enabled = enabled && this.unsavedChanges;
        }

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
                this.bytes = loader.resultBytes;
                this.infoItem = null;
            });

            loader.start();

        }

        /**
         * Raises the <c>bytes</c> event
         */
        onBytesChanged(){
            if(this._bytesChanged){
                this._bytesChanged.raise();
            }
            this.updateInfo();
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
         * Raises the <c>cropBounds</c> event
         */
        onCropBoundsChanged(){
            if(this._cropBoundsChanged){
                this._cropBoundsChanged.raise();
            }

            if(this._cropper) {

                let bounds = this.cropBoundsCorrection(this.cropBounds);
                let vz = this.canvas.clientHeight / this.image.naturalHeight;
                let hz = this.canvas.clientWidth / this.image.naturalWidth ;
                let top = vz * (bounds.top || 0);
                let left = hz * (bounds.left || 0);
                let right = hz * (bounds.right || 0);
                let bottom = vz * (bounds.bottom || 0);

                this.cropper.style.top = top + 'px';
                this.cropper.style.left = left + 'px';
                this.cropper.style.right = right + 'px';
                this.cropper.style.bottom = bottom + 'px';

                this.cropperOverlayTop.style.height = top + 'px';
                this.cropperOverlayLeft.style.width = left + 'px';
                this.cropperOverlayLeft.style.top = top + 'px';
                this.cropperOverlayLeft.style.bottom = bottom + 'px';
                this.cropperOverlayRight.style.width = right + 'px';
                this.cropperOverlayRight.style.top = top + 'px';
                this.cropperOverlayRight.style.bottom = bottom + 'px';
                this.cropperOverlayBottom.style.height = bottom + 'px';
            }

            this.updateInfo();
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
            this.btnUndo.visible = this.editable;
            this.btnCrop.visible = this.editable;
            this.btnResize.visible = this.editable;
        }

        /**
         * Raises the <c>image</c> event
         */
        onImageChanged(){
            if(this._imageChanged){
                this._imageChanged.raise();
            }

            $(this.canvas).empty();
            this._cropper = null;

            if(this.image){

                // Wait for quality parameter before loading image
                this.getQuality( q => {

                    //Debug console.log(q);

                    if(this.image.src.indexOf('data:image') === 0) {
                        this.bytes = ImageUtil.base64ByteSize(ImageUtil.getBase64(this.image.src));
                    }
                    this.zoomMode = null;
                    this.canvas.appendChild(this.image);
                    this.canvas.style.visibility = 'hidden';
                    if(this.image.naturalWidth > 0) {
                        this.layoutCheck();
                    }else{
                        this.image.onload = () => {this.layoutCheck()};
                    }

                    this.btnUndo.enabled = this.undoStack.length > 0;
                });

            }
        }

        /**
         * Raises the <c>mouseCropArea</c> event
         */
        onMouseCropAreaChanged(){
            if(this._mouseCropAreaChanged){
                this._mouseCropAreaChanged.raise();
            }

            let n = 'default';

            switch(this.mouseCropArea){
                case CropArea.TOP:          n = 'ns-resize';    break;
                case CropArea.BOTTOM:       n = 'ns-resize';    break;
                case CropArea.LEFT:         n = 'ew-resize';    break;
                case CropArea.RIGHT:        n = 'ew-resize';    break;
                case CropArea.TOP_LEFT:     n = 'nwse-resize';  break;
                case CropArea.TOP_RIGHT:    n = 'nesw-resize';  break;
                case CropArea.BOTTOM_LEFT:  n = 'nesw-resize';  break;
                case CropArea.BOTTOM_RIGHT: n = 'nwse-resize';  break;
                case CropArea.INSIDE:       n = 'crosshair';    break;
            }

            this.container.css('cursor', n);
        }

        /**
         * Raises the <c>nextImageRequested</c> event
         */
        onNextImageRequested(){
            if(this._nextImageRequested){
                this._nextImageRequested.raise();
            }
        }

        /**
         * Raises the <c>previousImageRequested</c> event
         */
        onPreviousImageRequested(){
            if(this._previousImageRequested){
                this._previousImageRequested.raise();
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

        }

        /**
         * Raises the <c>saveHandler</c> event
         */
        onSaveHandlerChanged(){
            if(this._saveHandlerChanged){
                this._saveHandlerChanged.raise();
            }
            //TODO: Aqui me quede, reemplazar por saveRequested para hacer chaining
        }

        /**
         * Raises the <c>tool</c> event
         */
        onToolChanged(){
            if(this._toolChanged){
                this._toolChanged.raise();
            }

            switch(this.tool){
                case ImageEditorTool.NONE:
                    if(this._cropper) {
                        this._cropper.removeFromParent();
                        this._cropperOverlayTop.remove();
                        this._cropperOverlayLeft.remove();
                        this._cropperOverlayRight.remove();
                        this._cropperOverlayBottom.remove();
                        this._cropper = null;
                    }
                    this.container.css('cursor', 'default');
                    this.btnCropNow.visible = false;
                    this.btnClose.visible = true;
                    this.btnCrop.enabled = true;
                    break;
                case ImageEditorTool.CROP:
                    this.activateCrop();
                    this.btnCropNow.visible = true;
                    this.btnClose.visible = false;
                    this.btnCrop.enabled = false;
                    break;
            }

            this.updateInfo();
        }

        /**
         * Override
         */
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
            let can = new Element<HTMLDivElement>(this.canvas);
            let imgSize = new Size(img.naturalWidth, img.naturalHeight);
            this._zoom = 1;

            can.removeClass('centered-x');
            can.removeClass('centered-y');
            can.style.marginTop = '';
            can.style.marginLeft = '';

            switch(this.zoomMode){
                case ImageZoomMode.ACTUAL_SIZE:
                    can.width = img.naturalWidth;
                    can.height = img.naturalHeight;
                    this.lblZoom.text = strings.actualSize;
                    break;

                case ImageZoomMode.FIT:
                    let fitted = imgSize.scaleToFit(size);
                    can.width = fitted.width;
                    can.height = fitted.height;
                    this._zoom = fitted.area / imgSize.area;
                    this.lblZoom.text = sprintf("%s%", Math.round(this.zoom * 100));
                    break;
            }

            img.width = can.width;
            img.height = can.height;

            if(size.width > img.width) {
                can.addClass('centered-x');
                can.style.marginLeft = sprintf('%spx', Math.round(-img.width / 2));
            }

            if(size.height > img.height) {
                can.addClass('centered-y');
                can.style.marginTop = sprintf('%spx', Math.round(-img.height / 2));
            }

            if(size.height < img.height && size.width < img.height) {
                can.addClass('overflow');
            }else{
                can.removeClass('overflow');
            }

            if(!size.contains(imgSize)) {
                this.container.css('overflow', 'auto');
            }

            if(this._cropper) {
                // Force update of cropper
                this.onCropBoundsChanged();
            }
        }

        /**
         * Rotates the image counter clockwise
         */
        rotateImageCounterClockwise(){
            this.enableControls(false);
            this.image = ImageUtil.rotateCounterClockwise(this.image);
            this.enableControls(false);
            this.unsavedChanges = true;
        }

        /**
         * Rotates the image clockwise
         */
        rotateImageClockwise(){
            this.enableControls(false);
            this.image = ImageUtil.rotateClockwise(this.image);
            this.enableControls(true);
            this.unsavedChanges = true;
        }

        /**
         * Tries to save the image, and calls the callback when done
         * @param callback
         */
        save(callback: ()  => any = null){
            if(this.saveHandler) {
                let f: (callback: () => any ) => any = this.saveHandler;
                f(() => {
                    this.onSaved();
                    if(_isFunction(callback)) {
                        callback();
                    }
                });
            }else{
                if(_isFunction(callback)) {
                    callback();
                }
            }
        }

        /**
         * Shows a dialog for resizing the image
         */
        showResizeDialog(){

            let width = this.image.naturalWidth;
            let height = this.image.naturalHeight;
            let scale = 1;
            let newWidth = width;
            let newHeight = height;
            let form = new FormView();
            let wpx = new InputItem(strings.widthPx, 'integer', width);
            let hpx = new InputItem(strings.heightPx, 'integer', height);
            let sp = new InputItem(strings.scaleImg, 'number', 100);
            let twpx: TextboxItem = <TextboxItem>wpx.valueItem;
            let thpx: TextboxItem = <TextboxItem>hpx.valueItem;
            let tscale: TextboxItem = <TextboxItem>sp.valueItem;
            let updating = false;
            let updatingScale = false;
            let updateUI = () => {
                updating = true;
                twpx.value = String(newWidth);
                thpx.value = String(newHeight);
                if(!updatingScale){
                    sp.value = String(Math.round(newWidth / width * 100));
                }
                updating = false;
            };

            wpx.valueChanged.add(() => {
                if(updating) return;
                newWidth = parseFloat(wpx.value);
                newHeight = Math.round(newWidth * height / width);
                updateUI();
            });
            hpx.valueChanged.add(() => {
                if(updating) return;
                newHeight = parseFloat(hpx.value);
                newWidth = Math.round(newHeight * width / height);
                updateUI();
            });
            sp.valueChanged.add(() => {
                if(updating) return;
                updatingScale = true;
                var area = (new Size(width, height)).area;
                var newArea = parseFloat(sp.value) / 100;
                newHeight = Math.round((area * newArea) / width);
                newWidth = Math.round(newHeight * width / height);
                updateUI();
                updatingScale = false;
            });

            tscale.sideLabel.text = '%';

            form.inputs.add(sp);
            form.inputs.add(wpx);
            form.inputs.add(hpx);

            let resizeNow = () => {

                if(newWidth != width || newHeight != height) {
                    this.enableControls(false);
                    let src = ImageUtil.resizeImage(this.image, {
                        size: new Size(newWidth, newHeight),
                        fit: ImageFit.AspectFit
                    });
                    let img = document.createElement('img');
                    img.src = src;
                    this.image = img;
                    this.enableControls(true);
                    this.unsavedChanges = true;
                }

            };

            let d = new DialogView();
            d.view = form;
            d.title = strings.resizeImage;
            d.addOkButton(() => resizeNow());
            d.addCancelButton();
            d.show();


        }

        /**
         * Undoes the last action
         */
        undo(){

            if(this.undoStack.length > 0) {
                let move = this.undoStack.pop();

                this.loadingFromUndo = true;
                this.image = move.image;
                this.loadingFromUndo = false;
            }

        }

        //endregion

        //region Events


        /**
         * Back field for event
         */
        private _bytesChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the bytes property changes
         *
         * @returns {LatteEvent}
         */
        get bytesChanged(): LatteEvent{
            if(!this._bytesChanged){
                this._bytesChanged = new LatteEvent(this);
            }
            return this._bytesChanged;
        }

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
        private _cropBoundsChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the cropBounds property changes
         *
         * @returns {LatteEvent}
         */
        get cropBoundsChanged(): LatteEvent{
            if(!this._cropBoundsChanged){
                this._cropBoundsChanged = new LatteEvent(this);
            }
            return this._cropBoundsChanged;
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
        private _mouseCropAreaChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the mouseCropArea property changes
         *
         * @returns {LatteEvent}
         */
        get mouseCropAreaChanged(): LatteEvent{
            if(!this._mouseCropAreaChanged){
                this._mouseCropAreaChanged = new LatteEvent(this);
            }
            return this._mouseCropAreaChanged;
        }

        /**
         * Back field for event
         */
        private _nextImageRequested: LatteEvent;

        /**
         * Gets an event raised when the next image is requested
         *
         * @returns {LatteEvent}
         */
        get nextImageRequested(): LatteEvent{
            if(!this._nextImageRequested){
                this._nextImageRequested = new LatteEvent(this);
            }
            return this._nextImageRequested;
        }

        /**
         * Back field for event
         */
        private _previousImageRequested: LatteEvent;

        /**
         * Gets an event raised when the previous image is requested
         *
         * @returns {LatteEvent}
         */
        get previousImageRequested(): LatteEvent{
            if(!this._previousImageRequested){
                this._previousImageRequested = new LatteEvent(this);
            }
            return this._previousImageRequested;
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
        private _saveHandlerChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the saveHandler property changes
         *
         * @returns {LatteEvent}
         */
        get saveHandlerChanged(): LatteEvent{
            if(!this._saveHandlerChanged){
                this._saveHandlerChanged = new LatteEvent(this);
            }
            return this._saveHandlerChanged;
        }

        /**
         * Back field for event
         */
        private _toolChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the tool property changes
         *
         * @returns {LatteEvent}
         */
        get toolChanged(): LatteEvent{
            if(!this._toolChanged){
                this._toolChanged = new LatteEvent(this);
            }
            return this._toolChanged;
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
        private _bytes: number = 0;

        /**
         * Gets or sets the size of the image in bytes
         *
         * @returns {number}
         */
        get bytes(): number{
            return this._bytes;
        }

        /**
         * Gets or sets the size of the image in bytes
         *
         * @param {number} value
         */
        set bytes(value: number){

            // Check if value changed
            let changed: boolean = value !== this._bytes;

            // Set value
            this._bytes = value;

            // Trigger changed event
            if(changed){
                this.onBytesChanged();
            }
        }

        /**
         * Property field
         */
        private _cropBounds: ICropBounds = null;

        /**
         * Gets or sets the crop bounds
         *
         * @returns {ICropBounds}
         */
        get cropBounds(): ICropBounds{
            return this._cropBounds;
        }

        /**
         * Gets or sets the crop bounds
         *
         * @param {ICropBounds} value
         */
        set cropBounds(value: ICropBounds){

            // Check if value changed
            let changed: boolean = value !== this._cropBounds;

            // Set value
            this._cropBounds = value;

            // Trigger changed event
            if(changed){
                this.onCropBoundsChanged();
            }
        }

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

            if(this._image) {
                if(!this.loadingFromUndo) {
                    this.undoStack.push({
                        image: this.image,
                        bytes: this.bytes
                    });
                }
            }

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
        private _mouseCropArea: CropArea = null;

        /**
         * Gets or sets the CropArea of current mouse position
         *
         * @returns {CropArea}
         */
        get mouseCropArea(): CropArea{
            return this._mouseCropArea;
        }

        /**
         * Gets or sets the CropArea of current mouse position
         *
         * @param {CropArea} value
         */
        set mouseCropArea(value: CropArea){

            // Check if value changed
            let changed: boolean = value !== this._mouseCropArea;

            // Set value
            this._mouseCropArea = value;

            // Trigger changed event
            if(changed){
                this.onMouseCropAreaChanged();
            }
        }

        /**
         * Property field
         */
        private _saveHandler: (callback: () => any) => any = null;

        /**
         * Gets or sets the save handler of the view
         *
         * @returns {(callback: () => any) => any}
         */
        get saveHandler(): (callback: () => any) => any{
            return this._saveHandler;
        }

        /**
         * Gets or sets the save handler of the view
         *
         * @param {(callback: () => any) => any} value
         */
        set saveHandler(value: (callback: () => any) => any){

            // Check if value changed
            let changed: boolean = value !== this._saveHandler;

            // Set value
            this._saveHandler = value;

            // Trigger changed event
            if(changed){
                this.onSaveHandlerChanged();
            }
        }

        /**
         * Property field
         */
        private _tool: ImageEditorTool = ImageEditorTool.NONE;

        /**
         * Gets or sets the current tool of the editor
         *
         * @returns {ImageEditorTool}
         */
        get tool(): ImageEditorTool{
            return this._tool;
        }

        /**
         * Gets or sets the current tool of the editor
         *
         * @param {ImageEditorTool} value
         */
        set tool(value: ImageEditorTool){

            // Check if value changed
            let changed: boolean = value !== this._tool;

            // Set value
            this._tool = value;

            // Trigger changed event
            if(changed){
                this.onToolChanged();
            }
        }

        /**
         * Property field
         */
        private _zoom: number;

        /**
         * Gets the current zoom level. (1 is 100%)
         *
         * @returns {number}
         */
        get zoom(): number {
            return this._zoom;
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
         * Field for bottomToolbar property
         */
        private _bottomToolbar: Toolbar;

        /**
         * Gets the bottom toolbar
         *
         * @returns {Toolbar}
         */
        get bottomToolbar(): Toolbar {
            if (!this._bottomToolbar) {
                this._bottomToolbar = new Toolbar();
            }
            return this._bottomToolbar;
        }

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
         * Field for btnCrop property
         */
        private _btnCrop: ButtonItem;

        /**
         * Gets the crop button
         *
         * @returns {ButtonItem}
         */
        get btnCrop(): ButtonItem {
            if (!this._btnCrop) {
                this._btnCrop = new ButtonItem(null, LinearIcon.crop, () => this.tool = ImageEditorTool.CROP);
            }
            return this._btnCrop;
        }

        /**
         * Field for cropNow property
         */
        private _btnCropNow: ButtonItem;

        /**
         * Gets the crop now button
         *
         * @returns {ButtonItem}
         */
        get btnCropNow(): ButtonItem {
            if (!this._btnCropNow) {
                this._btnCropNow = new ButtonItem(strings.cropNow, null, () => this.cropNow());
                this._btnCropNow.visible = false;
            }
            return this._btnCropNow;
        }

        /**
         * Field for btnResize property
         */
        private _btnResize: ButtonItem;

        /**
         * Gets the resize button
         *
         * @returns {ButtonItem}
         */
        get btnResize(): ButtonItem {
            if (!this._btnResize) {
                this._btnResize = new ButtonItem(null, LinearIcon.frame_expand, () => this.showResizeDialog() );
            }
            return this._btnResize;
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
                this._btnSave = new ButtonItem(null, LinearIcon.cloud_upload, () => this.save());
                this._btnSave.enabled = false;
            }
            return this._btnSave;
        }

        /**
         * Field for btnUndo property
         */
        private _btnUndo: ButtonItem;

        /**
         * Gets the undo button
         *
         * @returns {ButtonItem}
         */
        get btnUndo(): ButtonItem {
            if (!this._btnUndo) {
                this._btnUndo = new ButtonItem(null, LinearIcon.undo, () => this.undo());
                this._btnUndo.enabled = false;
            }
            return this._btnUndo;
        }


        /**
         * Field for canvas property
         */
        private _canvas: HTMLDivElement;

        /**
         * Gets the canvas where image is placed
         *
         * @returns {HTMLCanvasElement}
         */
        get canvas(): HTMLDivElement {
            if (!this._canvas) {
                this._canvas = document.createElement('div');
                this._canvas.className = 'canvas';
            }
            return this._canvas;
        }

        /**
         * Field for cropper property
         */
        private _cropper: Element<HTMLDivElement>;

        /**
         * Gets the cropper element
         *
         * @returns {Element<HTMLDivElement>}
         */
        get cropper(): Element<HTMLDivElement> {
            if (!this._cropper) {
                this._cropper = new Element<HTMLDivElement>(document.createElement('div'));
                this._cropper.addClass('cropper');
            }
            return this._cropper;
        }

        /**
         * Field for copperOverlayTop property
         */
        private _cropperOverlayTop: HTMLDivElement;

        /**
         * Gets the cropper overlay top
         *
         * @returns {HTMLDivElement}
         */
        get cropperOverlayTop(): HTMLDivElement {
            if (!this._cropperOverlayTop) {
                this._cropperOverlayTop = document.createElement('div');
                this._cropperOverlayTop.className = 'cropper-overlay top';
            }
            return this._cropperOverlayTop;
        }

        /**
         * Field for copperOverlayTop property
         */
        private _cropperOverlayLeft: HTMLDivElement;

        /**
         * Gets the cropper overlay top
         *
         * @returns {HTMLDivElement}
         */
        get cropperOverlayLeft(): HTMLDivElement {
            if (!this._cropperOverlayLeft) {
                this._cropperOverlayLeft = document.createElement('div');
                this._cropperOverlayLeft.className = 'cropper-overlay left';
            }
            return this._cropperOverlayLeft;
        }

        /**
         * Field for copperOverlayTop property
         */
        private _cropperOverlayRight: HTMLDivElement;

        /**
         * Gets the cropper overlay top
         *
         * @returns {HTMLDivElement}
         */
        get cropperOverlayRight(): HTMLDivElement {
            if (!this._cropperOverlayRight) {
                this._cropperOverlayRight = document.createElement('div');
                this._cropperOverlayRight.className = 'cropper-overlay right';
            }
            return this._cropperOverlayRight;
        }

        /**
         * Field for copperOverlayTop property
         */
        private _cropperOverlayBottom: HTMLDivElement;

        /**
         * Gets the cropper overlay top
         *
         * @returns {HTMLDivElement}
         */
        get cropperOverlayBottom(): HTMLDivElement {
            if (!this._cropperOverlayBottom) {
                this._cropperOverlayBottom = document.createElement('div');
                this._cropperOverlayBottom.className = 'cropper-overlay bottom';
            }
            return this._cropperOverlayBottom;
        }

        /**
         * Field for lblInfo property
         */
        private _lblInfo: LabelItem;

        /**
         * Gets the info label
         *
         * @returns {LabelItem}
         */
        get lblInfo(): LabelItem {
            if (!this._lblInfo) {
                this._lblInfo = new LabelItem();
            }
            return this._lblInfo;
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