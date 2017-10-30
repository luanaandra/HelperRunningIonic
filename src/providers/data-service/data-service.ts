import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataServiceProvider {

    private storage = new Storage();

    constructor() { }

    getData() {
        return this.storage.get('todos');
    }

    saveData(data) {
        console.log('deserializando');
        let newData = JSON.stringify(data);
        console.log('deserializou');
        this.storage.set('todos', newData);
        console.log('salvou');
    }

    

    addData(newData) {
        this.getData().then(data => {
            var savedData = JSON.parse(data) || [];
            savedData.push(newData);
                
            this.saveData(savedData);
            console.log("Chegou no addData");
        })
    }


}