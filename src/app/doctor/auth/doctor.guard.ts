import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable, take } from "rxjs";
import { DoctorService } from "../doctor.service";

@Injectable({ providedIn: 'root' })

export class AuthGard implements CanActivate {
    constructor(private doctorService: DoctorService, private router:Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.doctorService.doctor.pipe(
            take(1),
            map(doc=>{
            const isAuthenticated = doc ? true:false
            if(isAuthenticated){
                return true;
            }
            return this.router.createUrlTree(['/doctors']);
        }))
    }
}