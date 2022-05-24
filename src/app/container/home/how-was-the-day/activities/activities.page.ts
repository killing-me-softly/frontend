import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {HowWasYourDayService} from '../how-was-your-day.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {
  activities: string[];

  constructor(
    private dataService: DataService,
    private howWasYourDayService: HowWasYourDayService
  ) { }

  ngOnInit() {
    this.dataService.fetchActivities().subscribe(activities => {
      this.activities = activities.slice();
    });
  }

  isActivitySelected(activity: string): boolean {
    return this.howWasYourDayService.activities.includes(activity);
  }

  editActivity(activity: string) {
    const index = this.howWasYourDayService.activities.indexOf(activity);
    if (index > -1) {
      this.howWasYourDayService.activities.splice(index, 1); // 2nd parameter means remove one item only
    } else {
      this.howWasYourDayService.activities.push(activity);
    }
  }
}
