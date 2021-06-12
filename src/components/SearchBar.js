import React, { Component } from 'react';


class SearchBar extends Component {
  state = {term: ''};

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search">Video Search:</label>
            <input id="search" type="text" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
