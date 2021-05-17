import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    const { id } = props.match.params;
    this.state = {
      product: [],
      productID: id,
    };
    this.getProductById = this.getProductById.bind(this);
  }

  componentDidMount() {
    this.getProductById();
  }

  async getProductById() {
    const { productID } = this.state;
    const response = await fetch(`https://api.mercadolibre.com/items/${productID}`);
    const selectedProduct = await response.json();
    this.setState({
      product: selectedProduct,
    });
  }

  render() {
    const { product } = this.state;
    const { title, thumbnail, price } = product;

    return (
      <div className="product-detail-container">
        <p data-testid="product-detail-name">{title}</p>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
}.isRequired;

export default ProductDetails;
