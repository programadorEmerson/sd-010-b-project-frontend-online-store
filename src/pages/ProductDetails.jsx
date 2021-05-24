import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';
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
    this.fetchCart();
    this.fetchProduct();
    this.handleQuantityState();
  }

  componentDidUpdate() {
    const { cart } = this.state;
    api2.saveCartLocalStorage(cart);
  }

  fetchCart = () => {
    const cart = api2.readCartLocalStorage();
    this.setState({ cart });
  }

  handleAddClick = () => {
    const { cart, product } = this.state;
    const { match: { params: { id } } } = this.props;
    this.setState((previousState) => ({
      quantity: previousState.quantity + 1,
      cart: [...cart, product],
    }));
    api2.addToLocalStorage(id);
  }

  handleElementRemoval = () => {
    document.querySelector('#shipping-element').remove();
  }

  handleQuantityState = () => {
    const { match: { params: { id } } } = this.props;
    const cart = api2.readCartLocalStorage();
    let find;
    let filter;
    if (cart) {
      find = cart.find((item) => item.id === id);
    }
    if (find) {
      filter = cart.filter((item) => item.id === id);
      if (filter) this.setState({ quantity: filter.length });
    }
  }

  handleProductQuantity = () => {
    const { match: { params: { id } } } = this.props;
    const cart = api2.readCartLocalStorage();
    const { product } = this.state;
    let find;
    let filter;
    if (cart) {
      find = cart.find((item) => item.id === id);
    }
    if (find) {
      filter = cart.filter((item) => item.id === id);
      if (filter) this.setState({ quantity: filter.length, cart: [...cart, product] });
    }
    if (!filter) this.handleAddClick();
  }

  // setQuantityState = () => {
  //   const { cart, product } = this.state;
  //   const productQuantity = cart.filter((item) => item.id === product.id);
  //   this.setState({ quantity: productQuantity.length });
  // }

  fetchProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await api2.getProductsFromId(id);
    this.setState({ product });
  }

  // hancleDecreaseBtn = () => {
  //   const { match: { params: { id } } } = this.props;
  //   this.setState((previousState) => ({
  //     quantity: previousState.quantity - 1,
  //   }));
  //   api2.removeFromLocalStorage(id);
  // }

  render() {
    const { match: { params: { id } } } = this.props;
    const { product, cart, quantity } = this.state;
    return (
      <div>
        <Link to="/"><IoHome /></Link>
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
          key={ id }
          id={ id }
          quantity={ quantity }
          title={ product.title }
          onChange={ this.handleProductQuantity }
          // onDecreaseChange={ this.hancleDecreaseBtn }
          maxQuantity={ product.available_quantity }
        />
        <div className="free-shipping-container">
          {(product.shipping && product.shipping.free_shipping)
            ? <p data-testid="free-shipping" id="shipping-element">Frete Gratis</p>
            : this.handleElementRemoval}
        </div>
        <button
          className={ product.id }
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
