import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
    };
    this.fetchItem = this.fetchItem.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchItem(id);
  }

  async fetchItem(id) {
    const item = await fetch(`https://api.mercadolibre.com/items/${id}`).then((res) => res.json());
    this.setState({ item });
  }

  render() {
    const { item } = this.state;
    return (
      <>
        <div>
          Produto:
          {' '}
          <strong data-testid="product-detail-name">{item.title}</strong>
        </div>
        <div>
          Preço:
          {' '}
          <strong>{item.price}</strong>
        </div>
        <img src={ item.thumbnail } alt="imagem do produto" />
      </>
    );
  }
}
ItemProduct.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string }),
  }).isRequired,
};
