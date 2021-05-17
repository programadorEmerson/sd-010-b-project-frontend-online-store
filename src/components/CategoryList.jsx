import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class CategoryList extends React.Component {
  constructor() {
    super();

    this.state = {
      search: '',
      searchText: [],
    };
  }

  search = () => {
    const { search } = this.state;
    api.getProductsFromCategoryAndQuery(undefined, search).then(({ results }) => {
      this.setState({
        searchText: results,
      });
    });
  }

  render() {
    const { categories } = this.props;
    return (
      <aside>
        <ol>
          { categories.map(({ id, name }) => (
            <li data-testid="category" key={ id }><button type="button">{ name }</button></li>
          )) }
        </ol>
      </aside>
    );
  }
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoryList;
