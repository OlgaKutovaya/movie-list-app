import React, {Component} from 'react';
import {connect} from 'react-redux';
import {filterMoviesList, getMoviesListPage2, getMoviesListPage3} from '../../modules/movies/actions';
import './movie-list.css';

class MoviesList extends Component {
    state = {
        isFetchingData: false,
        isDownloadedPage2: false,
        isDownloadedPage3: false
    };

    componentDidMount() {
        this.moviesListElem = document.querySelectorAll(".movie-list-wrapper")[0];
        this.moviesListElem.addEventListener('scroll', () => {
            this.handleScroll(this.moviesListElem)
        });
    }

    componentWillUnmount() {
        this.moviesListElem.removeEventListener('scroll', () => {
            this.handleScroll(this.moviesListElem)
        });
    }

    handleScroll = (elem) => {
        let scrollTop = elem.scrollTop;
        // console.log('Scroll from top: ', scrollTop);
        this.moviesListInnerElem = document.querySelectorAll(".movies-list-inner")[0];
        // console.log('moviesListInnerElem scrollHeight: ', this.moviesListInnerElem.scrollHeight);
        let scrollDiff = this.moviesListInnerElem.scrollHeight - scrollTop;
        if (this.state.isFetchingData === false) {
            if (scrollDiff < 600 && !this.state.isDownloadedPage2) {
                console.log('Надо грузить 2 часть...');
                this.setState({
                    isFetchingData: true,
                    isDownloadedPage2: true,
                }, () => {
                    this.props.getMoviesListPage2()
                        .then(() => {
                            this.props.filterMoviesList();
                            console.log('State after part 2: ', JSON.stringify(this.props.filteredMoviesList));
                            this.setState({
                                isFetchingData: false
                            });
                        })
                })
            } else if (scrollDiff < 600 && this.state.isDownloadedPage2 && !this.state.isDownloadedPage3) {
                console.log('Надо грузить 3 часть...');
                this.setState({
                    isFetchingData: true,
                    isDownloadedPage3: true,
                }, () => {
                    this.props.getMoviesListPage3()
                        .then(() => {
                            this.props.filterMoviesList();
                            console.log('State after part 3: ', JSON.stringify(this.props.filteredMoviesList));
                            this.setState({
                                isFetchingData: false
                            });
                        })
                })
            }
        }
    };

    render() {
        return (
            <div className='movie-list-wrapper overflow-y-scroll'>
                <div className="movies-list ">
                    <div className="movies-list-inner flex justify-around flex-wrap">
                        {this.props.filteredMoviesList.map((item, index) => {
                            return (
                                <div key={index} className='movie-post-wrapper'>
                                    <img src={"/images/" + item["poster-image"]}
                                         className='movie-poster' alt=''/>
                                    <p className='text-grey'>{item["name"]}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filteredMoviesList: state.moviesData.filteredMoviesList
    }
};

export default connect(mapStateToProps, {filterMoviesList, getMoviesListPage2, getMoviesListPage3})(MoviesList);