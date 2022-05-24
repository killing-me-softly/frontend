import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-page-steps',
  templateUrl: './page-steps.component.html',
  styleUrls: ['./page-steps.component.scss'],
})
export class PageStepsComponent implements OnInit, OnChanges {

  @Input() pages : number = 0;
  @Input() currentPage : number = 0;
  
  @Output() chosenPage : EventEmitter<number> = new EventEmitter();

  chosen : number = 0;
  pagesArray;


  constructor() { }

  ngOnInit() {
    this.chosen = this.currentPage;
    this.pagesArray = new Array(this.pages);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.chosen = this.currentPage;
  }

  checkChosen(index : number ) {
    return index === this.chosen;
  }

  checkPassed(index : number) {
    return index < this.chosen;
  }

  clickDot(index : number) {
    this.chosen = index;
    this.chosenPage.emit(this.chosen);
  }
}
