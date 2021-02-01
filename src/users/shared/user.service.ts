import { Injectable } from '@nestjs/common';
import { User } from './user';

@Injectable()
export class UserService {
  users: User[] = [
    {
      id: 1,
      username: 'matheuscassiano',
      email: 'matheuscassiano9@gmail.com',
      password: '',
      lifes: 3,
      classification: 7,
      accessToken: '',
    },
    {
      id: 2,
      username: 'matheuscassiano',
      email: 'matheuscassiano9@gmail.com',
      password: '',
      lifes: 3,
      classification: 3,
      accessToken: '',
    },
    {
      id: 3,
      username: 'matheuscassiano',
      email: 'matheuscassiano9@gmail.com',
      password: '',
      lifes: 3,
      classification: 4,
      accessToken: '',
    },
    {
      id: 4,
      username: 'matheuscassiano',
      email: 'matheuscassiano9@gmail.com',
      password: '',
      lifes: 3,
      classification: 5,
      accessToken: '',
    },
    {
      id: 5,
      username: 'matheuscassiano',
      email: 'matheuscassiano9@gmail.com',
      password: '',
      lifes: 3,
      classification: 6,
      accessToken: '',
    },
    {
      id: 6,
      username: 'matheuscassiano',
      email: 'matheuscassiano9@gmail.com',
      password: '',
      lifes: 3,
      classification: 2,
      accessToken: '',
    },
    {
      id: 7,
      username: 'matheuscassiano',
      email: 'matheuscassiano9@gmail.com',
      password: '',
      lifes: 3,
      classification: 1,
      accessToken: '',
    },
  ];

  getAll() {
    return this.users;
  }

  getById(id: number) {
    const user = this.users.find((value) => value.id == id);
    return user;
  }

  create(user: User) {
    let lastId = 0;
    if (this.users.length > 0) {
      lastId = this.users[this.users.length - 1].id;
    }

    user.id = lastId + 1;
    this.users.push(user);

    return user;
  }

  update(user: User) {
    const userArray = this.getById(user.id);
    if (userArray) {
      userArray.username = user.username;
      userArray.email = user.email;
      userArray.password = user.password;
      userArray.accessToken = user.password;
      userArray.lifes = user.lifes;
      userArray.classification = user.classification;
    }

    return userArray;
  }

  delete(id: number) {
    const index = this.users.findIndex((value) => value.id == id);
    this.users.splice(index, 1);
  }
}
