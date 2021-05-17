import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

export default class Categories extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getCategories().then((categories) => {
      this.setState({ categories });
    });
  }

  render() {
    const { categories } = this.state;
    const { funct } = this.props;
    return (
      <div>
        <aside>
          { categories.map(({ id, name }) => (
            <label
              htmlFor="category"
              key={ id }
            >
              { name }
              <input
                name="category"
                type="radio"
                id={ id }
                data-testid="category"
                onChange={ funct }
                value={ name }
              />
            </label>
          )) }
          <button
            type="button"
          >
            Filtrar
          </button>
        </aside>
      </div>
    );
  }
}

Categories.propTypes = {
  funct: PropTypes.func.isRequired,
};
