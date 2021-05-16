import React, { Component } from 'react';
import Image from './Image';
import cancelIcon from '../images/cancel-icon.png';
import minusIcon from '../images/minus-icon.png';
import plusIcon from '../images/plus-icon.png';

class CartItem extends Component {
  renderRemoveProductsIcon() {
    return <Image source={ cancelIcon } alt="remover produto" width="50" />;
  }

  renderImageProduct(source) {
    return <Image source={ source } alt="imagem do produto" width="100" />;
  }

  renderDecreaseQuantityIcon() {
    return <Image source={ minusIcon } alt="diminuir quantidade" width="50" />;
  }

  renderIncreaseQuantityIcon() {
    return <Image source={ plusIcon } alt="aumentar quantidade" width="50" />;
  }

  render() {
    const { cartProduct: { name, source, quantity, price } } = this.props;
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
        <div className="product-price">{ price }</div>
      </div>
    );
  }
}
export default CartItem;
