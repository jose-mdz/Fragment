/**
 * Created by josemanuel on 11/1/16.
 */
module latte {

    /**
     *
     */
    export class CreditCardView extends CreditCardViewBase {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         *
         */
        constructor() {
            super();

            // Months
            this.month.clear();

            for (let i = 1; i <= 12; i++) {
                let op = new Element<HTMLOptionElement>(document.createElement('option'));
                op.element.value = String(i);
                op.text = sprintf('%s - %s', i, (new DateTime(2000, i, 1)).monthString);
                this.month.add(op);
            }

            // Years
            this.year.clear(); let year = DateTime.now.year - 2000;

            for (let i = year; i <= year + 20; i++) {
                let op = new Element<HTMLOptionElement>(document.createElement('option'));
                op.element.value = String(i);
                op.text = String(i);
                this.year.add(op);
            }
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