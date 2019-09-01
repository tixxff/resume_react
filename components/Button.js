import React, { Component } from 'react';

export default class Button extends Component{

    render(){
        return(
            <button className={this.props.classses} onClick={this.props.click}>{this.props.children}</button>
        )
    }
}