import React, { Component } from 'react';
import getItemById from '../services/newRequest';

export default class ShoppingCart extends Component {
  constructor() {
    super();

    this.getItemDetails = this.getItemDetails.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.excludeItem = this.excludeItem.bind(this);

    this.state = {
      id: localStorage.id,
      element: [],
      renderCart: false,
      quantity: 1,
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

  increaseQuantity() {
    this.setState((previousState) => ({
      quantity: (previousState.quantity + 1),
    }));
  }

  decreaseQuantity() {
    const { quantity } = this.state;
    if (quantity === 1) {
      return false;
    }

    this.setState((previousState) => ({
      quantity: (previousState.quantity - 1),
    }));
  }

  excludeItem({ target }) {
    target.parentNode.innerHTML = '';
    this.state.quantity = 0;
    localStorage.id = '';
  }

  renderCart() {
    const { element, quantity } = this.state;
    return (
      <div>
        <span
          data-testid="shopping-cart-product-name"
        >
          { element[0].title }
        </span>
        <button
          type="button"
          onClick={ this.decreaseQuantity }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <span
          data-testid="shopping-cart-product-quantity"
        >
          { quantity }
        </span>
        <button
          type="button"
          onClick={ this.increaseQuantity }
          data-testid="product-increase-quantity"
        >
          +
        </button>
        <button
          type="button"
          onClick={ this.excludeItem }
        >
          X
        </button>
      </div>
    );
  }

  render() {
    const { renderCart } = this.state;
    return (
      <div>
        { !renderCart ? this.emptyCart() : this.renderCart() }
      </div>
    );
  }
}
