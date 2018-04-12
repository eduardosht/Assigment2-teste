import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { routing } from "./app.routing";
import { AuthGuard } from "./guards/auth.guard";
import { HttpUtilService } from "./services/http-util-service";
import { LoginComponent } from './login/login.component';
import { LoginService } from "./services/login-service";

import { AngularFireModule } from "angularfire2";
import { AngularFireAuth } from "angularfire2/auth";


export const firebaseConfig = {
  apiKey: "AIzaSyAAXcDvokzbb1BBVHKHy6b_KPUXnig7MW4",
  authDomain: "test-57328.firebaseapp.com",
  databaseURL: "https://test-57328.firebaseio.com",
  projectId: "test-57328",
  storageBucket: "test-57328.appspot.com",
  messagingSenderId: "417994988976"
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AuthGuard, HttpUtilService, LoginService, AngularFireModule, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
