/**
 * Created by josemanuel on 6/1/17.
 */
module latte{
    export interface IImageGalleryFragment extends IImageFragment{
        "thumb-fit": "aspect-fit" | "aspect-fill" | "aspect-fill-far" | "aspect-fill-near";
        "thumb-width": number;
        "thumb-height": number;
        "print-images": boolean;
    }
}