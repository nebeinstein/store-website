import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { EventModel } from '../../event.model';
import { EventService } from '../../event.service';

@Component({
    selector: 'sw-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit, OnDestroy {
    events: EventModel[];
    subscription: Subscription;

    constructor(private eventService: EventService) { }

    ngOnInit() {
        this.subscription = this.eventService.eventsChanged
        .subscribe(
            (events: EventModel[]) => {
                this.events = events;
            }
        );
        this.events = this.eventService.getEvents();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}