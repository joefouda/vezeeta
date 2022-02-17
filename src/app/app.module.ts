import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorListComponent } from './user/pages/doctor-list/doctor-list.component';
import { DoctorCardComponent } from './user/componenets/doctor-card/doctor-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule,FaIconLibrary} from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SignUpComponent } from './user/pages/sign-up/sign-up.component';
import { LogInComponent } from './user/pages/log-in/log-in.component';
import { DoctorDetailsComponent } from './user/pages/doctor-details/doctor-details.component';
import { ProfileComponent } from './user/pages/profile/profile.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    DoctorListComponent,
    DoctorCardComponent,
    NavbarComponent,
    SignUpComponent,
    LogInComponent,
    DoctorDetailsComponent,
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
