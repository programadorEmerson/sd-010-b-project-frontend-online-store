import React from 'react';
import ItemProductCart from './ItemProductCart';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: JSON.parse(localStorage.getItem('cartState')),
      quantidade: 0,
      qtadeItem: 1,
      valorTotal: 0,
    };
    this.renderCart = this.renderCart.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateTotalValue = this.updateTotalValue.bind(this);
  }

  componentDidMount() {
    this.updateTotalValue(JSON.parse(localStorage.getItem('cartState')));
  }

  componentDidUpdate() {
    this.renderCart();
  }

  handleChange(numero, id) {
    const cartItems1 = JSON.parse(localStorage.getItem('cartState'));

    const newArray = cartItems1.map((item) => {
      if (item.cardProps.id === id) {
        item.cardProps.quantity = numero;
        return item;
      }
      return item;
    });
    localStorage.setItem('cartState', JSON.stringify(newArray));

    this.updateTotalValue(newArray);
  }

  updateTotalValue(arg) {
    const { quantidade, valorTotal } = this.state;
    console.log(arg);
    if (arg) {
      arg.forEach((element) => {
        this.setState({
          quantidade: quantidade + element.cardProps.quantity,
          valorTotal: valorTotal + element.cardProps.price,
        });
      });
    }
  }

  renderCart() {
    const { cartItems, valorTotal } = this.state;
    if (!cartItems) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }
    return (
      <>
        {cartItems.map((cartItem, index) => (
          <ItemProductCart handleChange={ this.handleChange } cartItem={ cartItem } key={ index + 1 } />
        ))}
        <p>
          { `Valor Total R$: ${valorTotal}` }
        </p>
      </>
    );
  }

  render() {
    const { quantidade } = this.state;
    return (
      <div>
        <h1>Carrinho de Compras</h1>
        <p data-testid="shopping-cart-product-quantity">{ quantidade }</p>
        {this.renderCart()}
      </div>
    );
  }
}

export default Cart;
