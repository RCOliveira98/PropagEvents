import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthService } from './../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  private inscricao: Subscription;
  public userLogin = {};

  constructor(private service: AuthService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  public logar(){
    this.inscricao = this.service.login(this.userLogin).subscribe(
      res => console.log(res),
      err => console.log(err)
    );

  }

}
