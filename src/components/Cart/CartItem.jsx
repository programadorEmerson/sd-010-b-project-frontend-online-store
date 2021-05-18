import React, { Component } from 'react';
import Image from './Image';
import CustomButton from './CustomButton';

class CartItem extends Component {
  getCartItemId = () => {
    const { cartProduct: { id } } = this.props;
    return id;
  }

  renderRemoveProductsIcon() {
    const { removeProduct } = this.props;
    const id = this.getCartItemId();
    return (
      <CustomButton
        customStyle="remove"
        clickFunction={ () => removeProduct(id) }
        dataTestId=""
      >
        X
      </CustomButton>
    );
  }

  renderImageProduct(source) {
    return <Image source={ source } alt="imagem do produto" width="100" />;
  }

  renderDecreaseQuantityIcon() {
    const { updateQuantity } = this.props;
    const id = this.getCartItemId();
    return (
      <CustomButton
        customStyle="decrease"
        clickFunction={ () => updateQuantity('subtract', id) }
        dataTestId="product-decrease-quantity"
      >
        -
      </CustomButton>);
  }

  renderIncreaseQuantityIcon() {
    const { updateQuantity } = this.props;
    const id = this.getCartItemId();
    return (
      <CustomButton
        customStyle="increase"
        clickFunction={ () => updateQuantity('sum', id) }
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
