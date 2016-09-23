/**
 * Created by josemanuel on 8/5/16.
 */
module latte {

    /**
     *
     */
    export class UserExplorer extends ExplorerItemDataRecord<User> {

        //region Static
        //endregion

        //region Fields
        //endregion

        /**
         *
         */
        constructor(r: User) {
            super();

            if(r) {
                this.record = r;
            }
        }

        //region Private Methods

        private changePassword(){

            let fields: IInputList = {
                old: {
                    text: strings.oldPassword,
                    type: 'password'
                },
                choose: {
                    text: strings.newPassword,
                    type: 'password',
                    hint: strings.passwordRules
                },
                confirm: {
                    text: strings.confirmNewPassword,
                    type: 'password'
                }
            };

            if(User.me.isRoot) {
                delete fields['old'];
            }

            DialogView.input(strings.changePassword,
                fields,

                (values, inputs) => {
                    inputs['choose'].valid = String(values['choose']).length >= 5;

                    if(values['choose'] != values['confirm']) {
                        inputs['confirm'].valid = false;
                        inputs['confirm'].setHint(strings.passwordsDontMatch)
                    }else {
                        inputs['confirm'].valid = true;
                        inputs['confirm'].hintItem = null;
                    }

                    if(!User.me.isRoot) {
                        return (callback) => {
                            this.record.passwordCorrect(values['old']).send((result) => {
                                inputs['old'].valid = result;
                                inputs['old'].setHint(result ? null : strings.currentPasswordNotValid);
                                callback()
                            });
                        };
                    }

                },

                (values) => {
                    this.record.changePassword(values['old'] || '', values['choose']).send(() => {
                        DialogView.inform(strings.passwordChangeSuccess).addOkButton();
                    });
                }
            );

        }
        //endregion

        //region Methods

         /**
         * Gets the columns of the item
         * @Override
         */
        getColumns(): string[]{
            return ['uname', 'flags'];
        }

        /**
         * Gets the detail view of the item
         * @Override
         */
        getDetailView(): View{

            let v = super.getDetailView();

            (<any>v).items.add(this.btnChangePassword);

            return v;
        }

        /**
         * Gets the name of the item
         * @Override
         */
        getName(): string{
            return this.record.uname;
        }

        /**
         * Gets the icon of the item
         * @Override
         */
        getIcon(): IconItem{
            return LinearIcon.user
        }

        //endregion

        //region Events
        //endregion

        //region Properties

        //endregion

        //region Components
        /**
         * Field for btnChangePassword property
         */
        private _btnChangePassword: ButtonItem;

        /**
         * Gets the change password button
         *
         * @returns {ButtonItem}
         */
        get btnChangePassword(): ButtonItem {
            if (!this._btnChangePassword) {
                this._btnChangePassword = new ButtonItem(strings.changePassword);
                this._btnChangePassword.addClass('action-button');
                this._btnChangePassword.click.add(() => this.changePassword());
            }
            return this._btnChangePassword;
        }

        //endregion

    }

}