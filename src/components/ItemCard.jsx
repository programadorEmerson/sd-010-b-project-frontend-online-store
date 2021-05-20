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
    const { product, commaFunction } = this.props;
    const { quantity } = this.state;
    const totalPrice = product.product.price * quantity;
    // localStorage.setItem('total-price', commaFunction(totalPrice.toFixed(2).toString().replace('.', ',')));
    return (
      <div className="item-container">
        <div className="remove-div">
          {/* Deixar para depois */}
          <button type="button">Remover</button>
        </div>
        <div className="info-wrap">
          <h4>Produto</h4>
          <div className="description">
          <img src={ product.product.thumbnail } alt="" width="120px" />
          <p data-testid="shopping-cart-product-name">{ product.product.title }</p>
          </div>
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
          {/* troca o ponto para virgula nos centavos */}
          {/* https://stackoverflow.com/questions/13672106/jquery-replace-dot-to-comma-and-round-it/13672180 */}
          <p>
            { `R$ ${commaFunction(totalPrice.toFixed(2).toString().replace('.', ','))}` }
          </p>
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
  commaFunction: PropTypes.func.isRequired,
};
