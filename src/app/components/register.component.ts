import { Component } from '@angular/core';
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

  constructor(private userService: UserService) {}

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
    } catch (error) {
      this.errorMessage = 'Registration failed. Please try again.';
    }
  }
}
