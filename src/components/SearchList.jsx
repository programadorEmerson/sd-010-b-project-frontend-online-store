import React from 'react';

class SearchList extends React.Component {
  render() {
    const { item } = this.props;
    const { title, thumbnail, price } = item;
    return (
      <li data-testid="product">{title} <img src={thumbnail} /> {price}</li>
    );
  }
}

export default SearchList;
