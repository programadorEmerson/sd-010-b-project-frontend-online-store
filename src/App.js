import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
// import { getCategories } from './services/api';
import Home from './component/Home';

class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     result: {},
  //   };
  // }

  // componentDidMount() {
  //   this.getApi();
  // }

  // getApi = async () => {
  //   const api = await getCategories();
  //   this.setState({
  //     result: api,
  //   });
  // }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={ Home } />
        </Switch>
      </Router>
    );
  }
}

export default App;
