import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DosageCorrectionService {
  private apiUrl = 'http://localhost:3000/api/dosage-correction';

  constructor(private http: HttpClient) {}

  correctDosage(dosageCorrection: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/correct`, dosageCorrection);
  }

  getCorrectedDosages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/corrected-dosages`);
  }
}
