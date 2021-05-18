import React from 'react';
import PropTypes from 'prop-types';

class SearchList extends React.Component {
  render() {
    const { item } = this.props;
    const { title, thumbnail, price } = item;
    return (
      <li data-testid="product">
        {
          title
        }
        {' '}
        <img alt="foto" src={ thumbnail } />
        {' '}
        {price}
      </li>
    );
  }
}

SearchList.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SearchList;
