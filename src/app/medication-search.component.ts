import { Component } from '@angular/core';
import { MedicationService } from '../services/medication.service';

@Component({
  selector: 'app-medication-search',
  templateUrl: './medication-search.component.html',
})
export class MedicationSearchComponent {
  searchQuery: string = '';
  searchResults: any[] = [];

  constructor(private medicationService: MedicationService) {}

  searchMedication() {
    this.medicationService.searchMedication(this.searchQuery).subscribe(
      (results) => {
        this.searchResults = results;
      },
      (error) => {
        console.error('Error searching medication:', error);
      }
    );
  }
}
