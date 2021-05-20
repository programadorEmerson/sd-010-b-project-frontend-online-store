import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Image from '../Cart/Image';

class CartItemCheckout extends Component {
  renderProductImage() {
    const { cartProduct: { thumbnail } } = this.props;
    // return <Image source={ thumbnail } alt="imagem do produto" width="100" />;
    return (
      <figure>
        <img src={ thumbnail } alt="..." width="50" />
      </figure>
    );
  }

  renderProductName() {
    const { cartProduct: { title } } = this.props;
    return (
      <div
        className=""
        data-testid="shopping-cart-product-name"
      >
        { title }
      </div>
    );
  }

  renderProductTotalPrice() {
    const { cartProduct: { price, quantity } } = this.props;
    return <div className="">{ `R$ ${price * quantity}` }</div>;
  }

  render() {
    return (
      <div>
        {this.renderProductImage()}
        {this.renderProductName()}
        {this.renderProductTotalPrice()}
      </div>
    );
  }
}

CartItemCheckout.propTypes = {
  cartProduct: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
};

export default CartItemCheckout;
