import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { EventsService } from './../events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [EventsService]
})
export class EventsComponent implements OnInit {

  public myEvents = [];
  constructor(private service: EventsService) { }

  ngOnInit() {
    this.displayEvents();
  }

  private displayEvents(): void {
    this.service.getEventsAll().subscribe(
      res => this.myEvents = res,
      err => console.log(err)
    );
  }

}
