import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ChronometerPagePage } from '../chronometer/chronometer';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ChronometerPagePage;
  tab1Params: any = {};

  constructor() {}

  refresh(event) {
    console.log("antes_do_if");
    console.log(event.page);
    if (event.page) {
      console.log(event);
      console.log("depois_do_if");
      event.page.refresh();
    }
  }
}
