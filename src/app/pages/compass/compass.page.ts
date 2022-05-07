import { Component, OnInit } from '@angular/core';
import {
  DeviceOrientation,
  DeviceOrientationCompassHeading,
} from '@awesome-cordova-plugins/device-orientation/ngx';
import {
  Geolocation,
  Geoposition,
} from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-compass',
  templateUrl: './compass.page.html',
  styleUrls: ['./compass.page.scss'],
})
export class CompassPage implements OnInit {
  public data: DeviceOrientationCompassHeading = null;
  public currentLocation: any = null;
  private location: { lat: number; lng: number } = {
    lat: 21.42323,
    lng: 39.8256687,
  };
  public loc = 0;

  constructor(
    private deviceOrientation: DeviceOrientation,
    private geolocation: Geolocation
  ) {
    this.deviceOrientation
      .watchHeading()
      .subscribe((res: DeviceOrientationCompassHeading) => {
        this.data = res;
        if (!!this.currentLocation) {
          const curLocation = res.magneticHeading - this.getPosition();
          this.loc = curLocation > 360 ? curLocation % 360 : curLocation;
        }
      });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((res) => {
      this.currentLocation = res;
    });
  }

  getPosition() {
    // Convert all geopoint degree to radian before jump to furmula
    const currentLocationLat = this.degreeToRadian(
      this.currentLocation.coords.latitude
    );
    const currentLocationLng = this.degreeToRadian(
      this.currentLocation.coords.longitude
    );
    const locationLat = this.degreeToRadian(this.location.lat);
    const locationLong = this.degreeToRadian(this.location.lng);

    // Use Basic Spherical Trigonometric Formula
    return this.radianToDegree(
      Math.atan2(
        Math.sin(locationLong - currentLocationLng),
        Math.cos(currentLocationLat) * Math.tan(locationLat) -
          Math.sin(currentLocationLat) *
            Math.cos(locationLong - currentLocationLng)
      )
    );
  }

  radianToDegree(radian: number) {
    return (radian * 180) / Math.PI;
  }

  degreeToRadian(degree: number) {
    return (degree * Math.PI) / 180;
  }

  ngOnInit() {}
}
