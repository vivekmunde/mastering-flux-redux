import {createStore, combineReducers} from 'redux';
import {userStatusReducer,messagesReducer} from '../reducers/MessageBoardReducers';

const combinedReducer = combineReducers({
    userStatus: userStatusReducer,
    messages: messagesReducer
});

const store = createStore(combinedReducer);

export default store;