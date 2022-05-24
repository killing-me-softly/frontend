import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {

  currentPage : number = 0;
  contacts;
  numberOfPages : number = 3;


  constructor(private router : Router) { }

  ngOnInit() {
    this.contacts = new Array(1);
  }

  getChosenPage(e : number) {
    this.currentPage = e;
  }

  addContact() {
    this.contacts.push([]);
  }

  goBack() {
    if(this.currentPage !==0)
        this.currentPage= this.currentPage-1;
  }

  next() {
    if(this.currentPage !== this.numberOfPages-1)
      this.currentPage= this.currentPage+1;
  }

  finish() {
    const navigationDetails : string [] = ['/container'];
    this.router.navigate(navigationDetails);
  }
}
