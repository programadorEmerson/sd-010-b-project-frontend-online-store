import React, { Component } from 'react';
// import Categories from './Categories';
import AllProducts from './AllProducts';

class Search extends Component {
  constructor() {
    super();

    this.SearchOnChange = this.SearchOnChange.bind(this);
    this.qualquercoisa = this.qualquercoisa.bind(this);

    this.state = {
      filterText: '',
      vaipassar: '',
    };
  }

  SearchOnChange(event) {
    const { value } = event.target;
    this.setState({
      filterText: value,
    });
  }

  qualquercoisa() {
    const { filterText } = this.state;
    this.setState({
      vaipassar: filterText,
    });
  }

  render() {
    const { vaipassar, filterText } = this.state;

    return (
      <div>
        <form>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <input value={ filterText } onChange={ this.SearchOnChange } type="text" />
          <button onClick={ this.qualquercoisa } type="button">Buscar</button>
        </form>
        <div>
          {/* <Categories /> */}
        </div>
        <AllProducts
          vaipassar={ vaipassar }
          // filterText={ filterText }
        />

      </div>
    );
  }
}

export default Search;
