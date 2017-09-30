import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { EventModel } from '../../events/event.model';
import { EventService } from '../../events/event.service';

@Component({
    selector: 'sw-slide-show',
    templateUrl: './slide-show.component.html',
    styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit, OnDestroy {
    el;
    slideIndex = 1;
    slides;
    dots;
    subscription: Subscription;
    events: EventModel[];
    indexChanged = new Subject<number>();

    constructor(private elRef: ElementRef, private eventService: EventService){
        this.el = elRef.nativeElement;
    }

    ngOnInit() {
        this.slides = this.el.getElementsByClassName('mySlides');
        this.dots = this.el.getElementsByClassName('dot');
        this.showSlides(this.slideIndex);

        this.subscription = this.eventService.eventsChanged.subscribe(
            (events: EventModel[]) => {
                this.events = events;
            }
        );
        this.events = this.eventService.getEvents();
    }

    plusSlides(n: number) {
        console.log('Plus Slide: ' + n);
        this.showSlides(this.slideIndex += n);
        this.indexChanged.next(this.slideIndex);
    }

    currentSlide(n: number) {
        this.showSlides(this.slideIndex = n);
    }

    showSlides(n: number) {
        if (n > this.slides.length) {
            this.slideIndex = 1
        }
        if (n < 1) {
            this.slideIndex = this.slides.length;
        }
        var i = 0;
        while (i < this.slides.length) {
            this.slides[i].style.display = "none";
            i+=1;
        }
        var j = 0;
        while (j < this.dots.length) {
            this.dots[j].className = this.dots[j].className.replace(' active', '');
            j+=1;
        }
        this.slides[this.slideIndex-1].style.display="block";
        this.dots[this.slideIndex-1].className += " active";
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}