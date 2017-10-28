import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { TimerComponent } from '../timer/timer';

/*
  Generated class for the ChronometerPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-chronometer',
  templateUrl: 'chronometer.html'
})
export class ChronometerPagePage {

 @ViewChild(TimerComponent) timer: TimerComponent;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

 ngOnInit() {
    setTimeout(() => {
      this.timer.startTimer();
    }, 1000)
 }

}
