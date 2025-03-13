import { Component } from '@angular/core';
import { MedicationTrackingService } from '../services/medication-tracking.service';

@Component({
  selector: 'app-medication-tracking',
  templateUrl: './medication-tracking.component.html',
})
export class MedicationTrackingComponent {
  medicationName: string = '';
  dosage: string = '';
  frequency: string = '';
  trackedMedications: any[] = [];

  constructor(private medicationTrackingService: MedicationTrackingService) {}

  addMedication() {
    const medication = {
      name: this.medicationName,
      dosage: this.dosage,
      frequency: this.frequency,
    };
    this.medicationTrackingService.addMedication(medication).subscribe(
      (result) => {
        this.trackedMedications.push(result);
        this.medicationName = '';
        this.dosage = '';
        this.frequency = '';
      },
      (error) => {
        console.error('Error adding medication:', error);
      }
    );
  }

  getTrackedMedications() {
    this.medicationTrackingService.getTrackedMedications().subscribe(
      (medications) => {
        this.trackedMedications = medications;
      },
      (error) => {
        console.error('Error fetching tracked medications:', error);
      }
    );
  }
}
