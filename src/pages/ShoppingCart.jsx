import React, { Component } from 'react';
import getItemById from '../services/newRequest';

export default class ShoppingCart extends Component {
  constructor() {
    super();

    this.getItemDetails = this.getItemDetails.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.excludeItem = this.excludeItem.bind(this);

    if (!localStorage.getItem('id')) {
      localStorage.setItem('id', ',');
    }

    const itens = JSON.parse(localStorage.getItem('id'));
    console.log(itens);
    this.state = {
      id: itens,
      element: [],
      renderCart: false,
    };
  }

  componentDidMount() {
    const { id } = this.state;
    if (id[0] !== '') {
      const newPromise = id.map((itemId) => (this.getItemDetails(itemId)));
      console.log(newPromise);
      Promise.all(newPromise).then((value) => this.setState((previousState) => ({
        element: [...previousState.element, value],
        renderCart: true,
      })));
    }
  }

  async getItemDetails(itemId) {
    const { id } = this.state;
    if (id) {
      const response = await getItemById(itemId);
      return (response);
    }
  }

  emptyCart() {
    return (
      <div>
        <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
      </div>
    );
  }

  increaseQuantity({ target }) {
    const atualQuantity = Number(target.previousSibling.innerHTML);
    target.previousSibling.innerHTML = atualQuantity + 1;
  }

  decreaseQuantity({ target }) {
    if (Number(target.nextSibling.innerHTML) === 1) {
      return false;
    }

    const atualQuantity = Number(target.nextSibling.innerHTML);
    target.nextSibling.innerHTML = atualQuantity - 1;
  }

  excludeItem({ target }) {
    target.parentNode.innerHTML = '';
    localStorage.id = '';
  }

  renderCart() {
    const { element } = this.state;
    return element[0].map((item) => (
      <div key={ item.id }>
        <span
          data-testid="shopping-cart-product-name"
        >
          { item.title }
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
          1
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
    ));
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
