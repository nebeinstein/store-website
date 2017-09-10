import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { EventModel } from '../../event.model';
import { EventService } from '../../event.service';

@Component({
    selector: 'sw-event-detail',
    templateUrl: './event-detail.component.html',
    styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
    event: EventModel;
    id: number;
    
    constructor(private eventService: EventService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.event = this.eventService.getEventByIndex(this.id);
            }
        )
    }
}