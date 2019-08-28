import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from '@angular/fire';
import { environment } from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { ChatonlineComponent } from './chatonline/chatonline.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import {AutosizeModule} from 'ngx-autosize';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material.module';

const firebaseConfig ={
  apiKey: "AIzaSyCc3alsDLZt9kBSZWSm4VBUd5b2AywHtCo",
  authDomain: "coachchat-85033.firebaseapp.com",
  databaseURL: "https://coachchat-85033.firebaseio.com",
  projectId: "coachchat-85033",
  storageBucket: "coachchat-85033.appspot.com",
  messagingSenderId: "751103436380",
  appId: "1:751103436380:web:c05b3512f0246db9"
}

@NgModule({
  declarations: [AppComponent, ChatonlineComponent],
  entryComponents: [ChatonlineComponent],
  imports: [BrowserModule, IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    AutosizeModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MaterialModule],
  
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
