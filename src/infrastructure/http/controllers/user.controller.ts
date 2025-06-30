import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateUserUseCase } from '../../../application/use-cases/user/create-user.use-case';
import { GetUserByIdUseCase } from '../../../application/use-cases/user/get-user-by-id.use-case';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserPresenter } from '../dtos/user.presenter';
import { UserNotFoundException } from '../../../domain/exceptions/user-not-found.exception';

@Controller('users')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getUserByIdUseCase: GetUserByIdUseCase,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserPresenter> {
    const user = await this.createUserUseCase.execute(
      createUserDto.name,
      createUserDto.email,
    );
    return new UserPresenter(user);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserPresenter> {
    try {
      const user = await this.getUserByIdUseCase.execute(id);
      return new UserPresenter(user);
    } catch (error) {
      if (error instanceof UserNotFoundException) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
