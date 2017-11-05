import React, { Component } from 'react';

import './App.css';

import Main from './Components/Main';

class App extends Component {
  render() {
    return (
        <div className="container">
            <header className="">
                <div className="row">
                    <div className="col-md-8">
                        <h1 className="">Sample Cart</h1>
                    </div>
                    <div className="col-md-4 text-right">
                        <ul className="list-inline">
                            <li>Hi John</li>
                            <li className="btn btn-success">
                                <span>0</span>
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <Main />
            <footer>
                <p className="text-center">All Rights Reserved. &copy; 2017</p>
            </footer>
      </div>
    );
  }
}

export default App;
