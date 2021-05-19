import React from 'react';
// import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    const { match } = this.props;
    console.log(match);
    api.getProductsFromCategoryAndQuery(match.params.id, match.params.id2)
      .then((data) => {
        this.setState({ data: data.results[0] });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <h1 data-testid="product-detail-name">
          {data.title}
        </h1>
        <h1>
          R$:
          {data.price}
        </h1>
        <img src={ data.thumbnail } alt="" />
      </>
    );
  }
}

ProductDetails.propTypes = {
  match: Proptypes.shape({
    params: Proptypes.objectOf,
    id: Proptypes.string,
  }).isRequired,
};
export default ProductDetails;
