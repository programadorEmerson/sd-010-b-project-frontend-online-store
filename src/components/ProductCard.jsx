import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  constructor(props) {
    super(props);
    const { results } = this.props;
    this.state = {
      results,
    };

    this.showResults = this.showResults.bind(this);
  }

  showResults() {
    const { results } = this.state;
    const card = results.map((result) => {
      const { title, thumbnail, price } = result;
      return (
        <div key={ title } data-testid="product">
          <h4>{ title }</h4>
          <img
            src={ thumbnail }
            width="150"
            alt={ title }
            data-testid="product"
          />
          <span data-testid="product">{ price }</span>
        </div>
      );
    });
    return card;
  }

  noResult() {
    return (
      <span>Nenhum produto foi encontrado</span>
    );
  }

  render() {
    const { results } = this.state;
    return (
      results.length === 0 ? this.noResult() : this.showResults()
    );
  }
}

ProductCard.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductCard;
