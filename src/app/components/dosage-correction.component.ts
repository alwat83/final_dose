import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-dosage-correction',
  standalone: true, // Add standalone property
  imports: [CommonModule, FormsModule], // Add CommonModule and FormsModule to imports
  templateUrl: './dosage-correction.component.html',
  styleUrls: ['./dosage-correction.component.css'],
})
export class DosageCorrectionComponent {
  medicationName: string = '';
  dosage: string = '';
  correction: string = '';
  errorMessage: string | null = null;

  submitCorrection() {
    try {
      // Implement correction functionality here
      console.log('Submitting correction for medication:', this.medicationName);
      console.log('Dosage:', this.dosage);
      console.log('Correction:', this.correction);
      // Example: Log the correction data
    } catch (error) {
      this.errorMessage = (error as Error).message;
      console.error('Dosage Correction Error:', error);
    }
  }
}