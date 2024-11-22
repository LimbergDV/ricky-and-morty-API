import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private _apiUrl = 'https://rickandmortyapi.com/api'

  constructor(private _http: HttpClient) { }

  getAllCharacters():Observable<any>{
    return this._http.get<any>(`${this._apiUrl}/character`);
  }
}
