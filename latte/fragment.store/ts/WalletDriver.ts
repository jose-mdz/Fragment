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
         * Get UI for payment method
         */
        getPayMethodUI(m: PayMethod): HTMLElement{
            return null;
        }

        /**
         * Executes the specified charge.
         * The driver is the one in charge to know how to charge the specified amount.
         * @param charge
         */
        executeTransaction(method:PayMethod, charge: Charge, callback: (t: Transaction) => any){
            throw "Must Implement";
        }

        //endregion

        //region Events
        //endregion

        //region Properties
        //endregion

    }

}