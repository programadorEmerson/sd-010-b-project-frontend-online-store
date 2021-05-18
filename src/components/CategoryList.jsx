import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import SearchList from './SearchList';

class CategoryList extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: [],
    };
  }

  search = async (id, name) => {
    await api.getProductsFromCategoryAndQuery(id, name).then(({ results }) => {
      this.setState({
        searchText: results,
      });
    });
  }

  render() {
    const { categories, addToCart } = this.props;
    const { searchText } = this.state;
    return (
      <section>
        <aside>
          <ol>
            { categories.map(({ id, name }) => (
              <li
                key={ id }
              >
                <button
                  data-testid="category"
                  type="button"
                  onClick={ () => this.search(id, name) }
                >
                  { name }
                </button>
              </li>
            )) }
          </ol>
        </aside>
        <ol>
          {searchText.map((item) => (<SearchList
            key={ item.id }
            item={ item }
            searchText={ searchText }
            addToCart={ addToCart }
          />))}
        </ol>
      </section>
    );
  }
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default CategoryList;
