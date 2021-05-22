import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShowComments extends Component {
  render() {
    const { ratings: { id, email, mensage, rating } } = this.props;
    return (
      <div className="Container">
        {console.log(id)}
        <h5>
          Email -
          {email}
        </h5>
        <h5>
          Nota -
          {rating}
        </h5>
        <h5>Comentario</h5>
        <p>{mensage}</p>
      </div>
    );
  }
}

ShowComments.propTypes = {
  id: PropTypes.string,
  rating: PropTypes.number,
  email: PropTypes.string,
  mensage: PropTypes.string,
}.isRequired;

export default ShowComments;
