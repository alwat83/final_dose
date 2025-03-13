import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {
  private apiUrl = 'http://localhost:3000/api/medications';

  constructor(private http: HttpClient) {}

  searchMedication(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/search`, { params: { query } });
  }

  getMedicationDetails(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/details`);
  }
}
