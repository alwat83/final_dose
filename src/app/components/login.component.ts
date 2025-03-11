import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  template: '',
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private userService: UserService) {}

  login(username: string, password: string): void {
    const result: User | null = this.userService.login(username, password);
    console.log('Login Result:', result);
  }
}