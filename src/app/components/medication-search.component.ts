import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-medication-search',
  standalone: true, // Add standalone property
  imports: [CommonModule, FormsModule], // Add CommonModule and FormsModule to imports
  templateUrl: './medication-search.component.html',
  styleUrls: ['./medication-search.component.css'],
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