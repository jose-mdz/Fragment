/**
 * Created by josemanuel on 9/19/16.
 */
module latte{
    export interface IPageConfigurationSetting{
        name: string;
        key?: string;
        type?: 'string' | 'boolean' | 'enumeration';
        defaultValue?: any;
        options?: any;
        required?: boolean;
    }
}