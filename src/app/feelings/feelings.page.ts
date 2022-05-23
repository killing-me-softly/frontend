import { Component, OnInit } from '@angular/core';
import { Feeling } from '../models/feeling';
import { FeelingsService } from '../services/feelings.service';

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
