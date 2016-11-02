/**
 * Created by josemanuel on 11/1/16.
 */
module latte {

    /**
     *
     */
    export class PaymentMethodView extends PaymentMethodViewBase {

        //region Static
        static prompt(charge: Charge, callback: () => any){
            let v = new PaymentMethodView();

            let d = ElementDialog.showElement(v);
        }
        //endregion

        //region Fields
        //endregion

        /**
         *
         */
        constructor() {
            super();

            this.loadMethods();
        }

        //region Private Methods

        payNow_Click(){
            //TODO: AQUI ME QUEDE: Handle this
        }

        /**
         * Handles click on clickable method
         * @param clickable
         * @param content
         * @param m
         */
        methodClickable_Click(clickable: PaymentClickable, m: PayMethod){

            this.payMethodOptions.findAll('.clickable-option').removeClass('checked');

            let currentContent = this.payMethodOptions.querySelector('.content');

            if(currentContent) {
                currentContent.remove();
            }

            clickable.addClass('checked');

            let content = new PaymentClickableContent();

            clickable.element.insertAdjacentElement('afterend', content.element);

            // UI for pay method
            let ui = m.wallet.driver.getPayMethodUI(m);

            if(ui) {
                content.element.appendChild(ui);
            }else{
                content.text = "You will be redirected";
            }


        }
        //endregion

        //region Methods
        /**
         * Loads the pay methods
         */
        loadMethods(){
            this.payMethodOptions.clear();
            PayMethod.getPublicAvailable().send((methods: PayMethod[]) => {
                this.payMethodOptions.clear();

                methods.forEach((m: PayMethod) => {

                    let clickable = new PaymentClickable();
                    clickable.label.text = m.name;
                    clickable.radio.visible = false;
                    clickable.tag = m;
                    clickable.addEventListener('click', () => this.methodClickable_Click(clickable, m));

                    this.payMethodOptions.add(clickable);

                });
            });
        }
        //endregion

        //region Events
        //endregion

        //region Properties
        //endregion

    }

}