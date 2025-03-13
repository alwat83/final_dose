import { Component } from '@angular/core';

@Component({
  selector: 'app-dosage-correction',
  templateUrl: './dosage-correction.component.html',
  styleUrls: ['./dosage-correction.component.css']
})
export class DosageCorrectionComponent {
  medicationName: string = '';
  dosage: string = '';
  correction: string = '';

  submitCorrection() {
    // Implement correction functionality here
    console.log('Submitting correction for medication:', this.medicationName);
    console.log('Dosage:', this.dosage);
    console.log('Correction:', this.correction);
    // Example: Log the correction data
  }
}
