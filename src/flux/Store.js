export class Store {
    constructor(dispatcher) {
        this.__listeners = [];
        this.__state = this.getInitialState();
        dispatcher.register(this.__onDispatch.bind(this));
    }
    __onDispatch() {
        throw new Error('__onDispatch() not implemented!');
    }
    getInitialState() {
        throw new Error('getInitialState() not implemented!');
    }
    addListener(listener) {
        this.__listeners.push(listener);
    }
    __emitChange() {
        this.__listeners.forEach(listener => listener(this.__state));
    }
}