import React from 'react';

class ProductCard extends React.Component {
  render() {
    const { product: { title } } = this.props;
    return (
      <section data-testid="product">
        <p>{ title }</p>
      </section>
    );
  }
}

export default ProductCard;
