import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor() { }

  // Replace with actual data fetching logic or use static data
  getReportsData(): Observable<any[]> {
    // Simulated sample data
    const reportsData = [
      { id: 1, title: 'Requirement Report', description: 'Reuirements Reports list' },
      { id: 2, title: 'Submission Report', description: 'submission performance metrics' },
      { id: 3, title: 'TP1 Report', description: 'TP1 reports summary' },      
      { id: 4, title: 'TP2 Report', description: 'TP2 reports summary' },
      { id: 5, title: 'TP3 Report', description: 'TP3 reports summary' },      
      { id: 6, title: 'Closure Report', description: 'Clouser reports summary' },
      // Add more sample reports as needed
    ];
    return of(reportsData);
  }
}
