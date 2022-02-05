import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorCardComponent } from './doctor-card/doctor-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule,FaIconLibrary} from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorListComponent,
    DoctorCardComponent,
    NavbarComponent,
    SignUpComponent,
    LogInComponent,
    DoctorDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
