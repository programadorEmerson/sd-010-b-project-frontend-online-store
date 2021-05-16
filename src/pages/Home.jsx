import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Category, SearchBar, ListProducts } from '../components';
import { getProductsFromCategory } from '../services/api';
import '../css/Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      products: [],
    };

    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.updateListProducts = this.updateListProducts.bind(this);
  }

  async onChangeCategory({ target: { value } }) {
    const category = await getProductsFromCategory(value);
    this.setState({ category });
  }

  updateListProducts(products) {
    this.setState({ products });
  }

  render() {
    const { products, category } = this.state;
    const { categories } = this.props;
    return (
      <>
        <div className="list-category" onChange={ this.onChangeCategory }>
          {categories.map((elem) => (
            <Category key={ elem.name } category={ elem } />
          ))}
        </div>
        <SearchBar updateListProducts={ this.updateListProducts } category={ category } />
        <ListProducts products={ products } />
      </>
    );
  }
}

Home.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;
