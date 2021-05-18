import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';

class ShoppingCart extends Component {
  render() {
    const { addCart } = this.props;

    if (addCart.length === 0) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }

    return (
      <div>
        <ul>
          {addCart.map((product) => (
            <li key={ product.id }>
              <ProductCard product={ product } />
            </li>
          ))}
          <p data-testid="shopping-cart-product-quantity">
            Quantidade de itens no carrinho
            {addCart.length}
            {' '}
            itens
          </p>
        </ul>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  addCart: PropTypes.objectOf({
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default ShoppingCart;
