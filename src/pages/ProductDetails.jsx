import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommentForms from '../components/CommentForms';
import CommentCard from '../components/CommentCard';
import Loading from '../components/Loading';

import getProductById from '../services/getProducts';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      price: '',
      imgUrl: '',
      comments: [],
      loading: true,
    };
  }

  // a
  submitRating = (email, rating, comment) => {
    this.setState((oldState) => ({
      comments: [...oldState.comments, { email, rating, comment }],
    }));
  }

  getProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const { title, price, thumbnail } = await getProductById(id);
    this.setState({
      title,
      price,
      imgUrl: thumbnail,
      loading: false,
    });
  }

  componentDidMount = async () => {
    await this.getProduct();
  }

  render() {
    const { title, price, imgUrl, comments, loading } = this.state;

    if (loading) {
      return (
        <Loading />
      );
    }

    return (
      <section>
        <h1 data-testid="product-detail-name">{title}</h1>
        <p>
          R$
          {' '}
          {price}
        </p>
        <img src={ imgUrl } alt={ title } />

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
};

export default ProductDetails;
