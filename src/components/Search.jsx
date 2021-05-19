import React, { Component } from 'react';
import '../Style/Search.css';

class Search extends Component {
  constructor() {
    super();
    this.changeState = this.changeState.bind(this);
    this.state = {
      filterText: '',
    };
  }

  valorDoState = () => {
    const { filterText } = this.state
    this.props.filterTextFunc(filterText);
  }

  changeState(event) {
    const { value } = event.target
    this.setState({
      filterText: value,
    });
  }

  render() {
    return (
      <div>
        <h4 className='searchTitle' data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
        <form>
          <input onChange={ this.changeState } type="text" />
          <button className='searchButton'
          onClick={ this.valorDoState } type="button">Buscar</button>
        </form>
      </div>
    )
  }
}

export default Search;
