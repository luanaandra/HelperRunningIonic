import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPagePage {
  public email: string;
  public senha: string;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    ) { }

  login() {
  
        this.navCtrl.push(HomePage)
      }

}
