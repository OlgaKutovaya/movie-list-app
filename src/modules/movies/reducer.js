import {GET_MOVIES_LIST, FILTER_MOVIES_LIST, GET_MOVIES_LIST_PART_2, GET_MOVIES_LIST_PART_3} from './action-types';

const initialState = {
    moviesList: [],
    filteredMoviesList: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES_LIST:
            return {
                ...state,
                moviesList: action.payload
            };
        case GET_MOVIES_LIST_PART_2:
            return {
                ...state,
                moviesList: [...state.moviesList, ...action.payload]
            };
        case GET_MOVIES_LIST_PART_3:
            return {
                ...state,
                moviesList: [...state.moviesList, ...action.payload]
            };
        case FILTER_MOVIES_LIST:
            return {
                ...state,
                filteredMoviesList: action.payload
            };
        default:
            return state;
    }
}