import { Injectable } from '@angular/core';
import slidesData from '../../../assets/slider.json'
@Injectable({
    providedIn: 'root',
})
export class SliderService {

    constructor() {
    }

    getSlides() {
        return slidesData;
    }

}
