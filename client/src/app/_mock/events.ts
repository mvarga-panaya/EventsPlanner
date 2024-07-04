import { Event } from '../models/event.model';

export const EVENTS: Event[] = [
  {
    id: '1',
    name: "John and Jane's Wedding",
    date: new Date('2024-09-15'),
    location: 'Central Park, New York',
    type: 'wedding',
  },
  {
    id: '2',
    name: "Emily's 30th Birthday Party",
    date: new Date('2024-08-22'),
    location: 'The Grand Ballroom, Los Angeles',
    type: 'birthday',
  },
  {
    id: '3',
    name: "Michael and Sarah's Wedding",
    date: new Date('2024-07-10'),
    location: 'Beach Resort, Miami',
    type: 'wedding',
  },
  {
    id: '4',
    name: "David's 40th Birthday Celebration",
    date: new Date('2024-10-05'),
    location: 'Mountain Retreat, Denver',
    type: 'birthday',
  },
];
