import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from './../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {

  private inscricao: Subscription;
  public user = {};
  constructor(private _service: AuthService, private _roteador: Router) { }

  ngOnInit() {
  }

  register(): void {
    this._service.newRegister(this.user).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this._roteador.navigate(['/special']);
      },
      err => console.log(err)
    );
  }

}
