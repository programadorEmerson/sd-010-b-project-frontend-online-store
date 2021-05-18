import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlfinal: 'font-awesome.min.css',
    };
  }

  render() {
    const { onChange, onClick, inputfilter, categoryfilter } = this.props;
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
            className="input-search"
            type="text"
            placeholder="Procurar &#xF002;"
            autoComplete="off"
            onChange={ onChange }
            data-testid="query-input"
          />
          <button
            className="btn-search"
            data-testid="query-button"
            type="submit"
            onClick={ onClick }
            disabled={ inputfilter === '' && categoryfilter === null }
          >
            <span role="img" aria-label="lupa"> &#128269;</span>
          </button>
        </header>
      </div>
    );
  }
}

SearchArea.defaultProps = {
  categoryfilter: null,
};

SearchArea.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  inputfilter: PropTypes.string.isRequired,
  categoryfilter: PropTypes.string,
};

export default SearchArea;
