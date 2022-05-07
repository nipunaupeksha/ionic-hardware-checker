import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-text-to-speech',
  templateUrl: './text-to-speech.page.html',
  styleUrls: ['./text-to-speech.page.scss'],
})
export class TextToSpeechPage implements OnInit {
  text: string = '';
  constructor(private tts: TextToSpeech) {}

  ngOnInit() {}

  convertTextToSpeech(t) {
    this.tts
      .speak({
        text: t,
        locale: 'en-US',
        rate: 0.75,
      })
      .then(() => console.log('Done'))
      .catch((reason: any) => console.log(reason));
  }
}
