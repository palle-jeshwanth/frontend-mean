import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.scss']
})
export class PasswordChangeComponent implements OnInit {

  isMatched:boolean = false;
  constructor( private _auth:AuthService) { }
  user:any = {
    email : '',
    password : ''
  }

  ngOnInit(): void {

  }

  verifyEmail(){
    let obj = {
      email:this.user.email
    }
    this._auth.verifyEmail(obj).subscribe((res)=>{
     if(res.code){
       this.isMatched = true;
     }
      console.log(res)
    })
  }

  changePassword(){
    let obj = {
      email : this.user.email,
      password : this.user.password
    }
    console.log(obj);
    
    this._auth.changePassword(obj).subscribe((res)=>{
      console.log(res);
    })

  }

}
