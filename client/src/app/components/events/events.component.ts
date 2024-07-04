import { Component, OnInit, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { EventsService } from '../../services/events.service';
import { Event } from '../../models/event.model';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
})
export class EventsComponent implements OnInit{
  events$: Observable<Event[]> = of();
  private readonly eventsService = inject(EventsService);

  ngOnInit(): void {
    this.events$ = this.eventsService.getEvents();
  }
}
