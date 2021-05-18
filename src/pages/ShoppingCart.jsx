import React from 'react';

class ShoppingCart extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     products: [],
  //   };
  // }

  // lista = (oldState) => {
  //   const { produto } = this.props;
  //   this.setState({ products: [...oldState, produto] });
  // }

  render() {
    // const { products } = this.state;
    return (
      <ol>
        <li>bodega</li>
        {/* {products.map((item) => (<li key={ item.title }>
          { item.title }
          { item.thumbnail }
          { item.price }
        </li>))} */}
      </ol>
    );
  }
}

export default ShoppingCart;
