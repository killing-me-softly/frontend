import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController, ToastOptions } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  recordingActivate = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  toastOptions: ToastOptions = {
    duration: 2000,
    color: 'light',
  };

  constructor(
    private formBuilder: FormBuilder,
    private navController: NavController,
    public toastController: ToastController
  ) {}

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  toggleRecordingActive() {
    this.recordingActivate = !this.recordingActivate;
    if (this.recordingActivate) {
      this.startRecordingNotification();
    } else {
      this.stopRecordingNotification();
    }
  }

  moveToHowWasYourDay(): void {
    this.navController.navigateForward('/container/home/how-was-the-day');
  }

  async startRecordingNotification() {
    const message = 'התחילי להקליט';
    await this.toast(message);
  }

  async stopRecordingNotification() {
    let message = 'ההקלטה הסתיימה';
    await this.toast(message);
    await this.delay(2.5 * 1000);
    message = 'מנתח את ההקלטה..';
    await this.toast(message);
  }

  async toast(message) {
    const toast = await this.toastController.create({
      message,
      ...this.toastOptions,
    });
    toast.present();
  }

  async delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
