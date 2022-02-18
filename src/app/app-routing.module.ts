import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DoctorListComponent } from './user/pages/doctor-list/doctor-list.component';
import { DoctorDetailsComponent } from './user/pages/doctor-details/doctor-details.component';
import { ProfileComponent } from './user/pages/profile/profile.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AuthGard } from './user/auth/user.guard';
import { LogOutGard } from './user/auth/logOut.guard';
import { SignUpComponent } from './user/pages/sign-up/sign-up.component';
import { LogInComponent } from './user/pages/log-in/log-in.component';
import { ProfileEditComponent } from './user/pages/profile-edit/profile-edit.component';

const routes: Routes = [
  // set default route for my website
  { path: '', redirectTo: '/sign-up', pathMatch: 'full' },
  { path: 'home', component: DoctorListComponent,canActivate: [AuthGard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGard] },
  { path: 'edit-profile', component: ProfileEditComponent, canActivate: [AuthGard] },
  { path: 'sign-up', component: SignUpComponent, canActivate: [LogOutGard]},
  { path: 'log-in', component: LogInComponent, canActivate: [LogOutGard]},
  { path: 'doctor-details/:dId', component: DoctorDetailsComponent, canActivate: [AuthGard] },
  { path: 'page-not-found', component: PageNotFoundComponent},
  { path: 'admin-dashboard', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  { path: 'doctors', loadChildren: () => import('./doctor/doctor.module').then(m => m.DoctorModule)},
  // set wildcard route for my website
  { path: '**', redirectTo: '/page-not-found', pathMatch: 'full' }
];

@NgModule({
  // make lazy loading faster by loading all modules while user browsing web site 
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
