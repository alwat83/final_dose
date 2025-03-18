import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-login',
  standalone: true, // Add standalone property
  imports: [CommonModule, FormsModule], // Add CommonModule and FormsModule to imports
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