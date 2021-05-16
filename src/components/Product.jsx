import React from 'react';

class Product extends React.Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;
    return (
      <section className="products-section">
        <div data-testid="product" className="product-box">
          <div className="product-name">
            <p>{title}</p>
          </div>
          <img className="product-img" src={ thumbnail } alt={ title } width="200px" height="200px" />
          <div className="product-price">
            R$
            { price }
          </div>
        </div>
      </section>
    );
  }
}

export default Product;
