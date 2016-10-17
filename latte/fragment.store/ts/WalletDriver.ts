/**
 * Created by josemanuel on 10/14/16.
 */
module latte {

    /**
     *
     */
    export class WalletDriver {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         *
         */
        constructor() {
        }

        //region Private Methods
        //endregion

        //region Methods

        /**
         * Should return the name of the driver
         */
        getDriverName(): string{
            throw "Implement in subclass";
        }

        charge(payment: Payment){

        }

        //endregion

        //region Events
        //endregion

        //region Properties
        //endregion

    }

}