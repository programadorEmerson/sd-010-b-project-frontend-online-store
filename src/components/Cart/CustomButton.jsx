import React, { Component } from 'react';
import '../../css/Cart/CustomButton.css';

class CustomButton extends Component {
  render() {
    const { customStyle, clickFunction, children, dataTestId } = this.props;
    return (
      <button
        type="button"
        className={ customStyle }
        onClick={ () => clickFunction() }
        data-testid={ dataTestId }
      >
        { children }
      </button>

    );
  }
}
export default CustomButton;
