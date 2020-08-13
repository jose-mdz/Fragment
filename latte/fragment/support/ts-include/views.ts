module latte{
	export class SignInViewBase extends Element<HTMLDivElement>{
		private _combo:Element<HTMLDivElement>;
		get combo():Element<HTMLDivElement> {
			if (!this._combo) {
				this._combo = new Element<HTMLDivElement>(this.querySelector('[data-property=combo]'));
			}
			return this._combo;
		}

		private _error:Element<HTMLDivElement>;
		get error():Element<HTMLDivElement> {
			if (!this._error) {
				this._error = new Element<HTMLDivElement>(this.querySelector('[data-property=error]'));
			}
			return this._error;
		}

		private _fieldEmail:Element<HTMLDivElement>;
		get fieldEmail():Element<HTMLDivElement> {
			if (!this._fieldEmail) {
				this._fieldEmail = new Element<HTMLDivElement>(this.querySelector('[data-property=fieldEmail]'));
			}
			return this._fieldEmail;
		}

		private _fieldPassword:Element<HTMLDivElement>;
		get fieldPassword():Element<HTMLDivElement> {
			if (!this._fieldPassword) {
				this._fieldPassword = new Element<HTMLDivElement>(this.querySelector('[data-property=fieldPassword]'));
			}
			return this._fieldPassword;
		}

		private _form:Element<HTMLFormElement>;
		get form():Element<HTMLFormElement> {
			if (!this._form) {
				this._form = new Element<HTMLFormElement>(this.querySelector('[data-property=form]'));
			}
			return this._form;
		}

		private _txtEmail:Textbox;
		get txtEmail():Textbox {
			if (!this._txtEmail) {
				this._txtEmail = new Textbox(this.querySelector('[data-property=txtEmail]'));
			}
			return this._txtEmail;
		}

		private _txtPassword:Textbox;
		get txtPassword():Textbox {
			if (!this._txtPassword) {
				this._txtPassword = new Textbox(this.querySelector('[data-property=txtPassword]'));
			}
			return this._txtPassword;
		}

		private static _Model:Element<HTMLDivElement>;
		static getModel():Element<HTMLDivElement> {
			if (!this._Model) {
				this._Model = new Element<HTMLDivElement>(Element.fromBank('SignInViewBase'));
			}
			return this._Model;
		}

		constructor(){
			super(Element.fromBank('SignInViewBase'));
			this.bind(this, true);
		}
	}
}