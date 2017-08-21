export class Dispatcher {
    constructor() {
        this.__listener = [];
    }
    dispatch(action) {
        this.__listener.forEach((listerner) => {
            listerner(action);
        });
    }
    register(listerner) {
        this.__listener.push(listerner);
    }
}