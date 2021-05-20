import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

import CategoryList from './CategoryList';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import '../App.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: [],
      search: '',
      filterCategory: false,
      nameItems: [],
    };
  }

  componentDidUpdate() {
    const { nameItems } = this.state;
    if (nameItems.length !== 0) {
      const value = JSON.parse(localStorage.getItem('cartItems'));
      const result = !value ? [] : value;
      localStorage.setItem('cartItems', JSON.stringify([...result, nameItems]));
    }
  }

  countingItemsInShoppingCart = (qtd) => (
    <span data-testid="shopping-cart-size">{qtd}</span>
  )

  getApiFromCategory = (param) => async () => {
    this.setState({
      filterCategory: await getProductsFromCategoryAndQuery(param, ''),
      filtered: false,
    });
  }

  getApiFromQuery = async () => {
    const { search } = this.state;
    this.setState({
      filtered: await getProductsFromCategoryAndQuery('', search),
      filterCategory: false,
    });
  }

  getName = (title) => () => {
    const { qtd } = this.props;
    this.setState({ nameItems: title });
    qtd();
  }

  getResult = ({ target: { value } }) => {
    this.setState({ search: value });
  }

  render() {
    const { filtered: { available_filters: resultFilter },
      filtered } = this.state;
    const { filterCategory } = this.state;
    const { qtd, state } = this.props;
    const ProductListRender = (
      <ProductList qtd={ qtd } getName={ this.getName } products={ filtered.results } />
    );
    return (
      <main>
        <SearchBar
          getResult={ this.getResult }
          getApiFromQuery={ this.getApiFromQuery }
        />
        <Link data-testid="shopping-cart-button" id="cart" to="/cart">
          Carrinho
          <span data-testid="shopping-cart-size">{ state }</span>
        </Link>
        <CategoryList onClick={ this.getApiFromCategory } />

        {filtered.length !== 0 && (
          <div id="products">
            {!resultFilter || resultFilter.length === 0
              ? 'Nenhum produto a ser encontrado'
              : ProductListRender}
          </div>)}

        {filterCategory && (
          <div id="products-category">
            <ProductList
              qtd={ qtd }
              getName={ this.getName }
              products={ filterCategory.results }
            />
          </div>)}
      </main>
    );
  }
}
Home.propTypes = {
  qtd: PropTypes.func.isRequired,
  state: PropTypes.number.isRequired,
};

export default Home;
