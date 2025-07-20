// src/utils/RequestHandler.js

import { BASE_URL } from '../constants/urls.js';
import { JikanError } from '../errors/JikanError.js';
import { JikanResponse } from './JikanResponse.js';

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

export class RequestHandler {
    constructor(path) {
        this.path = path;
    }

    async get(endpoint, queryParams = {}) {
        const url = this.buildUrl(endpoint, queryParams);
        let lastError = null;

        for (let i = 0; i < MAX_RETRIES; i++) {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    const errorData = await response.json().catch(() => null);
                    if (response.status === 429) { // Rate limited
                        console.warn(`[MyAnimeList-Jikan] Rate limited. Retrying in ${RETRY_DELAY / 1000}s...`);
                        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY * (i + 1)));
                        continue; // Retry the request
                    }
                    throw new JikanError(response.status, response.statusText, errorData);
                }

                const json = await response.json();
                return new JikanResponse(json);

            } catch (error) {
                lastError = error;
                if (error instanceof JikanError && error.status !== 429) {
                    // Don't retry on non-rate-limit API errors
                    break;
                }
            }
        }
        
        throw lastError || new JikanError(500, 'Failed to fetch data after multiple retries.');
    }

    buildUrl(endpoint, queryParams) {
        const url = new URL(`${BASE_URL}/${this.path}${endpoint}`);
        
        // Clean up any undefined or null query parameters
        Object.keys(queryParams).forEach(key => {
            if (queryParams[key] === undefined || queryParams[key] === null) {
                delete queryParams[key];
            }
        });

        url.search = new URLSearchParams(queryParams).toString();
        return url.toString();
    }
}
