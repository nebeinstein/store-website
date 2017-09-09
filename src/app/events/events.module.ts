import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EventsRoutingModule } from './events-routing.module';

import { EventsComponent } from './events.component';
import { CalendarDayComponent } from './events-calendar/calendar-day/calendar-day.component';
import { EventDetailComponent } from './events-list/event-detail/event-detail.component';
import { EventItemComponent } from './events-list/event-list/event-item/event-item.component';
import { EventListComponent } from './events-list/event-list/event-list.component';
import { EventsCalendarComponent } from './events-calendar/events-calendar.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventStartComponent } from './events-list/event-start/event-start.component';

import { TimePipe } from './time.pipe';

@NgModule({
    declarations: [
        EventsComponent,
        CalendarDayComponent,
        EventDetailComponent,
        EventItemComponent,
        EventListComponent,
        EventsCalendarComponent,
        EventsListComponent,
        EventStartComponent,
        TimePipe
    ],
    imports: [
        CommonModule,
        EventsRoutingModule
    ],
    exports: []
})
export class EventsModule { }