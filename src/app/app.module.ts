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
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material.module';
import {AngularFireAuthModule} from '@angular/fire/auth'
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';



const firebaseConfig ={
  apiKey: "AIzaSyBMopx6KZ79wFANi2Yb6ysxvAIdRso96VY",
    authDomain: "aviva-mamapp-dev.firebaseapp.com",
    databaseURL: "https://aviva-mamapp-dev.firebaseio.com",
    projectId: "aviva-mamapp-dev",
    storageBucket: "",
    messagingSenderId: "519988913097",
    appId: "1:519988913097:web:dca29f129d59cc0b"
}

@NgModule({
  declarations: [AppComponent, ChatonlineComponent],
  entryComponents: [ChatonlineComponent],
  imports: [BrowserModule, IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    AutosizeModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    HttpClientModule,
    ComponentsModule,
    MaterialModule],
  
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
