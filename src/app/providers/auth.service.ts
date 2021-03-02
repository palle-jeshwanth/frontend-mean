import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';
const uri = environment.uri
@Injectable()
export class AuthService{
    constructor(private _http:HttpClient){}

    register(obj:any){
       return this._http.post(uri+'/users',obj)
    }
}