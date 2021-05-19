import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShoppingCartPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: props.itemShoppingCart,

    };
    this.getAllProducts = this.getAllProducts.bind(this);
  }

  shouldComponentUpdate() {
    this.getAllProducts();
  }

  getAllProducts() {
    const { itemShoppingCart } = this.props;
    this.setState(({ item }) => ({
      products: [...item, itemShoppingCart],
    }));
  }

  render() {
    const { products } = this.state;
    return (
      <>
        <h1>
          Shopping Cart Page
        </h1>
        <section>
          {(products.length === 0)
            ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
            : products.map((item) => (
              <div key={ item.id }>
                <h6 data-testid="shopping-cart-product-name">{ item.title }</h6>
                <img src={ item.thumbnail } alt={ item.site_id } width="30px" />
                <p>{`R$ ${item.price}`}</p>
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
