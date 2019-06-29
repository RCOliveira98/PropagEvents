import { Component, OnInit } from '@angular/core';

import { AuthService } from './../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  public user = {};
  constructor(private service: AuthService) { }

  ngOnInit() {
  }

  resgister(): void {
    console.log(this.user);
    this.service.newRegister(this.user).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

}
