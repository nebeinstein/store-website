import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EventsRoutingModule } from './events-routing.module';

import { EventsComponent } from './events.component';
import { EventItemComponent } from './events-list/event-list/event-item/event-item.component';
import { EventListComponent } from './events-list/event-list/event-list.component';
import { EventsCalendarComponent } from './events-calendar/events-calendar.component';
import { EventsListComponent } from './events-list/events-list.component';

@NgModule({
    declarations: [
        EventsComponent,
        EventItemComponent,
        EventListComponent,
        EventsCalendarComponent,
        EventsListComponent
    ],
    imports: [
        CommonModule,
        EventsRoutingModule
    ],
    exports: []
})
export class EventsModule { }