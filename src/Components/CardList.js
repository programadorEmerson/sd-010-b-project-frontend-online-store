import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

export default class CardList extends Component {
  constructor() {
    super();

    this.state = {
      lista: '',
      loading: true,
    };
  }

  componentDidUpdate() {
    const { list } = this.props;
    api.getProductsFromCategoryAndQuery(list).then((result) => {
      this.setState({
        lista: result,
        loading: false });
    });
  }

  renderItem(lista, loading) {
    if (loading === true) {
      return <h3>Carregando...</h3>;
    }
    return lista.map(({ id, title, thumbnail, price }) => (
      <section key={ id } data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <span>{ title }</span>
        <p>{ price }</p>
      </section>
    ));
  }

  render() {
    const { loading, lista } = this.state;
    return (
      <div>
        { lista === '' ? <h3>Nenhum produto foi encontrado</h3>
          : this.renderItem(lista, loading) }
      </div>
    );
  }
}

CardList.propTypes = {
  list: PropTypes.string,
};

CardList.defaultProps = {
  list: '',
};
