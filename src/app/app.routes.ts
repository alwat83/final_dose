import { Routes } from '@angular/router';
import { MedicationSearchComponent } from './components/medication-search.component';
import { MedicationTrackingComponent } from './components/medication-tracking.component';
import { DosageCorrectionComponent } from './components/dosage-correction.component';

export const routes: Routes = [
  { path: 'medication-search', component: MedicationSearchComponent },
  { path: 'medication-tracking', component: MedicationTrackingComponent },
  { path: 'dosage-correction', component: DosageCorrectionComponent }
];
