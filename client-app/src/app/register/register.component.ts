import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from './../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit, OnDestroy {

  private inscricao: Subscription;
  public user = {};
  constructor(private service: AuthService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  resgister(): void {
    this.inscricao = this.service.newRegister(this.user).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

}
