import { Component, OnInit } from '@angular/core';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';

export interface Track {
  id: string;
  name: string;
  path: string;
  isPlaying: boolean;
}

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.page.html',
  styleUrls: ['./audio-player.page.scss'],
})
export class AudioPlayerPage implements OnInit {
  private playlist: Track[] = [
    {
      id: '1',
      name: 'Andakare Man',
      path: '../../assets/mp3/1.mp3',
      isPlaying: true,
    },
    {
      id: '2',
      name: 'Isk Risk',
      path: '../../assets/mp3/2.mp3',
      isPlaying: true,
    },
  ];

  private rangeVal: number = 100;

  constructor(private nativeAudio: NativeAudio) {
    for (let i = 0; i < this.playlist.length; i++) {
      this.nativeAudio.preloadComplex(
        'unique' + this.playlist[i].id,
        this.playlist[i].path,
        this.rangeVal/100,
        1,
        0
      );
    }
  }

  ngOnInit() {}

  play(audio: Track) {
    this.nativeAudio.play('unique' + audio.id);
    for (let i = 0; i < this.playlist.length; i++) {
      this.playlist[i].isPlaying = null;
    }
    audio.isPlaying = false;
  }

  pause(audio: Track) {
    this.nativeAudio.stop('unique' + audio.id);
    for (let i = 0; i < this.playlist.length; i++) {
      this.playlist[i].isPlaying = true;
    }
    audio.isPlaying = true;
  }

  setVolume() {
    for (let i = 0; i < this.playlist.length; i++) {
      this.nativeAudio.setVolumeForComplexAsset(
        'unique' + this.playlist[i].id,
        this.rangeVal / 100
      );
    }

    console.log(this.rangeVal/100);
  }
}
