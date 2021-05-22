import React from 'react';
import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';

class SearchContent extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //   };
  // }

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
      <div data-testid="home-initial-message">
        <input
          type="text"
          name="search"
          placeholder="buscar"
          data-testid="query-input"
          onChange={ this.handleChange }
          autoComplete="off"
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleBtnClick }
          icon="search"
        >
          <FcSearch />
        </button>
        <h3>{messange}</h3>
      </div>
    );
  }
}

SearchContent.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchContent;
