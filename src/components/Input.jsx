import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlfinal: 'font-awesome.min.css',
    };
  }

  render() {
    const { searchText, onSearchTextChange, onClickSearch } = this.props;
    const { urlfinal } = this.state;
    return (
      <div className="header-separator">
        <header className="submit-line">
          <link
            rel="stylesheet"
            href={ `//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/${urlfinal}` }
            type="text/css"
          />
          <input
            data-testid="query-input"
            className="input-search"
            type="text"
            placeholder="Pesquisar &#xF002;"
            autoComplete="off"
            name="searchText"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
          <button
            data-testid="query-button"
            className="Btn-search"
            type="submit"
            onClick={ onClickSearch }
          >
            Procurar
          </button>
        </header>
      </div>
    );
  }
}

Input.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onClickSearch: PropTypes.func.isRequired,
};

export default Input;
