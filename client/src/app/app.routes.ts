import { Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';

export const routes: Routes = [
  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: '**',
    component: EventsComponent,
  },
];
