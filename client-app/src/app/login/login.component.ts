import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  public userLogin = {};

  constructor(private _service: AuthService, private _roteador: Router) { }

  ngOnInit() {
  }

  public logar() {
     this._service.login(this.userLogin).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this._roteador.navigate(['/special']);
      },
      err => console.log(err)
    );

  }

}
