import React, { Component } from 'react';
import Square from '../components/Square';
import SquareManager from '../classes/SquareManager';

export default class SquareContainer extends React.Component {
    constructor() {
        super();
        SquareManager.initSquares();
        SquareManager.activateNewSquare();
    }
    createNewActiveSpot() {
        SquareManager.activateNewSquare();
        this.forceUpdate();
    }
    renderSquares() {
        return SquareManager.squares.map((square) => {
            return <Square square={square} handleCompletedSquare={() => {this.createNewActiveSpot()}}/>
        });
    }
    render() {
        return (
            <div className='square-container'>
                {this.renderSquares()}
            </div>
        )
    }
}