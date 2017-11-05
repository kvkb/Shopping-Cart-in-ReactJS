import React, { Component } from 'react';
import {
    Link
}   from 'react-router-dom';
class Details extends Component {
    constructor(props){
        super();
        this.state = {
            params:props.match.params.productDetails,
            productDetails : [
                {
                    id:"c1p1",
                    name: "Product 1",
                    price:"1,25,000",
                    ratings:"32,193",
                    reviews:"7,560",
                    specifications:[
                        {
                            key:"In The Box",
                            value:"Handset, Earphone, Charger, USB Cable, Warranty Card"
                        },
                        {
                            key:"Model Name",
                            value:"ERA 1X -4G with VoLTE",
                        },
                        {
                            key:"Color",
                            value:"Black and Gun Metal"
                        },
                        {
                            key:"Browse Type",
                            value:"Smartphones"
                        },
                        {
                            key:"SIM Type",
                            value:"Dual Sim"
                        },
                        {
                            key:"Hybrid Sim Slot",
                            value:"No"
                        },
                        {
                            key:"Touchscreen",
                            value:"Yes"
                        },
                        {
                            key:"Additional Content",
                            value:"4G with VoLTE"
                        }
                    ],
                },
                {
                    id:"c1p2",
                    name: "Product 2",
                    price:"25,000",
                    ratings:"18,193",
                    reviews:"560",
                    specifications:[
                        {
                            key:"In The Box",
                            value:"Handset, Earphone, Charger, USB Cable, Warranty Card"
                        },
                        {
                            key:"Model Name",
                            value:"ERA 1X -4G with VoLTE",
                        },
                        {
                            key:"Color",
                            value:"Black and Gun Metal"
                        },
                        {
                            key:"Browse Type",
                            value:"Smartphones"
                        },
                        {
                            key:"SIM Type",
                            value:"Dual Sim"
                        },
                        {
                            key:"Hybrid Sim Slot",
                            value:"No"
                        },
                        {
                            key:"Touchscreen",
                            value:"Yes"
                        },
                        {
                            key:"Additional Content",
                            value:"4G with VoLTE"
                        }
                    ],
                },
                {
                    id:"c1p3",
                    name: "Product 3",
                    price:"5,000",
                    ratings:"193",
                    reviews:"760",
                    specifications:[
                        {
                            key:"In The Box",
                            value:"Handset, Earphone, Charger, USB Cable, Warranty Card"
                        },
                        {
                            key:"Model Name",
                            value:"ERA 1X -4G with VoLTE",
                        },
                        {
                            key:"Color",
                            value:"Black and Gun Metal"
                        },
                        {
                            key:"Browse Type",
                            value:"Smartphones"
                        },
                        {
                            key:"SIM Type",
                            value:"Dual Sim"
                        },
                        {
                            key:"Hybrid Sim Slot",
                            value:"No"
                        },
                        {
                            key:"Touchscreen",
                            value:"Yes"
                        },
                        {
                            key:"Additional Content",
                            value:"4G with VoLTE"
                        }
                    ],
                },
                {
                    id:"c1p4",
                    name: "Product 4",
                    price:"78,987",
                    ratings:"789",
                    reviews:"60",
                    specifications:[
                        {
                            key:"In The Box",
                            value:"Handset, Earphone, Charger, USB Cable, Warranty Card"
                        },
                        {
                            key:"Model Name",
                            value:"ERA 1X -4G with VoLTE",
                        },
                        {
                            key:"Color",
                            value:"Black and Gun Metal"
                        },
                        {
                            key:"Browse Type",
                            value:"Smartphones"
                        },
                        {
                            key:"SIM Type",
                            value:"Dual Sim"
                        },
                        {
                            key:"Hybrid Sim Slot",
                            value:"No"
                        },
                        {
                            key:"Touchscreen",
                            value:"Yes"
                        },
                        {
                            key:"Additional Content",
                            value:"4G with VoLTE"
                        }
                    ],
                },
                {
                    id:"c1p5",
                    name: "Product 5",
                    price:"25000",
                    ratings:"293",
                    reviews:"7760",
                    specifications:[
                        {
                            key:"In The Box",
                            value:"Handset, Earphone, Charger, USB Cable, Warranty Card"
                        },
                        {
                            key:"Model Name",
                            value:"ERA 1X -4G with VoLTE",
                        },
                        {
                            key:"Color",
                            value:"Black and Gun Metal"
                        },
                        {
                            key:"Browse Type",
                            value:"Smartphones"
                        },
                        {
                            key:"SIM Type",
                            value:"Dual Sim"
                        },
                        {
                            key:"Hybrid Sim Slot",
                            value:"No"
                        },
                        {
                            key:"Touchscreen",
                            value:"Yes"
                        },
                        {
                            key:"Additional Content",
                            value:"4G with VoLTE"
                        }
                    ],
                },
                {
                    id:"c2p1",
                    name: "Product 1",
                    price:"1000",
                    ratings:"3193",
                    reviews:0,
                    specifications:[
                        {
                            key:"In The Box",
                            value:"Handset, Earphone, Charger, USB Cable, Warranty Card"
                        },
                        {
                            key:"Model Name",
                            value:"ERA 1X -4G with VoLTE",
                        },
                        {
                            key:"Color",
                            value:"Black and Gun Metal"
                        },
                        {
                            key:"Browse Type",
                            value:"Smartphones"
                        },
                        {
                            key:"SIM Type",
                            value:"Dual Sim"
                        },
                        {
                            key:"Hybrid Sim Slot",
                            value:"No"
                        },
                        {
                            key:"Touchscreen",
                            value:"Yes"
                        },
                        {
                            key:"Additional Content",
                            value:"4G with VoLTE"
                        }
                    ],
                },
                {
                    id:"c2p2",
                    name: "Product 2",
                    price:"1,200",
                    ratings:"2,193",
                    reviews:"750",
                    specifications:[
                        {
                            key:"In The Box",
                            value:"Handset, Earphone, Charger, USB Cable, Warranty Card"
                        },
                        {
                            key:"Model Name",
                            value:"ERA 1X -4G with VoLTE",
                        },
                        {
                            key:"Color",
                            value:"Black and Gun Metal"
                        },
                        {
                            key:"Browse Type",
                            value:"Smartphones"
                        },
                        {
                            key:"SIM Type",
                            value:"Dual Sim"
                        },
                        {
                            key:"Hybrid Sim Slot",
                            value:"No"
                        },
                        {
                            key:"Touchscreen",
                            value:"Yes"
                        },
                        {
                            key:"Additional Content",
                            value:"4G with VoLTE"
                        }
                    ],
                },
                {
                    id:"c2p3",
                    name: "Product 3",
                    price:"78,900",
                    ratings:"2,193",
                    reviews:"760",
                    specifications:[
                        {
                            key:"In The Box",
                            value:"Handset, Earphone, Charger, USB Cable, Warranty Card"
                        },
                        {
                            key:"Model Name",
                            value:"ERA 1X -4G with VoLTE",
                        },
                        {
                            key:"Color",
                            value:"Black and Gun Metal"
                        },
                        {
                            key:"Browse Type",
                            value:"Smartphones"
                        },
                        {
                            key:"SIM Type",
                            value:"Dual Sim"
                        },
                        {
                            key:"Hybrid Sim Slot",
                            value:"No"
                        },
                        {
                            key:"Touchscreen",
                            value:"Yes"
                        },
                        {
                            key:"Additional Content",
                            value:"4G with VoLTE"
                        }
                    ],
                },
                {
                    id:"c2p4",
                    name: "Product 4",
                    price:"1000",
                    ratings:"393",
                    reviews:"560",
                    specifications:[
                        {
                            key:"In The Box",
                            value:"Handset, Earphone, Charger, USB Cable, Warranty Card"
                        },
                        {
                            key:"Model Name",
                            value:"ERA 1X -4G with VoLTE",
                        },
                        {
                            key:"Color",
                            value:"Black and Gun Metal"
                        },
                        {
                            key:"Browse Type",
                            value:"Smartphones"
                        },
                        {
                            key:"SIM Type",
                            value:"Dual Sim"
                        },
                        {
                            key:"Hybrid Sim Slot",
                            value:"No"
                        },
                        {
                            key:"Touchscreen",
                            value:"Yes"
                        },
                        {
                            key:"Additional Content",
                            value:"4G with VoLTE"
                        }
                    ],
                },
                {
                    id:"c2p5",
                    name: "Product 5",
                    price:"100",
                    ratings:"3,193",
                    reviews:"7,560",
                    specifications:[
                        {
                            key:"In The Box",
                            value:"Handset, Earphone, Charger, USB Cable, Warranty Card"
                        },
                        {
                            key:"Model Name",
                            value:"ERA 1X -4G with VoLTE",
                        },
                        {
                            key:"Color",
                            value:"Black and Gun Metal"
                        },
                        {
                            key:"Browse Type",
                            value:"Smartphones"
                        },
                        {
                            key:"SIM Type",
                            value:"Dual Sim"
                        },
                        {
                            key:"Hybrid Sim Slot",
                            value:"No"
                        },
                        {
                            key:"Touchscreen",
                            value:"Yes"
                        },
                        {
                            key:"Additional Content",
                            value:"4G with VoLTE"
                        }
                    ],
                },
            ]

        }
    }
    render(){
        let params = this.state.params.split(',');
        //console.log(params[1]);
        let productDetails = this.state.productDetails.map(function(item){
            if(params[1] === item.id){
                let specs = item.specifications.map(function(spec) {
                    return (
                        <p key={spec.key}>
                            <span>{spec.key}</span>
                            <strong>{spec.value}</strong>
                        </p>
                    );
                })
                return (
                    <div className="product-details" key={item.id}>
                        <div className="row">
                            <div className="col-md-5">
                                <div className="product-big-img text-center">
                                    <i className="fa fa-file-image-o fa-5x" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <h2>{params[2]}</h2>
                                <p className="ratings-reviews">
                                    <span><em>{item.ratings}</em> Ratings</span>
                                    <span><em>{item.reviews}</em> Reviews</span>
                                </p>
                                <h3>&#8377; {item.price}</h3>
                            </div>
                        </div>
                        <div className="specifications">
                            <h3>Specifications</h3>
                            {specs}
                        </div>
                        <div className="text-right">
                            <button className="btn btn-primary">Add To Cart</button>
                            <Link to={`/checkout/${params[1]}&${params[2]}&${item.price}`} className="btn btn-primary">Buy Now</Link>
                        </div>
                    </div>
                );
            }
        });
        return (
            <div>
                <div className="breadcrumbs">
                    <ul className="list-inline">
                        <li>Home</li>
                        <li>{params[0]}</li>
                        <li>{params[2]}</li>
                    </ul>
                </div>
                {productDetails}


            </div>
        );
    }
}

export default Details;
