import React, { Component } from 'react';

import Categories from './Categories';
import AllProducts from './AllProducts';
import Search from './Search';
import Category from './Category';

class Home extends Component {
  constructor() {
    super()
    this.filterTextFunc = this.filterTextFunc.bind(this)
    this.state = {
      filterText: '',
      categoryId: '',
    }
  }

  filterTextFunc(text) {
    this.setState({
      filterText: text,
    });
  }

  render() {
    const { filterText, categoryId } = this.state;
    return (
      <div className='home'>
        <div className='searchBox'>
          <Search filterTextFunc={this.filterTextFunc}/>
          <Categories />
        </div>
        <div>
          <AllProducts
            filterText={ filterText, categoryId }
        />
        </div>
      </div>
    );
  }
}

export default Home;
