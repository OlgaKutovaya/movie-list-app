import {combineReducers} from "redux";
import searchReducer from './modules/search/reducer';
import moviesReducer from './modules/movies/reducer';

export default combineReducers({
    searchData: searchReducer,
    moviesData: moviesReducer
});

