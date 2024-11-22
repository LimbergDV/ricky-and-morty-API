import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private baseUrl = 'https://rickandmortyapi.com/api'

  constructor(private http: HttpClient) { }

  getLocation(): Observable<Location[]>{
    return this.http.get<Location[]>(`${this.baseUrl}/location`)
  }
}
