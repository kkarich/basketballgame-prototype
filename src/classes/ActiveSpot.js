import { getRandomInt } from '../helpers';

export default class ActiveSpot {
    constructor(count, isNewGameSpot) {
        this.isNewGameSpot = isNewGameSpot;
        this.initialCount = count;
        this.count = count;
    }

    reduceCount() {
        this.count -= 1;
    }
}