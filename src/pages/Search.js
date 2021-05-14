import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <section>
        <input type="search" />
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
