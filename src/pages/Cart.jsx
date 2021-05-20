import React from 'react';
import PropTypes from 'prop-types';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    const { shoppingCartProduct } = this.props;
    this.state = {
      teste: shoppingCartProduct,
    };
  }

  render() {
    console.log(this.state.teste);
    return (
      <section>
        {/* {shoppingCartProduct === undefined ? (
          <span data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </span>
        ) : ( */}
          <div>
            {this.state.teste.map((product) => (
              <div key={ product.id }>
                <div
                  data-testid="shopping-cart-product-name"
                >
                  { product.title }
                </div>
                <div
                  data-testid="shopping-cart-product-quantity"
                >
                  { product.quantity }
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    );
  }
}

Cart.propTypes = {
  shoppingCartProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cart;
