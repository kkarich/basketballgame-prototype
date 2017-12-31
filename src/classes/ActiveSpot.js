import { getRandomInt } from '../helpers';

export default class ActiveSpot {
    constructor(count) {
        this.initialCount = count;
        this.count = count;
    }

    reduceCount() {
        this.count -= 1;
    }
}