import { Routes } from '@angular/router';
import { MedicationSearchComponent } from './components/medication-search.component';
import { MedicationTrackingComponent } from './components/medication-tracking.component';
import { DosageCorrectionComponent } from './components/dosage-correction.component';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';

export const routes: Routes = [
  { path: 'medication-search', component: MedicationSearchComponent },
  { path: 'medication-tracking', component: MedicationTrackingComponent },
  { path: 'dosage-correction', component: DosageCorrectionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];
