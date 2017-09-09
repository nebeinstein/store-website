import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { EventsComponent } from './events/events.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'events', component: EventsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }