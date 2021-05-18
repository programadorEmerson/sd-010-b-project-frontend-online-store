import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Categories from '../components/Categories';
import * as api from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noProducts: false,
      products: [],
      categoryId: '',
      search: '',
    };
  }

  handleChecked = ({ target: { id } }) => {
    const { search } = this.state;
    this.setState({ categoryId: id });
    this.handleCheckedSearch(id, search);
  }

  handleInput = ({ target: { value } }) => {
    this.setState({ search: value });
  }

  // chamada com categoria e imput
  handleCheckedSearch = async (id, search) => {
    const response = await api.getProductsFromCategoryAndQuery(id, search);
    if (response) {
      if (response.results.length > 0) {
        this.setState({
          products: response.results,
          noProducts: false,
        });
      } else {
        this.setState({
          noProducts: true,
        });
      }
    }
  }

  render() {
    const { products, noProducts, categoryId, search } = this.state;
    const { onClick } = this.props;
    const noProduct = 'Nenhum produto encontrado';
    return (
      <div>
        <Header
          handleInput={ this.handleInput }
          handleClick={ () => this.handleCheckedSearch(categoryId, search) }
        />
        { noProducts ? <p>{ noProduct }</p> : <ProductList
          products={ products }
          onClick={ onClick }
        />}
        <Categories checked={ this.handleChecked } />
      </div>
    );
  }
}

Home.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Home;
