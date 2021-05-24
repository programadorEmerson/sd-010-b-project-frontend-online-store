import React from 'react';
import PropTypes from 'prop-types';
import './categories.css';

class Categories extends React.Component {
  render() {
    const { loading, categories, checked } = this.props;
    return (
      <div>
        <ul>
          {
            loading ? <p>Carregando</p>
              : categories.map((result) => (
                <li
                  key={ result.id }
                >
                  <label htmlFor={ result.name }>
                    <input
                      data-testid="category"
                      type="radio"
                      name="category"
                      id={ result.id }
                      value={ result.name }
                      onChange={ checked }
                    />
                    {result.name}
                  </label>
                </li>
              ))
          }
        </ul>
      </div>
    );
  }
}

Categories.propTypes = {
  checked: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  categories: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    map: PropTypes.string,
  }).isRequired,
};

export default Categories;
