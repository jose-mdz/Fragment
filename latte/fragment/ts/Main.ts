/**
 * Created by josemanuel on 7/14/16.
 */
module latte {

    /**
     *
     */
    export class Main {

        //region Static
        static goMainView(){
            View.mainView = new CmsMainView();
        }

        static goSignInView(){
            let v = new SignInView();
            document.body.appendChild(v.element);
        }

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
         *
         */
        constructor() {
            console.log('%cFRAGMENT', 'font-size: 30px; color: #ff4d4d; text-shadow: 3px 3px 3px rgba(0,0,0,0.2); font-family:"Avenir Next","Myriad",sans-serif;');
            console.log('http://github.com/menendezpoo/Fragment');

            FragmentAdapterManager.register('text', 'PlainTextFragmentAdapter');
            FragmentAdapterManager.register('html', 'HtmlFragmentAdapter');
            FragmentAdapterManager.register('gallery', 'ImageGalleryFragmentAdapter');


            // View.mainView = new CmsExplorer();


            if(window['loggedFragmentUser']) {
                User.me = <User>DataRecord.fromServerObject(window['loggedFragmentUser']);
                Main.goMainView();
            }else {
                Main.goSignInView();
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