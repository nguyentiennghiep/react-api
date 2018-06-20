import React, { Component } from 'react';
import './App.css';
import Menu from './Components/Menu/Menu';
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
              
              {this.showContent(routes)}           
              {/* <Route path ='/product/add' exact component = {ProductActionPage} /> */}
            </div>

          </div>
        </div>

      </Router>
    );
  }
}

export default App;
