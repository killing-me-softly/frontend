import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {HowWasYourDayService} from '../how-was-your-day.service';

@Component({
  selector: 'app-what-did-he-say',
  templateUrl: './what-did-he-say.page.html',
  styleUrls: ['./what-did-he-say.page.scss'],
})
export class WhatDidHeSayPage implements OnInit {
  sayings: string[];

  constructor(
    private dataService: DataService,
    private howWasYourDayService: HowWasYourDayService
  ) { }

  ngOnInit() {
    this.dataService.fetchSayings().subscribe(sayings => {
      this.sayings = sayings.slice();
    });
  }

  isSayingSelected(saying: string): boolean {
    return this.howWasYourDayService.whatDidHeSay.includes(saying);
  }

  finish() {
    alert('סיימתי את השאלון');
  }

  editSaying(saying: string) {
    const index = this.howWasYourDayService.whatDidHeSay.indexOf(saying);
    if (index > -1) {
      this.howWasYourDayService.whatDidHeSay.splice(index, 1); // 2nd parameter means remove one item only
    } else {
      this.howWasYourDayService.whatDidHeSay.push(saying);
    }
  }
}
