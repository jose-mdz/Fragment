/**
 * Created by josemanuel on 9/19/16.
 */
module latte{
    export interface IPageConfiguration{
        fragments?: IFragments;
        children?: IPageConfigurationChildren;
        settings?: IPageConfigurationSettings;
    }
}