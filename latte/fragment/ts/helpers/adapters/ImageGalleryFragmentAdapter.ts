/**
 * Created by josemanuel on 7/29/16.
 */
module latte {

    /**
     *
     */
    export class ImageGalleryFragmentAdapter extends FragmentAdapter<IImageGalleryFragment> {

        //region Static

        static PRESENTABLE_KEY = 'presentable';

        static defaultThumbWidth = 200;
        static defaultThumbHeight = 200;
        static defaultImageWidth = 800;
        static defaultImageHeight = 600;


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

                this.onFilesSelected(this.fileInput.element.files);

            }

        }

        /**
         * Generates the presentable image of the specified file item.
         * @param item
         * @param callback
         */
        private generatePresentableImage(item: FileItem, callback: () => void){
            item.file.createThumbChild({
                size: this.imageSize,
                fit:  ImageUtil.imageFitFromString(this.fragmentConfiguration['thumb-fit']) || ImageFit.AspectFill
            }, ImageGalleryFragmentAdapter.PRESENTABLE_KEY, () => callback())
        }

        /**
         * Gets the files based
         */
        private getFileRecords(): File[]{
            let a = [];
            this.files.each((f) => a.push(f.file));
            return a;
        }

        /**
         * Moves the selected image one position further
         */
        private moveImageAfter(){
            if(!this.selectedFile) {
                return;
            }

            this.swapSelectedImage(true);
        }

        /**
         * Moves the selected image one position back
         */
        private moveImageBefore(){

            if(!this.selectedFile) {
                return;
            }

            this.swapSelectedImage(false);

        }

        /**
         * Swaps the selected image with the contigous beofe (or after if the passed flag is true)
         * @param after
         */
        private swapSelectedImage(after: boolean){
            let index = this.files.indexOf(this.selectedFile);

            this.files.each((f) => f.element.detach());

            let indexA = index - 1;
            let indexB = index;

            if(after) {
                indexA = index + 1;
                indexB = index;
            }
            let tmp = this.files[indexA];
            this.files[indexA] = this.selectedFile;
            this.files[indexB] = tmp;

            this.files.each((f) => this.editorItem.element.append(f.element));

            this.updateBeforeAfterButtons();

            this.serialize();
        }

        /**
         * Redoes the thumbs of selected file item
         */
        private redoThumbs(){
            if(this.selectedFile) {
                this.createImagesOfFile(this.selectedFile);
            }
        }

        /**
         * Removes the selected image. (Asking first)
         */
        private removeSelectedImage(){
            if(!this.selectedFile) {
                return;
            }

            DialogView.confirmDelete(this.selectedFile.file.name, () => {
                this.selectedFile.file.remove(() => log("Removed Record & Physical"));
                this.files.remove(this.selectedFile);
                this.selectedFile = null;
                this.serialize();
            });
        }

        /**
         * Updates the enabled property of move before and after buttons
         */
        private updateBeforeAfterButtons(){
            let index = this.files.indexOf(this.selectedFile);

            this.btnMoveImageBefore.enabled = index > 0;
            this.btnMoveImageAfter.enabled = index < (this.files.length - 1);
        }

        /**
         * Opens the viewer for selected presentable image
         */
        private viewSelectedImage(){
            let file = this.selectedFile.file;
            let pic = file.getChildByKey(ImageGalleryFragmentAdapter.PRESENTABLE_KEY);

            if(pic) {
                let editor = ImageEditorView.editImageFile(pic);
                editor.editable = false;
            }
        }

        /**
         * Opens the editor for selected original
         */
        private viewSelectedOriginal(){
            if(this.selectedFile) {

                let index = this.files.indexOf(this.selectedFile);
                let files = this.getFileRecords();
                let editor = ImageEditorView.editImageFiles(files, index);

                // Re create images when saved
                editor.saved.add(() => {
                    this.createImagesOfFile(this.selectedFile);
                });
            }
        }

        /**
         * Opens the viewer for selected thumb
         */
        private viewSelectedThumb(){

            if(this.selectedFile) {

                let file = this.selectedFile.file;
                let thumb = file.getChildByKey(FileItem.SYS_THUMB_KEY);

                if(thumb) {
                    let editor = ImageEditorView.editImageFile(thumb);
                    editor.editable = false;
                }

            }

        }

        //endregion

        //region Methods
        /**
         *
         */
        activateFileInput(){
            this.fileInput.element.click();
        }

        /**
         * Override
         */
        getEditorTabs(): TabItem[]{
            let tabs = [
                this.tabGallery
            ];

            if(this.selectedFile) {
                tabs.push(this.tabImage)
            }

            return tabs;
        }

        /**
         * Returns the items for the ribbon of the view
         * @returns {Array}
         */
        getEditorTabItems(): Item[]{
            let items: Item[] = [this.btnInsertImage];

            if(this.selectedFile) {
                items = items.concat([
                    this.btnViewImage,
                    this.btnViewOriginal,
                    this.btnViewThumb,
                    this.btnRedoThumb,

                    SeparatorItem.withTab(this.tabImage),
                    this.btnMoveImageBefore,
                    this.btnMoveImageAfter,
                    SeparatorItem.withTab(this.tabImage),

                    this.btnRemoveImage
                ]);
            }

            return items;
        }

        /**
         * Override. Raises the <c>createEditorItem</c> event
         */
        onCreateEditorItem(){
            super.onCreateEditorItem();

            let editor = this.editorItem = new FragmentPlaceholderItem();

            this.editorItem.addClass('gallery-fragment-editor');
            editor.emptyIcon = LinearIcon.book;
            this.editorItem.node.addEventListener('click', () => this.selectedFile = null);
            this.editorItem.element.append(this.fileInput.element);

            editor.drop.add((e) => {
                if(e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                    this.onFilesSelected(e.dataTransfer.files);
                }
            });

            this.unserialize();
        }

        /**
         * Raises the <c>filesSelected</c> event
         */
        onFilesSelected(files: FileList){

            if(this._filesSelected){
                this._filesSelected.raise(files);
            }

            for (let i = 0; i < files.length; i++) {

                // Get file
                let f = files[i];

                if(File.isImageExtension(File.extensionOf(f.name))){

                    // Creates file item
                    let item = new FileItem();

                    // Add the Item to Files
                    this.files.add(item);

                    // Process thumbs & resized image
                    this.createImagesOfFile(item, f);

                }else {
                    DialogView.alert(strings.cantAddImage, sprintf(strings.SNotCompatibleImage, f.name));
                }

            }
        }

        /**
         * Creates the image of the specified file item
         * @param item
         */
        createImagesOfFile(item: FileItem, f: SystemFile = null){

            let fileBuffer: File = null;

            // Creates the images
            let doImages = () => {

                // After thumb has been created, create the presentable image
                if(item.thumbCreated.handlers.length == 0) {
                    item.thumbCreated.add(() => {
                        this.generatePresentableImage(item, () => {
                            // debugger;
                            // log("Generated Presentable: ")
                            // log(item.file.children)
                            this.serialize()
                        });
                    });
                }

                // If system file, upload it
                if(f) {
                    item.fileUploader = new FileUploader(f, 'Page', String(this.fragment.idpage));
                    item.fileUploader.upload();
                }else {

                    // Re-assign file
                    item.file = fileBuffer;
                }
            };

            if(item.file && item.file.children.length > 0) {
                // log("Deleting files: ")
                // log(item.file.children)
                item.file.deleteChildren().send(() => {
                    fileBuffer = item.file;
                    item.file.children = [];
                    item.file = null;
                    doImages();
                });
            }else{
                doImages();
            }
        }

        /**
         * Raises the <c>selectedFile</c> event
         */
        onSelectedFileChanged(){
            if(this._selectedFileChanged){
                this._selectedFileChanged.raise();
            }

            this.files.each((f) => f.removeClass('selected') );

            if(this.selectedFile) {
                this.selectedFile.addClass('selected');
                this.updateBeforeAfterButtons();
            }

            this.onTabsChanged();
        }

        /**
         * Serializes the file array into the value of the fragment
         */
        serialize(){
            let d = document.createElement('div');

            this.files.each((f: FileItem) => {
                // log(f.file.name)
                let thumb = f.file.getChildByKey(FileItem.SYS_THUMB_KEY);
                let presentable = f.file.getChildByKey(ImageGalleryFragmentAdapter.PRESENTABLE_KEY);

                if(!thumb || !presentable) return;

                let img: HTMLImageElement = document.createElement('img');
                img.setAttribute('data-guid', f.file.guid);
                img.setAttribute('data-thumb-guid', thumb.guid);
                img.setAttribute('data-image-guid', presentable.guid);
                img.setAttribute('data-image-url', presentable.url);
                img.classList.add('thumb');
                img.src = thumb.url;

                d.appendChild(img);
            });

            let oldValue = this.fragment.value;
            this.fragment.value = d.innerHTML;
            this.unsavedChanges = oldValue != this.fragment.value;

            // if(this.unsavedChanges) {
            //     log("Unsaved Changes")
            // }

            // log(this.fragment.value);
        }

        /**
         * Unserializes
         */
        unserialize(){

            let guids = [];
            // debugger;
            // log("Unserializing: " + this.fragment.value)
            let d = new Element<HTMLDivElement>(document.createElement('div'));

            // Eval nodes
            d.element.innerHTML = this.fragment.value;

            // Scan nodes for images
            for(let i in d.element.childNodes){
                let node: Node = d.element.childNodes[i];

                if(node.nodeType == 1) {
                    let img: HTMLImageElement = <HTMLImageElement>node;
                    let guid = img.getAttribute('data-guid');

                    if(guid) {
                        guids.push(guid)
                    }
                }
            }

            // Load files
            // TODO: Loading visual cues!
            File.byGuids(guids.join(',')).send((files: File[]) => {
                let sorted = {};
                files.forEach((f) => sorted[f.guid] = f);
                guids.forEach((g) => {
                    if(sorted[g]) {
                        this.files.add(new FileItem(sorted[g]));
                    }
                })
            });

        }

        //endregion

        //region Events

        /**
         * Back field for event
         */
        private _filesSelected: LatteEvent;

        /**
         * Gets an event raised when files are selected for upload
         *
         * @returns {LatteEvent}
         */
        get filesSelected(): LatteEvent{
            if(!this._filesSelected){
                this._filesSelected = new LatteEvent(this);
            }
            return this._filesSelected;
        }

        /**
         * Back field for event
         */
        private _selectedFileChanged: LatteEvent;

        /**
         * Gets an event raised when the value of the selectedFile property changes
         *
         * @returns {LatteEvent}
         */
        get selectedFileChanged(): LatteEvent{
            if(!this._selectedFileChanged){
                this._selectedFileChanged = new LatteEvent(this);
            }
            return this._selectedFileChanged;
        }

        //endregion

        //region Properties

        /**
         * Field for files property
         */
        private _files: Collection<FileItem>;

        /**
         * Gets the files of the editor
         *
         * @returns {Collection<FileItem>}
         */
        get files(): Collection<FileItem> {
            if (!this._files) {
                this._files = new Collection<FileItem>(

                    // Added
                    (f: FileItem) => {
                        // Remove empty icon
                        (<FragmentPlaceholderItem>this.editorItem).emptyIcon = null;
                        this.editorItem.element.append(f.element);
                        f.thumbSize = this.thumbSize;
                        f.element.get(0).addEventListener('click', (e) => {
                            e.stopImmediatePropagation();
                            this.selectedFile = f
                        });
                    },

                    // Removed
                    (f: FileItem) => {
                        if(this.files.length == 0){
                            (<FragmentPlaceholderItem>this.editorItem).emptyIcon = LinearIcon.book;
                        }
                        f.element.detach();
                    }
                );
            }
            return this._files;
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
        private _selectedFile: FileItem = null;

        /**
         * Gets or sets the selected file item
         *
         * @returns {FileItem}
         */
        get selectedFile(): FileItem{
            return this._selectedFile;
        }

        /**
         * Gets or sets the selected file item
         *
         * @param {FileItem} value
         */
        set selectedFile(value: FileItem){

            // Check if value changed
            let changed: boolean = value !== this._selectedFile;

            // Set value
            this._selectedFile = value;

            // Trigger changed event
            if(changed){
                this.onSelectedFileChanged();
            }
        }

        /**
         * Field for thumbSize property
         */
        private _thumbSize: Size;

        /**
         * Gets the configured thumb size
         *
         * @returns {Size}
         */
        get thumbSize(): Size {
            if (!this._thumbSize) {
                this._thumbSize = new Size(
                    this.fragmentConfiguration["thumb-width"] || ImageGalleryFragmentAdapter.defaultThumbWidth,
                    this.fragmentConfiguration["thumb-height"]|| ImageGalleryFragmentAdapter.defaultThumbHeight);
            }
            return this._thumbSize;
        }


        //endregion

        //region Components

        /**
         * Field for btnInsertImage property
         */
        private _btnInsertImage: ButtonItem;

        /**
         * Gets the insert image button
         *
         * @returns {ButtonItem}
         */
        get btnInsertImage(): ButtonItem {
            if (!this._btnInsertImage) {
                this._btnInsertImage = new ButtonItem(strings.insertImage, LinearIcon.picture.go32(), () => this.activateFileInput());
                this._btnInsertImage.tab = this.tabGallery;
            }
            return this._btnInsertImage;
        }

        /**
         * Field for btnoveImageAfter property
         */
        private _btnMoveImageAfter: ButtonItem;

        /**
         * Gets the move image after button
         *
         * @returns {ButtonItem}
         */
        get btnMoveImageAfter(): ButtonItem {
            if (!this._btnMoveImageAfter) {
                this._btnMoveImageAfter = new ButtonItem(null, LinearIcon.chevron_right, () => this.moveImageAfter());
                this._btnMoveImageAfter.tooltip = strings.moveImageAfter;
                this._btnMoveImageAfter.tab = this.tabImage;
            }
            return this._btnMoveImageAfter;
        }

        /**
         * Field for btnMoveImageBefore property
         */
        private _btnMoveImageBefore: ButtonItem;

        /**
         * Gets the move image before item
         *
         * @returns {ButtonItem}
         */
        get btnMoveImageBefore(): ButtonItem {
            if (!this._btnMoveImageBefore) {
                this._btnMoveImageBefore = new ButtonItem(null, LinearIcon.chevron_left, () => this.moveImageBefore());
                this._btnMoveImageBefore.tooltip = strings.moveImageBefore
                this._btnMoveImageBefore.tab = this.tabImage;
            }
            return this._btnMoveImageBefore;
        }

        /**
         * Field for btnRemoveImage property
         */
        private _btnRemoveImage: ButtonItem;

        /**
         * Gets the remove image button
         *
         * @returns {ButtonItem}
         */
        get btnRemoveImage(): ButtonItem {
            if (!this._btnRemoveImage) {
                this._btnRemoveImage = new ButtonItem(strings.deleteImage, LinearIcon.trash.go32(), () => this.removeSelectedImage());
                this._btnRemoveImage.tab = this.tabImage;
            }
            return this._btnRemoveImage;
        }

        /**
         * Field for btnRedoThumb property
         */
        private _btnRedoThumb: ButtonItem;

        /**
         * Gets the thumbs redo button
         *
         * @returns {ButtonItem}
         */
        get btnRedoThumb(): ButtonItem {
            if (!this._btnRedoThumb) {
                this._btnRedoThumb = new ButtonItem(strings.redoThumb, LinearIcon.sync, () => this.redoThumbs());
                this._btnRedoThumb.tab = this.tabImage;
            }
            return this._btnRedoThumb;
        }

        /**
         * Field for btnViewImage property
         */
        private _btnViewImage: ButtonItem;

        /**
         * Gets the view image button
         *
         * @returns {ButtonImage}
         */
        get btnViewImage(): ButtonItem {
            if (!this._btnViewImage) {
                this._btnViewImage = new ButtonItem(strings.viewImage, LinearIcon.picture, () => this.viewSelectedImage());
                this._btnViewImage.tab = this.tabImage;
            }
            return this._btnViewImage;
        }

        /**
         * Field for btnViewOriginal property
         */
        private _btnViewOriginal: ButtonItem;

        /**
         * Gets the view original image button
         *
         * @returns {ButtonItem}
         */
        get btnViewOriginal(): ButtonItem {
            if (!this._btnViewOriginal) {
                this._btnViewOriginal = new ButtonItem(strings.viewOriginal, LinearIcon.file_empty, () => this.viewSelectedOriginal());
                this._btnViewOriginal.tab = this.tabImage;
            }
            return this._btnViewOriginal;
        }

        /**
         * Field for viewThumb property
         */
        private _btnViewThumb: ButtonItem;

        /**
         * Gets the view thumb button
         *
         * @returns {ButtonItem}
         */
        get btnViewThumb(): ButtonItem {
            if (!this._btnViewThumb) {
                this._btnViewThumb = new ButtonItem(strings.viewThumb, LinearIcon.picture, () => this.viewSelectedThumb());
                this._btnViewThumb.tab = this.tabImage;
            }
            return this._btnViewThumb;
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
         * Field for tabGallery property
         */
        private _tabGallery: TabItem;

        /**
         * Gets the gallery tab
         *
         * @returns {TabItem}
         */
        get tabGallery(): TabItem {
            if (!this._tabGallery) {
                this._tabGallery = new TabItem(strings.imageGallery);
            }
            return this._tabGallery;
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