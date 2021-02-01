import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  getAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  getById(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  create(user: User) {
    return this.usersRepository.save(this.usersRepository.create(user));
  }

  // update(user: User) {
  //   return user;
  // }

  async delete(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
