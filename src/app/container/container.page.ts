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
    this.supportersService.transferToTelegramChat();
  }

  ngOnDestroy(): void {
    this.connectUserToSupporterSubscription.unsubscribe();
  }
}
