import { Component, OnInit, OnDestroy } from '@angular/core';
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
  constructor(private service: AuthService) { }

  ngOnInit() {
  }

  register(): void {
    this.service.newRegister(this.user).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

}
