import { Module } from '@nestjs/common';
import { UserRepository } from '../../application/interfaces/repositories/user.repository';
import { UserRepositoryImpl } from './repositories/user.repository.impl';
import { UserMapper } from './mappers/user.mapper';

@Module({
  providers: [
    UserMapper,
    {
      provide: UserRepository,
      useClass: UserRepositoryImpl,
    },
  ],
  exports: [UserRepository],
})
export class PersistenceModule {}
