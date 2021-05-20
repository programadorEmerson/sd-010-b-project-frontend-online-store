import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  constructor() {
    super();

    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.excludeItem = this.excludeItem.bind(this);

    const itens = JSON.parse(localStorage.getItem('id'));

    let willRender = false;
    if (itens.length > 0) {
      willRender = true;
    }

    this.state = {
      id: itens,
      renderCart: willRender,
    };
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
    const { id } = this.state;
    return id.map((item) => (
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
