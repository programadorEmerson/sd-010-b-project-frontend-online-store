import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from '../components/Rating';

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
    const { setCart } = this.props;
    const { product } = this.state;
    const { title, thumbnail, price, id, available_quantity: available } = product;

    return (
      <div className="product-detail-container">
        <p data-testid="product-detail-name">{title}</p>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
        <p>{ available}</p>
        <Rating />
        <button
          onClick={ () => setCart({ id, title, price, thumbnail, quant: 1, available }) }
          type="button"
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao Carrinho
        </button>
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
