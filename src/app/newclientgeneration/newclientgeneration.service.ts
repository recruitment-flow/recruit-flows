import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppConfig } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewclientgenerationService {

  private apiUrl = AppConfig.baseURI;
  constructor(private http: HttpClient) { }
  
  getReq(): Observable<any> {
    // Replace with actual API endpoint for login
    return this.http.get<any>(`${this.apiUrl}/requirements`);
    
  }
  getClient(): Observable<any> {
    // Replace with actual API endpoint for login
    return this.http.get<any>(`${this.apiUrl}/clients`);
    
  }
  getGroup(): Observable<any> {
    // Replace with actual API endpoint for login
    return this.http.get<any>(`${this.apiUrl}/groups`);
    
  }
  getManager(): Observable<any> {
    // Replace with actual API endpoint for login
    return this.http.get<any>(`${this.apiUrl}/managers`);
    
  }
  getLeadRecruiter(): Observable<any> {
    // Replace with actual API endpoint for login 
    return this.http.get<any>(`${this.apiUrl}/leads`);
    
  }
  // getLead(): Observable<any> {
  //   // Replace with actual API endpoint for login
  //   return this.http.get<any>(`${this.apiUrl}/leads`);
    
  // }
  getRecruiter(): Observable<any> {
    // Replace with actual API endpoint for login
    return this.http.get<any>(`${this.apiUrl}/recruiters`);
    
  }

  insertActivityList(data: any,type:any){
    return this.http.post(`${this.apiUrl}/${type}`, data);
  }
}
