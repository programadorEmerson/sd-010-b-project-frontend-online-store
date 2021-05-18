import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Form from './Form';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      render: false,
      shoppingCart: [],
      listComments: [],
      totalQuantityItems: 0,
    };
  }

  componentDidMount() {
    this.populateShoppingCart();
    this.setRenderedState();
  }

  // Recarrega o carrinho de compras
  populateShoppingCart = () => {
    const { location: { state: { shoppingCart: items } } } = this.props;

    this.setState(
      { shoppingCart: items }, () => this.updateProductsQuantity(),
    );
  }

  updateLocalStorage =(product) => {
    // localStorage.setItem('shoppingCart', JSON.stringify(totalQuantity))

    // // receber os itens e verificar a quantidade 
    // localStorage.setItem('totalQuantityItems', JSON.stringify(totalQuantity))


  }

  // Atualiza a quantidade total de produtos no carrinho
  updateProductsQuantity = () => {
    const { shoppingCart } = this.state;
    console.log(shoppingCart)
    const totalQuantity = shoppingCart.reduce(
      (quantityAccumulator, product) => quantityAccumulator + product.quantity, 0,
    );

    this.setState({ totalQuantityItems: totalQuantity }, () => localStorage.setItem('totalQuantityItems', JSON.stringify(totalQuantity)));
  }

  updateComments = (newComment) => {
    this.setState((oldState) => (
      { listComments: [newComment, ...oldState.listComments] }
    ), () => {
      // const { shoppingCart } = this.state;
      // storage.clear();
      // storage.setItem(listComments, listComments);
      // console.log(shoppingCart);
    });
  }

  //  Seta o estado Rendenizar para VERDADEIRO
  setRenderedState = () => {
    this.setState({ render: true });
  }

  //  Adiciona o produto ao carrinho de compras
  addProductToShoppingCart = (product) => {
    const { shoppingCart } = this.state;

    const testIfProductExist = shoppingCart.find(
      (oldProduct) => oldProduct.id === product.id,
    );

    if (testIfProductExist === undefined) {
      product.quantity = 1;
      this.setState({ shoppingCart: [...shoppingCart, product] },
         () => {
          this.updateProductsQuantity();
          // localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
         });
    } else {
      product.quantity += 1;
      this.updateProductsQuantity();
      // localStorage.setItem('shoppingCart', JSON.stringify(product))
    }
  }

  render() {
    const { render, shoppingCart,totalQuantityItems } = this.state;
    const { location: { state: { result } } } = this.props;
    const {
      title, thumbnail, price, address: { city_name: city, state_name: state },
    } = result;

    if (render) {
      const { listComments } = this.state;
      return (
        <>
          <main className="product-details">
            <section className="product-details-left">
              <h1 data-testid="product-detail-name">{ title }</h1>
              <img className="product-details-image" src={ thumbnail } alt={ title } />
            </section>

            <section className="product-details-right">
              <ul>
                <h1>Descrição do Produto</h1>
                <li>{ title }</li>
                <li>{ price }</li>
                <h4>Localização do Produto</h4>
                <li>{ city }</li>
                <li>{ state }</li>
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
              <span data-testid="shopping-cart-size">
                Produtos no carrinho:
                { totalQuantityItems }
              </span>
            </section>

          </main>
          <section>
            <Form updateComments={ this.updateComments } />
          </section>
          <section id="comments">
            <h1>Comentários</h1>
            { listComments.map((coment) => {
              const { email, rating, comment } = coment;
              return (
                <>
                  <h2 key={ email }>{ email }</h2>
                  { comment && <p>{ comment }</p> }
                  <p key={ rating }>{ rating }</p>
                </>
              );
            }) }
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
