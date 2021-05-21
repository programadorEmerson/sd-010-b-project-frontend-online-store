import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  constructor(props) {
    super(props);

    /* if (localStorage.getItem('id') === undefined) {
      localStorage.setItem('id', []);
    } */

    localStorage.setItem('id', JSON.stringify([]));

    const { results } = this.props;

    this.state = {
      results,
    };

    this.clickCart = this.clickCart.bind(this);
    this.showResults = this.showResults.bind(this);
  }

  showResults() {
    const { results } = this.state;
    const card = results.map((result) => {
      const { title, thumbnail, price, id } = result;
      return (
        <div key={ id } data-testid="product">
          <h4>{ title }</h4>
          <Link
            to={ `/product/${id}` }
            onClick={ () => this.saveDetails(result) }
            data-testid="product-detail-link"
          >
            <img
              src={ thumbnail }
              width="150"
              alt={ title }
            />
          </Link>
          {/*  a função abaixo dispara a ação do frete gratis  */}
          { this.haveFreeShiping(result) }
          <p>{ price }</p>
          <button
            type="button"
            onClick={ () => this.clickCart(result) }
            data-testid="product-add-to-cart"
          >
            Add
          </button>
        </div>
      );
    });
    return card;
  }

  // requisito 15
  haveFreeShiping({ shipping: { free_shipping: freeShipping } }) {
    // botei um apelido no free_shipping pois o lint reclamava que não estava em camelCase
    const freteGratis = freeShipping;
    if (freteGratis === true) {
      return (<p data-testid="free-shipping">Frete gratis incluso</p>);
    }
    // eu tentei por um else que retorna 'não tem frete gratis', mas o teste não gostou...
  }

  saveDetails(result) {
    localStorage.setItem('itemDetails', JSON.stringify(result));
  }

  async clickCart(itemDetails) {
    const prevLS = JSON.parse(localStorage.getItem('id'));
    prevLS.push(itemDetails);
    localStorage.setItem('id', JSON.stringify(prevLS));
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
