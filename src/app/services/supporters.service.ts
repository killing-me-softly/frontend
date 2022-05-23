import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { supporter } from '../models/supporter';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupportersService {

  constructor(private http: HttpClient) { }

  fetchAll(): Observable<supporter[]> {
    const suffix = "supporters";
    return this.http.get<supporter[]>(environment.BACKEND_URL + suffix).pipe(tap(_ => console.log("Fetched all supporters" )));
  }

  connectUserToSupporter(): void {
    this.fetchAll().subscribe(supporters => {
      const selectedSupporter =  supporters[Math.floor(Math.random()*supporters.length)];
      window.open("https://t.me/" + selectedSupporter?.telegram_user)
    })
  }
}
