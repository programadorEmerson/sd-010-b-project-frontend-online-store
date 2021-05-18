import React, { Component } from 'react';
import Image from './Image';
import CustomButton from './CustomButton';

class CartItem extends Component {
  getCartItemId = () => {
    const { cartProduct: { id } } = this.props;
    return id;
  }

  renderRemoveProductsIcon() {
    return (
      <CustomButton customStyle="remove" clickFunction="" dataTestId="">X</CustomButton>
    );
  }

  renderImageProduct(source) {
    return <Image source={ source } alt="imagem do produto" width="100" />;
  }

  renderDecreaseQuantityIcon() {
    return (
      <CustomButton
        customStyle="decrease"
        clickFunction={ this.decreaseQuantity }
        dataTestId="product-decrease-quantity"
      >
        -
      </CustomButton>);
  }

  renderIncreaseQuantityIcon() {
    return (
      <CustomButton
        customStyle="increase"
        clickFunction={ this.increaseQuantity }
        dataTestId="product-increase-quantity"
      >
        +
      </CustomButton>
    );
  }

  render() {
    const { name, source, quantity, totalPrice } = this.state;
    return (
      <div className="cart-item">
        {this.renderRemoveProductsIcon()}
        {this.renderImageProduct(source)}
        <div>{ name }</div>
        <div className="config-product-quantity">
          {this.renderDecreaseQuantityIcon()}
          <div className="product-quantity">{ quantity }</div>
          {this.renderIncreaseQuantityIcon()}
        </div>
        <div className="product-price">{ totalPrice }</div>
      </div>
    );
  }
}
export default CartItem;
