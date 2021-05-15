import React, { Component } from 'react';
import getCategories from '../services/api';

class ListCategories extends Component {
  render() {
    console.log(getCategories());
    return (
      <p>teste</p>
    );
  }
}

export default ListCategories;
