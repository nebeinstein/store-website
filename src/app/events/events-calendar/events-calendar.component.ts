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
    currentMonthName: string;
    currentYear: number;
    daysInCurrentMonth: number[];
    dateSubscription: Subscription;
    today: Date;
    
    constructor(private calendarService: CalendarService) { }

    ngOnInit() {
        this.dateSubscription = this.calendarService.currentDateChanged
        .subscribe(
            (currentDate: Date) => {
                this.currentDate = currentDate;
                this.currentMonthName = this.calendarService.getMonthName(this.currentDate.getMonth());
                this.currentYear = this.currentDate.getFullYear();
                this.daysInCurrentMonth = this.calendarService.getDaysInMonth(this.currentDate.getMonth(), this.currentYear);
            }
        );
        this.today = this.calendarService.getToday();
        this.currentDate = this.calendarService.getCurrentDate();
        this.currentMonthName = this.calendarService.getMonthName(this.currentDate.getMonth());
        this.currentYear = this.currentDate.getFullYear();
        this.daysInCurrentMonth = this.calendarService.getDaysInMonth(this.currentDate.getMonth(), this.currentDate.getFullYear());
    }

    onPrevMonth() {
        this.calendarService.setCurrentMonth(this.currentDate.getMonth() - 1);
    }

    onNextMonth() {
        this.calendarService.setCurrentMonth(this.currentDate.getMonth() + 1);
    }

    ngOnDestroy() {
        this.dateSubscription.unsubscribe();
    }
}