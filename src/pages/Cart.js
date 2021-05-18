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
          {addCart.map(({ id, title, thumbnail, price }) => (
            <div key={ id }>
              <h3 data-testid="shopping-cart-product-name">{ title }</h3>
              <img src={ thumbnail } alt={ title } />
              <p>{ price }</p>
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
