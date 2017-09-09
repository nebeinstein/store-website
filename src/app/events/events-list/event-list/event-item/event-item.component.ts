import { Component, Input } from '@angular/core';

import { EventModel } from '../../../event.model';

@Component({
    selector: 'sw-event-item',
    templateUrl: './event-item.component.html',
    styleUrls: ['./event-item.component.css']
})
export class EventItemComponent {
    @Input() event: EventModel;
    @Input() index: number;
}