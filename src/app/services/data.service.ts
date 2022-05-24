import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feeling } from '../models/feeling';
import { Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  fetchFeelings(): Observable<string[]> {
    const suffix = "feelings";
    return of(["עצב", "עלבון", "פחד", "חרדה", "דכדוך", "השפלה", "בהלה"])
    // return this.http.get<Feeling[]>(environment.BACKEND_URL + suffix).pipe(tap(_ => console.log("Fetched all feelings")));
  }

  fetchActivities(): Observable<string[]> {
    const suffix = "feelings";
    return of(["מאזין לשיחות", "מצטט אותך", "עוקב אחרייך", "מאיים", "בודק איפה את", "מתקשר איפה את", "מתקשר כמה פעמים ביום", "מאשים אותך ברומנים"])
    // return this.http.get<any>(environment.BACKEND_URL + suffix).pipe(tap(_ => console.log("Fetched all feelings")));
  }

  fetchSayings(): Observable<string[]> {
    const suffix = "feelings";
    return of(["את אשמה", "את מחפשת אותי", "את גומרת את הקשר", "את ממציאה", "שתגידי לי ככה", "את רגישה מדיי", "למה את לובשת את זה", "שתכעסי עליי", "את פלרטטנית"])
    // return this.http.get<any>(environment.BACKEND_URL + suffix).pipe(tap(_ => console.log("Fetched all feelings")));
  }
}
