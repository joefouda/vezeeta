import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorListComponent } from './pages/admin/doctor-list/doctor-list.component';
import { DoctorCardComponent } from './components/doctor-card/doctor-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule,FaIconLibrary} from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignUpComponent } from './pages/admin/sign-up/sign-up.component';
import { LogInComponent } from './pages/admin/log-in/log-in.component';
import { DoctorDetailsComponent } from './pages/admin/doctor-details/doctor-details.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProfileComponent } from './pages/admin/profile/profile.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorListComponent,
    DoctorCardComponent,
    NavbarComponent,
    SignUpComponent,
    LogInComponent,
    DoctorDetailsComponent,
    AdminComponent,
    ProfileComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
