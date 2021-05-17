import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCartCard from './ShoppingCartCard'

class ShopCart extends React.Component {
  constructor() {
    super();

    this.state = {
      shoppingCartProducts: [],
      totalPriceShoppingCart: 0,
    };
  }

  componentDidMount() {
    this.setTotalPriceValue();
    this.populateShoppingCart();
  }

  // Popula o state carrinho com os itens da rota anterior
  populateShoppingCart = () => {
    const { location: { state: { shoppingCart } } } = this.props;

    this.setState({ shoppingCartProducts: shoppingCart })
  }

  // Seta o valor total da compra
  setTotalPriceValue = () => {
    const { location: { state: { shoppingCart } } } = this.props;
    console.log(shoppingCart)
    const totalPrice = shoppingCart.reduce((productCart) => {
      return productCart.price + productCart.price;
    })

    this.setState({ totalPriceShoppingCart: totalPrice })
  }

  // Deleta produto do carrinho
  deleteProductAtShoppingCart = () => {
    const { location: { state: { shoppingCart } } } = this.props;
  }

  // Escolhe a quantidade do produto
  changeProductQuantity = (symbol) => {
    if (symbol === '+') {

    }

    if (symbol === '-') {

    }
  }

  render() {
    const { totalPriceShoppingCart, shoppingCartProducts } = this.state;
    if (shoppingCartProducts.length) {
      return (
        <main>
          <h1>Carrinho de compras</h1>
          {shoppingCartProducts.map((productCart) => (
            <ShoppingCartCard key={ productCart.id } productCart={ productCart } />
          ))}
          <span data-testid="shopping-cart-product-quantity">
            <p>Quantidade de Itens no carrinho:</p>
            {shoppingCartProducts.length}
          </span>
          <span>
            <p>Valor total da compra:</p>
            {totalPriceShoppingCart}
          </span>
          <button type="submit">
            FINALIZAR COMPRA
          </button>
        </main>
      );
    }

    return (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
  }
}

ShopCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      shoppingCart: PropTypes.arrayOf(PropTypes.shape),
    }).isRequired,
  }).isRequired,
}.isRequired;

export default ShopCart;
