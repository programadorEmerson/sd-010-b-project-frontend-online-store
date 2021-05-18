import React from 'react';
import PropTypes from 'prop-types';
import ListProducts from './ListProducts';

class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
    };
  }

  getSearchBox= ({ target }) => {
    this.setState({
      inputText: target.value,
    });
  }

  render() {
    const { onFetchProducts, listProducts } = this.props;
    const { inputText } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="searchBox">
            <input
              type="text"
              data-testid="query-input"
              name="searchBox"
              onChange={ this.getSearchBox }
              id="searchBox"
            />
          </label>
          <button
            type="button"
            value={ inputText }
            data-testid="query-button"
            onClick={ onFetchProducts }
          >
            Lupa
          </button>
        </form>
        <ListProducts listProducts={ listProducts } />
      </div>
    );
  }
}

SearchBox.propTypes = {
  onFetchProducts: PropTypes.func.isRequired,
  listProducts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default SearchBox;
