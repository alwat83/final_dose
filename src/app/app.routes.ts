import { Routes } from '@angular/router';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { MedicationSearchComponent } from './medication-search.component';
import { MedicationTrackingComponent } from './medication-tracking.component';
import { DosageCorrectionComponent } from './dosage-correction.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'medication-search', component: MedicationSearchComponent },
  { path: 'medication-tracking', component: MedicationTrackingComponent },
  { path: 'dosage-correction', component: DosageCorrectionComponent },
];
