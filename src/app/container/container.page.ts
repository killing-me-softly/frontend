import { Component, OnInit } from '@angular/core';
import { SupportersService } from '../services/supporters.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.page.html',
  styleUrls: ['./container.page.scss'],
})
export class ContainerPage implements OnInit {
  constructor(private supportersService: SupportersService) {}

  ngOnInit() {}

  transferToTelegramChat(): void {
    this.supportersService.connectUserToSupporter();
  }
}
