import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Device } from '@awesome-cordova-plugins/device/ngx';
import {TextToSpeech} from '@ionic-native/text-to-speech/ngx';
import {NativeAudio} from '@awesome-cordova-plugins/native-audio/ngx';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@awesome-cordova-plugins/device-orientation/ngx';
import {Geolocation} from '@awesome-cordova-plugins/geolocation/ngx';
import {BatteryStatus} from '@awesome-cordova-plugins/battery-status/ngx';
import {Flashlight} from '@awesome-cordova-plugins/flashlight/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Device, TextToSpeech, NativeAudio, Geolocation, DeviceOrientation, BatteryStatus, Flashlight],
  bootstrap: [AppComponent],
})
export class AppModule {}
