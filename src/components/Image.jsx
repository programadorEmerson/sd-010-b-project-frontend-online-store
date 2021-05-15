import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {
    const { source, alt, width } = this.props;
    return (
      <figure>
        <img src={ source } alt={ alt } width={ width } />
      </figure>
    );
  }
}

Image.propTypes = {
  source: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default Image;
