import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Device Info', url: 'device-info', icon: 'call' },
    { title: 'Text-to-Speech', url: 'text-to-speech', icon: 'mic' },
    { title: 'Audio Player', url: 'audio-player', icon: 'musical-notes' },
    { title: 'Compass', url: 'compass', icon: 'compass' },
    { title: 'Charge', url: 'battery', icon: 'battery-charging' },
  ];
  constructor() {}
}
