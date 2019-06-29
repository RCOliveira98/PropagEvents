import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { urlApi } from './shared/url.api';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  public getEventsAll(): any {
    return this.http.get<any>(`${urlApi}/events`);
  }
}
