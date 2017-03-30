/**
 * Created by stefan.trajkovic on 30.3.2017..
 */

// <reference path="./interfaces"/>

class AppEvent implements IAppEvent {
    public guid : string;
    public topic : string;
    public data : any;
    public handler: (e: Object, data? : any) => void;
    constructor(topic : string,
                data : any,
                handler:
                (e: any, data? : any) => void) {
                    this.topic = topic;
                    this.data = data;
                    this.handler = handler;
    }
}
export { AppEvent };