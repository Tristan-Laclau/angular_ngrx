import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AircraftsAlertComponent } from './components/aircrafts-alert/aircrafts-alert.component';
import { AircraftsComponent } from './components/aircrafts/aircrafts.component';
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [
  { path: "aircrafts", component: AircraftsComponent },
  { path: "aircrafts-alert", component: AircraftsAlertComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
