import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Style/Search.css';

class Search extends Component {
  constructor() {
    super();
    this.changeState = this.changeState.bind(this);
    this.state = {
      product: '',
    };
  }

  stateValue = () => {
    const { id, product } = this.state;
    const { buscafunc } = this.props;
    buscafunc(id, product);
  }

  changeState(event) {
    const { value } = event.target;
    this.setState({
      product: value,
    });
  }

  render() {
    return (
      <div>
        <h4 className="searchTitle" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
        <form>
          <input data-testid="query-input" onChange={ this.changeState } type="text" />
          <button
            data-testid="query-button"
            className="searchButton"
            onClick={ this.stateValue }
            type="button"
          >
            Buscar
          </button>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  buscafunc: PropTypes.func,
}.isRequired;

export default Search;
