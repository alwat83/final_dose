import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  username = '';
  password = '';
  email = '';
  errorMessage: string | null = null;

  constructor(private userService: UserService) {}

  async register() {
    try {
      const newUser: User = { // Use User, not Omit<User, 'id'>
        id: '', // id is generated in the service
        username: this.username,
        email: this.email,
        password: this.password,
      };
      const result = await this.userService.register(newUser);
      console.log('Registration result:', result);
      this.errorMessage = null;
      // Redirect or show success message
    } catch (error) {
      if (error instanceof Error) {
        this.errorMessage = error.message;
      } else {
        this.errorMessage = 'An unexpected error occurred.';
      }
      console.error('Registration Error:', error);
    }
  }
}