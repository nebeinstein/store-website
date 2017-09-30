import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { SlideShowItemComponent } from './slide-show/slide-show-item/slide-show-item.component';

@NgModule({
    declarations: [
        HomeComponent,
        SlideShowComponent,
        SlideShowItemComponent
    ],
    imports: [
        CommonModule
    ],
    exports: []
})
export class HomeModule { }