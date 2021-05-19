import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import CommentForms from '../components/CommentForms';
import CommentCard from '../components/CommentCard';
import Loading from '../components/Loading';

import getProductById from '../services/getProducts';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      title: '',
      price: '',
      imgUrl: '',
      quantity: 0,
      comments: [],
      loading: true,
    };

    if (!localStorage.getItem('cartProducts')) {
      localStorage.setItem('cartProducts', '[]');
    }
  }

  submitRating = (email, rating, comment) => {
    this.setState((oldState) => ({
      comments: [...oldState.comments, { email, rating, comment }],
    }));
  }

  getProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const { id: productId, title, price, thumbnail } = await getProductById(id);
    this.setState({
      id: productId,
      title,
      price,
      imgUrl: thumbnail,
      quantity: 1,
      loading: false,
    });
  }

  componentDidMount = async () => {
    await this.getProduct();
  }

  saveAtLocalstorage = (objectToSave) => {
    let localObj = JSON.parse(localStorage.getItem('cartProducts'));
    localObj = [...localObj, objectToSave];

    localStorage.setItem('cartProducts', JSON.stringify(localObj));
    // Navegação para o cart
    // const { history: { push } } = this.props;
    // push('/cart');
  }

  render() {
    const { id, title, price, imgUrl, quantity, comments, loading } = this.state;

    if (loading) {
      return (
        <Loading />
      );
    }

    return (
      <section>
        <Link to="/cart" data-testid="shopping-cart-button">Cart</Link>
        <h1 data-testid="product-detail-name">{title}</h1>
        <p>
          R$
          {' '}
          {price}
        </p>
        <img src={ imgUrl } alt={ title } />
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => {
            this.saveAtLocalstorage(
              { id, title, price, imgUrl, quantity },
            );
          } }
        >
          Adicionar ao Carrinho

        </button>

        <CommentForms submitRating={ this.submitRating } />
        {comments.map(({ email, rating, comment }) => (
          <CommentCard
            key={ email }
            email={ email }
            rating={ rating }
            comment={ comment }
          />
        ))}
      </section>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default ProductDetails;
