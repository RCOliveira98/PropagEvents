import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthService } from './../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  public userLogin = {};

  constructor(private service: AuthService) { }

  ngOnInit() {
  }

  public logar() {
     this.service.login(this.userLogin).subscribe(
      res => console.log(res),
      err => console.log(err)
    );

  }

}
