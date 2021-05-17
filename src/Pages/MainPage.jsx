import React, { Component } from 'react';

import CartButton from '../Components/CartButton';
import ProductsList from '../Components/ProductsList';
import ListCategories from '../Components/ListCategories';

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      doQuery: false,
      categoryID: '',
    };
  }

  handleCategoryClick = (categoryID) => {
    this.setState({
      categoryID,
      doQuery: true,
    });
  }

  searchWords = (event) => {
    const { value } = event.target;
    this.setState({ query: value });
  }

  renderSearchBar = () => {
    const { query } = this.state;

    return (
      <div>
        <input
          type="text"
          id="search-bar"
          value={ query }
          data-testid="query-input"
          onChange={ (event) => this.searchWords(event) }
          onKeyUp={ (event) => {
            if (event.key === 'Enter') this.setState({ doQuery: true });
          } }
        />
        <button
          type="button"
          onClick={ () => this.setState({ doQuery: true }) }
          data-testid="query-button"
        >
          Search
        </button>
      </div>
    );
  }

  renderInitialPhrase = () => (
    <p data-testid="home-initial-message">
      Digite algum termo de pesquisa ou escolha uma categoria.
    </p>
  );

  render() {
    const { query, doQuery, categoryID } = this.state;

    return (
      <main>
        <ListCategories handleCategoryClick={ this.handleCategoryClick } />
        <section>
          <CartButton />
          { this.renderInitialPhrase() }
          { this.renderSearchBar() }
          { doQuery ? <ProductsList query={ query } categoryID={ categoryID } />
            : <p>Does not render ProductList</p>}
        </section>
      </main>
    );
  }
}

export default MainPage;
