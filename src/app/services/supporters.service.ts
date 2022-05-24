import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Constants } from '../config/constants';
import { supporter } from '../models/supporter';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class SupportersService {
  private subscription: Subscription = Subscription.EMPTY;

  constructor(private constants: Constants, private dataService: DataService) {}

  connectUserToSupporter(): Observable<supporter[]> {
    return this.dataService.fetchSupporters();
  }

  transferToTelegramChat(): void {
    this.subscription = this.connectUserToSupporter().subscribe(
      (supporters) => {
        const selectedSupporter =
          supporters[Math.floor(Math.random() * supporters.length)];
        window.open(
          `${environment.TELEGRAM_ENDPOINT}${selectedSupporter?.telegram_user}`
        );
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
