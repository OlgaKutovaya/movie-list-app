import {SET_SEARCH_STRING} from "./action-types";

const initialState = {
    searchString: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_STRING:
            return {
                ...state,
                searchString: action.payload
            };
        default:
            return state;
    }
}