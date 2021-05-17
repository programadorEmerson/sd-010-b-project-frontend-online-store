import React from 'react';
import { getCategories } from '../services/api';
// import PropTypes from 'prop-types';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    const categoryList = await getCategories();
    this.addCategories(categoryList);
  }

addCategories = (categories) => {
  this.setState({ categories });
}

render() {
  const { categories } = this.state;
  return (
    <div>
      { categories.map((category) => (
        <div key={ category.id }>
          <label htmlFor={ category.id }>
            <input
              data-testid="category"
              type="radio"
              id={ category.id }
            />
            { category.name }
          </label>
        </div>
      )) }
    </div>
  );
}
}

export default CategoryList;
