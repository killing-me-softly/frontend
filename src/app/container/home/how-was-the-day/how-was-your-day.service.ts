import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HowWasYourDayService {
  activities = [];
  feelings = [];
  whatDidHeSay = [];

  constructor() { }
}
