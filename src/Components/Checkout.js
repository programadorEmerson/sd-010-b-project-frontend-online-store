import React from 'react';
import PropTypes from 'prop-types';

class Checkout extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 1,
    };
  }

  // componentDidMount() {
  //   this.addFun();
  // }

  // addFun = () => { Aqui não precisa mais porque o estado já começa em 1
  //   this.setState((prevState) => ({ count: prevState.count + 1 }));
  // }

  handleClick = (operation) => {
    if (operation === '-') {
      return this.setState((prevState) => (
        { count: prevState.count === 1 ? 1 : prevState.count - 1 }));
    }
    if (operation === '+') {
      return this.setState((prevState) => ({ count: prevState.count + 1 }));
    }
    return document.querySelector(`#${operation}`).parentNode.remove();
  }

  addState = (id, state) => { // Adiciona cada estado do produto
    this.setState({ [id]: state });
  }

  render() {
    const { name, id } = this.props;
    const { count } = this.state;
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
                { count }
                {/* Está adicionando ou removendo para todos os itens  */}
              </span>
            </p>
            <button
              data-testid="product-increase-quantity"
              type="button"
              onClick={ () => this.handleClick('+') }
            >
              +

            </button>
            <button
              data-testid="product-decrease-quantity"
              type="button"
              onClick={ () => this.handleClick('-') }
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
