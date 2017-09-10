import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './core/home/home.component';
import { EventsComponent } from './events/events.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'events', loadChildren: './events/events.module#EventsModule' },
    { path: 'contact', component: ContactComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule { }