export interface Event {
  id: string;
  name: string;
  date: Date;
  location: string;
  type: EventType;
}

export type EventType = 'wedding' | 'birthday';
