import React, { Component } from 'react';
import Search from '../components/Search';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from '../components/ProductCard';

export default class Home extends Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      search: '',
      results: [],
      showCard: false,
    };
  }

  handleInput({ target }) {
    const { value } = target;
    this.setState({
      search: value,
    });
  }

  async handleSearch() {
    const { search } = this.state;
    const { results } = await getProductsFromCategoryAndQuery('', search);
    this.setState({
      results,
      showCard: true,
    });
  }

  render() {
    const { results, showCard } = this.state;
    return (
      <div>
        <Search onChange={ this.handleInput } onClick={ this.handleSearch } />
        { (showCard && <ProductCard results={ results } />) }
      </div>
    );
  }
}
