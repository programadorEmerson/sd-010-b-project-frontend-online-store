import React, { Component } from 'react';
import getItemById from '../services/newRequest';

export default class ShoppingCart extends Component {
  constructor() {
    super();

    this.getItemDetails = this.getItemDetails.bind(this);

    this.state = {
      id: localStorage.id,
      element: [],
      renderCart: false,
    };
  }

  componentDidMount() {
    const { id } = this.state;
    this.getItemDetails(id);
  }

  async getItemDetails(itemId) {
    const { id, element } = this.state;
    if (id) {
      const response = await getItemById(itemId);
      this.setState({
        element: [...element, response],
        renderCart: true,
      });
    }
  }

  emptyCart() {
    return (
      <div>
        <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
      </div>
    );
  }

  renderCart() {
    const { element } = this.state;
    return (
      <div>
        <span
          data-testid="shopping-cart-product-name"
        >
          { element[0].title }
        </span>
        <p
          data-testid="shopping-cart-product-quantity"
        >
          { element.length }
        </p>
      </div>
    );
  }

  render() {
    const { renderCart } = this.state;
    return (
      <div>
        { renderCart === false ? this.emptyCart() : this.renderCart() }
      </div>
    );
  }
}
