import React from 'react';
import './ShoppingCartCard.css';


class ShoppingCartCard extends React.Component {
  render() {
    const { productCart } = this.props;
    const { title, price, thumbnail } = productCart;

    return (
      <main className="shopping-cart-card">
        <section className="shopping-cart-card-item button">
          <button type="submit" className="card-button">X</button>
        </section>
        <section className="shopping-cart-card-item image">
          <img src={ thumbnail } alt={ title } />
        </section>
        <section
          className="shopping-cart-card-item title"
          data-testid="shopping-cart-product-name"
        >
          { title }
        </section>
        <section className="shopping-cart-card-item button">
          <button
            data-testid="product-decreate-quantity"
            className="card-button" type="submit"
          >-</button>
        </section>
        <section className="shopping-cart-card-item input"><input type="text"/></section>
        <section className="shopping-cart-card-item button">
          <button
            data-testid="product-increase-quantity"
            className="card-button" type="submit"
          >+</button>
        </section>
        <section className="shopping-cart-card-item price">{ price }</section>
      </main>
    );
  }
}

export default ShoppingCartCard;
