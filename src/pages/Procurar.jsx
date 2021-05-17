import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Procurar extends Component {
  render() {
    const { query, changeHandle } = this.props;
    return (
      <div>
        <input
          value={ query }
          data-testid="query-input"
          type="search"
          onChange={ changeHandle }
          name="query"
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handlerClick }
        >
          Buscar
        </button>
      </div>
    );
  }
}

Procurar.propTypes = {
  query: PropTypes.string.isRequired,
  changeHandle: PropTypes.func.isRequired,
};
