import SquareManager from './SquareManager';

class GameManager {
    constructor() {
        this.gameTime = 5 * 1000;
        this.timeElapsed = 0;
        this.gameInProgress = false;
        this.score = 0;
        this.interval = null;
    }
    startNewGame(onProgress) {
        this.gameInProgress = true;
        this.timeElapsed = 0;
        this.interval = setInterval(() => {
            this.timeElapsed += 1000;
            onProgress();
            if (this.getSecondsLeft() === 0) {
                this.finishGame();
            }
        }, 1000);
    }
    finishGame(onFinished) {
        clearInterval(this.interval);
        this.interval = null;
        SquareManager.resetSquares();
        setTimeout(() => {
            debugger;
            SquareManager.activateNewGameSquare();
        }, 2000);
    }
    getSecondsLeft() {
        return (this.gameTime - this.timeElapsed) / 1000;
    }
    getScore() {
        return this.score;
    }
    increaseScore() {
        this.score += 1;
    }
}

export default new GameManager();