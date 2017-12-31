import React, { Component } from 'react';
import SquareContainer from './SquareContainer';

import GameManager from '../classes/GameManager';

class GameContainer extends Component {
  constructor() {
    super();
    this.state = {
      score: GameManager.getScore(),
      secondsLeft: GameManager.getSecondsLeft()
    }
  }

  startNewGame() {
    GameManager.startNewGame(this.updateGameTime.bind(this), this.completeGame.bind(this));
  }

  completeGame() {
    GameManager.stopGame();
  }

  updateGameTime() {
    this.setState({
      secondsLeft: GameManager.getSecondsLeft()
    });
  }

  updateScore() {
    GameManager.increaseScore();
    this.setState({
      score: GameManager.getScore()
    });
  }

  render() {
    return (
      <div>
        <SquareContainer startNewGame={() => { this.startNewGame() }} updateScore={() => { this.updateScore() }} />
        <h1 className='time'> Time: {this.state.secondsLeft} </h1>
        <h1 className='score'>Score: {this.state.score} </h1>
      </div>
    );
  }
}

export default GameContainer;
