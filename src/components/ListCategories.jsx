import React, { Component } from 'react';
import { getCategories } from '../services/api';

class ListCategories extends Component {
  constructor() {
    super();

    this.state = {
      listCategories: [],
    };

    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    this.setState({
      listCategories: await getCategories(),
    });
  }

  render() {
    return (
      <aside>
        <nav>
          <ul />
        </nav>
      </aside>
    );
  }
}

export default ListCategories;
