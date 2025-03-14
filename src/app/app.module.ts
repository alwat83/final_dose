import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component'; // Assuming AppComponent is standalone
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { MedicationSearchComponent } from './components/medication-search.component';
import { MedicationTrackingComponent } from './components/medication-tracking.component';
import { DosageCorrectionComponent } from './components/dosage-correction.component';
import { routes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    CommonModule,
    AppComponent, // Import the standalone AppComponent
    LoginComponent,
    RegisterComponent,
    MedicationSearchComponent,
    MedicationTrackingComponent,
    DosageCorrectionComponent,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MedicationSearchComponent,
    MedicationTrackingComponent,
    DosageCorrectionComponent
  ],
  providers: [],
})
export class AppModule { }
