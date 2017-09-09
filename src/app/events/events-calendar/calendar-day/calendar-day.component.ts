import { Component, Input } from '@angular/core';

@Component({
    selector: 'sw-calendar-day',
    templateUrl: './calendar-day.component.html',
    styleUrls: ['./calendar-day.component.css']
})
export class CalendarDayComponent {
    @Input() value;
}