import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      selectedCategories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const categories = await api.getCategories();
    this.setState({
      categories,
    });
  }

  selectedCategories(event) {
    const category = event.target.name;
    const { handleCategory } = this.props;
    const { selectedCategories } = this.state;
    this.setState({
      selectedCategories: [...selectedCategories, category],
    }, () => {
      const { selectedCategories: newCategories } = this.state;
      handleCategory(newCategories);
      console.log(`Selected Categories: ${newCategories}`);
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <section>
        {categories.map(((category) => (
          <label
            key={ category.id }
            data-testid="category"
            htmlFor="idCategory"
          >
            <input
              type="checkbox"
              id="idCategory"
              key={ category.id }
              name={ category.id }
              value={ category.id }
              onChange={ (event) => this.selectedCategories(event) }
            />
            {category.name}
          </label>)))}
      </section>
    );
  }
}

Categories.propTypes = {
  handleCategory: PropTypes.func.isRequired,
};

export default Categories;
