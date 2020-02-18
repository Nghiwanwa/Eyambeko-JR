import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './application/nav/nav.component'
import { HomeComponent } from './application/home/home.component';
import { ResetComponent } from './application/reset/reset.component';
import { LoginComponent } from './application/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, RouteReuseStrategy, ActivatedRouteSnapshot } from '@angular/router';
import { FooterComponent } from './application/footer/footer.component';
import { UserComponent } from './application/user/user.component';
import { LocationComponent } from './application/location/location.component';
import { ReportComponent } from './application/report/report.component';
import { JackpotComponent } from './application/jackpot/jackpot.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    ResetComponent,
    LoginComponent,
    UserComponent,
    LocationComponent,
    ReportComponent,
    JackpotComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
