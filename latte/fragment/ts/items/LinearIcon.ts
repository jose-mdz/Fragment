/**
 * Created by josemanuel on 8/22/16.
 */
module latte {

    /**
     *
     */
    export class LinearIcon extends IconItem {

        //region Static
        static get home(): LinearIcon { return LinearIcon.byStyleName("home"); }
        static get apartment(): LinearIcon { return LinearIcon.byStyleName("apartment"); }
        static get pencil(): LinearIcon { return LinearIcon.byStyleName("pencil"); }
        static get magic_wand(): LinearIcon { return LinearIcon.byStyleName("magic-wand"); }
        static get drop(): LinearIcon { return LinearIcon.byStyleName("drop"); }
        static get lighter(): LinearIcon { return LinearIcon.byStyleName("lighter"); }
        static get poop(): LinearIcon { return LinearIcon.byStyleName("poop"); }
        static get sun(): LinearIcon { return LinearIcon.byStyleName("sun"); }
        static get moon(): LinearIcon { return LinearIcon.byStyleName("moon"); }
        static get cloud(): LinearIcon { return LinearIcon.byStyleName("cloud"); }
        static get cloud_upload(): LinearIcon { return LinearIcon.byStyleName("cloud-upload"); }
        static get cloud_download(): LinearIcon { return LinearIcon.byStyleName("cloud-download"); }
        static get cloud_sync(): LinearIcon { return LinearIcon.byStyleName("cloud-sync"); }
        static get cloud_check(): LinearIcon { return LinearIcon.byStyleName("cloud-check"); }
        static get database(): LinearIcon { return LinearIcon.byStyleName("database"); }
        static get lock(): LinearIcon { return LinearIcon.byStyleName("lock"); }
        static get cog(): LinearIcon { return LinearIcon.byStyleName("cog"); }
        static get trash(): LinearIcon { return LinearIcon.byStyleName("trash"); }
        static get dice(): LinearIcon { return LinearIcon.byStyleName("dice"); }
        static get heart(): LinearIcon { return LinearIcon.byStyleName("heart"); }
        static get star(): LinearIcon { return LinearIcon.byStyleName("star"); }
        static get star_half(): LinearIcon { return LinearIcon.byStyleName("star-half"); }
        static get star_empty(): LinearIcon { return LinearIcon.byStyleName("star-empty"); }
        static get flag(): LinearIcon { return LinearIcon.byStyleName("flag"); }
        static get envelope(): LinearIcon { return LinearIcon.byStyleName("envelope"); }
        static get paperclip(): LinearIcon { return LinearIcon.byStyleName("paperclip"); }
        static get inbox(): LinearIcon { return LinearIcon.byStyleName("inbox"); }
        static get eye(): LinearIcon { return LinearIcon.byStyleName("eye"); }
        static get printer(): LinearIcon { return LinearIcon.byStyleName("printer"); }
        static get file_empty(): LinearIcon { return LinearIcon.byStyleName("file-empty"); }
        static get file_add(): LinearIcon { return LinearIcon.byStyleName("file-add"); }
        static get enter(): LinearIcon { return LinearIcon.byStyleName("enter"); }
        static get exit(): LinearIcon { return LinearIcon.byStyleName("exit"); }
        static get graduation_hat(): LinearIcon { return LinearIcon.byStyleName("graduation-hat"); }
        static get license(): LinearIcon { return LinearIcon.byStyleName("license"); }
        static get music_note(): LinearIcon { return LinearIcon.byStyleName("music-note"); }
        static get film_play(): LinearIcon { return LinearIcon.byStyleName("film-play"); }
        static get camera_video(): LinearIcon { return LinearIcon.byStyleName("camera-video"); }
        static get camera(): LinearIcon { return LinearIcon.byStyleName("camera"); }
        static get picture(): LinearIcon { return LinearIcon.byStyleName("picture"); }
        static get book(): LinearIcon { return LinearIcon.byStyleName("book"); }
        static get bookmark(): LinearIcon { return LinearIcon.byStyleName("bookmark"); }
        static get user(): LinearIcon { return LinearIcon.byStyleName("user"); }
        static get users(): LinearIcon { return LinearIcon.byStyleName("users"); }
        static get shirt(): LinearIcon { return LinearIcon.byStyleName("shirt"); }
        static get store(): LinearIcon { return LinearIcon.byStyleName("store"); }
        static get cart(): LinearIcon { return LinearIcon.byStyleName("cart"); }
        static get tag(): LinearIcon { return LinearIcon.byStyleName("tag"); }
        static get phone_handset(): LinearIcon { return LinearIcon.byStyleName("phone-handset"); }
        static get phone(): LinearIcon { return LinearIcon.byStyleName("phone"); }
        static get pushpin(): LinearIcon { return LinearIcon.byStyleName("pushpin"); }
        static get map_marker(): LinearIcon { return LinearIcon.byStyleName("map-marker"); }
        static get map(): LinearIcon { return LinearIcon.byStyleName("map"); }
        static get location(): LinearIcon { return LinearIcon.byStyleName("location"); }
        static get calendar_full(): LinearIcon { return LinearIcon.byStyleName("calendar-full"); }
        static get keyboard(): LinearIcon { return LinearIcon.byStyleName("keyboard"); }
        static get spell_check(): LinearIcon { return LinearIcon.byStyleName("spell-check"); }
        static get screen(): LinearIcon { return LinearIcon.byStyleName("screen"); }
        static get smartphone(): LinearIcon { return LinearIcon.byStyleName("smartphone"); }
        static get tablet(): LinearIcon { return LinearIcon.byStyleName("tablet"); }
        static get laptop(): LinearIcon { return LinearIcon.byStyleName("laptop"); }
        static get laptop_phone(): LinearIcon { return LinearIcon.byStyleName("laptop-phone"); }
        static get power_switch(): LinearIcon { return LinearIcon.byStyleName("power-switch"); }
        static get bubble(): LinearIcon { return LinearIcon.byStyleName("bubble"); }
        static get heart_pulse(): LinearIcon { return LinearIcon.byStyleName("heart-pulse"); }
        static get construction(): LinearIcon { return LinearIcon.byStyleName("construction"); }
        static get pie_chart(): LinearIcon { return LinearIcon.byStyleName("pie-chart"); }
        static get chart_bars(): LinearIcon { return LinearIcon.byStyleName("chart-bars"); }
        static get gift(): LinearIcon { return LinearIcon.byStyleName("gift"); }
        static get diamond(): LinearIcon { return LinearIcon.byStyleName("diamond"); }
        static get linearicons(): LinearIcon { return LinearIcon.byStyleName("linearicons"); }
        static get dinner(): LinearIcon { return LinearIcon.byStyleName("dinner"); }
        static get coffee_cup(): LinearIcon { return LinearIcon.byStyleName("coffee-cup"); }
        static get leaf(): LinearIcon { return LinearIcon.byStyleName("leaf"); }
        static get paw(): LinearIcon { return LinearIcon.byStyleName("paw"); }
        static get rocket(): LinearIcon { return LinearIcon.byStyleName("rocket"); }
        static get briefcase(): LinearIcon { return LinearIcon.byStyleName("briefcase"); }
        static get bus(): LinearIcon { return LinearIcon.byStyleName("bus"); }
        static get car(): LinearIcon { return LinearIcon.byStyleName("car"); }
        static get train(): LinearIcon { return LinearIcon.byStyleName("train"); }
        static get bicycle(): LinearIcon { return LinearIcon.byStyleName("bicycle"); }
        static get wheelchair(): LinearIcon { return LinearIcon.byStyleName("wheelchair"); }
        static get select(): LinearIcon { return LinearIcon.byStyleName("select"); }
        static get earth(): LinearIcon { return LinearIcon.byStyleName("earth"); }
        static get smile(): LinearIcon { return LinearIcon.byStyleName("smile"); }
        static get sad(): LinearIcon { return LinearIcon.byStyleName("sad"); }
        static get neutral(): LinearIcon { return LinearIcon.byStyleName("neutral"); }
        static get mustache(): LinearIcon { return LinearIcon.byStyleName("mustache"); }
        static get alarm(): LinearIcon { return LinearIcon.byStyleName("alarm"); }
        static get bullhorn(): LinearIcon { return LinearIcon.byStyleName("bullhorn"); }
        static get volume_high(): LinearIcon { return LinearIcon.byStyleName("volume-high"); }
        static get volume_medium(): LinearIcon { return LinearIcon.byStyleName("volume-medium"); }
        static get volume_low(): LinearIcon { return LinearIcon.byStyleName("volume-low"); }
        static get volume(): LinearIcon { return LinearIcon.byStyleName("volume"); }
        static get mic(): LinearIcon { return LinearIcon.byStyleName("mic"); }
        static get hourglass(): LinearIcon { return LinearIcon.byStyleName("hourglass"); }
        static get undo(): LinearIcon { return LinearIcon.byStyleName("undo"); }
        static get redo(): LinearIcon { return LinearIcon.byStyleName("redo"); }
        static get sync(): LinearIcon { return LinearIcon.byStyleName("sync"); }
        static get history(): LinearIcon { return LinearIcon.byStyleName("history"); }
        static get clock(): LinearIcon { return LinearIcon.byStyleName("clock"); }
        static get download(): LinearIcon { return LinearIcon.byStyleName("download"); }
        static get upload(): LinearIcon { return LinearIcon.byStyleName("upload"); }
        static get enter_down(): LinearIcon { return LinearIcon.byStyleName("enter-down"); }
        static get exit_up(): LinearIcon { return LinearIcon.byStyleName("exit-up"); }
        static get bug(): LinearIcon { return LinearIcon.byStyleName("bug"); }
        static get code(): LinearIcon { return LinearIcon.byStyleName("code"); }
        static get link(): LinearIcon { return LinearIcon.byStyleName("link"); }
        static get unlink(): LinearIcon { return LinearIcon.byStyleName("unlink"); }
        static get thumbs_up(): LinearIcon { return LinearIcon.byStyleName("thumbs-up"); }
        static get thumbs_down(): LinearIcon { return LinearIcon.byStyleName("thumbs-down"); }
        static get magnifier(): LinearIcon { return LinearIcon.byStyleName("magnifier"); }
        static get cross(): LinearIcon { return LinearIcon.byStyleName("cross"); }
        static get menu(): LinearIcon { return LinearIcon.byStyleName("menu"); }
        static get list(): LinearIcon { return LinearIcon.byStyleName("list"); }
        static get chevron_up(): LinearIcon { return LinearIcon.byStyleName("chevron-up"); }
        static get chevron_down(): LinearIcon { return LinearIcon.byStyleName("chevron-down"); }
        static get chevron_left(): LinearIcon { return LinearIcon.byStyleName("chevron-left"); }
        static get chevron_right(): LinearIcon { return LinearIcon.byStyleName("chevron-right"); }
        static get arrow_up(): LinearIcon { return LinearIcon.byStyleName("arrow-up"); }
        static get arrow_down(): LinearIcon { return LinearIcon.byStyleName("arrow-down"); }
        static get arrow_left(): LinearIcon { return LinearIcon.byStyleName("arrow-left"); }
        static get arrow_right(): LinearIcon { return LinearIcon.byStyleName("arrow-right"); }
        static get move(): LinearIcon { return LinearIcon.byStyleName("move"); }
        static get warning(): LinearIcon { return LinearIcon.byStyleName("warning"); }
        static get question_circle(): LinearIcon { return LinearIcon.byStyleName("question-circle"); }
        static get menu_circle(): LinearIcon { return LinearIcon.byStyleName("menu-circle"); }
        static get checkmark_circle(): LinearIcon { return LinearIcon.byStyleName("checkmark-circle"); }
        static get cross_circle(): LinearIcon { return LinearIcon.byStyleName("cross-circle"); }
        static get plus_circle(): LinearIcon { return LinearIcon.byStyleName("plus-circle"); }
        static get circle_minus(): LinearIcon { return LinearIcon.byStyleName("circle-minus"); }
        static get arrow_up_circle(): LinearIcon { return LinearIcon.byStyleName("arrow-up-circle"); }
        static get arrow_down_circle(): LinearIcon { return LinearIcon.byStyleName("arrow-down-circle"); }
        static get arrow_left_circle(): LinearIcon { return LinearIcon.byStyleName("arrow-left-circle"); }
        static get arrow_right_circle(): LinearIcon { return LinearIcon.byStyleName("arrow-right-circle"); }
        static get chevron_up_circle(): LinearIcon { return LinearIcon.byStyleName("chevron-up-circle"); }
        static get chevron_down_circle(): LinearIcon { return LinearIcon.byStyleName("chevron-down-circle "); }
        static get chevron_left_circle(): LinearIcon { return LinearIcon.byStyleName("chevron-left-circle "); }
        static get chevron_right_circle (): LinearIcon { return LinearIcon.byStyleName("chevron-right-circle"); }
        static get crop(): LinearIcon { return LinearIcon.byStyleName("crop"); }
        static get frame_expand(): LinearIcon { return LinearIcon.byStyleName("frame-expand"); }
        static get frame_contract(): LinearIcon { return LinearIcon.byStyleName("frame-contract"); }
        static get layers(): LinearIcon { return LinearIcon.byStyleName("layers"); }
        static get funnel(): LinearIcon { return LinearIcon.byStyleName("funnel"); }
        static get text_format(): LinearIcon { return LinearIcon.byStyleName("text-format"); }
        static get text_format_remove(): LinearIcon { return LinearIcon.byStyleName("text-format-remove"); }
        static get text_size(): LinearIcon { return LinearIcon.byStyleName("text-size"); }
        static get bold(): LinearIcon { return LinearIcon.byStyleName("bold"); }
        static get italic(): LinearIcon { return LinearIcon.byStyleName("italic"); }
        static get underline(): LinearIcon { return LinearIcon.byStyleName("underline"); }
        static get strikethrough(): LinearIcon { return LinearIcon.byStyleName("strikethrough"); }
        static get highlight(): LinearIcon { return LinearIcon.byStyleName("highlight"); }
        static get text_align_left(): LinearIcon { return LinearIcon.byStyleName("text-align-left"); }
        static get text_align_center(): LinearIcon { return LinearIcon.byStyleName("text-align-center"); }
        static get text_align_right(): LinearIcon { return LinearIcon.byStyleName("text-align-right"); }
        static get text_align_justify(): LinearIcon { return LinearIcon.byStyleName("text-align-justify"); }
        static get line_spacing(): LinearIcon { return LinearIcon.byStyleName("line-spacing"); }
        static get indent_increase(): LinearIcon { return LinearIcon.byStyleName("indent-increase"); }
        static get indent_decrease(): LinearIcon { return LinearIcon.byStyleName("indent-decrease"); }
        static get pilcrow(): LinearIcon { return LinearIcon.byStyleName("pilcrow"); }
        static get direction_ltr(): LinearIcon { return LinearIcon.byStyleName("direction-ltr"); }
        static get direction_rtl(): LinearIcon { return LinearIcon.byStyleName("direction-rtl"); }
        static get page_break(): LinearIcon { return LinearIcon.byStyleName("page-break"); }
        static get sort_alpha_asc(): LinearIcon { return LinearIcon.byStyleName("sort-alpha-asc"); }
        static get sort_amount_asc(): LinearIcon { return LinearIcon.byStyleName("sort-amount-asc"); }
        static get hand(): LinearIcon { return LinearIcon.byStyleName("hand"); }
        static get pointer_up(): LinearIcon { return LinearIcon.byStyleName("pointer-up"); }
        static get pointer_right(): LinearIcon { return LinearIcon.byStyleName("pointer-right"); }
        static get pointer_down(): LinearIcon { return LinearIcon.byStyleName("pointer-down"); }
        static get pointer_left(): LinearIcon { return LinearIcon.byStyleName("pointer-left"); }

        /**
         * Gets the icon by name
         * @param name
         * @returns {latte.LinearIcon}
         */
        static byStyleName(name: string): LinearIcon{
            let item = new LinearIcon();
            item.addClass('lnr-' + name);
            item.linearIconName = name;
            return item;
        }
        //endregion

        //region Fields
        //endregion

        /**
         *
         */
        constructor() {
            super();
            this.addClass('lnr');
            this.url = null;
        }

        //region Private Methods
        //endregion

        //region Methods

        /**
         * Returns a clone of the icon
         **/
        clone(): IconItem{

            let icon = super.clone();

            icon.addClass('lnr');
            icon.addClass('lnr' + this.linearIconName);

            return icon;

        }

        /**
         * Sets the color and returns the icon for chaining
         * @param color
         * @returns {latte.LinearIcon}
         */
        colorize(color: Color): LinearIcon{
            this.element.css('color', color.toString());
            return this;
        }

        /**
         * Sets the size to 32 and returns the icon for chaining
         * @returns {latte.LinearIcon}
         */
        go32(): LinearIcon{
            this.size = 32;
            return this;
        }

        //endregion

        //region Events
        //endregion

        //region Properties

        /**
         * Property field
         */
        private _linearIconName: string = null;

        /**
         * Gets or sets the linear icon name
         *
         * @returns {string}
         */
        get linearIconName(): string {
            return this._linearIconName;
        }

        /**
         * Gets or sets the linear icon name
         *
         * @param {string} value
         */
        set linearIconName(value: string) {
            this._linearIconName = value;
        }

        //endregion

    }

}