import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dose Ninja';

  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  navigateToMedicationSearch() {
    this.router.navigate(['/medication-search']);
  }

  navigateToMedicationTracking() {
    this.router.navigate(['/medication-tracking']);
  }

  navigateToDosageCorrection() {
    this.router.navigate(['/dosage-correction']);
  }
}
