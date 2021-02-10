import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: "" };

  onInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  onFormSubmit = (event) => {
    // Prevent the default behavior of the search bar
    event.preventDefault();

    this.props.onFormSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form
          className="ui form"
          // When the user hits enter on the search bar, we call onFormSubmit to submit the text
          onSubmit={this.onFormSubmit}
        >
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.searchTerm}
              // Whenever a user types something into the search bar, call onInputChange and update the state of the text
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
