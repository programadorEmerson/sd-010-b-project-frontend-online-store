import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Loading from '../components/Loading';
import { getProductsFromCategoryAndQuery } from '../services/api';

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
    const { match: { params: { query } } } = this.props;
    getProductsFromCategoryAndQuery(query)
      .then(({ results }) => this.setState(
        console.log(results),
        {
          thumbnail: results.thumbnail,
          title: results.title,
          price: results.price,
          isLoading: false,
        },
      ));
  }

  render() {
    const { title, price, thumbnail, isLoading } = this.state;
    if (isLoading) return <Loading />;

    return (
      <section>
        <img src={ thumbnail } alt={ title } />
        <section>
          <p>{ title }</p>
          <p>{ price }</p>
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
