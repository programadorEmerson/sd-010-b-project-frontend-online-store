import React, { Component } from 'react';

export default class ShoppingCartPage extends Component {
  render() {
    const { itemShoppingCart } = this.props;
    return (
      <>
        <h1>
          Shopping Cart Page
        </h1>

        <section>
          {(itemShoppingCart.length === 0)
            ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
            : itemShoppingCart.map((item) => (
              <div key={ item.id }>
                <h6 data-testid="shopping-cart-product-name">{ item.title }</h6>
                <img src={ item.thumbnail } alt={ item.site_id } width="30px" />
                <p>{`R$ ${item.price}`}</p>
              </div>
            ))}
        </section>
      </>
    );
  }
}
