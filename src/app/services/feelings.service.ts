import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feeling } from '../models/feeling';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { supporter } from '../models/supporter';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  fetchFeelings(): Observable<Feeling[]> {
    const suffix = "feelings";
    return this.http.get<Feeling[]>(environment.BACKEND_URL + suffix).pipe(tap(_ => console.log("Fetched all feelings")));
  }

  fetchActivities(): Observable<Feeling[]> {
    const suffix = "feelings";
    return this.http.get<any>(environment.BACKEND_URL + suffix).pipe(tap(_ => console.log("Fetched all feelings")));
  }

  fetchSayings(): Observable<Feeling[]> {
    const suffix = "feelings";
    return this.http.get<any>(environment.BACKEND_URL + suffix).pipe(tap(_ => console.log("Fetched all feelings")));
  }

  fetchSupporters(): Observable<supporter[]> {
    const suffix = 'supporters';
    return this.http
      .get<supporter[]>(environment.BACKEND_URL + suffix)
      .pipe(tap((_) => console.log('Fetched all supporters')));
  }

}
