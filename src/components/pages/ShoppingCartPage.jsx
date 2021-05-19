import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShoppingCartPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: props.itemShoppingCart,
      quantity: [],
    };
    this.upQuantityItem = this.upQuantityItem.bind(this);
    this.downQuantityItem = this.downQuantityItem.bind(this);
  }

  componentDidUpdate() {
    const { products } = this.state;
    this.setState({
      quantity: products.map((item, index) => ({ [`item${index}`]: item })),
    });
  }

  upQuantityItem(item, index) {
    const { quantity } = this.state;
    console.log(index);
    this.setState(({ state }) => {
      quantity[index] = { item: [state + 1] };
    });
  }

  downQuantityItem(item, index) {
    const { quantity } = this.state;
    this.setState({
      quantity: quantity[index] -= 1,
    });
  }

  render() {
    const { products, quantity } = this.state;
    if (products.length) {
      products.forEach((item) => {
        item.quantity = 1;
      });
    }

    // map((item) => { item.quantidade = 1; });

    return (
      <>
        <h1>
          Shopping Cart Page
        </h1>
        <section>
          {(products.length === 0)
            ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
            : products.map((item, index) => (
              <div key={ item.id }>
                <h6 data-testid="shopping-cart-product-name">{ item.title }</h6>
                <img src={ item.thumbnail } alt={ item.site_id } width="30px" />
                <p>{`R$ ${item.price}`}</p>
                <button
                  type="button"
                  onClick={ () => this.upQuantityItem(item, index) }
                >
                  +
                </button>
                <p>{quantity[index] || item.quantity}</p>
                <button
                  type="button"
                  onClick={ () => this.downQuantityItem(item, index) }
                >
                  -
                </button>
              </div>
            ))}
        </section>
        <section>
          <p data-testid="shopping-cart-product-quantity">
            Quantidade de items no carrinho:
            {products.length}
          </p>
        </section>
      </>
    );
  }
}

ShoppingCartPage.propTypes = {
  itemShoppingCart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

/* ShoppingCartPage.defaultProps = {
  location: {
    pathname: '',
    state: { shoppingCart: [] },
  },
}; */
