import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './application/login/login.component';
import { FooterComponent } from './application/footer/footer.component';
import { ResetComponent } from './application/reset/reset.component';
import { NavComponent } from './application/nav/nav.component';
import { HomeComponent } from './application/home/home.component';
import { ReportComponent } from './application/report/report.component';
import { UserComponent } from './application/user/user.component';
import { LocationComponent } from './application/location/location.component';
import { JackpotComponent } from './application/jackpot/jackpot.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },

  {
    path:"footer",
    component:FooterComponent
  },
  {
    path:"user",
    component:UserComponent
  },
  {
    path:"location",
    component:LocationComponent
  },
  {
    path:"jackpot",
    component:JackpotComponent
  },
  {
    path:"report",
    component:ReportComponent
  },
  {
    path:"nav",
    component:NavComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"reset",
    component:ResetComponent
  },
  
  {
    path: '',
    redirectTo:'/location',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
   
 }
