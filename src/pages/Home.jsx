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
    this.handleProducts(id);
    this.setState({ categoryId: id });
  }

  handleInput = ({ target: { value } }) => {
    this.setState({ search: value });
  }

  handleProducts = async (id) => {
    const { search } = this.state;
    const filterProducts = await api.getProductsFromCategoryAndQuery(id, search);
    if (filterProducts) {
      if (filterProducts.results.length > 0) {
        this.setState({
          products: filterProducts.results,
          noProducts: false,
        });
      } else {
        this.setState({
          noProducts: true,
        });
      }
    }
  }

  handleClick = async () => {
    const { categoryId, search } = this.state;
    const responseProduct = await api.getProductsFromCategoryAndQuery(categoryId, search);
    //  console.log(this.state.productsId);
    if (responseProduct) {
      if (responseProduct.results.length > 0) {
        this.setState({
          products: responseProduct.results,
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
    const { products, noProducts } = this.state;
    const { onClick } = this.props;
    const noProduct = 'Nenhum produto encontrado';
    return (
      <div>
        <Header handleInput={ this.handleInput } handleClick={ this.handleClick } />
        { noProducts ? <p>{ noProduct }</p> :
        <ProductList products={ products }
         onClick={onClick}/> }
        <Categories checked={ this.handleChecked } />
      </div>
    );
  }
}

Home.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Home;
