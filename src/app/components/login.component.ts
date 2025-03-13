import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private userService: UserService, private router: Router) {}

  login(): void {
    const result: User | null = this.userService.login(this.username, this.password);
    if (result) {
      console.log('Login Result:', result);
      this.errorMessage = null;
      this.router.navigate(['/medication-search']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
