import { Injectable } from '@nestjs/common';
import { UserService } from '../../users/shared/user.service';
@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(userEmail: string, userPassword: string) {
    const user = await this.userService.getByEmail(userEmail);
    if (user && user.password === userPassword) {
      const { id, username, email } = user;
      return { id, username, email };
    }
    return null;
  }
}
