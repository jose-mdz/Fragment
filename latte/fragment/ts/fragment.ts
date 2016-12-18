/**
 * Created by josemanuel on 10/11/16.
 */
module latte{

    // Inform url
    _latteUrl('/fragment/latte');


    var fragment_events = {};

    /**
     * Registers for a fragment event
     * @param name
     * @param callback
     */
    export function fragment_event_register(name: string, callback: (...any) => any){
        if(!_isArray(fragment_events[name])) {
            fragment_events[name] = [];
        }

        fragment_events[name].push(callback);
    }

    /**
     * Raises the specified fragment event
     * @param name
     * @param params
     */
    export function fragent_event_raise(name: string, params: any[] = null){
        if(_isArray(fragment_events[name])) {
            fragment_events[name].forEach((h) => {
                h.apply(this, params);
            });
        }
    }

    /**
     * Removes the specified callback from the specified method
     * @param string
     * @param callback
     */
    export function fragment_event_unregister(name: string, callback: (...any) => any){
        if(_isArray(fragment_events[name])) {
            var newEvs = [];
            fragment_events[name].forEach((h) => {
                if(callback != h) {
                    newEvs.push(h);
                }
            });
            fragment_events[name] = newEvs;
        }
    }
}