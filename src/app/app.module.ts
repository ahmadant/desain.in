import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { DesignPage } from '../pages/design/design';
import { HomePage } from '../pages/home/home';
import { OrderPage } from '../pages/order/order';
import { AddPage } from '../pages/add/add';
import { TabsPage } from '../pages/tabs/tabs';
import { LaporanPage } from '../pages/laporan/laporan';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    DesignPage,
    OrderPage,
    HomePage,
    AddPage,
    LaporanPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DesignPage,
    OrderPage,
    HomePage,
    AddPage,
    LaporanPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
