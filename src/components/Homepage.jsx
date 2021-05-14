import React from 'react';

class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
    };
  }

  render() {
    const { searchQuery } = this.state;
    return (
      <div>
        <input
          type="text"
          value={ searchQuery }
          onChange={ (e) => this.setState({ searchQuery: e.target.value }) }
        />
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
      </div>
    );
  }
}

export default Homepage;
