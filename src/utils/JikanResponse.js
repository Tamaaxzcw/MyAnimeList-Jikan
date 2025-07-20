// src/utils/JikanResponse.js

/**
 * A standardized wrapper for Jikan API responses.
 * @author tamaaxzcw
 */
export class JikanResponse {
  constructor(response) {
    /**
     * The main data payload from the API.
     * @type {Array|Object}
     */
    this.data = response.data;

    /**
     * The pagination details, if available.
     * @type {Object|null}
     */
    this.pagination = response.pagination || null;
  }
}
