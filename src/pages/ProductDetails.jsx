import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentForms from '../components/CommentForms';
import CommentCard from '../components/CommentCard';
import { getProductById } from '../services/api';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      value: '',
      imgUrl: '',
      comments: [],
    };
  }

  submitRating = (email, rating, comment) => {
    this.setState((oldState) => ({
      comments: [...oldState.comments, { email, rating, comment }],
    }));
  }

  getProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await getProductById(id);
  }

  render() {
    const { comments } = this.state;

    return (
      <section>
        <h1 data-testid="product-detail-name">{title}</h1>
        <p>
          R$
          {' '}
          {value}
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
