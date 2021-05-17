import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './elements/Input';

class CreateElement extends Component {
  render() {
    const { forms } = this.props;
    return forms.map((e, idx) => <Input key={ `formExp - ${idx}` } { ...e } />);
  }
}

CreateElement.propTypes = {
  forms: PropTypes.arrayOf(),
}.IsRequeried;

export default CreateElement;
