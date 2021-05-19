import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import ButtonSendCart from '../components/ButtonSendCart';
import Button from '../components/Button';
import Rating from '../components/Rating';
import Coments from '../components/Coments';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: '',
    };
  }

  componentDidMount() {
    this.details();
  }

  details = async () => {
    const { match: { params: { idc, idp } } } = this.props;
    await api.getProductsFromCategoryAndQuery(idc, '').then(({ results }) => {
      const filtro = results.find((itens) => itens.id === idp);
      this.setState({
        product: filtro,
      });
    });
  }

  render() {
    const { product: { title, price, thumbnail } } = this.state;
    const { product } = this.state;
    const { addToCart } = this.props;
    return (
      <div>
        <p data-testid="product-detail-name">{title}</p>
        <p>{price}</p>
        <img src={ thumbnail } alt="imagem" width="100px" />
        <ButtonSendCart
          item={ product }
          addToCart={ addToCart }
          id="product-detail-add-to-cart"
        />
        <Button />
        <Rating />
        <Coments />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
}.isRequired;

export default ProductDetails;
