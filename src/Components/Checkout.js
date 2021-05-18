import React from 'react';
import PropTypes from 'prop-types';

class Checkout extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.addFun();
  }

  addFun = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  render() {
    const { name } = this.props;
    const { count } = this.state;
    return (
      <div>
        <span data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </span>
        {name.map((element) => (
          <p
            data-testid="shopping-cart-product-name"
            key={ element }
          >
            { element }
            <p data-testid="shopping-cart-product-quantity">
              { count }
            </p>
          </p>
        ))}
      </div>
    );
  }
}

Checkout.propTypes = {
  name: PropTypes.array,
}.isRequired;

export default Checkout;
