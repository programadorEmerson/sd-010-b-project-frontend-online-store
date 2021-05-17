import React from 'react';
import Button from './Button';
import SearchButton from './SearchButton';
import * as api from '../services/api';
import SearchList from './SearchList';

class SeachBar extends React.Component {
  constructor() {
    super();

    this.search = this.search.bind(this);

    this.state = {
      // search: '',
      search: 'xablauxablauxablau',
    };
  }

  search() {
    const { search } = this.state;
    const retornoApi = api.getProductsFromQuery(search);
    console.log(retornoApi);
    console.log(retornoApi.length);
    if (retornoApi.length === 0) {
      return (<div>erro</div>);
    }
    return (retornoApi.map(({ id, title }) => (<li key={ id }>{ title }</li>)));
  }

  render() {
    return (
      <div>
        <section>
          <label htmlFor="input">
            <input data-testid="query-input" type="text" id="input" />
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
          { this.search }
        </ol>
      </div>
    );
  }
}

export default SeachBar;
