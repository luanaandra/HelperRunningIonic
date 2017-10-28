import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ChronometerPagePage } from '../chronometer/chronometer';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ChronometerPagePage;
  constructor() {

  }
}
