import React from 'react';
import PropTypes from 'prop-types';

class ItemProductCart extends React.Component {
  constructor() {
    super();
    this.state = {
      quantidade: 1,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(numero) {
    this.setState({
      quantidade: numero,
    });
  }

  render() {
    const { quantidade } = this.state;
    const { cartItem: { cardProps: {
      title,
      thumbnail,
      id,
      price,
      quantity,
    } } } = this.props;
    return (
      <section data-testid="product">
        <fieldset>
          <p data-testid="shopping-cart-product-name">{title}</p>
          <p>{ id }</p>
          <img src={ thumbnail } alt={ title } />
          <p>{`R$${price}`}</p>
          <label htmlFor="quantidade">
            Quantidade
            <button
              onClick={ () => this.handleChange(quantidade === 1 ? 1 : quantidade - 1) }
              data-testid="product-decrease-quantity"
              type="button"
            >
              -
            </button>
            <input
              type="text"
              value={ quantidade }
              id="quantidade"
              disabled
            />
            <button
              onClick={ () => this.handleChange(quantidade + 1) }
              data-testid="product-increase-quantity"
              type="button"
            >
              +
            </button>
          </label>
        </fieldset>
      </section>
    );
  }
}

ItemProductCart.propTypes = {
  cartItem: PropTypes.objectOf.isRequired,
  cardProps: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ItemProductCart;
