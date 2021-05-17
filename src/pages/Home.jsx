import React from 'react';
import * as api from '../services/api';
import Mensagem from '../components/Mensagem';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const categories = await api.getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <Mensagem />
        {
          categories.map((category) => (
            <div key={ category.id } data-testid="category">
              { category.name }
            </div>))
        }
      </div>
    );
  }
}
export default Home;
