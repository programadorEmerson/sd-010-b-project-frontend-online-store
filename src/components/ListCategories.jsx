import React, { Component } from 'react';

class ListCategories extends Component {
  render() {
    const { categories } = this.props;
    return (
      <aside>
        <ul>
          {
            categories
              .map((category) => <li key={ category.id } data-testid="category">{category.name}</li>)
          }
        </ul>
      </aside>
    );
  }
}

export default ListCategories;
