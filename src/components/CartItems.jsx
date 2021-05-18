import React, { Component } from 'react';
import ItemCard from './ItemCard';

export default class CartItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.updateState();
  }

  storageUpdate = () => {
    if (localStorage.length !== 0) {
      const getProducts = JSON.parse(localStorage.getItem('products-on-cart'));
      return getProducts;
    }
    return [];
  }

  updateState = () => {
    const productsInStorage = this.storageUpdate();
    this.setState({
      products: productsInStorage,
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <div>
          <p>
            Itens no carrinho:
            {' '}
            { products.length }
          </p>
        </div>
        <div>
          {products.map((product) => (
            <ItemCard
              key={ product.product.id }
              product={ product }
            />
          ))}
        </div>
      </div>
    );
  }
}
