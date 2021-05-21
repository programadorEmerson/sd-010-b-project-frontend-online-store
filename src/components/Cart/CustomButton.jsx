import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../css/Cart/CustomButton.css';

class CustomButton extends Component {
  render() {
    const { customStyle, clickFunction, children, dataTestId } = this.props;
    return (
      <button
        type="button"
        className={ customStyle }
        onClick={ clickFunction }
        data-testid={ dataTestId }
      >
        { children }
      </button>

    );
  }
}

CustomButton.propTypes = {
  customStyle: PropTypes.string.isRequired,
  clickFunction: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default CustomButton;
