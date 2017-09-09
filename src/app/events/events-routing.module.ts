import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventsComponent } from './events.component';
import { EventsCalendarComponent } from './events-calendar/events-calendar.component';
import { EventsListComponent } from './events-list/events-list.component';

const eventsRoutes: Routes = [
    { path: '', component: EventsComponent, children: [
        { path: '', redirectTo: 'events-list', pathMatch: 'full'},
        { path: 'events-list', component: EventsListComponent },
        { path: 'events-calendar', component: EventsCalendarComponent }
    ] }
];

@NgModule({
    imports: [RouterModule.forChild(eventsRoutes)],
    exports: [RouterModule]
})
export class EventsRoutingModule { }