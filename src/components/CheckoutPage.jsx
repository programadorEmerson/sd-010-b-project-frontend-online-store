import React from 'react';
import PropTypes from 'prop-types';

class CheckoutPage extends React.Component {
  /* SumProduct(prices) {

  } */

  render() {
    const { cart } = this.props;
    if (!cart.length) {
      return (
        <p>Nenhuma compra realizada</p>
      );
    }
    return (
      <div>
        <h3>Revise seus produtos</h3>
        {cart.map((item) => {
          const { title, id, price } = item;
          return (
            <div key={ id }>
              <p key={ id }>{title}</p>
              <p>
                R$
                {price}
              </p>
              <div>{}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

CheckoutPage.propTypes = {
  cart: PropTypes.arrayOf.isRequired,
};

export default CheckoutPage;
