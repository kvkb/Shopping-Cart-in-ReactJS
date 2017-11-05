import React, { Component } from 'react';

class Checkout extends Component{
    constructor() {
        super();
        this.state = {
            showState : false
        }
    }
    render(){
        return (
            <div className="checkout-page">
            <div className="checkout-steps">
                <div>
                    <h4>Login / SignUp</h4>
                    <div className="row">
                        <div className="col-md-6">Login</div>
                        <div className="col-md-6">Sign Up</div>
                    </div>
                    <div className="text-right">
                        <button className="btn btn-success">Continue</button>
                    </div>
                </div>
                <div>
                    <h4>Delivery Address</h4>
                    <div className="row">
                        <div className="col-md-6">Address 1</div>
                        <div className="col-md-6">Address 2</div>
                    </div>
                </div>
            </div>

            </div>
        );
    }
}

export default Checkout;
