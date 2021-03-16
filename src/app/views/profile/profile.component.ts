import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  password: any = {
    oldPassword: '',
    newPassword: '',
  };
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

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
        console.log(res);
        sessionStorage.clear();
      },
      (error) => {
        console.log(error, 'logout()');
      }
    );
  }

  logoutAll() {
    this.authService.logoutAll().subscribe(
      (res) => {
        console.log(res);
        sessionStorage.clear();
      },
      (error) => {
        console.log(error, 'logoutAll()');
      }
    );
  }
}
