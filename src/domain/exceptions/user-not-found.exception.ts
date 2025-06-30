/**
 * A custom exception class to indicate that a requested User was not found.
 *
 * This exception is part of the Domain Layer. It allows the application's core logic
 * (like use cases) to signal a specific business rule violation without being coupled
 * to any framework-specific exception handling (e.g., NestJS's HttpException).
 *
 * The outer layers (like the Infrastructure Layer's controllers) can then catch this
 * specific exception and translate it into an appropriate response, such as an
 * HTTP 404 Not Found error.
 */
export class UserNotFoundException extends Error {
  /**
   * Constructs a new UserNotFoundException.
   * @param message - The optional error message. Defaults to 'User not found.'
   */
  constructor(message: string = 'User not found.') {
    // Calling the parent constructor (Error) with the provided message.
    super(message);

    // Setting the exception name, which is useful for logging and debugging.
    this.name = 'UserNotFoundException';

    // This line is for maintaining a proper stack trace in V8 environments (like Node.js).
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, UserNotFoundException);
    }
  }
}
