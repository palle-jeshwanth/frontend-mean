import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  password: any = {
    oldPassword: '',
    newPassword: '',
  };

  constructor(private authService: AuthService,private _router:Router) {
    this.getMe()
  }
  me:any = {
    name:'',
    emai:'',
    phone:''
  }
  getMe(){
    this.authService.getMe().subscribe(
      (response)=>{
        const result = response;
        if(result.code){
          this.me  = {...result.data }
        }
      },
      (err)=>{

      }
    )
  }

  resetPassword() {
    this.authService.resetPassword(this.password).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error, 'resetPassword()');
      }
    );
  }

  logout() {
    this.authService.logout().subscribe(
      (res) => {
        const result =  res;
        if(result.code){
          sessionStorage.clear();
          this._router.navigate(['/login'])
        }
      },
      (error) => {
        console.error(error, 'logout()');
      }
    );
  }

  logoutAll() {
    this.authService.logoutAll().subscribe(
      (res) => {
        const result =  res;
        if(result.code){
          sessionStorage.clear();
          this._router.navigate(['/login'])
        }
      },
      (error) => {
        console.error(error, 'logoutAll()');
      }
    );
  }
}
