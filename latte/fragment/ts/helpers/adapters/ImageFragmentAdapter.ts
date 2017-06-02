/**
 * Created by josemanuel on 10/9/16.
 */
module latte {

    /**
     *
     */
    export class ImageFragmentAdapter extends FragmentAdapter<IImageFragment> {

        //region Static
        static PRESENTABLE_KEY = 'presentable';
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

        /**
         * Uploads the file on the input
         */
        private fileInputChanged(){

            if (this.fileInput.element.files.length > 0) {
                this.setSystemFile(this.fileInput.element.files[0]);
            }

        }

        private showProgressItem(){
            this.progressItem.visible = true;
        }

        private hideProgressItem(){
            this.progressItem.visible = false;
        }

        private redoImages(){
            if(this.presentableFile) {
                this.presentableFile.remove(() => {
                    this.generatePresentableImage(this.file, (child) => {
                        this.presentableFile = child;
                        this.serialize();
                    })
                });
            }
        }

        private viewOriginal(){
            let editor = ImageEditorView.editImageFile(this.file);

            editor.saved.add(() => {
                this.redoImages();
            })
        }

        private viewResultImage(){
            let editor = ImageEditorView.editImageFile(this.presentableFile);
            editor.editable = false;
        }

        //endregion

        //region Methods

        /**
         * Override
         */
        getEditorTabs(): TabItem[]{
            let tabs = [];

            tabs.push(this.tabImage);

            return tabs;
        }

        /**
         * Returns the items for the ribbon of the view
         * @returns {Array}
         */
        getEditorTabItems(): Item[]{
            let items: Item[] = [this.btnInsertImage];

            if(this.file) {
                items.push(SeparatorItem.withTab(this.tabImage));
                items.push(this.btnViewOriginal);
                items.push(this.btnResultImage);
                items.push(SeparatorItem.withTab(this.tabImage));
                items.push(this.btnRedoImages);
            }

            return items;
        }

        /**
         * Generates the presentable image of the specified file item.
         * @param item
         * @param callback
         */
        generatePresentableImage(file: File, callback: (child?:File) => void){
            file.createThumbChild({
                size: this.imageSize,
                fit:  ImageUtil.imageFitFromString(this.fragmentConfiguration['image-fit']) || ImageFit.AspectFill
            }, ImageFragmentAdapter.PRESENTABLE_KEY, (child:File) => callback(child))
        }

        /**
         * Activates the file input
         */
        insertImage(){
            this.fileInput.element.click();
        }

        /**
         * Raises the <c>file</c> event
         */
        onFileChanged(){
            if(this._fileChanged){
                this._fileChanged.raise();
            }

            let file = this.file;

            if(file) {
                let presentable = file.getChildByKey(ImageFragmentAdapter.PRESENTABLE_KEY);

                let done = (presentable: File) => {
                    this.presentableFile = presentable;
                    this.serialize();
                };

                if(!presentable) {
                    this.generatePresentableImage(file, (child) => done(child));
                }else{
                    done(presentable);
                }
            }
        }

        /**
         * Override.
         */
        onCreateEditorItem(){

            let editor = this.editorItem = new FragmentPlaceholderItem();

            editor.addClass('image-fragment-editor');
            editor.emptyIcon = LinearIcon.picture;
            editor.node.appendChild(this.imageContainer);
            editor.element.append(this.fileInput.element);
            editor.drop.add((e) => {
                if(e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                    this.setSystemFile(e.dataTransfer.files[0]);
                }
            });

            this.unserialize();
        }

        /**
         * Raises the <c>image</c> event
         */
        onImageChanged(){

            if(this._imageChanged){
                this._imageChanged.raise();
            }

            $(this.imageContainer).empty();

            if(this.image){
                this.imageContainer.appendChild(this.image);
            }

        }

        /**
         * Raises the <c>presentableFile</c> event
         */
        onPresentableFileChanged(){
            if(this._presentableFileChanged){
                this._presentableFileChanged.raise();
            }

            let file = this.presentableFile;
            this.onTabsChanged();

            if(file) {
                (<FragmentPlaceholderItem>this.editorItem).emptyIcon = null;

                let loader = new ImageLoader(file.url);

                loader.progressChanged.add(() => this.progressItem.value = loader.progress * 100);
                loader.ended.add(() => {
                    this.image = loader.resultImage;
                });

                loader.start();
            }
        }

        /**
         * Sets the file
         * @param list
         */
        setSystemFile(file: SystemFile){

            this.showProgressItem();

            // Create uploader
            let uploader = new FileUploader(file, 'Page', this.fragment.idpage);

            // Progress updater
            uploader.progressChanged.add(() => this.progressItem.value = uploader.progress * 100);

            // Handles completion
            uploader.complete.add(() => {

                // Hide progress bar
                this.hideProgressItem();

                // Set the actual file
                this.file = uploader.fileRecord;

            });

            // Upload now
            uploader.upload();
        }

        /**
         * Serializes the presentable image
         */
        serialize(){
            let buffer: HTMLDivElement = document.createElement('div');
            let img: HTMLImageElement = document.createElement('img');

            img.setAttribute('data-guid', this.presentableFile.guid);
            img.setAttribute('data-original-guid', this.file.guid);
            img.src = this.presentableFile.url;

            buffer.appendChild(img);

            // log("Serialized: " + buffer.innerHTML);

            let oldValue = this.fragment.value;
            this.fragment.value = buffer.innerHTML;
            this.unsavedChanges = oldValue != this.fragment.value;
        }

        /**
         * Unserializes the presentable image
         */
        unserialize(){
            let guids = [];
            let buffer = new Element<HTMLDivElement>(document.createElement('div'));

            // Eval nodes
            buffer.element.innerHTML = this.fragment.value;

            // Scan nodes
            for(let i in buffer.element.childNodes){
                let node: Node = buffer.element.childNodes[i];

                if(node.nodeType == 1) {
                    let img: HTMLImageElement = <HTMLImageElement>node;
                    let guid = img.getAttribute('data-original-guid');

                    if(guid) {
                        guids.push(guid)
                    }
                }
            }

            // Load files
            File.byGuids(guids.join(',')).send((files: File[]) => {

                // Insert Image / Replace Image button text
                this.btnInsertImage.text = files.length > 0 ? strings.replaceImage : strings.insertImage;

                // Set image if present
                if(files.length > 0) {
                    this.file = files[0];
                }
            });
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
        private _presentableFileChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the presentableFile property changes
         *
         * @returns {LatteEvent}
         */
        get presentableFileChanged(): LatteEvent{
            if(!this._presentableFileChanged){
                this._presentableFileChanged = new LatteEvent(this);
            }
            return this._presentableFileChanged;
        }
        //endregion

        //region Properties

        /**
         * Property field
         */
        private _file: File = null;

        /**
         * Gets or sets the file of image
         *
         * @returns {File}
         */
        get file(): File{
            return this._file;
        }

        /**
         * Gets or sets the file of image
         *
         * @param {File} value
         */
        set file(value: File){

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
         * Field for fileInput property
         */
        private _fileInput: Element<HTMLInputElement>;

        /**
         * Gets the file input
         *
         * @returns {Element<HTMLInputElement>}
         */
        get fileInput(): Element<HTMLInputElement> {
            if (!this._fileInput) {
                this._fileInput = new Element<HTMLInputElement>(document.createElement('input'));
                this._fileInput.element.type = 'file';
                this._fileInput.element.multiple = true;
                this._fileInput.addEventListener('change', () => this.fileInputChanged())
            }
            return this._fileInput;
        }

        /**
         * Property field
         */
        private _image: HTMLImageElement = null;

        /**
         * Gets or sets the presentable image
         *
         * @returns {HTMLImageElement}
         */
        get image(): HTMLImageElement{
            return this._image;
        }

        /**
         * Gets or sets the presentable image
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
         * Field for imageContainer property
         */
        private _imageContainer: HTMLDivElement;

        /**
         * Gets the container of the image
         *
         * @returns {HTMLDivElement}
         */
        get imageContainer(): HTMLDivElement {
            if (!this._imageContainer) {
                this._imageContainer = document.createElement('div');
                this._imageContainer.className = 'image-container';
            }
            return this._imageContainer;
        }

        /**
         * Field for imageSize property
         */
        private _imageSize: Size;

        /**
         * Gets the configured image size
         *
         * @returns {Size}
         */
        get imageSize(): Size {
            if (!this._imageSize) {
                this._imageSize = new Size(
                    this.fragmentConfiguration["image-width"] || ImageGalleryFragmentAdapter.defaultImageWidth,
                    this.fragmentConfiguration["image-height"]|| ImageGalleryFragmentAdapter.defaultImageHeight
                );
            }
            return this._imageSize;
        }

        /**
         * Property field
         */
        private _presentableFile: File = null;

        /**
         * Gets or sets the presentable file of the fragment
         *
         * @returns {File}
         */
        get presentableFile(): File{
            return this._presentableFile;
        }

        /**
         * Gets or sets the presentable file of the fragment
         *
         * @param {File} value
         */
        set presentableFile(value: File){

            // Check if value changed
            let changed: boolean = value !== this._presentableFile;

            // Set value
            this._presentableFile = value;

            // Trigger changed event
            if(changed){
                this.onPresentableFileChanged();
            }
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
                this._progressItem.visible = false;
                this.editorItem.node.appendChild(this.progressItem.node);
            }
            return this._progressItem;
        }

        //endregion

        //region Components
        /**
         * Field for btnInsertImage property
         */
        private _btnInsertImage: ButtonItem;

        /**
         * Gets the inser image button
         *
         * @returns {ButtonItem}
         */
        get btnInsertImage(): ButtonItem {
            if (!this._btnInsertImage) {
                this._btnInsertImage = new ButtonItem(strings.insertImage, LinearIcon.picture.go32(), () => this.insertImage());
                this._btnInsertImage.tab = this.tabImage;
            }
            return this._btnInsertImage;
        }

        /**
         * Field for btnRedoImages property
         */
        private _btnRedoImages: ButtonItem;

        /**
         * Gets the redo images button
         *
         * @returns {ButtonItem}
         */
        get btnRedoImages(): ButtonItem {
            if (!this._btnRedoImages) {
                this._btnRedoImages = new ButtonItem(strings.redoThumb, LinearIcon.sync, () => this.redoImages());
                this._btnRedoImages.tab = this.tabImage;
            }
            return this._btnRedoImages;
        }

        /**
         * Field for btnResultImage property
         */
        private _btnResultImage: ButtonItem;

        /**
         * Gets the result image
         *
         * @returns {ButtonItem}
         */
        get btnResultImage(): ButtonItem {
            if (!this._btnResultImage) {
                this._btnResultImage = new ButtonItem(strings.seeResultImage, LinearIcon.picture, () => this.viewResultImage());
                this._btnResultImage.tab = this.tabImage;
            }
            return this._btnResultImage;
        }


        /**
         * Field for btnViewOriginal property
         */
        private _btnViewOriginal: ButtonItem;

        /**
         * Gets the view original button
         *
         * @returns {ButtonItem}
         */
        get btnViewOriginal(): ButtonItem {
            if (!this._btnViewOriginal) {
                this._btnViewOriginal = new ButtonItem(strings.viewOriginal, LinearIcon.file_empty, () => this.viewOriginal());
                this._btnViewOriginal.tab = this.tabImage;
            }
            return this._btnViewOriginal;
        }

        /**
         * Field for tabImage property
         */
        private _tabImage: TabItem;

        /**
         * Gets the image tab
         *
         * @returns {TabItem}
         */
        get tabImage(): TabItem {
            if (!this._tabImage) {
                this._tabImage = new TabItem(strings.image);
            }
            return this._tabImage;
        }
        //endregion

    }

}