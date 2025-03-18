import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-register',
  standalone: true, // Add standalone property
  imports: [CommonModule, FormsModule], // Add CommonModule and FormsModule to imports
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
      const newUser: User = {
        id: '',
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