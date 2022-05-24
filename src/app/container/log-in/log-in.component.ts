import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {

  name : string = "";
  password : string = "";

  constructor(private router : Router) { }

  ngOnInit() {}

  logIn() {
    const navigationDetails : string [] = ['/container'];
    this.router.navigate(navigationDetails);
  }

  signIn() {
    const navigationDetails : string [] = ['/container'];
    navigationDetails.push('sign-in');
    this.router.navigate(navigationDetails);
  }
}
