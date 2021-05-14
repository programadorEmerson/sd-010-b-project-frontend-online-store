import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <section>
        <input type="search" />
        <Link to="/cart"><CartImage /></Link>
        <h2
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </section>
    );
  }
}

export default Search;
