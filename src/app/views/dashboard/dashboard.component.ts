import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  myData: any = [];
  constructor(private _authService: AuthService) {}

  ngOnInit() {
    this.getDeatils();
  }

  getDeatils() {
    this._authService.getDetails().subscribe(
      (res) => {
        this.myData = res.data;
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteUser(userid: any) {
    if (confirm('Are you sure to delete ')) {
      this._authService.deleteUser(userid).subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    }
    this.getDeatils();
  }
}
