import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  constructor() {
    super();

    if (!localStorage.getItem('cartProducts')) {
      localStorage.setItem('cartProducts', '[]');
    }

    this.state = {
      products: [],
    };
  }

  componentDidMount = () => {
    this.getLocalstorage();
  }

  saveAtLocalstorage = (objectToSave) => {
    let localObj = JSON.parse(localStorage.getItem('cartProducts'));
    localObj = [...localObj, objectToSave];

    localStorage.setItem('cartProducts', JSON.stringify(localObj));
  }

  getLocalstorage = () => {
    this.setState({
      products: JSON.parse(localStorage.getItem('cartProducts')),
    });
  }

  render() {
    const { location: { state } } = this.props;
    const { products } = this.state;
    if (state) {
      const { title, price, imgUrl } = state;
      console.log(title, price, imgUrl);
      this.saveAtLocalstorage(state);
      return (
        <section>
          <h1>Carrinho de Compras</h1>
          { products.map((product) => <p key={ product.title }>{product.title}</p>) }
        </section>
      );
    }

    return (
      <section>
        <h1>Carrinho de Compras</h1>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </section>
    );
  }
}

ShoppingCart.defaultProps = {
  location: {
    state: {
      title: '',
      price: '',
      imgUrl: '',
    },
  },
};

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      imgUrl: PropTypes.string,
    }),
  }),
};

export default ShoppingCart;
