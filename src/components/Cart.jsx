import React, { Component } from 'react';
import CartItem from './CartItem';

class Cart extends Component {
  constructor(props) {
    super(props);

    // this.emptyCart = this.emptyCart.bind(this);
    // const { children } = this.props;

    this.state = {
      cartItens: [],
      // novoCarrinho: [],
    };
  }

  componentDidMount() {
    this.addInCart();
    // const { id, title, img, price } = this.state;
    // this.getProductList(id, title, img, price);
  }

  // getProductList = (id, title, img, price) => {
  //   const { cartItens } = this.state;
  //   let productIsInList = false;
  //   cartItens.forEach((product, index) => {
  //     if (product.id === id) {
  //       productIsInList = true;
  //       const novoCarrinho = cartItens;
  //       novoCarrinho[index].quantity += 1;
  //       this.setState({ cartItens: novoCarrinho });
  //     }
  //   });
  //   if (productIsInList === false) {
  //     console.log('criei o primeiro produto no estado');
  //     this.setState((oldState) => (
  //       { cartItens:
  //        [...oldState.cartItens, { id, title, img, price, quantity: 1 }] }));
  //   }
  //   console.log(cartItens);
  // }

  addInCart() {
    const jsonKeyTemp = localStorage.getItem('keyTemp');
    const keyTemp = JSON.parse(jsonKeyTemp);
    this.setState({
      cartItens: keyTemp,
    });
  }

  // componentDidMount() {
  //   this.updateState();
  // }

  // updateState() {
  //   const savedItensID = localStorage.getItem('cartItens');
  //   this.setState({
  //     cartItensID: savedItensID,
  //   });
  // }

  emptyCart() {
    return (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
  }

  // console.log(stateAddCart);

  render() {
    const { cartItens } = this.state;

    console.log(cartItens);
    if (cartItens === null) return this.emptyCart();
    console.log(this.props);

    return (
      // <div>
      //   {cartItens.map((product) => <CartItem key={ product.id } product={ product } />)}
      // </div>
      <div>
        {cartItens.map((product) => (<CartItem
          key={ product.id }
          product={ product }
        />))}
      </div>
    );
  }
}

export default Cart;
