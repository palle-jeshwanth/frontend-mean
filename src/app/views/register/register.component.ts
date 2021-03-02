import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../app/providers/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _authService:AuthService) {

   }

  ngOnInit(): void {
  }

  register(form:NgForm){
    let obj ={
      name: form.value.phone,
      emial: form.value.email,
      phone: form.value.phone
    }
    this._authService.register(obj).subscribe(
      (res)=>{
        console.log(res);
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }
  

}
