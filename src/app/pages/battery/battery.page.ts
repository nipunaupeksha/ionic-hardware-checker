import { Component, OnInit } from '@angular/core';
import { BatteryStatus } from '@awesome-cordova-plugins/battery-status/ngx';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';
import { interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-battery',
  templateUrl: './battery.page.html',
  styleUrls: ['./battery.page.scss'],
})
export class BatteryPage implements OnInit {
  constructor(
    private batteryStatus: BatteryStatus,
    private flashlight: Flashlight
  ) {}

  private level: number;
  private isPlugged: boolean;
  private subscription: Subscription;
  private flash: boolean = false;

  private batterySubscription: any;

  ngOnInit() {
    this.checkBattery();
    const source = interval(10000);
    this.subscription = source.subscribe((val) => this.checkBattery());
  }

  checkBattery() {
    this.batterySubscription = this.batteryStatus
      .onChange()
      .subscribe((status) => {
        this.level = status.level;
        this.isPlugged = status.isPlugged;
        if (this.level < 50) {
          this.flashlight.switchOn();
          this.flash = true;
        } else {
          this.flashlight.switchOff();
          this.flash = true;
        }
      });
  }

  stopCheckBattery() {
    this.batterySubscription.unsubscribe();
  }
}
