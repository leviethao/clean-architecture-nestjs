import { Injectable, Inject } from '@nestjs/common';
import { User } from '../../../domain/entities/user.entity';
import { UserNotFoundException } from '../../../domain/exceptions/user-not-found.exception';
import { UserRepository } from '../../interfaces/repositories/user.repository';

@Injectable()
export class GetUserByIdUseCase {
  /**
   * Constructor for GetUserByIdUseCase.
   * @param userRepository - The user repository, injected based on the abstract class.
   * This follows the Dependency Inversion Principle, as the use case depends on an
   * abstraction (`UserRepository`) rather than a concrete implementation.
   */
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  /**
   * Executes the use case to find a user by their ID.
   * @param id - The string ID of the user to find.
   * @returns A Promise that resolves to the found User entity.
   * @throws {UserNotFoundException} If no user is found with the given ID.
   */
  async execute(id: string): Promise<User> {
    // Calls the repository to find the user. The use case itself does not know
    // how the user is being fetched (e.g., from a database, an API, or an in-memory array).
    const user = await this.userRepository.findById(id);

    // If the user is not found, it throws a domain-specific exception.
    // This allows the calling layer (e.g., the controller) to handle the error appropriately.
    if (!user) {
      throw new UserNotFoundException(`User with ID '${id}' not found.`);
    }

    return user;
  }
}
