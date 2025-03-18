import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface OpenFDAResult {
  results: {
    openfda?: {
      generic_name?: string[];
      brand_name?: string[];
    };
  }[];
}

@Component({
  selector: 'app-medication-search',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './medication-search.component.html',
  styleUrls: ['./medication-search.component.css'],
})
export class MedicationSearchComponent {
  searchQuery: string = '';
  medications: string[] = [];
  errorMessage: string | null = null;

  constructor(private http: HttpClient) {}

  searchMedication() {
    const apiUrl = `https://api.fda.gov/drug/label.json?search=openfda.generic_name:"${encodeURIComponent(this.searchQuery)}"&limit=10`;

    this.http.get<OpenFDAResult>(apiUrl).pipe(
      map((response) => {
        if (response.results) {
          return response.results.map((result) => {
            if (result.openfda && result.openfda.generic_name) {
              return result.openfda.generic_name[0];
            } else if (result.openfda && result.openfda.brand_name) {
              return result.openfda.brand_name[0];
            } else {
              return 'No Name Found';
            }
          });
        } else {
          return [];
        }
      })
    ).subscribe({
      next: (medicationNames) => {
        this.medications = medicationNames;
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.error('API Error:', error);
      },
    });
  }
}