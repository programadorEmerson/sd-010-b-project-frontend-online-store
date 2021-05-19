import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartList extends Component {
  constructor() {
    super();
    this.state = { 
      cart: [],
    }

    this.totalValue = this.totalValue.bind(this);
  }

  totalValue(id, bool) {
    this.setState((state) => ({
      cart: state.cart.map((element) => {
        if (!bool && element.id === id) {
          return { ...element, quantity: element.quantity - 1 };
        }
        if (bool && element.id === id) {
          return { ...element, quantity: element.quantity + 1 };
        }
      }),
    }));
  }

  render() {
    const {
      product: { title, quantity, id },
    } = this.props;
    const length = quantity <= 0 ? null : true;

    return (
      <section>
        <p>{ title }</p>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ () => this.totalValue(id, true) }
        >
          +
        </button>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ () => this.totalValue(id, false) }
          disabled={ !length }
        >
          -
        </button>
        <p>{ quantity }</p>
      </section>
    );
  }
}

// Requisito 10 entendido e desenvolvido com a ajuda do  grupo 17 e dando uma olhada em sua PR. src: https://github.com/tryber/sd-010-b-project-frontend-online-store/pull/27

CartList.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    quantity: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default CartList;
