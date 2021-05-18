import React, { Component } from 'react';

export default class ProductsReview extends Component {
  render() {
    const { cart: { state: { products } } } = this.props;
    const magicNumber = 0;
    return (
      <div className="checkout-cart">
        <h3>Revise seus produtos</h3>
        {products.map((product) => (
          <div key={ product.id }>
            <img src={ product.thumbnail } alt="product" />
            <p>{product.title}</p>
            <p>{product.price * product.qtd}</p>
            <p>{product.qtd}</p>
          </div>
        ))}
        <p>
          Total:
          {products.reduce((a, b) => {
            a += (b.price * b.qtd);
            return a;
          }, magicNumber)}

        </p>
      </div>
    );
  }
}
