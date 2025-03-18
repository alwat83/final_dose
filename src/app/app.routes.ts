import { Routes } from '@angular/router';
import { MedicationSearchComponent } from './components/medication-search.component';
import { DrugDetailsComponent } from './components/drug-details/drug-details.component';
import { TrackingListComponent } from './components/tracking-list/tracking-list.component';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { DosageCorrectionComponent } from './components/dosage-correction.component';
import { TestComponent } from './components/test.component';

export const routes: Routes = [
    { path: 'medication-search', component: MedicationSearchComponent },
    { path: 'drug-details', component: DrugDetailsComponent },
    { path: 'tracking-list', component: TrackingListComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dosage-correction', component: DosageCorrectionComponent },
    { path: '', component: MedicationSearchComponent },
    { path: 'test', component: LoginComponent },
    { path: 'test', component: TestComponent }
];