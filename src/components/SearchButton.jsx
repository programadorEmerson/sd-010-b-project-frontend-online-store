import React from 'react';
import PropTypes from 'prop-types';

class SearchButton extends React.Component {
  render() {
    const { search } = this.props;
    return (
      <button
        onClick={ search }
        data-testid="query-button"
        type="button"
      >
        Pesquisa
      </button>
    );
  }
}

SearchButton.propTypes = {
  search: PropTypes.func.isRequired,
};

export default SearchButton;
