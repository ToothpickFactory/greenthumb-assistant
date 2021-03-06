import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AddPlantPage } from '../pages/add-plant/add-plant';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from '../components/components.module';
import { HomePage } from '../pages/home/home';
import { MyApp } from './app.component';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { StoreModule } from '@ngrx/store';
import { plantsReducer } from '../reducers/plants';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddPlantPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    StoreModule.provideStore({ plants: plantsReducer }),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddPlantPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
