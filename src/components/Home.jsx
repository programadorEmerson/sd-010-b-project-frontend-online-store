import React, { Component } from 'react';

import Categories from './Categories';
import AllProducts from './AllProducts';
import Search from './Search';

class Home extends Component {
  constructor() {
    super()
    this.filterTextFunc = this.filterTextFunc.bind(this)
    this.state = {
      filterText: ''
    }
  }

  filterTextFunc(text) {
    this.setState({
      filterText: text,
    });
  }

  render() {
    const { filterText } = this.state;
    return (
      <div class='home'>
        <div class='searchBox'>
          <Search filterTextFunc={this.filterTextFunc}/>
          <Categories />
        </div>
        <div>
          <AllProducts
            filterText={ filterText }
        />
        </div>
      </div>
    );
  }
}

export default Home;
