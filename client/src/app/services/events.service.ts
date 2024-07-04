import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Event } from '../models/event.model';
import { EVENTS } from '../_mock/events';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private httpClient = inject(HttpClient);

  baseUrl = 'https://localhost:7274/Event';
  events: Event[] = EVENTS;

  getEvents(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(this.baseUrl);
    return of(this.events);
  }
}
