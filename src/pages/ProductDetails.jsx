import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { GrCart } from 'react-icons/gr';

class ProductDetaills extends Component {
  constructor(props) {
    super(props);
    const {
      match: {
        params: { id },
      },
    } = this.props;
    this.state = {
      product: [],
      productId: id,
    };
    this.requestDetails = this.requestDetails.bind(this);
  }

  componentDidMount() {
    this.requestDetails();
  }

  async requestDetails() {
    const { productId } = this.state;
    const returnRequest = await fetch(`https://api.mercadolibre.com/items/${productId}`);
    const returnJson = await returnRequest.json();
    this.setState({
      product: returnJson,
    });
  }

  render() {
    const { product } = this.state;
    const { title, thumbnail, price, warranty } = product;
    const { onClick } = this.props;

    return (
      <div>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
          className="shopping-cart-button"
        >
          <GrCart />
        </Link>
        <h3>Especificações Técnicas</h3>
        <h3 data-testid="product-detail-name">{title}</h3>
        <img src={ thumbnail } alt={ title } />
        <p>
          R$
          {price}
        </p>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => onClick(product) }
        >
          Adicionar ao carrinho
        </button>
        {/* <p>Especificações:</p> */}
        <p>{warranty}</p>
        <Link to="/">Voltar para a tela inicial</Link>
      </div>
    );
  }
}

ProductDetaills.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
  }).isRequired,
};

ProductDetaills.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    warranty: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,

  onClick: PropTypes.func.isRequired,
};

export default ProductDetaills;
