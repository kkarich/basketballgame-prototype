import Square from './Square';
import ActiveSpotFactory from './ActiveSpotFactory';

class SquareManager {
    constructor() {
        this.squares = [];
        this.currentlyActiveSquareIndex = null;
    }

    initSquares() {
        this.squares = [
            new Square,
            new Square,
            new Square
        ];
    }

    activateNewSquare() {
        let currentActiveSquare = this.squares[this.currentlyActiveSquareIndex];
        let activeSpot = ActiveSpotFactory.createActiveSpot();
        let squareToActivate = this.getSquareToActivate();
        squareToActivate.activate(activeSpot);
        if (currentActiveSquare) {
            currentActiveSquare.deActivate();
        }
    }

    getSquareToActivate() {
        let newSquareIndex = 2;
        switch (this.currentlyActiveSquareIndex) {
            case 0:
                newSquareIndex = 1;
                break;
            case 1:
                let activeSquare = this.squares[this.currentlyActiveSquareIndex];
                if (activeSquare.activeSpot.initialCount % 2 === 0) {
                    newSquareIndex = this.previousActiveSquareIndex;
                } else {
                    if (this.previousActiveSquareIndex === 2) {
                        newSquareIndex = 0;
                    } else {
                        newSquareIndex = 2;
                    }
                }
                break;
            case 2:
                newSquareIndex = 1;
                break;
        }
        
        this.updatePreviousSquareIndexes(newSquareIndex);
        return this.squares[newSquareIndex];
    }

    updatePreviousSquareIndexes(newSquareIndex) {
        this.previousActiveSquareIndex = this.currentlyActiveSquareIndex;
        this.currentlyActiveSquareIndex = newSquareIndex;
    }
}

export default new SquareManager();