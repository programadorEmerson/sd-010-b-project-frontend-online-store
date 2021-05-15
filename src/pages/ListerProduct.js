import React from 'react';
import Search from './Search';

class ListerProduct extends React.Component {
  render() {
    const { value, onChange } = this.state;
    return (
      <Search
        value={ value }
        onChange={ onChange }
      />
    );
  }
}

export default ListerProduct;
