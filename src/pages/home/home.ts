import { RegisterPagePage } from './../register/register';
import { DomSanitizer } from '@angular/platform-browser';
import { DataServiceProvider } from './../../providers/data-service/data-service';
import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  defaultImage: string = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAOVBMVEX5+fnMzMzKysr8/Pzf39/4+Pi3t7fw8PC6urrHx8fDw8POzs7Z2dnAwMDR0dH19fXo6Oji4uKxsbHXo52vAAAEnUlEQVR4nO2c646kIBBGW0pFboK+/8MuKGqPYvduZhMDfGd/7GS0EzlNQQHlvF4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAyocDTD/EoRK7VeuL1aiDezIMRQhrTPv0sD0F6lo1STdOoRij79OM8Aem+CQIWFBtrDAcyrFklsCBBuKcf6AFoFL7pLbd8WlzoGjuC1UrbMCPQ5G00NQZD96Iu/shNpQ4OSJtaY2GFiI99GBinWh0Ql2YIE0TTVJkgBKiPaRJztXYDnySEeZGxkVer4EXCx8HY8qef40lCoiTWPtB9u7dYLKt5Utyodj6IdMtG0tNP8TDkpKk9Ftzsx8TKVwpKqppTxAApEbLEuh046dPkygcEcnqcnn6Ix6m7DyzUmyEDAAAAB2T5HbaSdMGKebhl7GrIGUgYdY+oYvFg5+YTrAIH1Br10UEFdQhkxMd+0GgqfjywbxU4aYpXsJ6zfw6G0keEr6FQQSEC7790g/KDgYT8qqDEjkAHVg7fFTRCd2+fefrx/wPEW7VUIHpY/21AjPcdY8Y45V+ZYEVvRMQ37a8UBAts/UAoZh67rC2Qm2U4RLltOlu4/l4d/ysmsy7RsL348M0zpVvnF8yu1SolwhuIn874IIrUffyzRvO1k5P/1zmdkrDd22YcDf19w1q7Ha+EdMB7sPqUPYUgUTEe8nXQ3SZEqTo04qdbuNt+FqU58FOlTt5O3ciO0dAGK6JQB5/Ce9zjYbmHSnUQztr3JcEpFaSR/XAgS3CQkDBuV0O9dqvH8F7bLqXbOsIaC1Fi3g4S3WCf7Kk1vZE+FZTi2DPgMn5GOT5t6UVhDthEMS2wg29ifK9N7mkQ7eOiMGbLsApzsO0OLGl0/MaXt/u2hJhvq2vV7JGUt4OzhH1OsPMpjRabnPGaWOXt4BIK8eumQZ6vbWWK7rrNUpaDdVLoqB1+XlLHyUJXmoOzhBgKZBIribiHRtc1ZN4OzqEQJ0E+pLKndW6g8+KpNAfrcEBTalG9XWwvwZC3g3NTYzP1ZURs9gEhIShvB+d27g6uCvZB0cFB6f3g/qtujvHgGih5Ozi3Jr7Ra1P9YFwzRVJlzwt7DpDqBve5Q1kOtr97whMdYbt0PY/L28HdgHBNhLb0KVWsk7eDy1e6v8B1Xh6GKFm22c31XKYwB+s+QWjs+N4T2PYXksglNuAKc3B0BHJq6wpMuaUSK7zzmTqey9tBcjMtXibrdDiXH/VRj0djajWVt4Nre3wqdLSIOmttd7zURG5OnVIX5+BtZ/kM8ZmlPpK3g7SEm9oSryB9Vp+3g1SLfJvONYhLlkzTjYIiHTTiXGAT/mKU6JOBUKoDxWT7/r4GkdVzal+lYAehXVJNPJ658lb05q4TBGP5Onh9cuAzA2mMFEyYYTCfS9Yy7gevIT0vrApWlrq0eOp47ytfB/ShzuqniS83ZVy9S9P9MPcvsJwLFEl97Ql/oyDjbuDp/oOEmwqujGj9kMd+g5qyf+HRL5DbXzC53AWs0G941fDeKwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqI8/0xEub9obtwwAAAAASUVORK5CYII=";

  items: any = [];
  public navCtrl: NavController;
  private _http: Http;
  public corridas;

  constructor(navCtrl: NavController,  public navParams: NavParams, http: Http, public toastCtrl: ToastController, public domSanitizer: DomSanitizer, public dataService: DataServiceProvider, ) {
    this.navCtrl = navCtrl;
    this.navParams.data.page = this;
    this._http = http;
    this.refresh();
    console.log("GDHGSDJGSDJHD")
  }

  refresh() {
    this.dataService.getData()
      .then((todos) => {
        if (todos) {
          this.items = JSON.parse(todos);
        }
      });
  }

  getImage(item) {
    return item.image ? this.domSanitizer.bypassSecurityTrustUrl(item.image) : this.defaultImage;
  }

  saveItem(item) {
    this.items.push(item);
    this.dataService.saveData(this.items);
    this.showToast('Corrida adicionada com sucesso.');
  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2500
    });
    toast.present();
  }

  cadastrar() {

    this.navCtrl.push(RegisterPagePage)
  }

  ionViewDidLoad() {

  }

}
