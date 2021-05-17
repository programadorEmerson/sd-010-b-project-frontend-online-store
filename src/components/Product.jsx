import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    const { product: { title } } = this.props;
    return (
      <section>
        <ul>
          <li datatestid="product">{ title }</li>
        </ul>
      </section>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Product;
