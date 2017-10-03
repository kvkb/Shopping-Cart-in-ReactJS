import React, { Component } from 'react';

class Home extends Component{

    constructor() {
        super();
        this.state = {
            products: [
                {
                    id:1,
                    name: "Product 1"
                },
                {
                    id:2,
                    name: "Product 2"
                },
                {
                    id:3,
                    name: "Product 3"
                },
                {
                    id:4,
                    name: "Product 4"
                }
            ]
        }
    }

    render() {

        let productsList = this.state.products.map(function(product) {
            return (
                <li id="{product.id}" key={product.id}>
                    <i className="fa fa-file-image-o fa-4x" aria-hidden="true"></i>
                    <h5>{product.name}</h5>
                </li>
            );
        });

        return (
            <div className="">
                <div className="form-group">
                    <input type="text" className="form-control" name="" />
                </div>
                <div className="products-list">
                    <ul className="list-inline">
                        {productsList}
                    </ul>
                </div>


            </div>
        );
    }
}

export default Home;
