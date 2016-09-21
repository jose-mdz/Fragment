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
                this.steps.push(this.setupDBConnecion);
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
         *
         * @param callback
         */
        setupDBConnecion(callback: () => any){
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