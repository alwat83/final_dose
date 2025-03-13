import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  username = '';
  password = '';
  email = '';
  errorMessage: string | null = null;

  constructor(private userService: UserService, private router: Router) {}

  register() {
    const newUser: User = {
      id: '', 
      username: this.username,
      email: this.email,
      password: this.password,
    };
    try {
      const result = this.userService.register(newUser);
      console.log('Registration result:', result);
      this.errorMessage = null;
      this.router.navigate(['/login']);
    } catch (error) {
      this.errorMessage = 'Registration failed. Please try again.';
    }
  }
}
