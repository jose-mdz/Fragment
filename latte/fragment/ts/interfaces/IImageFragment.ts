module latte{


    export interface IImageFragment extends IFragment{
        "image-fit": "aspect-fit" | "aspect-fill" | "aspect-fill-far" | "aspect-fill-near";
        "image-width": number;
        "image-height": number;
    }

}