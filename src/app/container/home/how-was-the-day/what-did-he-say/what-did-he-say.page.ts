import { Component, OnInit } from '@angular/core';
import { Feeling } from 'src/app/models/feeling';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-what-did-he-say',
  templateUrl: './what-did-he-say.page.html',
  styleUrls: ['./what-did-he-say.page.scss'],
})
export class WhatDidHeSayPage implements OnInit {
  sayings: string[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchSayings().subscribe(sayings => {
      this.sayings = sayings.slice();
    });
  }
}
