import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserUseCasesModule } from '../../application/use-cases/user/user.use-case.module';

@Module({
  imports: [UserUseCasesModule],
  controllers: [UserController],
})
export class HttpModule {}
