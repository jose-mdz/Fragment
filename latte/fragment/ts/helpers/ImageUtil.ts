/**
 * Created by josemanuel on 4/29/15.
 */
module latte {

    export interface ICropBounds{
        top?: number;
        left?: number;
        right?:number;
        bottom?:number;
    }

    export enum ImageFit{
        AspectFit,
        AspectFill,
        AspectFillNear,
        AspectFillFar
    }

    export interface ImageExportOptions{
        size: Size;
        type?: string;
        quality?: number;
        background?: Color;
        fit: ImageFit;
    };

    /**
     *
     */
    export class ImageUtil {


        //region Static

        static DEFAULT_QUALITY = 0.85;

        /**
         * Returns the amount of bytes on the specified string
         * @param base64
         * @returns {number}
         */
        static base64ByteSize(base64: string): number{
            return atob(base64).length;
        }

        /**
         * Parses ImageFit from specified string
         * @param fit
         * @returns {any}
         */
        static imageFitFromString(fit: string): ImageFit{
            if(fit == 'aspect-fit') {
                return ImageFit.AspectFit

            }else if(fit == 'aspect-fill') {
                return ImageFit.AspectFill

            }else if(fit == 'aspect-fill-near'){
                return ImageFit.AspectFillNear

            }else if (fit == 'aspect-fill-far'){
                return ImageFit.AspectFillFar
            }

            return null;
        }

        /**
         * Creates an icon of the specified file, assuming it's an image file.
         *
         * @param file
         * @param size
         * @param callback
         */
        static createThumbOfFile(file: any, options: ImageExportOptions, callback: (dataUrl: string) => any = null){

            ImageUtil.readFileAsDataUrl(file, (dataUrl: string) => {

                // Create icon
                ImageUtil.createThumbOfUrl(dataUrl, options, (dataUrl: string) => {

                    // Return result
                    callback(dataUrl);
                });

            });
        }

        /**
         * Creates an icon of the specified image.
         * This algorithm is stored under the name _Steps because it makes n steps
         * to scale down the image. It proved to be ineficient and results unwanted.
         * @param image
         * @param size
         * @returns {string}
         */
        static createThumbOfImage_Steps(image: HTMLImageElement, size: Size): string{

            var w = image.width;
            var h = image.height;
            var scale = Math.min( size.width/w, size.height/h);
            var targW = w * scale;
            var steps = Math.ceil(Math.log(w / targW) / Math.log(2)) + 1;
            var stepWidth = Math.round(Math.abs(targW - w) / steps);

            //console.log(w + " X " + h + "-> scale: " + scale + " steps: " + steps + " of " + stepWidth)
            //console.log("Target: " + targW + " x " + targH);


            var oc = document.createElement('canvas'),
                octx = oc.getContext('2d');

            var curW = w;
            var curH = h;
            var curImg = image;

            for(var i = 0; i < steps; i++){

                curW -= stepWidth;
                curH = Math.round(curW * h / w);

                //console.log("Step: " + curW + " x " + curH);

                oc.width = curW;
                oc.height = curH;
                octx.drawImage(curImg, 0, 0, curW, curH);

                curImg = document.createElement('img');
                curImg.src = oc.toDataURL();
                //$('body').append(curImg);
            }

            //log(sprintf("Scaled image of (%s x %s) asked to (%s x %s) scaled to (%s x %s) scale of %s %s steps of %s",
            //    w, h, size.width, size.height, curImg.width, curImg.height, scale, steps, stepWidth));

            // Capture DataURL
            var result: string = curImg.src;

            // Free memory
            curImg = null;
            oc = null;
            octx = null;

            return result;
        }

        /**
         * Crops the image with the specified crop bounds.
         * Crop bounds are referenced as dimensions from the edges to the specified property.
         * @param image
         * @param crop
         * @param options
         * @returns {HTMLImageElement|HTMLElement}
         */
        static cropImage(image: HTMLImageElement, crop: ICropBounds, options: ImageExportOptions = null): HTMLImageElement{
            if(!options) {
                options = <any>{};
            }

            crop.top = crop.top || 0;
            crop.left = crop.left || 0;
            crop.right = crop.right || 0;
            crop.bottom = crop.bottom || 0;

            let w: number = image.naturalWidth;
            let h: number = image.naturalHeight;
            let neww = w - crop.left - crop.right;
            let newh = h - crop.top - crop.bottom;

            let c = document.createElement('canvas');
            c.width = w - crop.left - crop.right;
            c.height = h - crop.top - crop.bottom;

            let x = c.getContext('2d');

            x.drawImage(image, crop.left, crop.top, neww, newh, 0, 0, neww, newh);

            let img = document.createElement('img');
            img.src = c.toDataURL(options.type || 'image/jpeg', options.quality || ImageUtil.DEFAULT_QUALITY);

            return img;
        }

        static resizeImage(image: HTMLImageElement, options: ImageExportOptions): string{

            let w = image.width;
            let h = image.height;
            let original = new Size(w, h);
            let size = options.size;
            let type = options.type || "image/jpeg";
            let quality = options.quality || ImageUtil.DEFAULT_QUALITY;
            let bg: Color = options.background || null;
            let canvas: HTMLCanvasElement = document.createElement('canvas');
            let cx = canvas.getContext('2d');
            let target: Size;
            let fit = options.fit || ImageFit.AspectFit;

            if(fit == ImageFit.AspectFit) {
                target = original.scaleToFit(size);

            }else{
                target = original.scaleToFill(size);
            }

            canvas.width = image.width;
            canvas.height = image.height;

            if(bg instanceof Color){
                cx.fillStyle = bg.toHexString();
                cx.fillRect(0, 0, w, h);
            }

            cx.drawImage(image, 0, 0, w, h);

            ImageUtil.resample_hermite(canvas, w, h, target.width, target.height);

            // Trim extra edges
            if(fit == ImageFit.AspectFill || fit == ImageFit.AspectFillNear || fit == ImageFit.AspectFillFar) {
                let offsetx = 0;
                let offsety = 0;

                if(target.height > size.height) {
                    if(fit == ImageFit.AspectFill) {
                        offsety = (target.height - size.height) / 2;

                    }else if(fit == ImageFit.AspectFillFar) {
                        offsety = target.height - size.height;
                    }
                }

                if(target.width > size.width){
                    if(fit == ImageFit.AspectFill) {
                        offsetx = (target.width - size.width) / 2;

                    }else if(fit == ImageFit.AspectFillFar) {
                        offsetx = target.width - size.width;
                    }
                }

                let canvasex = document.createElement('canvas');
                canvasex.width = size.width;
                canvasex.height = size.height;
                let cx = canvasex.getContext('2d');
                cx.drawImage(canvas, offsetx, offsety, size.width, size.height, 0, 0, size.width, size.height);

                canvas = canvasex;
            }

            var result = '';

            // log("Type: " + type);
            if(ImageUtil.mimeTypeCompressable(type)){
                // log("Quality: " + quality);
                result = canvas.toDataURL(type, quality);
            }else {
                result = canvas.toDataURL(type);
            }

            // Explicitly free memory
            canvas = null;

            return result;

        }

        /**
         * Creates a smaller version of the image.
         * @param image
         * @param size
         * @param type Mime type of the image
         * @param quality Quality 0 - 1, if jpg
         */
        static createThumbOfImage(image: HTMLImageElement, options: ImageExportOptions): string{

            return ImageUtil.resizeImage(image, options);

            //
            // let w = image.width;
            // let h = image.height;
            // let size = options.size;
            // let type = options.type || "image/png";
            // let quality = options.quality || 0.9;
            // let bg: Color = options.background || null;
            // let canvas: HTMLCanvasElement = document.createElement('canvas');
            // let fit = options.fit || ImageFit.AspectFit;
            // let cx = canvas.getContext('2d');
            // let scale = 0;
            // let targW = 0;
            // let targH = 0;
            //
            // if(fit == ImageFit.AspectFit) {
            //     scale = Math.min(size.width / w, size.height / h);
            //     targW = w * scale;
            //     targH = targW * h / w;
            //
            // }else if(fit == ImageFit.AspectFill) {
            //
            // }
            //
            // // Prepare canvas with original image
            // canvas.width = image.width;
            // canvas.height = image.height;
            //
            // // Draw background
            // if(bg instanceof Color){
            //     cx.fillStyle = bg.toHexString();
            //     cx.fillRect(0, 0, w, h);
            // }
            //
            // // Draw original image
            // cx.drawImage(image, 0, 0, w, h);
            //
            // ImageUtil.resample_hermite(canvas, w, h, targW, targH);
            //
            // var result = '';
            //
            // if(ImageUtil.mimeTypeCompressable(type)){
            //     result = canvas.toDataURL(type, quality);
            // }else {
            //     result = canvas.toDataURL(type);
            // }
            //
            // // Explicitly free memory
            // canvas = null;
            //
            // return result;

        }


        private static resample_hermite(canvas, W, H, W2, H2){
            var time1 = Date.now();
            W2 = Math.round(W2);
            H2 = Math.round(H2);
            var img = canvas.getContext("2d").getImageData(0, 0, W, H);
            var img2 = canvas.getContext("2d").getImageData(0, 0, W2, H2);
            var data = img.data;
            var data2 = img2.data;
            var ratio_w = W / W2;
            var ratio_h = H / H2;
            var ratio_w_half = Math.ceil(ratio_w/2);
            var ratio_h_half = Math.ceil(ratio_h/2);

            for(var j = 0; j < H2; j++){
                for(var i = 0; i < W2; i++){
                    var x2 = (i + j*W2) * 4;
                    var weight = 0;
                    var weights = 0;
                    var weights_alpha = 0;
                    var gx_r = 0, gx_g = 0, gx_b = 0, gx_a = 0;
                    var center_y = (j + 0.5) * ratio_h;
                    for(var yy = Math.floor(j * ratio_h); yy < (j + 1) * ratio_h; yy++){
                        var dy = Math.abs(center_y - (yy + 0.5)) / ratio_h_half;
                        var center_x = (i + 0.5) * ratio_w;
                        var w0 = dy*dy; //pre-calc part of w
                        for(var xx = Math.floor(i * ratio_w); xx < (i + 1) * ratio_w; xx++){
                            var dx = Math.abs(center_x - (xx + 0.5)) / ratio_w_half;
                            var w = Math.sqrt(w0 + dx*dx);
                            if(w >= -1 && w <= 1){
                                //hermite filter
                                weight = 2 * w*w*w - 3*w*w + 1;
                                if(weight > 0){
                                    dx = 4*(xx + yy*W);
                                    //alpha
                                    gx_a += weight * data[dx + 3];
                                    weights_alpha += weight;
                                    //colors
                                    if(data[dx + 3] < 255)
                                        weight = weight * data[dx + 3] / 250;
                                    gx_r += weight * data[dx];
                                    gx_g += weight * data[dx + 1];
                                    gx_b += weight * data[dx + 2];
                                    weights += weight;
                                }
                            }
                        }
                    }
                    data2[x2]     = gx_r / weights;
                    data2[x2 + 1] = gx_g / weights;
                    data2[x2 + 2] = gx_b / weights;
                    data2[x2 + 3] = gx_a / weights_alpha;
                }
            }
            // console.log("hermite = "+(Math.round(Date.now() - time1)/1000)+" s");
            canvas.getContext("2d").clearRect(0, 0, Math.max(W, W2), Math.max(H, H2));
            canvas.width = W2;
            canvas.height = H2;
            canvas.getContext("2d").putImageData(img2, 0, 0);
        }

        /**
         * Creates an icon of the specified url image
         *
         * @param url
         * @param size
         * @param type
         * @param quality
         * @param callback
         */
        static createThumbOfUrl(url: string, options: ImageExportOptions, callback: (dataUrl: string) => any = null){

            // Create image
            var img = new Image();

            // Handle load
            img.onload = () => {

                // Create icon of image
                callback(ImageUtil.createThumbOfImage(img, options));

            };

            // Start loading image
            img.crossOrigin = '';
            img.src = url;

        }

        /**
         * Gets the base64 data of the specified data url
         * @param dataUrl
         */
        static getBase64(dataUrl: string): string{

            var indicator = 'base64,';
            var index = dataUrl.indexOf(indicator);

            if(index > 0) {
                return dataUrl.substr(index + indicator.length);
            }

            return null;
        }

        /**
         * Reads the file and returns de data as dataUrl in the callback
         * @param url
         * @param callback
         */
        static readFileAsDataUrl(file: any, callback: (dataUrl: string) => any){

            // Craete file reader
            var reader = new FileReader();

            // Handle load of file
            reader.onload = (e) => {

                // Gets the data url
                var dataUrl = (<any>e.target).result;

                // Callback
                callback(dataUrl);

            };

            // Start reading file
            reader.readAsDataURL(file);

        }

        /**
         * Gets the image encoded as base64 data
         * @param image
         * @returns {string}
         */
        static getImageAsBase64(image: HTMLImageElement): string{

            var canvas = document.createElement('canvas');
            canvas.width = image.width;
            canvas.height = image.height;

            var c = canvas.getContext('2d');
            c.drawImage(image, 0, 0);

            return ImageUtil.getBase64(canvas.toDataURL('image/png'));

        }

        /**
         * Gets the mimetype of the specified extension.
         * Pass extension either with or without dot at the first character.
         * @param extension
         */
        static mimeTypeOf(extension: string): string{

            var e = String(extension).toLowerCase().trim();

            if(e.charAt(0) == '.') e = e.substr(1);

            switch(e){
                case "jpg":
                    return "image/jpeg";
                case "jpeg":
                    return "image/jpeg";
                case "gif":
                    return "image/gif";
                case "webp":
                    return "image/webp";
                case "png":
                    return "image/png";
                default:
                    return "image/png";
            }

        }

        /**
         * Returns a value indicating if the specified mimetype is compressabel
         * @param mimeType
         * @returns {boolean}
         */
        static mimeTypeCompressable(mimeType: string): boolean{
            var m = String(mimeType).toLocaleLowerCase();

            return m == "image/jpg" || m == "image/jpeg" || m == "image/webp";
        }

        /**
         * Returns a value indicating if the specified mimetype is compressabel
         * @param mimeType
         * @returns {boolean}
         */
        static mimeTypeTransparent(mimeType: string): boolean{
            var m = String(mimeType).toLocaleLowerCase();

            return m == "image/png" || m == "image/gif";
        }

        /**
         * Rotates the image counterclockwise
         * @param image
         * @param options
         * @returns {HTMLImageElement|HTMLElement}
         */
        static rotateCounterClockwise(image: HTMLImageElement, options: ImageExportOptions = null): HTMLImageElement{

            if(!options) {
                options = <any>{};
            }

            let c = document.createElement('canvas');
            c.width = <any>image.naturalHeight;
            c.height = <any>image.naturalWidth;

            let x = c.getContext('2d');

            x.save();
            x.translate(c.width / 2, c.height / 2);
            x.rotate(-90 * Math.PI / 180);
            x.drawImage(image, -image.naturalWidth / 2, -image.naturalHeight / 2);
            x.restore();

            let img = document.createElement('img');
            img.src = c.toDataURL(options.type || 'image/jpeg', options.quality || ImageUtil.DEFAULT_QUALITY);

            return img;

        }

        /**
         * Rotates the image clockwise.
         * @param image
         * @param options
         * @returns {HTMLImageElement|HTMLElement}
         */
        static rotateClockwise(image: HTMLImageElement, options: ImageExportOptions = null): HTMLImageElement{

            if(!options) {
                options = <any>{};
            }

            let c = document.createElement('canvas');
            c.width = <any>image.naturalHeight;
            c.height = <any>image.naturalWidth;

            let x = c.getContext('2d');

            x.save();
            x.translate(c.width / 2, c.height / 2);
            x.rotate(90 * Math.PI / 180);
            x.drawImage(image, -image.naturalWidth / 2, -image.naturalHeight / 2);
            x.restore();

            let img = document.createElement('img');
            img.src = c.toDataURL(options.type || 'image/jpeg', options.quality || ImageUtil.DEFAULT_QUALITY);

            return img;

        }

        //endregion



    }

}