import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Info extends React.Component {
  constructor() {
    super();

    this.state = {
      lista: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct = () => {
    const { match: { params: { Name } } } = this.props;
    fetch(`https://api.mercadolibre.com//items?ids=${Name}`).then((object) => object.json()).then((result) => this.setState(
      { lista: result, loading: true },
    ));
  }

  firstMap = (lista, funt) => (
    lista.map(({ body: { thumbnail, title, id, attributes } }) => (
      <div key={ id }>
        <img src={ thumbnail } alt={ title } />
        <h3 data-testid="product-detail-name">{ title }</h3>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => funt(id, title) }
        >
          Colocar no carrinho
        </button>
        { attributes.map((item) => <li key={ item.id }>{ item.name }</li>) }
      </div>
    )))

  render() {
    const { funt } = this.props;
    const { lista, loading } = this.state;
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/checkout">Compra</Link>
        { loading && this.firstMap(lista, funt) }
      </div>
    );
  }
}

Info.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      Name: PropTypes.string,
    }),
  }),
  funt: PropTypes.func,
}.isRequired;

Info.defaultProps = {
  match: {
    params: {
      Name: '',
    },
  },
};
