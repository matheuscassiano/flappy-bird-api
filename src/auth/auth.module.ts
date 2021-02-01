import { AuthService } from './shared/auth.service';
import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { UserService } from 'src/users/shared/user.service';

@Module({
  imports: [],
  controllers: [],
  providers: [AuthService, UserService],
})
export class AuthModule {}
