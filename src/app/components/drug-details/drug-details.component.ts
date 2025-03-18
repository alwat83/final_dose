import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface OpenFDADrugDetail {
  results: any[];
}

@Component({
  selector: 'app-drug-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './drug-details.component.html',
  styleUrls: ['./drug-details.component.css'],
})
export class DrugDetailsComponent implements OnInit {
  drugDetails: any;
  drugId: string | null = null;
  errorMessage: string | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.drugId = params['id'];
      if (this.drugId) {
        this.fetchDrugDetails();
      }
    });
  }

  fetchDrugDetails(): void {
    const apiUrl = `https://api.fda.gov/drug/label.json?search=id:"${this.drugId}"`;

    this.http.get<OpenFDADrugDetail>(apiUrl).subscribe({
      next: (response) => {
        if (response.results && response.results.length > 0) {
          this.drugDetails = response.results[0];
        } else {
          this.errorMessage = 'Drug details not found.';
        }
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.error('API Error:', error);
      },
    });
  }

  addToTracking(): void {
    const trackingList = JSON.parse(localStorage.getItem('trackingList') || '[]');
    trackingList.push(this.drugDetails);
    localStorage.setItem('trackingList', JSON.stringify(trackingList));
    alert('Drug added to tracking!');
  }
}