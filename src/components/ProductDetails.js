import React from 'react';
import { Link } from 'react-router-dom';

class ProductDetails extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     item: {},
  //   };
  // }

  searchAndRenderItemDetais = (id) => {
    const { resultFromApi } = this.props;
    const productToShow = resultFromApi.find((product) => product.id === id);
    // this.setState({ item: productToShow });
    return (
      <div>
        <p data-test-id="product-detail-name`">
          `Nome:
          {' '}
          $
          {productToShow.title}
          `
        </p>
        <img src={ productToShow.thumbnail } alt={ productToShow.title } />
        <p>
          `R$
          $
          { productToShow.price }
          `
        </p>
        <p>
          `Quantidade Disponível $
          {productToShow.available_quantity}
          `
        </p>
        <Link to="/">VOLTAR</Link>
      </div>);
  }

  render() {
    const { match } = this.props;
    const { id } = match.params;

    return this.searchAndRenderItemDetais(id);
  }
}

ProductDetails.propTypes = {
  match: PropTypes.object,
  id: PropTypes.string,
}.isRequired;

export default ProductDetails;
