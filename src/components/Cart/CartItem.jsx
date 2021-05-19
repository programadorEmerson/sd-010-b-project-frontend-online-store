import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  renderProductImage(source) {
    return <Image source={ source } alt="imagem do produto" width="100" />;
  }

  renderProductName(name) {
    return (
      <div
        className="product-title"
        data-testid="shopping-cart-product-name"
      >
        { name }
      </div>
    );
  }

  renderProductQuantity(quantity) {
    return (
      <div
        className="product-quantity"
        dataTestId="shopping-cart-product-quantity"
      >
        { quantity }
      </div>
    );
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
    const { cartProduct: { title, thumbnail, quantity, price } } = this.props;
    return (
      <div className="cart-item">
        {this.renderRemoveProductsIcon()}
        {this.renderProductImage(thumbnail)}
        {this.renderProductName(title)}
        <div className="config-product-quantity">
          {this.renderDecreaseQuantityIcon()}
          <div
            className="product-quantity"
            dataTestId="shopping-cart-product-quantity"
          >
            { quantity }
          </div>
          {this.renderIncreaseQuantityIcon()}
        </div>
        <div className="product-price">{ `R$ ${price * quantity}` }</div>
      </div>
    );
  }
}

CartItem.propTypes = {
  cartProduct: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
  removeProduct: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired,
};

export default CartItem;
