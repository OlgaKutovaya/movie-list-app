import {SET_SEARCH_STRING} from "./action-types";

export const setSearchString = (inputString) => {
    return {
        type: SET_SEARCH_STRING,
        payload: inputString
    }
};