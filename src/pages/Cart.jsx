import React from 'react';
import { Link } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';
import * as api2 from '../services/api2';
import CartAmount from '../components/CartAmount';
import CartButton from '../components/CartButton';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      products: [],
    };
  }

  componentDidMount() {
    this.handleInitialState();
    this.fetchCart();
  }

  fetchCart = () => {
    // utilizando exemplo de reduce fornecido em https://developer.mproductsozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    const cart = api2.readCartLocalStorage();
    if (cart) {
      const quantity = cart.reduce((acc, obj) => {
        const key = obj.id;
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      }, {});

      const retornoNegativo = -1;

      const newArray = Object.values(quantity).map((item) => ({
        product: item[0],
        quantity: item.length,
      })).sort((a, b) => {
        if (a.product.title < b.product.title) return retornoNegativo;
        if (a.product.title > b.product.title) return 1;
        return 0;
      });

      const cartSize = newArray.reduce((acc, curr) => acc + curr.quantity, 0);
      // utilizando exemplo de ordenacao de objetos: https://pt.stackoverflow.com/questions/46600/como-ordenar-uma-array-de-objetos-com-array-sort
      this.setState({
        products: newArray,
        cartSize,
        cart: api2.readCartLocalStorage(),
      });
    }
  }

  handleQuantityChange = () => {
    const { products } = this.state;
    const cartSize = products.reduce((acc, curr) => acc + curr.quantity, 0);
    this.setState({
      cartSize,
    });
  }

  handleInitialState = () => {
    const cart = api2.readCartLocalStorage();
    this.setState({ cart });
  }

  render() {
    const { products, cartSize, cart } = this.state;
    return (
      <div>
        <Link to="/"><IoHome /></Link>
        <CartButton cartSize={ cartSize } />
        {(!cart)
          ? <h1 data-testid="shopping-cart-empty-message"> Seu carrinho está vazio </h1>
          : products && products.map((item) => (
            <CartAmount
              key={ item.product.id }
              className={ item.product.id }
              quantity={ item.quantity }
              title={ item.product.title }
              onChange={ this.fetchCart }
              maxQuantity={ item.product.available_quantity }
            />))}
        <Link
          data-testid="checkout-products"
          to={ {
            pathname: '/checkout',
            state: products,
          } }
        >
          Comprar
        </Link>
      </div>
    );
  }
}

export default Cart;
