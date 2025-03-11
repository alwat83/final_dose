import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  template: ``,
})
export class RegisterComponent {
  username = '';
  password = '';
  email = '';

  constructor(private userService: UserService) {}

  register() {
    const newUser: User = {
      id: '', 
      username: this.username,
      email: this.email,
      password: this.password,
    };
    const result = this.userService.register(newUser);
    console.log('Registration result:', result);
  }
}