import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { CalendarService } from '../calendar.service';
import { DayModel } from '../day.model';
import { EventService } from '../../event.service';

@Component({
    selector: 'sw-calendar-day',
    templateUrl: './calendar-day.component.html',
    styleUrls: ['./calendar-day.component.css']
})
export class CalendarDayComponent implements OnInit, OnDestroy {
    @Input() value;
    today: Date;
    currentDate: DayModel;
    // currentDate: Date;
    subscription: Subscription;

    constructor(private calendarService: CalendarService,
                private eventService: EventService) {
    }

    ngOnInit() {
        this.subscription = this.calendarService.currentDateChanged
        .subscribe(
            (currentDate: Date) => {
                this.currentDate.day = currentDate;
                this.currentDate.events = this.eventService.getEventsByDate(this.currentDate.day);
            }
        );
        this.today = this.calendarService.getToday();
        this.currentDate = new DayModel(this.calendarService.getCurrentDate(), this.eventService.getEventsByDate(this.calendarService.getCurrentDate()));
    }

    isMonthCorrect() {
        return this.currentDate.day.getMonth() === this.today.getMonth();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}