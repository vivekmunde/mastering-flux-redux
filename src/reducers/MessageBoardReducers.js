import {UPDATE_STATUS, CREATE_NEW_MESSAGE} from '../actionTypes/MessageBoardActionTypes';
import DefaultState from '../reduxStore/DefaultState';

export const userStatusReducer = (state = DefaultState.userStatus, {type, value}) => {
    switch (type) {
        case UPDATE_STATUS:
            return value;
    }
    return state;
}

export const messagesReducer = (state = DefaultState.messages, {type, value, postedBy, date}) => {
    switch (type) {
        case CREATE_NEW_MESSAGE:
            const newState = [{date: date, postedBy, content: value}, ...state];
            return newState;
    }
    return state;
}
