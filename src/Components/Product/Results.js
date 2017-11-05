import React, { Component } from 'react';

class Results extends Component {
    constructor(props){
        super();
        this.state = {
            params:props.match.params.selectedProductDetails
        }
    }
    render() {
        console.log(this.state.params);
        return (
            <h2> Results for  </h2>
        );
    }
}

export default Results;
