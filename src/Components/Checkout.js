import React from 'react';
import PropTypes from 'prop-types';

class Checkout extends React.Component {
  constructor(props) {
    super(props);

    const { id } = this.props;
    this.state = {
      count: { default: 1 },
      estado: 0,
      id,
    };
  }

  componentDidMount() {
    const { id, count } = this.state;
    id.map((element) => this.addFun(element, count));
  }

  addFun = (element, count) => {
    count[element] = 1;
    this.setState({ count, estado: 1 });
  }

  handleClick = (operation, id, count) => {
    if (operation === '-') {
      count[id] = count[id] === 1 ? 1 : count[id] - 1;
      return this.setState({ count });
    }
    if (operation === '+') {
      count[id] += 1;
      return this.setState({ count });
    }
    return document.querySelector(`#${operation}`).parentNode.remove();
  }

  render() {
    const { name, id } = this.props;
    const { count, estado } = this.state;
    return (
      <div>
        <span data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </span>
        {name.map((element, index) => (
          <div key={ id[index] }>
            <p
              data-testid="shopping-cart-product-name"
              key={ element }
              id={ id[index] }
            >
              { element }
              <span data-testid="shopping-cart-product-quantity">
                { estado === 1 ? count.[id[index]] : count.default}
                {/* Está adicionando ou removendo para todos os itens  */}
              </span>
            </p>
            <button
              data-testid="product-increase-quantity"
              type="button"
              onClick={ () => this.handleClick('+', id[index], count) }
            >
              +

            </button>
            <button
              data-testid="product-decrease-quantity"
              type="button"
              onClick={ () => this.handleClick('-', id[index], count) }
            >
              -

            </button>
            <button
              type="button"
              onClick={ () => this.handleClick(id[index]) }
            >
              EXCLUIR

            </button>
          </div>
        ))}
      </div>
    );
  }
}

Checkout.propTypes = {
  name: PropTypes.array,
}.isRequired;

export default Checkout;
