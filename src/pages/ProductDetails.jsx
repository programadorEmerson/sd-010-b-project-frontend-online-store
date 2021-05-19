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
    const { data } = this.state;
    console.log(data);
    return (
      <main>
        <h1 data-testid="product-detail-name">
          {data !== undefined ? data.title : 'Pequeno Principe, O'}
        </h1>
        <h1>
          R$:
          {data !== undefined ? data.price : ''}
        </h1>
        <img src={ data !== undefined ? data.thumbnail : '' } alt="" />
        <EvaluationForm />
      </main>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf,
    id: PropTypes.string,
  }).isRequired,
};
export default ProductDetails;
