import {Injectable, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import * as Hammer from 'hammerjs';
import {
  HammerModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG}
  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  override overrides = <any> {
    swipe: { direction: Hammer.DIRECTION_ALL },
    'pinch': { enable: false },
    'rotate': { enable: false }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,HammerModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
