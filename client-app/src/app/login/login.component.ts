import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin = {};
  constructor() { }

  ngOnInit() {
  }

  public logar(){
    console.log(this.userLogin);
  }

}
