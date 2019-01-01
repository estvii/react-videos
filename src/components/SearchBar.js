import React, { Component } from 'react';

class SearchBar extends Component {
    state = { term: ''};

    onInputChange = (event) => {
        this.setState({term: event.target.value})
        // console.log(this.state.term);
    };

    onFormSubmit = (event) => {
        event.preventDefault();
      
        // TODO: Make sure we call call back form parent component
        this.props.onSubmit(this.state.term);
    };

    render() {
        return(
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.term} onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;