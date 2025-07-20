// src/clients/JikanClient.js

import { RequestHandler } from '../utils/RequestHandler.js';
import { ValidationError } from '../errors/ValidationError.js';

export class JikanClient {
    constructor(path) {
        this.request = new RequestHandler(path);
    }

    /**
     * Get resource by its ID.
     * @param {number} id - The resource ID.
     * @returns {Promise<JikanResponse>}
     */
    async getById(id) {
        if (!id || typeof id !== 'number') {
            throw new ValidationError('Invalid ID supplied. ID must be a number.');
        }
        return this.request.get(`/${id}/full`);
    }

    /**
     * Get characters of a specific resource.
     * @param {number} id - The resource ID.
     * @returns {Promise<JikanResponse>}
     */
    async getCharacters(id) {
        if (!id || typeof id !== 'number') {
            throw new ValidationError('Invalid ID supplied. ID must be a number.');
        }
        return this.request.get(`/${id}/characters`);
    }
    
    /**
     * Search for resources.
     * @param {object} params - The search parameters.
     * @returns {Promise<JikanResponse>}
     */
    async search(params = {}) {
        return this.request.get('', params);
    }
    
    // Anda dapat menambahkan lebih banyak metode umum di sini
    // contoh: getStaff(id), getPictures(id), dll.
    // Metode spesifik akan ada di kelas turunannya jika diperlukan.
}
