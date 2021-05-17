import React, { Component } from 'react';
// import Categories from './Categories';
import AllProducts from './AllProducts';

class Search extends Component {
  constructor() {
    super();

    this.SearchOnChange = this.SearchOnChange.bind(this);

    this.state = {
      filterText: '',
    };
  }

  SearchOnChange(event) {
    const { value } = event.target;
    this.setState({
      filterText: value,
    });
  }

  render() {
    const { filterText } = this.state;

    return (
      <div>
        <form>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <input value={ filterText } onChange={ this.SearchOnChange } type="text" />
          <button onClick={ this.onClick } type="button">Buscar</button>
        </form>
        <div>
          {/* <Categories /> */}
        </div>
        <AllProducts
          // filterText={ filterText }
        />

      </div>
    );
  }
}

export default Search;
