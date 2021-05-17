import React from 'react';
import Button from './Button';

class SeachBar extends React.Component {
  render() {
    return (
      <section>
        <label htmlFor="input">
          <input type="text" id="input" class="search-bar"/>
        </label>
        <Button />
        <h1
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      </section>
    );
  }
}

export default SeachBar;
