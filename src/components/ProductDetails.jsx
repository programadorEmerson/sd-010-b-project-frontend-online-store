import React, { Component } from 'react';

class ProductDetails extends Component {
  render() {
    const { title, price, thumbnail, attributes } = this.props;

    return (
      <div>
        <h1>
          <p>{`${title} - R$-${price}`}</p>
        </h1>
        <img className="img" src={ thumbnail } alt={ title } />
        <p>Especificações Técnicas</p>
        <ul>
          {/* { attributes.map(({ name, value_name }) => <li>{`${name}: ${value_name}`}</li>)} */}
        </ul>
      </div>
    );
  }
}

export default ProductDetails;
