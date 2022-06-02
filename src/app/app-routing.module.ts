import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AircraftsAlertComponent } from './components/aircrafts-alert/aircrafts-alert.component';
import { AircraftsComponent } from './components/aircrafts/aircrafts.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';
const routes: Routes = [
  { path: "aircrafts", component: AircraftsComponent },
  { path: "aircrafts-alert", component: AircraftsAlertComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "nav-bar", component: NavbarComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
