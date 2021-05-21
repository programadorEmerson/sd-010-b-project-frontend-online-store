import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  constructor() {
    super();

    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.excludeItem = this.excludeItem.bind(this);

    let itens = JSON.parse(localStorage.getItem('id'));
    let willRender = false;

    if (itens === null) {
      localStorage.setItem('id', JSON.stringify([]));
      itens = JSON.parse(localStorage.getItem('id'));
    } else if (itens.length > 0) {
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

  test({ target }) {
    console.log(target.value);
  }

  increaseQuantity({ target }, avaliableItens) {
    const atualQuantity = Number(target.previousSibling.innerHTML);
    // esse if satisfaz o requisito 14
    if (atualQuantity >= avaliableItens) {
      return false;
    }
    target.previousSibling.innerHTML = atualQuantity + 1;
  }

  decreaseQuantity({ target }) {
    if (Number(target.nextSibling.innerHTML) === 1) {
      return false;
    }
    const atualQuantity = Number(target.nextSibling.innerHTML);
    target.nextSibling.innerHTML = atualQuantity - 1;
  }

  excludeItem({ target }, id) {
    // o requisito é o 13, mas dei uma melhorada na exclusao do item
    target.parentNode.innerHTML = '';
    const itens = JSON.parse(localStorage.getItem('id'));
    const filteredItens = itens.filter((item) => item.id !== id);
    localStorage.setItem('id', JSON.stringify(filteredItens));
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
          onChange={ this.test }
        >
          1
        </span>
        <button
          type="button"
          onClick={ (event) => this.increaseQuantity(event, item.available_quantity) }
          data-testid="product-increase-quantity"
        >
          +
        </button>
        <button
          type="button"
          onClick={ (event) => this.excludeItem(event, item.id) }
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
