import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sign-in-form',
  templateUrl: './sign-in-form.page.html',
  styleUrls: ['./sign-in-form.page.scss'],
})
export class SigninForm implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("in");
  }

}
