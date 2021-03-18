import { Injectable } from "@angular/core";
import { CanActivate, Router,} from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _router:Router){

    }
    canActivate(): boolean  {
        if(!!sessionStorage.getItem('authToken')){
          return true
        }
        this._router.navigate(['/login'])
        return false
    }

}