import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {songConfig} from '../config/songConfig';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient) {}

  getSong(artistName: string): Observable<any> {
    return this.http.get(songConfig.baseURL + songConfig.apiKey + artistName
      , {observe: 'body', responseType: 'json'});
  }
}
