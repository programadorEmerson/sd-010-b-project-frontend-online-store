import React from 'react';
import Button from './Button';
import SearchButton from './SearchButton';
import * as api from '../services/api';
import SearchList from './SearchList';

class SeachBar extends React.Component {
  constructor() {
    super();

    this.state = {
      search: '',
      searchText: [],
      searchNotFound: false,
    };
  }

  search = () => {
    const { search } = this.state;
    api.getProductsFromCategoryAndQuery(undefined, search).then(({ results }) => {
      this.setState({
        searchText: results,
        searchNotFound: results.length === 0,
      });
    });
  }

  textChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchText, searchNotFound } = this.state;
    return (
      <div>
        <section>
          <label htmlFor="input">
            <input name="search" data-testid="query-input" type="text" id="input" onChange={ this.textChange } />
          </label>
          <SearchButton search={ this.search } />
          <Button />
          <h1
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
        </section>
        <ol>
          {searchNotFound && <div>Nenhum produto foi encontrado</div>}
          {searchText.map((item) => (<SearchList key={ item.id } item={ item } />))}
        </ol>
      </div>
    );
  }
}

export default SeachBar;
