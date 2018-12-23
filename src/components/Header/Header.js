import React, {Component} from 'react';
import {setSearchString} from '../../modules/search/actions';
import {filterMoviesList} from '../../modules/movies/actions';
import {connect} from 'react-redux';
import './header.css'

class Header extends Component {
    state = {
        inputSearch: ''
    };

    changeInputDataHandler = (event) => {
        this.setState({inputSearch: event.target.value});
        this.props.setSearchString(event.target.value);
        this.props.filterMoviesList(event.target.value);
    };

    render() {
        return (
            <header className='heading flex relative text-grey-light'>
                <span className='btn-back inline-block'/>
                <form>
                    <label className='flex justify-between'>
                        <span>
                            Romantic comedy
                        </span>
                        <input
                            className='input-search text-grey-light'
                            type="text"
                            value={this.state.inputSearch}
                            onChange={(event) => {
                                this.changeInputDataHandler(event);
                            }}
                        />
                    </label>
                </form>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searchString: state.searchData.searchString
    }
};

export default connect(mapStateToProps, {setSearchString, filterMoviesList})(Header);