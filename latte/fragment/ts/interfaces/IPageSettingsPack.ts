/**
 * Created by josemanuel on 9/19/16.
 */
module latte {

    export interface IPageSettingsPack {
        config: string;
        parentConfig: string;
        settings: Setting[];
    }
}