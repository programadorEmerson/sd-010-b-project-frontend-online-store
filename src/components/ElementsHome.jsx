import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductList from './ProductList';
import ButtonSP from './CountSP';

export default class ElementsHome extends Component {
  render() {
    const { products, handleChange, handleClick, handleClickAddCart, cart } = this.props;
    return (
      <div>
        <input
          type="text"
          data-testid="query-input"
          onChange={ handleChange }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ handleClick }
        >
          PESQUISAR
        </button>
        <ButtonSP cart={ cart } handleClickAddCart={ handleClickAddCart } />
        <ProductList
          products={ products }
          handleClickAddCart={ handleClickAddCart }
          cart={ cart }
        />
      </div>
    );
  }
}

ElementsHome.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  handleClickAddCart: PropTypes.func,
}.isRequired;
