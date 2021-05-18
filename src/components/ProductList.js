import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  componentDidUpdate(prevProps) {
    const { searchText, category } = this.props;
    if (prevProps.searchText !== searchText || prevProps.category !== category) {
      this.apiCall(searchText, category);
    }
  }

  apiCall = (searchText, category) => {
    getProductsFromCategoryAndQuery(category, searchText).then((products) => {
      const { results } = products;
      this.setState({
        results,
      });
      console.log(results);
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
  category: PropTypes.string,
}.isRequired;

export default ProductList;
