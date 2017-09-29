import { Subject } from 'rxjs/Subject';

import { EventModel } from './event.model';

export class EventService {
    eventsChanged = new Subject<EventModel[]>();

    private events: EventModel[] = [
        new EventModel(
            'Tim Sale Appearing for an In-Store Signing - Sept. 9th',
            new Date('2017-9-9'),
            ['5:00', '10:00'],
            'Special Guest Appearance by Batman Artist Tim Sale at That’s Entertainment!',
            'Special Guest Appearance by Batman Artist Tim Sale at That’s Entertainment! That’s Entertainment of Worcester, MA continues to celebrate its 25th year of business on Park Avenue in a BIG way! Highly revered Batman artist Tim Sale will be appearing at That’s Entertainment on Saturday, September 9th from 12:00 p.m. to 5:00 p.m. for an in-store signing. Also, all back-issue, trade paperback, and hard cover comic books will be 25% off all day long, 10:00 a.m. to 8:00 p.m. All "display" comic books retailing between $19.95 and $100 and under will also be 25% off.',
            'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/20799775_10155606822554730_3593049636247654995_n.jpg?oh=3d8e2c06122482dd87d0beac01e1474c&oe=5A4A1670'
        ),
        new EventModel(
            'AfterShock North American Tour - In-Store Signing',
            new Date('2017-9-12'),
            ['17:00', '20:00'],
            'AfterShock North American Tour: Acclaimed Comic Book Writers and Editors Appearing at That’s Entertainment for an In-store signing',
            'AfterShock North American Tour: Acclaimed Comic Book Writers and Editors Appearing at That’s Entertainment for an In-store signing. That’s Entertainment will host AfterShock Comics creators Joe Pruett and Paul Jenkins for an in-store signing on Tuesday, September 12th ( 5:00 p.m. to 8:00 p.m.). Pruett is an Eisner award-winning comic book publisher, editor, and writer; Jenkins is an widely-acclaimed writer and editor. The creative duo will be at 244 Park Ave. in Worcester, MA as part of their AfterShock Comics North American Tour, signing copies of their comic books work past and present, and promoting their upcoming titles at AfterShock. Admission and signatures are free, and all ages are welcome to attend.',
            'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/21150072_10155652331164730_2441292489710850410_n.jpg?oh=8d1f88bbfdfeba1cfe6f3b867689b51e&oe=5A4DACEE'
        )
    ];

    setEvents(events: EventModel[]) {
        this.events = events;
        this.eventsChanged.next(this.events.slice());
    }

    getEvents() {
        return this.events.slice();
    }

    getEventsByDate(date: Date) {
        var selectEvents: EventModel[] = [];
        this.events.forEach(
            (event: EventModel) => {
                if (event.date === date) {
                    selectEvents.push(event);
                }
            }
        );
        return selectEvents;
    }

    getEvent(index: number) {
        return this.events[index];
    }

    addEvent(event: EventModel) {
        this.events.push(event);
        this.eventsChanged.next(this.events.slice());
    }

    updateEvent(index: number, newEvent: EventModel) {
        this.events[index] = newEvent;
        this.eventsChanged.next(this.events.slice());
    }

    deleteEvent(index: number) {
        this.events.splice(index, 1);
        this.eventsChanged.next(this.events.slice());
    }
}