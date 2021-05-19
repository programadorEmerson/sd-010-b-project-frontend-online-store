import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import getProductById from '../services/api2';
import Form from './Form';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      render: false,
      shoppingCart: [],
      listComments: [],
    };
  }

  componentDidMount() {
    this.setRenderedState();
    if (!this.props.location.state) {
      this.saveGetProduct();
    }
  }

  // Salva os comentarios no LocalStorage
  saveLocalStorage = () => {
    const { location: { state: { result } } } = this.props;
    const { id } = result;
    const { listComments } = this.state;
    localStorage.setItem(id, JSON.stringify(listComments));
  }

  updateComments = (newComment) => {
    // Salva os Cometarios no LocalStorage
    const { listComments } = this.state;
    // se a lista de comentarios for null, ele salva o primeiro comentario
    // caso contrario, faz o spread do oldState e add o novo cometário.
    if (listComments === null) {
      this.setState({ listComments: [newComment] },
        () => {
          this.saveLocalStorage();
        });
    } else {
      this.setState((oldState) => (
        { listComments: [newComment, ...oldState.listComments] }
      ), () => {
        this.saveLocalStorage();
      });
    }
  }

  //  Seta o estado Rendenizar para VERDADEIRO
  //  Faz o get dos comentarios do LocalStorage
  setRenderedState = () => {
    const { match: { params: { id } } } = this.props;
    const localStorageComments = localStorage.getItem(id);
    const localStorageCommentsParse = JSON.parse(localStorageComments);
    const { location: { state } } = this.props;
    if (state) {
      this.setState({
        render: true,
        listComments: localStorageCommentsParse,
      });
    }
  }

  //  Adiciona o produto ao carrinho de compras
  addProductToShoppingCart = (product) => {
    const { shoppingCart } = this.state;

    const testIfProductExist = shoppingCart.find(
      (oldProduct) => oldProduct.id === product.id,
    );

    if (testIfProductExist === undefined) {
      product.quantity = 1;
      this.setState({ shoppingCart: [...shoppingCart, product] });
    } else {
      product.quantity += 1;
    }
  }

  saveGetProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const dados = await getProductById(id);
    // console.log(dados[0].body);
    this.setState({
      dado: dados,
    }, () => {
      const { dado } = this.state;
      // console.log(dado);
    });
  }

  render() {
    const { dado } = this.state;
    const { render, shoppingCart } = this.state;
    if (dado) {
      console.log(dado[0].body);
      const { body:
        { title, thumbnail, price, address: { city_name: city, state_name: state },
        } } = dado[0];

      const { listComments } = this.state;
      const { body } = dado[0];
      // return (<Redirect to="/" />);
      return (
        <>
          <main className="product-details">
            <section className="product-details-left">
              <h1 data-testid="product-detail-name">{title}</h1>
              <img className="product-details-image" src={ thumbnail } alt={ title } />
            </section>

            <section className="product-details-right">
              <ul>
                <h1>Descrição do Produto</h1>
                <li>{title}</li>
                <li>{price}</li>
                <h4>Localização do Produto</h4>
                <li>{city}</li>
                <li>{state}</li>
              </ul>
              <button
                type="submit"
                data-testid="product-detail-add-to-cart"
                onClick={ () => this.addProductToShoppingCart(body) }
              >
                Adicionar ao Carrinho
              </button>
              <Link
                to={ { pathname: '/ShopCart', state: { shoppingCart } } }
                data-testid="shopping-cart-button"
              >
                Ver Carrinho
              </Link>
            </section>
          </main>
          <section>
            <Form updateComments={ this.updateComments } />
          </section>
          <section id="comments">
            <h1>Comentários</h1>
            {listComments !== null
              ? listComments.map((coment) => {
                const { email, rating, comment } = coment;
                return (
                  <>
                    <h2 key={ email }>{email}</h2>
                    {comment && <p>{comment}</p>}
                    <p key={ rating }>{rating}</p>
                  </>
                );
              }) : <h2>Sem Comentários!</h2>}
          </section>
        </>
      );
    }
    if (render) {
      const { location: { state: { result } } } = this.props;
      const {
        title, thumbnail, price, address: { city_name: city, state_name: state },
      } = result;
      const { listComments } = this.state;
      return (
        <>
          <main className="product-details">
            <section className="product-details-left">
              <h1 data-testid="product-detail-name">{title}</h1>
              <img className="product-details-image" src={ thumbnail } alt={ title } />
            </section>

            <section className="product-details-right">
              <ul>
                <h1>Descrição do Produto</h1>
                <li>{title}</li>
                <li>{price}</li>
                <h4>Localização do Produto</h4>
                <li>{city}</li>
                <li>{state}</li>
              </ul>
              <button
                type="submit"
                data-testid="product-detail-add-to-cart"
                onClick={ () => this.addProductToShoppingCart(result) }
              >
                Adicionar ao Carrinho
              </button>
              <Link
                to={ { pathname: '/ShopCart', state: { shoppingCart } } }
                data-testid="shopping-cart-button"
              >
                Ver Carrinho
              </Link>
            </section>
          </main>
          <section>
            <Form updateComments={ this.updateComments } />
          </section>
          <section id="comments">
            <h1>Comentários</h1>
            {listComments !== null
              ? listComments.map((coment) => {
                const { email, rating, comment } = coment;
                return (
                  <>
                    <h2 key={ email }>{email}</h2>
                    {comment && <p>{comment}</p>}
                    <p key={ rating }>{rating}</p>
                  </>
                );
              }) : <h2>Sem Comentários!</h2>}
          </section>
        </>
      );
    }
    return <h1>Carregando...</h1>;
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      category_id: PropTypes.string,
      typedProduct: PropTypes.string,
    }).isRequired,
  }).isRequired,
}.isRequired;

export default ProductDetails;
