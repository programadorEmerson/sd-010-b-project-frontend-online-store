import React from 'react';
import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';

class SearchContent extends React.Component {
  handleChange = ({ target: { value } }) => {
    const { onChange } = this.props;
    onChange(value);
  }

  handleBtnClick = async () => {
    const { onClick } = this.props;
    await onClick();
  }

  render() {
    const messange = 'Digite algum termo de pesquisa ou escolha uma categoria.';
    return (
      <section data-testid="home-initial-message" className="search-content">
        <div className="input-plus-btn">
          <input
            id="search-input"
            type="text"
            name="search"
            placeholder="buscar"
            data-testid="query-input"
            onChange={ this.handleChange }
            autoComplete="off"
          />
          <button
            id="search-btn"
            type="button"
            data-testid="query-button"
            onClick={ this.handleBtnClick }
            icon="search"
          >
            <FcSearch />
          </button>
        </div>
        <p>{messange}</p>
      </section>
    );
  }
}

SearchContent.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchContent;
