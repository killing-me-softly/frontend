import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/feelings.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {
  activities: any[];
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchActivities().subscribe(activities => {
      this.activities = activities.slice();
    });
  }

}
