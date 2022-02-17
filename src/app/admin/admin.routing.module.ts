import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DoctorsListComponent } from "./pages/doctors-list/doctors-list.component";
import { AdminComponent } from "./admin.component";
import { UsersListComponent } from "./pages/users-list/users-list.component";

const routes: Routes = [
    { path: '', component: AdminComponent},
    { path: 'users-list', component: UsersListComponent},
    { path: 'doctors-list', component: DoctorsListComponent}
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ],
})

export class AdminRoutingModule {}
