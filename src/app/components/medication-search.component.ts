import { Component } from '@angular/core';

@Component({
  selector: 'app-medication-search',
  templateUrl: './medication-search.component.html',
  styleUrls: ['./medication-search.component.css']
})
export class MedicationSearchComponent {
  searchQuery: string = '';
  medications: string[] = [];

  searchMedication() {
    // Implement search functionality here
    console.log('Searching for medication:', this.searchQuery);
    // Example: Add the search query to the medications array
    this.medications.push(this.searchQuery);
  }
}
