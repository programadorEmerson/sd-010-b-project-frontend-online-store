import React from 'react';
import PropTypes from 'prop-types';
import * as api2 from '../services/api2';

class CartAmount extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.fetchComponentState();
  }

  handleIncreaseClick = () => {
    const { id, maxQuantity, onChange } = this.props;
    const { count } = this.state;
    if (count < maxQuantity) {
      api2.addToLocalStorage(id);
      onChange();
      this.setState((estadoAnterior) => ({
        count: estadoAnterior.count + 1,
      }));
    }
  }

  handleDecreaseClick = () => {
    const { onChange, id } = this.props;
    const { count } = this.state;
    if (count > 1) {
      this.setState((estadoAnterior) => ({
        count: estadoAnterior.count - 1,
      }));
      onChange();
      api2.removeFromLocalStorage(id);
    }
  }

  fetchComponentState = () => {
    const { quantity } = this.props;
    this.setState({ count: quantity });
  }

  handleExclusion = ({ target }) => {
    const { onChange } = this.props;
    const { className } = target;

    const getDiv = document.getElementsByClassName(className)[0];
    getDiv.remove();
    api2.deleteEveryFromLocalStorage(className);
    onChange();
  }

  render() {
    const { id, title } = this.props;
    const { count } = this.state;
    return (
      <section className={ id }>
        <h3 data-testid="shopping-cart-product-name">{title}</h3>
        <p
          data-testid="shopping-cart-product-quantity"
        >
          {count}
        </p>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.handleIncreaseClick }
        >
          +

        </button>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.handleDecreaseClick }
        >
          -

        </button>
        <button type="button" className={ id } onClick={ this.handleExclusion }>x</button>
      </section>
    );
  }
}

CartAmount.propTypes = {
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  maxQuantity: PropTypes.number.isRequired,
};

export default CartAmount;
