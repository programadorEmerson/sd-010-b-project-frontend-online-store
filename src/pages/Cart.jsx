import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/Cart/CartItem';
import '../css/Cart/Cart.css';

const fakeCartItems = [
  {
    id: '01',
    name: 'Produto 1',
    source: '',
    quantity: 1,
    price: 4000,
  },
  {
    id: '02',
    name: 'Produto 2',
    source: '',
    quantity: 1,
    price: 2000,
  },
  {
    id: '04',
    name: 'Produto 4',
    source: '',
    quantity: 1,
    price: 5500,
  },
  {
    id: '03',
    name: 'Produto 3',
    source: '',
    quantity: 1,
    price: 5250,
  },
];
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: fakeCartItems,
    };
  }

  cloneProducts = () => {
    const { products } = this.state;
    return products.slice(0);
  }

  removeProduct = (id) => {
    const productsCopy = this.cloneProducts();
    const indexProductFound = productsCopy.findIndex((product) => product.id === id);
    productsCopy.splice(indexProductFound, 1);
    this.setState({ products: productsCopy });
  };

  updateQuantity = (operation, id) => {
    const productsCopy = this.cloneProducts();
    const indexProductFound = productsCopy.findIndex((product) => product.id === id);
    let prodQuantity = productsCopy[indexProductFound].quantity;
    if (operation === 'sum') {
      prodQuantity += 1;
    }
    if (operation === 'subtract') {
      prodQuantity = (prodQuantity > 1) ? prodQuantity - 1 : 0;
    }
    productsCopy[indexProductFound].quantity = prodQuantity;
    this.setState({ products: productsCopy });
  };

  updateTotalPurchase = () => {
    const { products } = this.state;
    return products.reduce((acc, { quantity, price }) => {
      let totalPurchase = acc;
      totalPurchase += quantity * price;
      return totalPurchase;
    }, 0);
  }

  render() {
    const { products } = this.state;
    return (
      <>
        <Link to="/">Voltar</Link>
        <header>Carrinho de compras</header>
        <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
        <div className="cart-item-container">
          { products.map((product) => (
            <CartItem
              key={ product.id }
              cartProduct={ product }
              removeProduct={ this.removeProduct }
              updateQuantity={ this.updateQuantity }
            />)) }
        </div>
        <p>
          Valor total da compra: R$
          { this.updateTotalPurchase() }
        </p>
        <button type="button">Finalizar compra</button>
      </>
    );
  }
}
export default Cart;
