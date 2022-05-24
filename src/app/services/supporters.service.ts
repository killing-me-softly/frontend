import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Constants } from '../config/constants';
import { supporter } from '../models/supporter';
import { DataService } from './data.service';

const telegramUsersMock: Observable<supporter[]> = of([
  {
    name: 'aaa',
    phone_number: '12345',
    telegram_user: 'helpBot',
  },
]);

@Injectable({
  providedIn: 'root',
})
export class SupportersService {
  constructor(private http: HttpClient, private constants: Constants, private dataService: DataService) { }

  connectUserToSupporter(): void {
    //todo when the server is up switch to dataService.fetchSupporters
    telegramUsersMock.subscribe((supporters) => {
      const selectedSupporter =
        supporters[Math.floor(Math.random() * supporters.length)];
      window.open(
        this.constants.TELEGRAM_ENDPOINT + selectedSupporter?.telegram_user
      );
    });
  }
}
