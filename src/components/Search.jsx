import React, { Component } from 'react';

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
        <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <form>
          <input onChange={ this.changeState } type="text" />
          <button onClick={ this.valorDoState } type="button">Buscar</button>
        </form>
      </div>
    )
  }
}

export default Search;
