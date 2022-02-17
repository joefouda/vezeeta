import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGard } from "./auth/doctor.guard";
import { LogOutGard } from "./auth/logOut.guard";
import { LogInComponent } from "./pages/log-in/log-in.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";


const routes: Routes = [
    { path: '', component: LogInComponent, canActivate:[LogOutGard]},
    { path: 'sign-up', component: SignUpComponent, canActivate:[LogOutGard]},
    { path: 'profile', component: ProfileComponent, canActivate:[AuthGard]}
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ],
})

export class DoctorRouterModule{

}