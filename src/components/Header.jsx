import React from 'react';

class Header extends React.Component {
  render() {
    const { onTyped, saveProducts } = this.props;
    return (
      <section>
        <input data-testid="query-input" onChange={ (event) => onTyped(event) } />
        <button data-testid="query-button" onClick={ saveProducts }>Buscar</button>
      </section>
    );
  }
}

export default Header;
