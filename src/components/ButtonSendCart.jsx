import React from 'react';
import PropTypes from 'prop-types';

class ButtonSendCart extends React.Component {
  render() {
    const { addToCart, item, id } = this.props;
    return (
      <button
        type="button"
        data-testid={ id }
        onClick={ () => addToCart(item) }
      >
        Comprar
      </button>
    );
  }
}

ButtonSendCart.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  addToCart: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ButtonSendCart;
