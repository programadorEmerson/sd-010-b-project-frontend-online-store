import React from 'react';
import PropTypes from 'prop-types';

class Cart extends React.Component {
  render() {
    const { addCart } = this.props;

    if (addCart.length === 0) {
      return <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>;
    }

    return (
      <div>
        <div>
          {addCart.map((product) => (
            <div key={ product.id }>
              <h3 data-testid="shopping-cart-product-name">{ product.title }</h3>
              <img src={ product.thumbnail } alt={ product.title } />
              <p>{ product.price }</p>
            </div>
          ))}
          <p
            data-testid="shopping-cart-product-quantity"
          >
            Quantidade de produtos:
            {addCart.length}
          </p>
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  addCart: PropTypes.objectOf({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default Cart;
