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
    const result: User | null = this.userService.login(this.username, this.password);
    if (result) {
      console.log('Login Result:', result);
      this.errorMessage = null;
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
