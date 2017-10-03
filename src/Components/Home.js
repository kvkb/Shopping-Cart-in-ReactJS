import React, { Component } from 'react';

class Home extends Component{
    render() {
        constructor() {
            this.props = {
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
        return (
            <div className="">
                <div className="form-group">
                    <input type="text" class="form-control" name="" />
                </div>
                
            </div>
        );
    }
}

export default Home;
