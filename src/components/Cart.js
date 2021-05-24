import React from 'react';
import ItemProductCart from './ItemProductCart';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      quantidade: 0,
      valorTotal: 0,
    };
    this.renderCart = this.renderCart.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.valuesOfCart = this.valuesOfCart.bind(this);
  }

  componentDidMount() {
    this.valuesOfCart();
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
    this.valuesOfCart(newArray);
  }

  valuesOfCart(parametro = []) {
    const listLocalStorage = JSON.parse(localStorage.getItem('cartState'));
    const xablau = parametro.length > 0 ? parametro : listLocalStorage;
    let quantidade = 0;
    let valorTotal = 0;
    if (xablau) {
      xablau.forEach(({ cardProps: { price, quantity } }) => {
        quantidade += quantity;
        valorTotal += (price * quantity);
      });
      this.setState({
        quantidade, valorTotal,
      });
    }
  }

  renderCart() {
    const arrayItens = JSON.parse(localStorage.getItem('cartState'));
    const { valorTotal } = this.state;
    if (!arrayItens) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }
    return (
      <>
        {
          arrayItens.map((elemento, index) => {
            console.log(elemento);
            return (<ItemProductCart
              handleChange={ this.handleChange }
              cartItem={ elemento }
              key={ index + 1 }
            />);
          })
        }
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
