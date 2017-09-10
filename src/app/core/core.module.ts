import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { DropdownDirective } from '../shared/dropdown.directive';

import { EventService } from '../events/event.service';
import { CalendarService } from '../events/events-calendar/calendar.service';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
        DropdownDirective
    ],
    imports: [
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [
        EventService,
        CalendarService
    ]
})
export class CoreModule { }