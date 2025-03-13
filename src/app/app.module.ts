import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { MedicationSearchComponent } from './components/medication-search.component';
import { MedicationTrackingComponent } from './components/medication-tracking.component';
import { DosageCorrectionComponent } from './components/dosage-correction.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MedicationSearchComponent,
    MedicationTrackingComponent,
    DosageCorrectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
