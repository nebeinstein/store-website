import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { SlideShowComponent } from './slide-show/slide-show.component';

@NgModule({
    declarations: [
        HomeComponent,
        SlideShowComponent
    ],
    imports: [
        CommonModule
    ],
    exports: []
})
export class HomeModule { }