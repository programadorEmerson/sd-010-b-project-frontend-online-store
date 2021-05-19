import React from 'react';
import PropTypes from 'prop-types';

class Cart extends React.Component {
  renderQuantity() {
    const { addCart } = this.props;
    let total = 0;
    addCart.map(({ quantity }) => {
      total += quantity;
      return total;
    });
    return total;
  }

  renderPrice() {
    const { addCart } = this.props;
    let totalPrice = 0;
    addCart.map(({ product, quantity }) => {
      totalPrice += Number(product.price) * Number(quantity);
      return totalPrice;
    });
    return totalPrice;
  }

  render() {
    const { addCart, onClick } = this.props;
    console.log(addCart, 'addCart');

    if (addCart.length === 0) {
      return <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>;
    }

    return (
      <div>
        <div>
          {addCart.map(({ product, quantity }) => (
            <div key={ product.id }>
              <h3 data-testid="shopping-cart-product-name">{ product.title }</h3>
              <img src={ product.thumbnail } alt={ product.title } />
              <p>{ product.price }</p>
              <button
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ () => onClick('decrease', product.id) }
              >
                -
              </button>
              <p data-testid="shopping-cart-product-quantity">{quantity}</p>
              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={ () => onClick('increase', product.id) }
              >
                +
              </button>
              <button type="button">X</button>
            </div>
          ))}
          <p>
            {
              this.renderQuantity()
            }
          </p>
          <p>
            Valor total:
            {
              this.renderPrice()
            }
          </p>
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  onClick: PropTypes.func.isRequired,
  addCart: PropTypes.objectOf({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default Cart;
