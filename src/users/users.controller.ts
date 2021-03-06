import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { User } from './shared/user.entity';
import { UserService } from './shared/user.service';
import { JwtAuthGuard } from '../auth/shared/jwt-auth.guard';

@Controller()
export class UsersController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('users')
  async getAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post('user/email')
  async getByEmail(@Body() user: User): Promise<User[]> {
    return await this.userService.getByEmail(user.email);
  }

  @UseGuards(JwtAuthGuard)
  @Get('users/:id')
  async getById(@Param('id') id: string): Promise<User> {
    return this.userService.getById(id);
  }

  @Post('users')
  async create(@Body() user: User) {
    return this.userService.create(user);
  }

  @Post('points')
  async registerPoints(@Body() info: any) {
    return this.userService.registerPoints(info);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('users/:id')
  async update(@Param('id') id: string, @Body() user: User): Promise<User> {
    return this.userService.update(id, user);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('users/:id')
  async delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
