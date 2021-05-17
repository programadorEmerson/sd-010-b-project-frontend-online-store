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

  search = (id, name) => {
    api.getProductsFromCategoryAndQuery(id, name).then(({ results }) => {
      this.setState({
        searchText: results,
      });
    });
  }

  render() {
    const { categories } = this.props;
    const { searchText } = this.state;
    return (
      <section>
        <aside>
          <ol>
            { categories.map(({ id, name }) => (
              <li data-testid="category" key={ id }><button type="button" onClick={ () => this.search(id, name) }>{ name }</button></li>
            )) }
          </ol>
        </aside>
        <ol>
          {searchText.map((item) => <SearchList key={ item.id } item={ item } />)}
        </ol>
      </section>
    );
  }
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoryList;
