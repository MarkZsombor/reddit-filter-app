import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { threshold: '' };
  }

  onInputChange(threshold) {
    this.setState({ threshold });
    this.props.onSearchThresholdChange(threshold);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          placeholder="ranking threshold"
          value={this.state.threshold}
          type="text"
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
