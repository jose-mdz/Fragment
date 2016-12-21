/**
 * Created by josemanuel on 12/20/16.
 */
module latte {

    /**
     *
     */
    export class CartView extends CartViewBase {

        //region Static
        /**
         * Prompts the cart
         */
        static prompt(){

            let cv = new CartView();
            let d = ElementDialog.showElement(cv);

            d.show();
        }
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
        //endregion

        //region Methods
        //endregion

        //region Events
        //endregion

        //region Properties
        //endregion

    }

}