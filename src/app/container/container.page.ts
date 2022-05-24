import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from '../../environments/environment';
import { SupportersService } from '../services/supporters.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.page.html',
  styleUrls: ['./container.page.scss'],
})
export class ContainerPage implements OnInit, OnDestroy {
  private connectUserToSupporterSubscription: Subscription;
  constructor(private supportersService: SupportersService) {}

  ngOnInit() {}
  transferToTelegramChat(): void {
    this.connectUserToSupporterSubscription = this.supportersService
      .connectUserToSupporter()
      .subscribe((supporters) => {
        const selectedSupporter =
          supporters[Math.floor(Math.random() * supporters.length)];
        window.open(
          `${environment.TELEGRAM_ENDPOINT}${selectedSupporter?.telegram_user}`
        );
      });
  }
  ngOnDestroy(): void {
    this.connectUserToSupporterSubscription.unsubscribe();
  }
}
