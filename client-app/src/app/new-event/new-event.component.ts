import { Router } from '@angular/router';
import { EventsService } from './../events.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  newEvent = {
    name: null,
    description: null,
    special: null
  };
  special: boolean = true;
  constructor(private _service: EventsService, private _roteador: Router) { }

  ngOnInit() {
  }

  setSpecial(): void {
    this.special = !this.special;
  }

  save(): void {
    this.newEvent.special = this.special;
    this._service.save(this.newEvent)
      .subscribe(
        res => {
          this._roteador.navigate(['/events']);
        },
        err => console.log(err)
      );

  }

}
