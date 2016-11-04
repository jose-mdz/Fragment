/**
 * Created by josemanuel on 10/12/16.
 */
module latte {

    declare var OpenPay: any;

    /**
     *
     */
    export class OpenPayCCView extends OpenPayCCViewBase {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         *
         */
        constructor() {
            super();

            this.cardViewElement.add(this.cardView);

            // Name fields to comply with Openpay
            this.cardView.txtCardHolder.element.setAttribute('data-openpay-card', 'holder_name');
            this.cardView.txtCardNumber.element.setAttribute('data-openpay-card', 'card_number');
            this.cardView.month.element.setAttribute('data-openpay-card', 'expiration_month');
            this.cardView.year.element.setAttribute('data-openpay-card', 'expiration_year');
            this.cardView.txtCvv.element.setAttribute('data-openpay-card', 'cvv2');

        }

        //region Private Methods
        //endregion

        //region Methods

        //endregion

        //region Events

        //endregion

        //region Properties
        /**
         * Field for cardView property
         */
        private _cardView: CreditCardView;

        /**
         * Gets the credit card view
         *
         * @returns {CreditCardView}
         */
        get cardView(): CreditCardView {
            if (!this._cardView) {
                this._cardView = new CreditCardView();
            }
            return this._cardView;
        }

        //endregion

    }

}