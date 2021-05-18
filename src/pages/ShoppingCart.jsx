import React from 'react';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };
  }

  lista = (oldState) => {
    const { produto } = this.props;
    this.setState({ products: [...oldState, produto] });
  }

  render() {
    const { products } = this.state;
    console.log(products)
    return (
      <ol>
        {products.map((item) => (<li key={ item.title }>
          { item.title }
          { item.thumbnail }
          { item.price }
        </li>))}
        bodega
      </ol>
    );
  }
}

export default ShoppingCart;
