import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-medication-tracking',
  standalone: true, // Add standalone property
  imports: [CommonModule, FormsModule], // Add CommonModule and FormsModule to imports
  templateUrl: './medication-tracking.component.html',
  styleUrls: ['./medication-tracking.component.css'],
})
export class MedicationTrackingComponent {
  medications: { name: string; dosage: string }[] = [];
  newMedicationName: string = '';
  newMedicationDosage: string = '';
  errorMessage: string | null = null;

  addMedication() {
    try {
      if (this.newMedicationName && this.newMedicationDosage) {
        this.medications.push({
          name: this.newMedicationName,
          dosage: this.newMedicationDosage,
        });
        this.newMedicationName = '';
        this.newMedicationDosage = '';
      }
    } catch (error) {
      this.errorMessage = (error as Error).message;
      console.error('Add Medication Error:', error);
    }
  }

  removeMedication(index: number) {
    try {
      this.medications.splice(index, 1);
    } catch (error) {
      this.errorMessage = (error as Error).message;
      console.error('Remove Medication Error:', error);
    }
  }
}