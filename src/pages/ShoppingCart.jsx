import React, { Component } from 'react';
import getItemById from '../services/newRequest';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: localStorage.id,
      element: [],
      renderCart: true,
    };
  }

  async componentDidMount() {
    const { id, element } = this.state;
    if (id !== undefined) {
      const response = await getItemById(id);
      /* this.setState({
        renderCart: true,
        element: [...element, response],
      }); */
    }
  }

  emptyCart() {
    return (
      <div>
        <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
      </div>
    );
  }

  async renderCart() {
    const { id } = this.state;
    const response = await getItemById(id);
    const { title } = response;
    console.log(title);
    return (
      <div>
        <span
          data-testid="shopping-cart-product-name"
        >
          { title }
        </span>
        <p
          data-testid="shopping-cart-product-quantity"
        >
          { response.length }
        </p>
      </div>
    );
  }

  render() {
    const { renderCart } = this.state;
    return (
      <div>
        { renderCart ? this.renderCart() : this.emptyCart() }
      </div>
    );
  }
}
