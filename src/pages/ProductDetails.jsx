import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import { FormAvaliation } from '../components/ProductAvaliation';

export class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      product: '',
    };

    this.requestProduct = this.requestProduct.bind(this);
  }

  componentDidMount() {
    this.requestProduct();
  }

  async requestProduct() {
    const { match: { params: { id } } } = this.props;
    // console.log(this.props);
    const getProduct = await getProductsFromCategoryAndQuery('', id);
    const { results } = getProduct;
    // console.log(getProduct);
    // console.log(results);
    const foundProduct = results.find((element) => element.title === id);
    // console.log(foundProduct);

    this.setState({
      product: foundProduct,
    });
  }

  render() {
    const { product } = this.state;
    // console.log(this.state);
    // console.log(product);
    const { title, thumbnail, price } = product;
    const { addItemToCart, cart } = this.props;
    return (
      <div key={ title } data-testid="shopping-cart-product-name">
        <h1 data-testid="product-detail-name">{title}</h1>
        <p>{`R$${price}`}</p>
        <img src={ thumbnail } alt={ title } />
        {/* <p>Especificações:</p>
        <ul>
          {attributes.map((attributes) => (
            <li key={ attributes.id }>
              {`${attributes.name}: ${attributes.value_name}`}
            </li>))}
        </ul> */}
        <div>
          <p>
            Quantidade:
            {' '}
            <span data-testid="shopping-cart-product-quantity">{cart.length}</span>
            {console.log(cart.length)}
          </p>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => addItemToCart(product) }
            cart={ cart }
          >
            Adicionar ao Carrinho de Compras
          </button>
          <button
            type="button"
            data-testid="shopping-cart-button"
          >
            <Link to="/shopping-cart">Carrinho</Link>
          </button>
        </div>
        {/* <Link to="/shopping-cart">Adicionar ao Carrinho de Compras</Link> */}
        <FormAvaliation />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  addItemToCart: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductDetails;
