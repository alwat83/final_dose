import { Component } from '@angular/core';
import { DosageCorrectionService } from '../services/dosage-correction.service';

@Component({
  selector: 'app-dosage-correction',
  templateUrl: './dosage-correction.component.html',
})
export class DosageCorrectionComponent {
  medicationName: string = '';
  currentDosage: string = '';
  correctedDosage: string = '';
  correctedDosages: any[] = [];

  constructor(private dosageCorrectionService: DosageCorrectionService) {}

  correctDosage() {
    const dosageCorrection = {
      medicationName: this.medicationName,
      currentDosage: this.currentDosage,
      correctedDosage: this.correctedDosage,
    };
    this.dosageCorrectionService.correctDosage(dosageCorrection).subscribe(
      (result) => {
        this.correctedDosages.push(result);
        this.medicationName = '';
        this.currentDosage = '';
        this.correctedDosage = '';
      },
      (error) => {
        console.error('Error correcting dosage:', error);
      }
    );
  }

  getCorrectedDosages() {
    this.dosageCorrectionService.getCorrectedDosages().subscribe(
      (dosages) => {
        this.correctedDosages = dosages;
      },
      (error) => {
        console.error('Error fetching corrected dosages:', error);
      }
    );
  }
}
