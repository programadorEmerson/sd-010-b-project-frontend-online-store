import React from 'react';

class Category extends React.Component {
  render() {
    const { category } = this.props;
    return (
      <p data-testid="category">{`${category.name}`}</p>
    );
  }
}

export default Category;
