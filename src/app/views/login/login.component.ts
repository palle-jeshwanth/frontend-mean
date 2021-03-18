import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/providers/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   user:any ={
    email: '',
    password : ''
  }
  constructor(private _authService:AuthService, private _route:Router) { }

  ngOnInit(): void {

  }

  login(){
    this._authService.login(this.user).subscribe((res)=>{
      const result = res
      if(result.code){
        sessionStorage.setItem('authToken',result.data);
        this._route.navigate(['dashboard']);
      }
      
   })
   
   
  }

  register(){
    this._route.navigate(['register'])
  }

  passVerify(obj:any){ 
    console.log(obj)
    if(obj.code){
      this._route.navigate(['dashboard'])
    }
  }


}
