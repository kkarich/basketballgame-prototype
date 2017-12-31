import Square from './Square';
import ActiveSpotFactory from './ActiveSpotFactory';

class SquareManager {
    constructor() {
        this.squares = [];
        this.currentlyActiveSquareIndex = null;
    }

    resetSquares() {
        this.squares = [
            new Square,
            new Square,
            new Square
        ];
    }

    activateNewGameSquare() {
        let activeSpot = ActiveSpotFactory.createNewGameSpot();
        let squareToActivate = this.squares[2];
        this.updatePreviousSquareIndexes(2);
        squareToActivate.activate(activeSpot);
    }

    activateNewSquare() {
        let currentActiveSquare = this.squares[this.currentlyActiveSquareIndex];
        let activeSpot = ActiveSpotFactory.createActiveSpot();
        let squareIndexToActivate = this.getSquareIndexToActivate();
        this.updatePreviousSquareIndexes(squareIndexToActivate);
        let squareToActivate = this.squares[squareIndexToActivate];
        squareToActivate.activate(activeSpot);
        if (currentActiveSquare) {
            currentActiveSquare.deActivate();
        }
    }

    getSquareIndexToActivate() {
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

        return newSquareIndex;
    }

    updatePreviousSquareIndexes(newSquareIndex) {
        this.previousActiveSquareIndex = this.currentlyActiveSquareIndex;
        this.currentlyActiveSquareIndex = newSquareIndex;
    }
}

export default new SquareManager();