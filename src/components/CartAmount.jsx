import React from 'react';
import PropTypes from 'prop-types';

class CartAmount extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.fechComponentState();
  }

  handleIncreaseClick = () => {
    this.setState((estadoAnterior) => ({
      count: estadoAnterior.count + 1,
    }));
  }

  handleDecreaseClick = () => {
    const { count } = this.state;
    if (count > 0) {
      this.setState((estadoAnterior) => ({
        count: estadoAnterior.count - 1,
      }));
    }
  }

  fechComponentState = () => {
    const { quantity } = this.props;
    this.setState({ count: quantity });
  }

  handleExclusion = ({ target }) => {
    const { className } = target;
    console.log(className);
    const getDiv = document.getElementsByClassName(className)[0];
    console.log(getDiv);
    getDiv.remove();
    // incrementar aqui uma funcao que atualize o local storage de acordo com a remocao
  }

  render() {
    const { id, product, handleQuantityChange } = this.props;
    const { count } = this.state;
    return (
      <div className={ id }>
        <h3 data-testid="shopping-cart-product-name">{product}</h3>
        <p
          data-testid="shopping-cart-product-quantity"
          onChange={ handleQuantityChange }
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
      </div>
    );
  }
}

CartAmount.propTypes = {
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  product: PropTypes.string.isRequired,
  handleQuantityChange: PropTypes.func.isRequired,
};

export default CartAmount;
