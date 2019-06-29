import { Injectable } from '@angular/core';
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

  public getEventsSpecial(): any {
    console.log(`${urlApi}/events/special`);
    return this.http.get<any>(`${urlApi}/events/special`);
  }

  public save(event: any): any {
    return this.http.post<any>(`${urlApi}/events`, event);
  }
}
