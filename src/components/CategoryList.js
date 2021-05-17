import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.getApi();
  }

  getApi = async () => {
    const api = await getCategories();
    this.setState({
      categories: api,
    });
  }

  render() {
    const { categories } = this.state;
    const { onClick } = this.props;
    const section = (
      <section>
        <ul>
          Categorias:
          { categories.map(({ id, name }) => (
            <li key={ id }>
              <button
                data-testid="category"
                onClick={ onClick(id) }
                type="button"
              >
                {name}
              </button>
            </li>))}
        </ul>
      </section>);
    return (
      categories.length === 0 ? null : section
    );
  }
}

CategoryList.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CategoryList;
