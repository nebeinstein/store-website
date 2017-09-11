import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { CalendarService } from '../events-calendar/calendar.service';
import { EventModel } from '../event.model';
import { EventService } from '../event.service';

@Injectable()
export class EventsListService implements OnInit, OnDestroy {
    today: Date;
    eventSubscription: Subscription;
    todaysEvents: EventModel[];
    thisWeeksEvents: EventModel[];
    thisMonthsEvents: EventModel[];
    eventsChanged = new Subject<EventModel[][]>();

    constructor(private eventService: EventService,
                private calendarService: CalendarService) {
    }

    ngOnInit() {
        this.eventSubscription = this.eventService.eventsChanged
        .subscribe(
            (events: EventModel[]) => {
                this.todaysEvents = this.findTodaysEvents();
                this.eventsChanged.next([this.todaysEvents, this.thisWeeksEvents, this.thisMonthsEvents]);
                // this.findThisWeeksEvents();
                // this.findThisMonthsEvents();
            }
        );
        this.today = this.calendarService.getToday();
        this.todaysEvents = this.findTodaysEvents();
        this.eventsChanged.next([this.todaysEvents, this.thisWeeksEvents, this.thisMonthsEvents]);
        // this.findThisWeeksEvents();
        // this.findThisMonthsEvents();
    }

    private findTodaysEvents() {
        var today = this.calendarService.getToday();
        return this.eventService.getEventsByDate(today);
    }

    private findThisWeeksEvents() {
        var startDate = this.calendarService.getToday();
        startDate.setDate(startDate.getDate() + 1);
        var endDate = startDate;
        while (endDate.getDay() < 7) {
            endDate.setDate(endDate.getDate() + 1)
        }
        this.thisWeeksEvents = this.eventService.getEventsInWindow(startDate, endDate);
        this.eventsChanged.next([this.todaysEvents, this.thisWeeksEvents, this.thisMonthsEvents]);
    }

    private findThisMonthsEvents() {
        var startDate = this.calendarService.getToday();
        var endDate = startDate;
        let month = startDate.getMonth();
        while (endDate.getMonth() === month) {
            endDate.setDate(endDate.getDate() + 1)
        }
        this.thisMonthsEvents = this.eventService.getEventsInWindow(startDate, endDate);
        this.eventsChanged.next([this.todaysEvents, this.thisWeeksEvents, this.thisMonthsEvents]);
    }

    getTodaysEvents() {
        return this.todaysEvents;
    }

    getThisWeeksEvents() {
        return this.thisWeeksEvents;
    }

    getThisMonthsEvents() {
        return this.thisMonthsEvents;
    }

    ngOnDestroy() {
        this.eventSubscription.unsubscribe();
    }
}