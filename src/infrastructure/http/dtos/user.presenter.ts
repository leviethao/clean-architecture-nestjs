import { User } from '../../../domain/entities/user.entity';

/**
 * The UserPresenter class is responsible for formatting the User domain entity
 * for presentation purposes, such as in an HTTP API response.
 *
 * It acts as a transformation layer between the core domain model and the
 * data structure that is sent to the client. This ensures that the internal
 * domain model is not directly exposed and can be modified without breaking
 * the public API contract.
 */
export class UserPresenter {
  id: string;
  name: string;
  email: string;

  /**
   * Constructs a UserPresenter from a User domain entity.
   * @param user - The User entity from the domain layer.
   */
  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
  }
}
