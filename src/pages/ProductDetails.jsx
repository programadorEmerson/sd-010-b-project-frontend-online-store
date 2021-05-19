import React from 'react';
import PropTypes from 'prop-types';
import EvaluationForm from '../components/EvaluationForm';
import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    console.log(id);
    api.getProduct(id)
      .then((response) => {
        this.setState({
          data: response,
        });
      });
  }

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <main>
        <h1 data-testid="product-detail-name">
          {data.title}
        </h1>
        <h1>
          R$:
          {data.price}
        </h1>
        <img src={ data.thumbnail } alt="" />
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
