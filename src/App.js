import React, { Component } from 'react';

import './App.css';

import Main from './Components/Main';

class App extends Component {
  render() {
    return (
        <div className="container">
            <header className="">
                <h1 className="">Shopping Cart</h1>
            </header>
            <Main />
            <footer>
                <p>All Rights Reserved. &copy; 2017</p>
            </footer>
      </div>
    );
  }
}

export default App;
