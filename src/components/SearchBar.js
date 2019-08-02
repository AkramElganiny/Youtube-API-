import React from 'react';

class SearchBar extends React.Component {
  state = {
    val: '',
  };

  onSubmitForm = event => {
    event.preventDefault ();
    // sending data to SearchBar in App.js
    this.props.onSubmit (this.state.val);
  };

  render () {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSubmitForm}>
          <div className="field">
            <label>Search For Video</label>
            <input
              type="text"
              value={this.state.val}
              onChange={e => this.setState ({val: e.target.value})}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
