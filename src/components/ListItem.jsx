import React from 'react';
import PropTypes from 'prop-types';

class ListItem extends React.Component {
  render() {
    const { item: { title, price, countItems } } = this.props;
    const intialChar = 0;
    const finalChar = 20;
    const showTitle = title.slice(intialChar, finalChar);
    return (
      <div>
        {`${showTitle} - R$${price} QTD: ${countItems}`}
      </div>
    );
  }
}
ListItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    countItems: PropTypes.number.isRequired,
  }).isRequired,
};

export default ListItem;
