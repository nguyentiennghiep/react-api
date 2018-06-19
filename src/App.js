import React, { Component } from 'react';
import './App.css';
import Menu from './Components/Menu/Menu';
//import Products from './Components/ProductList/Products';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {

  showContent = (routes) => {
    var result = '';
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route key={index} path={route.path} exact={route.exact} component={route.main} />
      })
    }
    return <Switch>{result}</Switch>;
  }
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <div className="container">
            <div className="row">
              {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="button" className="btn btn-info mb-10">Add products</button>
              
              <Products />
              
            </div> */}
              {this.showContent(routes)}           

            </div>

          </div>
        </div>

      </Router>
    );
  }
}

export default App;
