import React, { Component } from 'react';
import Categories from './Categories';
import AllProducts from './AllProducts';


class Search extends Component {
  constructor() {
    super()
    this.SearchOnChange = this.SearchOnChange.bind(this)
    this.state = {
      filterText:''
    }
  }

  SearchOnChange(event) {
      const { value } = event.target
    this.setState({
      filterText: value,
      filter: false,
    })

  }

  render() {
    const { filterText } = this.state
    return (
      <div>
        <form>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>

          
          {/* Trabalhando aqui */}

          <input 
          onClick={ this.SearchOnChange } 
          type="text" 
          value={ filterText } 
          />
          <button>
            Search
          </button>

           {/* ate aqui */}

        </form>
        <div>
          <Categories />
        </div>
        <AllProducts 
        filterText={ filterText } 
        />

      </div>
    );
  }
}

export default Search;
