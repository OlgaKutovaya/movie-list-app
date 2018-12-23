import React, {Component} from 'react';
import {getMoviesList, filterMoviesList} from './modules/movies/actions';
import {connect} from 'react-redux';
import './App.css';
import Header from "./components/Header/Header";
import MoviesList from "./components/MoviesList/MoviesList";


class App extends Component {
    componentDidMount() {
        this.props.getMoviesList()
            .then(() => {
                this.props.filterMoviesList();
            });
    }

    render() {
        return (
            <div className='wrapper'>
                <Header/>
                <MoviesList/>
            </div>
        );
    }
}

export default connect(null, {getMoviesList, filterMoviesList})(App);