import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventsComponent } from './events.component';
import { EventDetailComponent } from './events-list/event-detail/event-detail.component';
import { EventsCalendarComponent } from './events-calendar/events-calendar.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventStartComponent } from './events-list/event-start/event-start.component';

const eventsRoutes: Routes = [
    { path: '', component: EventsComponent, children: [
        { path: '', redirectTo: 'list', pathMatch: 'full'},
        { path: 'list', component: EventsListComponent, children: [
            { path: '', component: EventStartComponent },
            { path: ':id', component: EventDetailComponent}
        ] },
        { path: 'calendar', component: EventsCalendarComponent, children: [
            { path: ':id', component: EventsCalendarComponent }
        ] }
    ] }
];

@NgModule({
    imports: [RouterModule.forChild(eventsRoutes)],
    exports: [RouterModule]
})
export class EventsRoutingModule { }