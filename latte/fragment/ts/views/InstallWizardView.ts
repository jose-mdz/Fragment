/**
 * Created by josemanuel on 9/21/16.
 */
module latte {

    export interface InstallWizardStep{
        (callback: ()=> any): any;
    }

    /**
     *
     */
    export class InstallWizardView extends View {

        //region Static
        //endregion

        //region Fields
        /**
         * Notes during installation
         * @type {Array}
         */
        notes: string[] = [];
        //endregion

        /**
         *
         */
        constructor() {
            super();

            this.addClass('install-wizard');
            this.element.append(this.spinner);

            if(window['fragmentMustChooseLang'] === true) {
                this.steps.push(this.langChoose);

            }else {
                this.steps.push(this.checkFolderWritable);
                this.steps.push(this.setupDBConnection);
                this.steps.push(this.setupDataBase);
                this.steps.push(this.setupRoot);
            }


        }

        //region Private Methods
        //endregion

        //region Methods
        /**
         * Starts the wizard
         */
        start(){
            Element.body.addClass('on-fragment-install');
            this.disptachStep();
        }

        /**
         * Executes the next step of installation wizard
         */
        disptachStep(){

            if(this.steps.length == 0) {
                this.onEnded();
                return;
            }

            // Execute next step
            (this.steps.shift()).call(this, () => this.disptachStep());

        }

        /**
         * Step for checking folder writability
         * @param callback
         */
        checkFolderWritable(callback: () => any){

            let doCheck = () => {
                Server.checkFragmentFolderWritable().send((writable: boolean) => {

                    if(writable) {
                        callback();
                    }else {
                        showRetry();
                    }

                });
            };

            let showRetry = () => {
                var d = DialogView.alert(strings.cantWriteOnFFolder, strings.cantWriteOnFFolderDesc, [
                    new ButtonItem(strings.retry, LinearIcon.redo, () => doCheck())
                ]);

                d.closeable = false;
            };

            doCheck();

        }

        /**
         * Ensures the database is present
         * @param callback
         */
        setupDataBase(callback: () => any){

            let checkInstalled = () => {
                Server.isDatabaseEmpty().send((empty: boolean)=> {
                    log("Empty: " + empty);
                    if(empty) {
                        install();
                    }else{
                        this.notes.push(strings.wDatabaseNotInstalled);
                        callback();
                    }
                });
            };

            let install = () => {
                log("Installing database");
                Server.installDatabase().send((r) => {
                    log("Database installed")
                    if(r != 'OK') {
                        this.notes.push(r);
                    }
                    initialRecords();
                });
            };

            let initialRecords = () => {

                DialogView.input(strings.chooseRootPassword,
                    {
                        password: {
                            text: strings.password,
                            type: 'password'
                        },
                        confirm: {
                            text: strings.confirmNewPassword,
                            type: 'password'
                        }
                    },
                    // Validation logic
                    (values, inputs) =>{

                    // Password should be longer than 5 chars
                    inputs['password'].valid = values['password'].length >= 5;

                    // Passwords should match
                    inputs['confirm'].valid = values['password'] == values['confirm']
                },
                // Save
                (values) => {
                    Server.installInitialRecords(values['password']).send((r) => {
                        if(r != 'OK') {
                            this.notes.push(r);
                        }
                        callback();
                    });
                }
                );

            };

            checkInstalled();
        }

        /**
         *
         * @param callback
         */
        setupDBConnection(callback: () => any){

            let lastValues: any = {};

            let askParameters = () => {

                let fd = DialogView.input(strings.enterConnectionData, {
                        user: {
                            text: strings.user,
                            defaultValue: lastValues.user
                        },
                        pass: {
                            text: strings.password,
                            type: 'password',
                            defaultValue: lastValues.pass
                        },
                        db: {
                            text: strings.database,
                            defaultValue: lastValues.db
                        },
                        host: {
                            text: strings.host,
                            defaultValue: lastValues.host
                        }
                    },
                    /** Validation */
                    () => {
                        // None
                    },
                    /** Save */
                    (values: any) => {

                        lastValues = values;

                        Server.saveConnectionParameters(
                            values.user, values.pass, values.db, values.host).send((r: string) => {

                                if(r == 'OK') {
                                    checkNow();
                                }else{
                                    let d = DialogView.alert(strings.errorSavingConfig, strings[r], [
                                        new ButtonItem(strings.retry, LinearIcon.redo, () => {
                                            setTimeout( () => askParameters(), 100)
                                        })
                                    ]);
                                    d.closeable = false;

                                }

                        });

                });

                fd.items.removeAt(1);

            };

            let checkNow = () => {
                Server.checkConnectionOk().send((connectionOk: boolean) => {

                    if(connectionOk) {
                        callback();
                    }else{
                        askParameters();
                    }

                });
            };

            checkNow();

        }

        setupRoot(callback: () => any){
            callback();
        }

        /**
         * Chooose lang
         * @param callback
         */
        langChoose(callback: () => any){

            let bar = document.createElement('div');

            let createChooser = (title: string, lang: string) => {
                let btn = document.createElement('div');
                btn.className = 'bare-button';
                btn.innerText = title;
                btn.addEventListener('click', () => {
                    jQuery(bar).fadeOut(() => {
                        Server.setTemporaryLang(lang).send(() => {
                            document.location.reload(true);
                        });
                    });
                });
                bar.appendChild(btn);
            };

            bar.className = 'lang-bar';

            createChooser('Español', 'es');
            createChooser('English', 'en');

            this.element.append(bar);

            jQuery(bar).fadeIn();
        }

        /**
         * Override. Start dispatching.
         */
        onLoad(){
            super.onLoad();

            // Start dispatching
            this.start();
        }

        /**
         * Raises the <c>ended</c> event
         */
        onEnded(){
            if(this._ended){
                this._ended.raise();
            }
            log(this.notes);
            DialogView.inform('DING!');
            Element.body.removeClass('on-fragment-install');
        }

        //endregion

        //region Events

        /**
         * Back field for event
         */
        private _ended: LatteEvent;

        /**
         * Gets an event raised when the install steps end
         *
         * @returns {LatteEvent}
         */
        get ended(): LatteEvent{
            if(!this._ended){
                this._ended = new LatteEvent(this);
            }
            return this._ended;
        }

        //endregion

        //region Properties
        /**
         * Field for steps property
         */
        private _steps: InstallWizardStep[];

        /**
         * Gets the steps to execute on the wizard
         *
         * @returns {InstallWizardStep[]}
         */
        get steps(): InstallWizardStep[] {
            if (!this._steps) {
                this._steps = [];
            }
            return this._steps;
        }

        //endregion

        //region Components
        /**
         * Field for spinner property
         */
        private _spinner: HTMLDivElement;

        /**
         * Gets the spinner element
         *
         * @returns {HTMLDivElement}
         */
        get spinner(): HTMLDivElement {
            if (!this._spinner) {
                this._spinner = document.createElement('div');
                this._spinner.className = 'spinner';
            }
            return this._spinner;
        }

        //endregion

    }

}