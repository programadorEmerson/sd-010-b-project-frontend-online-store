import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="/pagecart" data-testid="shopping-cart-button">Page Cart</Link>
      </div>
    );
  }
}

export default Homepage;
