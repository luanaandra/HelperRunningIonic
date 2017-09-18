import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {LoginPagePage} from '../pages/login/login';
import {UsuarioService} from '../domain/usuario/usuario-service';

import { HomePage } from '../pages/home/home';
import { RegisterPagePage } from '../pages/register/register';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPagePage,
    LoginPagePage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPagePage,
    LoginPagePage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioService
    ]
})
export class AppModule {}
