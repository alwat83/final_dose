import { Component, OnInit } from '@angular/core';
import { MedicationService } from '../services/medication.service';

@Component({
  selector: 'app-medication-search',
  templateUrl: './medication-search.component.html',
})
export class MedicationSearchComponent implements OnInit {
  searchQuery: string = '';
  searchResults: any[] = [];

  constructor(private medicationService: MedicationService) {}

  ngOnInit() {
    this.fetchMedicationDetails();
  }

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

  fetchMedicationDetails() {
    this.medicationService.getMedicationDetails().subscribe(
      (details) => {
        console.log('Medication details:', details);
      },
      (error) => {
        console.error('Error fetching medication details:', error);
      }
    );
  }
}
