import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as api2 from '../services/api2';
import CartAmount from '../components/CartAmount';
import Evaluation from '../components/Evaluation';
import CartButton from '../components/CartButton';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
      cart: api2.readCartLocalStorage(),
      quantity: 0,
    };
  }

  componentDidMount() {
    this.fetchProduct();
    // this.fetchCart();
    this.setQuantityState();
  }

  componentDidUpdate() {
    const { cart } = this.state;
    api2.saveCartLocalStorage(cart);
  }

  // fetchCart = () => {
  //   const cart = api2.readCartLocalStorage();
  //   if (cart) this.setState({ cart });
  // }

  handleAddClick = ({ target: { id } }) => {
    const { cart } = this.state;
    if (cart) {
      const product = cart.find((item) => item.id === id);
      this.setState({ cart: [...cart, product] });
    }
    this.handleProductQuantity();
    api2.addToLocalStorage(id);
  }

  handleElementRemoval = () => {
    document.querySelector('#shipping-element').remove();
  }

  handleProductQuantity = () => {
    const { cart, product } = this.state;
    const productsFiltered = cart.filter((item) => item.id === product.id);
    this.setState({ quantity: productsFiltered.length, cart: [...cart, product] });
  }

  setQuantityState = () => {
    const { cart, product } = this.state;
    const productQuantity = cart.filter((item) => item.id === product.id);
    this.setState({ quantity: productQuantity.length });
  }

  fetchProduct = async () => {
    const cart = api2.readCartLocalStorage();
    const { match: { params: { id } } } = this.props;
    const product = await api2.getProductsFromId(id);
    if (cart) {
      const productQuantity = cart.filter((item) => item.id === product.id);
      this.setState({ cart, product, quantity: productQuantity.length });
    }
  }

  render() {
    const { product, cart, quantity } = this.state;
    return (
      <div>
        <CartButton cartSize={ cart.length } />

        <h1 data-testid="product-detail-name">{ product.title }</h1>
        <img src={ product.thumbnail } alt={ product.title } />
        <h2>{product.price}</h2>
        <ul>
          {product.attributes && product.attributes.map((attribute, index) => {
            if (attribute.value_name) {
              return (
                <li key={ index }>
                  {`${attribute.name}:${attribute.value_name}`}
                </li>
              );
            }
            return <div key={ index } />;
          })}
        </ul>
        <CartAmount
          key={ product.id }
          id={ product.id }
          quantity={ quantity }
          title={ product.title }
          onChange={ this.handleProductQuantity }
          maxQuantity={ product.available_quantity }
        />
        <div className="free-shipping-container">
          {(product.shipping && product.shipping.free_shipping)
            ? <p data-testid="free-shipping" id="shipping-element">Frete Gratis</p>
            : this.handleElementRemoval}
        </div>
        <button
          id={ product.id }
          type="button"
          onClick={ this.handleAddClick }
          data-testid="product-detail-add-to-cart"
        >
          add
        </button>
        <Evaluation />
      </div>
    );
  }
}
ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
