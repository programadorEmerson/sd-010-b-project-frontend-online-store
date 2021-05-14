import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      searchText: '',
    }
  }

  render() {
    setSearchText({ target }) => {
      this.setState({
        searchText: target.value,
      })
    }

    return (
      <div className="App">
        <div>
          <label htmlFor="search" data-testid="home-initial-message">
            <input type="text" name="search" onChange="" />

            Digite algum termo de pesquisa ou escolha uma categoria.
          </label>
        </div>
        <BrowserRouter>
          <div>
            <Link to="/shopping-cart" data-testid="shopping-cart-button" />
          </div>
          <Switch>
            <Route exact path="/" render={ () => <ProductList /> } />
            <Route path="/shopping-cart" render={ () => <ShoppingCart /> } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;