import { Component, OnInit } from '@angular/core';
import { EventsService } from './../events.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css'],
  providers: [EventsService]
})
export class SpecialEventsComponent implements OnInit {

  constructor(private _service: EventsService) { }

  myEvents = [];
  ngOnInit() {
    this._service.getEventsSpecial()
      .subscribe(
        res => {
          this.myEvents = res;
        },
        err => this.myEvents = err
      );
  }

}
