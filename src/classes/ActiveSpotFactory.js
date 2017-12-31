import { getRandomInt } from '../helpers';
import ActiveSpot from './ActiveSpot';

class ActiveSpotFactory {
    createActiveSpot() {
        return new ActiveSpot(getRandomInt(1, 3));
    }
    createNewGameSpot() {
        return new ActiveSpot(1, true);
    }
}

export default new ActiveSpotFactory();