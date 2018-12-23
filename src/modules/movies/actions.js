import {GET_MOVIES_LIST, FILTER_MOVIES_LIST, GET_MOVIES_LIST_PART_2, GET_MOVIES_LIST_PART_3} from './action-types';

export const getMoviesList = () => {
    return (dispatch) => {
        return new Promise(async (resolve, reject) => {
            const response = await fetch('/API/CONTENTLISTINGPAGE-PAGE1.json');
            const data = await response.json();
            dispatch({
                type: GET_MOVIES_LIST,
                payload: data["page"]["content-items"]["content"]
            });
            resolve();
        })
    };
};

export const getMoviesListPage2 = () => {
    return (dispatch) => {
        return new Promise(async (resolve, reject) => {
            const response = await fetch('/API/CONTENTLISTINGPAGE-PAGE2.json');
            const data = await response.json();
            console.log(data["page"]["content-items"]["content"]);
            dispatch({
                type: GET_MOVIES_LIST_PART_2,
                payload: data["page"]["content-items"]["content"]
            });
            resolve();
        })
    };
};

export const getMoviesListPage3 = () => {
    return (dispatch) => {
        return new Promise(async (resolve, reject) => {
            const response = await fetch('/API/CONTENTLISTINGPAGE-PAGE3.json');
            const data = await response.json();
            console.log(data["page"]["content-items"]["content"]);
            dispatch({
                type: GET_MOVIES_LIST_PART_3,
                payload: data["page"]["content-items"]["content"]
            });
            resolve();
        })
    };
};

export const filterMoviesList = (inputString) => {
    return (dispatch, getState) => {
        const moviesList = getState().moviesData.moviesList;
        let filteredMoviesList = [];
        if (inputString) {
            filteredMoviesList = moviesList.filter((item) => {
                return item["name"].indexOf(inputString) > -1;
            });
        } else {
            filteredMoviesList = moviesList;
        }
        dispatch({
            type: FILTER_MOVIES_LIST,
            payload: filteredMoviesList
        })
    }
};