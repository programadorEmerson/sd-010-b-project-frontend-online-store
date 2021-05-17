import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

class DetailsCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      details: {},
    };
  }

  componentDidMount() {
    this.getAPI();
  }

  getAPI = async () => {
    const { match: { params: { title } } } = this.props;
    const products = await getProductsFromCategoryAndQuery('', title);
    this.setState({
      details: products.results[0],
    });
  }

  render() {
    const { details: { title, thumbnail, price } } = this.state;
    return (
      <div>
        <h2 data-testid=" product-detail-name">{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <Link data-testid="shopping-cart-button" id="cart" to="/cart">Carrinho</Link>
      </div>
    );
  }
}

DetailsCard.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }).isRequired,
};

export default DetailsCard;
