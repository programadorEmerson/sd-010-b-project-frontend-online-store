import React from 'react';

class ProductCard extends React.Component {
  render() {
    const { title, price,thumbnail } = this.props;
    return (
      <section>
        <header>
          <h1>{ title }</h1>
        </header>
        <main>
          <img src={ thumbnail } alt={ title } />
        </main>
        <footer>
          <h2>R$ { price }</h2>
        </footer>
      </section>
    );
  }
}

export default ProductCard;
