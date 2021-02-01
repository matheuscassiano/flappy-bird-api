import { Injectable } from '@nestjs/common';
import { UserService } from '../../users/shared/user.service';
@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}
}
