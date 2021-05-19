import React from 'react';
import PropTypes from 'prop-types';

class EvaluationArea extends React.Component {
  render() {
    const { dados } = this.props;
    const { email, menssage, rating } = dados;
    return (
      <section>
        <p>{ email }</p>
        <p>{ menssage }</p>
        <div>{ rating }</div>
      </section>
    );
  }
}

EvaluationArea.propTypes = {
  dados: PropTypes.shape({
    email: PropTypes.string,
    menssage: PropTypes.string,
    rating: PropTypes.string,
  }).isRequired,
};

export default EvaluationArea;
