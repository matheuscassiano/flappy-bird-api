import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './shared/user.service';
import { User } from './shared/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UserService],
  exports: [TypeOrmModule, UserService],
})
export class UsersModule {}
