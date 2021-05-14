import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <li />
        {/* deixar um li criado só p lembrar d fazer uma lista dinâmica */}
        <label htmlFor="searchBar" data-testid="home-initial-message">
          <input type="text" name="searchBar" />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
      </div>
    );
  }
}

export default Home;
