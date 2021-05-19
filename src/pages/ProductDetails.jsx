import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { GrCart } from 'react-icons/gr';

class ProductDetaills extends Component {
  constructor(props) {
    super(props);
    const {
      match: {
        params: { id },
      },
    } = this.props;
    this.state = {
      product: [],
      productId: id,
      totalItem: 0,
    };
  }

  componentDidMount() {
    this.requestDetails();
    this.amount();
  }

  componentDidUpdate(previusValueProps) {
    if (previusValueProps !== this.props) {
      this.amount();
    }
  }

  amount = () => {
    const { cartItems } = this.props;
    const number = 0;
    if (cartItems.length >= 1) {
      this.setState({
        totalItem: cartItems.reduce(
          (acc, value) => (acc + value.countItems),
          number,
        ),
      });
    }
    console.log(cartItems);
  }

  requestDetails = async () => {
    const { productId } = this.state;
    const returnRequest = await fetch(
      `https://api.mercadolibre.com/items/${productId}`,
    );
    const returnJson = await returnRequest.json();
    this.setState({
      product: returnJson,
    });
  };

  render() {
    const { product, totalItem } = this.state;
    const { title, thumbnail, price, warranty } = product;
    const { addCart } = this.props;
    return (
      <div>
        <div data-testid="shopping-cart-size">{ totalItem }</div>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
          className="shopping-cart-button"
        >
          <GrCart />

        </Link>
        <h3>Especificações Técnicas</h3>
        <h3 data-testid="product-detail-name">{title}</h3>
        <img src={ thumbnail } alt={ title } />
        <p>
          R$
          {price}
        </p>
        {/* { freeShipping ? <p>Frete Grátis</p> : null} */}
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => addCart(product) }
        >
          Adicionar ao carrinho
        </button>
        {/* <p>Especificações:</p> */}
        <p>{warranty}</p>
        <form action="GET">
          <label htmlFor="product_rating">
            <input
              id="product_rating"
              type="number"
              step={ 1 }
              min={ 0 }
              max={ 5 }
              required
            />
          </label>
          <div>
            <label htmlFor="product_comments">
              <textarea
                id="product_comments"
                data-testid="product-detail-evaluation"
                cols="20"
              />
            </label>
          </div>
        </form>
        <Link to="/">Voltar para a tela inicial</Link>
      </div>
    );
  }
}

ProductDetaills.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
  }).isRequired,
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    warranty: PropTypes.string,
    thumbnail: PropTypes.string,
  }),
  onClick: PropTypes.func.isRequired,
}.isRequired;

export default ProductDetaills;
