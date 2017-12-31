import { getRandomInt } from '../helpers';
import ActiveSpot from './ActiveSpot';

class ActiveSpotFactory {
    createActiveSpot() {
        return new ActiveSpot(getRandomInt(1, 3));
    }
}

export default new ActiveSpotFactory();