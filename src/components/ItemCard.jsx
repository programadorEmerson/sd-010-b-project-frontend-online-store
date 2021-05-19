import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemCard extends Component {
  constructor(props) {
    super(props);
    const { product } = props;
    this.state = {
      quantity: product.quantity,
    };
  }

  // addToQuantity = () => {
  //   const { product } = this.props;
  //   const productsOnCart = JSON.parse(localStorage.getItem('products-on-cart'));
  //   const findProduct = productsOnCart.find(
  //     ({ product: { id } }) => id === product.product.id,
  //   );
  //   findProduct.quantity += 1;
  //   const oldState = productsOnCart.filter(
  //     ({ product: { id } }) => id !== product.product.id,
  //   );
  //   localStorage.setItem('products-on-cart', JSON.stringify(
  //     [...oldState, findProduct],
  //   ));
  // }

  changeQuantity = (operator) => {
    const { product } = this.props;
    const productsOnCart = JSON.parse(localStorage.getItem('products-on-cart'));
    const findProduct = productsOnCart.map(
      (prod) => {
        if (prod.product.id === product.product.id) {
          if (operator === '+') {
            prod.quantity += 1;
          } else {
            prod.quantity -= 1;
          }
        }
        return prod;
      },
    );
    localStorage.setItem('products-on-cart', JSON.stringify(findProduct));
    if (operator === '+') {
      this.setState({
        quantity: product.quantity += 1,
      });
    } else {
      this.setState({
        quantity: product.quantity -= 1,
      });
    }
  }

  render() {
    const { product } = this.props;
    const { quantity } = this.state;
    const totalPrice = product.product.price * quantity;
    return (
      <div className="item-container">
        <div className="remove-div">
          <button type="button">Remover</button>
        </div>
        <div className="info-wrap">
          <img src={ product.product.thumbnail } alt="" width="120px" />
          <p data-testid="shopping-cart-product-name">{ product.product.title }</p>
        </div>
        <div className="quantity">
          <button
            data-testid="product-decrease-quantity"
            type="button"
            onClick={ () => this.changeQuantity('-') }
            disabled={ quantity === 1 }
          >
            &#8722;
          </button>
          <span className="quant-field" data-testid="shopping-cart-product-quantity">
            { quantity }
          </span>
          <button
            data-testid="product-increase-quantity"
            type="button"
            onClick={ () => this.changeQuantity('+') }
          >
            &#43;
          </button>
        </div>
        <div className="prices">
          <p>{ `R$ ${totalPrice.toFixed(2)}` }</p>
        </div>
      </div>
    );
  }
}

ItemCard.propTypes = {
  product: PropTypes.shape({
    product: PropTypes.shape(),
    quantity: PropTypes.number,
  }).isRequired,
};
