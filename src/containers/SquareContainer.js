import React, { Component } from 'react';
import Square from '../components/Square';
import SquareManager from '../classes/SquareManager';

export default class SquareContainer extends React.Component {
    constructor() {
        super();
        SquareManager.resetSquares();
        SquareManager.activateNewGameSquare();

        setInterval(() => {
            this.forceUpdate();
        }, 100);
    }

    createNewActiveSpot() {
        SquareManager.activateNewSquare();
        this.forceUpdate();
    }

    handleClick(square) {
        square.hit();
        if (square.activeSpot) {
          if (square.activeSpot.isNewGameSpot) {
            this.props.startNewGame();
          } else {
            this.props.updateScore();
          }
          if (square.activeSpot.count === 0) {
            this.createNewActiveSpot();
          }
        }
    }
    
    renderSquares() {
        return SquareManager.squares.map((square) => {
            return <Square 
                square={square} 
                handleClick={() => {this.handleClick(square)}}
                />
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