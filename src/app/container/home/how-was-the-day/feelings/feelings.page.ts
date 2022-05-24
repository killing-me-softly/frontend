import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/feelings.service';
import { Feeling } from '../../../../models/feeling';
import {HowWasYourDayService} from '../how-was-your-day.service';

@Component({
  selector: 'app-feelings',
  templateUrl: './feelings.page.html',
  styleUrls: ['./feelings.page.scss'],
})
export class FeelingsPage implements OnInit {
  feelings: Feeling[];

  constructor(
    private dataService: DataService,
    private howWasYourDayService: HowWasYourDayService
              ) { }

  ngOnInit() {
    this.dataService.fetchFeelings().subscribe(feelings => {
      this.feelings = feelings.slice();
    });
  }

  editFeeling(feelingName: string) {
    const index = this.howWasYourDayService.feelings.indexOf(feelingName);
    if (index > -1) {
      this.howWasYourDayService.feelings.splice(index, 1); // 2nd parameter means remove one item only
    } else {
      this.howWasYourDayService.feelings.push(feelingName);
    }
  }
}
