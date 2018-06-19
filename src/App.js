import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="navbar navbar-default">
            <a className="navbar-brand" >CALL API</a>
            <ul className="nav navbar-nav">
              <li className="">
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Products</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="button" className="btn btn-info mb-10">Add products</button>
              
              <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">Product list</h3>
                  </div>
                  <div className="panel-body">
                    
                    <table className="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>Number</th>
                          <th>Code</th>
                          <th>Name</th>
                          <th>Price</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>1</td>
                          <td>Iphone</td>
                          <td>500</td>
                          <td>
                            
                            <span className="label label-warning">In stock</span>
                            
                          </td>
                          <td>
                            
                            <button type="button" className="btn btn-warning">Add</button>
                            
                            <button type="button" className="btn btn-danger ml-10">Delete</button>
                            
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    
                  </div>
              </div>
              
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
