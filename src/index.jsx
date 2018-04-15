import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import SearchBar from './components/search_bar';
import LinkList from './components/link_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      links: [],
    };

    this.setThreshold(500);
  }

  setThreshold(term) {
    axios.get("https://reddit.com/r/GameDeals/hot.json")
      .then((result) => {
        console.log(result);
      });
  }

  render() {
    const setThreshold = _.debounce((threshold) => { this.setThreshold(threshold); }, 300);
    return (
      <div>
        <SearchBar onSearchThresholdChange={setThreshold} />
        <LinkList links={this.state.links} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
