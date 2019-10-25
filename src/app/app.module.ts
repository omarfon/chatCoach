import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { ChatonlineComponent } from './chatonline/chatonline.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import {AutosizeModule} from 'ngx-autosize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material.module';
import {AngularFireAuthModule} from '@angular/fire/auth'
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';

import { FCM } from '@ionic-native/fcm/ngx';

import { ServiceWorkerModule } from '@angular/service-worker';
import {AngularFireMessagingModule} from '@angular/fire/messaging';

@NgModule({
  declarations: [AppComponent, ChatonlineComponent],
  entryComponents: [ChatonlineComponent],
  imports: [BrowserModule, IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    FormsModule,
    AutosizeModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ComponentsModule,
    ServiceWorkerModule.register('combined-sw.js', { enabled: environment.production }),
    MaterialModule],
  
  providers: [
    StatusBar,
    SplashScreen,
    FCM,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
