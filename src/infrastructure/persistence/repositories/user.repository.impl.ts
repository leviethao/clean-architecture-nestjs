/* eslint-disable @typescript-eslint/require-await */
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../../application/interfaces/repositories/user.repository';
import { User } from '../../../domain/entities/user.entity';
import { UserMapper } from '../mappers/user.mapper';

@Injectable()
export class UserRepositoryImpl extends UserRepository {
  private readonly users: User[] = [];

  constructor(private readonly userMapper: UserMapper) {
    super();
  }

  async findById(id: string): Promise<User | null> {
    const user = this.users.find((user) => user.id === id);
    return user ? this.userMapper.toDomain(user) : null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((user) => user.email === email);
    return user ? this.userMapper.toDomain(user) : null;
  }

  async save(user: User): Promise<User> {
    const userIndex = this.users.findIndex((u) => u.id === user.id);
    if (userIndex > -1) {
      this.users[userIndex] = user;
    } else {
      this.users.push(user);
    }
    return this.userMapper.toDomain(user);
  }
}
