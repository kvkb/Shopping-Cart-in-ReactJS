
import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
}   from 'react-router-dom';

import Home from './Home';
import Results from './Product/Results';
import Details from './Product/Details';
import Checkout from './Checkout';


export default class Main extends Component {
    render() {
        return (
            <Router>
                <main className="">
                    <Route exact path="/" component={Home}/>
                    <Route path="/details/:productDetails" component={Details}/>
                    <Route path="/checkout/:selectedProductDetails" component={Checkout}/>
                    <Route path="/searchResults/:selectedProductDetails" component={Results}/>
                </main>
            </Router>
        );
    }
}
