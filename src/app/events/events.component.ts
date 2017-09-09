import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'sw-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css']
})
export class EventsComponent {
    constructor(private route: ActivatedRoute,
                private router: Router) {
    }

    onNavigateTo(path: string) {
        this.router.navigate([path], {relativeTo: this.route});
    }
}