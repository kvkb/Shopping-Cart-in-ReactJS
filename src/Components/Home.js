import React, { Component } from 'react';
import {
    Link
}   from 'react-router-dom';

class Home extends Component{

    constructor() {
        super();
        this.state = {
            categories: [
                {
                    name:"Hottest Products",
                    data:[
                        {
                            id:"c1p1",
                            name: "Product 1"
                        },
                        {
                            id:"c1p2",
                            name: "Product 2"
                        },
                        {
                            id:"c1p3",
                            name: "Product 3"
                        },
                        {
                            id:"c1p4",
                            name: "Product 4"
                        },
                        {
                            id:"c1p5",
                            name: "Product 5"
                        },
                    ],
                },
                {
                    name:"Trending Products",
                    data:[
                        {
                            id:"c2p1",
                            name: "Product 1"
                        },
                        {
                            id:"c2p2",
                            name: "Product 2"
                        },
                        {
                            id:"c2p3",
                            name: "Product 3"
                        },
                        {
                            id:"c2p4",
                            name: "Product 4"
                        },
                        {
                            id:"c2p5",
                            name: "Product 5"
                        },
                    ]
                }
            ],
            searchTerm : ""
        }
    }
    handleChange(event) {
        this.setState({
            searchTerm : this.refs.searchTerm.value
        })
    }
    render() {
        let categoriesList = this.state.categories.map(function(category){
            let items = category.data.map(function(item) {
                return(
                    <li id="{item.id}" key={item.id}>
                        <Link to={encodeURI('/details/'+category.name+','+item.id+','+item.name)}>
                            <div>
                                <p><i className="fa fa-file-image-o fa-4x product" aria-hidden="true"></i></p>
                                <h5>{item.name}</h5>
                            </div>
                        </Link>
                    </li>
                );
            });
            return (
                <div key={category.name}>
                    <h3>{category.name}</h3>
                    <div className="">
                        <div className="">
                            <div className="pull-left left-arrow-button" id="{category.name}LeftButton">
                                <i className="fa fa-angle-left" aria-hidden="true"></i>
                            </div>
                            <div className="pull-left products-list">
                                <ul className="row">
                                    {items}
                                </ul>
                            </div>
                            <div className="pull-left right-arrow-button" id="{category.name}RightButton">
                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
            );

        });

        return (
            <div className="">
                <div className="search-bar">
                    <input className="form-control" type="text" placeholder="Search for products" ref="searchTerm" onChange={this.handleChange.bind(this)} />
                    <Link to = {`searchResults/${this.state.searchTerm}`} className="btn btn-success">Search</Link>
                </div>
                {categoriesList}
            </div>
        );
    }
}

export default Home;
