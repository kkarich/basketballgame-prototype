import React, { Component } from 'react';
import Light from './Light';

export default class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            square: this.props.square
        }
    }

    renderLight() {
        if (this.state.square && this.state.square.activeSpot) {
            return <Light count={this.state.square.activeSpot.count} handleClick={() => {this.props.handleClick(this.state.square)}}/>
        }
    }

    render() {
        return <div className="square">
            { this.renderLight() }
        </div>;
    }
}