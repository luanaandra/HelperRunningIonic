import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { Camera } from 'ionic-native';

@Component({
    selector: 'page-register',
    templateUrl: 'register.html'
})
export class RegisterPagePage {
    image: string;
    public base64Image: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterPagePage');
    }
    selectFromGallery() {
        let options = {
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: Camera.DestinationType.DATA_URL
        };
        Camera
            .getPicture(options)
            .then((imageData) => {
                this.image = imageData;
            }, (error) => {
                let alert = this.alertCtrl.create({
                    title: 'Não foi possivel carregar imagens!',
                    subTitle: error,
                    buttons: ['ok']
                });
                alert.present();
            });
    }

    takePicture() {
        Camera.getPicture({
            destinationType: Camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000
        }).then((imageData) => {
            // imageData is a base64 encoded string
            this.base64Image = "data:image/jpeg;base64," + imageData;
        }, (err) => {
            let alert = this.alertCtrl.create({
                    title: 'Não foi possivel carregar a câmera!',
                    subTitle: err,
                    buttons: ['ok']
                });
                alert.present();
        });
    }

}
