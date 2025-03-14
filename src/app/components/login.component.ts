import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username!: string;
  password!: string;
  errorMessage: string | null = null;

  constructor(private userService: UserService) {}

  login(): void {
    try {
      const result: User | null = this.userService.login(this.username, this.password);
      if (!result) {
        throw new Error('Invalid username or password');
      }
      console.log('Login Result:', result);
    } catch (error) {
      this.errorMessage = (error as Error).message;
      console.error('Login Error:', error);
    }
  }
}
