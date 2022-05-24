import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { SupportersService } from 'src/app/services/supporters.service';

@Component({
  selector: 'app-weekly-summary',
  templateUrl: './weekly-summary.page.html',
  styleUrls: ['./weekly-summary.page.scss'],
})
export class WeeklySummaryPage implements OnInit {
  recordingActivate: boolean = false;
  dangerLevel: string = "בסכנה";
  daysArray: string[] = ["א","ב","ג","ד","ה","ו","ש"]
  

  constructor(
    private navController: NavController,
    public toastController: ToastController,
    private supportersService: SupportersService
  ) {}

  ngOnInit(): void {
  }

  transferToTelegramChat(): void {
    this.supportersService.connectUserToSupporter();
  }

  moveToHowWasYourDay(): void {
    this.navController.navigateForward('/container/home/weekly-summary');
    // this.navController.navigateForward('/container/home/how-was-the-day');

  }

  async startRecordingNotification() {
    const message = this.recordingActivate? "ההקלטה הסתיימה": "התחילי להקליט";
    this.recordingActivate = !this.recordingActivate;
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: "light",
    });
    toast.present();
  }
}
