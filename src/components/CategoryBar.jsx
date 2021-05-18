import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getCategories } from '../services/api';

class CategoryBar extends Component {
  constructor() {
    super();
    this.state = {
      categorieslist: [],
    };
  }

  componentDidMount() {
    getCategories().then((categories) => this.setState({
      categorieslist: categories,
    }));
  }

  render() {
    const { onChange } = this.props;
    const { categorieslist } = this.state;
    return (
      <div>
        <h1>Categorias</h1>
        <form>
          {categorieslist.map(({ id, name }) => (
            <label htmlFor={ id } className="categories-labels" key={ id }>
              <input
                key={ id }
                data-testid="category"
                type="radio"
                name="category"
                id={ id }
                value={ name }
                onChange={ onChange }
              />
              { name }
            </label>
          ))}
        </form>
      </div>
    );
  }
}

CategoryBar.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default CategoryBar;
