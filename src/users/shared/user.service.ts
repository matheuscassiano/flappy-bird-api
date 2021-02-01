import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
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

  async create(user: User) {
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(user)
      .execute();

    const result = await this.getById(user.id);
    return result;
  }

  async update(id: string, user: User) {
    await getConnection()
      .createQueryBuilder()
      .update(User)
      .set(user)
      .where('id = :id', { id: 1 })
      .execute();

    const result = await this.getById(user.id);
    return result;
  }

  async delete(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
