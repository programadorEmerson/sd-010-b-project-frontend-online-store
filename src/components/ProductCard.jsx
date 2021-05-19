import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  constructor(props) {
    super(props);
    const { results } = this.props;
    this.state = {
      results,
      cart: [],
      shouldRedirect: false,
    };
    this.clickCart = this.clickCart.bind(this);
    this.showResults = this.showResults.bind(this);
  }

  showResults() {
    const { results, shouldRedirect } = this.state;
    const card = results.map((result) => {
      const { title, thumbnail, price, id } = result;
      return (
        <div key={ id } data-testid="product">
          <h4>{ title }</h4>
          <Link to={ `/product/${id}` } data-testid="product-detail-link">
            <img
              src={ thumbnail }
              width="150"
              alt={ title }
            />
          </Link>
          <span>{ price }</span>
          <span>{ id }</span>
          <button
            type="button"
            onClick={ this.clickCart }
            data-testid="product-add-to-cart"
          >
            Add
          </button>
        </div>
      );
    });
    return card;
  }

  async clickCart({ target }) {
    const element = target.previousSibling.innerText;
    localStorage.id = element;
    /* const dad = target.previousSibling.innerText;
    const { cart } = this.state;
    this.setState({
      cart: [...cart, dad],
      shouldRedirect: true,
    }); */
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
      // shouldRedirect && this.shouldRedirect()
    );
  }
}

ProductCard.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductCard;
