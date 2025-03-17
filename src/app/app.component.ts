import { Component } from '@angular/core';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { MedicationSearchComponent } from './components/medication-search.component';
import { MedicationTrackingComponent } from './components/medication-tracking.component';
import { DosageCorrectionComponent } from './components/dosage-correction.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    LoginComponent,
    RegisterComponent,
    MedicationSearchComponent,
    MedicationTrackingComponent,
    DosageCorrectionComponent,
  ],
  standalone: true,
})
export class AppComponent {
  currentYear: number = new Date().getFullYear(); // Get the current year; <--- Added semicolon here
}