import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  users: User[] = [
    {
      id: '1',
      username: 'matheuscassiano',
      email: 'matheuscassiano9@gmail.com',
      password: '',
      lifes: 3,
      classification: 7,
      accessToken: '',
    },
  ];

  getAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  getById(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  // create(user: User) {
  //   return user;
  // }

  // update(user: User) {
  //   return user;
  // }

  async delete(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
