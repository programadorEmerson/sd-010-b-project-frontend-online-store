import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

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
      console.log(filtro);
    });
  }

  render() {
    const { product: { title, price, thumbnail } } = this.state;
    return (
      <div>
        <p data-testid="product-detail-name">{title}</p>
        <p>{price}</p>
        <img src={ thumbnail } alt="imagem" width="100px" />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
}.isRequired;

export default ProductDetails;
