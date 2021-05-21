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

  upQuantityItem(index) {
    const { products } = this.state;
    const newProducts = [...products];
    newProducts[index].quantity += 1;
    this.setState(() => ({
      products: newProducts,
    }));
  }

  // getProduct(product) {
  //   this.setState(({ shoppingCart }) => ({
  //     shoppingCart: [...shoppingCart, product],
  //   }));
  // }

  downQuantityItem(index) {
    const { products } = this.state;
    const newProducts = [...products];
    newProducts[index].quantity -= 1;
    this.setState(() => ({
      products: newProducts,
    }));
  }

  render() {
    const { products } = this.state;
    if (products.length) {
      products.forEach((item) => {
        if (!item.quantity) {
          item.quantity = 1;
        }
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
                  data-testid="product-increase-quantity"
                  type="button"
                  onClick={ () => this.upQuantityItem(index) }
                >
                  +
                </button>
                <p data-testid="shopping-cart-product-quantity">{item.quantity}</p>
                <button
                  data-testid="product-decrease-quantity"
                  type="button"
                  onClick={ () => this.downQuantityItem(index) }
                >
                  -

                </button>
              </div>
            ))}
        </section>
        <section>
          <p>
            Quantidade de items no carrinho:
            {products.quantity}
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
