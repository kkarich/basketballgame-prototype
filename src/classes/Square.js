export default class Square {
    constructor() {
        this.activeSpot = null;
    }

    hit() {
        if (this.activeSpot) {
            this.activeSpot.reduceCount();
        }
    }

    activate(activeSpot) {
        this.activeSpot = activeSpot;
    }

    deActivate() {
        this.activeSpot = null;
    }
}