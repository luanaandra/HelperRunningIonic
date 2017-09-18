import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { RegisterPagePage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

public navCtrl: NavController;
private _http: Http;
public corridas;

   constructor(navCtrl: NavController, http: Http) {
    this.navCtrl = navCtrl;
    this._http = http;
  }

    cadastrar() {
  
        this.navCtrl.push(RegisterPagePage)
      }
}
