import {Store} from '../flux';
import {ControlPanelDispatcher} from '../dispatchers';
import {UPDATE_USERNAME, UPDATE_FONT_SIZE_PREFERENCE} from '../actionTypes/ControlPanelActionTypes';

class _controlPanelStore extends Store {
    getInitialState() {
        return {
            userName: 'Vivek',
            fontSize: 'small'
        };
    }
    __onDispatch(action) {
        console.log('Store received dispatch', action);
        switch (action.type) {
            case UPDATE_USERNAME:
                this.__state.userName = action.data;
                this.__emitChange();
                break;
            case UPDATE_FONT_SIZE_PREFERENCE:
                this.__state.fontSize = action.data;
                this.__emitChange();
                break;
        }
    }
    getUserPreferences() {
        return this.__state;
    }
};

export default new _controlPanelStore(ControlPanelDispatcher);