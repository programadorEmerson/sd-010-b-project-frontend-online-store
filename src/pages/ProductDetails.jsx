import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import { FormAvaliation } from '../components/ProductAvaliation';

export class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      product: [],
    };
  }

  componentDidMount() {
    this.requestProduct();
  }

  requestProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const getProduct = await getProductsFromCategoryAndQuery('', id);
    const { results } = getProduct;
    const foundProduct = results.find((element) => element.title === id);
    this.setState({
      product: foundProduct,
    });
  }

  render() {
    const { product } = this.state;
    const { title, thumbnail, price } = product;
    console.log(product);
    return (
      <div key={ title }>
        <h1 data-testid=" product-detail-name">{title}</h1>
        <p>{`R$${price}`}</p>
        <img src={ thumbnail } alt={ title } />
        {/* <p>Especificações:</p>
        <ul>
          {attributes.map((attributes) => (
            <li key={ attributes.id }>
              {`${attributes.name}: ${attributes.value_name}`}
            </li>))}
        </ul> */}
        <Link to="/shopping-cart">Adicionar ao Carrinho de Compras</Link>
        <FormAvaliation />
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
};

export default ProductDetails;
