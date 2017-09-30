import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'events', loadChildren: './events/events.module#EventsModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule { }