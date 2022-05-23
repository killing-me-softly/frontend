import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/feelings.service';
import { Feeling } from '../../../../models/feeling';

@Component({
  selector: 'app-feelings',
  templateUrl: './feelings.page.html',
  styleUrls: ['./feelings.page.scss'],
})
export class FeelingsPage implements OnInit {
  feelings: Feeling[];

  constructor(private feelingsService: DataService) { }

  ngOnInit() {
    this.feelingsService.fetchFeelings().subscribe(feelings => {
      this.feelings = feelings.slice();
    });
  }
}
