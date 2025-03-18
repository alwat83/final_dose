import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root', // Or add to module providers
})
export class UserService {
  private users: User[] = [];

  register(user: User): User {
    const existingUser = this.users.find((u) => u.username === user.username);
    if (existingUser) {
      throw new Error('Username already exists.');
    }

    const newUser: User = {
      id: this.generateUniqueId(),
      username: user.username,
      email: user.email,
      password: user.password,
    };
    this.users.push(newUser);
    return newUser;
  }

  login(username: string, password: string): User | null {
    return this.users.find(
      (user) => user.username === username && user.password === password
    ) || null;
  }

  private generateUniqueId(): string {
    return Math.random().toString(36).substring(2, 15);
  }
}