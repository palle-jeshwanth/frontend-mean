import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { response } from './response';
const uri = environment.uri;

@Injectable()

export class AuthService {
  email: any;

  constructor(private _http: HttpClient) {}

  register(obj: any) {
    return this._http.post(uri + '/users/register', obj);
  }

  getemail(){
    console.log(this.email)
    return this.email;

  }

  login(user: any) {
    this.getemail()
    this.email=user.email;
    return this._http.post<response>(uri + '/users/login', user);
  }
  

  logout() {
    return this._http.post<response>(uri + '/users/logout', {});
  }

  logoutAll() {
    return this._http.post<response>(uri + '/users/logoutAll', {});
  }

  getDetails() {
    return this._http.get<response>(uri + '/users');
  }

  deleteUser(userID:any){
    return this._http.delete<response>(uri+'/users/'+userID)
  }

  verifyEmail(obj:any){
    return this._http.post<response>(uri+'/users/verify',obj)
  }

  changePassword(obj:any){
    return this._http.post<response>(uri+'/users/changePassword',obj)
  }

  resetPassword(obj:any){
    return this._http.post<response>(uri+'/users/resetpassword',obj)

  }

  getMe(){
    return this._http.get<response>(uri+'/users/me')
    
  }
}
