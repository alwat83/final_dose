import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicationTrackingService {
  private apiUrl = 'http://localhost:3000/api/medications';

  constructor(private http: HttpClient) {}

  addMedication(medication: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add`, medication);
  }

  getTrackedMedications(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/tracked`);
  }
}
