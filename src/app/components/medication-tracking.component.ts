import { Component } from '@angular/core';

@Component({
  selector: 'app-medication-tracking',
  templateUrl: './medication-tracking.component.html',
  styleUrls: ['./medication-tracking.component.css']
})
export class MedicationTrackingComponent {
  medications: { name: string, dosage: string }[] = [];
  newMedicationName: string = '';
  newMedicationDosage: string = '';

  addMedication() {
    if (this.newMedicationName && this.newMedicationDosage) {
      this.medications.push({
        name: this.newMedicationName,
        dosage: this.newMedicationDosage
      });
      this.newMedicationName = '';
      this.newMedicationDosage = '';
    }
  }

  removeMedication(index: number) {
    this.medications.splice(index, 1);
  }
}
