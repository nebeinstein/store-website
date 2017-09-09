import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EventsRoutingModule } from './events-routing.module';

import { EventsComponent } from './events.component';
import { EventsCalendarComponent } from './events-calendar/events-calendar.component';
import { EventsListComponent } from './events-list/events-list.component';

@NgModule({
    declarations: [
        EventsComponent,
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