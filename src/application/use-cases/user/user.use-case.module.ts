import { Module } from '@nestjs/common';
import { CreateUserUseCase } from './create-user.use-case';
import { GetUserByIdUseCase } from './get-user-by-id.use-case';
import { PersistenceModule } from '../../../infrastructure/persistence/persistence.module';
// import { UserRepository } from '../../interfaces/repositories/user.repository';

@Module({
  imports: [PersistenceModule],
  providers: [CreateUserUseCase, GetUserByIdUseCase],
  exports: [CreateUserUseCase, GetUserByIdUseCase],
})
export class UserUseCasesModule {}
