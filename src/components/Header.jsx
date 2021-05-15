import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    }
  }

  setQuery = ({ target: { value } }) => {
    this.setState({ query: value })
  }

  render() {
    const { getProducts } = this.props;
    return (
      <section>
        <input data-testid="query-input" onChange={ this.setQuery } />
        <button data-testid="query-button" onClick={ getProducts }>Buscar</button>
      </section>
    );
  }
}

export default Header;
