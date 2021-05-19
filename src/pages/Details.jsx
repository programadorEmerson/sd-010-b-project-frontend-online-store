import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getProductsFromCategoryAndQuery } from '../services/api';
import AddToCart from '../components/AddToCart';

class Details extends Component {
  constructor() {
    super();
    this.state = {
      product: { attributes: [] },
    };
  }

  componentDidMount() {
    const { match: { params: { id, title } } } = this.props;
    getProductsFromCategoryAndQuery(null, title)
      .then((products) => {
        const finalProduct = products.results.find((product) => id === product.id);
        this.setState(
          {
            product: finalProduct,
          },
        );
      });
  }

  render() {
    const { product: { title, price, thumbnail, attributes }, product } = this.state;
    return (
      <section>
        <section>
          <img src={ thumbnail } alt={ title } />
          <h2 data-testid="product-detail-name">{`${title} - R$ ${price},00`}</h2>
          <h3>Especificações Técnicas</h3>
          <ul>
            {attributes.map((atribut) => (
              <li
                key={ atribut.id }
              >
                {`${atribut.name} - ${atribut.value_name}`}
              </li>))}
          </ul>
          <section>
            <AddToCart data-testid="product-detail-add-to-cart" product={ product } />
          </section>
          <Link to="/">Voltar</Link>
        </section>
      </section>
    );
  }
}

Details.propTypes = {
  match: PropTypes.object,
  id: PropTypes.string.isRequired,
}.isRequired;

export default Details;
