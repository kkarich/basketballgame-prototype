// holds active spot
// handles input
// on click - checks if spot is active
// if active - hits spot
// checks if spot is finished and then sends 
import React, { Component } from 'react';
import Light from './Light';
export default class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            square: this.props.square
        }
    }

    handleClick() {
        if (this.state.square) {
            this.state.square.hit();
            this.forceUpdate();
            if (this.state.square.activeSpot && this.state.square.activeSpot.count === 0) {
                this.props.handleCompletedSquare();
            }
        }
    }

    renderLight() {
        if (this.state.square && this.state.square.activeSpot) {
            return <Light count={this.state.square.activeSpot.count} handleClick={() => {this.handleClick()}}/>
        }
    }

    render() {
        return <div className="square">
            { this.renderLight() }
        </div>;
    }
}