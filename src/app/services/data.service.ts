import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Question } from '../models/question';
import { supporter } from '../models/supporter';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private questions: Observable<Question[]>;
  private feelingsUrl = `${environment.BACKEND_URL}/questions`;
  private fsupportersUrl = `${environment.BACKEND_URL}/supporters`;
  constructor(private http: HttpClient) {}
  fetchFeelings(): Observable<string[]> {
    return this.fetchFromBackend('628bb8918a21ca4b6095ff45');
  }

  fetchActivities(): Observable<string[]> {
    return this.fetchFromBackend('628bb73b8a21ca4b6095ff3c');
  }

  fetchSayings(): Observable<string[]> {
    return this.fetchFromBackend('628bb7238a21ca4b6095ff27');
  }

  fetchSupporters(): Observable<supporter[]> {
    return this.http.get<supporter[]>(this.fsupportersUrl);
  }
  fetchFromBackend(questionId: string) {
    if (!this.questions) {
      this.questions = this.http.get<Question[]>(this.feelingsUrl);
    }

    return this.questions.pipe(
      map((res) =>
        res.filter((x) => x.id === questionId)[0].answers.map((x) => x.answer)
      )
    );
  }
}
