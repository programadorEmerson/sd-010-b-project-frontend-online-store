import React from 'react';
import PropTypes from 'prop-types';

class CartCard extends React.Component {
  render() {
    const {
      id,
      title,
      imgUrl,
      price,
      quantity,
      handleIncrease,
      handleDecrease,
    } = this.props;
    return (
      <section>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <img src={ imgUrl } alt={ title } width="150px" />
        <p>{price}</p>
        <span data-testid="shopping-cart-product-quantity">
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ () => handleDecrease(id) }
          >
            -
          </button>
          { quantity }
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ () => handleIncrease(id) }
          >
            +
          </button>
        </span>
      </section>
    );
  }
}

CartCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  handleIncrease: PropTypes.func.isRequired,
  handleDecrease: PropTypes.func.isRequired,
};

export default CartCard;
