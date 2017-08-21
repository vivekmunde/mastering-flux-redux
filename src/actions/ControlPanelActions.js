import {UPDATE_USERNAME, UPDATE_FONT_SIZE_PREFERENCE} from '../actionTypes/ControlPanelActionTypes';

export const userNameUpdate = (name) => {
    return {
        type: UPDATE_USERNAME,
        data: name
    }
}

export const fontSizePreferenceUpdate = (fontSize) => {
    return {
        type: UPDATE_FONT_SIZE_PREFERENCE,
        data: fontSize
    }
}