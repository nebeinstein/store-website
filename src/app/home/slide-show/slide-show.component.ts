import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
    selector: 'sw-slide-show',
    templateUrl: './slide-show.component.html',
    styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit {
    el;
    slideIndex = 1;
    slides;
    dots;

    constructor(private elRef: ElementRef){
        this.el = elRef.nativeElement;
    }

    ngOnInit() {
        this.slides = this.el.getElementsByClassName('mySlides');
        this.dots = this.el.getElementsByClassName('dot');
        this.showSlides(this.slideIndex);
    }

    plusSlides(n: number) {
        console.log('Plus Slide: ' + n);
        this.showSlides(this.slideIndex += n);
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
}