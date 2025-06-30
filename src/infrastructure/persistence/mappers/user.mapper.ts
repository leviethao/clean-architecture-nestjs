/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Injectable } from '@nestjs/common';
import { User } from '../../../domain/entities/user.entity';

@Injectable()
export class UserMapper {
  toDomain(persistenceUser: any): User {
    // In a real scenario, persistenceUser would be a database entity
    return new User(
      persistenceUser.id,
      persistenceUser.name,
      persistenceUser.email,
    );
  }

  toPersistence(domainUser: User): any {
    // In a real scenario, this would return a database entity
    return {
      id: domainUser.id,
      name: domainUser.name,
      email: domainUser.email,
    };
  }
}
