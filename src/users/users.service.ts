import { Injectable } from '@nestjs/common';

// Mock interface from somewhere
export interface User {
  id?: number;
  name: string;
}

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  create(user: User) {
    this.users.push(user);
  }

  async findAllUsers() {
    return this.users;
  }
}
