import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private baseUrl = 'https://rickandmortyapi.com/api'

  constructor(private http: HttpClient) { }

  getLocation(): Observable<any>{
    return this.http.get(`${this.baseUrl}/location`)
  }
}
