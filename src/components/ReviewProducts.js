import React from 'react';
import PropTypes from 'prop-types';

class ReviewProducts extends React.Component {
  somePrices = (itensCart) => {
    const allValues = itensCart && itensCart.map((item) => item.price * item.quanty);
    return allValues.reduce((acc, curr) => acc + curr);
  }

  render() {
    const { itensCart } = this.props;
    // const { item, quanty, price } = itensCart;
    return (
      <div>
        {itensCart.map(({ item, quanty, price }) => (
          <div key={ item }>
            <p>
              Quantidade:
              <span data-testid="shopping-cart-product-quantity">
                {` ${quanty} - `}
              </span>
              <span data-testid="shopping-cart-product-name">
                { ` ${item} - ` }
              </span>
              <span>
                Total:
                { ` ${price * quanty}` }
              </span>
            </p>
          </div>))}
        Total:
        { ` ${this.somePrices(itensCart)}` }
      </div>
    );
  }
}

ReviewProducts.propTypes = {
  itensCart: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default ReviewProducts;
