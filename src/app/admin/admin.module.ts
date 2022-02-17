import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdminComponent } from "./admin.component";
import { AdminRoutingModule } from "./admin.routing.module";
import { UsersListComponent } from './pages/users-list/users-list.component';
import { DoctorsListComponent } from './pages/doctors-list/doctors-list.component';
@NgModule({
    declarations: [
        AdminComponent,
        UsersListComponent,
        DoctorsListComponent
    ],
    imports: [
        // import common module instead of browserModule because angular allows to import it once
        CommonModule,
        AdminRoutingModule
    ]
})
export class AdminModule {

}