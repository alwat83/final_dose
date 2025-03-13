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
    try {
      const newUser: User = {
        id: '', 
        username: this.username,
        email: this.email,
        password: this.password,
      };
      const result = this.userService.register(newUser);
      console.log('Registration result:', result);
    } catch (error) {
      this.errorMessage = (error as Error).message;
      console.error('Registration Error:', error);
    }
  }
}
