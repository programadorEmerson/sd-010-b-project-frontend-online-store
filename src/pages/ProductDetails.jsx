import React from 'react';
import PropTypes from 'prop-types';
import EvaluationForm from '../components/EvaluationForm';
import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: undefined };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  fetchAPI = async () => {
    const { match: { params: { id } } } = this.props;
    console.log(id);
    const result = await api.getProductsFromCategoryAndQuery(id);
    this.setState({
      data: result,
    });
  }

  render() {
    const { data: { title, price, thumbnail } } = this.state;
    const { addItemToCart } = this.props;
    console.log(data);
    return (
      <main>
        <h1 data-testid="product-detail-name">
          {title !== undefined ? title : 'Pequeno Principe, O'}
        </h1>
        <h1>
          R$:
          {price !== undefined ? price : ''}
        </h1>
        <img src={ thumbnail !== undefined ? thumbnail : '' } alt="" />
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => addItemToCart(id, title, price) }
        >
          Adicionar ao carrinho
        </button>
        <EvaluationForm />
      </main>
    );
  }
}

ProductDetails.propTypes = {
  addItemToCart: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.objectOf,
    id: PropTypes.string,
  }).isRequired,
};
export default ProductDetails;
