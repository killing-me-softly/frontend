import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  recordingActivate: boolean = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

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

  moveToHowWasYourDay(): void {
    this.navController.navigateForward('/container/home/how-was-the-day');
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
