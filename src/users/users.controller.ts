import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from './shared/user.entity';
import { UserService } from './shared/user.service';

@Controller()
export class UsersController {
  constructor(private userService: UserService) {}

  @Get('users')
  async getAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Get('users/:id')
  async getById(@Param('id') id: string): Promise<User> {
    return this.userService.getById(id);
  }

  @Post('users')
  async create(@Body() user: User) {
    return this.userService.create(user);
  }

  @Put('users/:id')
  async update(@Param('id') id: string, @Body() user: User): Promise<User> {
    return this.userService.update(id, user);
  }

  @Delete('users/:id')
  async delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
