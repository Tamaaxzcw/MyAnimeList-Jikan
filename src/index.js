// src/index.js

/**
 * @author tamaaxzcw <tamaaxzcw@gmail.com>
 * @license MIT
 */

import { JikanClient } from './clients/JikanClient.js';
import * as JikanEnums from './constants/enums.js';

/**
 * Main entry point for the MyAnimeList-Jikan wrapper.
 * Initializes and exposes all client modules.
 * @class
 * @author tamaaxzcw
 */
class MyAnimeListJikan {
    constructor() {
        this.anime = new JikanClient('anime');
        this.manga = new JikanClient('manga');
        this.characters = new JikanClient('characters');
        this.people = new JikanClient('people');
        this.clubs = new JikanClient('clubs');
        this.genres = new JikanClient('genres');
        this.magazines = new JikanClient('magazines');
        this.producers = new JikanClient('producers');
        this.seasons = new JikanClient('seasons');
        this.top = new JikanClient('top');
        this.schedules = new JikanClient('schedules');
    }
}

const jikan = new MyAnimeListJikan();

export default jikan;
export { JikanEnums };

/**
 * Shorthand access to the full client.
 * e.g. `import jikan from 'myanimelist-jikan'`
 */
