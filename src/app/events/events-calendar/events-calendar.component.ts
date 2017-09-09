import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { CalendarService } from './calendar.service';

@Component({
    selector: 'sw-calendar',
    templateUrl: './events-calendar.component.html',
    styleUrls: ['./events-calendar.component.css']
})
export class EventsCalendarComponent implements OnInit, OnDestroy {
    currentDate: Date;
    currentMonth: number;
    currentYear: number;
    daysInCurrentMonth: number[];
    subscription: Subscription;
    
    constructor(private calendarService: CalendarService) { }

    ngOnInit() {
        this.subscription = this.calendarService.currentDateChanged
        .subscribe(
            (currentDate: Date) => {
                this.currentDate = currentDate;
                this.currentMonth = this.currentDate.getMonth();
                this.currentYear = this.currentDate.getFullYear();
                this.daysInCurrentMonth = this.calendarService.getDaysInMonth(this.currentDate.getMonth(), this.currentYear);
            }
        );
        this.currentDate = this.calendarService.getCurrentDate();
        this.currentMonth = this.currentDate.getMonth();
        this.currentYear = this.currentDate.getFullYear();
        this.daysInCurrentMonth = this.calendarService.getDaysInMonth(this.currentDate.getMonth(), this.currentYear);
    }

    onPrevMonth() {
        this.calendarService.setCurrentMonth(this.currentMonth - 1);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}