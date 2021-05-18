import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Loading from '../components/Loading';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Details extends Component {
  constructor() {
    super();
    this.state = {
      thumbnail: '',
      title: '',
      price: 0,
      isLoading: true,
    };
  }

  componentDidMount() {
    getCategories();
    const { match: { params: { query } } } = this.props;
    getProductsFromCategoryAndQuery('', query)
      .then((product) => this.setState(
        {
          isLoading: false,
          thumbnail: product,
        },
      ));
  }

  render() {
    const { title, price, thumbnail, isLoading } = this.state;
    if (isLoading) return <Loading />;

    return (
      <section>
        <img src={ `Imagem/Produto: ${thumbnail}` } alt={ `Texto da Imagem: ${title}` } />
        <section>
          <p>{ `Título: ${title}` }</p>
          <p>{ `Preço: R$${price}` }</p>
          <Link to="/">Voltar</Link>
        </section>
      </section>
    );
  }
}

Details.propTypes = {
  match: PropTypes.object,
  id: PropTypes.string,
}.isRequired;

export default Details;
