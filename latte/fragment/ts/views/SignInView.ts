/**
 * Created by josemanuel on 6/10/16.
 */
module latte {

    /**
     *
     */
    export class SignInView extends SignInViewBase {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         *
         */
        constructor() {
            super();

            // FX handlers
            this.txtEmail.addEventListener('focus', () => {
                this.combo.ensureClass('focus', true);
                this.fieldEmail.ensureClass('focus', true);
                this.fieldPassword.ensureClass('focus', false);
            });

            this.txtPassword.addEventListener('focus', () => {
                this.combo.ensureClass('focus', true);
                this.fieldEmail.ensureClass('focus', false);
                this.fieldPassword.ensureClass('focus', true);
            });

            this.txtEmail.addEventListener('blur', () => {
                this.combo.ensureClass('focus', false);
                this.fieldEmail.ensureClass('focus', false);
            });

            this.txtPassword.addEventListener('blur', () => {
                this.combo.ensureClass('focus', false);
                this.fieldPassword.ensureClass('focus', false);
            });

            this.form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.formSubmit();
            });
        }

        //region Private Methods
        //endregion

        //region Methods

        /**
         * Handles the form submit
         */
        formSubmit(){

            let call = Session.logIn(this.txtEmail.text, this.txtPassword.text).withHandlers((user: User) => {
                User.me = user;
                Main.goMainView();
            });

            call.failure.add((err) => {


                if(err) {
                    if(strings[err]) {
                        this.error.text = strings[err];
                    }else {
                        this.error.text = err;
                    }
                }

                this.error.visible = true;
            });

            call.send();
        }
        //endregion

        //region Events
        //endregion

        //region Properties
        //endregion

    }

}