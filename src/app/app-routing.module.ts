import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorListComponent } from './pages/admin/doctor-list/doctor-list.component';
import { SignUpComponent } from './pages/admin/sign-up/sign-up.component';
import { LogInComponent } from './pages/admin/log-in/log-in.component';
import { DoctorDetailsComponent } from './pages/admin/doctor-details/doctor-details.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProfileComponent } from './pages/admin/profile/profile.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGard } from './auth/doctor.guard';
import { LogOutGard } from './auth/logOut.guard';

const routes: Routes = [
  // set default route for my website
  { path: '', redirectTo: '/sign-up', pathMatch: 'full' },
  { path: 'home', component: DoctorListComponent,canActivate: [AuthGard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGard] },
  { path: 'sign-up', component: SignUpComponent, canActivate: [LogOutGard]},
  { path: 'log-in', component: LogInComponent, canActivate: [LogOutGard]},
  { path: 'doctor-details/:dId', component: DoctorDetailsComponent, canActivate: [AuthGard] },
  { path: 'admin-dashboard', component: AdminComponent},
  { path: 'page-not-found', component: PageNotFoundComponent},
  // set wildcard route form my website
  { path: '**', redirectTo: '/page-not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
