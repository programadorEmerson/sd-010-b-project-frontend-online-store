import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Category, SearchBar, ListProducts } from '../components';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import '../css/Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      listCategories: [],
      products: [],
    };

    this.updateCategories = this.updateCategories.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.updateListProducts = this.updateListProducts.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.updateCategories();
  }

  async handleSubmit(inputSearch = '') {
    const { category } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(category, inputSearch);
    this.updateListProducts(results);
  }

  onChangeCategory({ target: { value } }) {
    this.setState({ category: value }, () => {
      this.handleSubmit();
    });
  }

  async updateCategories() {
    const listCategories = await getCategories();
    this.setState({ listCategories });
  }

  updateListProducts(products) {
    this.setState({ products });
  }

  render() {
    const { products, listCategories } = this.state;
    const { setCart } = this.props;
    return (
      <>
        <div className="list-category" onChange={ this.onChangeCategory }>
          {listCategories.map((elem) => (
            <Category key={ elem.name } category={ elem } />
          ))}
        </div>
        <SearchBar handleSubmit={ this.handleSubmit } />
        <ListProducts setCart={ setCart } products={ products } />
      </>
    );
  }
}

Home.propTypes = {
  setCart: PropTypes.func.isRequired,
};

export default Home;
