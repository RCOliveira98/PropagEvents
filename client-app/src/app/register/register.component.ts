import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: any;
  constructor() { }

  ngOnInit() {
    this.user = {};
  }

  display(): void {
    console.log(this.user);
  }

}
