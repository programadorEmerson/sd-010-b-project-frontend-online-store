import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
  }

  componentDidMount() {
    this.amount();
  }

  componentDidUpdate(previusValueProps) {
    if (previusValueProps !== this.props) {
      this.amount();
    }
  }

  amount = () => {
    const { cartItems } = this.props;
    const number = 0;
    if (cartItems.length >= 1) {
      this.setState({
        total: cartItems.reduce(
          (acc, value) => (acc + value.price) * value.countItems,
          number,
        ),
      });
    }
  }

  render() {
    const { cartItems, addCart, removeItemCart, removeCart } = this.props;
    const { total } = this.state;

    if (cartItems.length === 0) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          <div>
            <Link to="/">Voltar para a tela inicial</Link>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div>
          { cartItems.length }
        </div>
        <ul>
          {cartItems.map((product) => (
            <li key={ product.id }>
              <ProductCard
                addCart={ addCart }
                removeItemCart={ removeItemCart }
                removeCart={ removeCart }
                product={ product }
              />
            </li>

          ))}
        </ul>

        <p>
          Valor total:
          { total }
        </p>
        <button type="button">Finalizar compras</button>
        <div>
          <Link to="/">Voltar para a tela inicial</Link>
        </div>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartItems: PropTypes.objectOf({
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
  addCart: PropTypes.func.isRequired,
  removeItemCart: PropTypes.func.isRequired,
  removeCart: PropTypes.func.isRequired,
};

export default ShoppingCart;
