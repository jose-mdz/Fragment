module latte{
	/**
	 * File Record
	 **/
	export class File extends fileBase{


		//region Static

		/**
		 * Gets an array of files belonging to the specified record
		 **/
		static byRecord(record: DataRecord, callback: (arr: Array<File>) => any){

			if(!(record instanceof DataRecord)) throw new InvalidArgumentEx('record');
			if(!_isFunction(callback)) throw new InvalidArgumentEx('callback');

			return fileBase.byOwner(record.recordType, record.recordId)
				.send(function(data){
					var object = data;
					callback.call(this, object);
				});

		}

		/**
		 * Gets the extension of the file
		 * @param ext
		 * @returns {string}
		 */
		static extensionOf(ext: string): string{
			var point = ext.lastIndexOf('.');

			if(point < 0)
				return '';

			return ext.substr(point + 1).toLowerCase();
		}

		/**
		 * Returns a value indicating if the extension is an image extension
		 * @param e
		 * @returns {boolean}
		 */
		static isImageExtension(e: string): boolean{
			return e == 'jpg' || e == 'jpeg' || e == 'gif' || e == 'png' || e == 'tiff' || e == 'bmp';
		}

		/**
		 * Gets the name of the file without extension
		 * @param fileName
		 */
		static nameWithoutExtensionOf(fileName: string): string{
			var ext = File.extensionOf(fileName);

			if(ext.length == 0) {
				return fileName;
			}else {
				var index = fileName.lastIndexOf('.');
				return fileName.substr(0, index);
			}

		}

		/**
		 * Makes a single upload of a file with the specified record as owner
		 *
		 * @param owner
		 * @param idOwner
		 * @param callback
		 */
		static singleUpload(owner: string, idOwner: string, callback: (File) => any = null){

			var f: JQuery = $('<input type=file>').appendTo('body').change(() => {

				var input: HTMLInputElement = f.get(0);
				var files = input.files;
				var loader = new Loader(sprintf(strings.uploadingS, '0%'));

				loader.progress.visible = true;
				loader.progress.maxValue = 100;

				if(!files || !files.length) {
					return;
				}

				var uploader = new FileUploader(files[0], owner, idOwner);

				uploader.complete.add(() => {

					loader.progress.visible = false;
					loader.text = strings.loading;
					loader.stop();
					f.remove();

					if(callback) {
						callback(uploader.fileRecord);
					}

				});

				uploader.progressChanged.add((value: number) => {
					loader.progress.value = value * 100;
					loader.text = sprintf(strings.uploadingS, Math.round(value * 100) + '%')
				});

				uploader.upload();

			});

			f.trigger('click');
		}

		/**
		 * Gets the human size of specified amount of bytes
		 * @param size
		 * @returns {string}
		 */
		static humanSizeOf(size: number = 0){
			var bytes = size
			var kilobyte = 1024;
			var megabyte = kilobyte * 1024;
			var gigabyte = megabyte * 1024;
			var terabyte = gigabyte * 1024;

			if( (bytes >= 0) && (bytes < kilobyte) ){
				return bytes + ' B';

			}else if((bytes >= kilobyte) && (bytes < megabyte)){
				return (bytes / kilobyte).toFixed(0) + ' KB';

			}else if((bytes >= megabyte) && (bytes < gigabyte)){
				return (bytes / megabyte).toFixed(1) +  ' MB';

			}else if((bytes >= gigabyte) && (bytes < terabyte)){
				return (bytes / gigabyte).toFixed(2) + 'GB';

			}else if (bytes >= terabyte){
				return (bytes / gigabyte).toFixed(2) + ' TB';

			}else{
				return bytes + ' B';
			}
		}

		/**
		 * Gets an URL for the specified path, by using the default bucket
		 **/
		static urlOfPath(path: string){

			var p = document.location.protocol == 'https:' ? 'https://' : 'http://'
			return p +  'goplek-net' + ".s3.amazonaws.com/" + path;

		}
		//endregion

		//region Fields
		children: File[];
		//endregion

		/**
		 *
		 **/
		constructor(){

			super();

		}

		//region Methods

		/**
		 * Creates a thumb that fits on the specified size
		 *
		 * @param width
		 * @param height
		 * @param description
		 * @param callback
		 */
		createThumbChild(options: ImageExportOptions, key: string, callback: (child: File) => void = null){

			var type = ImageUtil.mimeTypeOf(this.extension);

			// Generate actual thumb
			ImageUtil.createThumbOfUrl(this.url, options, (data: string) => {


				var img = document.createElement('img');

				img.addEventListener('load', () => {
					var fu = FileUploader.fromBase64(ImageUtil.getBase64(data), this.name, "File", String(this.idfile));

					fu.complete.add(() => {

						// File uploaded!
						this.children.push(fu.fileRecord);

						// Free memory
						img = null;

						if(_isFunction(callback)) {
							callback(fu.fileRecord)
						}

					});

					fu.key = key;
					fu.width = img.width;
					fu.height = img.height;
					fu.idparent = this.idfile;

					// Upload file
					fu.upload();
				})

				img.src = data;

			});
		}

		/**
		 * Searches for the child of the specified description. Returns null if not found.
		 * @param key
		 * @returns {any}
		 */
		getChildByKey(key: string): File{

			if(!_isArray(this.children)) return null;

			for (var i = 0; i < this.children.length; i++) {
				if(this.children[i].key == key)
					return this.children[i];
			}

			return null;
		}

		/**
		 * Override.
		 */
		getMetadata(): IRecordMeta{
			return {
				fields: {
					name: {
						text: strings.name
					},

					size: {
						text: strings.fileSize
					},

					path: {
						text: strings.path
					},

					uploaded: {
						text: strings.created
					}
				}
			}
		}

		//endregion

		//region Properties

		/**
		 * Gets a value indicating if the file can be manipulated
		 **/
		get canManipulate(): boolean{

			// HACK: Wuts up with dis?
			return true;
		}

		/**
		 * Gets the extension of the file, without the dot.
		 The extension is returned always as a lowercase string.
		 If the file has no name set, null will be returned. If the name has no extension,
		 empty string will be returned.
		 **/
		get extension(): string{


			var ext = this.name;

			if(!_isString(ext))
				return null;

			var point = ext.lastIndexOf('.');

			if(point < 0)
				return '';

			return ext.substr(point + 1).toLowerCase();


		}

		/**
		 * Gets the human size of the file
		 **/
		get humanSize(): string{
			return File.humanSizeOf(this.size);
		}

		/**
		 * Gets a value indicating if the file is an image
		 **/
		get isImage(): boolean{
			return File.isImageExtension(this.extension);
		}

		/**
		 * Gets the url for downloading the file
		 **/
		get url(): string{

			if(this.bucket) {
				log(this)
				let p = document.location.protocol == 'https:' ? 'https://' : 'http://';
				return p +  this.bucket + ".s3.amazonaws.com/" + this.path;
			}else {
			    return '/' + this.path;
			}

		}

		//endregion
	}
}