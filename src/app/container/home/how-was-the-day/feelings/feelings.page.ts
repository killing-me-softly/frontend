import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data.service';
import { Feeling } from '../../../../models/feeling';

@Component({
  selector: 'app-feelings',
  templateUrl: './feelings.page.html',
  styleUrls: ['./feelings.page.scss'],
})
export class FeelingsPage implements OnInit {
  feelings: string[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchFeelings().subscribe(feelings => {
      this.feelings = feelings.slice();
    });
  }
}
