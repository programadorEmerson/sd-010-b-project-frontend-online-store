import React, { Component } from 'react';
import CardButton from './CardButton';
import Categories from './Categories';
import Search from './Search';

class Home extends Component {
  render() {
    return (
      <div>
        <Search />
        <CardButton />
        <Categories />
      </div>
    );
  }
}

export default Home;
