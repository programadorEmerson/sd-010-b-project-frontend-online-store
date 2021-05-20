import React from 'react';
import { Link } from 'react-router-dom';
import * as api2 from '../services/api2';
import CartAmount from '../components/CartAmount';
import CartButton from '../components/CartButton';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      products: api2.readCartLocalStorage(),
    };
  }

  componentDidMount() {
    this.fetchCart();
  }

  fetchCart = () => {
    // utilizando exemplo de reduce fornecido em https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    const { products } = this.state;

    if (products) {
      const quantity = products.reduce((acc, obj) => {
        const key = obj.id;
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      }, {});

      const cart = Object.values(quantity).map((item) => ({
        product: item[0],
        quantity: item.length,
      }));
      // const cartSize = cart.reduce((acc, curr) => acc + curr.quantity, 0);

      this.setState({
        cart,
        // cartSize,
      });
    }
  }

  handleQuantityChange = () => {
    // Escrever aqui a funcao para ajustar o cart de acordo com a quantidade de produtos que retornar do estado de cada componente
    // do CartAmount e setar novamente o localStorage
  }

  render() {
    const { cart, products } = this.state;
    return (
      <div>
        <Link to="/"> home </Link>
        <CartButton cartSize={ products && products.length } />

        <h1 data-testid="shopping-cart-empty-message"> Seu carrinho está vazio </h1>
        {cart && cart.map((item) => (
          <CartAmount
            key={ item.product.id }
            id={ item.product.id }
            quantity={ item.quantity }
            title={ item.product.title }
          />))}
        <Link
          data-testid="checkout-products"
          to={ {
            pathname: '/checkout',
            state: cart,
          } }
        >
          Comprar
        </Link>
      </div>
    );
  }
}

export default Cart;
