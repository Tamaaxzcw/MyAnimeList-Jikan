// src/errors/JikanError.js

/**
 * Custom error class for handling errors returned from the Jikan API.
 * @author tamaaxzcw
 */
export class JikanError extends Error {
  constructor(status, statusText, errorData) {
    const message = errorData?.message || `Jikan API Error: ${status} ${statusText}`;
    super(message);

    this.name = 'JikanError';
    this.status = status;
    this.statusText = statusText;
    this.data = errorData;
  }
}
