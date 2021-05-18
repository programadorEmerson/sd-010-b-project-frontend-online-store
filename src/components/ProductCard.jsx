import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const {
      product: { title, price, thumbnail },
    } = this.props;

    return (
      <div>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <img src={ thumbnail } alt={ title } />
        <p>
          R$
          { price }
        </p>
        {/* { shipping.free_shipping ? <p>Frete Grátis</p> : <p>Falso</p>} */}
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
