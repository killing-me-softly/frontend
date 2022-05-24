import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feeling } from '../models/feeling';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

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
}
