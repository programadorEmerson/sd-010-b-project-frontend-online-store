import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCartFinal extends Component {
  constructor() {
    super();
    this.state = {
      itensCart: false,
    };
  }

  componentDidMount() {
    this.fillItensCart();
  }

  fillItensCart = () => {
    const value = JSON.parse(localStorage.getItem('cartItems'));
    const itensCart = !value ? false : this.countItens(value);
    this.setState({ itensCart });
  }

  countItens = (value) => {
    const onlyItens = [...new Set([...value.map((p) => p.title)])];
    return onlyItens.map((item) => ({
      item,
      quanty: value.filter(({ title }) => title === item).length,
      price: value.find(({ title }) => title === item).price,
    }));
  }

  somePrices = (itensCart) => {
    let totalPrice = 0;
    for (let i = 0; i < itensCart.length; i += 1) {
      const { quanty, price } = itensCart[i];
      totalPrice += (price * quanty);
    }
    // Pq não funciona
    // const allValues = itensCart.map((item) => item.price * item.quanty);
    // console.log(allValues);
    return totalPrice;
  }

  render() {
    const { itensCart } = this.state;
    const msg = 'Seu carrinho está vazio';
    // console.log('render');
    return (
      <main>
        <div className="reviewProducts">
          { itensCart
            ? itensCart.map(({ item, quanty, price }) => (
              <div key={ item }>
                <p>
                  Quantidade:
                  <span data-testid="shopping-cart-product-quantity">
                    {` ${quanty} - `}
                  </span>
                  <span data-testid="shopping-cart-product-name">
                    { ` ${item} - ` }
                  </span>
                  <span>
                    Total:
                    { ` ${price * quanty}` }
                  </span>
                </p>
              </div>))
            : <div data-testid="shopping-cart-empty-message">{ msg }</div>}
          Total:
          { ` ${this.somePrices(itensCart)}` }
        </div>
        <Link to="/">Home</Link>
      </main>
    );
  }
}

export default ShoppingCartFinal;
