import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api'
import mockedQueryResult from '../__mocks__/query';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      product: {},
    }
  }

  async componentDidMount() {
    const { params: { id, category_id, typedProduct } } = this.props.match;
    const productList = await getProductsFromCategoryAndQuery(category_id, typedProduct);
    const productListId = productList.results
    const product = productListId.find((productId) => {
      return productId.id === id;
    })

    console.log(mockedQueryResult.results[0].title)

    this.setState({ product: product });
  }

  render() {
    const { title, price, thumbnail } = this.state.product;
    return(
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

export default ProductDetails;