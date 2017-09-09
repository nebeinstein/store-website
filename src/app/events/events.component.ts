import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'sw-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css']
})
export class EventsComponent {
    constructor(private router: Router) {
    }

    onNavigateTo(path: string) {
        this.router.navigate([path]);
    }
}