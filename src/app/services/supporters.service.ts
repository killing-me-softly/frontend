import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Constants } from '../config/constants';
import { supporter } from '../models/supporter';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class SupportersService {
  constructor(private constants: Constants, private dataService: DataService) {}

  connectUserToSupporter(): Observable<supporter[]> {
    return this.dataService.fetchSupporters();
  }
}
