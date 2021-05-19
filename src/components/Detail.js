import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Img from '../images/cart.png';

class Detail extends React.Component {
  constructor() {
    super();
    this.state = {
      produto: {},
      loading: true,
      cartState: [],
    };

    this.recuperarProduto = this.recuperarProduto.bind(this);
    this.getProductsFromId = this.getProductsFromId.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.retrieveStorageMaybe = this.retrieveStorageMaybe.bind(this);
  }

  componentDidMount() {
    this.recuperarProduto();
    this.retrieveStorageMaybe();
  }

  handleAddToCart(cardProps) {
    this.setState((oldState) => ({
      cartState: [
        ...oldState.cartState, { cardProps },
      ],
    }),
    async () => {
      const { cartState } = this.state;
      localStorage.setItem('cartState', JSON.stringify(cartState));
    });
  }

  async getProductsFromId(productId) {
    const URL = `https://api.mercadolibre.com/items/${productId}`;
    return fetch(URL)
      .then((result) => result.json())
      .catch((error) => { console.log(`Erro na requisição: ${error}`); });
  }

  addToCart() {
    const { produto: { title, thumbnail, price, id } } = this.state;
    const cartItem = {
      title,
      thumbnail,
      price,
      id,
    };
    this.handleAddToCart(cartItem);
  }

  retrieveStorageMaybe() {
    const storageProducts = JSON.parse(localStorage.getItem('cartState'));
    if (storageProducts) {
      this.setState({
        cartState: storageProducts,
      });
    }
  }

  recuperarProduto() {
    const { match: { params: { id } } } = this.props;
    this.getProductsFromId(id).then((searchProduto) => {
      this.setState({ produto: searchProduto, loading: false });
    });
  }

  render() {
    const { produto, loading } = this.state;
    return (
      <div>
        { !loading
          && (
            <div>
              <img src={ produto.thumbnail } alt={ produto.title } />
              <span data-testid="product-detail-name">{ produto.title }</span>
              <span>{ produto.price }</span>
              <ol>
                {
                  produto.attributes.map((atributos) => (
                    <li key={ atributos.id }>
                      { `${atributos.name}: ${atributos.value_name}` }
                    </li>
                  ))
                }
              </ol>
              <button
                type="button"
                data-testid="product-detail-add-to-cart"
                onClick={ this.addToCart }
              >
                Adicionar
              </button>
              <Link to="/cart">
                <button type="button" className="button_cart">
                  <img
                    data-testid="shopping-cart-button"
                    src={ Img }
                    width="50px"
                    alt="cart shop"
                  />
                </button>
              </Link>
            </div>
          )}
      </div>
    );
  }
}

Detail.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default Detail;
