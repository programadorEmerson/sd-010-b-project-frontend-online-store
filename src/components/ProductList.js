import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    let savedResults = localStorage.getItem('results');
    savedResults = JSON.parse(savedResults);
    if (savedResults) {
      this.state = {
        results: savedResults,
      };
    } else {
      this.state = {
        results: [],
      };
    }
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
      const resultsToSave = JSON.stringify(results);
      this.setState({
        results,
      });
      localStorage.setItem('results', resultsToSave);
    });
  }

  render() {
    const { results } = this.state;
    const { getResultFromProductList } = this.props;
    return (
      <div>
        { (results.length === 0)
          ? (<p>Nenhum produto foi encontrado</p>)
          : results.map((item, index) => (
            <div data-testid="product" key={ index }>
              <h3>
                { item.title }
              </h3>
              <img src={ item.thumbnail } alt={ item.title } />
              <p>
                R$
                { item.price }
              </p>
              <Link
                to={ `/product/${item.id}` }
                data-testid="product-detail-link"
                onClick={ () => getResultFromProductList(item) }
              >
                Ver Detalhes
              </Link>
            </div>
          ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  searchText: PropTypes.string,
  category: PropTypes.string,
}.isRequired;

export default ProductList;
