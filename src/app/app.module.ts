import { ChronometerPagePage } from './../pages/chronometer/chronometer';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {LoginPagePage} from '../pages/login/login';
import {UsuarioService} from '../domain/usuario/usuario-service';

import {TabsPage} from '../pages/tabs/tabs';
import { TimerComponent } from '../pages/timer/timer'
import { HomePage } from '../pages/home/home';
import { RegisterPagePage } from '../pages/register/register';
import { DataServiceProvider } from '../providers/data-service/data-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ChronometerPagePage,
    RegisterPagePage,
    TimerComponent,
    LoginPagePage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChronometerPagePage,
    TabsPage,
    RegisterPagePage,
    LoginPagePage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioService,
    DataServiceProvider
    ]
})
export class AppModule {}
