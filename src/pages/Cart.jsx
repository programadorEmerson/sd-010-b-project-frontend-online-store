import React from 'react';
import { Link } from 'react-router-dom';
import * as api2 from '../services/api2';

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
      const quantidadeProdutos = products.reduce((acc, obj) => {
        const key = obj.id;
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      }, {});
      this.setState({ cart: Object.values(quantidadeProdutos) });
    }
  }

  render() {
    const { cart } = this.state;
    return (
      <div>
        <Link to="/"> home </Link>
        <h1 data-testid="shopping-cart-empty-message"> Seu carrinho está vazio </h1>
        {cart && cart.map((item) => (
          <div key={ item[0].id }>
            <h3 data-testid="shopping-cart-product-name">{item[0].title}</h3>
            <p data-testid="shopping-cart-product-quantity">{(item.length).toString()}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Cart;
