import { Component, OnInit } from '@angular/core';
import {SliderService} from "./slider.service";
import {Slide} from "../../../assets/models/slide.model";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  slides: Slide[] = [];
  slideIndex = 0;
  constructor(private sliderService: SliderService) { }

  ngOnInit(): void {
    this.slides = this.sliderService.getSlides();
    this.showSlide(this.slideIndex);
  }

    showSlide(index:number) {
        this.slideIndex = index;
    }

  onSwipe($event:any) {
    if($event.direction === 4) {
      if(this.slideIndex > 0) {
        this.showSlide(this.slideIndex = this.slideIndex - 1);
      }
    } else if($event.direction === 2){
      if(this.slideIndex < 6) {
        this.showSlide(this.slideIndex = this.slideIndex + 1);
      }
    }
  }
}
