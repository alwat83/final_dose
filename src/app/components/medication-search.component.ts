import { Component } from '@angular/core';

@Component({
  selector: 'app-medication-search',
  templateUrl: './medication-search.component.html',
  styleUrls: ['./medication-search.component.css']
})
export class MedicationSearchComponent {
  searchQuery: string = '';
  medications: string[] = [];
  errorMessage: string | null = null;

  searchMedication() {
    try {
      // Implement search functionality here
      console.log('Searching for medication:', this.searchQuery);
      // Example: Add the search query to the medications array
      this.medications.push(this.searchQuery);
    } catch (error) {
      this.errorMessage = (error as Error).message;
      console.error('Search Error:', error);
    }
  }
}
