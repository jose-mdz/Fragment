/**
 * Created by josemanuel on 7/14/16.
 */
module latte {

    /**
     *
     */
    export class Main {

        //region Static

        /**
         * Goes to the editor view
         * @param guid
         */
        static goEditorView(guid: string){

            Page.byUrlQ(guid).send((p: Page) => {
                Element.body.clear();
                View.mainView = new PageEditorView(p);
            });

        }

        /**
         * Goes to the install wizard
         */
        static goInstllWizard(){
            Element.body.clear();
            View.mainView = new InstallWizardView();
        }

        /**
         * Goes to the main view
         */
        static goMainView(){
            Element.body.clear();
            View.mainView = new CmsMainView();
        }

        /**
         * Goes to the sign in view
         */
        static goSignInView(){
            Element.body.clear();
            let v = new SignInView();
            document.body.appendChild(v.element);
        }

        /**
         * Logs the user out
         */
        static logOut(){
            View.mainView = null;
            Session.logOut().send(() => {
                document.location.reload();
            });
        }
        //endregion

        //region Fields
        //endregion

        /**
         * Boots the script
         */
        constructor() {
            console.log('%cF R %cΔ %cG M E N T',
                'letter-spacing: 10px; font-size: 30px; color: #000; text-shadow: 0px 3px 3px rgba(0,0,0,0.2); font-family:"Avenir Next","Myriad",sans-serif;',
                'letter-spacing: 10px; font-size: 30px; color: #ff4d4d; text-shadow: 0px 0px 7px rgba(255,66,66,0.5); font-family:"Avenir Next","Myriad",sans-serif;',
                'letter-spacing: 10px; font-size: 30px; color: #000; text-shadow: 0px 3px 3px rgba(0,0,0,0.2); font-family:"Avenir Next","Myriad",sans-serif;');
            console.log('http://github.com/menendezpoo/Fragment');

            FragmentAdapterManager.register('text', 'PlainTextFragmentAdapter');
            FragmentAdapterManager.register('html', 'HtmlFragmentAdapter');
            FragmentAdapterManager.register('gallery', 'ImageGalleryFragmentAdapter');
            FragmentAdapterManager.register('image', 'ImageFragmentAdapter');

            if(window['fragmentNoDbConnection']) {
                Main.goInstllWizard();
            }else{
                if(window['loggedFragmentUser']) {
                    User.me = <User>DataRecord.fromServerObject(window['loggedFragmentUser']);
                    if(window.location.hash.indexOf('#/Editor/') === 0) {
                        Main.goEditorView(window.location.hash.substr(9));
                    }else{
                        Main.goMainView();
                    }
                }else {
                    Main.goSignInView();
                }
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