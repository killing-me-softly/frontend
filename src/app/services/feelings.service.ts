import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feeling } from '../models/feeling';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeelingsService {

  constructor(private http: HttpClient) { }

  fetchAll(): Observable<Feeling[]> {
    const suffix = "feelings";
    return this.http.get<Feeling[]>(environment.BACKEND_URL + suffix).pipe(tap(_ => console.log("Fetched all feelings" )));
  }
}
