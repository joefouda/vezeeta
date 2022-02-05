import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  { path: 'home', component: DoctorListComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'doctor-details/:dId', component: DoctorDetailsComponent },
  { path: 'admin-dashboard', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
