import SquareManager from './SquareManager';

class GameManager {
    constructor() {
        this.gameTime = 45 * 1000;
    }
    startNewGame() {
        SquareManager.initSquares();
    }
}

export default new GameManager();