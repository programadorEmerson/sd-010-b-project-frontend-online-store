import React, { Component } from 'react';
import * as api2 from '../services/api2';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await api2.default(id);

    this.setState({ product });
  }

  render() {
    const { product: { title, thumbnail, price, attributes } } = this.state;
    return (
      <div>
        <h1 data-testid="product-detail-name">{ title }</h1>
        <img src={ thumbnail } alt={ title } />
        <h2>{price}</h2>
        <ul>
          {attributes && attributes.map((attribute, index) => {
            if (attribute.value_name) {
              return (
                <li key={ index }>
                  {attribute.name}
                  :
                  {' '}
                  {attribute.value_name }
                </li>
              );
            }
            return <div key={ index } />;
          })}
        </ul>
      </div>
    );
  }
}

export default ProductDetails;
