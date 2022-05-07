import { Component, OnInit } from '@angular/core';
import { Device } from '@awesome-cordova-plugins/device/ngx';

@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.page.html',
  styleUrls: ['./device-info.page.scss'],
})
export class DeviceInfoPage implements OnInit {
  private model: string = '';
  private os: string = '';
  private version: string = '';
  private serial: string = '';
  private manufacturer: string = '';
  private cor: string = '';

  constructor(private device: Device) {}

  ngOnInit() {
    this.model = this.device.model;
    this.os = this.device.platform;
    this.version = this.device.version;
    this.serial = this.device.serial;
    this.manufacturer = this.device.manufacturer;
    this.cor = this.device.cordova;
  }
}
