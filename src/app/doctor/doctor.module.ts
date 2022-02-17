import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DoctorRouterModule } from "./doctor.routing.module";
import { LogInComponent } from "./pages/log-in/log-in.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";

@NgModule({
    declarations:[
        LogInComponent,
        SignUpComponent,
        ProfileComponent
    ],
    imports:[
        CommonModule,
        DoctorRouterModule,
        NgbModule,
        FontAwesomeModule,
        ReactiveFormsModule,
    ]
})

export class DoctorModule{

}