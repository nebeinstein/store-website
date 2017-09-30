import { Component, Input } from '@angular/core';

import { EventModel } from '../../../events/event.model';

@Component({
    selector: 'sw-slide-show-item',
    templateUrl: './slide-show-item.component.html',
    styleUrls: ['./slide-show-item.component.css']
})
export class SlideShowItemComponent {
    @Input() event: EventModel;
}