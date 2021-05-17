import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class ListCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.handleListCategories();
  }

  handleListCategories = async () => {
    const cat = await getCategories();
    this.setState({
      categories: cat,
    });
  }

  renderCategory = () => {
    const { categories } = this.state;
    const { handleCategoryClick } = this.props;

    return (
      categories.map(({ name, id }) => (
        <button
          type="button"
          key={ id }
          data-testid="category"
          onClick={ () => handleCategoryClick(id) }
        >
          { name }
        </button>
      ))
    );
  }

  render() {
    return (
      categories.map((category) => (
        <li key={ category.id } data-testid="category">
          { category.name }
        </li>
      ))
    );
  }

  render() {
    return (
      <div>
        <ul>
          { this.renderCategory() }
        </ul>
      </div>
    );
  }
}
ListCategories.propTypes = {
  handleCategoryClick: PropTypes.func.isRequired,
};

export default ListCategories;
