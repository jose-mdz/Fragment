/**
 * Created by josemanuel on 9/19/16.
 */
module latte{
    export interface IPageConfigurationChildren{
        mayHaveChildren?: boolean;
        settings?: IPageConfigurationSettings;
        fragments?: IFragments;
    }
}