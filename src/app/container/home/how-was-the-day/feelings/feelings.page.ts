import { Component, OnInit } from '@angular/core';
import { FeelingsService } from '../../../../services/feelings.service';
import { Feeling } from '../../../../models/feeling';

@Component({
  selector: 'app-feelings',
  templateUrl: './feelings.page.html',
  styleUrls: ['./feelings.page.scss'],
})
export class FeelingsPage implements OnInit {
  feelings: Feeling[];

  constructor(private feelingsService: FeelingsService) { }

  ngOnInit() {
    this.feelingsService.fetchAll().subscribe(feelings => {
      this.feelings = feelings.slice();
    });
  }
}
