import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { CalendarService } from '../calendar.service';

@Component({
    selector: 'sw-calendar-day',
    templateUrl: './calendar-day.component.html',
    styleUrls: ['./calendar-day.component.css']
})
export class CalendarDayComponent implements OnInit, OnDestroy {
    @Input() value;
    today: Date;
    month: number;
    subscription: Subscription;

    constructor(private calendarService: CalendarService) { }

    ngOnInit() {
        this.subscription = this.calendarService.currentDateChanged
        .subscribe(
            (currentDate: Date) => {
                this.month = this.calendarService.getCurrentMonth();
            }
        );
        this.today = this.calendarService.getToday();
        this.month = this.calendarService.getCurrentMonth();
    }

    isMonthCorrect() {
        return this.calendarService.getCurrentMonth() === this.today.getMonth();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}