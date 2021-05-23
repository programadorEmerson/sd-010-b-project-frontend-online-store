import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductFromId } from '../services/api2';
import Loading from './Loading';
import CartButton from './CartButton';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);

    this.state = {
      product: [],
      load: true,
    };
  }

  componentDidMount() {
    // const { id } = this.props.match.params;
    const { match } = this.props;
    const { id } = match.params;

    getProductFromId(id).then((response) => {
      this.setState({
        product: response,
        load: false,
      });
    });
  }

  addToCart() {
    const { product } = this.state;

    if (localStorage.getItem('keyTemp') === null) {
      const products = [product];

      const teste = JSON.stringify(products);
      localStorage.setItem('keyTemp', teste);
    } else {
      const jsonKeyTemp = localStorage.getItem('keyTemp');
      const keyTemp = JSON.parse(jsonKeyTemp);

      keyTemp.push(product);

      const teste = JSON.stringify(keyTemp);
      localStorage.setItem('keyTemp', teste);
    }
  }

  render() {
    const { product: { title, price, thumbnail, attributes } } = this.state;
    const { load } = this.state;
    if (load) return <Loading />;

    return (
      <div>
        <Link to="/">Voltar</Link>
        <h1 data-testid="product-detail-name">
          {`${title} - R$-${price}`}
        </h1>
        <img className="img" src={ thumbnail } alt={ title } />
        <p>Especificações Técnicas</p>
        <ul>
          { attributes.map(({ name, value_name: valueName }, key) => {
            if (valueName !== 'undefined') {
              return <li key={ key }>{`${name}: ${valueName}`}</li>;
            }
            return console.log('Tá aí o return, Sr. lint');
          })}
        </ul>
        <button
          data-testid="product-detail-add-to-cart"
          onClick={ this.addToCart }
          type="button"
        >
          Adicionar ao carrinho
        </button>
        <CartButton />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  id: PropTypes.number.isRequired,
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};

export default ProductDetails;
