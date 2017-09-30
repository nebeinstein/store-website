import { state, style, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

import { EventModel } from '../../../events/event.model';

@Component({
    selector: 'sw-slide-show-item',
    templateUrl: './slide-show-item.component.html',
    styleUrls: ['./slide-show-item.component.css'],
    animations: [
        trigger('itemState', [
            state('hidden', style({
                display: 'none'
            })),
            state('shown', style({
                display: 'block'
            }))
        ])
    ]
})
export class SlideShowItemComponent {
    @Input() event: EventModel;
    @Input() index: number;
    @Input() slideIndex: number;
    state = 'hidden';

    onShowSlides() {
        this.index == this.slideIndex ? this.state = 'shown' : this.state = 'hidden';
    }
}