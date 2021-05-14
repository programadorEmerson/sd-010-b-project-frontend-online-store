import React from 'react';
import * as api from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      name: '',
    };
  }

  componentDidMount() {
    api.getCategories().then(({ id, name }) => {
      this.setState({
        id,
        name,
      });
    });
  }
  render() {
    return (
      <div>

      </div>
    );
  }
}

export default Categories;
