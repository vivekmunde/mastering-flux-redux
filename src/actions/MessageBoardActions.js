import {UPDATE_STATUS, CREATE_NEW_MESSAGE} from '../actionTypes/MessageBoardActionTypes';

export const statusUpdateAction = (value) => {
    return {
        type: UPDATE_STATUS,
        value
    }
}

export const newMessageAction = (content, postedBy) => {
    const date = new Date();

    return {
        type: CREATE_NEW_MESSAGE,
        value: content,
        postedBy,
        date
    }
}