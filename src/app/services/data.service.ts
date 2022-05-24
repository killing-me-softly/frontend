import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private questions: Observable<Question[]>;
  private url = `${environment.BACKEND_URL}/questions`;
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

  fetchFromBackend(questionId: string) {
    if (!this.questions) {
      this.questions = this.http.get<Question[]>(this.url);
    }

    return this.questions.pipe(
      map((res) =>
        res.filter((x) => x.id === questionId)[0].answers.map((x) => x.answer)
      )
    );
  }
}
