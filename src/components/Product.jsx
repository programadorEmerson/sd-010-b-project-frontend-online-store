import React from 'react';

class Product extends React.Component {
  render() {
    const { product: { title } } = this.props;
    return (
      <section>
        <p>{ title }</p>
      </section>
    );
  }
}

export default Product;
