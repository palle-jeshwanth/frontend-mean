import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../app/providers/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  reg_res:any = {
    code:1,
    message : ''
  };
  constructor(private _authService:AuthService, private _route:Router) {

   }

  ngOnInit(): void {
  }

  loginPage(){
    this._route.navigate(['login'])
  }
  register(form:NgForm){
    let obj ={
      name: form.value.name,
      email: form.value.email,
      password : form.value.password,
      phone: form.value.phone
    }
    this._authService.register(obj).subscribe(
      (res)=>{
        this.reg_res=res
        if(this.reg_res.code){
          this._route.navigate(['login'])
        }

      },
      (error)=>{
        console.log(error);
         
      }
    )
  }
  

}
