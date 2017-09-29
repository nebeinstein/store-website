import { EventModel } from '../event.model';

export class DayModel {
    day: Date;
    events: EventModel[];

    constructor(day: Date, events: EventModel[]) {
        this.day = day;
        this.events = events;
    }
}