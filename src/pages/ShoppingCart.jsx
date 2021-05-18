import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  render() {
    const { addCart } = this.props;

    if (addCart.length === 0) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }

    return (
      <div>
        <ul>
          {addCart.map(({ id, title, thumbnail, price }) => (
            <li key={ id }>
              <h4 data-testid="shopping-cart-product-name">{ title }</h4>
              <img src={ thumbnail } alt={ title } />
              <p>
                R$
                { price }
              </p>
            </li>
          ))}
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
