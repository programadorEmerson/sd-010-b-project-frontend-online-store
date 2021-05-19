import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getProductById from '../services/newapi';
import CartButton from '../Components/CartButton';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const resp = await getProductById(id);
    this.setState({
      product: resp,
    });
  }

  render() {
    const { product } = this.state;
    const { addToCartHandler } = this.props;
    return (
      <div>
        <div>
          <p data-testid="product-detail-name">{ product.title }</p>
        </div>
        <div
          data-testid="product-detail-add-to-cart"
          className="add-to-cart"
          onClick={ () => addToCartHandler(product.id, product.title, product.price) }
          onKeyUp={ (event) => {
            if (event.key === 'Enter') {
              addToCartHandler(product.id, product.title, product.price);
            }
          } }
          role="button"
          tabIndex="0"
        >
          Adicionar ao carrinho
        </div>
        <CartButton />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  addToCartHandler: PropTypes.func.isRequired,
};

export default ProductDetails;
