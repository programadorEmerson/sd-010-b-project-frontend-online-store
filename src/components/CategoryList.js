import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

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
  const { onClick } = this.props;
  return (
    <div>
      { categories.map((category) => (
        <div key={ category.id }>
          <Link to="/">
            <label htmlFor={ category.id }>
              <input
                onClick={ onClick }
                data-testid="category"
                type="radio"
                id={ category.id }
              />
              { category.name }
            </label>
          </Link>
        </div>
      )) }
    </div>
  );
}
}

CategoryList.propTypes = {
  onClick: PropTypes.func,
};

CategoryList.defaultProps = {
  onClick: () => {},
};

export default CategoryList;
