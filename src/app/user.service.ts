import { User } from './user';

export class UserService {
  private users: User[] = [];

  register(user: User): User {
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
    for (const user of this.users) {
      if (user.username === username && user.password === password) {
        return user;
      }
    }
    return null;
  }

  private generateUniqueId(): string {
    return Math.random().toString(36).substring(2, 15);
  }
}