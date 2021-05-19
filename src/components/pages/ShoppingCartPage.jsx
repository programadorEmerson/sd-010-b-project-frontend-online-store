import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShoppingCartPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: props.itemShoppingCart,
    };
    this.upQuantityItem = this.upQuantityItem.bind(this);
    this.downQuantityItem = this.downQuantityItem.bind(this);
  }

  // shouldComponentUpdate() {
  //   this.getAllProducts();
  // }

  // getAllProducts() {
  //   const { itemShoppingCart } = this.props;
  //   this.setState(({ item }) => ({
  //     products: [...item, itemShoppingCart],
  //   }));
  // }

  upQuantityItem(item, index) {
    console.log(`antes ${item.quantity}`);
    const { products } = this.state;
    const a = products[index].quantity += 1;
    this.setState(({ products }) => ({
      products: [...products, a],
    }));
    console.log(products[index].quantity);
    console.log(`depois ${item.quantity}`);
  }

  // getProduct(product) {
  //   this.setState(({ shoppingCart }) => ({
  //     shoppingCart: [...shoppingCart, product],
  //   }));
  // }

  downQuantityItem(item) {
    item.quantity -= 1;
    console.log(item.quantity);
  }

  render() {
    const { products } = this.state;
    if (products.length) {
      products.forEach((item) => {
        item.quantity = 1;
      });
    }

    // map((item) => { item.quantidade = 1; });
    // console.log(products);

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
                <p>{item.quantity}</p>
                <button
                  type="button"
                  onClick={ () => this.downQuantityItem(item) }
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
