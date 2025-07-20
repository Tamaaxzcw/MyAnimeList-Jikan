// src/errors/ValidationError.js

/**
 * Custom error class for handling validation errors on user input,
 * before a request is sent to the Jikan API.
 * @author tamaaxzcw
 */
export class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}
