import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  componentDidUpdate(prevProps) {
    const { searchText } = this.props;
    if (prevProps.searchText !== searchText) this.apiCall(searchText);
  }

  apiCall = (searchText) => {
    const { getResultFromProductList } = this.props;
    getProductsFromCategoryAndQuery('', searchText).then((products) => {
      const { results } = products;
      getResultFromProductList(products);
      this.setState({
        results,
      });
    });
  }

  constructorCard = (item) => (
    <div>
      <h3>
        { item.title }
      </h3>
      <img src={ item.thumbnail } alt={ item.title } />
      <p>
        R$
        { item.price }
      </p>
      <Link to={ `/product/${item.id}` } data-testid="product-detail-link" />
    </div>
  )

  render() {
    const { results } = this.state;
    return (
      <div>
        { (results.length === 0)
          ? <p>Nenhum produto foi encontrado</p> : results.map((item, index) => (
            <div data-testid="product" key={ index }>
              {this.constructorCard(item)}
            </div>))}
      </div>
    );
  }
}

ProductList.propTypes = {
  searchText: PropTypes.string,
}.isRequired;
export default ProductList;
