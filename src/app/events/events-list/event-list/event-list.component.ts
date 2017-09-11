import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { EventModel } from '../../event.model';
import { EventsListService } from '../events-list.service';

@Component({
    selector: 'sw-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit, OnDestroy {
    events: EventModel[];
    todaysEvents: EventModel[];
    thisWeeksEvents: EventModel[];
    subscription: Subscription;

    constructor(private eventsListService: EventsListService) { }

    ngOnInit() {
        this.subscription = this.eventsListService.eventsChanged
        .subscribe(
            (events: EventModel[][]) => {
                this.todaysEvents = this.eventsListService.getTodaysEvents();
            }
        );
        this.todaysEvents = this.eventsListService.getTodaysEvents();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}