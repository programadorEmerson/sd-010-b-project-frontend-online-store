import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import mockedQueryResult from '../__mocks__/query';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      product: {},
    };
  }

  async componentDidMount() {
    const {
      match: { params: { id, category_id: categoryId, typedProduct } },
    } = this.props;
    const productList = await getProductsFromCategoryAndQuery(categoryId, typedProduct);
    const productListId = productList.results;
    const product = productListId.find((productId) => productId.id === id);

    console.log(mockedQueryResult.results[0].title);

    this.setProductState(product);
  }

  setProductState(product) {
    this.setState({ product });
  }

  render() {
    const { product: { title, price, thumbnail } } = this.state;
    return (
      <main>
        <h1 data-testid="product-detail-name">Pequeno Principe, O</h1>
        <img src={ thumbnail } alt={ title } />
        <section>
          <ul>
            <h1>Descrição do Produto</h1>
            <li>{title}</li>
            <li>{price}</li>
          </ul>
        </section>
      </main>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      category_id: PropTypes.string,
      typedProduct: PropTypes.string,
    }).isRequired,
  }).isRequired,
}.isRequired;

export default ProductDetails;
