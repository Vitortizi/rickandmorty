import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { HandleErrorService } from '../handle-error/handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly API = environment.baseUrlAPI;

  constructor(private http: HttpClient, private handleErrorService: HandleErrorService) { }

  getEpisode() {
    return this.http.get<any>(`${this.API}episode/?page=1`)
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError(this.handleErrorService.handleError<Body>('character')),
      );
  }

  getDetail(id: any, type: any) {
    return this.http.get<any>(`${this.API}${type}/${id}`)
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError(this.handleErrorService.handleError<Body>('getEpisodeDetail')),
      );
  }

  getCharacter() {
    return this.http.get<any>(`${this.API}character/?page=1`)
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError(this.handleErrorService.handleError<Body>('getCharacter')),
      );
  }

  getCharacterDetails(id: any) {
    return this.http.get<any>(`${this.API}character/${id}`)
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError(this.handleErrorService.handleError<Body>('getCharacter')),
      );
  }

  getMultiCharacter(array: any) {
    return this.http.get<any>(`${this.API}character/${array}`)
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError(this.handleErrorService.handleError<Body>('getMultiCharacter')),
      );
  }
  
  getLocation() {
    return this.http.get<any>(`${this.API}location/?page=1`)
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError(this.handleErrorService.handleError<Body>('getLocation')),
      );
  }
}
